import React from 'react';
import {LIVE_DATES, FOOTER_LINKS} from '../data/content';

const Live = () => {
    // Helper function to parse date strings in "DD.MM.YYYY" format
    const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    // Upcoming gigs sorted in ascending order
    const upcomingGigs = LIVE_DATES
        .filter(gig => {
            const gigDate = parseDate(gig.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return gig.activate && gigDate >= today;
        })
        .sort((a, b) => {
            return parseDate(a.date) - parseDate(b.date);
        });

    return (
        <section id="live" className="section">
            <div className="container">
                <h2 className="section-title">Live</h2>
                <div className="tour-list">
                    {upcomingGigs.length > 0 ? (
                        upcomingGigs.map((gig) => (
                            <div key={`${gig.date}-${gig.venue}`} className="tour-row">
                                <div className="tour-date">{gig.date}</div>
                                <div className="tour-info">
                                    <div className="tour-loc">{gig.city}</div>
                                    <span className="tour-venue">{gig.venue}</span>
                                </div>
                                <div className="tour-description">
                                    {gig.description || ''}
                                </div>
                                <div className="tour-action">
                                    {gig.button && (
                                        <a href={gig.button.url} target="_blank" rel="noopener noreferrer"
                                           className="btn">{gig.button.text || 'Tickets'}
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>
                            Aktuell gibt es keine Live-Termine. Für aktuelle Infos schau gerne auf unserer&nbsp;
                            <a href={FOOTER_LINKS.find((link) => link.url.includes('instagram')).url}>Instagramseite</a> vorbei
                            :)
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Live;

