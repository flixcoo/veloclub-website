import {IMAGES} from '../data/content';

const Hero = () => {
    const heroImg = IMAGES.heroImage;

    return (
        <section className="flex items-center justify-center pt-30 text-center">
            <div className="mx-auto max-w-275 px-6">
                <div className="mb-8">
                    <h1 className="mb-4 font-['Antique_Olive_Compact',sans-serif] text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] font-black tracking-[-0.04em]">
                        véloclub
                    </h1>
                    <p className="mb-12 font-['Inter',sans-serif] text-xl font-normal tracking-[2px] text-orange-600 uppercase">
                        Alternative / NNDW &bull; Leipzig
                    </p>
                </div>

                {/* Hero Image */}
                <div className="mx-auto w-full max-w-225 overflow-hidden">
                    {heroImg.image ? (
                        <img
                            src={heroImg.image}
                            alt="Véloclub Band"
                            className="pointer-events-none block h-auto w-full max-w-full object-cover"
                        />
                    ) : (
                        <div className="flex h-[50vh] w-full items-center justify-center bg-orange-600 font-bold text-white opacity-80">
                            <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
                        </div>
                    )}

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
