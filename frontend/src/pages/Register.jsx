import { useEffect } from "react";
import { Button, Form, notification } from "antd";
import RegisterForm from "../forms/RegisterForm";
import AuthModule from '../module/AuthModule/index';
import Loading from '../components/Loading';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdmin, clearError } from '../redux/Auth/authSlice';

function Register() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isAuthenticated, error } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            notification.success({
                message: "Registration Successful",
                description: "You have successfully registered!",
                duration: 3,
            });
            navigate('/dashboard');
        }

        if (error) {
            notification.error({
                message: "Registration Failed",
                description: error || "An error occurred while registering.",
                duration: 3,
            });
        }

        return () => {
            dispatch(clearError()); // Clear any previous errors when component unmounts
        };
    }, [isAuthenticated, error, navigate, dispatch]);

    const onFinish = (values) => {
        dispatch(registerAdmin(values));
    };

    const FormContainer = () => (
        <Loading isLoading={isLoading}>
            <Form
                layout="vertical"
                name="normal_register"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <RegisterForm />
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        size="large"
                        loading={isLoading}
                        style={{ width: '100%' }}
                    >
                        Register
                    </Button>
                </Form.Item>
                <div>or <Link to="/login">already have an account? Login</Link></div>
            </Form>
        </Loading>
    );

    return <AuthModule AUTH_CONTENT={<FormContainer />} AUTH_TITLE="Sign Up" />;
};

export default Register;
