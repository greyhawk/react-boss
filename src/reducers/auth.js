const auth = function(state='auth', action) {
	switch(action.type) {
    case 'LOGIN_SUCCEEDED':
      const user = action.user;
      return {
        user,
        state
      };
    case 'LOGIN_FAILED':
      const message = action.message;
      return {
        message,
        state,
      };
		default:
			return state;
	}
};

export default auth;
