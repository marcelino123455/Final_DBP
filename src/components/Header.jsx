import { Link } from "react-router-dom";
import React from 'react';
import './boxicons-2.1.4/css/boxicons.min.css'; 
import './styles.css'
function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <Link to="/">
      <img style={{width:'200px'}} src="https://cdn.glitch.global/97c36b09-137a-4142-98ae-1dd55a53e5ad/Sin%20t%C3%ADtulo-1.jpg?v=1698893478838" alt="Mi logo" />
      </Link>
      
      
      <Navigation />
    </header>
  );
}

function Navigation() {
  const navLinks = [
    { text: 'Home', index: 0 },
    { text: 'About', index: 1 },
    { text: 'Gallery', index: 2 },
    { text: 'Service', index: 3 },
  ];

  return (
      <div>
      <Link style={{textDecoration:'none', color:'white', marginRight:'20px'}} className='li_links' to="">Inicio</Link>
      <Link style={{textDecoration:'none', color:'white', marginRight:'20px'}}  to="autores">Autores</Link>
      <Link style={{textDecoration:'none', color:'white', marginRight:'20px'}}  to="/signin">Login</Link>
      <Link style={{textDecoration:'none', color:'white', marginRight:'20px'}}  to="/comics-general">Comics</Link>

    </div>
  );
}

export default App;
