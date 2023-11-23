import React from 'react';
import { Button, Form, Input, Row,message  } from 'antd';
import axios from 'axios';
import Modal_signup from './Modal_signup';
import Footer from './footer';
function Logout() {
  const [form] = Form.useForm();

  const onFinish = async() => {
    // Accede al valor del campo 'username' usando getFieldsValue.
    const is_loged = '';
    if (localStorage.getItem('token') != ''){
      localStorage.setItem('token', 'deslogeado');
      message.info('Sesión cerrada correctamente')

    } else{
      localStorage.setItem('token', 'sincuenta');
      message.info('Ni una cuenta que cerrar')


    }
    

  };

  return (
    <div>
      <Row justify="center">
      
      <Form
      
        form={form} // Pasa la instancia del formulario a tu Form
        name="wrap"
        onFinish={onFinish}
        labelCol={{
          flex: '110px',
        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        

        style={{
          maxWidth: 600,
          borderRadius: '50%', // Agrega un borde de 1px sólido plateado
          marginTop: 180,
          marginBottom: 100,
          marginLeft:400,

          background: 'rgba(239, 104, 75, 0.8)', // Agrega un fondo plateado
          padding: '20px', // Añade un relleno para mejorar el aspecto
        }}
      >
        <Row justify="center">
        </Row>
        

        

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Log out
          </Button>
        </Form.Item>
        

      </Form>
        
    </Row>
    </div>
    
  );
}

export default Logout;
