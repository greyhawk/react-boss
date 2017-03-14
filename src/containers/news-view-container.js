import React, {Component} from 'react';
import {Editor, EditorState, convertToRaw, contentState} from 'draft-js';
import RichEditor from './../components/rich-editor.js';
import Preview from './../components/preview';
import './../assets/styles/editor.css';
import './../assets/styles/news/view.css';
import 'draft-js/dist/Draft.css'

class NewsViewContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "",
    }
    this.change = this.change.bind(this);
    console.log('this.props.routeParams', this.props.routeParams);
  }

  change(html) {
    this.setState({html});
  }

  render() {
    return (
      <div className='page-news-view'>
        <div className="editor">
          <RichEditor change={this.change}></RichEditor>
        </div>
        <Preview html={this.state.html}></Preview>
      </div>
    )
  }
}

export default NewsViewContainer;
