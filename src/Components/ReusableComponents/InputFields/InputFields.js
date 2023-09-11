
import React, { forwardRef, useImperativeHandle } from 'react';
import { Form, Input, InputNumber, DatePicker, Checkbox, Select, Radio, Col, Row } from 'antd';
import './InputFields.css';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';

const Input_Fields = forwardRef((props, ref) => {
    const [form] = Form.useForm();
    const { modaldata, onChange, showError, submitData } = props;

    const handleInputChange = (name, type, value) => {
        let obj = { name, type, value }
        onChange(obj);
    };

    function reSetForm() {
        form.resetFields()
    }

    const validateForm = () => {
        form.validateFields().then(res => {
            submitData(res)
        }).catch((err) => {
            showError(err);
        });
    };

    useImperativeHandle(ref, () => ({
        reSetForm,
        validateForm
    }));

    return (
        <div>
            {modaldata.fieldsArray &&
                <Form form={form} layout={modaldata.formlayout !== undefined ? modaldata.formlayout : "vertical"} >
                    <Row style={{ marginLeft: "10px" }}>
                        {modaldata.fieldsArray.map((ele, i) =>
                            <Col xs={ele.xs} sm={ele.sm} md={ele.md} lg={ele.lg} key={i} >
                                {ele.type === "text" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <Input placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value, event.target.type)} />
                                    </Form.Item>
                                )}
                                {ele.type === "text-area" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <Input.TextArea rows={ele.rows} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value, event.target.type)} />
                                    </Form.Item>
                                )}
                                {ele.type === "email" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <Input prefix={<UserOutlined />} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "password" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <Input.Password prefix={<LockOutlined />} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "number" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <InputNumber style={{ width: '100%' }} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "phonenumber" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <InputNumber style={{ width: '100%' }} prefix={<PhoneOutlined />} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event)} />
                                    </Form.Item>
                                )}
                                {ele.type === "date" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules}>
                                        <DatePicker style={{ width: '100%' }} onChange={(event) => handleInputChange(ele.name, ele.type, event)} />
                                    </Form.Item>
                                )}
                                {ele.type === "checkbox" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} valuePropName="checked">
                                        <Checkbox style={{ width: '100%', marginTop: "20px" }} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.checked)}>
                                            {ele.rules[0].required && <span style={{ color: "red" }}>*</span>}
                                            check box
                                        </Checkbox>
                                    </Form.Item>
                                )}
                                {ele.type === "dropdown" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} >
                                        <Select placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event)}>
                                            {ele.options.map((ele, i) =>
                                                <Select.Option key={i} value={ele.id}>{ele.value}</Select.Option>
                                            )
                                            }
                                        </Select>
                                    </Form.Item>
                                )}
                                {ele.type === "radio" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} >
                                        <Radio.Group onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)}>
                                            {ele.options.map((ele, i) =>
                                                <Radio key={i} value={ele.id}>{ele.value}</Radio >
                                            )
                                            }
                                        </Radio.Group>
                                    </Form.Item>
                                )}
                            </Col>
                        )}
                    </Row>
                </Form>
            }
        </div>
    )
})
export default Input_Fields;