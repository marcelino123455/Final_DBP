import React,{ useState, useEffect } from 'react';
import { Button, Form, Input, Row,message,Space  } from 'antd';
import axios from 'axios';
const { TextArea } = Input; // Importa el componente TextArea desde Ant Design

function Comentarios({ide}){
  //En el payload solo hay información de la expiración y el nombre
  const obtenerInformacionUsuarioDesdeToken = (token) => {
    try {
      const payload = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payload));
  
      return decodedPayload;
    } catch (error) {
      console.error('Error al obtener información desde el token:', error);
      return null;
    }
  };
  const token = localStorage.getItem("token");
  console.log("Hola")
  console.log(token)

  
  
  const [form] = Form.useForm();
  

  const onFinish = async () => {
    const nombreUsuario = obtenerInformacionUsuarioDesdeToken(token);
  console.log(nombreUsuario)

    const url_deploy_n = `https://dbpbackdeployment-production.up.railway.app/user/id/${nombreUsuario.sub}`;
  console.log(url_deploy_n)


    try {
      const usuarioResponse = await axios.get(url_deploy_n, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const usuario = usuarioResponse.data;
      console.log('Información del usuario:', usuario);

      // Realizar la solicitud POST después de obtener la información del usuario
      const url_local = "https://dbpbackdeployment-production.up.railway.app/comentario";
      const response = await axios.post(url_local, {
        contenido: form.getFieldValue('Contenido'),
        likes: 0,
        dislikes: 0,
        comic: {
          id: ide // Reemplaza con el ID correcto
        },
        user: {
          id: usuario.id // Usando el ID del usuario obtenido del token
        }
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      message.success('Comentario publicado con éxito');
      console.log(response);

    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      message.error('Ocurrió un error, inténtelo más tarde');
    }
  };


    return(
        <div>
          <Row justify="center" style={{marginTop:200}}>
            
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
        
          label="Vamos únete"
          name="Contenido"
          rules={[
            {
              required: true,
            },
          ]}
        >
           <TextArea rows={4} cols={900} />
        </Form.Item>

        

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Enviar comentario
          </Button>
        </Form.Item>
      </Form>
    </Row>
        </div>
    );
}

export default Comentarios;