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
                <NavLink to="/host" end style={({ isActive }) => isActive ? activeStyles : null}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({ isActive }) => isActive ? activeStyles : null}>Income</NavLink>
                <NavLink to="/host/reviews" style={({ isActive }) => isActive ? activeStyles : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        
        </div>
    )
}
export default HostLayout

