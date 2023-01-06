import { Button, Col, Input, Modal, Row } from "antd";
import { Typography } from 'antd';
import { useEffect, useState } from "react";
const { Text } = Typography;
export const ModalEditUser = ({ show, close, rawData }) => {
    const [data, setData] = useState()
    useEffect(() => {
        setData(rawData)
    }, [rawData])
    return (
        <Modal
            open={show}
            title="Warning action!"
            keyboard={false}
            closable={false}
            footer={[
                <Button onClick={close} type="primary">
                    Allow
                </Button>,
                <Button onClick={close} type="primary">
                    Cancel
                </Button>
            ]}
            width={650}
        >
            <Row>
                <Col span={7} ><Text strong> Email: &nbsp;</Text></Col>
                <Col span={17} ><Input value={data?.email}></Input></Col>
            </Row>
            <Row>
                <Col span={7} ><Text strong> First name: &nbsp;</Text></Col>
                <Col span={17} ><Input value={data?.first_name}></Input></Col>
            </Row>
            <Row>
                <Col span={7} ><Text strong> Last name: &nbsp;</Text></Col>
                <Col span={17} ><Input value={data?.last_name}></Input></Col>
            </Row>
            <Row>
                <Col span={7} ><Text strong> Country: &nbsp;</Text></Col>
                <Col span={17} ><Input value={data?.country}></Input></Col>
            </Row>
            <Row>
                <Col span={7} ><Text strong> Phone number: &nbsp;</Text></Col>
                <Col span={17} ><Input value={data?.phone_number}></Input></Col>
            </Row>
            <Row>
                <Col span={7} ><Text strong> Position: &nbsp;</Text></Col>
                <Col span={17} ><Input value={data?.position}></Input></Col>
            </Row>
        </Modal>
    )
}