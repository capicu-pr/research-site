import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoSolo from "../assets/logo-solo.png";
import "../styles/ResearchNavigation.css";

export default function ResearchNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="research-navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src={logoSolo} alt="Capicú Research Logo" />
          <span className="research-label">Research</span>
        </Link>
        
        {/* Hamburger Menu Button */}
        <button 
          className="hamburger-menu" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          <Link to="/" className="nav-link" onClick={closeMenu}>Overview</Link>
          <Link to="https://github.com/capicu-pr" className="nav-link" onClick={closeMenu}>GitHub</Link>
          <Link to="https://capicupuertorico.com" className="nav-link external" onClick={closeMenu}>Main Site</Link>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Overview</Link>
            <Link to="https://github.com/capicu-pr" className="mobile-nav-link" onClick={closeMenu}>GitHub</Link>
            <Link to="https://capicupuertorico.com" className="mobile-nav-link external" onClick={closeMenu}>Main Site</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}