import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function HostLayout()
{
    const activeStyles =
    {
        fontWeight: "bold",
        color: "#161616"

    }
    return(
        <div className="container">
            <nav className='flex host-nav'>
                <NavLink to="." end style={({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
                <NavLink to="income" style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
                <NavLink to="vans" style={({ isActive }) => isActive ? activeStyles : null}>Vans</NavLink>
                <NavLink to="reviews" style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        
        </div>
    )
}
export default HostLayout

