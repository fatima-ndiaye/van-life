import React, { Suspense} from 'react'
import { Link, useSearchParams, useLoaderData, defer, Await } from 'react-router-dom'
import { getVans } from "../../api"

export function loader()
{
    return defer({ vans: getVans() })
}

function Vans() 
{
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    const dataPromise = useLoaderData()


    function handleFilterChange(key, value) 
    {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    function renderVansEl (vans)  
    {
        const displayedVans = typeFilter
            ? vans.filter(van => van.type.toLowerCase() === typeFilter)
            : vans

        const vanEl = displayedVans.map
            (

                van => (
                    <div className='van-tile' key={van.id}>
                        <Link to={van.id} state={{ search: `?${searchParams.toString()}`, type: typeFilter }} className='text-dark flex'>
                            <img src={van.imageUrl} className='van-img' />
                            <div className='van-info flex'>
                                <h3 className='van-name fs-h3'>{van.name}</h3>
                                <p className='fw-bold'>${van.price}<span className='fw-reg'>/day</span></p>
                            </div>
                            <i className={`van-type ${van.type} selected bg-accent`}>{van.type}</i>
                        </Link>
                    </div>)
            )
        return (
            <>
                <div className='van-list-filters flex'>
                    <button onClick={() => handleFilterChange("type", "simple")} className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}>simple</button>
                    <button onClick={() => handleFilterChange("type", "luxury")} className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}>Luxury</button>
                    <button onClick={() => handleFilterChange("type", "rugged")} className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}>Rugged</button>
                    {typeFilter && <button onClick={() => handleFilterChange("type", null)} className='van-type clear-filters'>Clear Filters</button>}

                </div>
                <div className='van-list grid'>
                    {vanEl}
                </div>
            </>
        )

    }
    return (
        <div className='van-list-container container flex'>
            <h2 className='fs-h2 letter-spacing-2'>Explore our van options</h2>
            <Suspense fallback={<h2 className='fs-h3 fw-light'>Loading vans ...</h2>}>
                <Await resolve={dataPromise.vans}>
                    {renderVansEl}
                </Await>
            </Suspense>
          
            
        </div>
    )
}
export default Vans
