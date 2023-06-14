import React, { useState } from 'react';
import PageTitle from '../Components/PageTitle';

import BatchProcessUI from '../Components/BatchProcess/BatchProcessUI';
import APICall from '../network/APICall';


const SelectApplicationType = ["Select Application Type", "ALL", "NEW CARD", "RENEWAL", "REPLACEMENT",
  "NEW SUPPLEMENTARY CARD", "VIRTUAL CARD"];
const SelectStatus = ["Select Status", "Authorized", "Processed"];


/*
NC - New card, 
RC - Replacement Card, 
RW - Renewal Card, 
SC- Supplementary card, 
AT - All type Applications
*/

function getIDForApplicationType(appType) {
  switch (appType) {
    case "ALL":
      return "AT";
    case "NEW CARD":
      return "NC";
    case "RENEWAL":
      return "RW";
    case "REPLACEMENT":
      return "RC";
    case "NEW SUPPLEMENTARY CARD":
      return "SC";
    default:
      return null;
    //FIXME: need to throw from here
  }
}

/*
  string
    N - New,
     A - Accepted,
      R - Rejected, 
      P - Processed, 
      AU- Authorized
*/
function getIDForApplicationStatus(status) {
  switch (status) {
    case "Authorized":
      return "AU";
    case "Processed":
      return "P";
    default:
      return null;
  }
}


function BatchProcess() {

  const [applicationType, setApplicationType] = useState(null);
  const [applicationStatus, setAppStatus] = useState(null);
  const [applicationBatch, setApplicationBatch] = useState([]);

  const onProcessClick = () => {

    const BatchIds = applicationBatch.filter(a => a.isChecked).map(a => a.batchId);
    console.log("onProcess Click for batch ids ", BatchIds);
    console.log(applicationBatch);
    if (BatchIds.length > 0) {
      APICall.procesBatchIds(BatchIds).then(res => {
        console.log("response of batch ids ", res);
      })
    }
  };
  const onSearchClick = () => {
    const appType = getIDForApplicationType(applicationType);
    if (!appType) {

      console.error("no application type is selected");
      alert("select application type before search");
      return;
    }

    const appStatus = getIDForApplicationStatus(applicationStatus);
    if (!appStatus) {
      console.error("no application status is selected");
      alert("select application status before search");
      return;
    }

    APICall.getApplications(appType, appStatus).then(res => {
      console.log("response of applications ", res);
      if (res.responseCode === "000") {
        const items = res.responseData.map(a => { return { ...a, isChecked: false } });
        setApplicationBatch(items);
      }
    })

    console.log("on search click")
  };

  const onItmesUpdate = (itmes) => {
    console.log("on itmes update in BatchProcess ", itmes);
    setApplicationBatch(itmes);
  }

  const onApplicationTypeSelect = (name) => {
    console.log("application type select ", name)
    setApplicationType(name);
  }
  const onStatusSelected = (name) => {
    console.log("on status selected ", name)
    setAppStatus(name);
  }

  return (<>
    <main id="main" className="main">
      <PageTitle
        title="Batch Process"
        home="Home"
        homePath="/dashboard"
      />

      <BatchProcessUI
        onProcessClick={onProcessClick}
        onSearchClick={onSearchClick}
        onApplicationTypeSelect={onApplicationTypeSelect}
        onStatusSelected={onStatusSelected}
        items={applicationBatch}
        onItemsUpdate={onItmesUpdate}
      />

    </main>
  </>)
}

export default BatchProcess;