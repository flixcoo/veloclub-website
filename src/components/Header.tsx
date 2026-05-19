import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <header className="fixed top-0 w-full py-6 bg-white z-[100]">
            <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    className="font-['Antique_Olive_Compact',sans-serif] font-normal text-4xl tracking-[2px] text-[var(--text-color)] z-[101]"
                    onClick={() => setMobileMenuOpen(false)}
                >
                    véloclub
                </Link>

                <nav className="hidden md:flex">
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="ml-8 text-md font-semibold uppercase hover:text-[var(--accent-color)] transition-colors">Band</a>
                    <a href="#live" onClick={(e) => handleNavClick(e, '#live')} className="ml-8 text-md font-semibold uppercase hover:text-[var(--accent-color)] transition-colors">Live</a>
                    <a href="#music" onClick={(e) => handleNavClick(e, '#music')} className="ml-8 text-md font-semibold uppercase hover:text-[var(--accent-color)] transition-colors">Musik</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="ml-8 text-md font-semibold uppercase hover:text-[var(--accent-color)] transition-colors">Kontakt</a>
                </nav>

                <button
                    className={`md:hidden flex flex-col justify-around w-[30px] h-[25px] bg-transparent border-none cursor-pointer p-0 z-[101] ${mobileMenuOpen ? '[&>span:nth-child(1)]:rotate-45 [&>span:nth-child(1)]:translate-x-[5px] [&>span:nth-child(1)]:translate-y-[5px] [&>span:nth-child(2)]:opacity-0 [&>span:nth-child(3)]:-rotate-45 [&>span:nth-child(3)]:translate-x-[7px] [&>span:nth-child(3)]:-translate-y-[7px]' : ''}`}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                    type="button"
                >
                    <span className="w-[30px] h-[3px] bg-[var(--text-color)] rounded-[3px] transition-all duration-300 origin-center"></span>
                    <span className="w-[30px] h-[3px] bg-[var(--text-color)] rounded-[3px] transition-all duration-300 origin-center"></span>
                    <span className="w-[30px] h-[3px] bg-[var(--text-color)] rounded-[3px] transition-all duration-300 origin-center"></span>
                </button>

                <nav className={`md:hidden fixed top-0 left-0 w-full h-screen bg-[var(--bg-color)] flex flex-col justify-center items-center gap-8 transition-transform duration-300 ease-in-out z-[100] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="text-2xl font-semibold uppercase text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">Band</a>
                    <a href="#live" onClick={(e) => handleNavClick(e, '#live')} className="text-2xl font-semibold uppercase text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">Live</a>
                    <a href="#music" onClick={(e) => handleNavClick(e, '#music')} className="text-2xl font-semibold uppercase text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">Musik</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="text-2xl font-semibold uppercase text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
