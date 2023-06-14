import React from 'react';
import PendingApplicationsData from '../Components/PendingApplications/PendingApplicationsData';
import APICall from '../network/APICall';
import PageTitle from '../Components/PageTitle';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

function PendingApplications() {
  const [responseData, setUnprocessedAppl] = useState([])

  useEffect(() => {
    APICall.getUnprocessedApplications().then((response) => setUnprocessedAppl(response.responseData));
  }, []);

  const navigate = useNavigate();



  const onPendingApplicationUpdate = (applicationId)=>{
      console.log("pending application update called: "+ applicationId);
      //FIXME: application id needed to be sent to update-process-application page
      navigate('/Dashboard/update-process-application', {state:{id:applicationId}});
  }


    return (
      <>
        <main id="main" className="main">
        <PageTitle title="Pending Applications" home = "Home" homePath="/dashboard"/>
          <PendingApplicationsData data={responseData} onUpdate={onPendingApplicationUpdate}/>
        </main>
      </>
    );
}

export default PendingApplications;