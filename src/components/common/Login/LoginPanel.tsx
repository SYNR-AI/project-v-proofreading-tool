import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './LoginPanel.module.scss';

interface LoginPanelProps {
  onResolveLogin: () => void
  onRejectLogin: (err: any) => void
}

const LoginPanel: React.FC<LoginPanelProps> = ({ onRejectLogin, onResolveLogin }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: { username: string; password: string }) => {
    onResolveLogin();
  };

  return (
    <div className={styles.overlay}>
      <Card
        className={styles.loginPanel}
      >
        <Form
          form={form}
          name="login"
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please enter username' }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPanel;
