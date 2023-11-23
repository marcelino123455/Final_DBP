import React, { useEffect, useState } from 'react';
import './cards-perfil.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function MangaPerfilCard({ nombre, url, descripcion, seasonButtonText, favoriteButtonText }) {
  return (
    <div>
      <div className="manga-card">
      <div className="manga-card-image">
        <img src={url} alt={`Imagen de la Card ${nombre}`} />
      </div>
      <div className="manga-card-descripcion">
        <h3>{nombre}</h3>
        <p>{descripcion}</p>
        {/* <button className="advanced-button">{seasonButtonText}</button>
        <button className="advanced-button">{favoriteButtonText}</button> */}
      </div>
    </div>
    </div>
  );
}

function MangaPerfilCards() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`https://dbpbackdeployment-production.up.railway.app/comics`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
  }, []); // Debes dejar el array de dependencias vacío para que se ejecute solo una vez al montar el componente.

  if (!data || data.length === 0) {
    return <p>Cargando...</p>; // Puedes mostrar un indicador de carga mientras los datos se están obteniendo.
  }
  // Tomar solo los primeros 6 comics
  const firstSixComics = data.slice(0, 6);

  return (
    <div  style={{paddingTop:100, paddingBottom:100}} className="manga-perfil-cards">
      {firstSixComics.map((comic, comicIndex) => (
        <MangaPerfilCard
          key={comicIndex}
          nombre={comic.nombre}
          url={comic.imagenes_description[0]} // Ajusta la propiedad de la imagen según tu estructura de datos
          descripcion={comic.descripcion}
          seasonButtonText={`VER TEMPORADA ${comicIndex + 1}`}
          favoriteButtonText="AÑADIR A FAVORITOS"
        />
      ))}
    </div>
  );
}

export default MangaPerfilCards;
