import React from 'react';
import {Link} from 'react-router-dom';
import {SOCIALS} from '../data/content';
import EmailObfuscator from './EmailObfuscator';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="socials">
                    {SOCIALS.map((social, index) => {
                        const IconComponent = social.icon;

                        if (social.mail) {
                            return (
                                <EmailObfuscator
                                    key={index}
                                    email={social.mail}
                                    className="social-link"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {IconComponent && <IconComponent/>}
                                </EmailObfuscator>
                            );
                        } else {
                            return (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="social-link"
                                    target={social.target}
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {IconComponent && <IconComponent/>}
                                </a>
                            );
                        }
                    })}
                </div>
                <p className="copyright">
                    &copy; 2025 - {new Date().getFullYear()} Véloclub
                    <br/>
                    <Link to="/impressum">Impressum</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/datenschutz">Datenschutz</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

