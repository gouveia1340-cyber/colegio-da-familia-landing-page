import { developmentAreas, educationStages } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function EarlyEducationSection() {
  return (
    <section
      id="educacao-infantil"
      className="section-padding bg-family-cream"
      aria-labelledby="educacao-infantil-title"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Etapas de ensino"
            id="educacao-infantil-title"
            title="Da infância aos primeiros anos com cuidado, alegria e intencionalidade"
            description="A Educação Infantil e o Ensino Fundamental I são etapas essenciais para formar vínculos seguros, ampliar a linguagem, desenvolver autonomia e aprender a conviver com respeito, fé e alegria."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {developmentAreas.map((area) => (
              <div
                className="flex items-center gap-3 rounded-lg border border-family-burgundy/10 bg-white p-4 text-sm font-bold text-family-burgundy"
                key={area}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-family-blush text-family-cocoa">
                  <Icon className="h-4 w-4" name="spark" />
                </span>
                {area}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {educationStages.map((stage) => (
            <article className="surface-card p-7" key={stage.title}>
              <Icon className="h-9 w-9 text-family-gold" name={stage.icon} />
              <h3 className="mt-5 text-2xl font-black text-family-burgundy">{stage.title}</h3>
              <p className="mt-4 leading-8 text-family-ink/76">{stage.text}</p>
              <p className="mt-5 text-sm font-semibold text-family-wine">
                Turmas, séries e faixas etárias podem ser ajustadas conforme confirmação da escola.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
