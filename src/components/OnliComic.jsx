import React from 'react';
import { Comics_data }  from '../static/Comics_data'
import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ComentariosComponent from './ComentarioPorComic';
import Comentarios from './Comentarios';

function OnliComic() {
    const [data, setData] = useState(null);
    const { id  } = useParams();
    console.log("indice");

    console.log(id );
    //pRUEBA:

    // useEffect(() => {
    //     setData();
    //   }, []);

    // console.log(data)
    
    // console.log(data[0].imagenes_description[0])

    //Para la PETICION: /////////******************************** */
    useEffect(() => {
        const url_local =`http://localhost:8080/comics/${id}` ;
        const url_deploy=`https://dbpbackdeployment-production.up.railway.app/comics/${id}` ;
    const token = localStorage.getItem('token');
        
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
      console.log("aaa");
      console.log(data);
      console.log("aaa");


      return (
        <div style={{ marginTop: '100px' }}>
            {data ? (
                <div>
                    <Row justify="center">
                        <Col style={{ paddingRight: '20px' }}>
                            <Card style={{
                                width: 800,
                                marginBottom: '0px',
                            }} cover={
                                <img
                                    alt="example"
                                    src={data.imagenes_description[0]}  //nueva peticion
                                />
                            }>
                                <h1>{data.nombre}</h1>
                                <Card.Meta
                                    description={
                                        <div style={{ color: 'black' }}>
                                            <p>Precio: {data.precio}</p>
                                            <p>Likes: {data.likes}</p>
                                            <p>Dislikes: {data.dislikes}</p>
                                            {data.autor && <p>Editorial: {data.autor.editorial}</p>}
                                        </div>
                                    }
                                />
                            </Card>
                        </Col>
                    </Row>
                    <ComentariosComponent url={id}></ComentariosComponent>
                    <Comentarios ide={id}></Comentarios>
                </div>
            ) : (
                <p>Inicia Sesión para no perderte nada.</p>
            )}
        </div>
    );
    



    
}

export default OnliComic;
  
