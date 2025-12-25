import React from 'react';
import {LIVE_DATES} from '../data/content';

const Live = () => {
    return (
        <section id="live" className="section">
            <div className="container">
                <h2 className="section-title">Live Termine</h2>
                <div className="tour-list">
                    {LIVE_DATES.length > 0 ? (
                        LIVE_DATES.map((gig) => (
                            <div key={gig.id} className="tour-row">
                                <div className="tour-date">{gig.date}</div>
                                <div className="tour-info">
                                    <div className="tour-loc">{gig.city}</div>
                                    <span className="tour-venue">{gig.venue}</span>
                                </div>
                                <div className="tour-description">
                                    {gig.description || ''}
                                </div>
                                <div className="tour-action">
                                    <a href={gig.link} target="_blank" rel="noopener noreferrer"
                                       className="btn">{gig.buttonText || 'Tickets'}
                                    </a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Aktuell keine Termine. Schau auf Instagram vorbei!</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Live;

