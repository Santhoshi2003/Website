// Projects.js
import React from "react";
import "./Project.css";

const projects = [
  {
    title: "BMI CALCULATOR",
    description: "Creating a BMI (Body Mass Index) calculator using Flask involves building a web application that takes user input, performs calculations, and displays the BMI result.",
    link: "https://github.com/Santhoshi2003/BMI-calculator",
    image: "https://tse2.mm.bing.net/th?id=OIP.3hgkLGuLbOtfNYcojtyR8AHaEL&pid=Api&P=0&h=180", // Replace with the actual image URL
  },
  {
    title: "HELIUM DETECTION",
    description: "The project employs linear regression for accurate helium balloon predictions at cartoon character parties, with challenges related to assumed linearity and data complexity.",
    link: "https://github.com/Santhoshi2003/helium_balloon_prediction",
    image: "https://tse2.mm.bing.net/th?id=OIP.v1lJAGrWsaMGHEyGrMYYPgHaFe&pid=Api&P=0&h=180", // Replace with the actual image URL
  },
  // Add more project objects as needed
];

function Projects() {
  return (
    <section id="projects" className="projects-section" style={{ backgroundImage: `url('https://wallpaperset.com/w/full/4/7/7/170846.jpg')` }}>
      <h2 style={{ color: 'white' }}>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-box" key={index} style={{ backgroundImage: `url(${project.image})` }}>
            <div className="project-content">
              <h3 style={{ color: 'white' }}>{project.title}</h3>
              <p style={{ color: 'white' }}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
