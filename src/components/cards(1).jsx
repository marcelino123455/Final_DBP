import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cardData } from './cardData';
import './buscador.css'
function TicketCards() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleYearChange = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const calculateScore = (card) => {
    let score = 0;

    if (selectedGenres.length === 0 || selectedGenres.every((g) => card.genres.includes(g))) {
      score += 1;
    }

    if (selectedYears.length === 0 || selectedYears.includes(card.year)) {
      score += 1;
    }

    if (card.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      score += 1;
    }

    return score;
  };

  const filteredCards = cardData
    .map((card) => ({ ...card, score: calculateScore(card) }))
    .filter((card) => card.score > 0)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="ticket-cards-container">

      {/* Componente de búsqueda */}
      <div className="search-container">
        <label htmlFor="search">Buscar:</label>
        <input
          type="text"
          id="search"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filtros de género */}
      <div className="filter-container">
        <span>Géneros:</span>
        <div className="filter-options">
          {['Action', 'Adventure', 'Horror'].map((genre) => (
            <button
              key={genre}
              className={`filter-button ${selectedGenres.includes(genre) ? 'selected' : ''}`}
              onClick={() => handleGenreChange(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Filtros de año */}
      <div className="filter-container">
        <span>Año:</span>
        <div className="filter-options">
          {[2022, 2021, 2020].map((year) => (
            <button
              key={year}
              className={`filter-button ${selectedYears.includes(year) ? 'selected' : ''}`}
              onClick={() => handleYearChange(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      {filteredCards.length > 0 ? (
        <ul className="list-cards">
          {filteredCards.map((card, index) => (
            <li className="booking-card" key={index} style={{ backgroundImage: `url(${card.imageUrl})` }}>
              <div className="book-container">
                <div className="content">
                  <Link to={`/otro/comics/${index}`} className="btn">
                    LEER
                  </Link>
                </div>
              </div>
              <div className="informations-container">
                <h2 className="title">{card.name}</h2>
                <div className="more-information">
                  <div className="icons-list">
                    <div className="box">
                      <i className="bx bxs-bookmark-plus"></i>
                    </div>
                    <div className="box">
                      <i className="bx bx-play"></i>
                    </div>
                    <div className="box">
                      <i className="bx bx-plus"></i>
                    </div>
                  </div>
                  <div className='card-text-container'> 
                    <p className="disclaimer">{card.description}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
}

export default TicketCards;
