import React, { useState } from 'react';
import './Education.css';

function Education() {
  const [activeLevel, setActiveLevel] = useState('primary'); // Default active level
  const [hoveredLevel, setHoveredLevel] = useState(null); // Track hovered level

  const levels = [
    { id: 'primary', name: 'Golden Elites Academy', image: '../assets/ges-1.jpg' },
    { id: 'highschool', name: 'Musingu High School', image: '../assets/musingu.jpeg' },
    { id: 'university', name: 'KCA University', image: '../assets/kca.webp' },
    { id: 'plp', name: 'PLP Academy', image: '../assets/plp.jpg' },
  ];

  const handleTabClick = (levelId) => {
    setActiveLevel(levelId);
    setHoveredLevel(null); // Reset hover state
  };

  const handleMouseEnter = (levelId) => {
    setHoveredLevel(levelId);
  };

  const handleMouseLeave = () => {
    setHoveredLevel(null);
  };

  const activeContent = {
    primary: 'My educational journey began at Golden Elites Academy in Kisumu, where I developed a strong foundation in problem-solving, logical thinking, and teamwork—skills that would later become crucial in my tech career. The school’s structured learning environment nurtured my curiosity, particularly in mathematics and science, sparking an early interest in technology. Whether it was participating in science fairs or learning basic computer skills, this phase laid the groundwork for my analytical mindset and adaptability—traits that define my approach to IT today.',
    highschool: 'At Musingu Boys High School, a renowned institution known for academic excellence, I honed my discipline and technical aptitude. Beyond the core curriculum, I engaged in computer studies, where I first interacted with programming logic and hardware fundamentals. The school’s emphasis on structured learning and leadership (through clubs like the Science & Engineering Society) strengthened my ability to troubleshoot systematically—a skill I now apply in debugging code and optimizing systems. Musingu’s competitive environment also taught me resilience, a trait essential for navigating the fast-paced tech industry.',
    university: 'My time at KCA University marked a pivotal shift into specialized tech training. Known for its strong IT and business programs, KCA exposed me to software development, database management, and networking—core pillars of modern computing. Through hands-on projects and collaborations, I mastered programming languages like Python and Java, while also learning to align technology with business needs. The university’s industry-linked workshops and hackathons further sharpened my ability to turn theoretical knowledge into real-world solutions, preparing me for a dynamic career in tech.',
    plp: 'To deepen my technical expertise, I joined Power Learn Project (PLP) Academy, a cutting-edge tech incubator focused on software engineering, AI, and cloud computing. Here, I am immersing myself in agile development, DevOps practices, and collaborative coding—skills critical for today’s digital economy. PLP’s project-based curriculum allows me to build scalable applications while adopting industry best practices like CI/CD pipelines and cloud deployment (AWS/Azure). The academy’s mentorship and peer-driven learning environment is reinforcing my passion for innovation, equipping me with the tools to thrive in competitive tech landscapes.',
  };

  return (
    <div className="education-section">
      {/* Tabs Section */}
      <div className="tabs">
        {levels.map((level) => (
          <div
            key={level.id}
            className={`tab ${activeLevel === level.id ? 'active' : ''} ${
              hoveredLevel === level.id ? 'hovered' : ''
            }`}
            onClick={() => handleTabClick(level.id)}
            onMouseEnter={() => handleMouseEnter(level.id)}
            onMouseLeave={handleMouseLeave}
          >
            {level.name}
          </div>
        ))}
      </div>

      {/* Text Area Section */}
      <div className="text-area-container">
        <div
          className={`text-area ${hoveredLevel ? 'blurred' : ''}`}
        >
          <p>{activeContent[activeLevel]}</p>
        </div>
      </div>

      {/* Image Showcase Section */}
      <div
        className={`image-showcase ${hoveredLevel ? 'scaled' : ''}`}
      >
        <img
          src={
            hoveredLevel
              ? levels.find((level) => level.id === hoveredLevel).image
              : levels.find((level) => level.id === activeLevel).image
          }
          alt="Education Level"
        />
      </div>
    </div>
  );
}

export default Education;