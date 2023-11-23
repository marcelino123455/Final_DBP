import React from 'react';
import "./cards-perfil.css"
function Footer() {
  return (
    <div className="footer">
      <div className="contact-info">
        <h2>Contacto</h2>
        <p>Email: MYMj@email.com</p>
        <p>Teléfono: (123) 456-7890</p>
      </div>

      <div className="social-links">
        <h2>Redes Sociales</h2>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">Instagram</a>
      </div>
    </div>
  );
}

export default Footer;
