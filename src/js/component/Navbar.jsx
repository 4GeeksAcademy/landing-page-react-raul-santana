import React, { useState } from 'react';
const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">Iniciar Bootstrap</div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <a className="navbar-link" href="#home">Inicio</a>
        <a className="navbar-link" href="#features">Acerca de</a>
        <a className="navbar-link" href="#pricing">Servicios</a>
        <a className="navbar-link" href="#pricing">Contacto</a>
      </div>
    </nav>
  );
};
export default MyNavbar;