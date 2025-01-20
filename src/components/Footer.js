import React from 'react';
import './css/Footer.css'; 

function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {currentYear} PMae. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/pmae8" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/pmae8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;