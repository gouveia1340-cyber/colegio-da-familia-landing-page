export type IconName =
  | "bookOpen"
  | "calendar"
  | "care"
  | "chat"
  | "chevron"
  | "cross"
  | "family"
  | "heart"
  | "home"
  | "leaf"
  | "mapPin"
  | "shield"
  | "spark"
  | "star"
  | "users";

export const WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=5528999551976&text&type=phone_number&app_absent=0&utm_source=ig";

export function buildWhatsAppUrl(message?: string) {
  if (!message) {
    return WHATSAPP_URL;
  }

  const url = new URL(WHATSAPP_URL);
  url.searchParams.set("text", message);
  return url.toString();
}

export const siteConfig = {
  name: "Colégio da Família",
  tagline: "Educando e impulsionando com princípios.",
  address: "Rua Desembargador Ayrton Lemos Filho, 300, Barra do Itapemirim, Marataízes - ES",
  logo: "/logo-colegio-da-familia-cropped.png",
  // TODO: Trocar pelos links/fotos reais da escola quando estiverem disponíveis.
  images: {
    heroFallback: "/images/placeholder-criancas-escola.png",
    about: {
      primary: "/images/about/quem-somos-principal.webp",
      secondary: "/images/about/quem-somos-secundaria.webp",
      fallback: "/images/placeholder-familia-escola.png",
    },
    mackenzie: "/images/hero/hero-02-atividade-infantil.webp",
  },
  contact: {
    whatsAppHref: WHATSAPP_URL,
    whatsAppLabel: "(28) 99955-1976",
    // TODO: Trocar pelo e-mail institucional real.
    email: "contato@colegiodafamilia.com.br",
    // TODO: Confirmar o @ oficial do Instagram.
    instagramHandle: "@colegiodafamilia",
    instagramHref: "https://www.instagram.com/colegiodafamilia/",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Rua%20Desembargador%20Ayrton%20Lemos%20Filho%2C%20300%2C%20Barra%20do%20Itapemirim%2C%20Marata%C3%ADzes%2C%20ES&output=embed",
  },
};

export const heroImages = [
  {
    src: "/images/hero/hero-01-quadra.webp",
    label: "Alunos reunidos em atividade escolar",
  },
  {
    src: "/images/hero/hero-02-atividade-infantil.webp",
    label: "Crianças em atividade da Educação Infantil",
  },
  {
    src: "/images/hero/hero-03-turma-sala.webp",
    label: "Turma em ambiente escolar acolhedor",
  },
  {
    src: "/images/hero/hero-04-educacao-corporal.webp",
    label: "Crianças em atividade corporal orientada",
  },
  {
    src: "/images/hero/hero-05-brincadeira-coletiva.webp",
    label: "Crianças em momento coletivo na escola",
  },
];

export const siteVideos = {
  socialProof: {
    src: "/videos/depoimento-familias.mp4",
    title: "O que as famílias dizem sobre nós",
    subtitle:
      "A melhor forma de conhecer a essência do Colégio da Família é ouvir quem já caminha conosco. Famílias que compartilham da nossa missão ajudam a revelar o cuidado, a confiança e o propósito presentes em nossa rotina escolar.",
    supportText:
      "Cada relato reforça a parceria que buscamos construir com os responsáveis: uma relação próxima, respeitosa e comprometida com a formação integral das crianças.",
    ariaLabel: "Vídeo de prova social com famílias do Colégio da Família",
    sizeNote: "8,2 MB",
  },
  mothersDay: {
    src: "/videos/dia-das-maes-criancas.mp4",
    title: "Afeto, família e memórias que formam",
    subtitle:
      "No Colégio da Família, entendemos que a educação também acontece nos gestos de carinho, nas palavras de gratidão e nas experiências que fortalecem os vínculos entre criança, família e escola.",
    supportText:
      "Este registro especial do Dia das Mães revela um pouco da nossa essência: uma rotina escolar que valoriza a infância, o afeto, a expressão das crianças e a presença da família no processo de formação.",
    ariaLabel: "Vídeo das crianças do Colégio da Família para o Dia das Mães",
    sizeNote: "74,1 MB",
  },
};

export const navLinks = [
  { label: "Início", href: "/#inicio" },
  { label: "Propósito", href: "/#proposito" },
  { label: "Pilares", href: "/#pilares" },
  { label: "Sistema Mackenzie", href: "/#mackenzie" },
  { label: "Etapas de ensino", href: "/#educacao-infantil" },
  { label: "Matrículas", href: "/#matriculas" },
  { label: "Contato", href: "/#contato" },
];

export const heroBadges = [
  { label: "Educação Infantil", icon: "heart" },
  { label: "Sistema Mackenzie de Ensino", icon: "bookOpen" },
  { label: "Princípios cristãos", icon: "cross" },
] satisfies Array<{ label: string; icon: IconName }>;

export const pillars = [
  {
    title: "Princípios Cristãos",
    icon: "cross",
    text: "Valores bíblicos presentes na rotina escolar, ajudando a criança a desenvolver caráter, respeito e propósito.",
  },
  {
    title: "Excelência no Ensino",
    icon: "star",
    text: "Uma proposta pedagógica estruturada para desenvolver conhecimento, curiosidade e autonomia desde a infância.",
  },
  {
    title: "Cuidado e Segurança",
    icon: "shield",
    text: "Ambiente acolhedor, seguro e preparado para que cada criança se sinta amada, respeitada e protegida.",
  },
  {
    title: "Parceria com a Família",
    icon: "family",
    text: "Acreditamos que escola e família caminham juntas na formação integral da criança.",
  },
] satisfies Array<{ title: string; icon: IconName; text: string }>;

export const missionVisionValues = {
  eyebrow: "Identidade institucional",
  title: "Missão, Visão e Valores",
  intro:
    "Cada detalhe da nossa proposta nasce de uma convicção: educar é formar vidas com princípios, propósito e responsabilidade. Por isso, nossa missão, visão e valores orientam a rotina escolar e fortalecem a parceria entre escola, família e fé.",
  cards: [
    {
      kind: "text",
      title: "Missão",
      icon: "spark",
      text: "Capacitar todos os alunos com o objetivo de levá-los a cumprir com plenitude seu propósito ético, moral e espiritual planejado por Deus em sua vida.",
    },
    {
      kind: "text",
      title: "Visão",
      icon: "shield",
      text: "Educar, formar e construir uma geração íntegra, reta, temente a Deus e que se desvia do mal através do ensino formal e confessional.",
    },
    {
      kind: "list",
      title: "Valores",
      icon: "cross",
      values: ["Jesus Cristo", "Ética", "Integridade", "Excelência", "Espiritualidade"],
    },
  ],
} satisfies {
  eyebrow: string;
  title: string;
  intro: string;
  cards: Array<
    | { kind: "text"; title: string; icon: IconName; text: string }
    | { kind: "list"; title: string; icon: IconName; values: string[] }
  >;
};

export const mackenzieCards = [
  {
    title: "Material didático estruturado",
    icon: "bookOpen",
    text: "Recursos pedagógicos organizados para apoiar a aprendizagem de forma progressiva, clara e adequada à etapa infantil.",
  },
  {
    title: "Aprendizagem com propósito",
    icon: "spark",
    text: "Conteúdos conduzidos com intencionalidade, conectando conhecimento, valores e desenvolvimento da criança.",
  },
  {
    title: "Formação integral",
    icon: "users",
    text: "Uma base que considera aspectos acadêmicos, emocionais, sociais e espirituais da formação infantil.",
  },
] satisfies Array<{ title: string; icon: IconName; text: string }>;

export const developmentAreas = [
  "Desenvolvimento da linguagem",
  "Coordenação motora",
  "Socialização",
  "Autonomia",
  "Criatividade",
  "Valores e convivência",
];

export const educationStages = [
  {
    title: "Pré-escola",
    icon: "leaf",
    text: "Vivências intencionais para ampliar linguagem, autonomia, convivência, curiosidade e prontidão para novos desafios.",
  },
  {
    title: "Ensino Fundamental I",
    icon: "bookOpen",
    text: "Continuidade da formação com base cristã, acompanhamento próximo e desenvolvimento acadêmico nos primeiros anos escolares.",
  },
] satisfies Array<{ title: string; icon: IconName; text: string }>;

export const differentials = [
  "Ambiente cristão e acolhedor",
  "Rotina pensada para a infância",
  "Ensino com princípios",
  "Equipe comprometida",
  "Comunicação próxima com as famílias",
  "Espaços seguros e preparados",
  "Desenvolvimento emocional e social",
  "Base pedagógica Mackenzie",
];

export const blogPosts = [
  {
    route: "/artigos/como-escolher-uma-escola-crista",
    title: "Como escolher uma escola cristã para seu filho",
    excerpt:
      "Critérios importantes para observar propósito, rotina, acolhimento e coerência entre valores da família e prática escolar.",
    category: "Escolha escolar",
    metaDescription:
      "Orientações para pais e responsáveis escolherem uma escola cristã com valores, cuidado, rotina e proposta coerente.",
    intro:
      "Escolher uma escola cristã é uma decisão que envolve confiança, valores e visão de futuro. Para muitas famílias, não se trata apenas de encontrar um lugar onde a criança aprenda conteúdos, mas um ambiente onde ela seja acolhida, orientada e formada com princípios.",
    sections: [
      {
        title: "Observe a coerência entre discurso e rotina",
        content:
          "Uma proposta cristã se torna significativa quando aparece no cuidado diário, na forma como a criança é tratada, na convivência com os colegas e na parceria com os responsáveis. Valores precisam ser vividos na rotina escolar, não apenas apresentados em materiais institucionais.",
      },
      {
        title: "Considere acolhimento, segurança e comunicação",
        content:
          "Na infância, a criança aprende melhor quando encontra vínculos seguros. Por isso, vale observar se a escola comunica com clareza, escuta a família e organiza uma rotina que favorece tranquilidade, pertencimento e desenvolvimento integral.",
      },
      {
        title: "Procure uma formação integral",
        content:
          "Uma escola cristã deve valorizar conhecimento, caráter, convivência, autonomia e cuidado emocional. A escolha se fortalece quando a proposta pedagógica conversa com os princípios que a família deseja cultivar em casa.",
      },
    ],
  },
  {
    route: "/artigos/importancia-dos-primeiros-anos",
    title: "A importância dos primeiros anos na formação da criança",
    excerpt:
      "A infância é uma fase decisiva para vínculos, linguagem, autonomia, convivência e construção de referências seguras.",
    category: "Infância",
    metaDescription:
      "Entenda por que os primeiros anos são essenciais para vínculos, linguagem, autonomia, convivência e formação integral.",
    intro:
      "Os primeiros anos de vida são um tempo precioso de descobertas. Nessa fase, a criança constrói vínculos, amplia sua linguagem, desenvolve autonomia e começa a compreender formas saudáveis de conviver com o outro.",
    sections: [
      {
        title: "Rotina também educa",
        content:
          "Uma rotina bem conduzida oferece previsibilidade e segurança. Horários, combinados, brincadeiras, momentos de escuta e experiências pedagógicas ajudam a criança a se localizar no mundo com mais confiança.",
      },
      {
        title: "Cuidado e aprendizagem caminham juntos",
        content:
          "Na infância, acolher e ensinar não são ações separadas. O cuidado favorece a aprendizagem, enquanto as experiências pedagógicas ajudam a criança a expressar ideias, emoções, curiosidades e valores.",
      },
      {
        title: "Princípios desde cedo",
        content:
          "A formação cristã nos primeiros anos contribui para o desenvolvimento de respeito, gratidão, responsabilidade e amor ao próximo. Esses princípios se tornam referências importantes para a vida familiar e escolar.",
      },
    ],
  },
  {
    route: "/artigos/familia-e-escola-parceria",
    title: "Família e escola: uma parceria que transforma",
    excerpt:
      "Quando responsáveis e educadores caminham juntos, a criança encontra continuidade, confiança e direção para crescer.",
    category: "Família",
    metaDescription:
      "Veja como a parceria entre família e escola fortalece a formação da criança com confiança, cuidado e princípios.",
    intro:
      "A criança se desenvolve melhor quando percebe que família e escola caminham na mesma direção. Essa parceria cria continuidade, fortalece vínculos e ajuda os pequenos a crescerem com mais segurança.",
    sections: [
      {
        title: "Comunicação próxima gera confiança",
        content:
          "Uma relação saudável entre escola e responsáveis depende de diálogo claro, escuta e respeito. Quando a família acompanha a rotina escolar, entende melhor os avanços, necessidades e descobertas da criança.",
      },
      {
        title: "Valores compartilhados fortalecem a formação",
        content:
          "A parceria se torna ainda mais importante quando há coerência entre os princípios cultivados em casa e a proposta vivida na escola. Essa unidade ajuda a criança a construir referências mais firmes.",
      },
      {
        title: "Caminhar juntos é cuidar melhor",
        content:
          "Família e escola têm papéis diferentes, mas complementares. Quando trabalham juntas, conseguem acolher, orientar e incentivar a criança com mais sensibilidade e intencionalidade.",
      },
    ],
  },
];

export type ArticlePost = (typeof blogPosts)[number];
