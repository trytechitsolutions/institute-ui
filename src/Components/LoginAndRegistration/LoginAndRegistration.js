import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import img from "../../images/image.jpg"
import InputFields from '../ReusableComponents/InputFields/InputFields';
import { regForm, loginForm } from "./LoginAndRegistrationModal";
import { onChangeValueBind, preparePayLoad } from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import { apiRequest } from '../../Service/CommonService';
import * as environment from "../../enironment/environment";

import './LoginAndRegistration.css';

const LoginAndRegistration = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("Login");
  const [formData, setFormData] = useState(loginForm);

  async function submitFormData() {
    const paylod = preparePayLoad(formData.fieldsArray);
    let url = environment.baseUrl + "auth/signin";
    if (page !== "Login") {
      url = environment.baseUrl + "institute/register"
    }
    const resp = await apiRequest(url, 'post', paylod,);
    if (resp.status === 200) {
      if (page === "Login") {
        environment.setToken("token", resp.data.token);
        navigate('/home');
      } else {
        setPage("Login")
      }
    }
    else {
      console.log(resp)
    }
  }

  function onChange(data) {
    onChangeValueBind(formData, data);
  }

  useEffect(() => {
    setFormData(loginForm);
    if (page !== "Login") {
      setFormData(regForm);
    }
  }, [page])

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
              <Col span={16}>
                <h4 className="card-title">Institute Management {page}</h4>
              </Col>
              <InputFields modaldata={formData} onChange={onChange} submitFormData={submitFormData} />
            </Row>
            <Row justify="center">
              <Col span={6}>
                Clik here<Button type="link" onClick={() => setPage(page === "Login" ? "Register" : "Login")} >
                  {page === "Login" ? "Register" : "Login"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );

}
export default LoginAndRegistration;
