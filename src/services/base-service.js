require('es6-promise').polyfill();
require('isomorphic-fetch');
import {browserHistory} from 'react-router';

function settingHeader() {
  return {
    "X-Consumer-Custom-ID": parseInt(Math.random() * 10, 10),
    'Content-Type': 'application/json'
  };
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    //if this an unauthorized access, redirect to login page;
    if (response.status === 401 || response.status === 403) {
      browserHistory.push('/login');
      return;
    }
    //throw it when got another error;
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

function parseJSON(response) {
  return response.json();
}

const BaseService = {
  post(url, body){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: settingHeader(),
        body: JSON.stringify(body)
      })
      .then(checkStatus)
      .then(parseJSON)
      .then((result) => {
        resolve(result);
      }, (error) => {
        reject(error);
      })
    });
  },
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        headers: settingHeader(),
      })
      .then(checkStatus)
      .then(parseJSON)
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        throw error;
      })
    });
  },
  put(url, body){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: settingHeader(),
        body: JSON.stringify(body)
      })
      .then(checkStatus)
      .then(parseJSON)
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        throw error;
      })
    });
  },
  patch(url, body){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PATCH',
        headers: settingHeader(),
        body: JSON.stringify(body)
      })
      .then(checkStatus)
      .then(parseJSON)
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        throw error;
      })
    });
  },
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: settingHeader(),
      })
      .then(checkStatus)
      .then(parseJSON)
      .catch((error) => {
        throw error;
      })
    });
  },
  upload(url, body) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: settingHeader(),
        body
      })
      .then(checkStatus)
      .then(parseJSON)
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        throw error;
      })
    });
  }
}

export default BaseService;
