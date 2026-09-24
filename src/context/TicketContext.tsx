import { createContext } from "react"
import { Ticket } from "../types/ticket"

export const TicketContext = createContext<Ticket[]>([])
