import {IMAGES, IS_EP_RELEASE, releaseUrl} from '../data/content';

const Hero = () => {
    const heroImg = IMAGES.heroImage;
    const epImg = IMAGES.epImage;

    return (
        <section className="flex items-center justify-center text-center pt-30">
            <div className="max-w-275 mx-auto px-6">
                <div className="mb-8">
                    <h1 className="font-['Antique_Olive_Compact',sans-serif] text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] mb-4">véloclub</h1>
                    <p className="font-['Inter',sans-serif] text-xl font-normal text-(--accent-color) mb-12 uppercase tracking-[2px]">Indie / NNDW &bull; Leipzig</p>
                </div>


                {IS_EP_RELEASE ? (

                    /* EP Artwork */
                    <div className="pt-20">
                        <div className="flex flex-col items-center justify-center -mt-20 space-y-4">
                            <div className="flex flex-col items-center">
                                <a href={releaseUrl} target="_blank" rel="noopener noreferrer" className={'hover:shadow-black/30 hover:scale-105 transition-all duration-500 ease-in-out'}>
                                    <img
                                        src="/images/ep-cover.webp"
                                        className="w-200 shadow-xl shadow-black/20 pointer-events-none"
                                        alt="Das Cover Artwork der EP Gefühle an, Gefühle aus"
                                    />
                                </a>
                                <div className="flex flex-col items-end w-full pt-2">
                                    <span className="text-xs text-gray-400">Artwork:&nbsp;
                                        <a href={epImg.url ?? '#'} className="hover:text-(--accent-color) transition-colors">
                                            <span className="hover:underline!">{epImg.credit}</span>
                                        </a>
                                    </span>
                                </div>
                            </div>

                            <h2 className="text-center w-fit text-xl md:text-3xl font-bold text-(--text-color)">Gefühle an, Gefühle aus</h2>

                            {/* Release Link */}
                            <a href={releaseUrl} target="_blank" rel="noopener noreferrer">
                                <span className="w-fit text-base md:text-lg text-(--text-color) underline! hover:text-(--accent-color) transition-colors">
                                    Hier anhören
                                </span>
                            </a>
                        </div>
                    </div>
                ) : (
                    /*Hero Image */
                    <div className="w-full max-w-225 mx-auto overflow-hidden">
                        {heroImg.image ? (
                            <img
                                src={heroImg.image}
                                alt="Véloclub Band"
                                className="w-full pointer-events-none h-auto max-w-full block object-cover"
                            />
                        ) : (
                            <div className="w-full bg-(--accent-color) opacity-80 text-white font-bold flex items-center justify-center h-[50vh]">
                                <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
                            </div>
                        )}

                        {/* Credit */}
                        {heroImg.credit && (
                            <p className="text-xs text-gray-500 mt-2 text-right">
                                Foto: <a href={heroImg.url ?? '#'} className="text-gray-500 hover:underline! hover:text-(--accent-color) transition-all duration-300">{heroImg.credit}</a>
                            </p>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Hero;
