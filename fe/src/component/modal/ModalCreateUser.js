import { Button, Col, Input, Modal, Row } from "antd";
import { Typography } from 'antd';
import { useEffect, useState } from "react";
import { createUser } from "../../api/api";
import { Formik } from "formik";
const { Text } = Typography;
export const ModalCreateUser = ({ show, close, rawData }) => {
    const [data, setData] = useState()

    const initialValues = {
        email: rawData.email,
        firstName: rawData.firstName,
        lastName: rawData.lastName,
        country: rawData.country,
        phoneNumber: rawData.phoneNumber,
        position: rawData.position,
    }
    useEffect(() => {
        // setData(rawData)

    }, [rawData])
    const allow = async () => {
        let result = await createUser({
            data
        })
        if (result) {
            close()
        }
    }
    return (
        <Modal
            open={show}
            title="Warning action!"
            keyboard={false}
            closable={false}
            footer={[
                <Button onClick={allow} type="primary">
                    Allow
                </Button>,
                <Button onClick={close} type="primary">
                    Cancel
                </Button>
            ]}
            width={650}
        >
            <Formik
                enableReinitialize
                initialValues={initialValues}
                // validationSchema={validationSchema}
                onSubmit={() => { }}
            >
                {({
                    errors, values, touched, handleChange, dirty, setFieldValue, handleSubmit
                }) => { 





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
                }}
            </Formik>
        </Modal>
    )
}