import {
    CreateTicketData,
    Ticket,
    TicketStatus
} from "../types/ticket"

export const API_URL = "http://localhost:3000/tickets"
const AUTH_URL = "http://localhost:3000/auth"

export class ApiError extends Error {
    status: number

    constructor(status: number) {
        super(`Request failed: ${status}`)
        this.status = status
    }
}

function checkResponse(response: Response) {
    if (!response.ok) {
        throw new ApiError(response.status)
    }
}

// Login

function getAuthHeaders() {
    const token = localStorage.getItem("token")

    if (!token) {
    throw new Error("User is not authenticated")
    }

    return {Authorization: `Bearer ${token}`}
}

export async function login(
    email: string,
    password: string
) {
    const response = await fetch(`${AUTH_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    checkResponse(response)

    return await response.json()
}

// -------------------------------

export async function getTickets(): Promise<Ticket[]> {
    // const response = await fetch(API_URL)
    const response = await fetch(API_URL, {
    headers: getAuthHeaders()
    })
    checkResponse(response)
    const tickets: Ticket[] = await response.json()
return tickets
}

export async function createTicket(
    data: CreateTicketData
): Promise<Ticket> {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders()
        },
        body: JSON.stringify(data)
    })

    checkResponse(response)

    const ticket: Ticket = await response.json()

    return ticket
}

export async function updateTicket(id: number, data: Partial<CreateTicketData> & { status?: TicketStatus }): Promise<Ticket> {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json",
            ...getAuthHeaders()
         },
        body: JSON.stringify(data)
    })
    checkResponse(response)

    return await response.json()
    
}

export async function deleteTicket(id: number) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders()
    })
    checkResponse(response)
}

// export function mapTodoToTicket(todo: ApiTodo): Ticket {
//    return {
//     id: todo.id,
//     title: todo.title,
//     description: "Any description",
//     status: todo.completed ? "completed" : "new",
//     priority: "medium",
//     createdAt: new Date()
//    }
// }

// login("test@test.com", "12345678")
//     .then(data => console.log(data))
//     .catch(error => console.log(error))