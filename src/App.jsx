<<<<<<< Updated upstream
import React from 'react';
=======
import React, { useState, useEffect, useRef } from 'react';
>>>>>>> Stashed changes
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
      <section id="section1" className="full-height-section">
        <h1>Home</h1> {/* Updated section title */}
      </section>
      <section id="section2" className="full-height-section">
        <h1>About</h1> {/* Updated section title */}
      </section>
      <section id="section3" className="full-height-section">
        <h1>Education</h1> {/* Updated section title */}
      </section>
      <section id="section4" className="full-height-section">
        <h1>Projects</h1> {/* Updated section title */}
      </section>
      <section id="section5" className="full-height-section">
        <h1>CV</h1> {/* Updated section title */}
      </section>
      <section id="section6" className="full-height-section">
        <h1>Contact Me</h1> {/* Updated section title */}
{/* ======= */}
<<<<<<< Updated upstream
      </section>
      <section id="section1" className="full-height-section">
        <h1>Section 1</h1>
      </section>
      <section id="section2" className="full-height-section">
        <h1>Section 2</h1>
      </section>
      <section id="section3" className="full-height-section">
        <h1>Section 3</h1>
      </section>
      <section id="section4" className="full-height-section">
        <h1>Section 4</h1>
      </section>
      <section id="section5" className="full-height-section">
        <h1>Section 5</h1>
      </section>
      <section id="section6" className="full-height-section">
        <h1>Section 6</h1>
{/* >>>>>>> master */}
=======
>>>>>>> Stashed changes
      </section>
    </div>
  );
}

export default App;
