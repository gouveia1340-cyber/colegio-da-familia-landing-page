import { useEffect, useState } from "react";
import { heroBadges, heroImages, homeAnchor, siteConfig } from "../content";
import { Icon } from "./Icon";

export function Hero() {
  const slides =
    heroImages.length > 0
      ? heroImages
      : [{ src: siteConfig.images.heroFallback, label: "Ambiente escolar do Colégio da Família" }];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion || slides.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[88svh] items-center overflow-hidden bg-family-burgundy pt-28 text-white"
      aria-labelledby="hero-title"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1400ms] ease-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            width="1800"
            height="1100"
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-family-burgundy via-family-burgundy/86 to-family-wine/46" />
      <div className="absolute inset-0 -z-10 bg-black/24" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-family-burgundy/90 to-transparent" />

      <div className="container-page pb-16">
        <div className="max-w-4xl">
          <p className="eyebrow text-family-sand">Educação Infantil em Marataízes-ES</p>
          <h1
            id="hero-title"
            className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] text-white sm:text-5xl lg:text-7xl"
          >
            Educação cristã para formar crianças com propósito
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
            No Colégio da Família, cada criança é acolhida, ensinada e impulsionada a crescer
            com princípios, cuidado e excelência desde os primeiros anos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="primary-button"
              href={siteConfig.contact.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar uma visita
            </a>
            <a className="outline-button" href={homeAnchor("mackenzie")}>
              Conhecer a proposta pedagógica
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3 lg:max-w-4xl">
          {heroBadges.map((badge) => (
            <div
              className="rounded-lg border border-white/24 bg-white/12 p-4 text-sm font-bold text-white shadow-soft backdrop-blur"
              key={badge.label}
            >
              <Icon className="mb-3 h-6 w-6 text-family-gold" name={badge.icon} />
              {badge.label}
            </div>
          ))}
        </div>

        <div className="mt-6 flex gap-2" aria-hidden="true">
          {slides.map((slide, index) => (
            <span
              key={slide.src}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide ? "w-9 bg-family-gold" : "w-3 bg-white/[0.42]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
