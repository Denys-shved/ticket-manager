import { describe, it, expect } from "vitest"
import { validateTicketData } from "./validation"

describe("validateTicketData", () => {

    it("returns error when title is empty", () => {

        const result = validateTicketData({
            title: "",
            description: "Test description",
            priority: "medium"
        })

        expect(result).toBe("Title cannot be empty")
    })

    it("returns error when description is empty", () => {
    const result = validateTicketData({
            title: "Test",
            description: "",
            priority: "medium"
        })

        expect(result).toBe("Description cannot be empty")
    })

    it("returns null when data is valid", () => {
    const result = validateTicketData({
        title: "Test ticket",
        description: "Test description",
        priority: "medium"
    })

    expect(result).toBe(null)
    })

    it("returns error when title contains only spaces", () => {
    const result = validateTicketData({
        title: "   ",
        description: "Test description",
        priority: "medium"
    })

    expect(result).toBe("Title cannot be empty")
    })

    it("returns error when description contains only spaces", ()=>{
        const result = validateTicketData({
            title: "Test title",
            description: "   ",
            priority: "medium"
        })

        expect(result).toBe("Description cannot be empty")
    })

})

