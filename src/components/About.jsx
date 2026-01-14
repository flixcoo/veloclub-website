import React from 'react';
import {IMAGES} from '../data/content';

const About = () => {
    const imageData = IMAGES.aboutImage;

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">Die Band</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            Zwischen Jazz-Gitarren, Post-Punk-Drums und einem Bass der beides connectet,
                            schaffen <strong>Véloclub</strong> sich Ihre eigenen Sound.
                            Da alle vier aus verschiedenen Musikrichtungen kommen, ist es der Band wichtig genau das in
                            ihrer Musik unterzubringen. Wie genau die musikalischen Elemente in die Musik einfließen,
                            ändert sich jedoch von Release zu Release. Véloclub entwickeln so wiedererkennbare Elemente,
                            die außerhalb von Genres für Stringenz in der Musik sorgen.
                            So spiegelt sich diese Ambivalänz auch in ihren Konzerten wieder. Véloclub spielen mal laut
                            in Clubs, leise in Café, gefühlvoll auf Festivals. Immer drauf bedacht, ihre Musik nochmals
                            weiter zu entwickeln und sich im eigenen Wandel treu zu bleiben.
                        </p>
                        <p>
                            Wer Véloclub wirklich sind, zeigt sich live. Alle vier spielen seit der Schulzeit zusammen
                            und haben über die Jahre ihren eigenen Umgang miteinander und mit Musik gefunden. Auf der
                            Bühne bleibt Raum für Veränderungen, ohne dass der Zusammenhalt verloren geht.
                            Ihre Konzerte sind keine Reproduktionen, direkt, mal laut, mal leise, immer nah dran.
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
                            <div className="placeholder about-img-placeholder">
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

