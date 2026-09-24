import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import db from "./db.js"
import { authMiddleware } from "./middleware/authMiddleware.js"


// ========================================
// CONFIGURATION
// ========================================

const JWT_SECRET = "my-super-secret-key"
const PORT = 3000


// ========================================
// EXPRESS APP
// ========================================

const app = express()

app.use(cors())
app.use(express.json())


// ========================================
// AUTHENTICATION
// ========================================

// ---------- REGISTER ----------

app.post("/auth/register", async (req, res) => {
    const { email, password } = req.body

    // Check required fields
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        })
    }

    // Check if user already exists
    const existingUser = db.prepare(`
        SELECT * FROM users
        WHERE email = ?
    `).get(email)

    if (existingUser) {
        return res.status(409).json({
            message: "User already exists"
        })
    }

    // Hash password before saving it to database
    const passwordHash = await bcrypt.hash(password, 10)

    const result = db.prepare(`
        INSERT INTO users (email, password)
        VALUES (?, ?)
    `).run(email, passwordHash)

    return res.status(201).json({
        id: result.lastInsertRowid,
        email
    })
})


// ---------- LOGIN ----------

app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body

    // Check required fields
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        })
    }

    // Find user by email
    const user = db.prepare(`
        SELECT * FROM users
        WHERE email = ?
    `).get(email) as {
        id: number
        email: string
        password: string
    } | undefined

    // User not found
    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    // Compare entered password with password hash
    const passwordMatches = await bcrypt.compare(
        password,
        user.password
    )

    if (!passwordMatches) {
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    // Create JWT
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email
        },
        JWT_SECRET,
        {
            expiresIn: "1h"
        }
    )

    return res.json({
        message: "Login successful",
        token
    })
})


// ========================================
// TYPES
// ========================================

type TicketStatus =
    "new" |
    "in-progress" |
    "completed" |
    "cancelled"

type TicketPriority =
    "low" |
    "medium" |
    "high"

type Ticket = {
    id: number
    title: string
    description: string
    priority: TicketPriority
    status: TicketStatus
    createdAt: string
    userId: number
}


// ========================================
// TICKETS
// ========================================


// ---------- GET ALL USER TICKETS ----------

app.get("/tickets", authMiddleware, (req, res) => {

    // Get only tickets belonging to current user
    const tickets = db.prepare(`
        SELECT * FROM tickets
        WHERE userId = ?
    `).all(req.user!.id)

    res.json(tickets)
})


// ---------- CREATE TICKET ----------

app.post("/tickets", authMiddleware, (req, res) => {

    // Validate title
    if (!req.body.title || req.body.title.trim() === "") {
        return res.status(400).json({
            message: "Title cannot be empty"
        })
    }

    // Validate description
    if (
        !req.body.description ||
        req.body.description.trim() === ""
    ) {
        return res.status(400).json({
            message: "Description cannot be empty"
        })
    }

    // Validate priority
    if (
        !["low", "medium", "high"].includes(req.body.priority)
    ) {
        return res.status(400).json({
            message: "Invalid priority"
        })
    }

    // Insert ticket into database
    const insert = db.prepare(`
        INSERT INTO tickets (
            title,
            description,
            priority,
            status,
            createdAt,
            userId
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `)

    const createdAt = new Date().toISOString()

    const result = insert.run(
        req.body.title,
        req.body.description,
        req.body.priority,
        "new",
        createdAt,
        req.user!.id
    )

    // Object returned to client
    const ticket: Ticket = {
        id: Number(result.lastInsertRowid),
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: "new",
        createdAt,
        userId: req.user!.id
    }

    res.status(201).json(ticket)
})


// ---------- UPDATE TICKET ----------

app.patch("/tickets/:id", authMiddleware, (req, res) => {
    const id = Number(req.params.id)

    // Find ticket belonging to current user
    const ticket = db.prepare(`
        SELECT * FROM tickets
        WHERE id = ? AND userId = ?
    `).get(id, req.user!.id) as Ticket | undefined

    // Ticket does not exist or belongs to another user
    if (!ticket) {
        return res.status(404).json({
            message: "Ticket not found"
        })
    }

    // Validate title
    if (
        req.body.title !== undefined &&
        req.body.title.trim() === ""
    ) {
        return res.status(400).json({
            message: "Title cannot be empty"
        })
    }

    // Validate description
    if (
        req.body.description !== undefined &&
        req.body.description.trim() === ""
    ) {
        return res.status(400).json({
            message: "Description cannot be empty"
        })
    }

    // Validate status
    if (
        req.body.status !== undefined &&
        ![
            "new",
            "in-progress",
            "completed",
            "cancelled"
        ].includes(req.body.status)
    ) {
        return res.status(400).json({
            message: "Invalid status"
        })
    }

    // Validate priority
    if (
        req.body.priority !== undefined &&
        !["low", "medium", "high"].includes(req.body.priority)
    ) {
        return res.status(400).json({
            message: "Invalid priority"
        })
    }

    // Keep old value if field was not provided
    const newTitle =
        req.body.title !== undefined
            ? req.body.title
            : ticket.title

    const newDescription =
        req.body.description !== undefined
            ? req.body.description
            : ticket.description

    const newPriority =
        req.body.priority !== undefined
            ? req.body.priority
            : ticket.priority

    const newStatus =
        req.body.status !== undefined
            ? req.body.status
            : ticket.status

    // Update ticket
    const update = db.prepare(`
        UPDATE tickets
        SET
            title = ?,
            description = ?,
            priority = ?,
            status = ?
        WHERE id = ?
    `)

    update.run(
        newTitle,
        newDescription,
        newPriority,
        newStatus,
        id
    )

    // Return updated ticket
    const updatedTicket = db.prepare(`
        SELECT * FROM tickets
        WHERE id = ?
    `).get(id)

    res.json(updatedTicket)
})


// ---------- DELETE TICKET ----------

app.delete("/tickets/:id", authMiddleware, (req, res) => {
    const id = Number(req.params.id)

    // Delete only ticket belonging to current user
    const result = db.prepare(`
        DELETE FROM tickets
        WHERE id = ? AND userId = ?
    `).run(id, req.user!.id)

    // Ticket was not found or belongs to another user
    if (result.changes === 0) {
        return res.status(404).json({
            message: "Ticket not found"
        })
    }

    // 204 = successful request with no response body
    return res.status(204).send()
})


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
