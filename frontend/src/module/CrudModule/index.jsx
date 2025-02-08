import { Button, Col, Row } from "antd";
import { useState } from "react";
import CrudLayout from "../../layout/Crudlayout";

import DataTable from "../../components/DataTable";
import DeleteModel from "../../components/DeleteModel";
import CreateForm from '../../components/CreateForm'

import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";

function SidePanelTopContent({ config, formElements, withUpload }) {
    const [labels, setLabels] = useState('');
    return (
        <>

            <Row style={{ opacity: 0 }} gutter={(24, 24)}>
                <Col span={10}>
                    <p style={{ marginBottom: '10px' }}>{labels}</p>
                </Col>

                <Col span={14}>
                    <Button
                        type="text"
                        icon={<DeleteOutlined />}
                        size="small"
                        style={{ float: 'right', marginLeft: '5px', marginTop: '10px' }}
                    >
                        remove
                    </Button>
                    <Button
                        type="text"
                        icon={<EditOutlined />}
                        size="small"
                        style={{ float: 'right', marginLeft: '0px', marginTop: '10px' }}
                    >
                        edit
                    </Button>
                </Col>

                <Col span={24}>
                    <div className="line"></div>
                </Col>
                <div className="space10"></div>
            </Row>
        </>
    )
};


function FixHeaderPanel({ config }) {
    return (
        <Row gutter={8}>
            <Col className="gutter-row">

            </Col>
            <Col className="gutter-row">
                <Button block={true} icon={<PlusOutlined />}></Button>
            </Col>
        </Row>
    )
}


export default function CrudModule({ config, createForm, updateForm, withUpload = false }) {
    return (
        <CrudLayout
            config={config}
            fixHeaderPanel={<FixHeaderPanel config={config} />}
            sidePanelBottomContent={
                <CreateForm config={config} formElements={createForm} withUpload={withUpload} />
            }
            sidePanelTopContent={
                <SidePanelTopContent config={config} formElements={updateForm} withUpload={withUpload} />
            }
        >
            <DataTable config={config} />
            {/* <DeleteModel config={config} /> */}
        </CrudLayout>
    )
}