import React from 'react'
import { useRouteError } from "react-router-dom"


function Error() {
    const error = useRouteError()
    return (
        <div className='container'>
            <h2 className='fs-h3'>Error: {error.message}</h2>
            <pre>{error.status} - {error.statusText}</pre>

        </div>
    )
}
export default Error