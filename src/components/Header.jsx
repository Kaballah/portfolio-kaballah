import React, { useState, useEffect } from 'react';
import './Header.css';
import Home from './Home';
import About from './About';
// import Education from './Education';
// import Projects from './Projects';
// import Resume from './Resume';
import Contact from './Contact';

function Header() {
  const [activeSection, setActiveSection] = useState('Home'); // Default to 'Home'

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
        top: section.offsetTop - headerHeight, // Scroll to the section with offset for the header
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
        <nav>
          <ul className="nav-links">
            <li>
              <a
                onClick={() => handleNavigation('Home')}
                className={activeSection === 'Home' ? 'active' : ''}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('About')}
                className={activeSection === 'About' ? 'active' : ''}
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('Education')}
                className={activeSection === 'Education' ? 'active' : ''}
              >
                Education
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('Projects')}
                className={activeSection === 'Projects' ? 'active' : ''}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => handleNavigation('Resume')}
                className={activeSection === 'Resume' ? 'active' : ''}
              >
                CV
              </a>
            </li>
            <li>
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

      {/* Render the sections */}
      <Home />
      <About />
      {/* <Education /> */}
      {/* <Projects /> */}
      {/* <Resume /> */}
      <Contact />
    </>
  );
}

export default Header;