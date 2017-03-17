import React, {Component} from 'react';
import * as Draft from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const {EditorState} = Draft;
import draftToHtml from 'draftjs-to-html';
class RichEditor extends Component {
       constructor(props) {
         super(props);
         this.state = {editorState: EditorState.createEmpty()};

         this.focus = () => this.refs.editor.focus();

         const {change} = props;
         this.onEditorStateChange = (editorState) => {
           this.setState({editorState});
           const contentState = Draft.convertToRaw(editorState.getCurrentContent());
           const html = draftToHtml(contentState);
           change(html);
         };

         this.uploadImageCallBack = (e) => {
           return new Promise(function(resolve, reject) {
             const link = 'https://www.coloseo.cn/assets/images/portfolio/fullsize/5.jpg';
             resolve({data: {link}});
           })
         };
       }

       render() {
         const {editorState} = this.state;
         return (
           <Editor
            editorState={editorState}
            toolbarClassName="home-toolbar"
            wrapperClassName="home-wrapper"
            editorClassName="home-editor"
            onEditorStateChange={this.onEditorStateChange}
            uploadCallback={this.uploadImageCallBack}
          />
         );
       }
     }


     export default RichEditor;
