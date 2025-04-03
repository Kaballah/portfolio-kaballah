import React from 'react';
import './About.css';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaDocker, FaDatabase, FaAws } from 'react-icons/fa';

function About() {
  const languages = [
    { id: 1, icon: <FaPython />, name: 'Python' },
    { id: 2, icon: <FaHtml5 />, name: 'HTML5' },
    { id: 3, icon: <FaCss3Alt />, name: 'CSS3' },
    { id: 4, icon: <FaJsSquare />, name: 'JavaScript' },
    { id: 5, icon: <FaDatabase />, name: 'SQL' },
  ];

  const frameworks = [
    { id: 1, icon: <FaReact />, name: 'React' },
    { id: 2, icon: <FaNodeJs />, name: 'Node.js' },
    { id: 3, icon: <FaDocker />, name: 'Docker' },
    { id: 4, icon: <FaAws />, name: 'AWS' },
    { id: 5, icon: <FaGitAlt />, name: 'Git' },
    { id: 6, icon: <FaDatabase />, name: 'SQL' },
  ];

  return (
    <div id="About" className="full-height-section about-section">
      <div className="about-section">
        {/* First and Second Sections */}
        <div className="about-interests-container">
          {/* About Section */}
          <div className="about">
            <h2>About Me</h2>
            <p>
              Driven by an innate curiosity and a genuine passion for tackling complex challenges, I am an individual who thrives in environments that foster continuous learning and growth. My primary motivation is rooted in a deep desire to contribute meaningfully and create tangible positive outcomes. This intrinsic drive pushes me to actively seek opportunities where I can apply my abilities to make a real difference. <br></br> <br></br>
              Professionally, I am particularly drawn to roles that allow me to leverage my analytical skills and collaborative spirit. I believe in the power of teamwork and the synergy that arises from diverse perspectives working towards a common goal. My approach is proactive and solution-oriented, always seeking innovative ways to address challenges and contribute effectively to project success.
            </p>
          </div>

          {/* Interests Section */}
          <div className="interests">
            <h2>Interests</h2>
            <p>
              My fascination with the dynamic world of technology is deeply intertwined with my core motivations. The rapid pace of innovation and the potential for transformative solutions within the tech industry are incredibly exciting to me. I am particularly drawn to the advancements in artificial intelligence, sustainable tech, and mobile development and see immense potential for positive impact in these fields. <br></br> <br></br>
              Beyond specific technological domains, I am broadly interested in contributing to shaping a more efficient and connected future. The prospect of leveraging technology to solve real-world problems and improve people's lives is a significant driving force for me. I am eager to explore professional avenues where I can actively participate in this evolution and contribute my skills to impactful initiatives.
            </p>
          </div>
        </div>

        {/* Third Section: Languages and Frameworks */}
        <div className="languages-frameworks">
          <div className="languages-container">
            {/* <h3>Languages</h3> */}
            <div className="icon-grid">
              {languages.map((language) => (
                <div key={language.id} className="icon-item">
                  {language.icon}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="frameworks-container">
            {/* <h3>Frameworks &amp; Tools</h3> */}
            <div className="icon-grid">
              {frameworks.map((framework) => (
                <div key={framework.id} className="icon-item">
                  {framework.icon}
                  <span>{framework.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;