import { differentials } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function DifferentialsSection() {
  return (
    <section className="section-padding bg-white" aria-labelledby="diferenciais-title">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Diferenciais"
          id="diferenciais-title"
          title="O que torna o Colégio da Família especial"
          description="A experiência escolar é construída em detalhes: rotina, vínculos, comunicação, ambiente e uma proposta que respeita a infância."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentials.map((item) => (
            <div
              className="rounded-lg border border-family-burgundy/10 bg-family-cream p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
              key={item}
            >
              <Icon className="h-7 w-7 text-family-cocoa" name="shield" />
              <p className="mt-4 font-bold leading-6 text-family-burgundy">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
