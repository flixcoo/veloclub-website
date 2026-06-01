import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Vite flags this as true only in dev; hostname gate keeps it local-only.
    const isLocalDev =
        import.meta.env.DEV &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1');

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, anchor: string): void => {
        e.preventDefault();
        setMobileMenuOpen(false);

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.querySelector<HTMLElement>(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.querySelector<HTMLElement>(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    const toggleMobileMenu = (): void => {
        setMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="sticky top-0 left-0 w-full py-6 bg-gray-50/90 backdrop-blur-sm z-100">
            <div className="max-w-275 mx-auto px-6 flex justify-end md:justify-between items-center">
                {/* Bandname */}
                <div className="hidden md:flex items-center gap-3 z-101">
                    <Link
                        to="/"
                        className="font-['Antique_Olive_Compact',sans-serif] font-normal text-4xl tracking-[2px] text-(--text-color)"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        véloclub
                    </Link>

                    {/* Local flag */}
                    {isLocalDev && (
                        <span className="text-2xl font-semibold underline align-start text-(--accent-color)">
                            local
                        </span>
                    )}
                </div>

                {/* desktop header links */}
                <nav className="hidden md:flex select-none">
                    <a href={"#about"} onClick={(e) => handleNavClick(e, '#about')} className="ml-8 text-md font-semibold uppercase hover:text-(--accent-color) transition-colors">Band</a>
                    <a href={"#live"} onClick={(e) => handleNavClick(e, '#live')} className="ml-8 text-md font-semibold uppercase hover:text-(--accent-color) transition-colors">Live</a>
                    <a href={"#music"} onClick={(e) => handleNavClick(e, '#music')} className="ml-8 text-md font-semibold uppercase hover:text-(--accent-color) transition-colors">Musik</a>
                    <a href={"#contact"} onClick={(e) => handleNavClick(e, '#contact')} className="ml-8 text-md font-semibold uppercase hover:text-(--accent-color) transition-colors">Kontakt</a>
                </nav>

                {/* mobile hamburger button */}
                <button
                    className="md:hidden relative w-7.5 h-5.25 bg-transparent border-none cursor-pointer p-0 z-101"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span className={`absolute left-0 w-7.5 h-0.75 bg-(--text-color) rounded-[3px] origin-center transition-all duration-300 ${mobileMenuOpen ? 'top-2.25 rotate-45' : 'top-0'}`}/>
                    <span className={`absolute left-0 top-2.25 w-7.5 h-0.75 bg-(--text-color) rounded-[3px] origin-center transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}/>
                    <span className={`absolute left-0 w-7.5 h-0.75 bg-(--text-color) rounded-[3px] origin-center transition-all duration-300 ${mobileMenuOpen ? 'top-2.25 -rotate-45' : 'top-4.5'}`}/>
                </button>

                {/* menu entrys */}
                <nav className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-50 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out z-100 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a href={"#about"} onClick={(e) => handleNavClick(e, '#about')} className="text-2xl font-semibold uppercase text-(--text-color) hover:text-(--accent-color) transition-colors">Band</a>
                    <a href={"#live"} onClick={(e) => handleNavClick(e, '#live')} className="text-2xl font-semibold uppercase text-(--text-color) hover:text-(--accent-color) transition-colors">Live</a>
                    <a href={"#music"} onClick={(e) => handleNavClick(e, '#music')} className="text-2xl font-semibold uppercase text-(--text-color) hover:text-(--accent-color) transition-colors">Musik</a>
                    <a href={"#contact"} onClick={(e) => handleNavClick(e, '#contact')} className="text-2xl font-semibold uppercase text-(--text-color) hover:text-(--accent-color) transition-colors">Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
