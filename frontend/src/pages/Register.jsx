import { Button, Form } from "antd";
import RegisterForm from "../forms/RegisterForm";
import AuthModule from '../module/AuthModule/index'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const onFinish = async (values) => {
        const BACKEND_URL = import.meta.env.VITE_BACKEND_SERVER; // Using the .env variable
        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/register`, values);
            console.log('Registration successful:', response.data);
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                console.error('Error:', error.response.data.error || 'An error occurred.');
            } else if (error.request) {
                console.error('Error: No response received from the server.');
            } else {
                console.error('Error:', error.message);
            }
        }
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
                <RegisterForm />
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
                        Register
                    </Button>
                </Form.Item>
                or <Link to="/login">already have account Login</Link>
            </Form>
        )
    }

    return <AuthModule AUTH_CONTENT={<FormContainer />} AUTH_TITLE="Sign Up" />
};

export default Register;