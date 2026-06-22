import { buildWhatsAppUrl, type ArticlePost } from "../content";
import { Icon } from "./Icon";

type ArticlePageProps = {
  article: ArticlePost;
};

export function ArticlePage({ article }: ArticlePageProps) {
  return (
    <main id="conteudo" className="bg-family-cream pt-28">
      <article className="container-page section-padding">
        <div className="mx-auto max-w-3xl">
          <a
            className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-bold text-family-wine hover:text-family-burgundy"
            href="/#conteudos"
          >
            <Icon className="h-4 w-4 rotate-180" name="chevron" />
            Voltar aos conteúdos
          </a>

          <header className="mt-8">
            <p className="eyebrow">{article.category}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-family-burgundy sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-family-ink/78">{article.intro}</p>
          </header>

          <div className="mt-10 space-y-8">
            {article.sections.map((section) => (
              <section
                className="rounded-lg border border-family-burgundy/10 bg-white p-6 shadow-soft"
                key={section.title}
              >
                <h2 className="text-2xl font-black text-family-burgundy">{section.title}</h2>
                <p className="mt-4 leading-8 text-family-ink/76">{section.content}</p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-lg bg-family-burgundy p-6 text-white shadow-soft sm:p-8">
            <h2 className="text-2xl font-black">Conheça a proposta do Colégio da Família</h2>
            <p className="mt-3 leading-7 text-white/78">
              Agende uma visita e converse com a escola sobre a rotina, os princípios e as etapas
              de ensino disponíveis para sua família.
            </p>
            <a
              className="support-button mt-6"
              href={buildWhatsAppUrl("Olá, gostaria de agendar uma visita ao Colégio da Família.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar uma visita
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
