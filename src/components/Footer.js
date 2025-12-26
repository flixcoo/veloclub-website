import React from 'react';
import {Link} from 'react-router-dom';
import {SOCIALS} from '../data/content';
import {FaInstagram, FaTiktok, FaSpotify, FaYoutube, FaFacebook, FaEnvelope} from 'react-icons/fa';
import {SiApplemusic} from 'react-icons/si';

// Icon mapping
const iconMap = {
    FaInstagram: FaInstagram,
    FaTiktok: FaTiktok,
    FaSpotify: FaSpotify,
    FaYoutube: FaYoutube,
    FaFacebook: FaFacebook,
    FaEnvelope: FaEnvelope,
    SiApplemusic: SiApplemusic
};

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="socials">
                    {SOCIALS.map((social, index) => {
                        const IconComponent = iconMap[social.icon];
                        return (
                            <a
                                key={index}
                                href={social.url}
                                className="social-link"
                                target={social.target}
                                rel='_blank'
                                aria-label={social.name}
                                title={social.name}
                            >
                                {IconComponent && <IconComponent/>}
                            </a>
                        );
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

