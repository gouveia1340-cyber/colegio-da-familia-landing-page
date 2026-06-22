import { missionVisionValues } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function MissionVisionValuesSection() {
  return (
    <section
      id="missao-visao-valores"
      className="section-padding bg-white"
      aria-labelledby="missao-visao-valores-title"
    >
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow={missionVisionValues.eyebrow}
          id="missao-visao-valores-title"
          title={missionVisionValues.title}
          description={missionVisionValues.intro}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {missionVisionValues.cards.map((card) => (
            <article
              className="surface-card flex min-h-full flex-col p-6 transition hover:-translate-y-1 sm:p-7"
              key={card.title}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-family-blush text-family-wine">
                <Icon className="h-7 w-7" name={card.icon} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-family-burgundy">{card.title}</h3>

              {card.kind === "text" ? (
                <p className="mt-4 text-base leading-8 text-family-ink/76">{card.text}</p>
              ) : (
                <ul className="mt-5 grid gap-3">
                  {card.values.map((value) => (
                    <li
                      className="flex items-center gap-3 rounded-lg border border-family-burgundy/10 bg-family-cream px-4 py-3 font-bold text-family-burgundy"
                      key={value}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-family-gold/18 text-family-wine">
                        <Icon className="h-4 w-4" name="star" />
                      </span>
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
