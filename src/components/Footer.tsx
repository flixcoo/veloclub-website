import {Link} from 'react-router-dom';
import {FOOTER_LINKS} from '../data/content';

const Footer = () => {
    return (
        <footer id="contact"
                className="font-['Antique_Olive_Std',sans-serif] py-8 text-center mt-16 relative before:content-[''] before:absolute before:top-0 before:left-16 before:right-16 before:border-t before:border-(--text-color)">
            <div className="max-w-275 mx-auto px-6">
                <div className="flex justify-center gap-8 flex-wrap mb-8">
                    {FOOTER_LINKS.map((social, index) => {
                        const IconComponent = social.icon;

                        if (!social.url) {
                            return null;
                        }

                        return (
                            <a
                                key={index}
                                href={social.url}
                                className="text-2xl font-black uppercase hover:text-(--accent-color) hover:underline! transition-colors"
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
                <div className="text-xs text-gray-500 flex items-center flex-col gap-1">
                    {/* Design flag*/}
                    <span>Designed & developed by&nbsp;
                        <a href="https://felixkirchner.de" target="_blank" rel="noopener noreferrer"
                           className="text-(--text-color) underline! hover:text-(--accent-color) transition-colors">Felix Kirchner</a>.
                    </span>

                    {/* Legal & Privacy */}
                    <div className={"flex items-center gap-4"}>
                        <Link to="/impressum"
                              className="text-(--text-color) hover:text-(--accent-color) underline transition-colors">Impressum</Link>
                        <Link to="/datenschutz"
                              className="text-(--text-color) underline! hover:text-(--accent-color) transition-colors">Datenschutz</Link>
                    </div>

                    {/* Copyright */}
                    <span className={"mt-2"}>&copy; 2023 - {new Date().getFullYear()} Véloclub</span>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
