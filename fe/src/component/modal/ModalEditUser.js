import { Button, Col, Input, Modal, Row } from "antd";
import { Typography } from 'antd';
import { editUser } from "../../api/api";
import { Formik, Form, Field, ErrorMessage } from 'formik';
const { Text } = Typography;
export const ModalEditUser = ({ show, close, rawData, editSuccess }) => {

    const initialValues = {
        id: rawData?.id,
        email: rawData?.email,
        password: rawData?.password,
        firstName: rawData?.first_name,
        lastName: rawData?.last_name,
        country: rawData?.country,
        phoneNumber: rawData?.phone_number,
        position: rawData?.position
    }

    const save = async (e) => {
        let result = await editUser(e)
        if (result) {
            editSuccess()
        }
    }
    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting, values, onChange, setFieldValue }) => (
                <Modal
                    open={show}
                    title="Create user"
                    keyboard={false}
                    closable={false}
                    footer={[
                        <Button onClick={e => save(values)} type="primary">
                            Save
                        </Button>,
                        <Button onClick={close} type="primary">
                            Cancel
                        </Button>
                    ]}
                    width={650}
                >

                    <Form>
                        <Row>
                            <Col span={7} ><Text strong> Email:</Text></Col>
                            <Col span={17} >
                                <Field
                                    value={values?.email}
                                    onChange={e => setFieldValue('email', e.currentTarget.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> Passowrd:</Text></Col>
                            <Col span={17} >
                                <Field
                                    value={values?.password}
                                    onChange={e => setFieldValue('password', e.currentTarget.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> First name:</Text></Col>
                            <Col span={17} >
                                <Field
                                    value={values?.firstName}
                                    onChange={e => setFieldValue('firstName', e.currentTarget.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> Last name:</Text></Col>
                            <Col span={17} ><Field
                                value={values?.lastName}
                                onChange={e => setFieldValue('lastName', e.currentTarget.value)}
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> Country:</Text></Col>
                            <Col span={17} ><Field
                                value={values?.country}
                                onChange={e => setFieldValue('country', e.currentTarget.value)}
                            /></Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> Phone number:</Text></Col>
                            <Col span={17} ><Field
                                value={values?.phoneNumber}
                                onChange={e => setFieldValue('phoneNumber', e.currentTarget.value)}
                            /></Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> Position:</Text></Col>
                            <Col span={17} ><Field
                                value={values?.position}
                                onChange={e => setFieldValue('position', e.currentTarget.value)}
                            /></Col>
                        </Row>
                    </Form>
                </Modal>
            )}
        </Formik>
    )
}