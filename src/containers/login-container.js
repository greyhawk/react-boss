import React, {Component} from 'react';
import { connect } from 'react-redux';
import './../assets/styles/auth/index.css';
import {AuthAction} from './../actions/auth';
import { browserHistory } from 'react-router';
import LoginForm from './../components/login-form.js';
import { Form } from 'antd';
import {Lifecycle} from 'react-router';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginContainer extends Component {
  componentWillReceiveProps(props) {
    console.log('props', props);
    const {auth, router} = props;
    try{
      if (auth.message === "authorized" ) {
        router.push('/');
      }
    }catch(e){

    }

  }
  componentDidMount() {
    // this.props.form.validateFields();
  }
  handleSubmit = (e) => {
    const {dispatch} = this.props;
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch(AuthAction.login(values));
      }
    });
  }
  render() {
    return (
      <div className='page-login'>
        <div className='login'>
          <h2>coloseo cms</h2>
          <LoginForm handleSubmit={this.handleSubmit} form={this.props.form}></LoginForm>
        </div>
    </div>
    )
  }
}
LoginContainer = connect((payload) => {
  const auth = payload.auth
  return  {auth};
})(LoginContainer);

const WrappedNormalLoginForm = Form.create()(LoginContainer);
export default WrappedNormalLoginForm;
