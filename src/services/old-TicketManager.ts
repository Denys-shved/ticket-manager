import { Ticket, TicketStatus, TicketPriority, CreateTicketData } from "../types/ticket"
import { getTickets, createTicket as createTicketApi, updateTicket as updateTicketApi, deleteTicket as deleteTicketApi } from "../api/ticketApi"

// Клас відповідає за роботу з даними ticket'ів
export class TicketManager {

    // // Масив усіх ticket'ів
    tickets: Ticket[]

    // // Наступний ID для нового ticket
    // nextId: number


    // --------------------------------------------------------
    // Constructor
    // --------------------------------------------------------

    constructor() {
        this.tickets = []
        // this.nextId = 1
        // // Завантажуються тікети з localStorage
        // this.loadTickets()
        
        // if(this.tickets.length === 0){
        //     this.nextId = 1
        // } else {
        //     const ticketIds = this.tickets.map(ticket => ticket.id)
        //     this.nextId = Math.max(...ticketIds)+1
        // }
    }

    // завантажує тікет з сервера через API 
    // і присвоює правильний id для наступного тікета
    async loadTicketsFromApi() {
    const tickets = await getTickets()

    this.tickets = tickets

    // if (this.tickets.length === 0) {
    //     this.nextId = 1
    // } else {
    //     const ticketIds = this.tickets.map(ticket => ticket.id)
    //     this.nextId = Math.max(...ticketIds) + 2
    // }
}

    // --------------------------------------------------------
    // CREATE
    // --------------------------------------------------------

// Створює новий ticket
async createTicket(data: CreateTicketData) {

    // const newTicket: Ticket = {
    //     id: this.getNextTicketId(),
    //     title: data.title,
    //     description: data.description,
    //     status: "new",
    //     priority: data.priority,
    //     createdAt: new Date()
    // }

    const newTicket = await createTicketApi(data)

this.tickets.push(newTicket)

// this.saveTickets()

return newTicket
    }


    // Генерує наступний ID
    // getNextTicketId() {
    //     return this.nextId++
    // }


    // --------------------------------------------------------
    // GETTERS / SEARCH
    // --------------------------------------------------------

    // Повертає кількість ticket'ів
    getTicketsCount() {
        return this.tickets.length
    }


    // Повертає масив назв усіх ticket'ів
    getTicketTitles() {
        return this.tickets.map(ticket => ticket.title)
    }


    // Знаходить ticket за ID
    getTicketById(id: number) {
        return this.tickets.find(ticket => ticket.id === id)
    }


    // Повертає ticket'и з певним статусом
    getTicketsByStatus(status: TicketStatus) {
        return this.tickets.filter(ticket => ticket.status === status)
    }


    // Повертає ticket'и з певним priority
    getTicketsByPriority(priority: TicketPriority) {
        return this.tickets.filter(ticket => ticket.priority === priority)
    }


    // Повертає тільки ticket'и з високим priority
    getHighPriorityTickets() {
        return this.getTicketsByPriority("high")
    }


    // --------------------------------------------------------
    // CHANGE STATUS
    // --------------------------------------------------------

    // Змінює статус ticket
    async changeTicketStatus(id: number, status: TicketStatus) {

        await updateTicketApi(id, {
            status: status
        })

        this.tickets = this.tickets.map(ticket => {
        // якщо це потрібний ticket
        if (ticket.id === id) {
            // створюємо НОВИЙ об'єкт
             let newTicket = {
                ...ticket,
                status: status
            }
            return newTicket
        }
        
        // інші tickets залишаємо як є
        return ticket
    })
        // Додаємо у localStorage
        // this.saveTickets()
    }


    // Змінює priority ticket
    changeTicketPriority(id: number, priority: TicketPriority) {

        this.tickets = this.tickets.map(ticket => {
        // якщо це потрібний ticket
        if (ticket.id === id) {
            // створюємо НОВИЙ об'єкт
             let newTicket = {
                ...ticket,
                priority: priority
            }
            return newTicket
        }

        // інші tickets залишаємо як є
        return ticket
        })
        // Додаємо у localStorage
        // this.saveTickets()
    }

    async updateTicket(id: number, data: CreateTicketData) {
    const updatedTicket = await updateTicketApi(id, data)

    this.tickets = this.tickets.map(ticket => {
        if (ticket.id === id) {
            return updatedTicket
        }

        return ticket
    })

    // this.saveTickets()

    return updatedTicket
}

    // --------------------------------------------------------
    // CONVENIENCE METHODS
    // --------------------------------------------------------

    // Завершує ticket
    async completeTicket(id: number) {
        await this.changeTicketStatus(id, "completed")
    }


    // Скасовує ticket
    async cancelTicket(id: number) {
        await this.changeTicketStatus(id, "cancelled")
    }


    // --------------------------------------------------------
    // DELETE
    // --------------------------------------------------------

    // Видаляє ticket за ID
    async deleteTicket(id: number) {
        await deleteTicketApi(id)
        // Знаходимо індекс ticket у масиві
        const index = this.tickets.findIndex(ticket => ticket.id === id)

        // Якщо ticket знайдений — видаляємо його
        if (index !== -1) {
            this.tickets.splice(index, 1)
        }
        // Додаємо у localStorage
        // this.saveTickets()
        
    }
    
    // Зберігає this.ticket  у localStorage
    // saveTickets() {
    //     localStorage.setItem("saveLSTicket", JSON.stringify(this.tickets))
    // }
    // Завантажуємо this.ticket з localStorage
//     loadTickets(){
//         const dataLSTicket = localStorage.getItem("saveLSTicket")
//         if(dataLSTicket){
//             const parsedTicket: Ticket[] = JSON.parse(dataLSTicket)
//             const tickets = parsedTicket.map((ticket) => {
//                 return {
//                    ...ticket,
//                     createdAt: new Date(ticket.createdAt)
//                 }
//             })
//             this.tickets = tickets
            
//         }
//     }

}
// ============================================================
// TICKET MANAGER
// ============================================================

// Створюємо один екземпляр TicketManager.
//
// Він використовується всією TicketsPage для роботи з даними.
export const ticketManager = new TicketManager()