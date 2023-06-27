import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo()
{
    const hostVan = useOutletContext()
    return(
        <section>
            {
                hostVan ?
                <div className='host-van-info-container flex'>
                    <p><span className='fw-bold'>Name: </span>{hostVan.name}</p>
                    <p><span className='fw-bold'>Category: </span> {hostVan.type}</p>
                    <p><span className='fw-bold'>Description: </span>{hostVan.description}</p>
                    <p><span className='fw-bold'>Visibility: </span>Public</p>
                </div>

            :<h2>Loading</h2>


            }

        </section>
    )
}
export default HostVanInfo