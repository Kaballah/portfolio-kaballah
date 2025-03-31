import React from 'react';
import Header from './components/Header'; // Import the Header component
import './App.css';

function App() {
  return (
    <div className="App">
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
      </section>
    </div>
  );
}

export default App;
