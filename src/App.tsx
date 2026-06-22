import { useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { ArticlePage } from "./components/ArticlePage";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { DifferentialsSection } from "./components/DifferentialsSection";
import { EarlyEducationSection } from "./components/EarlyEducationSection";
import { EnrollmentSection } from "./components/EnrollmentSection";
import { FamilyTestimonialsSection } from "./components/FamilyTestimonialsSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InstagramSection } from "./components/InstagramSection";
import { MackenzieSection } from "./components/MackenzieSection";
import { MissionVisionValuesSection } from "./components/MissionVisionValuesSection";
import { MothersDaySection } from "./components/MothersDaySection";
import { PillarsSection } from "./components/PillarsSection";
import { blogPosts } from "./content";

const HOME_TITLE = "Colégio da Família | Educação Cristã em Marataízes-ES";
const HOME_DESCRIPTION =
  "Educação Infantil cristã em Marataízes-ES, com princípios, cuidado, parceria com a família e Sistema Mackenzie de Ensino.";

export default function App() {
  const currentPath = window.location.pathname;
  const article = blogPosts.find((post) => post.route === currentPath);

  useEffect(() => {
    const title = article ? `${article.title} | Colégio da Família` : HOME_TITLE;
    const description = article ? article.metaDescription : HOME_DESCRIPTION;
    const descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitleTag = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    const ogDescriptionTag = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');

    document.title = title;

    if (descriptionTag) {
      descriptionTag.content = description;
    }

    if (ogTitleTag) {
      ogTitleTag.content = title;
    }

    if (ogDescriptionTag) {
      ogDescriptionTag.content = description;
    }
  }, [article]);

  if (article) {
    return (
      <>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo principal
        </a>
        <Header />
        <ArticlePage article={article} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <PillarsSection />
        <MissionVisionValuesSection />
        <AboutSection />
        <FamilyTestimonialsSection />
        <MackenzieSection />
        <EarlyEducationSection />
        <DifferentialsSection />
        <MothersDaySection />
        <EnrollmentSection />
        <BlogSection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
