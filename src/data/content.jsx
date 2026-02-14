import {
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaFacebook,
    FaSoundcloud,
    FaSpotify,
    FaDeezer,
    FaTree
} from 'react-icons/fa';
import {SiAmazonmusic, SiApplemusic, SiTidal, SiYoutubemusic} from "react-icons/si";

/* List of all live dates displayed on the website
 * Used in: Live component to display tour dates
 *
 * `date`: Date in format 'DD.MM.YYYY' (required) <br>
 * `city`: City of the performance (required) <br>
 * `venue`: Name of the venue/location (required) <br>
 * `description`: Additional information about the event (optional) <br>
 * `button`: Object containing button details (optional) <br>
 * - `url`: URL for the button link <br>
 * - `text`: Text displayed on the button <br>
 * `activate`: Boolean to activate/deactivate the button (optional, default: false)
 */
export const LIVE_DATES = [
    {
        date: '20.03.2026',
        city: 'Braunschweig',
        venue: 'Etage Eins',
        description: 'MITTINDRIN Live Session',
        button: {
            text: 'Tickets',
            url: 'https://applaus.online-ticket.de/mittindrin-live-session-tickets-140.html#tour147',
        },
        activate: true,
    },
    {
        date: '05.06.2026',
        city: 'Leipzig',
        venue: 'Marktplatz',
        description: 'Stadtfest Leipzig',
        button: {
            url: 'https://leipzigerstadtfest.de/',
            text: 'Info'
        },
        activate: false,
    },
    {
        date: '18.04.2026',
        city: 'Oldenburg',
        venue: 'Umbaubar',
        description: 'Support für EASY EASY',
        button: {
            url: 'https://umbaubar.net/',
            text: 'Tickets'
        },
        activate: false,
    },
    {
        date: '21.02.2026',
        city: 'Magdeburg',
        venue: 'Festung Mark',
        description: 'Support für Deep in Moon',
        button: {
            url: 'https://shop.deepinmoon.de/products/heatwave-tour-2026-deep-in-moon-1',
            text: 'Tickets'
        },
        activate: true,
    },
    {
        date: '26.09.2026',
        city: 'Oldenburg',
        venue: 'Cadillac',
        description: 'Support: JoschY',
        button: {
            url: 'https://veloclubband.de',
            text: 'Tickets'
        },
        activate: false,
    },
];

/*
 * Central configuration for all social media and music platform links
 * Used in: Footer and Header components for social media icons
 *
 * `name`: Display name of the platform (required) <br>
 * `url`: URL to the social media profile or contact (required) <br>
 * `icon`: Icon identifier for react-icons (required)
 * `target`: Link target attribute (optional, default: '_self')
 */
export const FOOTER_LINKS = [
    {
        name: 'Instagram',
        url: 'https://instagram.com/veloclubband',
        icon: FaInstagram,
        target: '_blank'
    },
    {
        name: 'TikTok',
        url: 'https://tiktok.com/@veloclubband',
        icon: FaTiktok,
        target: '_blank'
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@veloclubband',
        icon: FaYoutube,
        target: '_blank'
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/veloclubmusik',
        icon: FaFacebook,
        target: '_blank'
    },
    {
        name: 'Linktree',
        url: 'https://linktree.veloclubband.de',
        icon: FaTree,
        target: '_blank'
    }
];

export const MUSIC_PLATFORMS = [
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/artist/2ATI9IAeXPE31HKReWj40a',
        icon: FaSpotify,
        target: '_blank'
    },
    {
        name: 'Apple Music',
        url: 'https://music.apple.com/de/artist/v%C3%A9loclub/1706116595',
        icon: SiApplemusic,
        target: '_blank'
    },
    {
        name: 'Deezer',
        url: 'https://www.deezer.com/de/artist/229236025',
        icon: FaDeezer,
        target: '_blank'
    },
    {
        name: 'Tidal',
        url: 'https://tidal.com/artist/41872824',
        icon: SiTidal,
        target: '_blank'
    },
    {
        name: 'Amazon Music',
        url: 'https://music.amazon.de/artists/B0CH91199R/v%C3%A9loclub',
        icon: SiAmazonmusic,
        target: '_blank'
    },
    {
        name: 'Youtube Music',
        url: 'https://music.youtube.com/channel/UCQEMKjV88u8Qrxu__8mpfeA',
        icon: SiYoutubemusic,
        target: '_blank'
    }, {
        name: 'Soundcloud',
        url: 'https://soundcloud.com/veloclubband',
        icon: FaSoundcloud,
        target: '_blank'
    },

];

/*
 * Embed URLs for music players on the website
 *
 * `spotifyEmbed`: Spotify embed URL for artist player (displays top tracks) <br>
 * `appleMusicEmbed`: Apple Music embed URL for artist player (displays top tracks) <br>
 * `youtubeEmbed`: YouTube embed URL for a specific video
 */
export const MUSIC_LINKS = {
    spotifyEmbed: 'https://open.spotify.com/embed/artist/2ATI9IAeXPE31HKReWj40a?utm_source=generator&theme=0',
    appleMusicEmbed: 'https://embed.music.apple.com/de/album/ich-brauch-dich-nicht-single/1860554475',
    youtubeEmbed: ''//'https://www.youtube.com/embed/470a6bFYmRI'
};

/*
 * Contact links displayed below the music section
 *
 * `label`: Button text (required) <br>
 * `url`: Link URL (required) <br>
 */
export const CONTACT_LINKS = [
    {
        label: 'Booking - Musicgrounder',
        mail: 'jessica@musicgrounder.de',
    },
    {
        label: 'E-Mail an Véloclub',
        mail: 'hi@veloclubband.de',
    },
    {
        label: 'Pressekit',
        url: 'https://pressekit.veloclubband.de',
    }
];

/*
 * Image credits for photos on the website
 *
 * Set `image` to empty string ('') to keep placeholder
 * Set `credit` to empty string ('') or null to hide credits
 *
 * `image`: Path/URL to the image file (empty = placeholder)
 * `credit`: Photo credit text
 * `url`: URL to the photographer's website or profile
 */
export const IMAGES = {
    heroImage: {
        image: '/images/hero.webp',
        credit: 'Mathis Kirchner',
        url: 'https://mathiskirchner.de/',
    },
    aboutImage: {
        image: '/images/portrait.webp',
        credit: 'Mathis Kirchner',
        link: 'https://mathiskirchner.de/',
    }
};

