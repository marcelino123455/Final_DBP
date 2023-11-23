import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker, message } from 'antd';
import { Avatar, Button,Card,Modal ,Form,Input} from 'antd';
import { Col, Divider, Row } from 'antd';
import { Link } from "react-router-dom";
import ModalEditUser from './ModalEditUser';
import { EditOutlined, EllipsisOutlined, SettingOutlined,DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;


const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const Img = ''

function Autores() {
  const [data, setData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSettingClick = (autorId) => {
    console.log(`Configuración desvivir autrosh con ID ${autorId}`);
    const token = localStorage.getItem('token');
    const urlDelete=`https://dbpbackdeployment-production.up.railway.app/autor/${autorId}` ;

    console.log(token);
    axios.delete(urlDelete,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
      .then(response => {
        console.log(response)
        message.info("Autor destruido adecuadamente")
      })
      .catch(error => {
        message.error("Recarga la página porfavor")
        console.error('Error al realizar la solicitud:', error);
      });

  };
  const handleEditClick = (autorId,values) => {
    console.log(`Edición clic en autor con ID ${autorId}`);
    const token = localStorage.getItem('token');
    const urlEdit=`https://dbpbackdeployment-production.up.railway.app/autor/cambiar_autor/${autorId}` ;
    console.log(values)
    console.log(token);
    axios.put(urlEdit, {
        nombre: values.nombre,
        fecha: values.fecha,
        editorial: values.editorial,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(()=>
    message.success("Cambios realziados con éxito")

    ).catch((error)=>
    message.error("Error")

    );
  }

  const postAutor = (values) => {
    const token = localStorage.getItem('token');
    const urlEdit=`https://dbpbackdeployment-production.up.railway.app/autor` ;

    console.log(token);
    axios.post(urlEdit, values, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(()=>
    message.success("Cambios realziados con éxito")

    ).catch((error)=>
    message.error("Error")

    );
  }
  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log(token);
    // const url_local ="http://localhost:8080/autor" ;
    const url_deploy="https://dbpbackdeployment-production.up.railway.app/autor" ;

    axios.get(url_deploy,{
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
      .then(response => {
        setData(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }, []);
  const showModal = (id) => {
    setId(id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [mi_V, setmiV] = useState(false);
  const mi_VifFunciont = () => {
    setmiV(true)
  };
  const [id_autor, setId] = useState(null);
  const [form] = Form.useForm();
  const [form2] = Form.useForm();

  return (
    <div className="Autores" style={{marginTop:'120px'}}>
      <Modal title="Coloque la nueva información" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form form ={form}
                onFinish={(values) => handleEditClick(id_autor, values)}
              >
                
                <Form.Item name="nombre" label="Nombre" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="fecha" label="Fecha" rules={[{ required: true }]}>
                  < DatePicker />
                </Form.Item>
                <Form.Item name="editorial" label="Editorial" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item label=" ">
                <Button type="primary" htmlType="submit">
                  Guardar cambios
                </Button>
                </Form.Item>

              </Form>
        </Modal>
      {data ? (
        <div>
            <Row justify="center">
                
          {data.map((autor, index) => (
            <div key={index}>
                <Col style={{ paddingRight: '20px'}}>
                
                  <Card
    style={{
      width: 300,
      marginBottom: '20px'
    }}
    cover={
      <Link to={`comics/${autor.id}`}>
      <img
        alt="example"
        src={`https://picsum.photos/${index%9 + 300}/300`}
      />
    </Link>
      
    }
    actions={[
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
              <DeleteOutlined  style={{marginRight:130, fontSize:20 }} key="setting" onClick={() => handleSettingClick(autor.id)}/>
              <EditOutlined style={{fontSize:20 }}key="edit"  onClick={() => showModal(autor.id)}/>
              
              
            </div>,
    ]}
    
  ><Link to={`comics/${autor.id}`} style={{ textDecoration: 'none' }}>
    <Meta
      avatar={<Avatar src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`} size={64}  />}
      title={autor.nombre}
      description={
        <div>
          <p>Editorial: {autor.editorial}</p>
          <p>Fecha: {autor.fecha}</p>
        </div>
      }
    /></Link>
    
  </Card></Col>
               
            </div>

            
          ))}
          </Row>
        </div>
      ) : (
          <p>Inicia Sesión para no perderte de nada.</p>

      )}
      {/* <DatePicker /> */}
              <Col  justify='center' style={{width:'50vw', backgroundColor:'#a2f5bc', margin:'auto', padding:20, marginBottom:30, borderRadius:20, borderTop:'4px solid #32b9d1',borderRight:'4px solid #32b9d1'}} >
              <h1 style={{fontSize:20, textAlign:'center'}}>Crear nuevo autor</h1>
              <Form form ={form2} 
                //  onFinish={(values) => handleEditClick(id_autor, values)}
              >
                
                <Form.Item name="nombre" label="Nombre" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="editorial" label="Editorial" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="fecha" label="Fecha" rules={[{ required: true }]}>
                  <DatePicker />
                </Form.Item>
                <Button style={{marginLeft:'230px'}} type="primary" onClick={() => postAutor(form2.getFieldsValue())}>
                Guardar nuevo autor
              </Button>

              </Form>
              </Col>

    </div>
    
  );
}

export default Autores;
