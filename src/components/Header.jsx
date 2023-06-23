import React from 'react'
import { NavLink,Link} from 'react-router-dom'

function Header() 
{
    return(
        <header className='flex container'>
            <Link className="site-logo ff-secondary fs-h2 fw-bold letter-spacing-3 text-dark" to="/">#VanLife</Link>
            <nav className='flex'>
                <NavLink to="/host">Host</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/vans">Vans</NavLink>
            </nav>
        </header>
    )
}
export default Header