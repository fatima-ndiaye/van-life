import React from 'react'
import { Link } from 'react-router-dom'

function About() 
{ 
return(
    <div className='about-page-container'>
        <div className='about-hero'></div>
        <div className='container'>
            <div className=' about-page-content'>
                <h2 className='fs-h2'>Don’t squeeze in a sedan when you could relax in a van.</h2> 
                <p>
                    Our objective is to enhance your road trip experience by providing you with an ideal rental van for travel. 
                    Prior to each trip, our vans undergo recertification to ensure that your travel plans proceed smoothly, without any issues. 
                    (Additional charges may apply for a hitch 😉). 
                </p>
                <p>
                    Our team consists of passionate vanlife enthusiasts who have personally
                    experienced the enchantment of exploring the world on four wheels
                </p>
            </div>

            <div className='about-page-cta bg-accent flex'>
                <h3>
                    Your destination awaits. <br />
                    Your van is ready.
                </h3> 
                <Link to="/vans" className='link-btn link-btn-cta bg-dark text-light'>Explore our vans</Link>
                
            </div>
        </div>
    </div>
)
}
export default About