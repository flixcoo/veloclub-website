import React from 'react';

const About = () => {
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
          <div className="about-img-placeholder">
            <span>PORTRAIT PLACEHOLDER</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

