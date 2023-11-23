// Importa las bibliotecas necesarias y otros componentes según sea necesario
import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import MangaInfo from './mangaInfo';
import MangaPerfilCards from './mangaPerfil';
import { cardData } from './cardData'; 

function MangaPage() {
  const { id } = useParams();

  const index = parseInt(id, 10);

  if (isNaN(index) || index < 0 || index >= cardData.length) {
    return <p>Manga no encontrado</p>;
  }

  const manga = cardData[index];

  return (
    <div>
      <Header />
      <MangaInfo
        title={manga.name}
        imageURL={manga.imageUrl}
        genres={manga.genres}  
        author={manga.author} 
        synopsis={manga.description}
        rating={manga.rating} 
        votes={manga.votes} 
      />
      <MangaPerfilCards
        nrotemporadas={manga.seasons}
        description="Descripción de la temporada"
        seasonButtonText=">"
        favoriteButtonText="Pronto"
      />
      <Footer />
    </div>
  );
}

export default MangaPage;