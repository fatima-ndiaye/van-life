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
        <div className='van-tile flex' key={van.id}>
            <img src={van.imageUrl} className='van-img' />
            <div className='van-info flex'>
                    <h3 className='van-name fs-h3'>{van.name}</h3>
                    <p className='fw-bold'>${van.price}<span className='fw-reg'>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected bg-accent`}>{van.type}</i>

        </div>)
    })
    return (
        <div className='van-list-container container flex'>
            <h2 className='fs-h2 letter-spacing-2'>Explore our van options</h2>
            <div className='vans-filters'></div>
            <div className='van-list grid'>
                {vanEl}
            </div>
          
            
        </div>
    )
}
export default Vans