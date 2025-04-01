import React, { useState, useEffect } from 'react';
<<<<<<< Updated upstream
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
=======
import './Header.css'; // Import the CSS file for styling

// Import section components
import Home from './Home';
import About from './About';
// import Education from '../sections/Education';
// import Projects from '../sections/Projects';
// import Resume from '../sections/Resume';
import Contact from './Contact';

function Header() {
    const [activeSection, setActiveSection] = useState('Home'); // Default to 'Home'

    useEffect(() => {
        const sections = document.querySelectorAll('.full-height-section');
        const headerHeight = document.querySelector('.app-header')?.offsetHeight || 60; // Get header height or default

        const handleScroll = () => {
            const scrollPosition = window.scrollY + headerHeight + 100; // Add offset for better detection
            let currentSection = 'Home'; // Default if no section is found
            
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

	const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        const headerHeight = document.querySelector('.app-header')?.offsetHeight || 60; // Get header height or default

        if (section) {
            window.scrollTo({
                top: section.offsetTop - headerHeight, // Adjust scroll position to account for header height
                behavior: 'smooth', // Smooth scrolling
            });
        }
    };

    return (
        <>
            <header className="app-header">
                <div className="logo">Kaballah</div>
                
                <nav>
				<ul className="nav-links">
                    <li><a href="#Home" onClick={(e) => { e.preventDefault(); scrollToSection('Home'); }} className={activeSection === 'Home' ? 'active' : ''}>Home</a></li>
                    <li><a href="#About" onClick={(e) => { e.preventDefault(); scrollToSection('About'); }} className={activeSection === 'About' ? 'active' : ''}>About</a></li>
                    <li><a href="#Education" onClick={(e) => { e.preventDefault(); scrollToSection('Education'); }} className={activeSection === 'Education' ? 'active' : ''}>Education</a></li>
                    <li><a href="#Projects" onClick={(e) => { e.preventDefault(); scrollToSection('Projects'); }} className={activeSection === 'Projects' ? 'active' : ''}>Projects</a></li>
                    <li><a href="#Resume" onClick={(e) => { e.preventDefault(); scrollToSection('Resume'); }} className={activeSection === 'Resume' ? 'active' : ''}>CV</a></li>
                    <li><a href="#Contact" onClick={(e) => { e.preventDefault(); scrollToSection('Contact'); }} className={activeSection === 'Contact' ? 'active' : ''}>Contact Me</a></li>
                </ul>
                </nav>
            </header>

            {/* Vertical section for the active page name */}
            <div className="vertical-page-name">
                {activeSection}
            </div>

            {/* Render sections */}
            <Home />
            <About />
            {/* <Education />
            <Projects />
            <Resume /> */}
            <Contact />
        </>
    );
>>>>>>> Stashed changes
}

export default Header;