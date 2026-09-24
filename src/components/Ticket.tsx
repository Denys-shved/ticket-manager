import React from "react"
import { CreateTicketData, TicketPriority } from "../types/ticket"
import { Ticket } from "../types/ticket"
import { useState } from "react"
import { CreateTicketResult } from "../types/ticket"
import { Link } from "react-router-dom"

export function TicketComponent(props: { ticket: Ticket,
    onComplete: (id: number) => void,
    onCancel: (id: number) => void,
    onDelete: (id: number) => void
 }) {

    
    return (
        <div className="ticket">
            <Link to={`/tickets/${props.ticket.id}`}>{props.ticket.id}</Link>
            <p>{props.ticket.title}</p>
            <p>{props.ticket.description}</p>
            <p>Priority: {props.ticket.priority}</p>
            <p>Status: {props.ticket.status}</p>
            {props.ticket.status === "new" && (
                <>
                    <button onClick={() => props.onComplete(props.ticket.id)}>
                        Complete
                    </button>

                    <button onClick={() => props.onCancel(props.ticket.id)}>
                        Cancel
                    </button>
                </>
            )}
            <button onClick={() => props.onDelete(props.ticket.id)}>
                Delete
            </button>
        </div>
    )
}

export function CreateTicket(props: {
    title: string
    onCreate: (data: CreateTicketData) => Promise<CreateTicketResult>
    onCreated: () => void
    }){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState<TicketPriority>("low")
    const [error, setError] = useState("")
    return (
        <div>
            <h3>{props.title}</h3>
            <input
                type="text"
                placeholder="Ticket title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Ticket description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as TicketPriority)}
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            {error && <p>{error}</p>}
            <button
                onClick={async () => {
                    setError("")

                    
                    const result = await props.onCreate({
                        title: title,
                        description: description,
                        priority: priority
                    })

                    if (!result.success) {
                        setError(result.error ?? "Unknown error")
                        return
                    }

                    setTitle("")
                    setDescription("")
                    setPriority("low")

                    props.onCreated()
                }}
            >
                Create Ticket
            </button>
        </div>
    )
}