import React from 'react'
import {Link} from 'react-router-dom'

function Home() 
{ 
return(
    <div className='home-container'>
        <div className='home-content flex container'>
            <h1 className='home-title text-light btn ff-secondary fs-h1 '>You got the travel plans, we got the travel vans.</h1>
            <p className='text-light btn'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className='text-light fw-bold link-btn home-btn' to="/vans">Find your van</Link>
        </div>
    </div>
)
}
export default Home