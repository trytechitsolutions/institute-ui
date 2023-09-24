import React, { useEffect, useState, useRef } from 'react';
import { Col, Row, Button, Card } from 'antd';
import { useDispatch } from 'react-redux';
import InputFields from '../ReusableComponents/InputFields/InputFields';
import { regForm, loginForm } from "./LoginAndRegistrationModal";
import onChangeValueBind from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import preparePayLoad from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import getErrorMsg from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import upDateForm from '../ReusableComponents/CoomonFunctions/CommonFunctions';
import loginRequest from '../../Redux/Actions/LoginAction';
import { GetStoreData } from '../ReusableComponents/ReduxActions/FecthState';
import { ERROR, LOGIN_URL, POST, REGISTER_SUCCESS_MSG, REGISTER_URL, SUCCESS } from '../../enironment/environment';
import AlertMessage from '../ReusableComponents/AlertMessages/AlertMessages';
import apiRequest from '../../Service/CommonService';

import './LoginAndRegistration.css';

const LoginAndRegistration = () => {
  const ChildRef = useRef();
  const dispatch = useDispatch()
  const loginReducer = GetStoreData('LoginReducer');
  const [page, setPage] = useState("Login");
  const [formData, setFormData] = useState(loginForm);
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState();

  function submitFormData() {
    const payload = preparePayLoad(formData.fieldsArray);
    if (page === "Login") {
      const req = {
        method: POST,
        url: LOGIN_URL,
        data: payload
      }
      dispatch(loginRequest(req));
    } else {
      register(payload);
    }
  }

  async function register(payload) {
    formData.buttonSecction.buttons[0]['loading'] = true;
    setFormData({ ...formData })
    try {
      const req = {
        method: POST,
        url: REGISTER_URL,
        data: payload
      }
      await apiRequest(req);
      formData.buttonSecction.buttons[0]['loading'] = false;
      setFormData({ ...formData })
      showAlertMsg(SUCCESS, REGISTER_SUCCESS_MSG, closeAlert);
    } catch (err) {
      formData.buttonSecction.buttons[0]['loading'] = false;
      setFormData({ ...formData })
      showAlertMsg(ERROR, getErrorMsg(err), closeAlert);
    }

  }

  function onChange(data) {
    onChangeValueBind(formData, data);
  }

  function showAlertMsg(type, message, closeAlert) {
    let data = {
      type,
      message,
      closeAlert: closeAlert
    }
    setAlertData(data);
    setShowAlert(true)
  }

  function closeAlert() {
    setShowAlert(false);
  }
  useEffect(() => {
    setFormData(loginForm);
    if (page !== "Login") {
      setFormData(regForm);
    }
    upDateForm(true, page !== "Login" ? regForm : loginForm,)
    ChildRef.current.reSetForm();
    setShowAlert(false);
  }, [page]);



  useEffect(() => {
    if (loginReducer.loginData && loginReducer.loginData.exp) {
      window.location.href = '/home';
    }
    if (loginReducer.error) {
      showAlertMsg(ERROR, loginReducer.error, closeAlert);
    }
  }, [loginReducer]);


  return (
    <Row justify="center">
      <Col xs={24} sm={16} md={12} lg={13} style={{ marginTop: "70px" }}>
        <Card>
          <Row justify="center" style={{ marginTop: "-50px" }}>
            <Col xs={24} sm={16} md={12} lg={16} >
              <h4 className="form-title">Institute Management {page}</h4>
            </Col>
            <InputFields ref={ChildRef} modaldata={formData} onChange={onChange} submitFormData={submitFormData} />
          </Row>
          <Row justify="center">
            <Col span={8}>
              Clik here<Button type="link" onClick={() => setPage(page === "Login" ? "Register" : "Login")} >
                {page === "Login" ? "Register" : "Login"}
              </Button>
            </Col>
          </Row>
          {
            showAlert &&
            <AlertMessage data={alertData} />
          }
        </Card>
      </Col>
    </Row>
  );

}
export default LoginAndRegistration;
