import { Form, Input } from 'antd'
import React from 'react'

const LoginSection = ({ onFinish, form }) => {
    const onFinish = (values) => {
      

    }
  return (
    <div className="d-flex justify-content-center align-items-center p-2 min-h-screen">
      <div className="max-w-lg w-full p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginSection
