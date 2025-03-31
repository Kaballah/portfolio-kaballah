import React from 'react';
// <<<<<<< HEAD
import Header from './components/Header'; // Import the Header component
// =======
// >>>>>>> master
import './App.css';

function App() {
  return (
    <div className="App">
{/* <<<<<<< HEAD */}
      <Header /> {/* Render the Header component */}
      <section id="Home" className="full-height-section">
        <h1>Home</h1> {/* Updated section title */}
      </section>
      <section id="About" className="full-height-section">
        <h1>About</h1> {/* Updated section title */}
      </section>
      <section id="Education" className="full-height-section">
        <h1>Education</h1> {/* Updated section title */}
      </section>
      <section id="Projects" className="full-height-section">
        <h1>Projects</h1> {/* Updated section title */}
      </section>
      <section id="Resume" className="full-height-section">
        <h1>CV</h1> {/* Updated section title */}
      </section>
      <section id="Contact" className="full-height-section">
        <h1>Contact Me</h1> {/* Updated section title */}
      </section>
    </div>
  );
}

export default App;
