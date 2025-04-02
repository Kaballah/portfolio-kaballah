import React, { useState, useEffect } from 'react';
import Header from './components/Header'; // Import the Header component
import Home from './components/Home'; // Import the Home component
import About from './components/About'; // Import the About component
import Education from './components/Education'; // Import the Education component
import Projects from './components/Projects'; // Import the Projects component
import Resume from './components/Resume'; // Import the Resume component
import Contact from './components/Contact'; // Import the Contact component
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('Home'); // Default to 'Home'

  useEffect(() => {
    const sections = document.querySelectorAll('.full-height-section');
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
      let currentSection = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection); // Update the active section
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on load

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener on unmount
  }, []);

  return (
    <div className="App">
      <Header /> {/* Render the Header component */}
      <section id="Home" className="full-height-section">
        <Home />
      </section>
      <section id="About" className="full-height-section">
        <About />
      </section>
      <section id="Education" className="full-height-section">
        <Education />
      </section>
      <section id="Resume" className="full-height-section">
        <Resume />
      </section>
      <section id="Projects" className="full-height-section">
        <Projects />
      </section>
      <section id="Contact" className="full-height-section">
        <Contact />
      </section>

      {/* Vertical Section Name */}
      <div className="vertical-page-name">{activeSection}</div>
    </div>
  );
}

export default App;