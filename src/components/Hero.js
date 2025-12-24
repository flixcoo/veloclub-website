import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>véloclub</h1>
          <p className="hero-sub">Indie / NNDW &bull; Braunschweig</p>
        </div>
        {/* PLATZHALTER BILD: Ersetze das div später durch <img src="..." /> */}
        <div className="hero-placeholder">
          <span>BAND IMAGE PLACEHOLDER (1920x1080)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

