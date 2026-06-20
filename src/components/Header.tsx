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
        <header className="sticky top-0 left-0 z-100 w-full bg-gray-50/90 py-6 backdrop-blur-sm">
            <div className="mx-auto flex max-w-275 items-center justify-end px-6 md:justify-between">
                {/* Bandname */}
                <div className="z-101 hidden items-center gap-3 md:flex">
                    <Link
                        to="/"
                        className="font-['Antique_Olive_Compact',sans-serif] text-4xl font-normal tracking-[2px] text-(--text-color)"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        véloclub
                    </Link>

                    {/* Local flag */}
                    {isLocalDev && (
                        <span className="align-start text-2xl font-semibold text-(--accent-color) underline">
                            local
                        </span>
                    )}
                </div>

                {/* desktop header links */}
                <nav className="hidden select-none md:flex">
                    <a href={"#about"} onClick={(e) => handleNavClick(e, '#about')} className="text-md ml-8 font-semibold uppercase transition-colors hover:text-(--accent-color)">Band</a>
                    <a href={"#live"} onClick={(e) => handleNavClick(e, '#live')} className="text-md ml-8 font-semibold uppercase transition-colors hover:text-(--accent-color)">Live</a>
                    <a href={"#music"} onClick={(e) => handleNavClick(e, '#music')} className="text-md ml-8 font-semibold uppercase transition-colors hover:text-(--accent-color)">Musik</a>
                    <a href={"#contact"} onClick={(e) => handleNavClick(e, '#contact')} className="text-md ml-8 font-semibold uppercase transition-colors hover:text-(--accent-color)">Kontakt</a>
                </nav>

                {/* mobile hamburger button */}
                <button
                    className="relative z-101 h-5.25 w-7.5 cursor-pointer border-none bg-transparent p-0 md:hidden"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span className={`absolute left-0 h-0.75 w-7.5 origin-center rounded-[3px] bg-(--text-color) transition-all duration-300 ${mobileMenuOpen ? 'top-2.25 rotate-45' : 'top-0'}`}/>
                    <span className={`absolute top-2.25 left-0 h-0.75 w-7.5 origin-center rounded-[3px] bg-(--text-color) transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}/>
                    <span className={`absolute left-0 h-0.75 w-7.5 origin-center rounded-[3px] bg-(--text-color) transition-all duration-300 ${mobileMenuOpen ? 'top-2.25 -rotate-45' : 'top-4.5'}`}/>
                </button>

                {/* menu entrys */}
                <nav className={`fixed top-0 left-0 z-100 flex h-screen w-full flex-col items-center justify-center gap-8 bg-gray-50 transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a href={"#about"} onClick={(e) => handleNavClick(e, '#about')} className="text-2xl font-semibold text-(--text-color) uppercase transition-colors hover:text-(--accent-color)">Band</a>
                    <a href={"#live"} onClick={(e) => handleNavClick(e, '#live')} className="text-2xl font-semibold text-(--text-color) uppercase transition-colors hover:text-(--accent-color)">Live</a>
                    <a href={"#music"} onClick={(e) => handleNavClick(e, '#music')} className="text-2xl font-semibold text-(--text-color) uppercase transition-colors hover:text-(--accent-color)">Musik</a>
                    <a href={"#contact"} onClick={(e) => handleNavClick(e, '#contact')} className="text-2xl font-semibold text-(--text-color) uppercase transition-colors hover:text-(--accent-color)">Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
