import React, {useState, useEffect} from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import HostHeader from '../../components/HostHeader'
import { getHostVans } from "../../api"

export function loader({params})
{ 
    return getHostVans(params.id)
}

function HostVanDetail() 
{
    const hostVan = useLoaderData()
    return (
    <section>
        <Link to=".." relative='path' className="back-button text-dark">&larr; <span>Back to all vans</span></Link>

        <div className='host-van-detail-container'>
            
            <div className="host-van-detail flex">
                <img src={hostVan.imageUrl} />
                <div className="host-van-detail-info flex">
                    <i className={`van-type ${hostVan.type} selected bg-accent`}>{hostVan.type}</i>
                    <h3 className="fs-h3">{hostVan.name}</h3>
                    <p className='fw-bold'>${hostVan.price}<span className='fw-reg'>/day</span></p>
                </div>
            </div>
         
        <HostHeader />
        <Outlet context={hostVan}/>
        </div>
    </section>
    )
}
export default HostVanDetail
