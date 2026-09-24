import React from "react"
import { Ticket } from "../types/ticket"
import { TicketComponent } from "./Ticket"

export function TicketList(props: {tickets: Ticket[]
    onComplete: (id: number) => void
onCancel: (id: number) => void
onDelete: (id: number) => void
}
    
) {
    return (
        <div>
            {props.tickets.map(ticket => (
                <TicketComponent
                key={ticket.id}
                ticket={ticket}
                onComplete={props.onComplete}
                onCancel={props.onCancel}
                onDelete={props.onDelete}
            />                
            ))}
            
        </div>
    )
}