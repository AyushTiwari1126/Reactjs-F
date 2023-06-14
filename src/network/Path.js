export class Path {
  static UNPROCESSED_APPLICATIONS = '/application-process/v1.0/getUnprocessedNewApplications';

  static GET_ALL_BRANCHES = '/branch-info/v1.0/getAllBranches';

  static GET_APPLICATION_DETAILS = '/customer-application/v1.0/getApplicationDetails'
  
  static GET_APPLICATIONS = '/card-application-core/v1.0/getApplications';

  static PROCESS_BATCH = '/batch-process/v1.0/processBatchId'
}

export default Path;