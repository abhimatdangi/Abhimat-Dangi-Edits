import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type VideoItemProps = {
  id: string;
  ratio: number;
  title: string;
  type: "short" | "long";
};

const VideoItem: React.FC<VideoItemProps> = ({ id, ratio, title, type }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const base = `https://www.youtube.com/embed/${id}`;
  const playSrc = `${base}?autoplay=1&mute=0&controls=1&playsinline=1`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="video-item cursor-pointer group" onClick={handlePlayClick}>
      <AspectRatio ratio={ratio}>
        {isPlaying ? (
          <iframe
            className="rounded-xl w-full h-full border border-border/20"
            src={playSrc}
            title={title}
            loading="lazy"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <div className="relative w-full h-full">
            <iframe
              className="rounded-xl w-full h-full border border-border/20"
              src={base}
              title={title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Minimal play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl">
              <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <svg className="w-5 h-5 text-gray-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </div>
        )}
      </AspectRatio>
    </div>
  );
};

export default VideoItem;
