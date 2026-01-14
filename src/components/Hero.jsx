import React from 'react';
import {IMAGES} from '../data/content';

const Hero = () => {
    const imageData = IMAGES.heroImage;

    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>véloclub</h1>
                    <p className="hero-sub">Indie / NNDW &bull; Leipzig</p>
                </div>
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
                </div>
            </div>
        </section>
    );
};

export default Hero;

