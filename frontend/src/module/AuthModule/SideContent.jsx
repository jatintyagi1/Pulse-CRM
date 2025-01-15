import { Space, Layout, Divider, Typography } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

function SideContent() {
    return (
        <Content
            style={{
                padding: '150px 30px 30px',
                width: '100%',
                maxWidth: '450px',
                margin: '0 auto',
            }}
            className="sideContent"
        >
            <div style={{ width: '100%' }}>
                <h1>PULSE CRM</h1>

                <Title level={1} style={{ fontSize: 22 }}>
                    Customer Relationship Management
                </Title>

                <div className='space20'>
                    <div className='list-checked' style={{ paddingRight: 0 }}>
                        <Space direction='vertical'>
                            <Text strong>All-in-one-Tool</Text>
                            <Text>Run and scale up Your business</Text>
                        </Space>
                        <Space direction='vertical'>
                            <Text strong>Easily add and manage your services</Text>
                            <Text>It bring together your invoice clients snd leads</Text>
                        </Space>
                    </div>
                </div>
            </div>
        </Content>
    )
};

export default SideContent;