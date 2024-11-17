import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo.png';
import Search from '../../Assets/search.png';
import Search2 from '../../Assets/search2.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      setIsNavbarVisible(true);
    } else {
      setIsNavbarVisible(false);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${isNavbarVisible ? 'visible' : 'hidden'}`} ref={navbarRef}>
      <div className="logo">
        <img src={Logo} alt="Eco Case Logo" />
      </div>

      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#research" onClick={handleLinkClick}>Research</a>
        <a href="#team" onClick={handleLinkClick}>Team</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div className="search-icon-container">
        <div className={`search-bar ${isSearchOpen ? 'active' : ''}`}>
          <input type="text" placeholder="Search..." />
          <img src={Search} alt="Search" className="search-icon-large" />
        </div>
        <div className="search-icon-small" onClick={toggleSearch}>
          <img src={Search2} alt="Search" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      </div>

     
    </nav>
  );
};

export default Navbar;
