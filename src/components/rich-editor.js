import React, {Component} from 'react';
import * as Draft from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';
const {EditorState, RichUtils} = Draft;
class RichEditor extends Component {
       constructor(props) {
         super(props);
         this.state = {editorState: EditorState.createEmpty()};

         this.focus = () => this.refs.editor.focus();

         const {change} = props;
         this.onEditorStateChange = (editorState) => {
           this.setState({editorState});
           const contentState = editorState.getCurrentContent();
           const html = stateToHTML(contentState);
          //  console.log('html', html);
           change(html);
         };

         this.uploadImageCallBack = (e) => {
           console.log('e', e);
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
