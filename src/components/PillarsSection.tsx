import { pillars } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function PillarsSection() {
  return (
    <section id="pilares" className="section-padding bg-family-cream" aria-labelledby="pilares-title">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Pilares"
          id="pilares-title"
          title="Pilares que sustentam a nossa essência"
          description="Uma escola infantil cristã precisa unir intencionalidade pedagógica, cuidado diário e uma parceria real com as famílias."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article className="surface-card p-6 transition hover:-translate-y-1" key={pillar.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-family-blush text-family-wine">
                <Icon className="h-6 w-6" name={pillar.icon} />
              </div>
              <h3 className="mt-6 text-xl font-black text-family-burgundy">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-family-ink/74">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
