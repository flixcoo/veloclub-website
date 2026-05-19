import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../data/content';
import EmailObfuscator from '../utils/EmailObfuscator';

const Footer = () => {
    return (
        <footer id="contact" className="font-['Antique_Olive_Std',sans-serif] py-8 text-center mt-16 relative before:content-[''] before:absolute before:top-0 before:left-16 before:right-16 before:border-t before:border-[var(--text-color)]">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="flex justify-center gap-8 flex-wrap mb-8">
                    {FOOTER_LINKS.map((social, index) => {
                        const IconComponent = social.icon;

                        if (social.mail) {
                            return (
                                <EmailObfuscator
                                    key={index}
                                    email={social.mail}
                                    className="text-2xl font-black uppercase hover:text-[var(--accent-color)] hover:underline! transition-colors"
                                    aria-label={social.name}
                                    title={social.name}
                                >
                                    {IconComponent && <IconComponent />}
                                </EmailObfuscator>
                            );
                        }

                        if (!social.url) {
                            return null;
                        }

                        return (
                            <a
                                key={index}
                                href={social.url}
                                className="text-2xl font-black uppercase hover:text-[var(--accent-color)] hover:underline! transition-colors"
                                target={social.target}
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                            >
                                {IconComponent && <IconComponent />}
                            </a>
                        );
                    })}
                </div>
                <div className="text-xs text-gray-500">
                    <p>
                        &copy; 2023 - {new Date().getFullYear()} Véloclub
                        <br />
                        <Link to="/impressum" className="text-[var(--text-color)] hover:text-[var(--accent-color)] underline transition-colors">Impressum</Link>
                        &nbsp;&nbsp;&nbsp;
                        <Link to="/datenschutz" className="text-[var(--text-color)] underline! hover:text-[var(--accent-color)] transition-colors">Datenschutz</Link>
                    </p>
                    <p className="mt-2">
                        Designed & developed by&nbsp;
                        <a href="https://felixkirchner.de" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)] underline! hover:text-[var(--accent-color)] transition-colors">Felix Kirchner</a>.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
