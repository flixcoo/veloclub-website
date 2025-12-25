import React from 'react';
import {LIVE_DATES, SOCIALS} from '../data/content';

const Live = () => {
    // Sort dates chronologically (DD.MM.YYYY format)
    const sortedDates = [...LIVE_DATES].sort((a, b) => {
        const parseDate = (dateStr) => {
            const [day, month, year] = dateStr.split('.').map(Number);
            return new Date(year, month - 1, day);
        };
        return parseDate(a.date) - parseDate(b.date);
    });

    return (
        <section id="live" className="section">
            <div className="container">
                <h2 className="section-title">Live Termine</h2>
                <div className="tour-list">
                    {sortedDates.length > 0 ? (
                        sortedDates.map((gig) => (
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
                                    {gig.button  && (
                                        <a href={gig.button.link} target="_blank" rel="noopener noreferrer"
                                           className="btn">{gig.button.text || 'Tickets'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>
                            Aktuell gibt es keine Live-Termine. Für aktuelle Infos schau gerne auf unserer <a href={SOCIALS.at(0).url}>Instagramseite</a> vorbei :)
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Live;

