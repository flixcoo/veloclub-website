import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, anchor) => {
        e.preventDefault();

        // If we're not on the home page, navigate to it first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait briefly until the page is loaded, then scroll to the anchor
            setTimeout(() => {
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100);
        } else {
            // If we're already on the home page, scroll directly
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    };

    return (
        <header className="header">
            <div className="container nav-flex">
                <Link to="/" className="logo">véloclub</Link>
                <nav className="nav-links">
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>Band</a>
                    <a href="#live" onClick={(e) => handleNavClick(e, '#live')}>Live</a>
                    <a href="#music" onClick={(e) => handleNavClick(e, '#music')}>Musik</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;

