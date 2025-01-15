import { Button, Form } from "antd";
import RegisterForm from "../forms/RegisterForm";
import AuthModule from '../module/AuthModule/index'

function Register() {

    const onFinish = (values) => {
        console.log(values)
    }

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
                or <a href="/login">already have account Login</a>
            </Form>
        )
    }

    return <AuthModule AUTH_CONTENT={<FormContainer />} AUTH_TITLE="Sign Up" />
};

export default Register;