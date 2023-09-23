export interface CardProps {
    uuid: string;
    children?: React.ReactNode;
    title?: string;
    imageProps?: CardImageProps;
    buttonAction?: () => void;
    side?: "left" | "right";
}

export interface CardImageProps {
    src: string;
    alt: string;
    height: number;
}