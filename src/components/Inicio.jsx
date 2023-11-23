import React from 'react';
import Header from './Header';
import Footer from './footer';
import MangaPerfilCards from './mangaPerfil'
import Slider from './slider'
function Inicio(){
    return(
        <div>
            <Header></Header>
            <Slider></Slider>
            <MangaPerfilCards></MangaPerfilCards>
            <Footer></Footer>
        </div>
    );

}

export default Inicio;
