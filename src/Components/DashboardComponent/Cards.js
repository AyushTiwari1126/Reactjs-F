import React from 'react'
import { Link } from 'react-router-dom';

function Cards(Props){
    return(<>
        
            <div className={Props.MainDivClassName}>

            <div className="filter">
            <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                <li className="dropdown-header text-start">
                <h6>Filter</h6>
                </li>

                <li><Link className="dropdown-item" to="#">Today</Link></li>
                <li><Link className="dropdown-item" to="#">This Month</Link></li>
                <li><Link className="dropdown-item" to="#">This Year</Link></li>
            </ul>
            </div>

            <div className="card-body">
            <h5 className="card-title"><Link to={Props.RedirectCate}>{Props.CardTitle}</Link> <span><br/> {Props.CardSpan}</span></h5>

            <div className="d-flex align-items-center">
                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className={Props.CardIcon}></i>
                </div>
                <div className="ps-3">
                <h6>{Props.CardHeading}</h6>
                <span className="text-success small pt-1 fw-bold">{Props.TxtSuccess}</span> <span className="text-muted small pt-2 ps-1">increase</span>

                </div>
            </div>
            </div>

            </div>
        </>)
}
export default Cards;