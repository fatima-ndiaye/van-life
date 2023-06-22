import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'

function VanDetail() 
{
    const params = useParams()
    const [van, setVan] = useState(null)
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    },[params.id])
    return (
        <div className="van-detail-container container">
            {
                van ? 
                <div className="van-detail flex">
                    <img src={van.imageUrl}/>
                    <div className="van-detail-info flex">
                        <i className={`van-type ${van.type} selected bg-accent`}>{van.type}</i>
                        <h3 className="fs-h3">{van.name}</h3>
                        <p className='fw-bold'>${van.price}<span className='fw-reg'>/day</span></p>
                        <p>{van.description}</p>
                        <button className="link-btn bg-accent">Rent this van</button>
                    </div>
                </div>
                :
                <h2>Loading ...</h2>
            }
        </div>
    )
}

export default VanDetail