'use client';

import { useState } from 'react';
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';

interface VideoProp {
    videoId: string;
}

export default function VideoPlayer({ videoId }: VideoProp) {
    const [player, setPlayer] = useState<YouTubePlayer | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const opts = {
        width: '610',
        height: '360',
        playerVars: {
            autoplay: 0,
            controls: 0, // Quita todos los controles de YouTube
            rel: 0, // Evita que se muestren videos relacionados al final
            modestbranding: 1, // Oculta el logo de YouTube
            disablekb: 1,
        },
    };

    const handlePlayPause = () => {
        const newIsPlayingState = !isPlaying;
        setIsPlaying(newIsPlayingState);

        if (newIsPlayingState) {
            if (player) {
                player.playVideo();
            }
        } else {
            if (player) {
                player.pauseVideo();
            }
        }
    };

    const onReady = (event: YouTubeEvent) => {
        // Guarda el objeto del reproductor cuando está listo
        setPlayer(event.target);
    };

    return (
        <>
            <div className="videoContainer">
                <YouTube videoId={videoId} opts={opts} onReady={onReady} />
            </div>
        </>
    );
}
