import DateUtils from './DateUtils'

function generateHeader(){
  const token = sessionStorage.getItem("token")
  const reqDateTime = DateUtils.getCurrentDateTimeInUTC()
  return {
    'Content-Type': 'application/json',
    'ReqDatetime': reqDateTime,
    'Sign': 'Test',
    'Authorization': `Bearer ${token}`
  };
}

class GenerateAPIRequest {

  // Generate Token API Request

  static loginRequest(userName, password, issuerId, branchId) {
    const body = {
      "authInfo": "subject",
      "info": {
        "issuerId": issuerId,
        "branchId": branchId
      },
      "validity": "10"
    };
    const request = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    }
    return request;
  }

  // UnprocessApplications API Request
  static unprocessedApplicationsRequest() {
    const body = {}
    const request = {
      method: "POST",
      headers: generateHeader(),
      body: JSON.stringify(body),
    }
    return request;
  }

    // getAllBranches API Request
    static getAllBranchesRequest() {
      const body = {}
      const request = {
        method: "POST",
        headers:generateHeader(),
        body: JSON.stringify(body),
      }
      return request;
    }

        // getApplicationDetails API Request
        static getApplicationDetailsRequest(applicationId) {
         
          const body = {
            applicationId: applicationId
          }
          const request = {
            method: "POST",
            headers: generateHeader(),
            body: JSON.stringify(body),
          }
          return request;
        }

        static generateGetApplicationsReq(applicationType, appStatus){
          const body = {
            "applicationType": applicationType,
            "applicationStatus": appStatus
          };
          return {
            method: "POST",
            headers: generateHeader(),
            body: JSON.stringify(body),
          };
        }

        static generateProcessBatchIdsReq(batchIds){
          const body = {
            "batchIds": batchIds,
          };
          return {
            method: "POST",
            headers: generateHeader(),
            body: JSON.stringify(body),
          };
        }
}

export default GenerateAPIRequest;