
import React from "react";
import { Link } from "react-router-dom";

class SubMenuItem extends React.Component {

  render() {
    return (
      <li>
        <Link className="nav-link " to={this.props.path}>

          <i className="bi bi-circle"></i><span>{this.props.name}</span>
        </Link>

      </li>
    );
  }
}

export default SubMenuItem;