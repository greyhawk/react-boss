require('es6-promise').polyfill();
require('isomorphic-fetch');
import BaseService from './base-service'
const AuthService = {
  login: function(user) {
    return BaseService.put('http://localhost:3000/api/Auths', user);
  }
}

export default AuthService;
