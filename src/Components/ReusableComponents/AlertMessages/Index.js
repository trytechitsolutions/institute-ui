import { Alert, Row, Col } from 'antd';
const AlertMessage = (props) => {
    const { type, message, closeAlert } = props.data;
    function colse() {
        closeAlert();
    }

    setTimeout(() => {
        closeAlert(); 
    }, 10000);

    return (
        <Row justify="center">
            <Col span={16}>
                <Alert message={message} type={type} onClose={colse} showIcon closable  style={{fontFamily:"ITALIC SERIF",fontWeight:"bold",}}/>
            </Col>
        </Row>
    )
}
export default AlertMessage;