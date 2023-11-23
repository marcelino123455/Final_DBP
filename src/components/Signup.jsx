import React from 'react';
import { Button, Form, Input, Row,message  } from 'antd';

import axios from 'axios';

function Signup() {
  const [form] = Form.useForm();

  const onFinish = async() => {
    // Accede al valor del campo 'username' usando getFieldsValue.
    const values = form.getFieldsValue();
    const username = values.Nombre;
    const useremail = values.Email;
    const Dni = values.Dni;
    const userpass = values.Contraseña;


    try {
        const url_local ="http://localhost:8080/api/auth/signup" ;
        const url_deploy="https://dbpbackdeployment-production.up.railway.app/api/auth/signup" ;
        const response = await axios.post(url_deploy, {
            nombre: username, 
            email:useremail,
            dni:Dni,
            contrasenia: userpass,
            puntos:0,
            isAdmin:"false",

        });
        message.success('Te uniste con éxito');
      
        console.log("Bien hecho ya tenemos tus datos");
        
      } catch (error) {

        console.error('Error en la solicitud:', error);
      }
  };

  return (
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
        }}
        
      >
        <Form.Item
          label="Nombre de usuario"
          name="Nombre"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Dni"
          name="Dni"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="Contraseña"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Quiero unirme
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}

export default Signup;
