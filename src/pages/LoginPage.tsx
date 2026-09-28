import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login, ApiError } from "../api/ticketApi"

export function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    
    
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()

        setIsLoading(true)
        setError("")

        try {
            const data = await login(email, password)

            localStorage.setItem("token", data.token)

            navigate("/tickets")
        }
        catch (error) {
            if (error instanceof ApiError && error.status === 401) {
                setError("неправильний email або пароль")
            } else {
                setError("інша помилка")
            }
        }
        finally {
            setIsLoading(false)
        }
    }

// Email: test@test.com
// Password: пароль, який ти задавав цьому користувачу

    return (
        <div className="login-page">
           <h1 className="login-title">
                Login
            </h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                </label>

                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    placeholder="123@mail.com"
                />

                <label htmlFor="password">
                    Password
                </label>

                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="password"
                />
                {error && <p>{error}</p>}
                <button className="button-login" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    )
}