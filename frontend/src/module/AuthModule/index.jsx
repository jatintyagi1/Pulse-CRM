import { Layout, Col, Divider, Typography } from 'antd';

import SideContent from './SideContent';
import AuthLayout from '../../layout/AuthLayout/index'

const { Content } = Layout;
const { Title } = Typography;

const AuthModule = ({ AUTH_TITLE, AUTH_CONTENT, isForRegister = false }) => {
    return (
        <AuthLayout sideContent={<SideContent />}>
            <Content
                style={{
                    padding: isForRegister ? '40px 30px 30px' : '100px 30px 30px',
                    maxWidth: '440px',
                    margin: '0 auto'
                }}
            >
                <Title>{AUTH_TITLE}</Title>
                <Divider />
                <div className='site-layout-content'>{AUTH_CONTENT}</div>
            </Content>
        </AuthLayout>
    )
}

export default AuthModule