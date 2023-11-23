import React from 'react';
import ComicsAutor from './ComicsAutor';
import Menu from './Menu'
import { Route,Routes } from 'react-router-dom';
import Autores from './Autor';
import Autores_inicio from './Autores_inicio';
import Inicio from './Inicio';
import Login from './Login';
import Signup from './Signup';
import Modal_signup from './Modal_signup'
import ComentariosPorComic from './ComentarioPorComic';
import App from './ComentarioPorComic_prueba';
import Comentarios from './Comentarios';
import MangaPage from './MagaPage';
import ListaComic from './ListaComics';
import OnliComic from './OnliComic';
import ModalEditUser from './ModalEditUser';
import ComentariosComponent from './ComentarioPorComic';
//Yofer
import MangaInfo from './mangaInfo';
import MangaPerfilCards from './mangaPerfil';

function Rutas(){
    return(
            <Routes>
                <Route exact  path="" element={<Inicio />} />
                <Route exact   path="/autores" element={ <Autores_inicio /> } />
                <Route exact  path="/autores/comics/:id" element={ <ComicsAutor/> } />
                <Route exact  path="/signin" element={ <Login/> } />
                <Route exact  path="/signup" element={ <Signup/> } />
                <Route exact  path="/prueba" element={ <Modal_signup/> } />
                <Route exact  path="/comics-general" element={ <ListaComic/> } />
                <Route exact  path="/comics-general/comics/:id" element={ <OnliComic/> } />
                <Route exact path="/otro/comics/:id" element={<MangaPage />} />
                <Route exact path="comentarios/Comic/4" element={<div style={{marginTop:300}}><ComentariosComponent url={4} /> <Comentarios ide={4}></Comentarios></div>} />
            </Routes>

    )
}


export default Rutas;