
import React, { useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";


type ClientCardProps = {
  name: string;
  longIds: string[]; // YouTube IDs (16:9)
  shortIds: string[]; // YouTube IDs (9:16)
  clientPhoto?: string; // Client photo URL
  tall?: boolean; // Make card taller
  testimonial?: string; // Client testimonial
};

const VideoFrame: React.FC<{ id: string; ratio: number; title: string }> = ({ id, ratio, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const base = `https://www.youtube.com/embed/${id}`;
  const playSrc = `${base}?autoplay=1&mute=1&controls=1&playsinline=1`;

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative overflow-hidden rounded-md group cursor-pointer" onClick={handlePlayClick}>
      <AspectRatio ratio={ratio}>
        {isPlaying ? (
          <iframe
            className="rounded-md w-full h-full"
            src={playSrc}
            title={title}
            loading="lazy"
            allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <iframe
              className="rounded-md w-full h-full"
              src={base}
              title={title}
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
          </>
        )}
      </AspectRatio>
    </div>
  );
};

const ClientCard: React.FC<ClientCardProps> = ({ name, longIds, shortIds, clientPhoto, tall, testimonial }) => {
  return (
    <article className={`client-card-glass rounded-2xl p-4 md:p-5 border shadow-elegant transition-transform hover:scale-[1.003] hover:shadow-glow animate-enter ${tall ? 'md:min-h-[560px]' : ''}`}>
      <header className="mb-4">
        <div className="flex items-center gap-3">
          {clientPhoto && (
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20">
              <img 
                src={clientPhoto} 
                alt={`${name} profile`} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <h3 className="text-base md:text-lg font-semibold">{name}</h3>
        </div>
        {testimonial && (
          <p className="mt-2 text-xs md:text-sm text-muted-foreground italic">“{testimonial}”</p>
        )}
      </header>
      <div className="space-y-4">
        {longIds.length > 0 && (
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Long-form 16:9</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3">
              {longIds.map((id, idx) => (
                <VideoFrame key={`long-${id}-${idx}`} id={id} ratio={16 / 9} title={`${name} long-form ${idx + 1}`} />
              ))}
            </div>
          </div>
        )}
        {shortIds.length > 0 && (
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Short-form 9:16</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {shortIds.map((id, idx) => (
                <VideoFrame key={`short-${id}-${idx}`} id={id} ratio={9 / 16} title={`${name} short-form ${idx + 1}`} />
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default ClientCard;
