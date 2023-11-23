import React from 'react';
import { Comics_data }  from '../static/Comics_data'
import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ComicAutor() {
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
        const url_local =`http://localhost:8080/autor/${id}` ;
        const url_deploy=`https://dbpbackdeployment-production.up.railway.app/autor/${id}` ;
    const token = localStorage.getItem('token');
        
        axios.get(url_deploy,{
            headers: {
              Authorization: `Bearer ${token}` 
            }
          })
          .then(response => {
            setData(response.data.comics);
            console.log(response)
          })
          .catch(error => {
            console.error('Error al realizar la solicitud:', error);
          });
      }, []);
      console.log("aaa");
      console.log(data);
      console.log("aaa");


    return(
        <div style={{marginTop:'100px'}}>
            
            {data ?(
                <div>
                    <Row justify="center">
                        {data.map((comic,index)=>(
                            <div key={index}>
                                
                            <Col style={{ paddingRight: '20px'}}>
                                <Card style={{
                                    width: 300,
                                    marginBottom: '0px',
                                    }}  cover={
                                        <img src= {comic.imagenes_description[0]} />
                                    // <img

                                    //     alt="example"
                                    //     src= {"/imagenes/"+comic.imagenes_description[0]+".jpg"}  //nueva peticion

                                    // />
                                    }>
                                        <h1>{comic.nombre}</h1>

                                </Card>
                            </Col>
                            </div>
                        ))}

                    </Row>
                </div>

            ):(          <p>Inicia Sesión para no perderte de nada.</p>
            )}
        </div>
    )



    
}

export default ComicAutor;
  
