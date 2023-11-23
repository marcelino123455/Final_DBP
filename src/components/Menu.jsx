import { Link } from "react-router-dom";
import React from 'react';


function Menu() {
  return (
    <div>
      <h1>Esta es la página de inicio</h1>
      <Link to="autores">Autores</Link>
      <Link to="autores/comics/1">Autores Comic</Link>
    </div>
  );
  
}

export default Menu;