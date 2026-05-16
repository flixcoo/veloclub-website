import React from 'react';
import {IMAGES, IS_EP_RELEASE} from '../data/content';

const Hero = () => {
    const imageData = IMAGES.heroImage;

    const releaseLink = 'https://ffm.to/gefuehle-an-gefuehle-aus'
    const creditLink = 'https://www.instagram.com/atelier.teufel/'

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>véloclub</h1>
                    <p className="hero-sub">Indie / NNDW &bull; Leipzig</p>
                </div>
                {IS_EP_RELEASE ?
                    (
                        <section id={'hero'} className="pt-[80px]">
                            <div className="flex flex-col items-center justify-center -mt-20 space-y-4">
                                <div className={'flex flex-col items-center'}>
                                    <a href={releaseLink} target="_blank" rel="noopener noreferrer">
                                        <img src="/images/ep-cover.webp"
                                             className={'w-200 shadow-xl shadow-black/20 hover:shadow-black/30 hover:scale-102 transition-all duration-500 ease-in-out'}
                                             alt={'Das Cover Artwork der EP "Gefühle an, Gefühle aus"'}>
                                        </img>
                                    </a>
                                    <div className={'flex flex-col items-end w-full pt-2'}>
                            <span className={'text-xs text-gray-400'}>Artwork:&nbsp;
                                <a href={creditLink}>
                                    <span className={'hover:underline'}>David Schleiermann</span>
                                </a>
                            </span>
                                    </div>
                                </div>

                                <h2 className={'text-center w-fit md:text-3xl font-bold text-[var(--text-color)]'}>Gefühle
                                    an,
                                    Gefühle aus</h2>
                                <a href={releaseLink} target="_blank" rel="noopener noreferrer">
                        <span
                            className={'w-fit md:text-lg text-[var(--text-color)] underline hover:text-[var(--accent-color)] transition-colors'}>
                            Hier anhören
                        </span>
                                </a>
                            </div>
                        </section>
                    ) :
                    <div className="hero-image-wrapper">
                        {imageData.image ? (
                            <img
                                src={imageData.image}
                                alt="Véloclub Band"
                                className="hero-image"
                            />
                        ) : (
                            <div className="placeholder hero-placeholder">
                                <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
                            </div>
                        )}
                        {imageData.credit && (
                            <p className="image-credit">Foto: <a href={imageData.url}>{imageData.credit}</a></p>
                        )}
                    </div>}
            </div>

        </section>
    );
};

export default Hero;

