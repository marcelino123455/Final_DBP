import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,  Link } from 'react-router-dom';
import Rutas from './components/Rutas';
import Inicio from './components/Inicio'
import Menu from './components/Menu';
import ComicAutor from './components/ComicsAutor';
import Header from './components/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  
  <Header></Header> 

  {/* Queria que header lo llame varias veces pero se concatena las rutas */}
    {/* <Inicio></Inicio> */}

    <Rutas></Rutas> 
    {/* Tengo que usar las rutas si no no se ubican  */}



    {/* <Routes>
        <Route path="/autores" element={ <Autor /> } />
        <Route path="/autores/comics/:id" element={ <ComicsAutor/> } />
        <Route path="" element={ <Menu/> } />
    </Routes> */}

    

    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
