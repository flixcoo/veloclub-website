import React from 'react';
import { IMAGE_CREDITS } from '../data/content';

const Hero = () => {
  const imageData = IMAGE_CREDITS.heroImage;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>véloclub</h1>
          <p className="hero-sub">Indie / NNDW &bull; Braunschweig</p>
        </div>
        <div className="hero-image-wrapper">
          {imageData.image ? (
            <img
              src={imageData.image}
              alt="Véloclub Band"
              className="hero-image"
            />
          ) : (
            <div className="hero-placeholder">
              <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
            </div>
          )}
          {imageData.credit && (
              <p className="image-credit">Foto: <a href={imageData.link}>{imageData.credit}</a></p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;

