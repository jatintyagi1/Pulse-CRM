import { Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div>
            <Form.Item
                name="email"
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
                name="password"
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
                <Link className="login-form-forgot" to="/forget-password" style={{ marginLeft: '140px'}}>
                    Forgot Password
                </Link>
            </Form.Item>

        </div>
    )
};
export default LoginForm;