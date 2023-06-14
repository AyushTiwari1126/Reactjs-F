import Path from './Path'
class APIUrls {

  static GENERATE_TOKEN_URL = "https://token-dev.wowfinstack.com/generateToken";

  static TEST_URL = "https://kyc-dev.wowfinstack.com";

  static _CARDS_BASE_URL = "https://cards-dev.wowfinstack.com";

  static UNPROCESSED_APPLICATIONS = `${this._CARDS_BASE_URL}${Path.UNPROCESSED_APPLICATIONS}`;

  static GET_ALL_BRANCHES = `${this._CARDS_BASE_URL}${Path.GET_ALL_BRANCHES}`;

  static GET_APPLICATION_DETAILS = `${this._CARDS_BASE_URL}${Path.GET_APPLICATION_DETAILS}`

  static GET_APPLICATIONS_LIST = `${this._CARDS_BASE_URL}${Path.GET_APPLICATIONS}`

  static PROCESS_BATCH_ID = `${this._CARDS_BASE_URL}${Path.PROCESS_BATCH}`
}

export default APIUrls;