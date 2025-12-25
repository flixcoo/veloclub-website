/* List of all live dates displayed on the website
 * Used in: Live component to display tour dates
 *
 * `id`: Unique identifier for each date (required) <br>
 * `date`: Date in format 'DD.MM.YYYY' (required) <br>
 * `city`: City of the performance (required) <br>
 * `venue`: Name of the venue/location (required) <br>
 * `link`: URL to ticket sales or more information (required) <br>
 * `description`: Additional information about the event (optional) <br>
 * `buttonText`: Text displayed on the button (optional, default: 'Tickets')
 */
export const LIVE_DATES = [
    {
        id: 1,
        date: '13.12.2025',
        city: 'Bremen',
        venue: 'Lila Eule',
        description: 'JoschY EP-Releasekonzert',
        button: {
            text: 'Tickets',
            link: 'https://www.eventim-light.com/de/a/58a333d705a73904c49e920f/e/68d4122aa5c93f571da2b776'
        }
    },
    {
        id: 2,
        date: '22.12.2025',
        city: 'Oldenburg',
        venue: 'Stube',
        description: 'Weihnachtskonzert',
        button: {
            text: 'Info',
            link: 'https://www.instagram.com/stube_oldenburg/'
        }
    },
    {
        id: 3,
        date: '20.03.2026',
        city: 'Braunschweig',
        venue: 'Etage Eins',
        description: 'Mittendrin Session',
        button: {
            text: 'Tickets',
            link: 'http://www.etage-eins.de/',
        }
    },
    {
        id: 4,
        date: '05.06.2026',
        city: 'Leipzig',
        venue: 'Marktplatz',
        description: 'Stadtfest Leipzig',
        button: {
            link: 'https://leipzigerstadtfest.de/',
            text: 'Info'
        }
    },
];

/*
 * Central configuration for all social media and music platform links
 * Used in: Footer and Header components for social media icons
 *
 * `name`: Display name of the platform (required) <br>
 * `url`: URL to the social media profile or contact (required) <br>
 * `icon`: Icon identifier for react-icons (required)
 */
export const SOCIALS = [
    {
        name: 'Instagram',
        url: 'https://instagram.com/veloclubband',
        icon: 'FaInstagram',
        target: '_blank'
    },
    {
        name: 'TikTok',
        url: 'https://tiktok.com/@veloclubband',
        icon: 'FaTiktok',
        target: '_blank'
    },
    {
        name: 'Spotify',
        url: 'https://open.spotify.com/artist/2ATI9IAeXPE31HKReWj40a',
        icon: 'FaSpotify',
        target: '_blank'
    },
    {
        name: 'YouTube',
        url: 'https://youtube.com/@veloclubband',
        icon: 'FaYoutube',
        target: '_blank'
    },
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/veloclubmusic',
        icon: 'FaFacebook',
        target: '_blank'
    },
    {
        name: 'Mail',
        url: 'mailto:hi@veloclubband.de',
        icon: 'FaEnvelope',
        target: '_blank'
    }
];

/*
 * Embed URLs for music players on the website
 * Used in: Music component to embed music players
 *
 * `spotifyEmbed`: Spotify embed URL for artist player (displays top tracks) <br>
 * `appleMusicEmbed`: Apple Music embed URL for artist player (displays top tracks)
 */
export const MUSIC_LINKS = {
    spotifyEmbed: 'https://open.spotify.com/embed/artist/2ATI9IAeXPE31HKReWj40a?utm_source=generator&theme=0',
    appleMusicEmbed: 'https://embed.music.apple.com/de/album/egal-wie-weit-single/1848145725',
};

/*
 * Contact links displayed below the music section
 * Used in: Contact component to display action buttons
 *
 * `label`: Button text (required) <br>
 * `url`: Link URL (required) <br>
 * `description`: Optional description text below the button (optional)
 */
export const CONTACT_LINKS = [
    {
        label: 'Booking - Musicgrounder',
        url: 'mailto:jessica@musicgrounder.de',
    },
    {
        label: 'E-Mail an uns :)',
        url: 'mailto:hi@veloclubband.de',
    },
    {
        label: 'Pressekit',
        url: 'https://pressekit.veloclubband.de',
    }
];

/*
 * Image credits for photos on the website
 * Used in: Hero and About components to display photo credits
 *
 * Set `image` to empty string ('') to keep placeholder
 * Set `credit` to empty string ('') or null to hide credits
 *
 * `image`: Path/URL to the image file (optional, empty = placeholder)
 * `credit`: Photo credit text (optional)
 */
export const IMAGE_CREDITS = {
    heroImage: {
        image: '/images/hero.webp',
        credit: 'Mathis Kirchner',
        link: 'https://mathiskirchner.de/',
    },
    aboutImage: {
        image: '/images/portrait.webp',
        credit: 'Mathis Kirchner',
        link: 'https://mathiskirchner.de/',
    }
};

