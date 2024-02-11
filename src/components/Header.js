import React, { useState } from 'react';
import './Header.css';
import yourPhoto from '../components/My Photo.jpg'; // Adjust the path to your image
import linkedinIcon from '../components/linkedin-icon.png'; // Add the path to your LinkedIn icon image
import githubIcon from '../components/github-icon.png'; // Add the path to your GitHub icon image
import emailIcon from '../components/email-icon.png'; // Add the path to your email icon image
import backgroundImage from '../components/background-image.jpg'; // Add the path to your background image

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close the menu when a section is clicked
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${menuOpen ? 'menu-open' : ''}`}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set the background image
    >
    <header className="header" id="header"></header>
      <div className="header-content">
        <div className="top-right">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button> {/* Updated to 'skills' */}
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className="center-content">
          <h1>Hello, I'm Ramya Satya Santhoshi Durga Nune</h1>
          <p>&nbsp;</p> {/* Add a space line */}
          <div className="subtitle">
            <p>Web Developer | Toastmaster</p>
            <p>&nbsp;</p> {/* Add a space line */}
            <div className="subtitle1">
              <p>
                I'm a passionate web developer with expertise in front-end technologies
                including HTML, CSS, and JavaScript.
              </p>
              <p>Serving as Vice President Eduaction in KW's Silver Tongue Toastmasters Club</p>
            </div>
          </div>
        </div>
        <div className="right-content">
          <img src={yourPhoto} alt="Your Photo" />
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ramya-nune-a2420b238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Santhoshi2003" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="mailto:santhoshinune6@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
        </div>
      </div>
      <div className="menu-button" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
