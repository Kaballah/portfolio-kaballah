import React, { useState } from 'react';
import landing1 from '../assets/landing-1.png';
import landing2 from '../assets/landing-2.png';
import './Home.css'; // Create a CSS file for Home-specific styles

function Home() {
    const [imageVersion, setImageVersion] = useState(() => {
        const savedVersion = localStorage.getItem('imageVersion');
        return savedVersion === '2' ? 2 : 1;
    });

    const handleHover = () => setImageVersion(2);
    const handleMouseLeave = () => !localStorage.getItem('imageVersion') && setImageVersion(1);
    const handleFormSubmit = () => {
        localStorage.setItem('imageVersion', '2');
        setImageVersion(2);
    };

    return (
        <section id="Home" className="full-height-section home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Building Digital Magic, One Pixel at a Time</h1>
                    <p>Behind every great site is a little debugging magic✨</p>
                    <p>Discover my projects, skills, and journey as a developer</p>
    
                    <a 
                        href="#Contact" 
                        className="cta-button"
                        onMouseEnter={handleHover}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleFormSubmit}
                        rel="noopener noreferrer"
                    >
                        Got a Project? Let's Talk
                    </a>
                </div>
                <div className="home-image">
                    <img
                        src={imageVersion === 1 ? landing1 : landing2}
                        alt={`Home Landing Image ${imageVersion}`}
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
}

export default Home;