import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Layout, Breadcrumb, Table } from 'antd';
const {Content} = Layout;
import {WechatAction} from './../actions/wechat';
import {Link} from 'react-router';

class WechatListContainer extends Component{
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(WechatAction.list());
  }
  componentWillReceiveProps(props) {
    const {dispatch, type} = props;
    if (type === "REMOVE_WECHAT_CONFIG_SUCCESSED") {
      dispatch(WechatAction.list());
    }
  }
  handleRemove(id) {
    const {dispatch} = this.props;
    dispatch(WechatAction.remove(id));
  }
  render() {
    const columns = [{
      title: '微信公众服务号名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '微信公众号app id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: '微信公众号应用密钥',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: '服务器地址',
      dataIndex: 'url',
      key: 'url',
    },
    {
      title: '服务器令牌',
      dataIndex: 'token',
      key: 'token',
    },
    {
      title: '消息加密密钥',
      dataIndex: 'encodingAESKey',
      key: 'encodingAESKey',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <Link to={'/config/wechat/' + record.id}>编辑</Link>
          <span className="ant-divider" />
          <a onClick={this.handleRemove.bind(this, record.id)} >删除</a>
    </span>
  ),
}];
    return (
      <Layout className='layout'>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className='container'>
          <Table columns={columns} dataSource={this.props.list} />
        </Content>
      </Layout>
    )
  }
}
WechatListContainer = connect((payload) => {
  console.log('payload', payload);
  const rawList = payload.wechat.list || [];
  const type = payload.wechat.type;
  const list = rawList.map((item, index) => {
    item.key = index.toString();
    return item;
  });
  return {list, type};
})(WechatListContainer);

export default WechatListContainer;
