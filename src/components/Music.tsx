import {SPOTIFY_EMBED_URL, APPLE_MUSIC_EMBED_URL, YOUTUBE_EMBED_URL, MUSIC_PLATFORMS} from '../data/content';

const Music = () => {
    return (
        <section id="music" className="py-8 scroll-mt-20">
            <div className="max-w-275 mx-auto px-6">
                <h2 className="text-5xl font-black uppercase text-(--accent-color) mb-12 leading-[0.9] tracking-[-1px]">Musik</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/*Spotify Top Tracks Embed*/}
                    <div className="h-112.5 md:h-auto">
                        <iframe
                            className="rounded-none"
                            src={SPOTIFY_EMBED_URL}
                            width="100%"
                            height="100%"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Spotify"
                        />
                    </div>

                    {/*Apple Music Embed*/}
                    <div className="md:h-auto -outline-offset-4 outline-4 outline-[#FC3C44] rounded-lg overflow-hidden">
                        <iframe
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            height="450"
                            className="w-full max-w-165 overflow-hidden bg-transparent"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            src={APPLE_MUSIC_EMBED_URL}
                            title="Apple Music"
                        />
                    </div>
                </div>

               {/* Youtube Video Embed */}
                {YOUTUBE_EMBED_URL && YOUTUBE_EMBED_URL.trim() !== '' ? (
                    <div className="mt-8 md:mt-8 mx-auto w-full max-w-200 aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={YOUTUBE_EMBED_URL}
                            title=" Véloclub - renn los // MITTINDRIN Live Sessions "
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            loading="lazy"
                            className="rounded-md sm:rounded-xl"
                        />
                    </div>
                ) : null}

                {/*Streaming services icons*/}
                <div className="flex justify-center gap-x-24 gap-y-12 flex-wrap mt-12">
                    {MUSIC_PLATFORMS.map((platform, index) => {
                        const IconComponent = platform.icon;
                        if (!platform.url) {
                            return null;
                        }
                        return (
                            <a
                                key={index}
                                href={platform.url}
                                className="text-4xl font-black uppercase hover:text-(--accent-color) hover:underline! transition-colors"
                                target={'_blank'}
                                rel="noopener noreferrer"
                                aria-label={platform.name}
                                title={platform.name}
                            >
                                {IconComponent && <IconComponent />}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Music;
