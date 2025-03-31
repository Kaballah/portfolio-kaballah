import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('section1'); // Default to 'section1'

  useEffect(() => {
    const sections = document.querySelectorAll('.full-height-section');
    const headerHeight = document.querySelector('.app-header')?.offsetHeight || 60; // Get header height or default

    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight + 100; // Add offset for better detection

      let currentSection = 'section1'; // Default if no section is found
      sections.forEach(section => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once on mount

  return (
    <header className="app-header">
      <div className="logo">Kaballah</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#section1" className={activeSection === 'section1' ? 'active' : ''}>Home</a></li>
          <li><a href="#section2" className={activeSection === 'section2' ? 'active' : ''}>About</a></li>
          <li><a href="#section3" className={activeSection === 'section3' ? 'active' : ''}>Education</a></li>
          <li><a href="#section4" className={activeSection === 'section4' ? 'active' : ''}>Projects</a></li>
          <li><a href="#section5" className={activeSection === 'section5' ? 'active' : ''}>CV</a></li>
          <li><a href="#section6" className={activeSection === 'section6' ? 'active' : ''}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
