import React from 'react';
import { Form, Input, Tooltip, Icon, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const WechatConfig = ({form, handleSubmit}) => {
  const { getFieldDecorator, getFieldProps} = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6,
      },
    };

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem
        {...formItemLayout}
        label="微信公众服务号名称"
        hasFeedback
      >
        {getFieldDecorator('name', {
          rules: [{
            required: true, message: '微信公众服务号名称不能为空!',
            initialVaue: "sfsf"
          }],
        })(
          <Input type="text" placeholder='请输入微信公众服务号名称' />
        )}
      </FormItem>
        <FormItem
          {...formItemLayout}
          label="APPID"
          hasFeedback
        >
          {getFieldDecorator('id', {
            rules: [{
              required: true, message: '微信公众号appid不能为空',
            }],
          })(
            <Input type='text' placeholder='请输入微信公众号appid' />
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="AppSecret"
          hasFeedback
        >
          {getFieldDecorator('secret', {
            rules: [{
              required: true, message: '微信公众账号AppSecret不能为空!',
            }],
          })(
            <Input type="text" placeholder='请输入微信公众号AppSecret' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="token"
          hasFeedback
        >
          {getFieldDecorator('token', {
            rules: [{
              required: true, message: '微信公众账号token不能为空!',
            }],
          })(
            <Input type="text" placeholder='请输入微信公众号token' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="EncodingAESKey"
          hasFeedback
        >
          {getFieldDecorator('encodingAESKey', {
            rules: [{
              required: true, message: '微信公众账号EncodingAESKey不能为空!',
            }],
          })(
            <Input type="text" placeholder='请输入微信公众号EncodingAESKey' />
          )}
        </FormItem>

        <FormItem
          {...formItemLayout}
          label="服务器地址"
          hasFeedback
        >
          {getFieldDecorator('url', {
            rules: [{
              type: 'url', message: '微信公众账号服务器URL不合法!',
            },{
              required: true, message: '微信公众账号服务器URL不能为空!',
            }],
          })(
            <Input placeholder='请输入微信公众号服务器URL' />
          )}
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">提交</Button>
        </FormItem>
      </Form>
  )
}

export default WechatConfig;
