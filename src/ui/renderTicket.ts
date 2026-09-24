import { Ticket, TicketPriority, CreateTicketData } from "../types/ticket"
import { validateTicketData } from "../utils/validation"
import { TicketManager } from "../services/TicketManager"
import { formatTicketDate, updateTicketPriority, updateTicketStatus } from "./ticketUtils"


// Створює HTML-картку для одного ticket
export function renderTicket(
    ticket: Ticket,
    ticketManager: TicketManager,
    ticketsContainer: HTMLDivElement
) {
let isEditing = false
    // --------------------------------------------------------
    // MAIN TICKET ELEMENT
    // --------------------------------------------------------

    const ticketElement = document.createElement("div")

    ticketElement.classList.add("ticket")


    // --------------------------------------------------------
    // TITLE
    // --------------------------------------------------------

    const titleElement = document.createElement("h2")

    titleElement.textContent = `#${ticket.id} ${ticket.title}`

    ticketElement.append(titleElement)


    // --------------------------------------------------------
    // DESCRIPTION
    // --------------------------------------------------------

    const descriptionElement = document.createElement("p")

    descriptionElement.textContent = `${ticket.description}`

    ticketElement.append(descriptionElement)


    // --------------------------------------------------------
    // PRIORITY
    // --------------------------------------------------------

    const priorityElement = document.createElement("p")

    updateTicketPriority(ticket, priorityElement)

    ticketElement.append(priorityElement)


    // --------------------------------------------------------
    // STATUS
    // --------------------------------------------------------

    const statusElement = document.createElement("p")

    updateTicketStatus(ticket, statusElement)

    ticketElement.append(statusElement)


    // --------------------------------------------------------
    // CREATED DATE
    // --------------------------------------------------------

    const timeCreateElement = document.createElement("p")

    timeCreateElement.textContent =
        `Created: ${formatTicketDate(ticket.createdAt)}`

    ticketElement.append(timeCreateElement)


    // --------------------------------------------------------
    // DELETE BUTTON
    // --------------------------------------------------------

    const deleteButton = document.createElement("button")

    deleteButton.textContent = "Delete"

    ticketElement.append(deleteButton)

    // --------------------------------------------------------
    // EDIT BUTTON
    // --------------------------------------------------------

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    ticketElement.append(editButton)

    editButton.addEventListener("click", () => {
        if (isEditing) {
            return
        }

        isEditing = true
        const titleInput: HTMLInputElement = document.createElement("input")
        titleInput.value = ticket.title
        ticketElement.append(titleInput)

        const descriptionInput: HTMLTextAreaElement = document.createElement("textarea")
        descriptionInput.value = ticket.description
        ticketElement.append(descriptionInput)

        const editPrioritySelect = document.createElement("select")

        const lowOption = document.createElement("option")
        lowOption.value = "low"
        lowOption.textContent = "Low"

        const mediumOption = document.createElement("option")
        mediumOption.value = "medium"
        mediumOption.textContent = "Medium"

        const highOption = document.createElement("option")
        highOption.value = "high"
        highOption.textContent = "High"

        editPrioritySelect.append(lowOption, mediumOption, highOption)

        editPrioritySelect.value = ticket.priority

        ticketElement.append(editPrioritySelect)

        const saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        ticketElement.append(saveButton)

        saveButton.addEventListener("click", async () => {
console.log("SAVE CLICK")
        const data: CreateTicketData = {
            title: titleInput.value.trim(),
            description: descriptionInput.value.trim(),
            priority: editPrioritySelect.value as TicketPriority
        }

        const error = validateTicketData(data)

        if (error) {
            alert(error)
            return
        }

        console.log("DATA FROM FORM:", data)
        const updatedTicket = await ticketManager.updateTicket(ticket.id, data)
        console.log("UPDATED TICKET:", updatedTicket)
        
        titleElement.textContent = `#${updatedTicket.id} ${updatedTicket.title}`
        descriptionElement.textContent = updatedTicket.description
        updateTicketPriority(updatedTicket, priorityElement)
        editPrioritySelect.value = updatedTicket.priority

        titleInput.remove()
        descriptionInput.remove()
        editPrioritySelect.remove()
        saveButton.remove()

        isEditing = false
        })

    // --------------------------------------------------------
    // CANCEL EDIT BUTTON
    // --------------------------------------------------------
        const cancelEditButton = document.createElement("button")
        cancelEditButton.textContent = "Cancel"

        ticketElement.append(cancelEditButton)

        cancelEditButton.addEventListener("click", () => {

            titleInput.remove()
            descriptionInput.remove()
            editPrioritySelect.remove()
            saveButton.remove()
            cancelEditButton.remove()

            isEditing = false
        })
        
    })

    




    // --------------------------------------------------------
    // COMPLETE / CANCEL BUTTONS
    // --------------------------------------------------------

    const cancelButton = document.createElement("button")
    const completeButton = document.createElement("button")


    // Complete button
    completeButton.textContent = "Complete"

    ticketElement.append(completeButton)


    // --------------------------------------------------------
    // COMPLETE EVENT
    // --------------------------------------------------------

    completeButton.addEventListener("click", () => {

        // Змінюємо статус ticket
        ticketManager.completeTicket(ticket.id)

        // Оновлюємо статус на сторінці
        updateTicketStatus(ticket, statusElement)

        console.log(ticket)

        // Після завершення обидві кнопки блокуються
        completeButton.disabled = true
        cancelButton.disabled = true
    })


    // Cancel button
    cancelButton.textContent = "Cancel"

    ticketElement.append(cancelButton)


    // --------------------------------------------------------
    // CANCEL EVENT
    // --------------------------------------------------------

    cancelButton.addEventListener("click", () => {

        // Змінюємо статус ticket
        ticketManager.cancelTicket(ticket.id)

        // Оновлюємо статус на сторінці
        updateTicketStatus(ticket, statusElement)

        console.log(ticket)

        // Після скасування обидві кнопки блокуються
        cancelButton.disabled = true
        completeButton.disabled = true
    })


    // --------------------------------------------------------
    // DELETE EVENT
    // --------------------------------------------------------

    deleteButton.addEventListener("click", async () => {

        try{
            // Видаляємо ticket із TicketManager
        await ticketManager.deleteTicket(ticket.id)
         // Видаляємо HTML-картку зі сторінки
        ticketElement.remove()
        }
        catch(error){
            console.error(error)
            alert("Failed to delete ticket")
        }
       
    })


    // --------------------------------------------------------
    // ADD TICKET TO DOM
    // --------------------------------------------------------

    // Додаємо готову картку у контейнер
    ticketsContainer?.append(ticketElement)
}

// вечір - риба з картоплею
// сніданок - олівє
// обід - ...
// вечір - рис з азійськими овочами