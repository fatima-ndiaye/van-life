import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos()
{
    const hostVan = useOutletContext()
    return(
        <img src={hostVan.imageUrl} className='host-van-deatil-photo'/>
    )
}
export default HostVanPhotos