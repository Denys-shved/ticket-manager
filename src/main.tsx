import React from "react"
import { createRoot } from "react-dom/client"

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"

import { TicketsPage } from "./pages/TicketsPage"
import { TicketDetailsPage } from "./pages/TicketDetailsPage"
import { LoginPage } from "./pages/LoginPage"
import { ProtectedRoute } from "./components/ProtectedRoute"

const ticketsContainer =
    document.querySelector<HTMLDivElement>("#tickets-container")

const root = createRoot(ticketsContainer!)

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route
                path="/tickets/:id"
                element={<TicketDetailsPage />}
            />
            <Route
                path="/tickets"
                element={
                    <ProtectedRoute>
                        <TicketsPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/tickets/:id"
                element={
                    <ProtectedRoute>
                        <TicketDetailsPage />
                    </ProtectedRoute>
                }
            />
        </Routes>
    </BrowserRouter>
)