import React, {useRef} from 'react'
import ApplicationDetails from "../Components/ApplicationDetails";
import PageTitle from "../Components/PageTitle";
import PersonalDetails from "../Components/PersonalDetails";
import SupplementaryDetails from "../Components/SupplementaryDetails";
import Tab from "../Components/Tab";
import ButtonActions from "../Components/ButtonActions"

function makeDefaultPersonalDetails(){
  return {
    officeAddress:{},
  };
}

function NewApplication () {

  const onFormAction = (name) => {
    let appDetail = applicationDetailsRef.current.getApplicationDetail();
      console.log(`Button click: ${name}`)
      console.log({appDetail})
  }; 
  const applicationDetailsRef = useRef(null)

    return(
      <>
    <main id="main" className="main">
         
          <PageTitle title="New Application" home = "Home" homePath="/dashboard"/>
        
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
               
              </ul>
              <div className="tab-content pt-2" id="borderedTabContent">
                <div className="tab-pane fade active show"  id="bordered-home" role="tabpanel" aria-labelledby="home-tab">
                <ApplicationDetails ref={applicationDetailsRef} applicationDetails={{}}/>
                  </div>
                <div className="tab-pane fade" id="bordered-profile" role="tabpanel" aria-labelledby="profile-tab">
                <PersonalDetails personalDetails={makeDefaultPersonalDetails()}/>
                 </div>
                <div className="tab-pane fade" id="bordered-contact" role="tabpanel" aria-labelledby="contact-tab">
                <SupplementaryDetails supplementaryDetails={{}}/>
                </div>
              </div>
              <ButtonActions items={[{title:"Save", is_primary:true}, {title:"Cancel",}]} onClick={onFormAction}/>
        </div>
      </div>
    </section>

</main>
        
    
    </>
    );

    
}

export default NewApplication;