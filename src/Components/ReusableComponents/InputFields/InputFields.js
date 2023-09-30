
import React, { forwardRef, useEffect, useImperativeHandle, useState, useCallback } from 'react';
import { Form, Input, InputNumber, DatePicker, Checkbox, Upload, Button, Select, Radio, Col, Row } from 'antd';
import { UserOutlined, LockOutlined, PhoneOutlined, UploadOutlined } from '@ant-design/icons';
import './InputFields.css';


const InputFields = forwardRef((props, ref) => {
    const { modaldata, onChange, submitFormData, index } = props;
    const [initialValues, setInitialValues] = useState();
    const [form] = Form.useForm();

    const handleInputChange = (name, type, value) => {
        let obj = { name, type, value }
        onChange(obj, index);
    };

    const validateForm = () => {
        form.validateFields().then(res => {
            if (submitFormData) {
                submitFormData(res);
            }
        }).catch((err) => {
            console.log(err)
        });
    };

    const handlButton = (name) => {
        if (name.toLowerCase() === "submit") {
            validateForm();
        } else if (name.toLowerCase() === "reset") {
            reSetForm();
        } else {
            console.log("cancel")
        }
    }

    function reSetForm() {
        form.resetFields();
    }

    const bindValues = useCallback(() => {
        const arr = [];
        modaldata.fieldsArray.forEach((field) => {
            arr.push({ name: field.name, value: field.value });
        });
        setInitialValues(arr);
    }, [modaldata]);

    useImperativeHandle(ref, () => ({
        reSetForm,
        handlButton,
        bindValues,
    }));

    //Bind Values
    useEffect(() => {
        bindValues();
    }, [bindValues])

    return (
        <div>
            {modaldata.fieldsArray &&
                <Form form={form} layout={modaldata.formlayout !== undefined ? modaldata.formlayout : "vertical"} fields={initialValues}>
                    <Row style={{ marginLeft: "10px" }}>
                        {modaldata.fieldsArray.map((ele, i) =>
                            <Col xs={ele.xs} sm={ele.sm} md={ele.md} lg={ele.lg} key={i} >
                                {ele.type === "text" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: "" }} wrapperCol={{ span: "" }} >
                                        <Input placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "text-area" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <Input.TextArea rows={ele.rows} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "email" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <Input prefix={<UserOutlined />} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "password" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }} >
                                        <Input.Password prefix={<LockOutlined />} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)} />
                                    </Form.Item>
                                )}
                                {ele.type === "number" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <InputNumber style={{ width: '100%' }} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event)} />
                                    </Form.Item>
                                )}
                                {ele.type === "phonenumber" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <InputNumber style={{ width: '100%' }} prefix={<PhoneOutlined />} placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event)} />
                                    </Form.Item>
                                )}
                                {ele.type === "date" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <DatePicker style={{ width: '100%' }} onChange={(event) => handleInputChange(ele.name, ele.type, event)} />
                                    </Form.Item>
                                )}
                                {ele.type === "checkbox" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} valuePropName="checked" labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <Checkbox style={{ width: '100%', marginTop: "20px" }} onChange={(event) => handleInputChange(ele.name, ele.type, event.target.checked)}>
                                            {ele.rules[0].required && <span style={{ color: "red" }}>*</span>}
                                            check box
                                        </Checkbox>
                                    </Form.Item>
                                )}
                                {ele.type === "dropdown" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <Select placeholder={ele.placeholder} onChange={(event) => handleInputChange(ele.name, ele.type, event)}>
                                            {ele.options.map((ele, i) =>
                                                <Select.Option key={i} value={ele.id}>{ele.value}</Select.Option>
                                            )
                                            }
                                        </Select>
                                    </Form.Item>
                                )}
                                {ele.type === "radio" && (
                                    <Form.Item label={ele.label} name={ele.name} rules={ele.rules} labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}>
                                        <Radio.Group onChange={(event) => handleInputChange(ele.name, ele.type, event.target.value)}>
                                            {ele.options.map((ele, i) =>
                                                <Radio key={i} value={ele.id}>{ele.value}</Radio >
                                            )
                                            }
                                        </Radio.Group>
                                    </Form.Item>
                                )}
                                {ele.type === "file" && (
                                    <Form.Item label={""} name={ele.name} rules={ele.rules} valuePropName="fileList" labelCol={{ span: ele.labelCol }} wrapperCol={{ span: ele.wrapperCol }}
                                        getValueFromEvent={(e) => {
                                            let fileList = e.fileList ? e.fileList : [];
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

            {modaldata?.buttonSecction?.buttons?.length > 0 &&
                <Row justify={modaldata.buttonSecction.justify}>
                    {modaldata.buttonSecction.buttons.map((ele, i) =>
                        <Col className="btn" key={i}>
                            <Button type={ele.type} loading={ele.loading} onClick={() => handlButton(ele.fun)}>{ele.name}</Button>
                        </Col>
                    )}
                </Row>
            }
        </div >
    )
});
export default InputFields;