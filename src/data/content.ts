import { FaDeezer, FaFacebook, FaInstagram, FaSoundcloud, FaSpotify, FaTiktok, FaTree, FaYoutube } from 'react-icons/fa';
import { SiAmazonmusic, SiApplemusic, SiTidal, SiYoutubemusic } from 'react-icons/si';
import {LabelLink, IconLink, LiveDate, MusicLinks, Images} from "./types";

export const LIVE_DATES: LiveDate[] = [
    {
        date: '05.06.2026',
        city: 'Leipzig',
        venue: 'Stadtfest Leipzig',
        description: '18.45 Uhr, Marktplatzbühne',
        button: {
            url: 'https://leipzigerstadtfest.de/',
            text: 'Info',
        },
        activate: true,
    },
    {
        date: '10.07.2026',
        city: 'Flensburg',
        venue: 'Tableau Kulturcafé',
        description: '',
        button: {
            url: 'https://www.instagram.com/tableau_kulturcafe/',
            text: 'Info',
        },
        activate: false,
    },
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

export const MUSIC_LINKS: MusicLinks = {
    spotifyEmbed: 'https://open.spotify.com/embed/artist/2ATI9IAeXPE31HKReWj40a?theme=0',
    appleMusicEmbed: 'https://embed.music.apple.com/de/album/der-unwissende-single/1877074594',
    youtubeEmbed: '',
};

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

const releaseDate = new Date(2026, 6, 5, 0, 0);
const today = new Date();

export const releaseUrl = 'https://ffm.to/gefuehle-an-gefuehle-aus';
export const IS_EP_RELEASE = today >= releaseDate;
