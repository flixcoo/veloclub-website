import React from 'react';
import {IMAGES, IS_EP_RELEASE} from '../data/content';

const Hero = () => {
    const imageData = IMAGES.heroImage;

    const releaseLink = 'https://ffm.to/gefuehle-an-gefuehle-aus'
    const creditLink = 'https://www.instagram.com/atelier.teufel/'

    return (
        <section className="min-h-[80vh] flex items-center justify-center text-center pt-[120px]">
            <div className="max-w-[1100px] mx-auto px-6">
                <div className="mb-8">
                    <h1 className="font-['Antique_Olive_Compact',sans-serif] text-[clamp(3.5rem,12vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] mb-4">véloclub</h1>
                    <p className="font-['Inter',sans-serif] text-xl font-normal text-[var(--accent-color)] mb-12 uppercase tracking-[2px]">Indie / NNDW &bull; Leipzig</p>
                </div>
                {IS_EP_RELEASE ?
                    (
                        <div className="pt-[80px]">
                            <div className="flex flex-col items-center justify-center -mt-20 space-y-4">
                                <div className="flex flex-col items-center">
                                    <a href={releaseLink} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/ep-cover.webp"
                                             className="w-200 shadow-xl shadow-black/20 hover:shadow-black/30 hover:scale-105 transition-all duration-500 ease-in-out"
                                             alt="Das Cover Artwork der EP Gefühle an, Gefühle aus">
                                        </img>
                                    </a>
                                    <div className="flex flex-col items-end w-full pt-2">
                                        <span className="text-xs text-gray-400">Artwork:&nbsp;
                                            <a href={creditLink}>
                                                <span className="hover:underline!">David Schleiermann</span>
                                            </a>
                                        </span>
                                    </div>
                                </div>

                                <h2 className="text-center w-fit text-xl md:text-3xl font-bold text-[var(--text-color)]">Gefühle an, Gefühle aus</h2>
                                <a href={releaseLink} target="_blank" rel="noopener noreferrer">
                                    <span className="w-fit text-base md:text-lg text-[var(--text-color)] underline! hover:text-[var(--accent-color)] transition-colors">
                                        Hier anhören
                                    </span>
                                </a>
                            </div>
                        </div>
                    ) :
                    <div className="w-full max-w-[900px] mx-auto overflow-hidden">
                        {imageData.image ? (
                            <img
                                src={imageData.image}
                                alt="Véloclub Band"
                                className="w-full h-auto max-w-full block object-cover"
                            />
                        ) : (
                            <div className="w-full bg-[var(--accent-color)] opacity-80 text-white font-bold flex items-center justify-center h-[50vh]">
                                <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
                            </div>
                        )}
                        {imageData.credit && (
                            <p className="text-xs text-gray-500 mt-2 text-right">
                                Foto: <a href={imageData.url} className="text-gray-500 hover:underline! hover:text-[var(--accent-color)] transition-all duration-300">{imageData.credit}</a>
                            </p>
                        )}
                    </div>}
            </div>

        </section>
    );
};

export default Hero;

