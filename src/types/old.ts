// import { timeStamp } from "node:console"

// type TicketStatus = "new" | "in-progress" | "completed" | "cancelled"

// type TicketPriority = "low" | "medium" | "high"

// interface Ticket {
//     id: number,
//     title: string,
//     description: string,
//     status: TicketStatus,
//     priority: TicketPriority,
//     createdAt: Date
// } 

// const ticket: Ticket = {
//     id: 1,
//     title: "First ticket",
//     description: "Test create ticket",
//     status: "new",
//     priority: "low",
//     createdAt: new Date()
// }

// const ticket2: Ticket = {
//     id: 2,
//     title: "Fix display",
//     description: "crash glass",
//     status: "new",
//     priority: "medium",
//     createdAt: new Date()
// }
// const ticket3: Ticket = {
//     id: 3,
//     title: "Sound",
//     description: "Silent",
//     status: "in-progress",
//     priority: "high",
//     createdAt: new Date()
// }
// const ticket4: Ticket = {
//     id: 4,
//     title: "Disk",
//     description: "Crush",
//     status: "new",
//     priority: "high",
//     createdAt: new Date()
// }

// function printTicket(ticket: Ticket){
//     console.log("Ticket #" + ticket.id + " " + ticket.title,
//         "Status: " + ticket.status,
//         "Priority: " + ticket.priority,
//         "Description: " + ticket.description,
//         "Created:" + formatTicketDate(ticket.createdAt)
//     )
// }

// printTicket(ticket)
// // printTicket(ticket2)
// // printTicket(ticket3)
// // printTicket(ticket4)

// // function completeTicket(ticket: Ticket){
// //     ticket.status = "completed"
// // }

// // completeTicket(ticket3)
// console.log(ticket3.status)

// function getTicketPriority(ticket: Ticket){
//     return ticket.priority
// }

// console.log(getTicketPriority(ticket))
// // console.log(getTicketPriority(ticket2))
// // console.log(getTicketPriority(ticket4))

// function isHighPriority(ticket: Ticket){
//     return ticket.priority === "high"
// }

// console.log(isHighPriority(ticket))
// // console.log(isHighPriority(ticket2))
// // console.log(isHighPriority(ticket4))

// function cancelTicket(ticket: Ticket){
//     ticket.status = "cancelled"
//     return ticket
// }

// const cancelledTicket = cancelTicket(ticket2)

// console.log(cancelledTicket)

// // function getStatusMessage(ticket: Ticket){
// //     if(ticket.status === "new"){
// //         return "Ticket is waiting to be processed"
// //     } else if(ticket.status === "in-progress"){
// //         return "Ticket is being processed"
// //     } else if(ticket.status === "completed"){
// //         return "Ticket has been completed"
// //     } else return "Ticket has been cancelled"
// // }

// function getStatusMessage(ticket: Ticket){
//     switch(ticket.status){
//         case "new":
//             return "Ticket is waiting to be processed";
//         case "in-progress":
//             return "Ticket is being processed";
//         case "completed":
//             return "Ticket has been completed";
//         case "cancelled":
//             return "Ticket has been cancelled"
//     }
// }

// console.log(getStatusMessage(ticket))
// console.log(getStatusMessage(ticket3))
// console.log(getStatusMessage(cancelledTicket))

// const tickets: Ticket[] = [
//     ticket,
//     ticket2,
//     ticket3,
//     ticket4
// ]

// function printAllTickets(tickets: Ticket[]){
//     for (const currentTicket of tickets){
//         printTicket(currentTicket)
//     }
// }

// printAllTickets(tickets)

// function getHighPriorityTickets(tickets: Ticket[]) {
//     return tickets.filter(ticket => ticket.priority === "high")
// }


// const highPriorityTickets = getHighPriorityTickets(tickets)

// console.log(highPriorityTickets)

// function getCompletedTickets(tickets: Ticket[]){
//     return tickets.filter((ticket)=>{
//         return ticket.status === "completed"
//     })
// }

// const completedTickets = getCompletedTickets(tickets)
// console.log(completedTickets)

// function getTicketTitles(tickets: Ticket[]) {
//     return tickets.map((ticket)=> ticket.title)
// }

// const titleArr = getTicketTitles(tickets)
// console.log(titleArr)

// function getHighPriorityTitles(tickets: Ticket[]) {
//     return tickets.filter((ticket)=>{
//         return ticket.priority === "high"
//     }).map((ticket)=> ticket.title)
// }

// const titleHighArr = getHighPriorityTitles(tickets)
// console.log(titleHighArr)


// function getTicketsCountByStatus(tickets: Ticket[], status: TicketStatus) {
//     return tickets.filter((ticket)=>{
//         return ticket.status === status
//     }).length
// }
// console.log(getTicketsCountByStatus(tickets, "new"))

// function getTicketsCount(tickets: Ticket[]) {
//     return tickets.length
// }

// console.log(getTicketsCount(tickets))

// function getHighPriorityCount(tickets: Ticket[]) {
//     return tickets.filter((ticket)=>{
//         return ticket.priority === "high"
//     }).length
// }

// console.log(getHighPriorityCount(tickets))

// // type TicketStatus = "new" | "in-progress" | "completed" | "cancelled"

// // type TicketPriority = "low" | "medium" | "high"

// // interface Ticket {
// //     id: number,
// //     title: string,
// //     description: string,
// //     status: TicketStatus,
// //     priority: TicketPriority,
// //     createdAt: new Date()
// // } 

// // const ticket: Ticket = {
// //     id: 1,
// //     title: "First ticket",
// //     description: "Test create ticket",
// //     status: "new",
// //     priority: "low",
// //     createAt: "10:08 03.09.2026"
// // }

// function getNextTicketId(tickets: Ticket[]) {
//     return tickets.length + 1
// }

// console.log(getNextTicketId(tickets))



// // console.log(newTicket)



// console.log(tickets)
// console.log(getTicketsCount(tickets))

// function getTicketById(tickets: Ticket[], id: number) {
//     return tickets.find((ticket)=>{
//        return ticket.id === id
//     })
// }

// const foundTicket = getTicketById(tickets, 3)
// console.log(foundTicket)

// function updateTicketStatus(ticket: Ticket, status: TicketStatus) {
//     ticket.status = status
// }
// updateTicketStatus(ticket4, "in-progress")
// console.log(ticket4.status)
// updateTicketStatus(ticket4, "completed")
// console.log(ticket4.status)


// function cancelTicketById(tickets: Ticket[], id: number) {
//     const findTicket = tickets.find((ticket)=>{
//        return ticket.id === id
//     })
//     if (findTicket){
//         findTicket.status = "cancelled"
//     }
// }

// cancelTicketById(tickets, 3)
// console.log(getTicketById(tickets, 3))

// function printTicketIfExists(tickets: Ticket[], id: number) {
//     const findTicket = tickets.find((ticket)=>{
//        return ticket.id === id
//     })
//     if (findTicket){
//         printTicket(findTicket)
//     } else console.log("Ticket not found")
// }

// printTicketIfExists(tickets, 5)

// function getTicketTitleById(tickets: Ticket[], id: number) {
//     const titleTicketFind = tickets.find((ticket)=>{
//         return ticket.id === id
//     })
//     if(titleTicketFind){
//         return titleTicketFind.title
//     } else return "Ticket not found"
// }

// console.log(getTicketTitleById(tickets, 3))

// function changeTicketPriority(
//     tickets: Ticket[],
//     id: number,
//     priority: TicketPriority
// ){
//     const changPriority = tickets.find((ticket)=>{
//         return ticket.id === id
//     })
//     if(changPriority){
//         changPriority.priority = priority
//     } else {return "Ticket not found"}
// }

// changeTicketPriority(tickets, 2, "high")

// console.log(getTicketById(tickets, 2))

// function getTicketsByStatus(
//     tickets: Ticket[],
//     status: TicketStatus
// ) {
//     const allStatus = tickets.filter((ticket)=>{
//         return ticket.status === status
//     })
//     return allStatus
// }


// console.log(getTicketsByStatus(tickets, "new"))

// console.log(getTicketById(tickets, 2))

// function changeTicketStatus(
//     tickets: Ticket[],
//     id: number,
//     status: TicketStatus
// ) {
//     const foundTicket = tickets.find((ticket)=>{
//         return ticket.id === id
//     })
//     if(foundTicket){
//         foundTicket.status = status
//     } else {return "Ticket not found"}   
// }
// changeTicketStatus(tickets, 2, "in-progress")

// console.log(getTicketById(tickets, 2))

// function deleteTicket(tickets: Ticket[], id: number) {
//     const index = tickets.findIndex((ticket) => {
//     return ticket.id === id
//     })
//     if(index!==-1){
//         tickets.splice(index, 1)
//     } else {return "Ticket not found"}
// }
// deleteTicket(tickets, 2)




// //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




// type CreateTicketData = {
//     title: string,
//     description: string,
//     priority: TicketPriority
// }


// function createTicket(
//     data: CreateTicketData
// ): Ticket {
//     return {
//         id: getNextTicketId(tickets),
//         title: data.title,
//         description: data.description,
//         status: "new",
//         priority: data.priority,
//         createdAt: new Date()
//     }
// }

// const newTicket = createTicket({
//     title: "Keyboard",
//     description: "Keyboard doesn't work",
//     priority: "high"
// })

// tickets.push(newTicket)

// const newTicket2 = createTicket({
//     title: "Mouse",
//     description: "Mouse doesn't work",
//     priority: "medium"
// })

// tickets.push(newTicket2)

// console.log(newTicket)
// console.log(newTicket2)

// function formatTicketDate(date: Date) {
//     let day: string = date.getDate().toString()
//     let month: string = (date.getMonth() + 1).toString()
//     let minutes: string = date.getMinutes().toString()
//     let hours: string = date.getHours().toString()

//     if (day.length === 1) {
//         day = "0" + day
//     }
//     if (month.length === 1) {
//         month = "0" + month
//     }
//     if (minutes.length === 1) {
//         minutes = "0" + minutes
//     }
//     if (hours.length === 1) {
//         hours = "0" + hours
//     }

//     return day + "-" + month + "-" + date.getFullYear()+" "+ hours +":"+ minutes
    
// }

// console.log(formatTicketDate(new Date()))

// class TicketManager {
//     tickets: Ticket[]
//     constructor(){
//         this.tickets = tickets
//     }
//     createTicket(data: CreateTicketData) {
//         const newTicket: Ticket = {
//             id: this.getNextTicketId(),
//             title: data.title,
//             description: data.description,
//             status: "new",
//             priority: data.priority,
//             createdAt: new Date()
//         }
//         this.tickets.push(newTicket)
//         return newTicket
//     }
//     getTicketsCount(){
//         return this.tickets.length
//     }
//     getTicketTitles() {
//         return this.tickets.map(ticket => ticket.title)
//     }
//     getNextTicketId() {
//         return this.tickets.length + 1
//     }
//     getTicketById(id: number) {
//        return this.tickets.find(ticket => ticket.id === id) 
//     }
//     getTicketsByStatus(status: TicketStatus) {
//         return this.tickets.filter(ticket => ticket.status === status)
//     }
//     getHighPriorityTickets() {
//         return this.getTicketsByPriority("high")
//     }
//     getTicketsByPriority(priority: TicketPriority) {
//         return this.tickets.filter((ticket)=>{
//            return ticket.priority === priority
//         })
//     }
//     changeTicketStatus(id: number, status: TicketStatus) {
//         const ticket = this.getTicketById(id)
//         if (ticket) {
//             ticket.status = status
//         }
//     }
//     changeTicketPriority(id: number, priority: TicketPriority) {
//         const ticket = this.getTicketById(id)
//         if(ticket){
//             ticket.priority = priority
//         }
//     }
//     deleteTicket(id: number) {
//     const index = this.tickets.findIndex(ticket => ticket.id === id)

//     if (index !== -1) {
//         this.tickets.splice(index, 1)
//     }
// }
// }
// const ticketManager = new TicketManager()

// console.log(ticketManager.getTicketsCount())
// console.log(ticketManager.getTicketById(3))
// console.log(ticketManager.getTicketById(999))
// console.log(ticketManager.getTicketsByStatus("new"))
// console.log(ticketManager.getTicketsByStatus("cancelled"))

// console.log(ticketManager.getTicketById(1))

// // ticketManager.completeTicket(1)

// console.log(ticketManager.getTicketById(1))
// const created = ticketManager.createTicket({
//     title: "Test ticket",
//     description: "Testing create method",
//     priority: "high"
// })

// console.log(created)
// console.log(ticketManager.getTicketsCount())

// ticketManager.deleteTicket(2)

// console.log(ticketManager.getTicketsCount())
// console.log(ticketManager.getTicketById(2))
// console.log(ticketManager.getHighPriorityTickets())

// const ticket7 = ticketManager.createTicket({
//     title: "Fix login bug",
//     description: "User cannot log in",
//     priority: "high"
// })

// console.log(ticket7)
// console.log(ticketManager.getTicketsCount())
// console.log(ticketManager.tickets)



// |||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||
// |||||||||||||||||||||||||||||||||||||||||||||||||||||



// type TicketStatus = "new" | "in-progress" | "completed" | "cancelled"

// type TicketPriority = "low" | "medium" | "high"

// interface Ticket {
//     id: number
//     title: string
//     description: string
//     status: TicketStatus
//     priority: TicketPriority
//     createdAt: Date
// }

// type CreateTicketData = {
//     title: string
//     description: string
//     priority: TicketPriority
// }

// function formatTicketDate(date: Date) {
//     let day = date.getDate().toString()
//     let month = (date.getMonth() + 1).toString()
//     let hours = date.getHours().toString()
//     let minutes = date.getMinutes().toString()

//     if (day.length === 1) day = "0" + day
//     if (month.length === 1) month = "0" + month
//     if (hours.length === 1) hours = "0" + hours
//     if (minutes.length === 1) minutes = "0" + minutes

//     return `${day}-${month}-${date.getFullYear()} ${hours}:${minutes}`
// }

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

// class TicketManager {
//     tickets: Ticket[]
//     nextId: number

//     constructor() {
//         this.tickets = []
//         this.nextId = 1
//     }

//     createTicket(data: CreateTicketData) {
//         const newTicket: Ticket = {
//             id: this.getNextTicketId(),
//             title: data.title,
//             description: data.description,
//             status: "new",
//             priority: data.priority,
//             createdAt: new Date()
//         }

//         this.tickets.push(newTicket)

//         return newTicket
//     }

//     getNextTicketId() {
//         return this.nextId++
//     }

//     getTicketsCount() {
//         return this.tickets.length
//     }

//     getTicketTitles() {
//         return this.tickets.map(ticket => ticket.title)
//     }

//     getTicketById(id: number) {
//         return this.tickets.find(ticket => ticket.id === id)
//     }

//     getTicketsByStatus(status: TicketStatus) {
//         return this.tickets.filter(ticket => ticket.status === status)
//     }

//     getTicketsByPriority(priority: TicketPriority) {
//         return this.tickets.filter(ticket => ticket.priority === priority)
//     }

//     getHighPriorityTickets() {
//         return this.getTicketsByPriority("high")
//     }

//     changeTicketStatus(id: number, status: TicketStatus) {
//         const ticket = this.getTicketById(id)

//         if (ticket) {
//             ticket.status = status
//         }
//     }

//     changeTicketPriority(id: number, priority: TicketPriority) {
//         const ticket = this.getTicketById(id)

//         if (ticket) {
//             ticket.priority = priority
//         }
//     }

//     completeTicket(id: number) {
//         this.changeTicketStatus(id, "completed")
//     }

//     cancelTicket(id: number) {
//         this.changeTicketStatus(id, "cancelled")
//     }

//     deleteTicket(id: number) {
//         const index = this.tickets.findIndex(ticket => ticket.id === id)

//         if (index !== -1) {
//             this.tickets.splice(index, 1)
//         }
//     }
// }

// const ticketManager = new TicketManager()

// const ticket1 = ticketManager.createTicket({
//     title: "Fix display",
//     description: "Display is broken",
//     priority: "medium"
// })

// const ticket2 = ticketManager.createTicket({
//     title: "Sound",
//     description: "Sound doesn't work",
//     priority: "high"
// })

// const ticket3 = ticketManager.createTicket({
//     title: "Keyboard",
//     description: "Keyboard doesn't work",
//     priority: "high"
// })

// printTicket(ticket1)
// printTicket(ticket2)
// printTicket(ticket3)

// ticketManager.completeTicket(1)
// ticketManager.changeTicketPriority(1, "high")
// ticketManager.cancelTicket(2)

// console.log(ticketManager.getTicketsCount())
// console.log(ticketManager.getTicketById(1))
// console.log(ticketManager.getTicketsByStatus("new"))
// console.log(ticketManager.getHighPriorityTickets())

// ticketManager.deleteTicket(2)

// console.log(ticketManager.tickets)