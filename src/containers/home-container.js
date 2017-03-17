import React, {Component} from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { Link } from 'react-router';
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
              <SubMenu key="sub1" title={<span><Icon type="user" />魅力宜宾</span>}>
                <Menu.Item key="1">
                  <Link to='/news'>话说宜宾</Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to='/scenic'>多彩宜宾</Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to='/activity'>嗨翻宜宾</Link>
                </Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />玩转宜宾</span>}>
                <Menu.Item key="5">
                  <Link to='/navigation'>随身导</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to='/recommend'>小宜推荐</Link>
                </Menu.Item>
                <Menu.Item key="7">服务热线</Menu.Item>
                <Menu.Item key="8">互动游戏</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />走进宜宾</span>}>
                <Menu.Item key="9">酒店预订</Menu.Item>
                <Menu.Item key="10">门票订购</Menu.Item>
                <Menu.Item key="11">线上乐购</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="notification" />系统管理</span>}>
                <Menu.Item key="12">
                  <Link to='/config/wechat'>
                    微信配置
                  </Link>
                </Menu.Item>
                <Menu.Item key="13">
                  <Link to='/config/api'>Oauth授权API列表</Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          {this.props.children}
        </Layout>
      </Layout>
    );
  }
}

export default HomeContainer;
