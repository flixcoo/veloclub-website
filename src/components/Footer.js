import React from 'react';
import {Link} from 'react-router-dom';
import {SOCIALS} from '../data/content';
import {FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaEnvelope} from 'react-icons/fa';
import EmailObfuscator from './EmailObfuscator';

// Icon mapping
const iconMap = {
    FaInstagram: FaInstagram,
    FaTiktok: FaTiktok,
    FaYoutube: FaYoutube,
    FaFacebook: FaFacebook,
    FaEnvelope: FaEnvelope
};

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="socials">
                    {SOCIALS.map((social, index) => {
                        const IconComponent = iconMap[social.icon];

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
                    &copy; {new Date().getFullYear()} Véloclub
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

