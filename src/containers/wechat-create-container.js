import React, {Component} from 'react';
import {connect} from 'react-redux';
import WechatConfig from './../components/wechat-config';
import {WechatAction} from './../actions/wechat';
import { Layout, Menu, Breadcrumb, Icon, Form } from 'antd';
const { Header, Content, Sider } = Layout;

class WechatCreateContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(props) {
    const {type, router} = props;
    if (type === 'CREATE_WECHAT_SUCCESSED') {
      router.push('/config/wechat');
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch(WechatAction.create(values));
      }
    });
  }
  render() {
    return (
      <Layout className='layout'>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className='container'>
          <WechatConfig form={this.props.form} handleSubmit={this.handleSubmit} />
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  const {wechat} = state;
  const type = wechat.type;
  return {type};
}

WechatCreateContainer = connect(mapStateToProps)(WechatCreateContainer);
const WrappedNormalLoginForm = Form.create()(WechatCreateContainer);
export default WrappedNormalLoginForm;
