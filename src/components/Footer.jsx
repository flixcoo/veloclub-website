import React from 'react';
import {Link} from 'react-router-dom';
import {FOOTER_LINKS} from '../data/content';
import EmailObfuscator from '../utils/EmailObfuscator.jsx';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="socials">
                    {FOOTER_LINKS.map((social, index) => {
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
                <div className="copyright-section">
                    <p>
                        &copy; 2023 - {new Date().getFullYear()} Véloclub
                        <br/>
                        <Link to="/impressum">Impressum</Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/datenschutz">Datenschutz</Link>
                    </p>
                    <p style={{marginTop: '0.5em'}}>
                        Designed & developed by&nbsp;
                        <a href="https://felixkirchner.de" target="_blank" rel="noopener noreferrer">Felix Kirchner</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

