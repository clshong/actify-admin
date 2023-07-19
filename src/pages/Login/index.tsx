import React from 'react'
import { Button, Form, Input } from 'antd'
import './login.less'

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const App: React.FC = () => {
  return (
    <div className="login flex flex-col justify-center items-center">
      <h2 className="w-xl  text-center m-b10 p-l40">actify-admin</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input className="w-xs" placeholder="admin" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password className="w-xs" placeholder="123456" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" className="w-xs">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default App
