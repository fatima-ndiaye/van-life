import React, {useState} from "react"
import { useLoaderData, useNavigate } from "react-router-dom"
import {loginUser} from '../api'

export function loader({request})
{
    return new URL(request.url).searchParams.get("message")
}
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()


    function handleSubmit(e) 
    {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
        .then(data => navigate("/host/vans"))
        .catch(err => setError(err))
        .finally(() => setStatus("idle"))
       

    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
  
    return (
        <div className="login-container container flex">
            <h2 className="fs-h2 fw-light">Sign in to your account</h2>
            {message && <h3 className="">{message}</h3>}
            {error && <h3 className="">{error.message}</h3>}
            <form onSubmit={handleSubmit} className="login-form flex">
                <div className="input-container flex">
                    <input
                        name="email"
                        onChange={handleChange}
                        type="email"
                        placeholder="Email address"
                        value={loginFormData.email}
                    />
                    <input
                        name="password"
                        onChange={handleChange}
                        type="password"
                        placeholder="Password"
                        value={loginFormData.password}
                    />
                </div>
                <button className="link-btn login-btn bg-accent text-dark" disabled={status === "submitting"}>
                    {status === "submitting"? "Logging in...": "Log in"}
                </button>
            </form>
        </div>
    )

}