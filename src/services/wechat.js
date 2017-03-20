require('es6-promise').polyfill();
require('isomorphic-fetch');
import BaseService from './base-service'
const WechatService = {
  list() {
    return BaseService.get('http://localhost:3000/wechat/accounts');
  },
  create(config){
    return BaseService.post('http://localhost:3000/wechat/accounts', config);
  },
  update(id, config){
    return BaseService.patch(`http://localhost:3000/wechat/accounts/${id}`, config);
  },
  view(id){
    return BaseService.get(`http://localhost:3000/wechat/accounts/${id}`);
  },
  remove(id){
    return BaseService.delete(`http://localhost:3000/wechat/accounts/${id}`);
  }
}

export default WechatService;
