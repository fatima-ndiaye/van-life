import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing()
{
    const hostVan = useOutletContext()
    return(
        <p><span className='fw-bold'>${hostVan.price}</span>/day</p>
    )
}
export default HostVanPricing