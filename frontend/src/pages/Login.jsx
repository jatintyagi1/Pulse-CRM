import { Button, Form, notification } from 'antd';
import AuthModule from '../module/AuthModule';
import LoginForm from '../forms/LoginForm';
import Loading from '../components/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin, clearError } from '../redux/Auth/authSlice';
import { useEffect } from 'react';

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isAuthenticated, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            notification.success({
                message: "Login Successful",
                description: "Welcome back! Redirecting to the dashboard...",
                duration: 3,
            });
            navigate('/dashboard');
        }

        if (error) {
            notification.error({
                message: "Login Failed",
                description: error || "Invalid credentials. Please try again.",
                duration: 3,
            });
        }

        // Clear error when component unmounts
        return () => {
            dispatch(clearError());
        };
    }, [isAuthenticated, error, navigate, dispatch]);

    const onFinish = (values) => {
        dispatch(loginAdmin(values));
    };

    const FormContainer = () => {
        return (
            <Loading isLoading={isLoading}>
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
                                width: '100%',
                            }}
                            loading={isLoading}
                        >
                            Sign In
                        </Button>
                    </Form.Item>
                    or <Link to="/register">don&apos;t have an account? Register</Link>
                </Form>
            </Loading>
        );
    };

    return <AuthModule AUTH_CONTENT={<FormContainer />} AUTH_TITLE="Sign In" />;
}

export default Login;
