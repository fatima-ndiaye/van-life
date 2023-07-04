import React, {useState, useEffect} from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from "../../api"

export function loader({params})
{ 
    return getHostVans(params.id)
}

function HostVans() {
    const hostVans = useLoaderData()


    const hostVanEl = hostVans.map(hostVan =>{
        return(
            <Link to={hostVan.id} key={hostVan.id} className='host-van-link-tile text-dark'>
                <div className='host-van-tile flex bg-light' key={hostVan.id}>
                    <img src={hostVan.imageUrl}  className='host-van-img'/>
                    <div className='host-van-info'>
                        <h3 className='fs-h3'>{hostVan.name}</h3>
                        <p>${hostVan.price}/day</p>
                    </div>
                </div>
            </Link>

            
        )
    })
    return (
        <div className='van-host-list-container container flex'>
            <h2>Your Listed Vans</h2>
            <div className='van-host-list flex'>
                {hostVanEl}
            </div>
            
        </div>
        
    )
}
export default HostVans