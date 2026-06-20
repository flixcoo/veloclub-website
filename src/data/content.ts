import { FaDeezer, FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaTiktok, FaTree, FaYoutube } from 'react-icons/fa';
import { SiAmazonmusic, SiApplemusic, SiTidal, SiYoutubemusic } from 'react-icons/si';
import {LabelLink, IconLink, LiveDate, Images} from "./types";

export const LIVE_DATES: LiveDate[] = [
    {
        date: '29.08.2026',
        city: 'Braunschweig',
        venue: 'Organic Beats Festival',
        description: '',
        button: {
            text: 'Tickets',
        },
        activate: true,
    },
    {
        date: '18.09.2026',
        city: 'Oldenburg',
        venue: 'umBAUbar',
        description: 'Support: tba',
        button: {
            text: 'Tickets',
            url: 'https://rausgegangen.de/events/konzert-velo-club-0/'
        },
        activate: true,
    },
];

export const FOOTER_LINKS: IconLink[] = [
    {
        name: 'Instagram',
        url: 'https://instagram.com/veloclubband',
        icon: FaInstagram,
    },
    {
        name: 'TikTok',
        url: 'https://tiktok.com/@veloclubband',
        icon: FaTiktok,
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@veloclubband',
        icon: FaYoutube,
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/veloclubmusik',
        icon: FaFacebook,
    },
    {
        name: 'Linktree',
        url: 'https://linktree.veloclubband.de',
        icon: FaTree,
    },
];

export const MUSIC_PLATFORMS: IconLink[] = [
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/artist/2ATI9IAeXPE31HKReWj40a',
        icon: FaSpotify,
    },
    {
        name: 'Apple Music',
        url: 'https://music.apple.com/de/artist/v%C3%A9loclub/1706116595',
        icon: SiApplemusic,
    },
    {
        name: 'Deezer',
        url: 'https://www.deezer.com/de/artist/229236025',
        icon: FaDeezer,
    },
    {
        name: 'Tidal',
        url: 'https://tidal.com/artist/41872824',
        icon: SiTidal,
    },
    {
        name: 'Amazon Music',
        url: 'https://music.amazon.de/artists/B0CH91199R/v%C3%A9loclub',
        icon: SiAmazonmusic,
    },
    {
        name: 'Youtube Music',
        url: 'https://music.youtube.com/channel/UCQEMKjV88u8Qrxu__8mpfeA',
        icon: SiYoutubemusic,
    },
    {
        name: 'Soundcloud',
        url: 'https://soundcloud.com/veloclubband',
        icon: FaSoundcloud,
    },
];

export const SPOTIFY_EMBED_URL: string = 'https://open.spotify.com/embed/artist/2ATI9IAeXPE31HKReWj40a?theme=0';
export const APPLE_MUSIC_EMBED_URL: string = 'https://embed.music.apple.com/de/album/gef%C3%BChle-an-gef%C3%BChle-aus/6770928701';
export const YOUTUBE_EMBED_URL: string = 'https://www.youtube.com/embed/mW8woxPvl-I'

export const CONTACT_LINKS: LabelLink[] = [
    {
        label: 'Booking',
        mail: 'booking@veloclubband.de',
    },
    {
        label: 'Kontakt',
        mail: 'hi@veloclubband.de',
    },
    {
        label: 'Pressekit',
        url: 'https://pressekit.veloclubband.de',
    },
];

export const IMAGES: Images = {
    epImage: {
        image: '/images/ep-cover.webp',
        credit: 'David Schleiermann',
        url: 'https://www.instagram.com/atelier.teufel2/',

    },
    heroImage: {
        image: '/images/hero.webp',
        credit: 'Mathis Kirchner',
        url: 'https://mathiskirchner.de/',
    },
    aboutImage: {
        image: '/images/portrait.webp',
        credit: 'Mathis Kirchner',
        url: 'https://mathiskirchner.de/',
    },
};

const releaseDate = new Date(2026, 5, 5, 0, 0);
const today = new Date();

export const releaseUrl = 'https://push.fm/fl/p4vwfpwf';
export const IS_EP_RELEASE = today >= releaseDate;
