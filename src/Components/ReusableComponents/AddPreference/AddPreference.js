import React, { useState } from "react";
import { Card, Col, Row, Button } from 'antd';
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

import InputFields from "../InputFields/InputFields";
import { onChangePreference } from "../CoomonFunctions/CommonFunctions";

function AddPreference(props) {
    const { defaultFields } = props;
    const [defaultFieldsState, setDefaultFieldsSata] = useState([defaultFields]);

    function onChange(data, i) {
        onChangePreference(defaultFieldsState,data,i);
    }

    function addField() {
        defaultFieldsState.push(defaultFields);
        setDefaultFieldsSata([...defaultFieldsState]);
    }

    function removeField(i) {
        defaultFieldsState.splice(i, 1);
        setDefaultFieldsSata([...defaultFieldsState])
    }

    return (
        <Card style={{ height: "100vh" }}>
            <Row>
                {defaultFieldsState.map((ele, i) => (
                    <React.Fragment key={i}>
                        <Col xs={24} sm={24} md={16} lg={16}>
                            <InputFields modaldata={{ fieldsArray: ele }} onChange={onChange} index={i} />

                        </Col>
                        <Col xs={24} sm={24} md={4} lg={4} style={{ marginTop: "20px" }}>
                            <Button type="defualt" icon={<PlusCircleOutlined />} onClick={addField} />
                            {defaultFieldsState.length > 1 && <Button type="defualt" icon={<MinusCircleOutlined />} onClick={() => removeField(i)} />}
                        </Col>
                    </React.Fragment>
                ))}
            </Row>
        </Card>
    )
}
export default AddPreference;