import React from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (e, anchor) => {
        e.preventDefault();

        // Wenn wir nicht auf der Home-Seite sind, navigiere erst zur Home-Seite
        if (location.pathname !== '/') {
            navigate('/');
            // Warte kurz, bis die Seite geladen ist, dann scrolle zum Anker
            setTimeout(() => {
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth'});
                }
            }, 100);
        } else {
            // Wenn wir bereits auf der Home-Seite sind, scrolle direkt
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

