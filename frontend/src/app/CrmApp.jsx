import { Layout } from 'antd';

import Sidebar from './Sidebar/index'
import Header from './Header';
import useResponsive from '../hooks/useResponsive';
import AppRouter from '../routes/AppRoutes';

export default function CrmApp() {
    const { isMobile } = useResponsive();
    const { Content } = Layout;

    return (
        <Layout hasSider>
            <Sidebar />

            {isMobile ? (
                <Layout>
                    <Header />
                    <Content
                        style={{
                            margin: '40px auto 30px',
                            overflow: 'initial',
                            width: '100%',
                            padding: '0 25px',
                            maxWidth: 'none',
                        }}
                    >
                        <AppRouter />
                    </Content>
                </Layout>
            ) : (
                <Layout>
                    <Header />
                    <Content
                        style={{
                            margin: '40px auto 30px',
                            overflow: 'initial',
                            width: '100%',
                            padding: '0 50px',
                            maxWidth: 1400,
                        }}
                    >
                        <AppRouter />
                    </Content>
                </Layout>
            )}
        </Layout>
    )
}