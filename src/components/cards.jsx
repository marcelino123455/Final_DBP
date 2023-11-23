import React from 'react';

function TicketCards() {
  const cardData = [
    {
      name: 'Chainsaw Man',
      description: 'Denji es un adolescente que vive con un demonio motosierra llamado Pochita. Para pagar la deuda que le dejó su padre tras su muerte, ha tenido que ganarse el pan como puede matando demonios y vendiendo sus cadáverse a la mafia, aunque su vida siempre ha sido miserable.',
      imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe',
    },
    {
      name: 'JUJUTSU KAISEN',
      description: 'Dificultades, arrepentimiento, vergüenza… Los sentimientos negativos de los humanos se convierten en Maldiciones que nos acechan en nuestra vida diaria. Las Maldiciones campan a sus anchas por todo el mundo, y pueden llevar a las personas a sufrir terribles desgracias e incluso dirigirlas a su muerte. Y lo que es peor: solo una Maldición puede exorcizar otra Maldición.',
      imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/ebcd65fa9fb83580062e7052fa6ee5a5.jpe',
    },
    {
        name: 'Bungo Stray Dogs',
        description: 'Habiendo sido expulsado del orfanato y estando a punto de morir de hambre, Atsushi Nakajima conoce a unos hombres. Ambos son miembros de la Agencia Armada de Detectives que se dice que puede resolver cualquier incidente, incluso aquellos que la policía y el ejército no se atreven a investigar. Atsushi acaba acompañándolos en una misión. En la ciudad de Yokohama hay personas que ostentan el nombre de grandes maestros literarios y que poseen poderes inusuales vinculados a su nombre. Este es el inicio de la batalla entre los misteriosos poderes de la Agencia Armada de Detectives y la Port Mafia.',
        imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpe',
      },
      {
        name: 'Ranking of Kings',
        description: 'Incapaz de oír, hablar o incluso de empuñar una espada, el príncipe Bojji no parece el típico heredero al trono, algo que todo su reino comparte. Pero un encuentro con una misteriosa sombra hace que consiga su primer amigo verdadero. Ambos partirán a una gran aventura y forjarán un vínculo capaz de superar cualquier obstáculo... incluso la dificultad de convertirse en rey.',
        imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe',
      },
      {
        name: 'One Piece',
        description: 'Monkey D. Luffy se niega a que nadie se interponga en su camino para convertirse en Rey de los Piratas. Se lanza a surcar los mares y se convertirá en un capitán dispuesto a no darse por vencido jamás hasta hacerse con el mayor tesoro de la historia: el legendario One Piece.',
        imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe',
      },
      {
        name: 'Vinland Saga',
        description: 'Cuando Thors, un gran guerrero viking muere asesinado en batalla a manos de Askeladd, un mercenario, su hijo, Thorfinn, jura vengarse. Para ello tendrá que demostrar su valía antes de ganarse el derecho a retar a un duelo al asesino de su padre.',
        imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe',
      },
      {
          name: 'My Dress-Up Darling',
          description: 'Gojo Wakana es un estudiante de preparatoria que quiere convertirse en un maestro del tradicional arte de crear muñecas Hina. Aunque adora ese arte, no sabe nada de las últimas tendencias y eso hace que le cueste encajar con sus compañeros de clase. Los más populares de la clase, en especial una chica llamada Marin Kitagawa, parecen creer que él vive en un mundo aparte. Todo esto cambia por completo un día cuando Marin comparte un secreto inesperado con él y hace que sus dos mundos coincidan.',
          imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/fdfd2e0910d6f141626a7d6f8f76ab72.jpe',
        },
        {
          name: 'SPY x FAMILY',
          description: 'Todo el mundo tiene una parte de sí mismos que no puede mostrar a los demás. En una era en la que las naciones de todo el mundo se encuentran involucradas en una feroz guerra de información a puerta cerrada, Ostania y Westalis llevan décadas en guerra fría.',
          imageUrl:     'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe',
        },
  ];



  return (
    <div>
      <h1>Tickets cards</h1>
      <ul className='list-cards'>
        {cardData.map((card, index) => (
          <li className="booking-card" key={index} style={{ backgroundImage: `url(${card.imageUrl})` }}>
            <div className="book-container">
              <div className="content">
                <button className="btn" >LEER</button>
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
    </div>
  );
}

export default TicketCards;
