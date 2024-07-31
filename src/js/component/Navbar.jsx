import React, { useState } from 'react';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Start Bootstrap</div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
        <a className="navbar-link" href="#home">Home</a>
        <a className="navbar-link" href="#features">About</a>
        <a className="navbar-link" href="#pricing">Services</a>
        <a className="navbar-link" href="#pricing">Contact</a>
      </div>
    </nav>
  );
};

export default MyNavbar;