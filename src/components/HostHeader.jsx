import React from 'react'
import { NavLink} from 'react-router-dom'

function Header() 
{
    const activeStyle =
    {
        fontWeight:"bold",
        color: "#161616"
    }
    return(
        <header className=''>
            <nav className='flex'>
                <NavLink to="." style={({isActive})=> isActive ?activeStyle:null}>Detail</NavLink>
                <NavLink to="pricing" style={({ isActive }) => isActive ? activeStyle : null}>Pricing</NavLink>
                <NavLink to="photos" style={({ isActive }) => isActive ? activeStyle : null}>Photos</NavLink>
            </nav>
        </header>
    )
}
export default Header

