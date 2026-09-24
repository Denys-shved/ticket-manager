import React from "react"

import "@testing-library/jest-dom/vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { TicketComponent } from "./Ticket"
import { MemoryRouter } from "react-router-dom"
import { describe, it, expect, vi } from "vitest"
import { afterEach } from "vitest"

import { cleanup } from "@testing-library/react"

afterEach(() => {
    cleanup()
})

describe("TicketComponent", () => {

    it("shows Complete and Cancel buttons for new ticket", () => {

        const ticket = {
            id: 1,
            title: "Test ticket",
            description: "Test description",
            priority: "medium" as const,
            status: "new" as const,
            createdAt: new Date()
        } 

        render(
            <MemoryRouter>
            <TicketComponent
                ticket={ticket}
                onComplete={() => {}}
                onCancel={() => {}}
                onDelete={() => {}}
            />
            </MemoryRouter> 
        )

        expect(screen.getByText("Complete")).toBeInTheDocument()
        expect(screen.getByText("Cancel")).toBeInTheDocument()
    })

    it("calls onComplete when Complete button is clicked", () => {

    const onComplete = vi.fn()

    const ticket = {
        id: 1,
        title: "Test ticket",
        description: "Test description",
        priority: "medium" as const,
        status: "new" as const,
        createdAt: new Date()
    }

    render(
        <MemoryRouter>
            <TicketComponent
                ticket={ticket}
                onComplete={onComplete}
                onCancel={() => {}}
                onDelete={() => {}}
            />
        </MemoryRouter>
    )

    const button = screen.getByText("Complete")

    fireEvent.click(button)

    expect(onComplete).toHaveBeenCalledWith(1)
    })

})