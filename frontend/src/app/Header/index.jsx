import { Avatar, Dropdown, Layout } from 'antd';
import { LogoutOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';


export default function Header() {
    const { Header } = Layout;

    const ProfileDropdown = () => {
        return (
            <div className='profileDropdown'>
                <Avatar
                    size="large"
                    className="last"
                    style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        boxShadow: 'rgba(150, 190, 238, 0.35) 0px 0px 6px 1px',
                    }}
                >
                    JATIN
                </Avatar>
                <div className='profileDropdownInfo'>
                    <p>Jatin Tyagi</p>
                    <p>jatin@gmail.com</p>
                </div>
            </div>
        )
    }

    const DropdownMenu = ({ text }) => {
        return <span style={{}}>{text}</span>;
    };

    const items = [
        {
            label: <ProfileDropdown className="headerDropDownMenu" />,
            key: "ProfileDropdown",
        },
        {
            type: "divider",
        },
        {
            icon: <UserOutlined />,
            key: "settingProfile",
            label: <DropdownMenu text="profile_settings" />,
        },
        {
            icon: <ToolOutlined />,
            key: "settingApp",
            label: "App Settings",
        },
        {
            type: "divider",
        },
        {
            icon: <LogoutOutlined />,
            key: "logout",
            label: "Logout",
        },
    ];


    return (
        <Header
            style={{
                padding: '12px',
                background: '#ffffff',
                display: 'flex',
                flexDirection: 'row-reverse',
                justifyContent: 'flex-start',
                gap: ' 15px',
            }}
        >
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                placement="bottomRight"
                stye={{ width: '280px', float: 'right' }}
            >
                <Avatar
                    className='last'
                    src=''
                    style={{
                        color: '#f56a00',
                        backgroundColor: '#fde3cf',
                        boxShadow: 'rgba(150, 190, 238, 0.35) 0px 0px 10px 2px',
                        float: 'right',
                        cursor: 'pointer',
                    }}
                    size="large"
                >
                    JATIN
                </Avatar>
            </Dropdown>
        </Header>
    )
}