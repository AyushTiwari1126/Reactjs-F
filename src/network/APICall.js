import APIUrls from './APIUrls';
import GenerateAPIRequest from './GenerateAPIRequest';


async function getAllBranchesFromServer() {
  const response = await fetch(APIUrls.GET_ALL_BRANCHES, GenerateAPIRequest.getAllBranchesRequest());
  var jsonResponse = response.json();
  return jsonResponse;
}

async function getApplicationDetailsFromServer(applicationId) {
  const response = await fetch(APIUrls.GET_APPLICATION_DETAILS, GenerateAPIRequest.getApplicationDetailsRequest(applicationId));
  var jsonResponse = response.json();
  return jsonResponse;
}

async function getAllBranchesSampleData () {
  var branchList = {responseData: [
    { 
      id: "NA",
      name:"Select Branch"
    },
    {
      id: "23234",
      name:"67890"
    },
    {
      id: "343",
      name:"Dhanbad"
    },
    {
      id: "789",
      name:"FHGDSKFVS"
    },
    {
      id: "890",
      name:"Hari Nagar",
    },
    { id: "32423",
      name:"Mumbai"
    }
  ]};
  return await new Promise(resolve=>resolve(branchList));
}



async function getSampleCutomerTypes(){
  const customerTypes = {responseData: [
    { 
      id: "NA",
      name:"Select Customer Type"
    },
    {
      id: "01",
      name:"Normal"
    },
    {
      id: "322",
      name:"Staff"
    },
    {
      id: "341",
      name:"VIP"
    },
    {
      id: "441",
      name:"GOLD Customer",
    },
    { id: "481",
      name:"Premium"
    },
    { id: "501",
    name:"Debit Card Customer"
  }
  ]};
  return await new Promise(resolve=>resolve(customerTypes));
}

async function getSampleCardProductType() {
  const cardProductTypes = {responseData: [
    { 
      id: "NA",
      name:"Select Card Product"
    },
    {
      id: "1",
      name:"MC"
    },
    {
      id: "35",
      name:"MC Debit Card"
    },
    {
      id: "26",
      name:"Test Credit Card"
    },
    {
      id: "213",
      name:"Prepaid Card",
    },
    { id: "25",
      name:"Sumit Credit Card"
    }
  ]};
  return await new Promise(resolve=>resolve(cardProductTypes));
}

async function getUnprocessedApplicationsFromServer(){
  const response = await fetch(APIUrls.UNPROCESSED_APPLICATIONS, GenerateAPIRequest.unprocessedApplicationsRequest());
  var jsonResponse = response.json();
  return jsonResponse;
}

async function getUnprocessedApplicationsFromSample(){
  const pendingApplications = [{applicationId: "A0323223880102704",
  applicationStatus: "N",
  applicationType: "NC",
  customerName: "Sumit Mittal",
  email: "mittal.sk@gmail.com",
  mobileNo: null}];

  let pendingList = {responseData:pendingApplications};
  return await new Promise(resolve=>resolve(pendingList));

}

async function getApplicationDetailsSampleData(){
  const getApplicationDetailsResponseModel = {
    responseData: {
      "applicationDetails": {
        "branchId": "32423",
        "customerInitial": "Mr.",
        "csn": "AP123",
        "idNumber": "A0323223880102704",
        "idDate": "01-01-1978",
        "embossingName": "Sumit Mittal",
        "customerTypeId": "322",
        "customerName": "Sumit",
        "surName": "Mittal",
        "dateOfBirth": "01-01-1978",
        "email": "mittal.sk@gmail.com",
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
        "productId": "213"
      },
      "creditScoring": {
        "applicationScore": 18,
        "creditLimit": 4000
      },
      "status": "0"
  }
}

  return await new Promise(resolve=>resolve(getApplicationDetailsResponseModel));
}

async function getApplications(appType, status){
  const response = await fetch(APIUrls.GET_APPLICATIONS_LIST,
     GenerateAPIRequest.generateGetApplicationsReq(appType, status));
  var jsonResponse = response.json();
  return jsonResponse;
}

async function getApplicationsSimulateddata(){

  const Batches = [
    {
    batchId:"B060708650120863",
    applicationCount:1,
    applicationType:2,
    authorizedBy:"bajrangi",
    authorizedDate:234323,
     }, 
    {
      batchId:"B0601325840120150",
      applicationCount:1,
      applicationType:0,
      authorizedBy:"bajrangi",
      authorizedDate:234323,
    }
  ]

  return await new Promise(resolve=>resolve({responseCode:"000", 
                                  responseData:Batches}));
 
}

async function processBatchIds(batchIds){
  const response = await fetch(APIUrls.PROCESS_BATCH_ID,
    GenerateAPIRequest.generateProcessBatchIdsReq(batchIds));
    let jsonResponse = response.json();
    return jsonResponse;
}

class APICall {

  static getUnprocessedApplications = getUnprocessedApplicationsFromSample;

  static login = async (userName, pwd, issuerId, branchId) => {
    const response = await fetch(APIUrls.GENERATE_TOKEN_URL, GenerateAPIRequest.loginRequest(userName, pwd, issuerId, branchId));
    const res = await response.text();
    sessionStorage.setItem("token", res);
  }

  

  // Get All Branches 
  static getAllBranches = getAllBranchesSampleData;

  static getCustomerType = getSampleCutomerTypes;

  static getCardProductType = getSampleCardProductType;

  static getApplicationDetails = getApplicationDetailsSampleData;

  static getApplications =  getApplicationsSimulateddata;//getApplications;

  static procesBatchIds = processBatchIds;

}

export default APICall;