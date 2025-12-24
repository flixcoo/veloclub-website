import React from 'react';
import {MUSIC_LINKS} from '../data/content';

const Music = () => {

  return (
    <section id="music" className="section">
      <div className="container">
        <h2 className="section-title">Musik</h2>
        <div className="music-grid">
          <div className="embed-container">
            {/* SPOTIFY */}
            <iframe
              style={{borderRadius: '0px'}}
              src={MUSIC_LINKS.spotifyEmbed}
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify"
            ></iframe>
          </div>
          <div className="embed-container apple-music-embed">
            {/* APPLE MUSIC - Top Tracks */}
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              frameBorder="0"
              height="450"
              style={{width:'100%', maxWidth:'660px', overflow:'hidden', background:'transparent'}}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src={MUSIC_LINKS.appleMusicEmbed}
              title="Apple Music"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;

