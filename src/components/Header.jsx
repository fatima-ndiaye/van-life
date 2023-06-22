import React from 'react'
import { Link } from 'react-router-dom'

function Header() 
{
    return(
        <header className='flex container'>
            <p className='ff-secondary fs-h2 fw-bold letter-spacing-3'>#VanLife</p>
            <nav className='flex'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/vans">Vans</Link>
            </nav>
        </header>
    )
}
export default Header