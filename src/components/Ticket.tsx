import React from "react"
import { CreateTicketData, TicketPriority } from "../types/ticket"
import { Ticket } from "../types/ticket"
import { useState } from "react"
import { CreateTicketResult } from "../types/ticket"

export function TicketComponent(props: { ticket: Ticket,
    onComplete: (id: number) => void,
    onCancel: (id: number) => void,
    onDelete: (id: number) => void
 }) {

    
    return (
        <div className="ticket">
            <p>{props.ticket.id}</p>
            <p className="ticket-title">
                {props.ticket.title}
            </p>
            <p className="ticket-description">
                {props.ticket.description}
            </p>
            <p className="ticket-meta">
                Priority:
                <span className={`ticket-badge priority-${props.ticket.priority}`}>
                    {props.ticket.priority}
                </span>
            </p>

            <p className="ticket-meta">
                Status:
                <span className={`ticket-badge status-${props.ticket.status}`}>
                    {props.ticket.status}
                </span>
            </p>
            <div className="ticket-actions">
                {props.ticket.status === "new" && (
                    <>
                        <button
                            className="button-complete"
                            onClick={() => props.onComplete(props.ticket.id)}
                        >
                            Complete
                        </button>

                        <button
                            className="button-cancel"
                            onClick={() => props.onCancel(props.ticket.id)}
                        >
                            Cancel
                        </button>
                    </>
                )}

                <button
                    className="button-delete"
                    onClick={() => props.onDelete(props.ticket.id)}
                >
                    Delete
                </button>
            </div>
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
        <div className="create-ticket">
            <h2 className="create-ticket-title">
                {props.title}
            </h2>
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
                className="button-create"
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