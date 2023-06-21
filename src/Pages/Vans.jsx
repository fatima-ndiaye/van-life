import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Vans() {

    const [vans, setVans] = useState([])
    useEffect(()=>{
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => 
                setVans(data.vans))
    },[])

    const vanEl = vans.map(van =>{
        return (
        <div className='van' key={van.id}>
            <img src={van.imageUrl} className='van-img' />
            <div className='van-info'>
                    <h3 className='van-name fs-h3'>{van.name}</h3>
                    <p><span>{van.price}</span>/day</p>
            </div>

        </div>)
    })
    return (
        <div className='vans-container container'>
            <h2>Explore our van options</h2>
            <div className='vans-filters'></div>
            <div className='vans-list'>
                {vanEl}
            </div>
          
            
        </div>
    )
}
export default Vans