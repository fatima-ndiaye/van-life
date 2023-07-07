import React, {Suspense} from 'react'
import { Link, useLoaderData, defer, Await } from 'react-router-dom'
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({ request }) 
{
    await requireAuth(request)
    return defer({ hostVans: getHostVans() })
}

function HostVans() {
    const dataPromise = useLoaderData()



    return (
        <div className='van-host-list-container container flex'>
            <h2>Your Listed Vans</h2>
            <Suspense fallback={<h2 className='fs-h3 fw-light'>Loading vans ...</h2>}>
                <Await resolve={dataPromise.hostVans}>
                    {
                        hostVans =>
                        {
                            const hostVanEl = hostVans.map
                            (hostVan => 
                                (
                                    <Link to={hostVan.id} key={hostVan.id} className='host-van-link-tile text-dark'>
                                        <div className='host-van-tile flex bg-light' key={hostVan.id}>
                                            <img src={hostVan.imageUrl} className='host-van-img' />
                                            <div className='host-van-info'>
                                                <h3 className='fs-h3'>{hostVan.name}</h3>
                                                <p>${hostVan.price}/day</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            )
                            return (
                                <div className='van-host-list flex'>
                                    {hostVanEl}
                                </div>
                            )

                        }
                    }
                </Await>
            </Suspense>

            
        </div>
        
    )
}
export default HostVans