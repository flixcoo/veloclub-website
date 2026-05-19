import { CONTACT_LINKS } from '../data/content';
import EmailObfuscator from '../utils/EmailObfuscator';

const Contact = () => {
    return (
        <section id="kontakt" className="py-8 scroll-mt-20">
            <div className="max-w-[1100px] mx-auto px-6">
                <h2 className="text-5xl font-black uppercase text-[var(--accent-color)] mb-12 leading-[0.9] tracking-[-1px]">Kontakt</h2>
                <div className="flex flex-row justify-between gap-6 mt-8 flex-wrap">
                    {CONTACT_LINKS.map((contact, index) => (
                        <div key={index} className="flex flex-1 min-w-[200px]">
                            {contact.mail ? (
                                <EmailObfuscator
                                    email={contact.mail}
                                    className="inline-block py-4 px-8 border border-[var(--text-color)] uppercase font-black text-sm bg-transparent cursor-pointer w-full text-center md:text-start hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300"
                                >
                                    {contact.label}
                                </EmailObfuscator>
                            ) : contact.url ? (
                                <a
                                    href={contact.url}
                                    className="inline-block py-4 px-8 border border-[var(--text-color)] uppercase font-black text-sm bg-transparent cursor-pointer w-full text-center md:text-start hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300"
                                    target={contact.url.startsWith('http') ? '_blank' : '_self'}
                                    rel={contact.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    {contact.label}
                                </a>
                            ) : null}
                            {contact.description && <p className="hidden">{contact.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
