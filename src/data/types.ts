import type {IconType} from "react-icons";

export type GigButton = {
    url?: string;
    text: string;
};

export type LiveDate = {
    date: string;
    city: string;
    venue: string;
    description: string;
    button?: GigButton;
    activate: boolean;
};

export type FooterLink = {
    name: string;
    icon: IconType;
    target?: '_blank' | '_self';
    url?: string;
    mail?: string;
};

export type MusicLinks = {
    spotifyEmbed: string;
    appleMusicEmbed: string;
    youtubeEmbed: string;
};

export type ContactLink = {
    label: string;
    mail?: string;
    url?: string;
    description?: string;
};

type ImageData = {
    image: string;
    credit: string;
    url: string;
};

export type Images = {
    epImage: ImageData;
    heroImage: ImageData;
    aboutImage: ImageData;
};