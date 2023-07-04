import {Link, useParams, useLocation, useLoaderData} from 'react-router-dom'
import { getVans } from "../../api"

export function loader({params})
{
    return getVans(params.id)
}

function VanDetail() 
{
    const location = useLocation()
    const van = useLoaderData()


    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    return (
        <div className="van-detail-container container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button text-dark"
            >&larr; <span>Back to {type} vans</span></Link>
            
             
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
                
               
            
        </div>
    )
}

export default VanDetail
