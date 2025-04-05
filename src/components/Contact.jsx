import React, { useRef } from 'react';
import './Contact.css';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaInstagram, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

function Contact() {
    const formRef = useRef();

    const generateWhatsAppLink = () => {
      const phoneNumber = "254769692554"; // Replace with your phone number
      const message = encodeURIComponent("Hi! I saw your portfolio and would like to connect.");
      return `https://wa.me/${phoneNumber}?text=${message}`;
    };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_f2w6iin', // Replace with your EmailJS service ID
        'template_suphdqf', // Replace with your EmailJS template ID
        formRef.current,
        'XC7S_fVx2X-MleCZM' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.log(error.text);
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div id="Contact" className="full-height-section contact-section">
      <div className="contact-container">
        {/* Social Media and Contact Details */}
        <div className="contact-details">
          <h2>Contact Details</h2>
          <div className="detail-item">
            <FaPhone className="icon" />
            <span>+(254) 769 692 554</span>
          </div>
          <div className="detail-item">
            <FaMapMarkerAlt className="icon" />
            <span>28884-00100 Nairobi, Kenya</span>
          </div>
          <div className="detail-item">
            <FaEnvelope className="icon" />
            <span>kabalaronnie5@gmail.com</span>
          </div>
          <div className="social-icons">
            {/* <a href="https://facebook.com" target="_blank" title='Follow me on' rel="noopener noreferrer">
              <FaFacebook />
            </a> */}
            <a href="https://github.com/Kaballah" target="_blank" title="Let's Collaborate" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/kabala-ronnie-892904202" title="Let's Connect" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://x.com/mckaballah" target="_blank" title="Let's tweet" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a 
              href={generateWhatsAppLink()}
              className="whatsapp-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact me on WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/_whois.kaballah_" target="_blank" title="Let's Connect" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h2>Reach Me</h2>
          <form ref={formRef} onSubmit={sendEmail}>
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
              <textarea id="message" name="message" placeholder="Your Message" rows="3" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;