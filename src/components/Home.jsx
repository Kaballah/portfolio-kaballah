import React, { useState } from 'react';
import './Home.css'; // Create a CSS file for Home-specific styles

function Home() {
    const [imageVersion, setImageVersion] = useState(1); // State to track the image version

    const handleHover = () => {
        setImageVersion(2); // Temporarily change to the second image on hover
    };

    const handleMouseLeave = () => {
        setImageVersion(1); // Revert to the first image when hover ends
    };

    const handleFormSubmit = () => {
        localStorage.setItem('imageVersion', '2'); // Save the second image version in localStorage
        setImageVersion(2); // Permanently change to the second image
    };

    // Check localStorage on component load to persist the image state
    React.useEffect(() => {
        const savedVersion = localStorage.getItem('imageVersion');
        if (savedVersion === '2') {
            setImageVersion(2); // Set the image to the second version if saved
        }
    }, []);

    return (
        <div id="Home" className="full-height-section home-section">
            <div className="home-content">
                <div className="home-text">
                    <h1>Building Digital Magic, One Pixel at a Time</h1>
                    <p>Behind every great site is a little debugging magic✨</p>
                    <p>Discover my projects, skills, and journey as a developer</p>

                    <a href="#Contact" className="cta-button" onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} onClick={handleFormSubmit}>
                        Got a Project? Let’s Talk
                    </a>
                </div>
                <div className="home-image">
                    <img
                        src={
                            imageVersion === 1
                                ? '/src/assets/landing-1.png'
                                : '/src/assets/landing-2.png'
                        }
                        
                        alt="Home Landing Image"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;