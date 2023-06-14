import React, { Component } from 'react';
import PendingTableDataRow from './PendingTableDataRow';

class PendingApplicationData extends Component {
  
  constructor(props){
    super(props);
    this.props = props;
    this.onUpdateCalled = this.props.onUpdate;
  }
 
  render() {
    return (
      <>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Pending Applications</h5>
                  {/* Table with stripped rows */}
                  <div className="datatable-container">
                    <table className="table datatable table-hover">
                      <thead>
                        <tr>
                          <th scope="col">Application ID</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Updated Date</th>
                          <th scope="col">Details</th>
                        </tr>
                      </thead>
                      <tbody>
                          {
                          this.props.data.map( (element)=>{ return <PendingTableDataRow  id = {element.applicationId}
                          name = {element.customerName} date = {element.updatedDate} onUpdate= {this.onUpdateCalled} />})
                          }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PendingApplicationData;