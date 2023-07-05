import React, {useState, useEffect} from "react"
import { useLoaderData, useNavigate, Form } from "react-router-dom"
import {loginUser} from '../api'

export function loader({request})
{
    return new URL(request.url).searchParams.get("message")
}
export async function action({ request }) 
{
    const formData = await  request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({ email, password })
    localStorage.setItem('loggedin', true)
    return null
}

export default function Login() {
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()


    /*function handleSubmit(e) 
    {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
        .then(data => navigate("/host", {replace:true}))
        .catch(err => setError(err))
        .finally(() => setStatus("idle"))
    }*/

  
    return (
        <div className="login-container container flex">
            <h2 className="fs-h2 fw-light">Sign in to your account</h2>
            {message && <h3 className="">{message}</h3>}
            {error && <h3 className="">{error.message}</h3>}
            <Form className="login-form flex" method="post">
                <div className="input-container flex">
                    <input
                        name="email"
                        type="email"
                        placeholder="Email address"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </div>
                <button className="link-btn login-btn bg-accent text-dark" disabled={status === "submitting"}>
                    {status === "submitting"? "Logging in...": "Log in"}
                </button>
            </Form>
        </div>
    )

}