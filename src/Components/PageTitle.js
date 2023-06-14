import React from "react"
import { Link } from "react-router-dom";

class PageTitle extends React.Component {

    render() {
        return (
            <>
                <div className="pagetitle">
                    <h1>{this.props.title}</h1>
                    <nav>
                        <ol className="breadcrumb">
                           
                            <li className="breadcrumb-item"> 
                            <Link className="nav-link " to={this.props.homePath}>{this.props.home}</Link>
                            </li>
                            <li className="breadcrumb-item active">{this.props.title}</li>
                        </ol>
                    </nav>
                </div>
            </>
        )

    }
}

export default PageTitle;