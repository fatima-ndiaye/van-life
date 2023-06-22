import React from 'react'
import { Link } from 'react-router-dom'

function Header() 
{
    return(
        <header className='flex container'>
            <Link className="site-logo ff-secondary fs-h2 fw-bold letter-spacing-3 text-dark" to="/">#VanLife</Link>
            <nav className='flex'>
                <Link to="/host">Host</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}
export default Header