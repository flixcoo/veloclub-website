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
        <section id="live" className="scroll-mt-20 py-8">
            <div className="mx-auto max-w-275 px-6">
                <h2 className="mb-12 text-5xl leading-[0.9] font-black tracking-[-1px] text-(--accent-color) uppercase">Live</h2>
                <div className="border-t-2 border-(--text-color)">
                    {upcomingGigs.length > 0 ? (
                        upcomingGigs.map((gig) => (
                            <div key={`${gig.date}-${gig.venue}`} className="grid grid-cols-1 items-baseline gap-4 border-b border-gray-200 px-4 py-6 transition-colors hover:bg-gray-100 md:grid-cols-[100px_200px_1.5fr_auto]">
                                <div className="font-black text-(--accent-color)">{gig.date}</div>

                                <div className="flex flex-col">
                                    {gig.city.trim() !== '' && <div className="text-xl font-semibold uppercase">{gig.city}</div>}
                                    {gig.venue.trim() !== '' && <span className="mt-1 block text-sm font-normal text-gray-600">{gig.venue}</span>}
                                </div>

                                <div className="mt-2 self-start text-sm font-semibold text-gray-500 md:mt-0 md:self-center">
                                    {gig.description}
                                </div>

                                <div className="flex justify-end md:justify-self-end">
                                    {gig.button && (
                                        gig.button.url?.trim() ? (
                                            <a
                                                href={gig.button.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block w-full min-w-40 cursor-pointer border border-(--text-color) bg-white px-10 py-3 text-center text-xs font-black whitespace-nowrap uppercase transition-all duration-300 hover:bg-(--text-color) hover:text-(--bg-color)"
                                            >
                                                {gig.button.text || 'Tickets'}
                                            </a>
                                        ) : (
                                            <button
                                                type="button"
                                                disabled
                                                aria-disabled="true"
                                                className="inline-block w-full min-w-40 cursor-not-allowed border border-gray-200 bg-white px-10 py-3 text-center text-xs font-black whitespace-nowrap text-gray-300 uppercase"
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
                            <a href={instagramUrl} className="underline! transition-colors hover:text-(--accent-color)">Instagramseite</a> vorbei
                            :)
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Live;
