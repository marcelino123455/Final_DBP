import React, { useState } from 'react';
import { DatePicker } from 'antd';
import { Avatar, Button,Card,Modal ,Form,Input} from 'antd';
import { Col, Divider, Row } from 'antd';
const ModalEditUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [form] = Form.useForm();
  return (
    <>
      
            <Modal title="Coloque la nueva información" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form form ={form}>
                <Form.Item name="nombre" label="Nombre" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="fecha" label="Fecha" rules={[{ required: true }]}>
                  < DatePicker />
                </Form.Item>
                <Form.Item name="editorial" label="Editorial" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>

              </Form>
            </Modal>
    </>
  );
};
export default ModalEditUser;
