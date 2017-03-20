const auth = function(state='auth', action) {
  const message = action.message;
	switch(action.type) {
    case 'LOGIN_SUCCEEDED':
      return {
        message,
        state
      };
    case 'LOGIN_FAILED':
      return {
        message,
        state,
      };
		default:
			return state;
	}
};

export default auth;
