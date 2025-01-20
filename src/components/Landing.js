import React, { useEffect } from 'react';
import './css/Landing.css';
import avatar from './image/mae.jpg';

function Landing() {    
    useEffect(() => {
        const createParticles = () => {
            const numParticles = 1000;
            const landing = document.querySelector('.landing');

            if (landing) { 
                for (let i = 0; i < numParticles; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');

                    const size = Math.random() * 6 + 4;
                    const x = Math.random() * 100;
                    const y = Math.random() * 100;
                    const animationDuration = Math.random() * 5 + 5;
                    const animationDelay = Math.random() * 2;

                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    particle.style.left = `${x}vw`;
                    particle.style.top = `${y}vh`;
                    particle.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
                    particle.style.animationDuration = `${animationDuration}s`;
                    particle.style.animationDelay = `${animationDelay}s`;

                    landing.appendChild(particle);
                }
            }
        };

        createParticles();

        return () => {
            const landing = document.querySelector('.landing');
            if (landing) {
                const particles = landing.querySelectorAll('.particle');
                particles.forEach(particle => landing.removeChild(particle));
            }
        };
    }, []);

    return (
        <section id="landing" className="landing">
            <div className="landing-content">
                <img src={avatar} alt="Your Avatar" className="avatar" />
                <h2>Hi there, I'am PMae!</h2>
                <h1>Aspiring Software Engineer.</h1>
            </div>
        </section>
    );
}

export default Landing;