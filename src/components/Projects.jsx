import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      image: '../assets/Project-1.png',
      title: 'Portfolio II',
      description: "A sequel that redefines creativity, Project II is a modern take on portfolio design, blending cutting-edge technologies like React and TypeScript. It's not just a portfolio—it's a statement of innovation and evolution",
      languages: ['React', 'Typescript', 'React', 'Vue'],
      liveSite: null,
      repo: 'https://github.com/Kaballah/portfolio-kaballah',
    },
    {
      id: 2,
      image: '../assets/Project-2.png',
      title: 'Portfolio I',
      description: "The origin story of a developer's journey, Project I is a handcrafted masterpiece built with HTML, CSS, and JavaScript. It’s where the adventure began, showcasing the foundation of skills that would shape future creations",
      languages: ['HTML', 'CSS', 'JavaScript'],
      liveSite: 'https://kaballah.github.io/portfolio-2/',
      repo: 'https://github.com/Kaballah/portfolio-2',
    },
    {
      id: 3,
      image: '../assets/Project-3.png',
      title: 'DAMS',
      description: "A system designed to bring order to chaos, DAMS streamlines doctor appointments with the power of PHP, Laravel, and MySQL. It's a solution that bridges the gap between patients and healthcare providers with efficiency and precision",
      languages: ['PHP', 'Laravel', 'MySQL'],
      liveSite: null,
      repo: 'https://github.com/Kaballah/Doctor-Appointment-Management-System',
    },
    {
      id: 4,
      image: '../assets/Project-4.png',
      title: 'E-Shoes',
      description: "Step into the future of online shopping with E-Shoes, a sleek and responsive e-commerce platform. Built with HTML, CSS, and JavaScript, it delivers a seamless experience for sneaker enthusiasts everywhere",
      languages: ['HTML', 'CSS', 'JavaScript'],
      liveSite: 'https://kaballah.github.io/nike_store/',
      repo: 'https://github.com/Kaballah/nike_store',
    },
    {
      id: 5,
      image: '../assets/Project-5.png',
      title: 'P&P Spa',
      description: "A digital oasis for relaxation, P&P Spa is a platform designed to showcase spa services with elegance and simplicity. Built with PHP and Laravel, it’s a serene blend of functionality and beauty",
      languages: ['PHP', 'Laravel', 'MySQL'],
      liveSite: null,
      repo: null,
    },
  ];

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="projects-section">
      {/* Left Navigation */}
      <button
        className="nav-button left"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        &#8249;
      </button>

      {/* Center Section */}
      <div className="projects-container">
        {projects.map((project, index) => {
          let position = 'hidden'; // Default position

          if (index === currentIndex) {
            position = 'active'; // Centered and larger
          } else if (index === currentIndex - 1) {
            position = 'previous'; // Left of the active project
          } else if (index === currentIndex + 1) {
            position = 'next'; // Right of the active project
          }

          return (
            <div key={project.id} className={`project-card ${position}`}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="languages">
                {project.languages.map((lang, i) => (
                  <li key={i}>{lang}</li>
                ))}
              </ul>
              <div className="project-links">
                <a
                  href={project.liveSite || '#'}
                  className={`btn ${!project.liveSite ? 'disabled' : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
                <a
                  href={project.repo}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Navigation */}
      <button
        className="nav-button right"
        onClick={handleNext}
        disabled={currentIndex === projects.length - 1}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Projects;