import React from 'react'
import { NavLink,Link} from 'react-router-dom'
import imageUrl from "../assets/avatar-icon.png"

function Header() 
{
    const activeStyle =
    {
        fontWeight:"bold",
        color: "#161616"

    }
    return(
        <header className='flex container'>
            <Link className="site-logo ff-secondary fs-h2 fw-bold letter-spacing-3 text-dark" to="/">#VanLife</Link>
            <nav className='flex'>
                <NavLink to="/host" style={({isActive})=> isActive ?activeStyle:null}>Host</NavLink>
                <NavLink to="/about" style={({ isActive }) => isActive ? activeStyle : null}>About</NavLink>
                <NavLink to="/vans" style={({ isActive }) => isActive ? activeStyle : null}>Vans</NavLink>
                <Link to="login" className='login-link'>
                    <img src={imageUrl} className='login-icon'/>
                </Link>
            </nav>
        </header>
    )
}
export default Header

