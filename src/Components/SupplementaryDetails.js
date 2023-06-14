import React from "react";
import SelectOptionItem from "../Components/SelectOptionItem";
import InputItem from "../Components/InputItem";
import Country from "../Components/Country";

   const SelectGender    = ["Select Gender","Male","Female"];
   const SelectMartialStatus   = ["Select Martial Status","MARRIED","DIVORCE","SINGLE"];
  const SelectCardHolder    = ["Select Relation Cardholder","Father","Mother","Sister","Brother","Son","Daughter","Spouse"];


class SupplementaryDetails extends React.Component{

    constructor() {
        super();
    
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange() {
        this.setState({
          checked: !this.state.checked
        })
      }

    render(){
        const content = this.state.checked 
        ? <>                   
        <form className="row g-3">
                {/* Column Six 2nd Section Start */}
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                        <div className="card-body mt-3">
                        <InputItem Name="Customer Name" Inputplaceholder="Enter Customer Name" />
                      <InputItem Name="SurName" Inputplaceholder="Enter SurName" />
                      <InputItem Name="Emboss Name" Inputplaceholder="Enter Emboss Name" />
                      <InputItem Name="Date Of Birth (DD/MM/YYYY)" Inputplaceholder="Enter Date Of Birth" />
                      <InputItem Name="Place Of Birth" Inputplaceholder="Enter Place Of Birth" />

                       {/* Nested Col Start */}
                       <div className="row">
                                <div className="col-md-6">
                                <div className="mb-3">
                                <label>Gender</label>
                                  <select className="form-select" aria-label="Default select example">
                                  {SelectGender.map((name)=><SelectOptionItem name={name}/>)}
                                  </select>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                                  <label>Martial Status</label>
                                    <select className="form-select" aria-label="Default select example">
                                    {SelectMartialStatus.map((name)=><SelectOptionItem name={name}/>)}
                                    </select>
                                  </div>
                                </div>
                            </div>
                            {/* Nested Col Start */}
                     
                   
                      <InputItem Name="NRIC" Inputplaceholder="Enter NRIC" />
                      <InputItem Name="NRC Issue Date (DD/MM/YYYY)" Inputplaceholder="Enter NRC Issue Date" />
                      <InputItem Name="Passport Expire Date (DD/MM/YYYY)" Inputplaceholder="Enter Expire Date" />
                      
                       {/* Nested Col Start */}
                          <div className="row">
                                <div className="col-md-6">
                                <InputItem Name="NRC Issue Place" Inputplaceholder="Enter NRC Issue Place" />
                                </div>
                                <div className="col-md-6">
                                <Country Name="Nationality"/>
                                </div>
                          </div>
                        {/* Nested Col Start */}

                         {/* Nested Col Start */}
                         <div className="row">
                                <div className="col-md-6">
                                <InputItem Name="Email" Inputplaceholder="Enter Email" />
                                </div>
                                <div className="col-md-6">
                                <InputItem Name="Income" Inputplaceholder="Enter Income" />
                                </div>
                          </div>
                        {/* Nested Col Start */}

                      <div className="mb-3">
                    <label>Relationship to Principal Cardholder</label>
                      <select className="form-select" aria-label="Default select example">
                      {SelectCardHolder.map((name)=><SelectOptionItem name={name}/>)}
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
                      <h5 className="card-title">Supply. Address	</h5><br/>
                      <InputItem Name="Address1" Inputplaceholder="Enter Address1" />
                      <InputItem Name="Address2 " Inputplaceholder="Enter Address2 " />
                      <Country Name="Country"/>
                      <InputItem Name="State" Inputplaceholder="Enter State" />

                      <InputItem Name="City" Inputplaceholder="Enter City" />
                      <InputItem Name="Township" Inputplaceholder="Enter Township" />
                      <InputItem Name="PostalCode" Inputplaceholder="Enter PostalCode" />
                      <InputItem Name="Phone" Inputplaceholder="Enter Phone" />
                      <InputItem Name="Fax" Inputplaceholder="Enter Fax" />
                      
                        
                      </div>
                    </div>
                  </div>

                 
                 </div>
                </div>
                {/* Column Six 2nd Section End */}

              </form>

         {/* Column Six 1st Section Start */}
       
          
        </>
        : null;
        return(<>


        <section className="section">
              <div className="row">
                <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-6">
                        <h5 className="card-title p-0">Supp. Applicant Details</h5>
                            <div className="d-flex justify-content-between">
                            <p><span>SupplementaryCardRequired	</span></p>
                            <p className="px-5"><input type="checkbox" checked={ this.state.checked } 
                            onChange={ this.handleChange }/> </p>
                          </div>
                        </div>
                      </div>
                  { content }

                </div>
              </div>
          </section> 
       
        
        </>);
    }
}

export default SupplementaryDetails;