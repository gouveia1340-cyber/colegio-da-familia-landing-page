import { siteConfig } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="proposito" className="section-padding bg-white" aria-labelledby="proposito-title">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative grid gap-4 sm:grid-cols-[1fr_0.76fr] lg:block lg:min-h-[620px]">
          {/* TODO: Trocar a foto principal da seção Quem Somos em src/content.ts > siteConfig.images.about.primary. */}
          <div className="photo-frame lg:mr-20">
            <img
              src={siteConfig.images.about.primary}
              alt="Alunos do Colégio da Família em atividade escolar"
              className="aspect-[4/5] h-full w-full object-cover"
              width="880"
              height="1060"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* TODO: Trocar a foto complementar da seção Quem Somos em src/content.ts > siteConfig.images.about.secondary. */}
          <div className="photo-frame sm:mt-14 lg:absolute lg:bottom-3 lg:right-0 lg:w-[46%]">
            <img
              src={siteConfig.images.about.secondary}
              alt="Crianças em momento de aprendizagem na Educação Infantil"
              className="aspect-[4/3] h-full w-full object-cover"
              width="720"
              height="520"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Quem somos"
            id="proposito-title"
            title="Um colégio que nasce para caminhar com as famílias"
            description="O Colégio da Família é uma escola cristã em Marataízes-ES criada para oferecer uma educação infantil com intencionalidade, afeto e princípios. Nossa missão é participar da formação integral das crianças, unindo desenvolvimento acadêmico, valores cristãos e uma rotina escolar segura, alegre e significativa."
          />

          <figure className="mt-8 rounded-lg border-l-4 border-family-gold bg-family-blush p-6">
            <Icon className="h-8 w-8 text-family-gold" name="cross" />
            <blockquote className="mt-4 text-xl font-bold leading-8 text-family-burgundy">
              “Muitos são os planos no coração do homem, mas o propósito do Senhor prevalece.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-bold uppercase tracking-[0.16em] text-family-wine">
              Provérbios 19:21
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
