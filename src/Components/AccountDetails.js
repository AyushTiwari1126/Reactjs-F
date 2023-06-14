import React from "react";
import ButtonActions from "./ButtonActions";
import SelectOptionItem from "../Components/SelectOptionItem";
const SelectBillingCycleDay = ["Select Billing Cycle Day","13","16","28","33","10"];
const SelectCurrency = ["Select Currency","AUD - Australian Dollar","CAD - Canadian Dollar","CZK - Czech Koruna","DKK - Danish Krone",
"HKD - Hong Kong Dollar","INR - Indian Rupee","JPY - Yen","SGD - Singapore Dollar","AED - UAE Dirham","GBP - Pound Sterling",
"USD - US Dollar","MZN - Mozambique Metical","EUR - Euro"];


class AccountDetails extends React.Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="row">
            <div className="col-lg-12">
              <form className="row g-3">
                {/* Column Six 2nd Section Start */}
                <div className="col-md-6">
                 <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                      <h5 className="card-title">Card Risk Limits</h5>
                             <div className="mb-3">
                                <label>Billing Cycle Day</label>
                                  <select className="form-select" aria-label="Default select example">
                                  {SelectBillingCycleDay.map((name)=><SelectOptionItem name={name}/>)}
                                  </select>
                            </div>
                      </div>
                    </div>
                  </div>

                 </div>
                </div>
                {/* Column Six 2nd Section End */}

                 {/* Column Six 2nd Section Start */}
                <div className="col-md-6">
                 <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                      <h5 className="card-title">Account Details</h5>

                      <div className="mb-3">
                                <label>Currency</label>
                                  <select className="form-select" aria-label="Default select example">
                                  {SelectCurrency.map((name)=><SelectOptionItem name={name}/>)}
                                  </select>
                            </div>
                     
                        
                      </div>
                    </div>
                  </div>

                 
                 </div>
                </div>
                {/* Column Six 2nd Section End */}


                <ButtonActions items={[{title:"Save", is_primary:true}, {title:"Cancel",is_seconday:true}]}/>
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AccountDetails;
