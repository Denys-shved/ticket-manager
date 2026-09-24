import { Ticket } from "../types/ticket"

// Форматує дату у вигляд:
// DD-MM-YYYY HH:MM
export function formatTicketDate(date: Date) {
    let day = date.getDate().toString()
    let month = (date.getMonth() + 1).toString()
    let hours = date.getHours().toString()
    let minutes = date.getMinutes().toString()

    // Додаємо 0 перед однозначними значеннями
    if (day.length === 1) day = "0" + day
    if (month.length === 1) month = "0" + month
    if (hours.length === 1) hours = "0" + hours
    if (minutes.length === 1) minutes = "0" + minutes

    return `${day}-${month}-${date.getFullYear()} ${hours}:${minutes}`
}

export function updateTicketStatus(ticket: Ticket, statusElement: HTMLParagraphElement) {
    statusElement.textContent = `Status: ${ticket.status}`
}

export function updateTicketPriority(ticket: Ticket,
    priorityElement: HTMLParagraphElement) {
    priorityElement.textContent = `Priority: ${ticket.priority}`
}