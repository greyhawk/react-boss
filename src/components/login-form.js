import React from 'react';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

const LoginForm = ({form, handleSubmit}) => {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
  // Only show error after a field is touched.
  const userNameError = isFieldTouched('userName') && getFieldError('userName');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <FormItem className='item'>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
        )}
      </FormItem>
      <FormItem className='item'>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
        )}
      </FormItem>
      <FormItem className='item'>
        {getFieldDecorator('remember', {
          valuePropName: 'checked',
          initialValue: true,
        })(
          <Checkbox>Remember me</Checkbox>
        )}
        <a className="login-form-forgot">Forgot password</a>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a>register now!</a>
      </FormItem>
    </Form>
  )
};

export default LoginForm;
