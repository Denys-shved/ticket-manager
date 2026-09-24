import React from "react"
import { useParams } from "react-router-dom"
import { getTickets } from "../api/ticketApi"
import { useState, useEffect } from "react"
import { Ticket } from "../types/ticket"
import { useNavigate } from "react-router-dom"
import { ApiError } from "../api/ticketApi"



export function TicketDetailsPage() {
    const [ticket, setTicket] = useState<Ticket | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const { id } = useParams()

    const navigate = useNavigate()
    // return <h1>Ticket Details</h1>
    const ticketId = Number(id)
    useEffect(() => {
    async function loadTicket() {
        try {
            const tickets = await getTickets()

            const foundTicket = tickets.find(
                ticket => ticket.id === ticketId
            )

            setTicket(foundTicket ?? null)
        } catch (error) {
            if (error instanceof ApiError && error.status === 401) {
                localStorage.removeItem("token")
                navigate("/login")
                return
            }
        } finally {
            setIsLoading(false)
        }
    }

    loadTicket()
    }, [ticketId, navigate])
    if(isLoading){
    return <p>Loading...</p>
    }
    if (!ticket) {
    return <h1>Ticket not found</h1>
    }
    return (
    <div>
        <h1>{ticket.title}</h1>
        <p>{ticket.description}</p>
    </div>
    )
}