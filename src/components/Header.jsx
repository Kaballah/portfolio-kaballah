import React from 'react';
import './Header.css'; // We'll create this file next

function Header() {
  return (
    <header className="app-header">
      <div className="logo">Kaballah</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#section1">Home</a></li>
          <li><a href="#section2">About</a></li>
          <li><a href="#section3">Education</a></li>
          <li><a href="#section4">Projects</a></li>
          <li><a href="#section5">CV</a></li>
          <li><a href="#section6">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
