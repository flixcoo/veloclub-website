import React from 'react';
import { IMAGE_CREDITS } from '../data/content';

const Hero = () => {
  const heroImageData = IMAGE_CREDITS.heroImage;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>véloclub</h1>
          <p className="hero-sub">Indie / NNDW &bull; Braunschweig</p>
        </div>
        <div className="hero-image-wrapper">
          {heroImageData.image ? (
            <img
              src={heroImageData.image}
              alt="Véloclub Band"
              className="hero-image"
            />
          ) : (
            <div className="hero-placeholder">
              <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
            </div>
          )}
          {heroImageData.credit && (
            <p className="image-credit">{heroImageData.credit}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

