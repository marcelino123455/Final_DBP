import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DatePicker } from 'antd';
import { Avatar, Button,Card,List  } from 'antd';
import { Col, Divider, Row,message } from 'antd';
import { Link } from "react-router-dom";
import { LikeOutlined, DislikeOutlined, EditOutlined, DeleteOutlined  } from '@ant-design/icons';
import { Tooltip } from 'antd';
const { Meta } = Card;

function ComentariosComponent({url}) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const token = localStorage.getItem('token');
    const url_local = `http://localhost:8080/comentario/${url}`;
    const url_deploy = `https://dbpbackdeployment-production.up.railway.app/comentario/${url}`;

    axios.get(url_deploy, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setData(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  }, []);

  const darLike = (id)=>{
    const token = localStorage.getItem("token");
    const url_local_l = `http://localhost:8080/comentario/like_comentario/${id}`;
    const url_deploy_l= `https://dbpbackdeployment-production.up.railway.app/comentario/like_comentario/${id}`;
    axios.post(url_deploy_l, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        message.success("Like añadido")
        console.log(response);
      })
      .catch(error => {
        message.error("Algo malo sucedio, intente nuevamente")

        console.error('Error al realizar la solicitud:', error);
      });
  }

  const darDisLike = (id)=>{
    const token = localStorage.getItem("token");
    const url_local_l = `http://localhost:8080/comentario/dislike_comentario/${id}`;
    const url_deploy_l= `https://dbpbackdeployment-production.up.railway.app/comentario/dislike_comentario/${id}`;
    axios.post(url_deploy_l, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        message.success("Disike añadido")

        console.log(response);
      })
      .catch(error => {
        message.error("Algo malo sucedio, intente nuevamente")

        console.error('Error al realizar la solicitud:', error);
      });
  }

  const eliminarComentario = (id)=>{
    const token = localStorage.getItem("token");
    const url_local_l = `http://localhost:8080/comentario/dislike_comentario/${id}`;
    const url_deploy_l= `https://dbpbackdeployment-production.up.railway.app/comentario/delete/${id}`;
    axios.post(url_deploy_l, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        message.success("Comentario eliminado adecudamente")

        console.log(response);
      })
      .catch(error => {
        message.error("Algo malo sucedio intente nuevamente")

        console.error('Error al realizar la solicitud:', error);
      });
  }

  return (
    <Row justify="center">
      {data.map((Usuario, index) => (
            <div key={index}>
                <Col style={{ paddingRight: '20px'}}>
                
                  <Card
    style={{
      width: '90vw',
      marginBottom: '20px',
      backgroundColor:'#ccf0d7'
    }}
    // cover={
      
    //   <img
    //     alt="example"
    //     src={`https://picsum.photos/${index + 300}/300`}
    //   />
   
      
    // }
    actions={[
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
              {/* <DeleteOutlined  style={{marginRight:130, fontSize:20 }} key="setting" onClick={() => handleSettingClick(autor.id)}/> */}
              <div style={{marginRight:40, }}>
              <Tooltip title="Me gusta">
              <LikeOutlined onClick={() => darLike(Usuario.id)} style={{ fontSize: 25 }} key="like" />
            </Tooltip>
              <p>{Usuario.likes}</p>
              </div>
              <div style={{marginRight:40}}>
                <Tooltip title="No me gusta">
              <DislikeOutlined  onClick={() => darDisLike(Usuario.id)} style={{fontSize:25 }}key="dislike"  />
              </Tooltip>
              <p>{Usuario.dislikes}</p>
              </div>
              <div>
              <Tooltip title="Me parece ofensivo">
              <DeleteOutlined style={{fontSize:25 }}key="delete" onClick={() => eliminarComentario(Usuario.id)} />
              </Tooltip>
              </div>
              
              
              
              
            </div>,
    ]}
    
  ><Link to={`comics/${Usuario.id}`} style={{ textDecoration: 'none' }}>
    <Meta
      avatar={<Avatar src={`https://xsgames.co/randomusers/assets/avatars/pixel/${index}.jpg`} size={64}  />}
      title={Usuario.nombre}
      description={
        <div>
          <p>Nombre: {Usuario.name}</p>
          <p>Comentario: {Usuario.contenido}</p>
        </div>
      }
    /></Link>
    
  </Card></Col>
               
            </div>

            
          ))}
    </Row>
  );
}

export default ComentariosComponent;
