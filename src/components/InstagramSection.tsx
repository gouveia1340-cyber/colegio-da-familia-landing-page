import { siteConfig } from "../content";
import { Icon } from "./Icon";

export function InstagramSection() {
  return (
    <section className="bg-white py-12" aria-labelledby="instagram-title">
      <div className="container-page">
        <div className="grid items-center gap-6 rounded-lg bg-family-wine p-6 text-white shadow-soft sm:p-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="eyebrow text-family-sand">Instagram</p>
            <h2 id="instagram-title" className="mt-3 text-3xl font-black">
              Acompanhe nossa rotina
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-white/78">
              Veja momentos, comunicados e novidades do Colégio da Família pelo Instagram.
            </p>
          </div>
          <a
            className="support-button"
            href={siteConfig.contact.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="mr-2 h-5 w-5" name="spark" />
            Seguir {siteConfig.contact.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
