import { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import useResponsive from "../../hooks/useResponsive";

import {
    SettingOutlined,
    CustomerServiceOutlined,
    ContainerOutlined,
    FileSyncOutlined,
    DashboardOutlined,
    CreditCardOutlined,
    MenuOutlined,
    ShopOutlined,
    WalletOutlined,
    ReconciliationOutlined,
    UserOutlined,
    FilterOutlined,
    FileOutlined,
    TagOutlined,
    TagsOutlined,

} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar() {
    const { isMobile } = useResponsive();

    return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
}

const menuItems = [
    {
        key: 'dashboard',
        icon: <DashboardOutlined />,
        label: <Link to="/">Dashboard</Link>,
    },
    {
        key: 'customer',
        icon: <CustomerServiceOutlined />,
        label: <Link to={'customers'}>Customers</Link>,
    },
    {
        key: 'people',
        icon: <UserOutlined />,
        label: 'Peoples',
    },
    {
        key: 'company',
        icon: <ShopOutlined />,
        label: 'Companies',
    },
    {
        key: 'lead',
        icon: <FilterOutlined />,
        label: 'Leads',
    },
    {
        key: 'offer',
        icon: <FileOutlined />,
        label: 'Offers',
    },
    {
        key: 'invoice',
        icon: <ContainerOutlined />,
        label: 'Invoices',
    },
    {
        key: 'quote',
        icon: <FileSyncOutlined />,
        label: 'Proforma Invoices',
    },
    {
        key: 'payment',
        icon: <CreditCardOutlined />,
        label: 'Payments',
    },
    {
        key: 'product',
        icon: <TagOutlined />,
        label: 'Products',
    },
    {
        key: 'categoryproduct',
        icon: <TagsOutlined />,
        label: 'Products Category',
    },
    {
        key: 'expenses',
        icon: <WalletOutlined />,
        label: 'Expenses',
    },
    {
        key: 'expensesCategory',
        icon: <ReconciliationOutlined />,
        label: 'Expenses Category',
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
        children: [
            {
                key: 'generalSettings',
                label: 'Settings',
            },
            {
                key: 'paymentMode',
                label: 'Payments Mode',
            },
            {
                key: 'taxes',
                label: 'Taxes',
            },
            {
                key: 'about',
                label: 'About',
            },
        ],
    },
];


function DesktopSidebar({ collapsible = false, isMobile = false }) {
    const navigate = useNavigate();
    return (
        <Sider
            collapsible={collapsible}
            className="navigation"
            width={256}
            theme="light"
            style={{
                overflow: "auto",
                height: "100vh",
                position: isMobile ? "absolute" : "relative",
                bottom: "20px",
                left: isMobile ? "0" : "0px",
                top: isMobile ? "0" : "0px",
                boxShadow: isMobile ? "none" : "none",
                // borderRadius: "10px",
                backgroundColor: "#ffffff",
            }}
        >
            {/* Logo */}
            <div
                className="logo"
                style={{
                    cursor: "pointer",
                    textAlign: "center",
                    padding: "15px 0",
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#1890ff",
                    borderBottom: "1px solid #f0f0f0",
                    borderRight: "1px solid #f0f0f0",
                }}
                onClick={() => navigate('/')}
            >
                PULSE
            </div>

            {/* Sidebar Menu */}
            <Menu
                items={menuItems}
                mode="inline"
                theme="light"
                style={{
                    width: "100%",
                    fontSize: "16px",
                    fontWeight: "500",
                }}
            />
        </Sider>
    );
}

function MobileSidebar() {
    const [visible, setVisible] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <Button
                type="text"
                size="large"
                onClick={() => setVisible(true)}
                className="mobile-sidebar-btn"
                style={{
                    marginLeft: 25,
                    position: "fixed",
                    top: "10px",
                    left: "-10px",
                    // background: "#1890ff",
                    color: "black",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                }}
            >
                <MenuOutlined style={{ fontSize: 18 }} />
            </Button>

            {/* Drawer Sidebar */}
            <Drawer
                width={250}
                style={{ backgroundColor: "#fff" }}
                placement="left"
                closable={false}
                onClose={() => setVisible(false)}
                open={visible}
            // bodyStyle={{ padding: 0 }}
            >
                <DesktopSidebar collapsible={false} isMobile />
            </Drawer>
        </>
    );
}
