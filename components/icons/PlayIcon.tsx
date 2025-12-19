interface PlayIconProps {
    size?: number;
    className?: string;
}

export default function PlayIcon({ size = 48, className = "text-[#e91e8c]" }: PlayIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 20 20"
            className={className}
        >
            {/* Circle background */}
            <circle cx="10" cy="10" r="8" fill="currentColor" />
            {/* White triangle */}
            <path
                fill="white"
                d="M8 8a1 1 0 0 1 1.555-.832l3 2a1 1 0 0 1 0 1.664l-3 2A1 1 0 0 1 8 12V8z"
            />
        </svg>
    );
}
