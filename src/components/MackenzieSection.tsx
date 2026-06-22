import { mackenzieCards, siteConfig } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function MackenzieSection() {
  return (
    <section
      id="mackenzie"
      className="section-padding bg-family-burgundy text-white"
      aria-labelledby="mackenzie-title"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Sistema Mackenzie de Ensino"
              id="mackenzie-title"
              title="Sistema Mackenzie de Ensino: tradição, excelência e cosmovisão cristã"
              description="Utilizamos o Sistema Mackenzie de Ensino, uma proposta educacional reconhecida por integrar conhecimento, formação cristã e desenvolvimento integral. Os materiais e recursos pedagógicos apoiam uma aprendizagem consistente, alinhada à etapa de desenvolvimento da criança."
              className="[&_h2]:text-white [&_p]:text-white/78"
            />
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68">
              A linguagem institucional evita promessas exageradas e valoriza o que importa
              para a família: base pedagógica, intencionalidade e acompanhamento cuidadoso.
            </p>
          </div>

          <div className="photo-frame border-white/18 bg-white/8">
            {/* TODO: Substituir por foto de sala, material pedagógico ou rotina escolar. */}
            <img
              src={siteConfig.images.mackenzie}
              alt="Ambiente pedagógico preparado para a Educação Infantil"
              className="aspect-[4/3] h-full w-full object-cover"
              width="1200"
              height="900"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {mackenzieCards.map((card) => (
            <article
              className="rounded-lg border border-white/12 bg-white/8 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/12"
              key={card.title}
            >
              <Icon className="h-8 w-8 text-family-gold" name={card.icon} />
              <h3 className="mt-5 text-xl font-black text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
