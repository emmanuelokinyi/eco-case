import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null); 
  const menuRef = useRef(null); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const handleClickOutside = (e) => {
    if (navbarRef.current && !navbarRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  };

 
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="logo">
        <img src={Logo} alt="Eco Case Logo" />
      </div>
      <div
        className={`nav-links ${isMenuOpen ? 'active' : ''}`}
        ref={menuRef}
      >
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#research" onClick={handleLinkClick}>Research</a>
        <a href="#team" onClick={handleLinkClick}>Team</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
