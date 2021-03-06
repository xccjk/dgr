import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.less'

function Login() {
  const [type, setType] = useState(true)
  const onFinish = (values) => {

  }

  return (
    <div className='login'>
      <div className='ding-login-title'>
        {type ? '欢迎登录' : '注册打工人'}
      </div>
      <Form
        name='normal_login'
        className='login-form'
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name='username'
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='手机号' />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='密码'
          />
        </Form.Item>
        {type ? (
          <Form.Item className='item'>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox>记住密码</Checkbox>
            </Form.Item>
            <a className='login-form-forgot' href=''>
              忘记密码
            </a>
          </Form.Item>
        ) : null}
        <Form.Item>
          <Button type='primary' htmlType='submit' className='login-form-button'>
            {type ? '登录' : '注册'}
          </Button>
        </Form.Item>
        {type ? (
          <Form.Item>
            <a className='login-form-forgot' onClick={() => setType(!type)}>
              注册
            </a>
            <span className='copywriting'>还没有账户</span>
          </Form.Item>
        ) : null}
      </Form>
    </div>
  )
}

export default Login
