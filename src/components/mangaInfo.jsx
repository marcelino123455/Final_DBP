import React, { useState, useEffect } from 'react';
import "./cards-perfil.css"

function MangaInfo() {

  const [mangaData, setMangaData] = useState(null);

  useEffect(() => {
    
    fetch('https://dbpproyecto-production.up.railway.app/api/manga') 
      .then(response => response.json())
      .then(data => setMangaData(data))
      .catch(error => console.error('Error fetching manga data:', error));
  }, []); 

  if (!mangaData) {
    return <p>Cargando...</p>;
  }

  const { nombre, url, generos, autor, descripcion, dislikes, likes } = mangaData;
  return (
    <div className="manga-background" style={{marginTop:300}}>
      <h1 className="manga-nombre">{nombre}</h1>
      <div className="manga-details">
        <div className="manga-cover">
          <img src={url} alt={`Portada de ${nombre}`} />
        </div>
        <div className="manga-info">
          <div className="genre-buttons">
            {generos.map((genre, index) => (
              <button key={index} className="advanced-button">{genre}</button>
            ))}
          </div>
          <div className="manga-autor">
            <h1>Autor:</h1> <span>{autor}</span>
          </div>
          <p className="manga-descripcion">{descripcion}</p>
          <div className="dislikes-container">
            <div className="dislikes-summary">
              <p className="average-dislikes">{dislikes}</p>
            </div>
            <div className="dislikes">
              {Array.from({ length: 5 }, (_, index) => (
                <input
                  key={index}
                  type="radio"
                  id={`star${5 - index}`}
                  name="dislikes"
                  value={5 - index}
                />
              ))}
              {Array.from({ length: 5 }, (_, index) => (
                <label key={index} htmlFor={`star${5 - index}`}></label>
              ))}
              <p className="total-likes">{likes} votos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default MangaInfo;