"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.APISuccessResponse = exports.APIResponse = exports.APIErrorTypes = exports.APIErrorResponse = void 0;
const APIErrorTypes = {
  AUTH_ERROR: 'AuthError',
  API_ERROR: 'APIError'
};
exports.APIErrorTypes = APIErrorTypes;
class APIErrorResponse extends APIResponse {
  constructor(errorType, errorMessage) {
    super();
    this.setError(errorType, errorMessage);
    this.setStatus('failed');
    return this;
  }
}
exports.APIErrorResponse = APIErrorResponse;
class APISuccessResponse extends APIResponse {
  constructor(body) {
    super();
    this.setBody(body);
    this.setStatus('success');
    return this;
  }
}
exports.APISuccessResponse = APISuccessResponse;
class APIResponse {
  constructor() {
    this.meta = {};
    this.data = {};
    this.error = {};
    this.headers = {};
    this.auth = {};
    this.hasError = false;
    return this;
  }
  setData = data => {
    this.data = data;
  };
  getData = () => {
    return this.data;
  };
  setMeta = meta => {
    this.meta = meta;
  };
  getMeta = () => {
    return this.meta;
  };
  setAuth = auth => {
    this.auth = auth;
  };
  getAuth = () => {
    return this.auth;
  };
  getHeaders = () => {
    return this.headers;
  };
  setHeaders = headers => {
    this.headers = headers;
  };
  setError = (errorType, errorMessage = '') => {
    this.hasError = true;
    this.errorType = errorType;
    this.errorMessage = errorMessage;
  };
  getError = () => {
    if (this.hasError) {
      return {
        type: this.errorType,
        message: this.errorMessage
      };
    }
    return null;
  };
  toJSON = () => {
    let response = {
      headers: this.headers,
      auth: this.auth,
      meta: this.meta,
      data: this.data // {auth:{}, body:{}, meta: {}}
    };

    if (this.hasError) {
      response.error = {
        type: this.errorType,
        message: this.errorMessage
      };
    }
    return response;
  };
  static fromJSON = json => {
    let response = new APIResponse();
    response.setMeta(json.meta ?? {});
    response.setHeaders(json.headers ?? {});
    response.setBody(json.body ?? {});
    response.setAuth(json.auth ?? {});
    if (json.error) {
      response.setError(json.error.type, json.error.message);
    }
    return response;
  };
}
exports.APIResponse = APIResponse;