require('es6-promise').polyfill();
require('isomorphic-fetch');
import {browserHistory} from 'react-router';
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
    var error = new Error(response.statusText)
    error.response = response
    throw error
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
        headers: {
          'Content-Type': 'application/json'
        },
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
  get(url, data){
  },
  put(url, body){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
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
  delete(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
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
        headers: {
          'Content-Type': 'application/json'
        },
        body
      })
      .then(checkStatus)
      .then(parseJSON)
      .then((result) => {
        resolve(result);
      }).catch((error) => {
        console.log('request failed', error)
        throw error;
      })
    });
  }
}

export default BaseService;
