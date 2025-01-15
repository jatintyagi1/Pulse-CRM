import { Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => {
    return (
        <div>
            <Form.Item
                label="email"
                rules={[
                    {
                        required: true,
                    },
                    {
                        type: 'email'
                    }
                ]}
            >
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="enter your email"
                    type="email"
                    size="large"
                />
            </Form.Item>

            <Form.Item
                label="password"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="enter your password"
                    size="large"
                />
            </Form.Item>

            <Form.Item
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
                <Checkbox>Remember me</Checkbox>
                <a className="login-form-forgot" href="/forgetpassword" style={{ marginLeft: '140px'}}>
                    Forgot Password
                </a>
            </Form.Item>

        </div>
    )
};
export default LoginForm;