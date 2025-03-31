import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the CSS file for styling';

function Header() {
	const [activeSection, setActiveSection] = useState('Home'); // Default to 'Home'

	useEffect(() => {
		const sections = document.querySelectorAll('.full-height-section');
		const headerHeight = document.querySelector('.app-header')?.offsetHeight || 60; // Get header height or default

		const handleScroll = () => {
			const scrollPosition = window.scrollY + headerHeight + 100; // Add offset for better detection
			let currentSection = 'Home'; // Default if no section is found
			
			sections.forEach(section => {
				if (section.offsetTop <= scrollPosition) {
					currentSection = section.id;
				}
			});

			setActiveSection(currentSection);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial check on load

		// Cleanup listener on component unmount
		return () => window.removeEventListener('scroll', handleScroll);
	}, []); // Empty dependency array means this runs once on mount

	const handleNavigation = (sectionId) => {
		const section = document.getElementById(sectionId);
		
		if (section) {
			window.scrollTo({
				top: section.offsetTop,
				behavior: 'smooth',
			});
		}
	};

	return (
		<header className="app-header">
			<div className="logo">Kaballah</div>
			
			<nav>
				<ul className="nav-links">
					{/* onClick with e.preventDefault(): Prevents the default jump behavior of the browser and instead uses the handleNavigation function for smooth scrolling */}
					<li><a href="#Home" onClick={(e) => { e.preventDefault(); handleNavigation('Home'); }} className={activeSection === 'Home' ? 'active' : ''}>Home</a></li>
					<li><a href="#About" onClick={(e) => { e.preventDefault(); handleNavigation('About'); }} className={activeSection === 'About' ? 'active' : ''}>About</a></li>
					<li><a href="#Education" onClick={(e) => { e.preventDefault(); handleNavigation('Education'); }} className={activeSection === 'Education' ? 'active' : ''}>Education</a></li>
					<li><a href="#Projects" onClick={(e) => { e.preventDefault(); handleNavigation('Projects'); }} className={activeSection === 'Projects' ? 'active' : ''}>Projects</a></li>
					<li><a href="#Resume" onClick={(e) => { e.preventDefault(); handleNavigation('Resume'); }} className={activeSection === 'Resume' ? 'active' : ''}>CV</a></li>
					<li><a href="#Contact" onClick={(e) => { e.preventDefault(); handleNavigation('Contact'); }} className={activeSection === 'Contact' ? 'active' : ''}>Contact Me</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
