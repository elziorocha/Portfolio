import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" className='routes'>Home</Link>
        <Link to="/sobre" className='routes'>Sobre</Link>
        <Link to="/portfolio" className='routes'>Portfólio</Link>
        <Link to="/contato" className='routes'>Contato</Link>
      </div>

      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar ${isOpen ? 'change' : ''}`}></div>
      </div>
    </nav>
  );
};

export default Header;