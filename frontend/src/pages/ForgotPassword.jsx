import { Form, Button } from "antd";
import AuthModule from "../module/AuthModule";
import ForgotPasswordForm from "../forms/ForgetPassword";


function ForgotPassword() {

    const FormContainer = () => {
        return (
            <Form
                name="forgot_password"
                className="forgot-password-form"
                initialValues={{ remember: true }}
            >
                <ForgotPasswordForm />
                <Form.Item style={{ display: "flex", flexDirection: "column" }}>
                    <Button type="primary" htmlType="submit" className="forgot-password-form-button" size="large">
                        Reset Password
                    </Button>
                </Form.Item>
                <Form.Item>
                    <a href="/login">Already have an account? Login</a>
                </Form.Item>
            </Form>
        );
    };

    return <AuthModule AUTH_CONTENT={<FormContainer />} AUTH_TITLE="Forgot Password" />;
}

export default ForgotPassword;
