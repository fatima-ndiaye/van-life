import React from 'react'
import { NavLink} from 'react-router-dom'

function HostHeader() 
{
    const activeStyle =
    {
        fontWeight:"bold",
        color: "#161616"
    }
    return(   
        <nav className='host-nav-detail flex'>
            <NavLink to="." end style={({isActive})=> isActive ?activeStyle:null}>Detail</NavLink>
            <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyle : null}>Pricing</NavLink>
            <NavLink to="photos" style={({ isActive }) => isActive ? activeStyle : null}>Photos</NavLink>
        </nav>
    )
}
export default HostHeader

