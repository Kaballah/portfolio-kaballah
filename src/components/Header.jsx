import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('Home'); // Default to 'Home'
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.full-height-section');
    const headerHeight = document.querySelector('.app-header')?.offsetHeight || 60;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + headerHeight + 100; // Add offset for better detection
      let currentSection = 'Home';

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);

      // Update the URL without reloading the page
      window.history.pushState(null, '', `/${currentSection}`);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
  }, []);

  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.app-header')?.offsetHeight || 60;

    if (section) {
      window.scrollTo({
        top: section.offsetTop , // Scroll to the section with offset for the header
        behavior: 'smooth', // Smooth scrolling
      });

      // Update the URL without reloading the page
      window.history.pushState(null, '', `/${sectionId}`);
    }
  };

  return (
    <>
      <header className="app-header">
        <div className="logo">Kaballah</div>
        <button
        className={`hamburger ${isNavVisible ? 'open' : ''}`}
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
        <nav>
          <ul className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
            <li style={{ animationDelay: '0.1s' }}>
              <a
                onClick={() => handleNavigation('Home')}
                className={activeSection === 'Home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li style={{ animationDelay: '0.2s' }}>
              <a
                onClick={() => handleNavigation('About')}
                className={activeSection === 'About' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li style={{ animationDelay: '0.3s' }}>
              <a
                onClick={() => handleNavigation('Education')}
                className={activeSection === 'Education' ? 'active' : ''}
              >
                Education
              </a>
            </li>
            <li style={{ animationDelay: '0.4s' }}>
              <a
                onClick={() => handleNavigation('Resume')}
                className={activeSection === 'Resume' ? 'active' : ''}
              >
                CV
              </a>
            </li>
            <li style={{ animationDelay: '0.5s' }}>
              <a
                onClick={() => handleNavigation('Projects')}
                className={activeSection === 'Projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li style={{ animationDelay: '0.6s' }}>
              <a
                onClick={() => handleNavigation('Contact')}
                className={activeSection === 'Contact' ? 'active' : ''}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Render the sections - Sections are rendered in App.jsx to avoid duplication */}
    </>
  );
}

export default Header;
