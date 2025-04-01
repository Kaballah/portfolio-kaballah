import React, { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file for Contact-specific styles
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
    const [positions, setPositions] = useState([]);

    // Function to generate random positions for the icons
    const generateRandomPositions = () => {
        const newPositions = Array(4).fill(null).map(() => ({
            top: Math.random() * 80 + '%', // Random top position (0% to 80%)
            left: Math.random() * 80 + '%', // Random left position (0% to 80%)
        }));
        setPositions(newPositions);
    };

    useEffect(() => {
        // Generate initial positions
        generateRandomPositions();

        // Set interval to update positions every 10 seconds
        const interval = setInterval(() => {
            generateRandomPositions();
        }, 10000); // 10 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div id="Contact" className="full-height-section contact-section">
            <div className="contact-container">
                <h1>Contact Me</h1>
                <p>Feel free to reach out by filling out the form below or connecting with me on social media:</p>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>

            {/* Animated social media icons */}
            {positions.map((pos, index) => (
                <a
                    key={index}
                    href={
                        index === 0
                            ? 'https://facebook.com'
                            : index === 1
                            ? 'https://twitter.com'
                            : index === 2
                            ? 'https://linkedin.com'
                            : 'https://github.com'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="animated-icon"
                    style={{ top: pos.top, left: pos.left }}
                >
                    {index === 0 && <FaFacebook />}
                    {index === 1 && <FaTwitter />}
                    {index === 2 && <FaLinkedin />}
                    {index === 3 && <FaGithub />}
                </a>
            ))}
        </div>
    );
}

export default Contact;