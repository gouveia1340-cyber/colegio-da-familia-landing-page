import { buildWhatsAppUrl, siteVideos } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";
import { VideoFrame } from "./VideoFrame";

export function FamilyTestimonialsSection() {
  const video = siteVideos.socialProof;

  return (
    <section className="section-padding bg-white" aria-labelledby="familias-title">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="mx-auto w-full max-w-[390px] lg:mx-0">
          {/* TODO: Trocar o vídeo em src/content.ts > siteVideos.socialProof.src. */}
          <VideoFrame aspect="vertical" label={video.ariaLabel} src={video.src} />
        </div>

        <div>
          <SectionHeading
            eyebrow="Famílias"
            id="familias-title"
            title={video.title}
            description={video.subtitle}
          />

          <div className="mt-8 rounded-lg border border-family-burgundy/10 bg-family-blush p-6">
            <Icon className="h-8 w-8 text-family-gold" name="family" />
            <p className="mt-4 leading-8 text-family-ink/76">{video.supportText}</p>
          </div>

          <a
            className="primary-button mt-8"
            href={buildWhatsAppUrl("Olá, gostaria de agendar uma visita ao Colégio da Família.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar uma visita
          </a>
        </div>
      </div>
    </section>
  );
}
