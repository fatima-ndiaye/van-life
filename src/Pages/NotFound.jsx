import React from 'react'
import {Link} from 'react-router-dom'

function NotFound()
{
    return(
        <div className='container flex not-found-container'>
            <h2>Sorry, the page you were looking for was not found.</h2>
            <Link className='text-light bg-dark fw-bold link-btn' to="/">Return Home</Link>
        </div>

    )
}
export default NotFound