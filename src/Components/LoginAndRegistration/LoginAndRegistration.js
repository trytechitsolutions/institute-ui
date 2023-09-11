import React, { useRef, useState } from 'react';
import { Button, Col, Row } from 'antd';
import './LoginAndRegistration.css';
import img from "../../images/image.jpg"
import InputFields from '../ReusableComponents/InputFields/InputFields';
import { formdata } from "./LoginAndRegistrationModal";
import { onChangeValueBind, preparePayLoad } from '../ReusableComponents/CoomonFunctions/CommonFunctions';

const LoginAndRegistration = () => {
  const ChildRef = useRef();
  const [validationMsg, setValidationMsg] = useState('');

  function register() {
    ChildRef.current.validateForm();
  }

  function showError() {
    setValidationMsg("Please enter mandatory fields..!")
  }

  function submitData() {
    const paylod = preparePayLoad(formdata.fieldsArray);
    console.log(paylod)
  }

  function reSetForm() {
    ChildRef.current.reSetForm();
  }

  function onChange(data) {
    onChangeValueBind(formdata, data);
    if (validationMsg) {
      setValidationMsg("");
    }
  }

  return (
    <div className="split-container">
      <div className="left-panel">
        <img src={img} alt="cover" className="img" />
      </div>
      <div className="right-panel">
        <Row>
          <Col xs={2} sm={2} md={2} lg={1}></Col>
          <Col xs={22} sm={22} md={22} lg={23}>
            <Row justify="center">
              <Col span={18}>
                <h4 className="card-title">Institute Management Registration</h4>
              </Col>
              <InputFields ref={ChildRef} modaldata={formdata} onChange={onChange} showError={showError} submitData={submitData} />
            </Row>
            <br />
            <Row justify="start">
              <Col span={1}></Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                <Button type="primary" onClick={reSetForm}>Reset</Button>
              </Col>
              <Col xs={24} sm={12} md={8} lg={6} xl={4}>
                <Button type="primary" onClick={register}>Register</Button>
              </Col>
            </Row>

            <Row justify="center">
              <Col span={18}>
                {validationMsg &&
                  <span style={{ color: "red", marginTop: "15px", fontFamily: "bold", fontSize: "20px" }}>{validationMsg}</span>
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );

}
export default LoginAndRegistration;
