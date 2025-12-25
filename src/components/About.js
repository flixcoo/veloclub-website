import React from 'react';
import { IMAGE_CREDITS } from '../data/content';

const About = () => {
  const imageData = IMAGE_CREDITS.aboutImage;

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Die Band</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              <strong>Véloclub</strong> – das sind Jonas, Nils, Leo und Felix.
              Entstanden zwischen WG-Zimmern und Proberaum, bringen wir den Sound,
              der irgendwo zwischen Indie-Pop Melancholie und NNDW-Treibkraft liegt.
            </p>
            <p>
              Schlicht, direkt und manchmal ein bisschen laut. Wir machen Musik für
              die Fahrt durch die Nacht und den Morgen danach.
            </p>
          </div>
          <div className="about-image-wrapper">
            {imageData.image ? (
              <img
                src={imageData.image}
                alt="Véloclub Portrait"
                className="about-image"
              />
            ) : (
              <div className="about-img-placeholder">
                <span>PORTRAIT PLACEHOLDER</span>
              </div>
            )}
            {imageData.credit && (
              <p className="image-credit">Foto: <a href={imageData.link}>{imageData.credit}</a></p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

