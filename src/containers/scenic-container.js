import React, {Component} from 'react';
import './../assets/styles/news/list.css';
import Map from './../components/map';
import { Layout, Breadcrumb } from 'antd';
const {Content } = Layout;

class ScenicContainer extends Component {
  change(status, result) {
    console.log('定位信息', status, result);
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
          <Map address={"四川省成都市锦江区龙江路14号"} onChange={this.change}/>
        </Content>
      </Layout>
    )
  }
}
export default ScenicContainer;
