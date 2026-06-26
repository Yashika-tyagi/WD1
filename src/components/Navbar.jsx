import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Compass className="logo-icon" />
          <span className="logo-text">Skill<span className="gradient-text-alt">Path</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-links-desktop">
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-secondary btn-sm nav-cta">
            Get Started <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-menu-mobile ${isOpen ? 'open' : ''}`}>
        <div className="mobile-links">
          <NavLink to="/" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu} end>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>
            Contact
          </NavLink>
          <Link to="/contact" className="btn btn-primary mobile-cta" onClick={closeMenu}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
