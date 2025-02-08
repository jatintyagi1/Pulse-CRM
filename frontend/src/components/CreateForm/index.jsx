import { Button, Form } from "antd";

import Loading from '../Loading'

export default function CreateForm({ config, formElements, withUpload = false }) {
    return (
        <Form>
            {formElements}
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}
