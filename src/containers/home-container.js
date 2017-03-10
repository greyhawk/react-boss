import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import 'antd/lib/layout/style/css';
import 'antd/lib/breadcrumb/style/css';
import 'antd/lib/menu/style/css';
import 'antd/lib/icon/style/css';
import './../assets/styles/common.css';


class HomeContainer extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo">
            <h2>COLOSE管理平台</h2>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            className='menus'
          >
            <Menu.Item key="1">订单中心</Menu.Item>
            <Menu.Item key="2">用户中心</Menu.Item>
            <Menu.Item key="3">
              <div className='notice'>
                通知中心
              </div>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />客户管理</span>}>
                <Menu.Item key="1">客户列表</Menu.Item>
                <Menu.Item key="2">添加客户</Menu.Item>
                <Menu.Item key="3">黑名单</Menu.Item>
                <Menu.Item key="4">白名单</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />订单管理</span>}>
                <Menu.Item key="5">订单列表</Menu.Item>
                <Menu.Item key="6">待处理订单</Menu.Item>
                <Menu.Item key="7">处理中订单</Menu.Item>
                <Menu.Item key="8">废弃订单</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />系统设置</span>}>
                <Menu.Item key="9">修改密码</Menu.Item>
                <Menu.Item key="10">参数设置</Menu.Item>
                <Menu.Item key="11">管理员管理</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content className='container'>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default HomeContainer;
