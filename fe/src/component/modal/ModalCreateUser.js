import { Button, Col, Modal, Row, Typography } from "antd";
import { createUser } from "../../api/api";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { Text } = Typography;

export const ModalCreateUser = ({ show, close, addSuccess }) => {
    const initialValues = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        country: '',
        phoneNumber: '',
        position: ''
    }
    const save = async (e, resetForm) => {
        let result = await createUser(e)
        if (result.status === 'OK') {
            resetForm()
            addSuccess('create', result.data.email)
        } else {
            toast("Error");
        }
    }

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                    .email()
                    .required("Email not blank"),
                password: Yup.string()
                    .required("Password not blank"),
                firstName: Yup.string()
                    .required("First name not blank")
            })
            }
        >
            {({ values, setFieldValue, errors, touched, handleSubmit, resetForm }) => (
                <Modal
                    open={show}
                    title="Create user"
                    keyboard={false}
                    closable={false}
                    footer={[
                        <Button onClick={e => {
                            handleSubmit()
                            if (!_.isEmpty(errors)) {
                                toast("Validation error");
                                return;
                            }
                            save(values, resetForm)
                        }} type="primary">
                            Save
                        </Button>,
                        <Button
                            onClick={() => {
                                resetForm()
                                close()
                            }}
                            type="primary">
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
                                {errors.email && touched.email && (
                                    <div className="input-feedback" style={{ color: 'red' }}>{errors.email}</div>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> Passowrd:</Text></Col>
                            <Col span={17} >
                                <Field
                                    value={values?.password}
                                    onChange={e => setFieldValue('password', e.currentTarget.value)}
                                />
                                {errors.password && touched.password && (
                                    <div className="input-feedback">{errors.password}</div>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col span={7} ><Text strong> First name:</Text></Col>
                            <Col span={17} >
                                <Field
                                    value={values?.firstName}
                                    onChange={e => setFieldValue('firstName', e.currentTarget.value)}
                                />
                                {errors.firstName && touched.firstName && (
                                    <div className="input-feedback">{errors.firstName}</div>
                                )}
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