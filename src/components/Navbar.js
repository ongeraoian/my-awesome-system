import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    // Update isMobile state when window resizes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (section) => {
    if (location.pathname !== "/") {
      // Redirect to home and then scroll to section
      window.location.href = `/#${section}`;
    } else {
      // Scroll smoothly if already on home
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu on mobile
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <RouterLink to="/">
          <img 
            src={require('../Assets/logo a.png')} 
            alt="Multiside Technologies Logo" 
            style={{ height: '70px', width: 'auto' }} 
          />
        </RouterLink>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      {/* Desktop Links */}
      {!isMobile && (
        <ul className="navbar-links">
          <li><ScrollLink to="home" smooth={true} duration={500} onClick={() => handleNavClick('home')}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} onClick={() => handleNavClick('about')}>About Us</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} duration={500} onClick={() => handleNavClick('services')}>Services</ScrollLink></li>
          <li><ScrollLink to="reviews" smooth={true} duration={500} onClick={() => handleNavClick('reviews')}>reviews</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500} onClick={() => handleNavClick('contact')}>contact us</ScrollLink></li>
        </ul>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li><ScrollLink to="home" smooth={true} duration={500} onClick={() => handleNavClick('home')}>Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} onClick={() => handleNavClick('about')}>About Us</ScrollLink></li>
          <li><ScrollLink to="services" smooth={true} duration={500} onClick={() => handleNavClick('services')}>Services</ScrollLink></li>
          <li><ScrollLink to="reviews" smooth={true} duration={500} onClick={() => handleNavClick('reviews')}>reviews</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500} onClick={() => handleNavClick('contact')}>contact us</ScrollLink></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
