import React, {Component} from 'react';
import OrderList from './../components/news-list';
import './../assets/styles/news/list.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;
class HomeContainer extends Component {
  render() {
    return (
      <Layout className='layout'>
        <Breadcrumb style={{ margin: '12px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className='container'>
          <div className='page-order'>
            <OrderList/>
          </div>
        </Content>
      </Layout>
    );
  }
}
export default HomeContainer;
