import React, {forwardRef} from "react";
import SelectOptionItem from "../Components/SelectOptionItem";
import InputItem from "../Components/InputItem";
import Country from "../Components/Country";

const SelectJobStatus = [
  {id: "NA", name: "Select Job Type"},
  {id: "S", name: "Self Employed"},
  {id: "U", name: "Unemployed"},
  {id: "H", name: "Home Maker"},
  {id: "T", name: "Student"},
  {id: "R", name: "Retired"},
  {id: "P", name: "Employed"},
  {id: "O", name: "Other Job"},
];
const genders = [
  {id:"NA", name: "Select Gender"},
  {id: "M", name: "Male"},
  {id: "F", name:"Female"}
];
const martialStatus = [
  {id:"NA", name:"Select Martial Status"},
  {id: "M", name: "Married"},
  {id: "D", name: "Divorce"},
  {id: "S", name:"Single"},
  {id: "W", name:"Widow"},
];
const SelectJobType = [
  "Select Job Type",
  "BANKING & FINANCE",
  "IT & COMMUNICATION",
  "GOVERMENT",
  "MANUFACTURING",
  "HOTEL/RESTAURANT",
  "RETAIL",
  "OTHERS",
];
const educationList = [
  {id:"NA", name:"Select Education"},
  {id: "01", name: "Post Graduate/ Graduate"},
  {id: "02", name: "Diploma"},
  {id: "03", name: "Undergraduated"},
  {id: "04",  name: "Secondary"},
  {id: "10", name: "No Education"},
];

const PersonalDetails = forwardRef((props, _ref) => {
  const {
    email, officeAddress, gender, dependent, salary, maritalStatus, education, employement} = props.personalDetails
const {
  address1, address2, state, city, postalCode 
} = officeAddress
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
                      <h5 className="card-title">Employment Details</h5>
                      <div className="mb-3">
                        <label>Job Status</label>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          {SelectJobStatus.map((element) => (
                            <SelectOptionItem 
                            id={element.id} 
                            name={element.name} 
                            isSelected={element.id === employement}
                            />
                          ))}
                        </select>
                      </div>

                       {/* Nested 1 Col Start */}
                       <div className="row">
                                <div className="col-md-6">
                                <InputItem Name="Job Status Others" Inputplaceholder="Enter Job Status Others"/>

                                </div>
                                <div className="col-md-6">
                                <div className="mb-3 mt-2">
                                  <label>Select Job Type</label>
                                  <select className="form-select" aria-label="Default select example">
                                    {SelectJobType.map((name) => (
                                      <SelectOptionItem name={name} />
                                      ))}
                                  </select>
                                </div>
                                
                                </div>
                            </div>
                            {/* Nested 1 Col End */}


                             {/* Nested 1 Col Start */}
                              <div className="row">
                                <div className="col-md-6">
                                    <InputItem Name="Job Type Others" Inputplaceholder="Enter Job Type Others"/>

                                </div>
                                <div className="col-md-6">
                                    <InputItem Name="Income " Inputplaceholder="Enter Income" Value={salary} readOnly={props.readOnly}/>
                                
                                </div>
                            </div>
                            {/* Nested 1 Col End */}


                             {/* Nested 1 Col Start */}
                             <div className="row">
                                <div className="col-md-6">
                                          <InputItem
                                  Name="Company Name "
                                  Inputplaceholder="Enter Company Name "
                                />

                                </div>
                                <div className="col-md-6">
                                        <InputItem
                                Name="Address1"
                                Inputplaceholder="Enter Address 1" Value={address1}
                                readOnly={props.readOnly}
                              />
                                
                                </div>
                            </div>
                            {/* Nested 1 Col End */}

                      
                               {/* Nested 1 Col Start */}
                               <div className="row">
                                <div className="col-md-6">
                                <InputItem
                                Name="Address2"
                                Inputplaceholder="Enter Address 2"
                                Value={address2}
                                readOnly={props.readOnly}
                              />

                                </div>
                                <div className="col-md-6">
                                <Country Name="Country" />
                                </div>
                            </div>
                            {/* Nested 1 Col End */}

                      {/* Nested Col Start */}
                      <div className="row">
                        <div className="col-md-6">
                          <InputItem
                            Name="State"
                          Inputplaceholder= "Enter State"
                          Value={state}
                          readOnly={props.readOnly}
                          />
                        </div>
                        <div className="col-md-6">
                          <InputItem
                            Name="City"
                            Inputplaceholder= "Enter City"
                            Value={city}
                            readOnly={props.readOnly}
                          />
                        </div>
                      </div>
                      {/* Nested Col Start */}

                      {/* Nested 1 Col Start */}
                      <div className="row">
                                <div className="col-md-6">
                                <InputItem
                                  Name="Township"
                                  Inputplaceholder="Enter Township"
                                />

                                </div>
                                <div className="col-md-6">
                                <InputItem
                                Name="PostalCode"
                                Inputplaceholder= "Enter PostalCode"
                                Value={postalCode}
                                readOnly={props.readOnly}
                              />
                                </div>
                        </div>
                            {/* Nested 1 Col End */}
                     
                      

                      {/* Nested Col Start */}
                      <div className="row">
                        <div className="col-md-6">
                          <InputItem
                            Name="Phone"
                            Inputplaceholder="Enter Phone"
                          />
                        </div>
                        <div className="col-md-6">
                          <InputItem Name="Fax" Inputplaceholder="Enter Fax" />
                        </div>
                      </div>
                      {/* Nested Col Start */}
                    </div>
                  </div>
                    
                    </div>
                    
                    <div className="col-md-12">
                      <div className="card">
                        <div className="card-body">
                        <h5 className="card-title">Account Types</h5>
                        <InputItem Name="Collectoral Amount" Inputplaceholder="0" />
                         {/* Nested 1 Col Start */}
                            <div className="row">
                                <div className="col-md-6">
                                <InputItem Name="Collectoral A/C No." Inputplaceholder="Enter Collectoral A/C No." />
                                </div>
                                <div className="col-md-6">
                                <InputItem Name="Auto Payment A/C No" Inputplaceholder="Enter Payment A/C No" />
                                </div>
                            </div>
                            {/* Nested 1 Col End */}

                            {/* Nested 1 Col Start */}
                            <div className="row">
                                <div className="col-md-6">
                                <InputItem Name="Auto Topup Amount" Inputplaceholder="Enter Topup Amount" />
                                </div>
                                <div className="col-md-6">
                                <InputItem Name="Auto Topup Low Balance" Inputplaceholder="Auto Topup Low Balance" />
                                </div>
                            </div>
                            {/* Nested 1 Col End */}
                        
                        <input type="radio"/> Yes! I want to link my Debit Card to my saving/current account.

                        {/* Nested 1 Col Start */}
                            <div className="row mt-3">
                                <div className="col-md-6">
                                <InputItem Name="SavingAccount" Inputplaceholder="Enter SavingAccount" />
                                </div>
                                <div className="col-md-6">
                                <InputItem Name="Checking Account" Inputplaceholder="Checking Account" />
                                </div>
                            </div>
                            {/* Nested 1 Col End */}

                       
                        

                        <input className="form-check-input" type="radio" name="flexRadioDefaults" id="flexRadioDefault20" checked />
                            <label className="form-check-label px-2" for="flexRadioDefault20">
                            SavingAccount 
                            </label>
                            <input className="form-check-input" type="radio" name="flexRadioDefaults" id="flexRadioDefault23"/>
                            <label className="form-check-label px-2" for="flexRadioDefault23">
                            CheckingAccount
                            </label>

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
                      <h5 className="card-title">Personal Details</h5>

                      <div className="mb-3">
                      <label>Gender</label>
                        <select className="form-select" aria-label="Default select example">
                        {genders.map((element)=> <SelectOptionItem 
                          id={element.id} 
                          name={element.name} 
                          isSelected={element.id === gender}
                        />)}
                        </select>
                      </div>
                      <div className="mb-3">
                      <label>Martial Status</label>
                        <select className="form-select" aria-label="Default select example">
                        {martialStatus.map((element)=> <SelectOptionItem 
                          id={element.id} 
                          name={element.name} 
                          isSelected={element.id === maritalStatus}
                        />)}
                        </select>
                      </div>
                    <InputItem Name="No Of Dependents " Inputplaceholder= "Enter No Of Dependents" 
                    Value={dependent} readOnly={props.readOnly}/>

                      <div className="mb-3 mt-4">
                      <label>Education</label>
                        <select className="form-select" aria-label="Default select example">
                        {educationList.map((element)=> <SelectOptionItem
                          id={element.id} 
                          name={element.name} 
                          isSelected={element.id === education}
                        />)}
                        </select>
                      </div>

                      <InputItem Name="Email" Inputplaceholder= "Enter Email" Value={email} readOnly={props.readOnly}/>

                      {/* Second Section Start */}
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                  <div className="card">
                      <div className="card-body">
                      <div className="mt-4">
                         <h5 className="card-title p-0">Guarantor Details</h5>
                         <span>Name of Relative or Friend not living with you</span>
                         
                         </div>
                         <div className="mt-1">
                         <InputItem Name="Name" Inputplaceholder="Enter Name" />
                         </div>
                         <InputItem Name="Contact Number" Inputplaceholder="Enter Contact Number" />

                         <InputItem Name="Address" Inputplaceholder="Enter Address" />
                         <InputItem Name="Remarks" Inputplaceholder="Enter Remarks" />
                      </div>
                    </div>
                  </div>
                 </div>
                </div>
                {/* Column Six 2nd Section End */}
              </form>
            </div>
          </div>
        </section>
      </>
    );
})

export default PersonalDetails;
