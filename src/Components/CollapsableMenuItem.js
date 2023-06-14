import React from "react";
import SubMenuItem from "./SubMenuItem";

class CollapsableMenuItem extends React.Component {

  convertToTargeBs = (id) => {
    return "#" + id;
  }


  render() {

    return <li className="nav-item">
      <a className="nav-link collapsed" data-bs-target={this.convertToTargeBs(this.props.id)} data-bs-toggle="collapse" href="#">
        <i className={this.props.iconClass}></i><span>{this.props.name}</span><i className="bi bi-chevron-down ms-auto"></i>
      </a>
      <ul id={this.props.id} className="nav-content collapse " data-bs-parent="#sidebar-nav">
        {this.props.submenus.map((n) => <SubMenuItem name={n.name} path={n.path} />)}
      </ul>
    </li>
  }
}

export default CollapsableMenuItem;