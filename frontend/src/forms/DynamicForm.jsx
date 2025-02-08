import { useState } from 'react';
import { DatePicker, Input, Form, Select, InputNumber, Switch, Tag } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { countryList } from '../utils/countryList';

export default function DynamicForm({ fields, isUpdateForm = false }) {
    const [feedback, setFeedback] = useState();

    return (
        <div>
            {Object.keys(fields).map((key) => {
                let field = fields[key];

                if ((isUpdateForm && !field.disableForUpdate) || !field.disableForForm) {
                    field.name = key;
                    if (!field.label) field.label = key;
                    if (field.hasFeedback)
                        return (
                            <FormElement feedback={feedback} setFeedback={setFeedback} key={key} field={field} />
                        );
                    else if (feedback && field.feedback) {
                        if (feedback == field.feedback) return <FormElement key={key} field={field} />;
                    } else {
                        return <FormElement key={key} field={field} />;
                    }
                }
            })}
        </div>
    );
}

function FormElement({ field, feedback, setFeedback }) {
    const { TextArea } = Input;

    const SelectComponent = () => (
        <Form.Item label={field.label} name={field.name} rules={[{ required: field.required || false }]}>
            <Select showSearch={field.showSearch} defaultValue={field.defaultValue} style={{ width: '100%' }}>
                {field.options?.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                        {option.label}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );

    const CountryComponent = () => (
        <Form.Item label={field.label} name={field.name} rules={[{ required: field.required || false }]}>
            <Select showSearch defaultValue={field.defaultValue} style={{ width: '100%' }}>
                {countryList.map((language) => (
                    <Select.Option key={language.value} value={language.value}>
                        {language.label}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    );

    const formItemComponent = {
        select: <SelectComponent />,
        country: <CountryComponent />,
    };

    const compunedComponent = {
        string: <Input autoComplete="off" maxLength={field.maxLength} defaultValue={field.defaultValue} />,
        url: <Input addonBefore="http://" autoComplete="off" placeholder="www.example.com" />,
        textarea: <TextArea rows={4} />,
        email: <Input autoComplete="off" placeholder="email@example.com" />,
        number: <InputNumber style={{ width: '100%' }} />,
        phone: <Input style={{ width: '100%' }} placeholder="+1 123 456 789" />,
        boolean: <Switch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultValue={true} />,
        date: <DatePicker placeholder="Select Date" style={{ width: '100%' }} />,
    };

    const filedType = {
        string: 'string',
        textarea: 'string',
        number: 'number',
        phone: 'string',
        url: 'url',
        website: 'url',
        email: 'email',
    };

    const customFormItem = formItemComponent[field.type];
    let renderComponent = compunedComponent[field.type] || compunedComponent['string'];

    if (customFormItem) return <>{customFormItem}</>;
    else {
        return (
            <Form.Item label={field.label} name={field.name} rules={[{ required: field.required || false }]}
                valuePropName={field.type === 'boolean' ? 'checked' : 'value'}>
                {renderComponent}
            </Form.Item>
        );
    }
}