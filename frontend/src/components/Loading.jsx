import { Spin } from "antd"
import { LoadingOutlined } from '@ant-design/icons';

const Loading = ({ isLoading, children }) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
    return (
        <Spin indicator={antIcon} spinning={isLoading}>
            {children}
        </Spin>
    )
};

export default Loading;