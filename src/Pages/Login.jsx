import React from "react"
import { useLoaderData } from "react-router-dom"

export function loader({request})
{
    return new URL(request.url).searchParams.get("message")
}
export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const message = useLoaderData()


    function handleSubmit(e) {
        e.preventDefault()
        console.log(loginFormData)
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
                <button className="link-btn login-btn bg-accent text-dark">Log in</button>
            </form>
        </div>
    )

}