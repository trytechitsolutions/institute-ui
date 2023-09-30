import React, { useRef } from "react";
import { Col, Row, Button } from 'antd';

import InputFields from "../InputFields/InputFields";
import { onChangeValueBind } from "../CoomonFunctions/CommonFunctions";

function AddPreference(props) {
    const ChildRef = useRef();
    const { defaultFields, buttonname, addClass, resetFields } = props;

    function onChange(data) {
        onChangeValueBind(defaultFields, data);
    }

    function addField() {
        ChildRef.current.handlButton("submit");
    }

    function submitFormData() {
        addClass(defaultFields);
    }
    
    function resetForm() {
        resetFields();
        ChildRef.current.bindValues();
    }

    return (
        <Row>
            <React.Fragment>
                <Col xs={24} sm={24} md={16} lg={16}>
                    <InputFields ref={ChildRef} modaldata={defaultFields} onChange={onChange} submitFormData={submitFormData} />
                </Col>
                <Col xs={24} sm={24} md={2} lg={1} style={{ marginTop: "20px", padding: "5px" }}>
                    <Button type="primary" onClick={resetForm}>Clear </Button>
                </Col>
                <Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: "15px", padding: "10px" }}>
                    <Button type="primary" onClick={addField}>{buttonname} </Button>
                </Col>
            </React.Fragment>

        </Row>
    )
}
export default AddPreference;