import { useCallback, useEffect } from 'react';
import {
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    EllipsisOutlined,
    RedoOutlined,
    ArrowRightOutlined,
    ArrowLeftOutlined,
} from '@ant-design/icons';
import { Dropdown, Table, Button, Input } from 'antd';
import { PageHeader } from '@ant-design/pro-layout';



const DataTable = ({ config, extra = [] }) => {
    let { entity, dataTableColumns, DATATABLE_TITLE, fields, searchConfig } = config;

    return (
        <>
            <PageHeader
                onBack={() => window.history.back()}
                backIcon={<ArrowLeftOutlined />}
                title={DATATABLE_TITLE}
                ghost={false}
                extra={[
                    <Input
                        key={`searchFilterDataTable}`}
                        placeholder='search'
                        allowClear
                    />,
                    // eslint-disable-next-line react/jsx-key
                    <Button icon={<RedoOutlined />}>
                        Refresh
                    </Button>

                ]}
                style={{
                    padding: '20px 0px',
                }}
            ></PageHeader>

            <Table />

        </>
    )
};

export default DataTable