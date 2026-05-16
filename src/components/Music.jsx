import React from 'react';
import {MUSIC_LINKS, MUSIC_PLATFORMS} from '../data/content';

const Music = () => {

    return (
        <section id="music" className="py-8 scroll-mt-20">
            <div className="max-w-[1100px] mx-auto px-6">
                <h2 className="text-5xl font-black uppercase text-[var(--accent-color)] mb-12 leading-[0.9] tracking-[-1px]">Musik</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[450px] md:h-auto">
                        <iframe
                            className="rounded-none"
                            src={MUSIC_LINKS.spotifyEmbed}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            title="Spotify"
                        ></iframe>
                    </div>
                    <div className="md:h-auto outline-4 outline-[#FC3C44] rounded-lg overflow-hidden">
                        <iframe
                            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                            frameBorder="0"
                            height="450"
                            className="w-full max-w-[660px] overflow-hidden bg-transparent"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                            src={MUSIC_LINKS.appleMusicEmbed}
                            title="Apple Music"
                        />
                    </div>
                </div>
                {MUSIC_LINKS.youtubeEmbed && MUSIC_LINKS.youtubeEmbed.trim() > '' ? (
                    <div className="mt-8 md:mt-8 mx-auto w-full max-w-[800px] aspect-video">
                        <iframe
                            width="100%"
                            height="100%"
                            src={MUSIC_LINKS.youtubeEmbed}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            title="YouTube"
                            className="rounded-[20px]"
                        ></iframe>
                    </div>) : null}
                <div className="flex justify-center gap-x-24 gap-y-12 flex-wrap mt-12">
                    {MUSIC_PLATFORMS.map((platform, index) => {
                        const IconComponent = platform.icon;
                        return (
                            <a
                                key={index}
                                href={platform.url}
                                className="text-4xl font-black uppercase hover:text-[var(--accent-color)] hover:underline! transition-colors"
                                target={platform.target}
                                rel="noopener noreferrer"
                                aria-label={platform.name}
                                title={platform.name}
                            >
                                {IconComponent && <IconComponent/>}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Music;

