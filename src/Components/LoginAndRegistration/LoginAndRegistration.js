import React from 'react';
import { Col, Row } from 'antd';
import img from "../../images/image.jpg"
import InputFields from '../ReusableComponents/InputFields/InputFields';
import { formdata } from "./LoginAndRegistrationModal";
import { onChangeValueBind, preparePayLoad } from '../ReusableComponents/CoomonFunctions/CommonFunctions';

import './LoginAndRegistration.css';

const LoginAndRegistration = () => {

  function submitFormData() {
    const paylod = preparePayLoad(formdata.fieldsArray);
    console.log(paylod)
  }

  function onChange(data) {
    onChangeValueBind(formdata, data);
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
              <Col span={14}>
                <h4 className="card-title">Institute Management Registration</h4>
              </Col>
              <InputFields modaldata={formdata} onChange={onChange} submitFormData={submitFormData} />
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );

}
export default LoginAndRegistration;
