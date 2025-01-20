import React from 'react';
import './css/ProjectCard.css';

function ProjectCard({ children, description }) { 
    return (
        <div className="project-card">
            {children} 
            <p>{description}</p>
        </div>
    );
}

export default ProjectCard;