export const nav = {
  name: "Rémi BECCAT",
  tagline: "Growth Ops",
  links: [
    { label: "Apports", href: "#apports" },
    { label: "Expériences", href: "#experiences" },
    { label: "Méthode", href: "#methode" },
    { label: "Stack", href: "#stack" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Télécharger mon CV",
  ctaHref: "/cv-remi-beccat.pdf",
}

export const hero = {
  badge: "Recherche CDI Growth Ops",
  badgeSecondary: "Disponible à partir de septembre 2026 · Lyon uniquement",
  titleLine1: "Growth Ops —",
  titleLine2: "je construis des systèmes d'acquisition",
  titleAccent: "utilisables par votre équipe.",
  subtitle:
    "Je construis des infrastructures growth opérationnelles dès le premier mois : scraping B2B, automatisations Make, agents IA orchestrés. Des systèmes que vos équipes peuvent utiliser sans dépendre d'un profil technique.",
  ctaPrimary: { label: "Me contacter par email", href: "mailto:remibekka@gmail.com" },
  ctaSecondary: { label: "Voir mon LinkedIn", href: "https://linkedin.com/in/remibeccat" },
  ctaTertiary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
  card: {
    title: "Ce que j'apporte",
    checklist: [
      "Scraping B2B et enrichissement de contacts (10k+ livrés)",
      "Automatisations Make accessibles à toute l'équipe",
      "Agents IA orchestrés sur VPS, 7 APIs connectées",
      "Connexions API publiques (INSEE SIRENE, Pappers, Apollo)",
      "Intégration et préparation CRM HubSpot",
    ],
    stats: [
      { value: "10k+", label: "contacts B2B enrichis" },
      { value: "3-4h", label: "→ 20 min avec agent Hermes" },
      { value: "7", label: "APIs orchestrées en production" },
    ],
  },
}

export const marqueeText =
  "GROWTH OPS — SCRAPING B2B — AUTOMATISATION MAKE — AGENTS IA — ENRICHISSEMENT CONTACTS — WORKFLOWS MULTI-ÉTAPES — API INSEE SIRENE — PAPPERS — APOLLO — HUBSPOT — SALES NAVIGATOR — PHAROW — EVABOOT — VPS 24/7 — ORCHESTRATION MULTI-APIS — LYON — CDI —"

export const features = [
  {
    icon: "🔍",
    title: "Scraping B2B & enrichissement",
    bullets: [
      "10 000 contacts ciblés par reverse engineering de la BDD clients",
      "Sales Navigator, Pharow, Evaboot, Societeinfo",
      "Déduplication SIRET et enrichissement API INSEE SIRENE",
      "Préparation et import HubSpot prêt à l'emploi",
    ],
    accent: "sage" as const,
  },
  {
    icon: "⚡",
    title: "Automatisation & workflows Make",
    bullets: [
      "30 à 60 min économisées par recherche — accessible à l'équipe",
      "Workflows multi-étapes avec connexions API",
      "Interfaces pensées pour les non-techniciens",
      "Systèmes livrés et utilisés en production",
    ],
    accent: "terracotta" as const,
  },
  {
    icon: "🤖",
    title: "Agents IA & orchestration",
    bullets: [
      "Agent Hermes : 3-4h de recherche → 20-30 min automatisées",
      "VPS 24/7, 7 APIs orchestrées (Pappers, Apollo, Notion, RocketReach…)",
      "Skill system versionné, architecture multi-APIs",
      "Scripting via LLM, déploiement autonome",
    ],
    accent: "purple" as const,
  },
]

export const experiences = [
  {
    icon: "🏭",
    title: "Locabri — Growth Ops en alternance",
    badge: "2025 - 2026",
    description:
      "Scraping B2B industriel, enrichissement de bases contacts et automatisation de workflows pour les équipes commerciales et marketing.",
    points: [
      "10 000 contacts B2B ciblés par reverse engineering de la BDD clients existante",
      "Ciblage de 8 catégories de décideurs industriels via Sales Navigator, Pharow, Evaboot",
      "Déduplication SIRET et enrichissement API INSEE SIRENE et Societeinfo",
      "Automatisation Make accessible à l'équipe : 30 à 60 min économisées par recherche",
      "Outil de tri emails RGPD en cours de déploiement équipe",
    ],
    accent: "terracotta" as const,
    link: { label: "Voir l'expérience →", href: "#" },
  },
  {
    icon: "📊",
    title: "Aésio Mutuelle — Data Analyste",
    badge: "2023",
    description:
      "Expérience data marketing orientée reporting multi-sources et pilotage de campagnes.",
    points: [
      "Centralisation ATI et Salesforce dans Qlik Sense",
      "Conception de 5 dashboards de suivi SEA",
      "Reporting consolidé Salesforce, Google Analytics et ATI",
      "Transformation de données brutes en décisions d'optimisation campagnes",
    ],
    accent: "sage" as const,
    link: { label: "Voir l'expérience →", href: "#" },
  },
  {
    icon: "🎸",
    title: "Guitar Flow — Produit lancé de A à Z",
    badge: "Side-project",
    description:
      "Création et lancement d'un produit physique pour guitaristes, piloté par la recherche d'insights utilisateurs.",
    points: [
      "500 verbatims Reddit et YouTube analysés pour identifier les JTBD des guitaristes",
      "Construction de personas et framework JTBD avant toute ligne de design",
      "Itération produit basée sur les insights : 83 cartes de créativité lancées",
      "Vibe-coding avec Claude et Cursor, copywriting et stratégie de lancement",
    ],
    accent: "terracotta" as const,
    link: { label: "Voir Guitar Flow →", href: "https://guitarflow.fr" },
  },
  {
    icon: "🤖",
    title: "Workflows no-code & agents IA",
    badge: "Automatisation",
    description:
      "Systèmes automatisés livrés et utilisés en production — conçus pour être utilisables sans profil technique.",
    points: [
      "Système de gestion d'élèves livré et en production depuis plusieurs mois",
      "Formulaire d'inscription, stockage Airtable, trombinoscope et SMS Twilio automatisés",
      "Agent Hermes : 7 APIs orchestrées, VPS 24/7, 3-4h de recherche → 20-30 min",
      "Pipeline newsletter : rédaction IA, segmentation, envoi conditionnel",
    ],
    accent: "sage" as const,
    link: { label: "Voir les systèmes →", href: "#" },
  },
]

export const process = [
  {
    num: "01",
    title: "Comprendre",
    description:
      "Identifier l'objectif business, qui dans l'équipe va utiliser le système, et quels outils ils ont déjà.",
  },
  {
    num: "02",
    title: "Construire",
    description:
      "Transformer un besoin flou en workflow, agent ou pipeline de données — documenté et utilisable sans moi.",
  },
  {
    num: "03",
    title: "Livrer",
    description:
      "Déployer un outil que l'équipe peut utiliser dès le premier mois, sans dépendre d'un profil technique.",
  },
  {
    num: "04",
    title: "Itérer",
    description:
      "Suivre les résultats réels, corriger, améliorer — pas un POC qui dort, un système qui évolue.",
  },
]

export const stack = [
  "Sales Navigator",
  "Pharow",
  "Evaboot",
  "Societeinfo",
  "API INSEE SIRENE",
  "Pappers",
  "Apollo",
  "RocketReach",
  "HubSpot",
  "Make",
  "n8n",
  "Airtable",
  "Twilio",
  "Brevo",
  "Notion",
  "Claude",
  "Claude Code",
  "Cursor",
  "Figma",
  "Excel",
]

export const faqs = [
  {
    q: "Quel type de poste recherches-tu ?",
    a: "Un CDI Growth Ops à Lyon, disponible en septembre 2026. Je cherche une équipe qui a des besoins concrets en scraping B2B, automatisation ou agents IA — pas un poste où je vais faire du reporting Looker Studio.",
  },
  {
    q: "Quelle est ta zone de recherche ?",
    a: "Lyon uniquement. Startup, scale-up, SaaS, industrie B2B — peu importe le secteur, ce qui compte c'est que l'équipe ait un vrai enjeu d'acquisition à résoudre.",
  },
  {
    q: "Sur quels sujets peux-tu être opérationnel dès le premier mois ?",
    a: "Scraping B2B et enrichissement de contacts (j'ai livré 10 000 contacts chez Locabri), automatisations Make accessibles à l'équipe, et construction d'agents IA sur VPS. Sur HubSpot : import, gestion contacts, pipelines.",
  },
  {
    q: "Quels outils maîtrises-tu vraiment ?",
    a: "Autonome sur : Sales Navigator, Pharow, Evaboot, Societeinfo, API INSEE SIRENE, Make, agents IA (Pappers, Apollo, RocketReach, Notion orchestrés). Opérationnel sur : HubSpot, n8n, Airtable, Brevo, Twilio. Python si besoin via LLM, déploiement autonome.",
  },
  {
    q: "Qu'est-ce qui te différencie d'un growth classique ?",
    a: "La plupart des growth exécutent des tactiques. Moi je construis les systèmes qui permettent à l'équipe d'exécuter plus vite et sans dépendre d'un profil technique. Mes outils sont documentés, déployés, et utilisés par d'autres — pas des scripts qui dorment sur mon ordi.",
  },
]

export const about = {
  title: "À propos de moi",
  subtitle:
    "Je construis des systèmes growth utilisables par des non-techniciens — scraping B2B, automatisation Make, agents IA orchestrés.",
  paragraphs: [
    "Je m'appelle Rémi BECCAT, 28 ans, basé à Lyon. Je recherche un CDI Growth Ops à partir de septembre 2026.",
    "Ce qui me différencie d'un growth classique : je ne fais pas qu'exécuter des tactiques, je construis l'infrastructure. Mes outils sont pensés pour être utilisés par l'équipe, pas juste par moi. Je connecte des briques que personne n'a pensé à connecter.",
    "Chez Locabri, j'ai livré 10 000 contacts B2B ciblés par reverse engineering de la base clients, automatisé des workflows Make accessibles aux non-techniciens et construit un agent IA qui réduit 3-4h de recherche manuelle à 20-30 minutes.",
    "18 mois en environnement anglophone. Anglais professionnel. Ce que je cherche : une équipe avec un vrai enjeu d'acquisition à résoudre — pas un poste où je vais refaire ce qui existe déjà.",
  ],
  ctaPrimary: { label: "Me contacter par email", href: "mailto:remibekka@gmail.com" },
  ctaSecondary: { label: "Voir mon LinkedIn", href: "https://linkedin.com/in/remibeccat" },
  ctaTertiary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
  stats: [
    { value: "10k+", label: "contacts B2B enrichis", accent: "terracotta" as const },
    { value: "7", label: "APIs orchestrées en production", accent: "sage" as const },
    { value: "20 min", label: "vs 3-4h avec agent Hermes", accent: "purple" as const },
    { value: "sept. 2026", label: "disponible en CDI", accent: "terracotta" as const },
  ],
}

export const contact = {
  title: "Échangeons sur une opportunité CDI.",
  subtitle:
    "Je recherche un CDI Growth Ops à Lyon à partir de septembre 2026. Si vous avez un enjeu concret en scraping B2B, automatisation ou agents IA — parlons-en.",
  email: "remibekka@gmail.com",
  phone: "06 01 72 83 47",
  location: "Lyon uniquement",
  availability: "À partir de septembre 2026",
  recherche: "CDI Growth Ops",
  project: "guitarflow.fr",
  ctas: [
    { label: "Me contacter par email", href: "mailto:remibekka@gmail.com", style: "primary" as const },
    { label: "Voir mon LinkedIn", href: "https://linkedin.com/in/remibeccat", style: "outline" as const },
    { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf", style: "outline" as const },
  ],
}

export const footer = {
  copy: "© 2026 Rémi BECCAT — Growth Ops basé à Lyon.",
  links: [
    { label: "Email", href: "mailto:remibekka@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/remibeccat" },
    { label: "Guitar Flow", href: "https://guitarflow.fr" },
    { label: "CV", href: "/cv-remi-beccat.pdf" },
  ],
}
