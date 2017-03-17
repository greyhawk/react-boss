import React, {Component} from 'react';
import {connect} from 'react-redux';
import WechatConfig from './../components/wechat-config';
import {WechatAction} from './../actions/wechat';
import { Layout, Menu, Breadcrumb, Icon, Form } from 'antd';
const { Header, Content, Sider } = Layout;
import { createForm } from 'rc-form';

class WechatViewContainer extends Component {
  constructor(props) {
    super(props);
    const {dispatch} = this.props;
    dispatch(WechatAction.view(this.props.routeParams.id));
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      isFirst: true,
    }
  }
  componentWillReceiveProps(props) {
    const {data, router, type, form} = props;
    if (this.state.isFirst && data) {
      form.setFieldsValue(data)
      this.setState({
        isFirst: false,
      })
    }
    if (type === 'UPDATE_WECHAT_SUCCESSED') {
      router.push('/config/wechat');
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    const {dispatch} = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch(WechatAction.update(values));
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
          <WechatConfig form={this.props.form} data={this.props.data} handleSubmit={this.handleSubmit} />
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  const {wechat} = state;
  const data = wechat.data;
  const type = wechat.type;
  if (data) {
    return {data, type};
  }
  return {};
};
export default connect(mapStateToProps)(Form.create({
})(WechatViewContainer));
