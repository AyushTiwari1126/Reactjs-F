import React from "react";


class StatementDetails extends React.Component {
  render() {
    return (
      <>
       <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Card Details</h6>
                  <h5 className="card-title text-center">Customer History Details</h5>
                  {/* Table with stripped rows */}
                  <div className="datatable-container">
                    <table className="table table-striped table-bordered">
                      <thead>
                        <tr>
                          <th scope="col" >ApplicationID</th>
                          <th scope="col" >ApplicationStatus</th>
                          <th scope="col" >CardStatus</th>
                          <th scope="col" >CardNumber</th>
                          <th scope="col" >NRIC</th>
                          <th scope="col" >CreditLimit	</th>
                          <th scope="col" >CardType</th>
                          <th scope="col" >CardProductName</th>
                          <th scope="col" >CardProductType</th>
                          <th scope="col" >ActionDate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr data-index="0">
                            <td >A0530472180119892</td>
                            <td >NEW</td>
                            <td ></td>
                            <td ></td>
                            <td >123456789023332</td>
                            <td ></td>
                            <td >MC Credit Card</td>
                            <td >Debit Card</td>
                            <td >Credit Card</td>
                            <td >30/05/2023</td>
                        </tr>
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

export default StatementDetails;
