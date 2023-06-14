import React from 'react';
import { Link } from 'react-router-dom';
class RecentActivity extends React.Component{
    render(){
        return(<>
            <div className="col-12">
                <div className="card">
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
                    <h5 className="card-title">Recent Activity <span>| Today</span></h5>

                    <div className="activity">

                        <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div className="activity-content">
                            Quia quae rerum <Link to="#" className="fw-bold text-dark">explicabo officiis</Link> beatae
                        </div>
                        </div>

                        <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                        <div className="activity-content">
                            Voluptatem blanditiis blanditiis eveniet
                        </div>
                        </div>

                        <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                        <div className="activity-content">
                            Voluptates corrupti molestias voluptatem
                        </div>
                        </div>

                        <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                        <div className="activity-content">
                            Tempore autem saepe <Link to="#" className="fw-bold text-dark">occaecati voluptatem</Link> tempore
                        </div>
                        </div>

                        <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                        <div className="activity-content">
                            Est sit eum reiciendis exercitationem
                        </div>
                        </div>

                        <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                        <div className="activity-content">
                            Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                        </div>
                        </div>

                    </div>

                    </div>
                </div>
            </div>          
        </>)
    }
}

export default RecentActivity;