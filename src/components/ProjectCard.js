import React from 'react';
import './css/ProjectCard.css';

function ProjectCard({ children, description, link }) { 
    return (
        <div className="project-card">
            {children} 
            <p className='content'>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer" id="view">Visit</a>
        </div>
    );
}

export default ProjectCard;
