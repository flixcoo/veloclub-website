import React from 'react';
import {CONTACT_LINKS} from '../data/content';
import EmailObfuscator from '../utils/EmailObfuscator.jsx';

const Contact = () => {
    return (
        <section id="kontakt" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Kontakt</h2>
                <div className="contact-grid">
                    {CONTACT_LINKS.map((contact, index) => (
                        <div key={index} className="contact-item">
                            {contact.mail ? (
                                <EmailObfuscator
                                    email={contact.mail}
                                    className="btn btn-contact"
                                >
                                    {contact.label}
                                </EmailObfuscator>
                            ) : (
                                <a
                                    href={contact.url}
                                    className="btn btn-contact"
                                    target={contact.url.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    {contact.label}
                                </a>
                            )}
                            {contact.description && (
                                <p className="contact-description">{contact.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;

