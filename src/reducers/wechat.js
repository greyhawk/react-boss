import {} from './../actions/wechat';
const wechat = function(state='wechat', action) {
	switch(action.type) {
    case 'LIST_WECHAT_SUCCESSED':
      return {
        list: action.list,
        state
      };
    case 'LIST_WECHAT_FAILED':
      return {
        message:action.message,
        state,
      };
    case 'CREATE_WECHAT_SUCCESSED':
      return {
        config: action.config,
        state,
        type: action.type,
      };

    case 'CREATE_WECHAT_FAILED':
      return {
        message:action.message,
        state,
      };
    case 'VIEW_WECHAT_SUCCESSED':
      return {
        data: action.data,
        state,
      }
    case 'VIEW_WECHAT_FAILED':
      return {
        message:action.message,
        state,
      };
    case 'UPDATE_WECHAT_SUCCESSED':
      return {
        data: action.data,
        state,
        type: action.type,
      };
    case 'UPDATE_WECHAT_FAILED':
      return {
        message:action.message,
        state,
      };
    case 'REMOVE_WECHAT_CONFIG_SUCCESSED':
      return {
        data: action.data,
        state,
        type: action.type,
      };
    case 'REMOVE_WECHAT_CONFIG_FAILED':
      return {
        message:action.message,
        state,
      };
		default:
			return state;
	}
};

export default wechat;
