import React from 'react';
import { Link } from 'react-router-dom';
class RecentApplications extends React.Component{
    render(){
        return(<>
    <div className="card recent-sales overflow-auto">

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
        <h5 className="card-title">Recent Applications <span>| Today</span></h5>

        <table className="table table-borderless datatable">
            <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">Product</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row"><Link to="#">#2457</Link></th>
                <td>Brandon Jacob</td>
                <td><Link to="#" className="text-primary">At praesentium minu</Link></td>
                <td><span className="badge bg-success">Approved</span></td>
            </tr>
            <tr>
                <th scope="row"><Link to="#">#2147</Link></th>
                <td>Bridie Kessler</td>
                <td><Link to="#" className="text-primary">Blanditiis dolor omnis similique</Link></td>
                <td><span className="badge bg-warning">Pending</span></td>
            </tr>
            <tr>
                <th scope="row"><Link to="#">#2049</Link></th>
                <td>Ashleigh Langosh</td>
                <td><Link to="#" className="text-primary">At recusandae consectetur</Link></td>
                <td><span className="badge bg-success">Approved</span></td>
            </tr>
            <tr>
                <th scope="row"><Link to="#">#2644</Link></th>
                <td>Angus Grady</td>
                <td><Link to="#" className="text-primar">Ut voluptatem id earum et</Link></td>
                <td><span className="badge bg-danger">Rejected</span></td>
            </tr>
            <tr>
                <th scope="row"><Link to="#">#2644</Link></th>
                <td>Raheem Lehner</td>
                <td><Link to="#" className="text-primary">Sunt similique distinctio</Link></td>
                <td><span className="badge bg-success">Approved</span></td>
            </tr>
            </tbody>
        </table>

        </div>

    </div>
        
        </>);
    }
}

export default RecentApplications;