import { Layout } from 'antd';


import DefaultLayout from "../DefaultLayout";
import SidePanel from "../../components/SidePanel";


const { Content } = Layout;

const ContentBox = ({ children }) => {
    return (
        <Content
            className="whiteBox shadow layoutPadding"
            style={{
                margin: '30px auto',
                width: '100%',
                maxWidth: '100%',
                flex: 'none',
            }}
        >
            {children}
        </Content>
    )
}


// crud Layout
const CrudLayout = ({
    children,
    config,
    sidePanelTopContent,
    sidePanelBottomContent,
    fixHeaderPanel,
}) => {
    return (
        <>
            <DefaultLayout>
                <SidePanel
                    config={config}
                    topContent={sidePanelTopContent}
                    bottomContent={sidePanelBottomContent}
                    fixHeaderPanel={fixHeaderPanel}
                ></SidePanel>

                <ContentBox>{children}</ContentBox>
            </DefaultLayout>
        </>
    )
};
export default CrudLayout;