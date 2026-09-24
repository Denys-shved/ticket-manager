
// import { Ticket, TicketPriority, CreateTicketData } from "./types/ticket"
import { TicketManager } from "./services/TicketManager"
import { validateTicketData } from "./utils/validation"
// import { renderTicket } from "./ui/renderTicket"
import { formatTicketDate } from "./ui/ticketUtils"
// import { deleteTicket, getTickets, updateTicket } from "./api/ticketApi"
import React from "react"
import { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { CreateTicketData, Ticket, TicketPriority, CreateTicketResult } from "./types/ticket"
import { CreateTicket } from "./components/Ticket"
import { TicketList } from "./components/TicketList"


// // ============================================================
// // HELPER FUNCTIONS
// // ============================================================



// // Виводить ticket у console
// function printTicket(ticket: Ticket) {
//     console.log(
//         "Ticket #" + ticket.id,
//         ticket.title,
//         "Status: " + ticket.status,
//         "Priority: " + ticket.priority,
//         "Description: " + ticket.description,
//         "Created: " + formatTicketDate(ticket.createdAt)
//     )
// }


// // ============================================================
// // TICKET MANAGER
// // ============================================================




// // ============================================================
// // DOM ELEMENTS
// // ============================================================

// // Знаходимо елементи HTML, з якими будемо працювати

// const form = document.querySelector("#ticket-form")
// console.log(form)

// const titleInput = document.querySelector<HTMLInputElement>("#ticket-title")
// console.log(titleInput)

// const descriptionInput = document.querySelector<HTMLTextAreaElement>("#ticket-description")
// console.log(descriptionInput)

// const priorityInput = document.querySelector<HTMLSelectElement>("#ticket-priority")
// console.log(priorityInput)

const ticketsContainer = document.querySelector<HTMLDivElement>("#tickets-container")

// // Створюємо один екземпляр TicketManager
// // Саме він буде зберігати всі ticket'и
// const ticketManager = new TicketManager()

// console.log("Before API:", ticketManager.tickets)

// async function init() {
//     await ticketManager.loadTicketsFromApi()

//     console.log("After API:", ticketManager.tickets)
//     console.log("Next ID:", ticketManager.nextId)
//     // Після створення ticketManager взяти всі 
//     // завантажені tickets і відрендерити їх
//     ticketManager.tickets.forEach((ticket)=>{
//             renderTicket(ticket, ticketManager, ticketsContainer!)
//         })
// }

// init()



// // ============================================================
// // FORM SUBMIT
// // ============================================================

// // Обробляємо відправку форми
// form?.addEventListener("submit", async (event) => {

//     // Забороняємо браузеру перезавантажувати сторінку
//     event.preventDefault()


//     // Перевіряємо, чи всі необхідні DOM-елементи існують
//     if (!titleInput || !descriptionInput || !priorityInput) {
//         return
//     }

//     // Збираємо дані з форми
//     const data: CreateTicketData = {
//         title: titleInput.value.trim(),
//         description: descriptionInput.value.trim(),
//         priority: priorityInput.value as TicketPriority
//     }

//     const error = validateTicketData(data)

//     if (error) {
//         alert(error)
//         return
//     }

//     // --------------------------------------------------------
//     // CREATE TICKET
//     // --------------------------------------------------------

//     // Передаємо дані в TicketManager
//     const ticket = await ticketManager.createTicket(data)

//     // Після створення ticket показуємо його на сторінці
//     renderTicket(ticket, ticketManager, ticketsContainer!)

   

//     // Перевіряємо результат у console
//     console.log(ticket)
//     console.log(ticketManager.tickets)
//     console.log(ticketManager.getTicketsCount())
// })

// // fetch("https://jsonplaceholder.typicode.com/todos/1")

// // console.log(fetch("https://jsonplaceholder.typicode.com/todos/1"))

// async function getTodo(){
//     try{const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         if(!response.ok){
//         console.log("Request failed")
//         return
//         }
//         const todo = await response.json()
//         console.log(todo)
//         console.log(`Todo: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`)
//     }
//     catch(error){
//         console.log("Network error")
//     }
// }

// getTodo()

// async function createTodo() {
//     try{const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: "New Todo", completed: false })        
//     })
//     if(!response.ok){
//         console.log("Request failed")
//         return
//     }
//     const todo = await response.json()
//     console.log(todo)
//     }      
//     catch(error){
//         console.log("Network error")
//     } 
// }
// createTodo()

// async function deleteTodo(id: number) {
//     try{ const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, 
//         {method: "DELETE"})
//         if(!response.ok){
//             console.log("Request failed")
//             return
//         }
//     }
//     catch(error){
//         console.log("Network error")
//     }
    
// }
// deleteTodo(1)

// async function updateTodo(id: number) {
//     try{const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ title: "Updated Todo", completed: true })        
//     })
//     if(!response.ok){
//         console.log("Request failed")
//         return
//     }
//     const todo = await response.json()
//     console.log(todo)
//     }      
//     catch(error){
//         console.log("Network error")
//     } 
// }
// updateTodo(2)

// getTickets().then(tickets => {
//     console.log(tickets)
// })


// async function testCreate() {
//     const ticket = await updateTicket(5, {
//         title: "Updated ticket 2",
//         description: "Updated description 2",
//         priority: "high"
//     })

//     console.log(ticket)
// }

// testCreate()

// // async function test() {
// //     await deleteTicket(5)
// //     console.log("Ticket deleted")
// // }

// // test()
// // async function test() {
// //     const tickets = await getTickets()

// //     console.log(tickets)
// // }

// // test()
const ticketManager = new TicketManager()

// async function testApi() {
//     await ticketManager.loadTicketsFromApi()

//     console.log(ticketManager.tickets)
// }

// testApi()
// setTimeout(() => {
//     console.log(ticketManager.tickets.length)
// }, 2000)

// setTimeout(() => {
//     console.log(ticketManager.tickets.length)
// }, 10000)

const root = createRoot(ticketsContainer!)


function App() {
    const [tickets, setTickets] = useState<Ticket[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
    async function loadTickets() {
        try {
            await ticketManager.loadTicketsFromApi()
            setTickets([...ticketManager.tickets])
        } catch (error) {
            setError("Failed to load tickets")
        } finally {
            setIsLoading(false)
        }
    }

    loadTickets()
}, [])

    


    async function handleCreate(data: CreateTicketData): Promise<CreateTicketResult> {
        const error = validateTicketData(data)

        if (error) {
            console.log(error)
            return {
                success: false,
                error: error
            }
        }
        
        try {
            const ticket = await ticketManager.createTicket(data)
            setTickets(prevTickets => [...prevTickets, ticket])
            return {
                success: true
            }
        } catch (error) {
            console.log(error)
            return  {
                success: false,
                error: "Failed to create ticket"
            }
        }
    }

if (isLoading) {
    return <p>Loading...</p>
}

if (error) {
    return <p>{error}</p>
}

    return (
        <div>
            <CreateTicket
                title="New Ticket"
                onCreate={handleCreate}
                onCreated={() => {
                    console.log("Ticket створений")
                }}
            />

            <TicketList
    tickets={tickets}
    onComplete={(id) => {
        ticketManager.completeTicket(id)
        setTickets([...ticketManager.tickets])
    }}
    onCancel={(id) => {
        ticketManager.cancelTicket(id)
        setTickets([...ticketManager.tickets])
    }}
    onDelete={async (id) => {
        await ticketManager.deleteTicket(id)
        setTickets([...ticketManager.tickets])
    }}
/>
        </div>
    )

}
root.render(<App />)

