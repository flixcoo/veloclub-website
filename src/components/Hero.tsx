import {IMAGES, IS_EP_RELEASE, releaseUrl} from '../data/content';

const Hero = () => {
    const heroImg = IMAGES.heroImage;
    const epImg = IMAGES.epImage;

    return (
        <section className="flex items-center justify-center pt-30 text-center">
            <div className="mx-auto max-w-275 px-6">
                <div className="mb-8">
                    <h1 className="mb-4 font-['Antique_Olive_Compact',sans-serif] text-[clamp(3.5rem,12vw,9rem)] leading-[0.85] font-black tracking-[-0.04em]">véloclub</h1>
                    <p className="mb-12 font-['Inter',sans-serif] text-xl font-normal tracking-[2px] text-(--accent-color) uppercase">Indie / NNDW &bull; Leipzig</p>
                </div>


                {IS_EP_RELEASE ? (

                    /* EP Artwork */
                    <div className="pt-20">
                        <div className="-mt-20 flex flex-col items-center justify-center space-y-4">
                            <div className="flex flex-col items-center">
                                <a href={releaseUrl} target="_blank" rel="noopener noreferrer" className={'transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-black/30'}>
                                    <img
                                        src="/images/ep-cover.webp"
                                        className="pointer-events-none w-200 shadow-xl shadow-black/20"
                                        alt="Das Cover Artwork der EP Gefühle an, Gefühle aus"
                                    />
                                </a>
                                <div className="flex w-full flex-col items-end pt-2">
                                    <span className="text-xs text-gray-400">Artwork:&nbsp;
                                        <a href={epImg.url ?? '#'} className="transition-colors hover:text-(--accent-color)">
                                            <span className="hover:underline!">{epImg.credit}</span>
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <h2 className="w-fit text-center text-xl font-bold text-(--text-color) md:text-3xl">gefühle an, gefühle aus</h2>

                            {/* Release Link */}
                            <a href={releaseUrl} target="_blank" rel="noopener noreferrer">
                                <span className="w-fit text-base text-(--text-color) underline! transition-colors hover:text-(--accent-color) md:text-lg">
                                    Hier anhören
                                </span>
                            </a>
                        </div>
                    </div>
                ) : (
                    /* Hero Image */
                    <div className="mx-auto w-full max-w-225 overflow-hidden">
                        {heroImg.image ? (
                            <img
                                src={heroImg.image}
                                alt="Véloclub Band"
                                className="pointer-events-none block h-auto w-full max-w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-[50vh] w-full items-center justify-center bg-(--accent-color) font-bold text-white opacity-80">
                                <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
                            </div>
                        )}

                        {/* Credit */}
                        {heroImg.credit && (
                            <p className="mt-2 text-right text-xs text-gray-500">
                                Foto: <a href={heroImg.url ?? '#'} className="text-gray-500 transition-all duration-300 hover:text-(--accent-color) hover:underline!">{heroImg.credit}</a>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
