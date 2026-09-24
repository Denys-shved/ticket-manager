import React, { useState } from "react"
import { login } from "../api/ticketApi"
import { useNavigate } from "react-router-dom"

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    

    async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    setError("")
    try{
        const data = await login(email, password)

    localStorage.setItem("token", data.token)

    navigate("/tickets")
    }
    catch(error) {
    setError("Invalid email or password")
    }
}

// Email: test@test.com
// Password: пароль, який ти задавав цьому користувачу

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input type="email" value={email}
                onChange={event => setEmail(event.target.value)} 
                placeholder="123@mail.com" />
                <input type="password" value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="pasword" />
                {error && <p>{error}</p>}
                <button>Login</button>
            </form>
        </div>
    )
}