import React from 'react'
import { useParams } from 'react-router-dom'

function HostVanDetail() 
{
    const param = useParams()
    return (
        <h1>Host Van Detail {param.id}</h1>
    )
}
export default HostVanDetail