import React from 'react';
import { Comics_data }  from '../static/Comics_data'
import { Card } from 'antd';
import { Col, Divider, Row } from 'antd';
import { useState, useEffect } from 'react';
import { useParams,Link } from 'react-router-dom';
import axios from 'axios';


function ListaComic() {
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
    function getComics(comicsResponse) {
        const comicsList = comicsResponse.flat().filter(item => typeof item === 'object');
      
        const normalizedComics = comicsList.map(comic => {
          if (comic.autor && typeof comic.autor === 'object') {
            const authorId = comic.autor.id;
            delete comic.autor; // Elimina la información anidada del autor
            comic.authorId = authorId; // Agrega el ID del autor directamente al cómic
          }
      
          return comic;
        });
      
        return normalizedComics;
      }
    useEffect(() => {
        const url_local =`http://localhost:8080/comics` ;
        const url_deploy=`https://dbpbackdeployment-production.up.railway.app/comics` ;
    const token = localStorage.getItem('token');
        
        axios.get(url_deploy,{
            headers: {
              Authorization: `Bearer ${token}` 
            }
          })
          .then(response => {
            const normalizedData = getComics(response.data);
            setData(normalizedData);
            console.log(normalizedData)
          })
          .catch(error => {
            console.error('Error al realizar la solicitud:', error);
          });
      }, []);
      console.log("aaa");
      console.log(data);
      console.log("aaa");


      return (
        <div style={{ marginTop: '130px' }}>
          {data ? (
            <div>
              <Row justify="center">
                {data
                  .filter((comic) => typeof comic === 'object') // Filtra solo objetos
                  .map((comic, index) => (
                    <div key={index}>
                      <Col style={{ paddingRight: '20px' }}>
                      <Link to={`comics/${comic.id}`} style={{ textDecoration: 'none' }}>
                        <Card
                          style={{
                            width: 300,
                            marginBottom: '0px',
                          }}
                          cover={
                            <img
                              alt="example"
                              src={comic.imagenes_description[0]}
                            />
                          }
                        >
                          <h1>{comic.nombre}</h1>
                        </Card>
                        </Link>
                      </Col>
                    </div>
                  ))}
              </Row>
            </div>
          ) : (
            <p>Inicia Sesión para no perderte de nada.</p>
          )}
        </div>
      );
      


    
}

export default ListaComic;
  
