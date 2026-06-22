import type { FormEvent } from "react";
import { buildWhatsAppUrl, siteConfig } from "../content";

export function EnrollmentSection() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Olá, gostaria de agendar uma visita ao Colégio da Família.",
      `Responsável: ${form.get("name") || ""}`,
      `Telefone/WhatsApp: ${form.get("phone") || ""}`,
      `Idade da criança: ${form.get("childAge") || ""}`,
      `Mensagem: ${form.get("message") || ""}`,
    ].join("\n");

    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="matriculas" className="section-padding bg-family-burgundy" aria-labelledby="matriculas-title">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="text-white">
          <p className="eyebrow">Matrículas abertas</p>
          <h2 id="matriculas-title" className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Conheça de perto a proposta do Colégio da Família
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/78">
            Descubra um ambiente preparado para acolher, ensinar e impulsionar seu filho com
            princípios. Nossa equipe pode conversar com sua família e orientar os próximos passos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="primary-button"
              href={siteConfig.contact.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <a
              className="outline-button"
              href={siteConfig.contact.whatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar visita
            </a>
          </div>
        </div>

        <form
          className="rounded-lg border border-white/16 bg-white p-6 shadow-soft sm:p-8"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-family-burgundy">
              Nome do responsável
              <input
                className="focus-ring min-h-12 rounded-lg border border-family-burgundy/16 px-4 text-base font-normal"
                name="name"
                placeholder="Seu nome"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-family-burgundy">
              Telefone/WhatsApp
              <input
                className="focus-ring min-h-12 rounded-lg border border-family-burgundy/16 px-4 text-base font-normal"
                name="phone"
                placeholder="Seu WhatsApp"
                required
                type="tel"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-family-burgundy">
              Idade da criança
              <input
                className="focus-ring min-h-12 rounded-lg border border-family-burgundy/16 px-4 text-base font-normal"
                name="childAge"
                placeholder="Ex.: 4 anos"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-family-burgundy sm:col-span-2">
              Mensagem
              <textarea
                className="focus-ring min-h-32 rounded-lg border border-family-burgundy/16 px-4 py-3 text-base font-normal"
                name="message"
                placeholder="Conte como podemos ajudar sua família."
              />
            </label>
          </div>

          <button className="primary-button mt-6 w-full" type="submit">
            Enviar interesse
          </button>
        </form>
      </div>
    </section>
  );
}
