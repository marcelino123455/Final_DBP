import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Col, Divider, Row } from 'antd';

import Signup from './Signup';
function Modal_signup() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
        <div>
          <span style={{display:'block', marginTop:'30px', marginBottom:'40px'}} >¿Aún Eres nuevo?</span>

            <Button type="primary" onClick={showModal}>
            Sign up
        </Button>
        <Modal title={<div style={{ textAlign: 'center', marginTop:'40px', marginBottom:'40px' }}>Sign up</div>} open={isModalOpen} onOk={handleOk} okButtonProps={{ style: { display: 'none' } }} onCancel={handleCancel}>

            <Signup></Signup>
        </Modal>
        </div>
  );
};
export default Modal_signup;
