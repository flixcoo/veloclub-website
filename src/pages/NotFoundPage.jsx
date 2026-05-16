import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center text-center py-48 px-8 md:py-32 md:px-8">
            <div className="max-w-[1100px] mx-auto">
                <div className="max-w-[600px] mx-auto">
                    <h1 className="font-['Antique_Olive_Compact',sans-serif] text-[clamp(6rem,15vw,12rem)] font-black leading-[0.85] tracking-[-0.04em] text-[var(--accent-color)] mb-4">404</h1>
                    <p className="text-2xl font-black uppercase tracking-[2px] mb-6">Seite nicht gefunden</p>
                    <p className="text-lg text-gray-600 mb-12">
                        Die angeforderte Seite existiert nicht oder wurde verschoben.
                    </p>
                    <Link to="/" className="inline-block py-4 px-8 border border-[var(--text-color)] uppercase font-bold text-sm bg-transparent cursor-pointer hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;

