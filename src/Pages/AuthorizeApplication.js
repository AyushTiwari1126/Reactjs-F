import React from "react";
import { useState } from "react";
import PageTitle from "../Components/PageTitle";
import AuthorizeApplicationData from "../Components/AuthorizeApplications/AuthorizeApplicationsData";

/* user structure
user{
  ApplicationId:
name:
checked:
nric:
updateDate:
onChange:
key:
}
*/
const userData = [
  {ApplicationId: "A1031505520082144" , name: "Hafiz",  nric: "8518112634",updateDate: "31-10-2019", isChecked:false},
  {ApplicationId: "A1031274960082152" , name: "Hafiz",  nric: "8518112636",updateDate: "31-10-2019", isChecked:false },
  
];

function AuthorizeApplication(){

  const [users, setUsers] = useState(userData);


  const handleChange = (updated) => {
      setUsers(updated);
  };

 const handleAuthorization = ()=>{
   
   const idsToAuthorize = users.filter(user=>user.isChecked).map(a=>a.ApplicationId);
   console.log("todo: get the application id of users whoes application needed to be authorize ", idsToAuthorize )
 }


  return (
    <>
      <main id="main" className="main">
        <PageTitle
          title="Authorize Applications"
          home="Home"
          homePath="/dashboard"
        />
        <AuthorizeApplicationData 
        users={users}
        onAuthorize = {handleAuthorization}
        onUserChange = {handleChange}
        />

      </main>
    </>
  );
}

export default AuthorizeApplication;
