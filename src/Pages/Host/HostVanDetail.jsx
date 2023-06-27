import React, {useState, useEffect} from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import HostHeader from '../../components/HostHeader'

function HostVanDetail() 
{
    const params = useParams()
    const [hostVan, setHostVan] = useState(null)
    useEffect(()=>
    {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setHostVan(data.vans))
    },[params.id])
    
    return (
    <section>
        <Link to=".." relative='path' className="back-button text-dark">&larr; <span>Back to all vans</span></Link>

        <div className='host-van-detail-container'>
         {
            hostVan ?
                <div className="host-van-detail flex">
                    <img src={hostVan.imageUrl} />
                    <div className="host-van-detail-info flex">
                        <i className={`van-type ${hostVan.type} selected bg-accent`}>{hostVan.type}</i>
                        <h3 className="fs-h3">{hostVan.name}</h3>
                        <p className='fw-bold'>${hostVan.price}<span className='fw-reg'>/day</span></p>
                    </div>
                </div>
            :<h2>Loading...</h2>
         }
        <HostHeader />
        <Outlet context={hostVan}/>
        </div>
    </section>
    )
}
export default HostVanDetail
