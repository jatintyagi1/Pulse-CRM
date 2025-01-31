import { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
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
} from "@ant-design/icons";

const { Sider } = Layout;

export default function Sidebar() {
    const { isMobile } = useResponsive();
    return isMobile ? <MobileSidebar /> : <DesktopSidebar />;
}

const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "customer", icon: <CustomerServiceOutlined />, label: "Customers" },
    { key: "invoice", icon: <ContainerOutlined />, label: "Invoices" },
    { key: "quote", icon: <FileSyncOutlined />, label: "Quote" },
    { key: "payment", icon: <CreditCardOutlined />, label: "Payments" },
    { key: "paymentMode", icon: <WalletOutlined />, label: "Payments Mode" },
    { key: "taxes", icon: <ShopOutlined />, label: "Taxes" },
    { key: "generalSettings", icon: <SettingOutlined />, label: "Settings" },
    { key: "about", icon: <ReconciliationOutlined />, label: "About" },
];

function DesktopSidebar({ collapsible = false, isMobile = false }) {
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
                boxShadow: isMobile ? "none" : "2px 0px 10px rgba(0, 0, 0, 0.1)",
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
                }}
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
                    zIndex: 1000,
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
