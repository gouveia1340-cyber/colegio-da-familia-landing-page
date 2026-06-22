import { blogPosts } from "../content";
import { Icon } from "./Icon";
import { SectionHeading } from "./SectionHeading";

export function BlogSection() {
  return (
    <section id="conteudos" className="section-padding bg-family-cream" aria-labelledby="conteudos-title">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Conteúdos"
          id="conteudos-title"
          title="Conteúdos para famílias"
          description="Uma área preparada para artigos, comunicados e orientações que aproximam escola e responsáveis."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article className="surface-card flex min-h-full flex-col p-6" key={post.title}>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-family-cocoa">
                {post.category}
              </p>
              <h3 className="mt-4 text-xl font-black leading-7 text-family-burgundy">{post.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-family-ink/74">{post.excerpt}</p>
              <a
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded-lg text-sm font-bold text-family-wine hover:text-family-burgundy"
                href={post.route}
              >
                Ler artigo
                <Icon className="h-4 w-4" name="chevron" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
