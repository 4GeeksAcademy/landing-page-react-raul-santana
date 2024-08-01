import React, { useState } from 'react';
const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">El Gigante de Hierro</div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <a className="navbar-link" href="https://www.youtube.com/watch?v=5dfsOV0diP8" target="_blank" rel="noopener noreferrer">Película</a>
        <a className="navbar-link" href="https://www.youtube.com/watch?v=-O7E21ZWm2E" target="_blank" rel="noopener noreferrer">Curiosidades</a>
        <a className="navbar-link" href="https://www.redbubble.com/es/shop/el+gigante+de+hierro" target="_blank" rel="noopener noreferrer">Merchandising</a>
        <a className="navbar-link" href="https://multiversus.com/es-es" target="_blank" rel="noopener noreferrer">Juegos</a>
      </div>
    </nav>
  );
};
export default MyNavbar;