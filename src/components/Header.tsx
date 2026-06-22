import { useState } from "react";
import { homeAnchor, navLinks, siteConfig } from "../content";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-family-burgundy/[0.92] text-white shadow-sm backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <a
          href={homeAnchor("inicio")}
          className="focus-ring flex shrink-0 items-center gap-3 rounded-lg"
          aria-label="Voltar ao início"
        >
          <img
            src={siteConfig.logo}
            alt="Colégio da Família"
            className="h-12 w-auto sm:h-14"
            width="448"
            height="274"
          />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-lg px-3 py-2 text-sm font-semibold text-white/84 transition hover:bg-white/10 hover:text-white"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="primary-button hidden shrink-0 lg:inline-flex"
          href={siteConfig.contact.whatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale pelo WhatsApp
        </a>

        <button
          aria-controls="menu-mobile"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/24 bg-white/10 lg:hidden"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
          <span className="relative h-5 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 rounded bg-white transition ${
                isOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 h-0.5 w-5 rounded bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-5 rounded bg-white transition ${
                isOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <nav
          className="container-page grid gap-2 border-t border-white/12 pb-5 pt-4"
          aria-label="Navegação mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="primary-button mt-2 w-full"
            href={siteConfig.contact.whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Fale pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
