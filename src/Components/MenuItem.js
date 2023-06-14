
import React from "react";
import { Link } from "react-router-dom";

class MenuItem extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (
            <>
                <li className="nav-item">
                    <Link className="nav-link " to={this.props.path}>
                        <i className="bi bi-grid"></i>
                        <span>{this.props.name}</span>
                    </Link>
                </li>
            </>
        );
    }
}

export default MenuItem;