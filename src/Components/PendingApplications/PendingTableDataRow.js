import React, { Component } from 'react'

class PendingTableDataRow extends Component {
  render() {
    return <tr className="align-middle">
      <th scope="row">{this.props.id}</th>
      <td>{this.props.name}</td>
      <td>{this.props.date}</td>
      <td><button className="btn btn-primary btn-sm" onClick= {()=>this.props.onUpdate(this.props.id)}>Update</button></td>
    </tr>
  }
}

export default PendingTableDataRow;
