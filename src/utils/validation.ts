import type {CreateTicketData} from "../types/ticket"

export function validateTicketData(data: CreateTicketData) {
    if (data.title.trim() === "") {
        return "Title cannot be empty"
    }

    if (data.description.trim() === "") {
        return "Description cannot be empty"
    }

    return null
} 