export const WILL_LOGIN_IN = 'WILL_LOGIN_IN';
export const AuthAction = {
  login: function(user) {
    return  {
      type: WILL_LOGIN_IN,
      payload: user,
    }
  }
};
