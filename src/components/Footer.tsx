import {Link} from 'react-router-dom';
import {FOOTER_LINKS} from '../data/content';

const Footer = () => {
    return (
        <footer id="contact"
                className="relative mt-16 py-8 text-center font-['Antique_Olive_Std',sans-serif] before:absolute before:inset-x-16 before:top-0 before:border-t before:border-(--text-color) before:content-['']">
            <div className="mx-auto max-w-275 px-6">
                <div className="mb-8 flex flex-wrap justify-center gap-8">
                    {FOOTER_LINKS.map((social, index) => {
                        const IconComponent = social.icon;

                        if (!social.url) {
                            return null;
                        }

                        return (
                            <a
                                key={index}
                                href={social.url}
                                className="text-2xl font-black uppercase transition-colors hover:text-(--accent-color) hover:underline!"
                                target={'_blank'}
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                title={social.name}
                            >
                                {IconComponent && <IconComponent/>}
                            </a>
                        );
                    })}
                </div>
                <div className="flex flex-col items-center gap-1 text-xs text-gray-500">
                    {/* Design flag*/}
                    <span>Designed & developed by&nbsp;
                        <a href="https://felixkirchner.de" target="_blank" rel="noopener noreferrer"
                           className="text-(--text-color) underline! transition-colors hover:text-(--accent-color)">Felix Kirchner</a>.
                    </span>

                    {/* Legal & Privacy */}
                    <div className={"flex items-center gap-4"}>
                        <Link to="/impressum"
                              className="text-(--text-color) underline transition-colors hover:text-(--accent-color)">Impressum</Link>
                        <Link to="/datenschutz"
                              className="text-(--text-color) underline! transition-colors hover:text-(--accent-color)">Datenschutz</Link>
                    </div>

                    {/* Copyright */}
                    <span className={"mt-2"}>&copy; 2023 - {new Date().getFullYear()} Véloclub</span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
