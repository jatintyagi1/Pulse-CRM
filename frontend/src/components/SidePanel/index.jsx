import { Grid, Layout, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import CollapseBox from '../CollapseBox';


const { useBreakpoint } = Grid;
const { Sider } = Layout;

export default function SidePanel({
    config,
    topContent,
    bottomContent,
    fixHeaderPanel,
}) {
    return (
        <Drawer>
            <div
                className='sidePanelContent'
                style={{

                }}
            >
                {fixHeaderPanel}
                <CollapseBox></CollapseBox>
            </div>
        </Drawer>
    )
}