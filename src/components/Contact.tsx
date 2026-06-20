import { CONTACT_LINKS } from '../data/content';
import EmailObfuscator from '../utils/EmailObfuscator';

const Contact = () => {
    return (
        <section id="kontakt" className="scroll-mt-20 py-8">
            <div className="mx-auto max-w-275 px-6">
                <h2 className="mb-12 text-5xl leading-[0.9] font-black tracking-[-1px] text-(--accent-color) uppercase">Kontakt</h2>
                <div className="mt-8 flex flex-row flex-wrap justify-between gap-6">
                    {CONTACT_LINKS.map((contact, index) => (
                        <div key={index} className="flex min-w-50 flex-1">
                            {contact.mail ? (
                                <EmailObfuscator
                                    email={contact.mail}
                                    className="inline-block w-full cursor-pointer border border-(--text-color) bg-transparent px-8 py-4 text-center text-sm font-black uppercase transition-all duration-300 hover:bg-(--text-color) hover:text-(--bg-color) md:text-start"
                                >
                                    {contact.label}
                                </EmailObfuscator>
                            ) : contact.url ? (
                                <a
                                    href={contact.url}
                                    className="inline-block w-full cursor-pointer border border-(--text-color) bg-transparent px-8 py-4 text-center text-sm font-black uppercase transition-all duration-300 hover:bg-(--text-color) hover:text-(--bg-color) md:text-start"
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
