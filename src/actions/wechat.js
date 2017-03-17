export const WILL_POST_WECHAT_CONFIG = 'WILL_POST_WECHAT_CONFIG';
export const DID_POST_WECHAT_CONFIG = 'DID_POST_WECHAT_CONFIG';
export const CREATE_WECHAT_SUCCESSED = "CREATE_WECHAT_SUCCESSED";
export const CREATE_WECHAT_FAILED = "CREATE_WECHAT_FAILED";

export const WILL_PUT_WECHAT_CONFIG = 'WILL_PUT_WECHAT_CONFIG';
export const DID_PUT_WECHAT_CONFIG = 'DID_PUT_WECHAT_CONFIG';
export const UPDATE_WECHAT_SUCCESSED = "UPDATE_WECHAT_SUCCESSED";
export const UPDATE_WECHAT_FAILED = "UPDATE_WECHAT_FAILED";

export const WILL_LIST_WECHAT_CONFIG = 'WILL_LIST_WECHAT_CONFIG';
export const DID_LIST_WECHAT_CONFIG = 'DID_LIST_WECHAT_CONFIG';
export const LIST_WECHAT_SUCCESSED = "LIST_WECHAT_SUCCESSED";
export const LIST_WECHAT_FAILED = "LIST_WECHAT_FAILED";

export const WILL_GET_WECHAT_CONFIG = 'WILL_GET_WECHAT_CONFIG';
export const DID_GET_WECHAT_CONFIG = 'DID_GET_WECHAT_CONFIG';
export const VIEW_WECHAT_SUCCESSED = "VIEW_WECHAT_SUCCESSED";
export const VIEW_WECHAT_FAILED = "VIEW_WECHAT_FAILED";


export const WILL_REMOVE_WECHAT_CONFIG = "WILL_REMOVE_WECHAT_CONFIG";
export const REMOVE_WECHAT_CONFIG_SUCCESSED = "REMOVE_WECHAT_CONFIG_SUCCESSED";
export const REMOVE_WECHAT_CONFIG_FAILED = "REMOVE_WECHAT_CONFIG_FAILED";

export const WechatAction = {
  create(config) {
    return  {
      type: WILL_POST_WECHAT_CONFIG,
      payload: config,
    }
  },
  update(config) {
    return {
      type: WILL_PUT_WECHAT_CONFIG,
      payload: config,
    }
  },
  view(id){
    return  {
      type: WILL_GET_WECHAT_CONFIG,
      payload: {
        id
      },
    }
  },
  list(){
    return  {
      type: WILL_LIST_WECHAT_CONFIG,
      payload: {},
    }
  },
  remove(id) {
    return  {
      type: WILL_REMOVE_WECHAT_CONFIG,
      payload: {id},
    }
  }
};
