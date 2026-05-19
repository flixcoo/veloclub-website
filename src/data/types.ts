import type {IconType} from "react-icons";

export type GigButton = {
    text: string;
    url?: string;
};

export type LiveDate = {
    date: string;
    city: string;
    venue: string;
    description: string;
    button?: GigButton;
    activate: boolean;
};

export type IconLink = {
    name: string;
    icon: IconType;
    url?: string;
};

export type MusicLinks = {
    spotifyEmbed: string;
    appleMusicEmbed: string;
    youtubeEmbed: string;
};

export type LabelLink = {
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