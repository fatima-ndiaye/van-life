import React, {useEffect, useState} from "react"
import {useParams} from 'react-router-dom'

function VanDetail() 
{
    const params = useParams()
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    },[params.id])
    return <h1>Van detail page goes here</h1>
}

export default VanDetail
