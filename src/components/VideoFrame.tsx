type VideoFrameProps = {
  aspect: "vertical" | "wide";
  className?: string;
  label: string;
  src: string;
};

export function VideoFrame({ aspect, className = "", label, src }: VideoFrameProps) {
  const aspectClass = aspect === "vertical" ? "aspect-[9/16]" : "aspect-[16/9] sm:aspect-[3/1]";

  return (
    <div className={`overflow-hidden rounded-lg bg-family-burgundy shadow-soft ${className}`}>
      <div className={`relative ${aspectClass}`}>
        <video
          aria-label={label}
          className="absolute inset-0 h-full w-full bg-family-burgundy object-contain"
          controls
          playsInline
          preload="metadata"
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta a reprodução deste vídeo.
        </video>
      </div>
    </div>
  );
}
