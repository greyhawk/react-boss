require('es6-promise').polyfill();
require('isomorphic-fetch');
const AuthService = {
  login: function(user) {
    return fetch('/');
  }
}

export default AuthService;
