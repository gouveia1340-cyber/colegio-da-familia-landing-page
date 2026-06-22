import { siteVideos } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { VideoFrame } from "./VideoFrame";

export function MothersDaySection() {
  const video = siteVideos.mothersDay;

  return (
    <section className="section-padding bg-family-cream" aria-labelledby="memorias-title">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Família e afeto"
          id="memorias-title"
          title={video.title}
          description={video.subtitle}
        />

        <div className="mx-auto mt-10 max-w-5xl">
          {/* TODO: Trocar o vídeo em src/content.ts > siteVideos.mothersDay.src. */}
          <VideoFrame aspect="wide" label={video.ariaLabel} src={video.src} />
        </div>

        <div className="mx-auto mt-8 max-w-3xl rounded-lg border border-family-burgundy/10 bg-white p-6 text-center shadow-soft">
          <Icon className="mx-auto h-8 w-8 text-family-gold" name="heart" />
          <p className="mt-4 leading-8 text-family-ink/76">{video.supportText}</p>
        </div>
      </div>
    </section>
  );
}
