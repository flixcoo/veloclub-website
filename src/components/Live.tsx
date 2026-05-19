import { FOOTER_LINKS, LIVE_DATES } from '../data/content';
import type { LiveDate } from '../data/types';

const Live = () => {
    const parseDate = (dateStr: string): Date => {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
    };

    const upcomingGigs = LIVE_DATES
        .filter((gig: LiveDate) => {
            const gigDate = parseDate(gig.date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            return gig.activate && gigDate >= today;
        })
        .sort((a, b) => {
            return parseDate(a.date).getTime() - parseDate(b.date).getTime();
        });

    const instagramUrl = FOOTER_LINKS.find((link) => link.url?.includes('instagram'))?.url ?? '#';

    return (
        <section id="live" className="py-8 scroll-mt-20">
            <div className="max-w-[1100px] mx-auto px-6">
                <h2 className="text-5xl font-black uppercase text-[var(--accent-color)] mb-12 leading-[0.9] tracking-[-1px]">Live</h2>
                <div className="border-t-2 border-[var(--text-color)]">
                    {upcomingGigs.length > 0 ? (
                        upcomingGigs.map((gig) => (
                            <div key={`${gig.date}-${gig.venue}`} className="grid grid-cols-1 md:grid-cols-[100px_200px_1.5fr_auto] gap-4 py-6 px-4 border-b border-[var(--gray-light)] items-baseline hover:bg-gray-100 transition-colors">
                                <div className="font-black text-[var(--accent-color)]">{gig.date}</div>

                                <div className="flex flex-col">
                                    {gig.city.trim() !== '' && <div className="font-semibold uppercase text-xl">{gig.city}</div>}
                                    {gig.venue.trim() !== '' && <span className="block text-sm font-normal text-gray-600 mt-1">{gig.venue}</span>}
                                </div>

                                <div className="text-sm font-semibold self-start md:self-center text-gray-500 mt-2 md:mt-0">
                                    {gig.description}
                                </div>

                                <div className="flex justify-end md:justify-self-end">
                                    {gig.button && (
                                        gig.button.url?.trim() ? (
                                            <a
                                                href={gig.button.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block min-w-40 w-full py-3 px-10 border border-[var(--text-color)] text-center uppercase font-black text-xs bg-transparent cursor-pointer hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] transition-all duration-300 whitespace-nowrap"
                                            >
                                                {gig.button.text || 'Tickets'}
                                            </a>
                                        ) : (
                                            <button
                                                type="button"
                                                disabled
                                                aria-disabled="true"
                                                className="inline-block min-w-40 w-full py-3 px-10 border border-gray-200 text-center uppercase font-black text-xs bg-white text-gray-300 cursor-not-allowed whitespace-nowrap"
                                            >
                                                {gig.button.text || 'Tickets'}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="py-6">
                            Zurzeit gibt es keine Live-Termine. Für aktuelle Infos schau gerne auf unserer&nbsp;
                            <a href={instagramUrl} className="underline! hover:text-[var(--accent-color)] transition-colors">Instagramseite</a> vorbei
                            :)
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Live;
