export const nav = {
  name: "Rémi BECCAT",
  tagline: "Growth Engineer Junior",
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
  badge: "Recherche CDI Growth Engineer Junior",
  badgeSecondary: "Disponible à partir de septembre 2026 · Lyon uniquement",
  titleLine1: "Je construis des systèmes",
  titleLine2: "d'automatisation pour",
  titleAccent: "accélérer l'acquisition.",
  subtitle:
    "Growth Engineer Junior à Lyon, je combine data, automatisation no-code, IA et scraping B2B pour aider les équipes growth à identifier les bons prospects, structurer leurs données et exécuter plus vite.",
  ctaPrimary: { label: "Me contacter par email", href: "mailto:remibekka@gmail.com" },
  ctaSecondary: { label: "Voir mon LinkedIn", href: "https://linkedin.com/in/remibeccat" },
  ctaTertiary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
  card: {
    title: "Ce que je peux apporter",
    checklist: [
      "Automatisation no-code & IA opérationnelle",
      "Scraping B2B et enrichissement de contacts",
      "Workflows marketing ops et CRM",
      "Dashboards et reporting d'acquisition",
      "Création produit, copywriting et lancement",
    ],
    stats: [
      { value: "10k+", label: "contacts B2B enrichis" },
      { value: "5", label: "dashboards marketing créés" },
      { value: "83", label: "cartes Guitar Flow lancées" },
    ],
  },
}

export const marqueeText =
  "GROWTH ENGINEERING — AUTOMATISATION IA — SCRAPING B2B — DATA ENRICHMENT — MARKETING OPS — NO-CODE — HUBSPOT — SALES NAVIGATOR — PHAROW — EVABOOT — QLIK SENSE — MAKE — N8N — AIRTABLE — DASHBOARDS — ACQUISITION — LYON — CDI —"

export const features = [
  {
    icon: "⚡",
    title: "Automatisation & IA opérationnelle",
    bullets: [
      "Workflows Make, n8n, Airtable, Twilio et Brevo",
      "Automatisation de newsletters, suivis et bases de données",
      "Agents IA pour recherche, audit et synthèse",
      "Connexions API et structuration de données",
    ],
    accent: "terracotta" as const,
  },
  {
    icon: "🔍",
    title: "Scraping B2B & enrichissement",
    bullets: [
      "Ciblage de décideurs B2B",
      "Scraping via Sales Navigator, Pharow, Evaboot et sources web",
      "Enrichissement avec Societeinfo et API INSEE SIRENE",
      "Nettoyage, déduplication et préparation CRM HubSpot",
    ],
    accent: "sage" as const,
  },
  {
    icon: "📊",
    title: "Dashboards & pilotage growth",
    bullets: [
      "Dashboards Qlik Sense",
      "Reporting marketing multi-sources",
      "Suivi SEA, Salesforce, Google Analytics et ATI",
      "Vision unifiée du parcours client",
    ],
    accent: "purple" as const,
  },
]

export const experiences = [
  {
    icon: "🏭",
    title: "Locabri — Growth Engineer en alternance",
    badge: "2025 - 2026",
    description:
      "Chez Locabri, je travaille sur des sujets de scraping B2B industriel, d'enrichissement de bases contacts et d'automatisation de workflows data pour les équipes commerciales et marketing.",
    points: [
      "Scraping et enrichissement de 10 000 contacts B2B",
      "Ciblage de décideurs industriels sur 8 catégories métiers",
      "Utilisation de Sales Navigator, Pharow, Evaboot et Societeinfo",
      "Nettoyage Excel avant import HubSpot",
      "Déduplication sur SIRET",
      "Enrichissement via API INSEE SIRENE",
    ],
    accent: "terracotta" as const,
    link: { label: "Voir l'expérience →", href: "#" },
  },
  {
    icon: "📊",
    title: "Aésio Mutuelle — Data Analyste",
    badge: "2023",
    description:
      "Expérience data marketing orientée dashboards, reporting multi-sources et pilotage de campagnes.",
    points: [
      "Centralisation ATI et Salesforce dans Qlik Sense",
      "Création d'une vision unifiée du parcours client",
      "Conception de 5 dashboards de suivi SEA",
      "Reporting consolidé Salesforce, Google Analytics et ATI",
      "Transformation de données brutes en décisions d'optimisation",
    ],
    accent: "sage" as const,
    link: { label: "Voir l'expérience →", href: "#" },
  },
  {
    icon: "🎸",
    title: "Guitar Flow — Produit lancé de A à Z",
    badge: "Side-project",
    description:
      "Création et lancement d'un produit personnel pour guitaristes, mêlant recherche d'insights, design, copywriting, vibe-coding et stratégie de lancement.",
    points: [
      "Recherche d'insights via scraping Reddit et YouTube",
      "Design Figma",
      "Vibe-coding avec Claude et Cursor",
      "Copywriting et stratégie de lancement",
      "Création de 83 cartes de créativité pour guitaristes",
    ],
    accent: "terracotta" as const,
    link: { label: "Voir Guitar Flow →", href: "https://guitarflow.fr" },
  },
  {
    icon: "🤖",
    title: "Workflows no-code & agents IA",
    badge: "Automatisation",
    description:
      "Conception de systèmes automatisés pour réduire les tâches manuelles et structurer des opérations marketing, pédagogiques ou growth.",
    points: [
      "Gestion complète d'élèves pour professeur de guitare",
      "Formulaire d'inscription, stockage Airtable et trombinoscope",
      "Envoi automatique de SMS via Twilio",
      "Pipeline newsletter : rédaction IA, segmentation, envoi conditionnel",
      "Agent autonome de recherche d'entreprise, audit et scraping de contacts",
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
      "Identifier l'objectif business, le public cible, les sources de données et les contraintes opérationnelles.",
  },
  {
    num: "02",
    title: "Structurer",
    description:
      "Transformer un besoin flou en workflow, base de données, dashboard, script ou plan d'expérimentation.",
  },
  {
    num: "03",
    title: "Automatiser",
    description:
      "Utiliser les bons outils no-code, IA ou data pour supprimer les tâches répétitives et fiabiliser les process.",
  },
  {
    num: "04",
    title: "Mesurer",
    description:
      "Suivre les résultats, documenter les apprentissages et améliorer le système à partir des données.",
  },
]

export const stack = [
  "Sales Navigator",
  "Pharow",
  "Evaboot",
  "Societeinfo",
  "HubSpot",
  "Qlik Sense",
  "Google Analytics",
  "Salesforce",
  "Make",
  "n8n",
  "Airtable",
  "Twilio",
  "Brevo",
  "ChatGPT",
  "Claude",
  "Claude Code",
  "Cursor",
  "Figma",
  "API INSEE SIRENE",
  "Excel",
]

export const faqs = [
  {
    q: "Quel type de poste recherches-tu ?",
    a: "Je recherche uniquement un CDI en Growth Engineer Junior, idéalement à Lyon. Je suis disponible à partir de septembre 2026 et je souhaite rejoindre une équipe où je peux contribuer sur l'acquisition, l'automatisation, la data et les opérations growth.",
  },
  {
    q: "Quelle est ta zone de recherche ?",
    a: "Je cherche un poste basé à Lyon. Je suis ouvert sur le type d'entreprise : startup, scale-up, PME, SaaS, industrie B2B, agence ou équipe marketing/growth interne.",
  },
  {
    q: "Sur quels sujets peux-tu être rapidement opérationnel ?",
    a: "Je peux être rapidement opérationnel sur l'automatisation no-code, les workflows IA, le scraping B2B, l'enrichissement de bases contacts, le nettoyage de fichiers, la préparation CRM, la création de dashboards et le reporting marketing.",
  },
  {
    q: "Quels outils maîtrises-tu ?",
    a: "J'ai travaillé avec Sales Navigator, Pharow, Evaboot, Societeinfo, HubSpot, Qlik Sense, Salesforce, Google Analytics, Make, n8n, Airtable, Twilio, Brevo, ChatGPT, Claude, Claude Code, Cursor, Figma, Excel et l'API INSEE SIRENE.",
  },
  {
    q: "Qu'est-ce qui te différencie d'un profil marketing classique ?",
    a: "Je ne me limite pas à la stratégie ou aux idées. Je peux chercher les données, les nettoyer, créer un workflow, automatiser une tâche, construire un dashboard, rédiger un message et aller jusqu'au déploiement. Mon angle principal est l'automatisation et l'IA appliquées à des problèmes growth concrets.",
  },
]

export const about = {
  title: "À propos de moi",
  subtitle:
    "Je suis un Growth Engineer Junior basé à Lyon, à la croisée de la data, de l'automatisation, de l'IA et de la créativité.",
  paragraphs: [
    "Je m'appelle Rémi BECCAT et je recherche un CDI en Growth Engineer Junior à Lyon, à partir de septembre 2026.",
    "Mon parcours combine marketing digital, data analytics, automatisation et growth hacking. J'aime passer d'un problème concret à un système déployé : trouver les bonnes données, les structurer, automatiser les tâches répétitives, créer des dashboards et transformer les apprentissages en actions.",
    "Chez Locabri, je travaille sur le scraping et l'enrichissement de contacts B2B industriels, avec une logique très opérationnelle : ciblage, extraction, nettoyage, déduplication, enrichissement et préparation pour les équipes commerciales et marketing.",
    "Avec Guitar Flow, j'ai mené un produit de A à Z : recherche d'insights, design Figma, copywriting, vibe-coding et stratégie de lancement. Ce que je cherche aujourd'hui : rejoindre une équipe growth ambitieuse à Lyon, apprendre vite, contribuer concrètement et construire des systèmes d'acquisition plus efficaces grâce à l'automatisation, l'IA et la data.",
  ],
  ctaPrimary: { label: "Me contacter par email", href: "mailto:remibekka@gmail.com" },
  ctaSecondary: { label: "Voir mon LinkedIn", href: "https://linkedin.com/in/remibeccat" },
  ctaTertiary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
  stats: [
    { value: "10k+", label: "contacts B2B enrichis", accent: "terracotta" as const },
    { value: "5", label: "dashboards marketing créés", accent: "sage" as const },
    { value: "83", label: "cartes créatives lancées", accent: "purple" as const },
    { value: "2026", label: "disponible en septembre", accent: "terracotta" as const },
  ],
}

export const contact = {
  title: "Échangeons sur une opportunité CDI.",
  subtitle:
    "Je recherche un CDI Growth Engineer Junior à Lyon à partir de septembre 2026. Vous pouvez me contacter par email, consulter mon LinkedIn ou télécharger mon CV.",
  email: "remibekka@gmail.com",
  phone: "06 01 72 83 47",
  location: "Lyon uniquement",
  availability: "À partir de septembre 2026",
  recherche: "CDI Growth Engineer Junior",
  project: "guitarflow.fr",
  ctas: [
    { label: "Me contacter par email", href: "mailto:remibekka@gmail.com", style: "primary" as const },
    { label: "Voir mon LinkedIn", href: "https://linkedin.com/in/remibeccat", style: "outline" as const },
    { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf", style: "outline" as const },
  ],
}

export const footer = {
  copy: "© 2026 Rémi BECCAT — Growth Engineer Junior basé à Lyon.",
  links: [
    { label: "Email", href: "mailto:remibekka@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/remibeccat" },
    { label: "Guitar Flow", href: "https://guitarflow.fr" },
    { label: "CV", href: "/cv-remi-beccat.pdf" },
  ],
}
