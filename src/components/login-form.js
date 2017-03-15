import React from 'react';
import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import { Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

const LoginForm = ({form, handleSubmit}) => {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;
  // Only show error after a field is touched.
  const userNameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
    <Form className="login-form" onSubmit={handleSubmit}>
      <FormItem className='item'>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '请输入登录邮箱地址!' }],
        })(
          <Input type='email' prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="邮箱地址" />
        )}
      </FormItem>
      <FormItem className='item'>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: '请输入密码!' }],
        })(
          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
        )}
      </FormItem>
      <FormItem className='item item-login'>
        <Button type="primary" htmlType="submit" className="login-form-button">
          <span>登  录</span>
        </Button>
      </FormItem>
    </Form>
  )
};

export default LoginForm;
