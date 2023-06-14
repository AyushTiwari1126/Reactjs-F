import React, {forwardRef, useImperativeHandle, useRef, useState} from "react";
import InputItem from "../Components/InputItem";
import Country from "../Components/Country";
import SelectOptionItem from "../Components/SelectOptionItem";
import InputRow from "./InputRow";
import CheckBoxesRow from "./CheckBoxesRow"

const SelectApplicationSItem = ["Select Application Source", "Agent", "Core Bank", "Online", "Walk-In"];

const ApplicationDetailsSection = forwardRef((props, _ref) => {

    const csnRef = useRef(null)
    const initialRef = useRef(null)
    const nameRef = useRef(null)
    const surNameRef = useRef(null)
    const embossNameRef = useRef(null)
    const dobRef = useRef(null)
    const pobRef = useRef(null)
    const nricRef = useRef(null)
    const nricIssueDateRef = useRef(null)
    const ppDateRef = useRef(null)
    const ppExpiryDateRef = useRef(null)
    const nricIssuePlaceRef = useRef(null)
    const nationalityRef = useRef(null)

    useImperativeHandle(_ref, () => ({
        /*
        {
  "branchId": "A10112",
  "customerInitial": "Mr.",
  "csn": "AP123",
  "idNumber": "AB20607448080104010",
  "idDate": "01-01-1978",
  "embossingName": "Mr. Bob John",
  "customerTypeId": "103",
  "customerName": "Bob",
  "surName": "Biswas",
  "dateOfBirth": "01-01-1978",
  "email": "user@wowfinstack.com",
  "nationality": "Indian",
  "gender": "F",
  "homeAddress": {
    "address1": "C 406, Ithum",
    "address2": "C 406, Ithum",
    "country": "India",
    "state": "Delhi",
    "city": "Delhi",
    "postalCode": 99999999,
    "phone": "0120 3203939",
    "addressType": "H"
  },
  "officeAddress": {
    "address1": "C 406, Ithum",
    "address2": "C 406, Ithum",
    "country": "India",
    "state": "Delhi",
    "city": "Delhi",
    "postalCode": 99999999,
    "phone": "0120 3203939",
    "addressType": "H"
  },
  "permanentAddress": {
    "address1": "C 406, Ithum",
    "address2": "C 406, Ithum",
    "country": "India",
    "state": "Delhi",
    "city": "Delhi",
    "postalCode": 99999999,
    "phone": "0120 3203939",
    "addressType": "H"
  },
  "homePhone": "0120 3203939",
  "mobile": "0120 3203939",
  "maritalStatus": "S",
  "dependent": 2,
  "employement": "S",
  "salary": 200000,
  "education": "10",
  "status": 0,
  "billingAddress": "H",
  "productId": "33"
}
        */
        getApplicationDetailSection: () =>{
          //TODO: get objects of application detail section
          return {
            customerInitial: initialRef.current.value,
            csn: csnRef.current.value,
            idNumber: nricRef.current.value,
            idDate: nricIssueDateRef.current.value,
            embossingName: embossNameRef.current.value,
            customerName: nameRef.current.value,
            surName: surNameRef.current.value,
            dateOfBirth: dobRef.current.value,
            nationality: nationalityRef.current.value,
        };
        }
      }));

      const {
        csn, customerInitial, customerName, surName, embossingName, dateOfBirth, idNumber, idDate 
    } = props.applicationDetails;

return (
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Applicant Details</h5>
                                {/* Nested 1 Col Start */}

                                <InputItem Name="CSN" Inputplaceholder="Enter CNS" ref={csnRef} Value={csn} readOnly={props.readOnly}/>
                                <InputRow 
                                readOnly={props.readOnly}
                                items={[
                                    { title: "Customer Initial", placeholder: "Enter Customer Initial" , ref: initialRef, value: customerInitial},
                                    { title: "Customer Name", placeholder: "Enter Cutomer Name", ref: nameRef, value: customerName }]} ></InputRow>

                                {/* Nested 1 Col End */}

                                {/* Nested 1 Col Start */}
                                <InputRow 
                                readOnly={props.readOnly}
                                items={[
                                    { title: "SurName", placeholder: "Enter SurName", ref: surNameRef, value: surName},
                                    { title: "Emboss Name", placeholder: "Enter Emboss Name", ref: embossNameRef, value: embossingName }]}></InputRow>

                                {/* Nested 1 Col End */}

                                {/* Nested 1 Col Start */}
                                <InputRow 
                                readOnly={props.readOnly}
                                items={[
                                    { title: "Date Of Birth (DD/MM/YYYY)", placeholder: "Enter Date Of Birth", ref: dobRef, value: dateOfBirth },
                                    { title: "Place Of Birth", placeholder: "Enter Place Of Birth", ref: pobRef }]}></InputRow>

                                {/* Nested 1 Col End */}


                                {/* Nested 1 Col Start */}
                                <InputRow 
                                readOnly={props.readOnly}
                                items={[
                                    { title: "NRIC", placeholder: "Enter NRIC", ref: nricRef, value: idNumber },
                                    { title: "NRC Issue Date (DD/MM/YYYY)", placeholder: "Enter NRC Issue Date", ref: nricIssueDateRef, value: idDate }]}></InputRow>

                                {/* Nested 1 Col End */}

                                {/* Nested 1 Col Start */}
                                <InputRow 
                                readOnly={props.readOnly}
                                items={[
                                    { title: "Passport (DD/MM/YYYY)", placeholder: "Enter Passport", ref: ppDateRef },
                                    { title: "Passport Expire Date", placeholder: "Enter Expire Date", ref: ppExpiryDateRef }]}></InputRow>

                                {/* Nested 1 Col End */}

                                {/* Nested 1 Col Start */}

                                <div className="row">
                                    <div className="col-md-6">
                                        <InputItem Name="NRC Issue Place" Inputplaceholder="Enter NRC Issue Place" ref= {nricIssuePlaceRef} readOnly={props.readOnly} />
                                    </div>
                                    <div className="col-md-6">
                                        <Country Name="Nationality" ref={nationalityRef} />
                                    </div>
                                </div>
                                {/* Nested 1 Col End */}

                                <CheckBoxesRow title="Billing Address" name="flexRadioDefaults"
                                    items={[{ name: "Residential", id: "flexRadioDefault2", isChecked: true },
                                    { name: "Office", id: "flexRadioDefault1" }]} />
                                <CheckBoxesRow title="Immediate Processing" name="flexRadioDefault1"
                                    items={[{ name: "Yes", id: "flexRadioDefault3", isChecked: true },
                                    { name: "No", id: "flexRadioDefault4" }]} />




                                <CheckBoxesRow title="Card Option" name="flexRadioDefault2"
                                    items={[{ name: "New Card", id: "flexRadioDefault6", isChecked: true },
                                    { name: "Assign Exist Card", id: "flexRadioDefault5" }]} />


                                {/* Nested 1 Col Start */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputItem Name="Exist Card No" Inputplaceholder="Enter Card No" readOnly={props.readOnly} />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mt-2">Application Source</label>
                                        <select className="form-select" aria-label="Default select example">
                                            {SelectApplicationSItem.map((name) => <SelectOptionItem name={name} />)}
                                        </select>
                                    </div>
                                </div>
                                {/* Nested 1 Col End */}


                            </div>
                        </div>

                    </div>



                </div>

            </div>

        );
}); 

export default React.memo(ApplicationDetailsSection);