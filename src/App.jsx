// Importing React components
import React, { useState, useEffect } from 'react';

// Importing components
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Loader from './components/Loader';
import './App.css';

function App() {
	const [activeSection, setActiveSection] = useState('Home');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Setting up the timmer for loading
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		// Setting up the section scroll event and section names
		const sections = document.querySelectorAll('.full-height-section');
		const handleScroll = () => {
			const sections = document.querySelectorAll('.full-height-section');
			const scrollPosition = window.pageYOffset;
			const windowHeight = window.innerHeight;
			const offset = windowHeight * 0.3;

			sections.forEach((section) => {
				const sectionTop = section.offsetTop - offset;
				const sectionHeight = section.offsetHeight;

				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					setActiveSection(section.id);
				}
			});
		};

		// Adding a scroll event listener
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();

		// Cleanup function
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearTimeout(timer);
		};
	}, []);

	// Rendering the Loader component while loading
	if (isLoading) {
		return <Loader />;
	}

	return (
		<div className="App">
			<Header /> 

			{/* Header component for navigation */}
			<section id="Home" className="full-height-section">
				<Home />
			</section>
			
			<section id="About" className="full-height-section">
				<About />
			</section>

			<section id="Education" className="full-height-section">
				<Education />
			</section>

			<section id="Resume" className="full-height-section">
				<Resume />
			</section>

			<section id="Projects" className="full-height-section">
				<Projects />
			</section>

			<section id="Contact" className="full-height-section">
				<Contact />
			</section>

			{/* Vertical Section Name */}
			<div className="vertical-page-name">{activeSection}</div>
		</div>
	);
}

export default App;