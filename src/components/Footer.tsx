import { navLinks, siteConfig } from "../content";

export function Footer() {
  return (
    <footer className="bg-family-burgundy py-10 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_1fr_auto]">
        <div>
          <img
            src={siteConfig.logo}
            alt="Colégio da Família"
            className="h-16 w-auto"
            width="448"
            height="274"
          />
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{siteConfig.tagline}</p>
        </div>

        <nav aria-label="Links rápidos do rodapé" className="grid grid-cols-2 gap-2 text-sm">
          {navLinks.map((link) => (
            <a className="focus-ring rounded-lg py-1 text-white/74 hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-sm leading-7 text-white/74 md:text-right">
          <p>{siteConfig.address}</p>
          <a
            className="focus-ring rounded-lg hover:text-white"
            href={siteConfig.contact.whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {siteConfig.contact.whatsAppLabel}
          </a>
          <br />
          <a
            className="focus-ring rounded-lg hover:text-white"
            href={siteConfig.contact.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.contact.instagramHandle}
          </a>
          <p className="mt-4 text-white/52">
            © {new Date().getFullYear()} Colégio da Família. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
