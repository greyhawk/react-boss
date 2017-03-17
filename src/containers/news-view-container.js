import React, {Component} from 'react';
import {Editor, EditorState, convertToRaw, contentState} from 'draft-js';
import RichEditor from './../components/rich-editor.js';
import Preview from './../components/preview';
import './../assets/styles/editor.css';
import './../assets/styles/news/view.css';
import 'draft-js/dist/Draft.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Sider } = Layout;

class NewsViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
    }
    this.change = this.change.bind(this);
  }

  change(html) {
    this.setState({html});
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
          <div className='page-news-view'>
            <div className="editor">
              <RichEditor change={this.change}></RichEditor>
            </div>
            <Preview html={this.state.html}></Preview>
          </div>
        </Content>
      </Layout>
    )
  }
}

export default NewsViewContainer;
