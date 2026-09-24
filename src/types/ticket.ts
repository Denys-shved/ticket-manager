// Можливі статуси ticket
export type TicketStatus = "new" | "in-progress" | "completed" | "cancelled"

export type StatusFilter = TicketStatus | "all"

// Можливі пріоритети ticket
export type TicketPriority = "low" | "medium" | "high"

// Повна структура ticket після його створення
export interface Ticket {
    id: number
    title: string
    description: string
    status: TicketStatus
    priority: TicketPriority
    createdAt: Date
}

// Дані, які користувач передає при створенні ticket
// id, status та createdAt створюються автоматично
export type CreateTicketData = {
    title: string
    description: string
    priority: TicketPriority
}

export type CreateTicketResult = {
    success: boolean
    error?: string
}