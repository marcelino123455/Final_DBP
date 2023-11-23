import React from 'react';
import { Button, Form, Input, Row,message,Space  } from 'antd';
import axios from 'axios';
import Modal_signup from './Modal_signup';
import Footer from './footer';
import Logout from './Logout';
function Login() {
  const [form] = Form.useForm();

  const onFinish = async() => {
    // Accede al valor del campo 'username' usando getFieldsValue.
    const values = form.getFieldsValue();
    const usernameValue = values.username;
    
    const userpass = values.password;
    // const url_local ="http://localhost:8080/api/auth/signin" ;
    const url_deploy="https://dbpbackdeployment-production.up.railway.app/api/auth/signin" ;
    try {
        const response = await axios.post(url_deploy, {
          username: usernameValue, 
          password: userpass
        });
        localStorage.setItem('token', response.data.token);
        message.success('Sesión iniciada con éxito');
        console.log(response);
        
      } catch (error) {
        console.log("response");
        message.error('Ocurrión un error, quzá las credenciales')
        console.error('Error en la solicitud:', error);
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
        

        style={{//otro
          maxWidth: 600,
          border: '1px solid silver', 
          marginTop: 140,
          marginBottom: 100,

          background: 'silver', 
          padding: '20px', 
        }}
      >
        <Row justify="center">
        <h1>Bienvenido</h1> 
        </Row>
        <Form.Item
          label="Nombre de usuario"
          name="username"
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
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
        </Form.Item>
        
        <Form.Item label=" ">
          <Modal_signup></Modal_signup>
        </Form.Item>

      </Form>
       <Logout></Logout> 
    </Row>
    <Footer></Footer>

    </div>
    
  );
}

export default Login;
