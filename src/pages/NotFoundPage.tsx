import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-8 py-48 text-center md:px-8 md:py-32">
            <div className="mx-auto max-w-275">
                <div className="mx-auto max-w-150">
                    <h1 className="mb-4 font-['Antique_Olive_Compact',sans-serif] text-[clamp(6rem,15vw,12rem)] leading-[0.85] font-black tracking-[-0.04em] text-(--accent-color)">404</h1>
                    <p className="mb-6 text-2xl font-black tracking-[2px] uppercase">Seite nicht gefunden</p>
                    <p className="mb-12 text-lg text-gray-600">
                        Die angeforderte Seite existiert nicht oder wurde verschoben.
                    </p>
                    <Link to="/" className="inline-block cursor-pointer border border-(--text-color) bg-transparent px-8 py-4 text-sm font-bold uppercase transition-all duration-300 hover:bg-(--text-color) hover:text-(--bg-color)">
                        Zurück zur Startseite
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
