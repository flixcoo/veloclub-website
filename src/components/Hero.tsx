import {IMAGES} from '../data/content';

const Hero = () => {
    const heroImg = IMAGES.heroImage;

    return (
        <section className="flex items-center justify-center pt-30 text-center">
            <div className="mx-auto max-w-275 px-6">
                <div className="mb-8">
                    <h1 className="mb-4 font-['Antique_Olive_Compact',sans-serif] text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] font-black tracking-[-0.04em] lowercase">
                        Véloclub
                    </h1>
                    <p className="mb-12 font-['Inter',sans-serif] text-xl font-normal tracking-[2px] text-orange-600 uppercase">
                        Alternative / NNDW &bull; Leipzig
                    </p>
                </div>

                {/* Hero Image */}
                <div className="mx-auto w-full max-w-225 overflow-hidden">
                    <img
                        src={heroImg.image}
                        alt="Véloclub Band"
                        fetchPriority={'high'}
                        className="pointer-events-none block h-auto w-full max-w-full object-cover"
                    />

                    {/* Credit */}
                    {heroImg.credit && (
                        <p className="mt-2 text-right text-xs text-gray-500">
                            Foto:{' '}
                            <a
                                href={heroImg.url ?? '#'}
                                className="text-gray-500 transition-all duration-300 hover:text-orange-600 hover:underline!"
                            >
                                {heroImg.credit}
                            </a>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
