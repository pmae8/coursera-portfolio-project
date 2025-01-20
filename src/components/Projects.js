import React from 'react';
import ProjectCard from './ProjectCard';
import './css/Projects.css';
import project1Image from './image/project1.jpg';
import project2Image from './image/project2.jpg';
import project3Image from './image/project3.jpg';
import project4Image from './image/project4.jpg';

function Projects() {
  const projects = [
    {
      title: 'Unit Converter',
      description:
        'A user-friendly application that allows you to quickly and accurately convert values between various units, such as length, weight, temperature, currency, and more.',
      image: project1Image,
      link: 'https://maeunit-converter.netlify.app/',
    },
    {   
      title: 'Calculator',
      description:
        "A convenient tool for quick and accurate calculations, whether you're balancing your checkbook or solving complex equations.",
      image: project2Image,
      link: 'https://codepen.io/pmae8/pen/ZEggeXe',
    },
    {
      title: 'Quotes Generator',
      description:
        'A web application that displays a random quote from a collection of famous or inspirational sayings. It can be used for daily motivation, sparking creativity, or simply enjoying the wisdom of others.',
      image: project3Image,
      link: 'https://randomquotesprov.netlify.app/',
    },
    {
      title: 'War Card Game',
      description:
        'Perfect for a quick and exciting game night, War is easy to learn and fun for all ages. Get ready for thrilling battles and unexpected twists of fate!',
      image: project4Image,
      link: 'https://mcard-war.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Featured Practice Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <h3>{project.title}</h3>
              <img src={project.image} alt={project.title} />
            </a>
          </ProjectCard>
        ))}
      </div>
    </section>
  );
}

export default Projects;