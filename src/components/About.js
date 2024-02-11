import React from 'react';
import myImage from '../components/About-image.jpg'; // Adjust the path to your image
import './About.css'; // Create a new CSS file for About component styles

const About = () => {
  const sectionStyle = {
    backgroundImage: `url('https://wallpaperaccess.com/full/5652012.jpg')`, // Set the background image URL
    backgroundSize: 'cover', // Set the background image size to cover the entire section
    backgroundRepeat: 'no-repeat', // Prevent background image from repeating
  };
  const scrollToHeader = () => {
    setTimeout(() => {
      document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <section id="about" className="section" style={sectionStyle}>
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src={myImage} alt="My Image" />
        </div>
        <div className="about-text">
          <p>
            My journey in web development started with a curiosity to explore the world of code.
            I've honed my skills in HTML, CSS, and JavaScript and enjoy creating interactive and
            user-friendly websites.
          </p>
          <p>
            In addition to my technical skills, I'm actively involved in Toastmasters International.
            As a member of KW's Silver Tongue Toastmasters Club, I've had the privilege to enhance
            my communication and leadership abilities.
          </p>
          <p>
            Outside of coding and public speaking, I have a strong passion for learning and personal
            growth. I believe that the journey of self-improvement is a lifelong adventure, and I'm
            excited to see where it takes me next.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
