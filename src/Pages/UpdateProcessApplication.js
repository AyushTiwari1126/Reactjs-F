import ApplicationDetails from "../Components/ApplicationDetails";
import PageTitle from "../Components/PageTitle";
import PersonalDetails from "../Components/PersonalDetails";
import SupplementaryDetails from "../Components/SupplementaryDetails";
import ButtonActions from "../Components/ButtonActions";
import AccountDetails from "../Components/AccountDetails";
import StatementDetails from '../Components/StatementDetails';
import CreditScores from "../Components/CreditScores";
import Tab from "../Components/Tab";
import React, {useState, useEffect} from 'react'
import { useLocation } from "react-router-dom";
import APICall from "../network/APICall";


function makeDefaultPersonalDetails(){
  return {
    officeAddress:{},
  };
}

 function UpdateProcessApplication(){

  const [applicationDetails, setAppDetails] = useState(makeDefaultPersonalDetails());

  useEffect(() => {
    let applicationId = location.state.id;
    console.log("ApplicationID: ",applicationId)
    APICall.getApplicationDetails(applicationId).then((response) => {
      setAppDetails(response.responseData.applicationDetails)
    });
  }, []);

  const location = useLocation();

  const onButtonAction = (name)=>{
    console.log("button click "+ name);
  }


     
        return(<>

<main id="main" className="main">
         
         <PageTitle title="Update Process Application" home = "Home" homePath="/dashboard"/>
       
       <section className="section">
       <div className="row">
       <div className="col-lg-12">
       
       <ul className="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
               <Tab Name="Application Details" TabClass="nav-link active" TabId="home-tab" TabDataBsTarget="#bordered-home"
                TabAriaControls="Application" TabAriaSelected="false" />

                 <Tab Name="Personal Details" TabClass="nav-link" TabId="profile-tab" TabDataBsTarget="#bordered-profile"
                TabAriaControls="Personal" TabAriaSelected="true" />

               <Tab Name="Supplementary Details" TabClass="nav-link" TabId="contact-tab" TabDataBsTarget="#bordered-contact"
                TabAriaControls="Supplementary" TabAriaSelected="false" />

                <Tab Name="Account Details" TabClass="nav-link" TabId="account-tab" TabDataBsTarget="#bordered-account"
                TabAriaControls="Account Details" TabAriaSelected="false" />

               <Tab Name="Statement Details" TabClass="nav-link" TabId="statement-tab" TabDataBsTarget="#bordered-statement"
                TabAriaControls="Statement Details" TabAriaSelected="false" />

               <Tab Name="Credit Scores" TabClass="nav-link" TabId="credit-tab" TabDataBsTarget="#bordered-credit"
                TabAriaControls="Credit Details" TabAriaSelected="false" />

               
              
             </ul>
             <div className="tab-content pt-2" id="borderedTabContent">
               <div className="tab-pane fade active show"  id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                {/* Accept and Reject Section Start */}
                <div className="my-2 card d-flex justify-content-end align-items-end rounded">
                        <div className="py-2"> 
                        <ButtonActions items={[{ title: "Accept", is_primary: true },
                        { title: "Reject", }, { title: "Pending", is_info: true }, { title: "Cancel", is_seconday: true }]} 
                        onClick={onButtonAction}/>
                        </div>
                </div>
                {/* Accept and Reject Section End */}
               <ApplicationDetails applicationDetails={applicationDetails} readOnly={true}/>
                 </div>
               <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                 {/* Accept and Reject Section Start */}
                 <div className="my-2 card d-flex justify-content-end align-items-end rounded">
                    <div className="py-2"> 
                    <ButtonActions items={[{title:"Accept", is_primary:true}, 
                    {title:"Reject",}, {title:"Pending", is_info:true}, {title:"Cancel", is_seconday:true}]}
                    onClick={onButtonAction}/>
                    </div>
                </div>
                {/* Accept and Reject Section End */}
               <PersonalDetails personalDetails={applicationDetails} readOnly={true}/>
                </div>
               <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
                 {/* Accept and Reject Section Start */}
                 <div className="my-2 card d-flex justify-content-end align-items-end rounded">
                 <div className="py-2"> 
                 <ButtonActions items={[{title:"Accept", is_primary:true}, 
                    {title:"Reject",}, {title:"Pending", is_info:true}, {title:"Cancel", is_seconday:true}]}
                    onClick={onButtonAction}/>
                    </div>
                </div>
                {/* Accept and Reject Section End */}
               <SupplementaryDetails supplementaryDetails={applicationDetails} readOnly={true}/>
               </div>

               <div className="tab-pane fade" id="bordered-account" role="tabpanel" aria-labelledby="account-tab">
                 {/* Accept and Reject Section Start */}
                 <div className="my-2 card d-flex justify-content-end align-items-end rounded">
                 <div className="py-2"> 
                 <ButtonActions items={[{title:"Accept", is_primary:true}, 
                    {title:"Reject",}, {title:"Pending", is_info:true}, {title:"Cancel", is_seconday:true}]}
                    onClick={onButtonAction}/>
                    </div>
                </div>
                {/* Accept and Reject Section End */}
               <AccountDetails accountDetails={applicationDetails} readOnly={true}/>
               </div>

               
               <div className="tab-pane fade" id="bordered-statement" role="tabpanel" aria-labelledby="statement-tab">
                 {/* Accept and Reject Section Start */}
                 <div className="my-2 card d-flex justify-content-end align-items-end rounded">
                 <div className="py-2"> 
                 <ButtonActions items={[{title:"Accept", is_primary:true}, 
                    {title:"Reject",}, {title:"Pending", is_info:true}, {title:"Cancel", is_seconday:true}]}
                    onClick={onButtonAction}/>
                    </div>
                </div>
                {/* Accept and Reject Section End */}
               <StatementDetails statementDetails={applicationDetails} readOnly={true}/>
               </div>

               <div className="tab-pane fade" id="bordered-credit" role="tabpanel" aria-labelledby="credit-tab">
                 {/* Accept and Reject Section Start */}
                 <div className="my-2 card d-flex justify-content-end align-items-end rounded">
                 <div className="py-2"> 
                 <ButtonActions  items={[{title:"Accept", is_primary:true}, 
                    {title:"Reject",}, {title:"Pending", is_info:true}, {title:"Cancel", is_seconday:true}]}
                    onClick={onButtonAction}/>
                    </div>
                </div>
                {/* Accept and Reject Section End */}
               <CreditScores creditScoresDetails={applicationDetails}/>
               </div>

             </div>
        
       </div>
     </div>
   </section>

</main>
        </>);
 }

 export default UpdateProcessApplication;