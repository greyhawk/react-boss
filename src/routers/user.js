import React from 'react';
import { Route } from 'react-router';
import App from './../components/App';
import LoginContainer from './../containers/login-container';
const User = () => (
  <Route path='/user' component={App}>
  </Route>
)

export default User;
