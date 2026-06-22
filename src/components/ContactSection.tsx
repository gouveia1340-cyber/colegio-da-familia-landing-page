import { siteConfig } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function ContactSection() {
  return (
    <section id="contato" className="section-padding bg-white" aria-labelledby="contato-title">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Contato e localização"
          id="contato-title"
          title="Venha conhecer o Colégio da Família"
          description="Estamos em Marataízes-ES e queremos receber sua família para apresentar nossa proposta, rotina e próximos passos de matrícula."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="surface-card p-6">
            <div className="grid gap-5">
              <ContactItem icon="mapPin" label="Endereço" value={siteConfig.address} />
              <ContactItem
                icon="chat"
                label="WhatsApp"
                value={siteConfig.contact.whatsAppLabel}
                href={siteConfig.contact.whatsAppHref}
              />
              <ContactItem
                icon="spark"
                label="Instagram"
                value={siteConfig.contact.instagramHandle}
                href={siteConfig.contact.instagramHref}
              />
              <ContactItem icon="home" label="E-mail" value={siteConfig.contact.email} />
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-family-burgundy/10 bg-family-cream shadow-soft">
            <iframe
              className="h-[430px] w-full"
              src={siteConfig.contact.mapEmbedUrl}
              title="Mapa do Colégio da Família"
              width="100%"
              height="430"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: "mapPin" | "chat" | "spark" | "home";
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <a
      className="focus-ring rounded-lg font-semibold leading-7 text-family-burgundy hover:text-family-wine"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {value}
    </a>
  ) : (
    <p className="mt-1 font-semibold leading-7 text-family-burgundy">{value}</p>
  );

  return (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-family-blush text-family-wine">
        <Icon className="h-5 w-5" name={icon} />
      </span>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-family-gold">{label}</p>
        <div className="mt-1">{content}</div>
      </div>
    </div>
  );
}
