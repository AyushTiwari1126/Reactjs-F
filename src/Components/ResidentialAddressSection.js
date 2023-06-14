import React, {forwardRef, useState} from "react";
import InputItem from "./InputItem";
import Country from "./Country";
import InputRow from "./InputRow";

const ResidentialAddressSection = forwardRef((props, _ref) => {

    const address = { ...props.addressDetails};
        return (
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Residential Address</h5>
                                <InputItem Name="Address1" Inputplaceholder= "Enter Address 1" Value={address.address1} readOnly={props.readOnly}/>
                                <InputItem Name="Address2" Inputplaceholder= "Enter Address 2" Value={address.address2} readOnly={props.readOnly}/>
                                <Country Name="Country" />
                                {/* Nested Col Start */}
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputItem Name="State" Inputplaceholder= "Enter State" Value={address.state} readOnly={props.readOnly}/>
                                    </div>
                                    <div className="col-md-6">
                                        <InputItem Name="City" Inputplaceholder= "Enter City" Value={address.city} readOnly={props.readOnly}/>
                                    </div>
                                </div>
                                {/* Nested Col Start */}
                                <InputItem Name="Township" Inputplaceholder="Enter Township" readOnly={props.readOnly} />
                                <InputItem Name="PostalCode" Inputplaceholder= "Enter PostalCode" Value={address.postalCode} readOnly={props.readOnly}/>

                                {/* Nested Col Start */}
                                <InputRow
                                readOnly={props.readOnly} 
                                items={[
                                    { title: "Phone", placeholder: "Enter Phone", value: address.phone},
                                    { title: "Fax", placeholder: "Enter Fax" }]}></InputRow>

                                {/* Nested Col Start */}

                                <InputItem Name="Home Telephone" Inputplaceholder="Enter Telephone" Value={address.phone} readOnly={props.readOnly}/>




                            </div>
                        </div>

                    </div>



                </div>
            </div>
        );
})

export default ResidentialAddressSection;