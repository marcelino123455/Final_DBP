import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image:  process.env.PUBLIC_URL + "/imagenes/inicio1.png",
      caption: "Nosotros"
    },
    {
      image: process.env.PUBLIC_URL + "/imagenes/inicio2.jpg",
      caption: "Amamos"
    },
    {
      image: process.env.PUBLIC_URL + "/imagenes/inicio3.jpg",
      caption: "los"
    },
    {
      image: process.env.PUBLIC_URL + "/imagenes/inicio4.jpg",
      caption: "Comics"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px",
          marginTop:'100px',
          marginBottom:'200px'
        }}>
          <Carousel
            data={data}
            time={5000}
            width="100%"
            height="800px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1000vw",
              maxHeight: "600px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

