require('es6-promise').polyfill();
require('isomorphic-fetch');
import {browserHistory} from 'react-router';
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    if (response.status == 401 || response.status == 403) {
      browserHistory.push('/login');
      return;
    }
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
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(result){
        resolve(result);
      }, function(error){
        reject(error);
      })
    });
  },
  get(url, data){
  },
  put(url, body){
    return new Promise(function(resolve, reject) {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
      .then(checkStatus)
      .then(parseJSON)
      .then(function(result){
        resolve(result);
      }, function(error){
        reject(error);
      }).catch(function(error) {
        console.log('request failed', error)
        throw error;
      })
    });
  },
  delete(url, data){
  },
}

export default BaseService;
