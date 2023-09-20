export interface CardProps {
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