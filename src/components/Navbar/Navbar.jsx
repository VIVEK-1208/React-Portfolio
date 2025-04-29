import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-brand">
          <h1>VIVEK BHARTI</h1>
        </Link>
      </div>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/about-me" onClick={() => setMenuOpen(false)}>About Me</Link></li>
          <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <a href="/RESUME.pdf" download className="resume-button mobile-resume">Resume</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <a href="/RESUME.pdf" download className="resume-button desktop-resume">Resume</a>
        <div 
          className={`hamburger ${menuOpen ? "open" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
