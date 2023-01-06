import { Button, Modal } from "antd";
import { Typography } from 'antd';
const { Text } = Typography;
export const ModalDeleteUser = ({ show, close, data }) => {
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
            <Text strong> Do you ensure to delete user: &nbsp;<span style={{ color: 'blue' }}>{data?.email}</span></Text>
        </Modal>
    )
}