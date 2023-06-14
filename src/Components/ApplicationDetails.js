import React, {useState, useEffect, forwardRef, useImperativeHandle, useRef} from "react";
import SelectOptions from "./SelectOptions";
import ApplicationDetailsSection from "./ApplicationDetailsSection";
import ResidentialAddressSection from "./ResidentialAddressSection";
import APICall from '../network/APICall';

const ApplicationDetails = forwardRef((props, _ref) => {

  const [branchList, setBranchList] = useState([])
  const [customerType, setCustomerType] = useState([])
  const [cardProductType, setCardProductType] = useState([])


  useEffect(() => {
    APICall.getAllBranches().then((responseBranchList) => setBranchList(responseBranchList.responseData));
  }, []);

  useEffect(() => {
    APICall.getCustomerType().then((responseCustomerType) => setCustomerType(responseCustomerType.responseData));
  }, []);

  useEffect(() => {
    APICall.getCardProductType().then((responseCardProduct) => setCardProductType(responseCardProduct.responseData));
  }, []);

  const appDetailSection = useRef(null)

  useImperativeHandle(_ref, () => ({
    getChildCount: () => {
      return 1000;
    },
    getApplicationDetail: () =>{
      //TODO: get objects of application detail section
      return appDetailSection.current.getApplicationDetailSection();
    }
  }));
        return(<>

        <section className="section">
                <div className="row">
                <div className="col-lg-12">
              <form className="row g-3">
                {/* Column Six 2nd Section Start */}

               {/* Column Six 1st Section Start */}

                    <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                           <div className="row mt-3">
                            <SelectOptions name="Bank Branch Name" items={branchList}
                              selectedOption={props.applicationDetails.branchId}/>
                            <SelectOptions name="Customer Type" items={customerType}
                              selectedOption={props.applicationDetails.customerTypeId}/>
                            <SelectOptions name="Card Product" items={cardProductType}
                              selectedOption={props.applicationDetails.productId}/>
                           </div>
                        </div>
                      </div>

                    </div>



                {/* Column Six 1st Section End */}
                {/* Column Six 2nd Section End */}

                 {/* Column Six 1st Section Start */}
                 <ApplicationDetailsSection ref={appDetailSection} applicationDetails={props.applicationDetails} readOnly={props.readOnly}/>

                {/* Column Six 1st Section End */}

                {/* Column Six 1st Section Start */}
                <ResidentialAddressSection
                readOnly={props.readOnly}
                addressDetails={
                   props.applicationDetails.homeAddress
                }

                />

                {/* Column Six 1st Section End */}

              </form>
            </div>
                </div>
            </section>

        </>);
});

export default React.memo(ApplicationDetails);