import { Button, Form } from 'antd';
import AuthModule from '../module/AuthModule';
import LoginForm from '../forms/LoginForm';
import { Link } from 'react-router-dom';

function Login() {

    const onFinish = (values) => {
        console.log(values)
    };

    const FormContainer = () => {
        return (
            <Form
                layout="vertical"
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <LoginForm />
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        style={{
                            width: '100%'
                        }}
                    >
                        Sign In
                    </Button>
                </Form.Item>
                or <Link to="/register">don&apos;t have account Login</Link>
            </Form>
        )
    }
    return <AuthModule AUTH_CONTENT={<FormContainer />} AUTH_TITLE="Sign In" />
};

export default Login;