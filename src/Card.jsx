import React from 'react'
import Sdata from './Sdata'
import { NavLink } from 'react-router-dom'
function Card(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                        <img src={props.imgsrc} className="card-img-top"  alt="IMAGE" style={{objectFit:"cover",height:"200px"}} />
                     <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">{props.work}</p>
                        <NavLink to={props.visit} className="btn btn-primary">{props.btnname}</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
