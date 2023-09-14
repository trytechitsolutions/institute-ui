
import React from 'react';
import { Form, Input, InputNumber, DatePicker, Checkbox, Upload, Button, Select, Radio, Col, Row } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, UploadOutlined } from '@ant-design/icons';
import './InputFields.css';


const InputFields = (props) => {
    const [form] = Form.useForm();
    const { modaldata, onChange, submitFormData } = props;

    const handleInputChange = (name, type, value) => {
        let obj = { name, type, value }
        onChange(obj);
    };

    const validateForm = () => {
        form.validateFields().then(res => {
            submitFormData(res)
        }).catch((err) => {
            console.log(err)
        });
    };
    
    const handlButton = (name) => {
        if (name.toLowerCase() === "register") {
            validateForm();
        } else if (name.toLowerCase() === "reset") {
            form.resetFields()
        } else {
            console.log("cancel")
        }
    }

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
                                {ele.type === "file" && (
                                    <Form.Item label={""} name={ele.name} rules={ele.rules} valuePropName="fileList"
                                        getValueFromEvent={(e) => {
                                            let fileList = e && e.fileList ? e.fileList : [];
                                            if (!Array.isArray(fileList) && typeof fileList === "object" && fileList.uid) {
                                                fileList = [fileList];
                                            }
                                            fileList = Array.isArray(fileList) ? fileList : [];
                                            return fileList;
                                        }}>
                                        <Upload
                                            beforeUpload={() => false}
                                            showUploadList={ele.showUploadList} // Show file list after uploading
                                            multiple={ele.multiple} // Allow multiple file selection
                                            onChange={(event) => handleInputChange(ele.name, ele.type, event.fileList)}
                                        >
                                            <Button icon={<UploadOutlined />}>{ele.label}</Button>
                                        </Upload>
                                    </Form.Item>
                                )}
                            </Col>
                        )}
                    </Row>
                </Form>
            }
            <br />
            {modaldata.buttons.length > 0 &&
                <Row justify="end">
                    {modaldata.buttons.map((ele, i) =>
                        <Col xs={24} sm={12} md={8} lg={6} xl={3} key={i}>
                            <Button type={ele.type} onClick={() => handlButton(ele.fun)}>{ele.name}</Button>
                        </Col>
                    )}
                </Row>
            }
        </div >
    )
}
export default InputFields;