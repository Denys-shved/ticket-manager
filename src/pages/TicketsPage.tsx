// ============================================================
// REACT IMPORTS
// ============================================================

// React потрібен для роботи з JSX
import React from "react"

// React Hooks
// useState — зберігає стан компонента
// useEffect — виконує побічні дії після рендеру
import { useEffect, useState } from "react"


// ============================================================
// SERVICES / UTILS
// ============================================================

// TicketManager відповідає за роботу з tickets:
// - завантаження з API
// - створення
// - зміна статусу
// - видалення
// import { ticketManager } from "../services/TicketManager"

// Перевіряє дані перед створенням ticket
import { validateTicketData } from "../utils/validation"

import { getTickets, createTicket, updateTicket, deleteTicket } from "../api/ticketApi"


// ============================================================
// TYPES
// ============================================================

// TypeScript-типи, які використовуються на цій сторінці
import {
    CreateTicketData,
    Ticket,
    CreateTicketResult,
    StatusFilter
} from "../types/ticket"


// ============================================================
// COMPONENTS
// ============================================================

// Форма створення нового ticket
import { CreateTicket } from "../components/Ticket"

// Список tickets
// Усередині нього кожен ticket відображається через TicketComponent
import { TicketList } from "../components/TicketList"

// Навігація
import { useNavigate } from "react-router-dom"

import { ApiError } from "../api/ticketApi"

// import { login } from "../api/ticketApi"
// // login("test@test.com", "12345678")
// //     .then(data => console.log(data))
// //     .catch(error => console.log(error))
// login("test@test.com", "12345678")
//     .then(data => {
//         localStorage.setItem("token", data.token)
//         console.log("Token saved")
//     })
//     .catch(error => console.log(error))


// ============================================================
// TICKETS PAGE
// ============================================================

export function TicketsPage() {

    // --------------------------------------------------------
    // FILTER STATE
    // --------------------------------------------------------

    // Поточний фільтр за статусом.
    //
    // "all" означає, що фільтр за статусом не застосовується.
    const [statusFilter, setStatusFilter] =
        useState<StatusFilter>("all")


    // Текст, який користувач вводить у поле пошуку.
    const [searchQuery, setSearchQuery] =
        useState("")


    // --------------------------------------------------------
    // TICKETS STATE
    // --------------------------------------------------------

    // Список tickets, який використовується React для відображення UI.
    const [tickets, setTickets] =
        useState<Ticket[]>([])


    // Показуємо Loading..., поки отримуємо tickets з API.
    const [isLoading, setIsLoading] =
        useState(true)


    // Тут зберігаємо повідомлення про помилку.
    const [error, setError] =
        useState("")

    // Екземпляр навігації
    const navigate = useNavigate()
    
    // useEffect(() => {
    // const token = localStorage.getItem("token")

    // if (!token) {
    //     navigate("/login")
    // }
    // }, [navigate])
    // ========================================================
    // LOAD TICKETS
    // ========================================================

    // useEffect запускається після першого рендеру компонента.
    //
    // [] означає, що effect запускається один раз
    // після монтування TicketsPage.
    useEffect(() => {

        // Окрема async-функція для завантаження tickets.
        async function loadTickets() {

            try {

               const tickets = await getTickets()
               setTickets(tickets)

            } catch (error) {
            if (error instanceof ApiError && error.status === 401) {
                localStorage.removeItem("token")
                navigate("/login")
                return
            }

            setError("Failed to load tickets")
        } finally {

                // Завершуємо loading незалежно від результату.
                setIsLoading(false)
            }
        }


        // Запускаємо завантаження tickets.
        loadTickets()

    }, [])


    // ========================================================
    // LOADING / ERROR STATES
    // ========================================================

    // Поки tickets завантажуються,
    // показуємо користувачу Loading...
    if (isLoading) {
        return <p>Loading...</p>
    }


    // Якщо під час завантаження сталася помилка,
    // показуємо повідомлення про неї.
    if (error) {
        return <p>{error}</p>
    }


    // ========================================================
    // CREATE TICKET
    // ========================================================

    // Функція отримує дані з форми CreateTicket.
    //
    // Вона:
    // 1. перевіряє дані
    // 2. створює ticket через TicketManager
    // 3. додає створений ticket у React state
    // 4. повертає результат CreateTicket компоненту
    async function handleCreate(
        data: CreateTicketData
    ): Promise<CreateTicketResult> {

        // Перевіряємо title та description.
        const error = validateTicketData(data)


        // Якщо дані неправильні,
        // повертаємо помилку у CreateTicket.
        if (error) {

            console.log(error)

            return {
                success: false,
                error: error
            }
        }


        try {

            const ticket = await createTicket(data)


            // Додаємо новий ticket у React state.
            //
            // prevTickets — попередній стан tickets.
            setTickets(prevTickets => [
                ...prevTickets,
                ticket
            ])


            // Повідомляємо CreateTicket,
            // що створення завершилося успішно.
            return {
                success: true
            }

        } catch (error) {

            // Якщо сталася помилка API або TicketManager.
            console.log(error)

            return {
                success: false,
                error: "Failed to create ticket"
            }
        }
    }


    // ========================================================
    // FILTER TICKETS
    // ========================================================

    // Створюємо новий масив тільки з tickets,
    // які відповідають пошуку та вибраному статусу.
    const filteredTickets = tickets.filter(ticket => {

        // Перевіряємо, чи title ticket містить
        // текст, який ввів користувач.
        //
        // toLowerCase() робить пошук нечутливим до регістру.
        const matchesSearch =
            ticket.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase())


        // Перевіряємо статус.
        //
        // Якщо вибрано "all" — підходить будь-який ticket.
        // Інакше статус ticket повинен збігатися з фільтром.
        const matchesStatus =
            statusFilter === "all" ||
            ticket.status === statusFilter


        // Ticket залишиться у filteredTickets,
        // тільки якщо він відповідає ОБОМ умовам.
        return matchesStatus && matchesSearch
    })


    // ========================================================
    // UI
    // ========================================================

    
    function handleLogout() {
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <div>

            {/* ------------------------------------------------
                CREATE TICKET FORM
                ------------------------------------------------

                CreateTicket відповідає за форму.

                TicketsPage передає:
                - title
                - handleCreate
                - callback після створення
            */}

            <CreateTicket
                title="New&nbsp;Ticket"
                

                // Функція, яка буде викликана при створенні.
                onCreate={handleCreate}

                // Виконується після успішного створення.
                onCreated={() => {
                    console.log("Ticket створений")
                }}
            />

            {/* ------------------------------------------------
                SEARCH
                ------------------------------------------------

                Controlled input.

                value бере значення із searchQuery.
                onChange змінює searchQuery.
            */}

            <input
                type="text"
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) =>
                    setSearchQuery(e.target.value)
                }
            />


            {/* ------------------------------------------------
                STATUS FILTER
                ------------------------------------------------

                Controlled select.

                statusFilter зберігає поточний вибраний статус.
                setStatusFilter змінює його.
            */}

            <select
                value={statusFilter}
                onChange={(e) =>
                    setStatusFilter(
                        e.target.value as StatusFilter
                    )
                }
            >
                <option value="all">All</option>
                <option value="new">New</option>
                <option value="in-progress">
                    In Progress
                </option>
                <option value="completed">
                    Completed
                </option>
                <option value="cancelled">
                    Cancelled
                </option>
            </select>


            {/* ------------------------------------------------
                TICKETS COUNTER
                ------------------------------------------------

                Показує:
                скільки tickets зараз відображається
                із загальної кількості.
            */}

            <p>
                Showing {filteredTickets.length} of {tickets.length} tickets
            </p>

            
            <button onClick={handleLogout}>
                Logout
            </button>

            {/* ------------------------------------------------
                TICKET LIST
                ------------------------------------------------

                TicketList отримує вже відфільтрований список.

                Також передаємо callback-функції:
                - Complete
                - Cancel
                - Delete
            */}

            <TicketList
                tickets={filteredTickets}


                // ------------------------------------------------
                // COMPLETE
                // ------------------------------------------------

                onComplete={async (id) => {

                    // // Змінюємо status ticket через TicketManager.
                    // await ticketManager.completeTicket(id)

                    // // Отримуємо оновлений список
                    // // і передаємо його в React state.
                    // setTickets([
                    //     ...ticketManager.tickets
                    // ])
                    const updatedTicket = await updateTicket(id, {
                        status: "completed"
                    })

                    setTickets(prevTickets =>
                        prevTickets.map(ticket =>
                            ticket.id === id ? updatedTicket : ticket
                        )
                    )
                }}


                // ------------------------------------------------
                // CANCEL
                // ------------------------------------------------

                onCancel={async (id) => {

                    // // Змінюємо status ticket на cancelled.
                    // await ticketManager.cancelTicket(id)

                    // // Оновлюємо React state.
                    // setTickets([
                    //     ...ticketManager.tickets
                    // ])
                    const updatedTicket = await updateTicket(id, {
                        status: "cancelled"
                    })

                    setTickets(prevTickets =>
                        prevTickets.map(ticket =>
                            ticket.id === id ? updatedTicket : ticket
                        )
                    )
                }}


                // ------------------------------------------------
                // DELETE
                // ------------------------------------------------

                onDelete={async (id) => {
                    await deleteTicket(id)

                    setTickets(prevTickets =>
                        prevTickets.filter(ticket => ticket.id !== id)
                    )
                }}
            />

        </div>
    )
}