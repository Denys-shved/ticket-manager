import Database from "better-sqlite3"

const db = new Database("tickets.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS tickets (
        id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        priority TEXT NOT NULL,
        status TEXT NOT NULL,
        createdAt TEXT NOT NULL
    )
`)

const columns = db.prepare(`
    PRAGMA table_info(tickets)
`).all()

const hasUserId = columns.some(
    (column: any) => column.name === "userId"
)

if (!hasUserId) {
    db.exec(`
        ALTER TABLE tickets
        ADD COLUMN userId INTEGER
    `)
}

db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
`)

export default db

// console.log(columns)