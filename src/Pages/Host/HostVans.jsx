import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

function HostVans() {
    const [hostVans, setHostVans] = useState([])
    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data =>setHostVans(data.vans))
    }, [])

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
                {
                    hostVans.length > 0 ?  hostVanEl 
                    :
                    <h2>Loading</h2>
                }
            </div>
            
        </div>
        
    )
}
export default HostVans