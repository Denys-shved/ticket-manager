import React, { useState } from "react"
import { register, ApiError } from "../api/ticketApi"
import { Link, useNavigate } from "react-router-dom"

export function RegisterPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()
    
    
    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault()
        if(confirmPassword !== password){
            setError("невірно підтверджено пароль")
            return
        }

        setIsLoading(true)
        setError("")

        try {
            const data = await register(email, password)

            localStorage.setItem("token", data.token)

            console.log("REGISTER SUCCESS", data)
            console.log("TOKEN", localStorage.getItem("token"))

            navigate("/tickets")
        }
        catch (error) {
            if (error instanceof ApiError && error.status === 409) {
                setError("email вже існує")
            } else {
                setError("помилка реєстрації")
            }
        }
        finally {
            setIsLoading(false)
        }
    }



    return (
        <div className="login-page">
           <h1 className="login-title">
                Registration
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

                <label htmlFor="confirm-password">
                    Confirm Password
                </label>

                <input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    placeholder="confirm password"
                />
                {error && <p>{error}</p>}
                <button className="button-login" disabled={isLoading}>
                    {isLoading ? "Loading..." : "Register"}
                </button>
                <Link className="login-register" to="/login">
                    Login
                </Link>
            </form>
        </div>
    )
}