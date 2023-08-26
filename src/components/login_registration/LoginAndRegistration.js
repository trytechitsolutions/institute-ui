import React from 'react';
import { Button, Form, Input, InputNumber, Col, Row, Card } from 'antd';
import './LoginAndRegistration.css';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
const LoginAndRegistration = () => {
  const [form] = Form.useForm();

  const validatePasswordConfirm = (_, value) => {
    const { password } = form.getFieldValue();
    if (value && password && value !== password) {
      return Promise.reject('Passwords do not match');
    }
    return Promise.resolve();
  };


  const validatePhoneNumber = (_, value) => {
    if (value && !/^\d{10}$/.test(value)) {
      return Promise.reject('Please enter a valid 10-digit phone number');
    }
    return Promise.resolve();
  };

  const isSubmitButtonDisabled = () => {
    const fieldsError = form.getFieldsError();
    const touchedFields = form.isFieldsTouched();

    return fieldsError.some((field) => field.errors.length > 0) || !touchedFields;
  };

  function register() {
    console.log("form", form)
    console.log("form", form.getFieldError())

  }

 function reSetForm(){
    form.resetFields()
  }

  return (

    <Form form={form} layout="vertical" >
      <Row>
        <Col span={24}>
          <Card className="Card">
            <Row>
              <Col span={5}></Col>
              <Col span={19}>
                <h4 className="card-title">Institute Management Registration</h4>
              </Col>
              <Col span={11}>
                <Form.Item label="First Name" name="firstName" rules={[{ required: true, message: 'Please enter your first name' }]}>
                  <Input placeholder="First Name"  />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={11}>
                <Form.Item label="Middle Name" name="middleName">
                  <Input placeholder="Middle Name" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Last Name" name="lastName" rules={[{ required: true, message: 'Please enter your last name' }]}>
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={11}>
                <Form.Item label="Email" name="email" rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}>
                  <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Password" name="password" rules={[
                  { required: true, message: 'Please enter your password' },
                  { min: 8, message: 'Password must be at least 8 characters long' }
                ]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={11}>
                <Form.Item label="Confirm Password" name="confirmPassword" rules={[
                  { required: true, message: 'Please enter your Confirm Password' },
                  { validator: validatePasswordConfirm }
                ]}>
                  <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Contact Number" name="contactNumber" rules={[
                  { required: true, message: 'Please enter your contact number' },
                  { validator: validatePhoneNumber }
                ]}>
                  <InputNumber
                    style={{ width: '100%' }}
                    placeholder="Phone Number"
                    prefix={<PhoneOutlined />} />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={11}>
                <Form.Item label="Institute Name" name="instituteName" rules={[
                  { required: true, message: 'Please enter your contact number' },
                ]}>
                  <Input placeholder="Institute Name" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="Country" name="country" rules={[
                  { required: true, message: 'Please enter your country' },
                ]}>
                  <Input placeholder="Country" />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={11}>
                <Form.Item label="State" name="state" rules={[
                  { required: true, message: 'Please enter your state' },
                ]}>
                  <Input placeholder="State" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item label="City" name="city" rules={[
                  { required: true, message: 'Please enter your city' },
                ]}>
                  <Input placeholder="City" />
                </Form.Item>
              </Col>
              <Col span={1}></Col>
              <Col span={11}>
                <Form.Item label="Zip Code" name="zipCode" rules={[
                  { required: true, message: 'Please enter your zip coder' },
                ]}>
                  <Input placeholder="Zip Code" />
                </Form.Item>
              </Col>
              <Col span={11}>
                <Form.Item>
                  <Button type="primary" onClick={reSetForm}>Reset</Button> &nbsp;
                  <Button type="primary" onClick={register}>Register</Button>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Form >
  );

}
export default LoginAndRegistration;
