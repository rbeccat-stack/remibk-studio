export const nav = {
  name: "rémi beccat",
  tagline: "Growth Marketer",
  links: [
    { label: "Apports", href: "#apports" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Méthode", href: "#methode" },
    { label: "Outils", href: "#outils" },
    { label: "À propos", href: "#apropos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Me contacter",
  ctaHref: "mailto:remibekka@gmail.com",
}

export const hero = {
  title: "Growth Marketer",
  leadStart: "Je construis des systèmes de",
  keywords: ["Scraping", "Automatisation", "Data", "IA"],
  leadEnd: "utilisables par toute l'équipe.",
  meta: "Disponible immédiatement · Lyon",
  ctaPrimary: { label: "Me contacter", href: "mailto:remibekka@gmail.com" },
  ctaSecondary: { label: "Voir mes réalisations", href: "#realisations" },
}

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

// ─────────────────────────────────────────────────────────────────────────
// Gabarit : problem + result = lecture rapide / how = niveau technique.
// Ne publier ici que des chiffres défendables en entretien.
// ─────────────────────────────────────────────────────────────────────────
export const realisations = [
  {
    title: "Trouver des prospects automatiquement",
    type: "Workflow",
    context: "Réalisé chez Locabri",
    summary:
      "Un système qui va chercher les bons contacts B2B à la place de l'équipe commerciale.",
    problem:
      "L'équipe commerciale montait ses listes de prospection à la main, cible par cible, plusieurs heures par semaine.",
    result:
      "≈ 10 000 contacts collectés en autonomie, sans saisie manuelle — plusieurs heures par semaine rendues à l'équipe commerciale.",
    how: [
      "Scénario Make déclenché sur une liste de critères (secteur, taille, zone)",
      "Chaînage Sales Navigator → Pharow → Evaboot pour l'extraction",
      "Nettoyage et normalisation des champs avant sortie",
      "Export CSV au format figé, prêt à importer dans le CRM",
    ],
    accent: "terracotta" as const,
  },
  {
    title: "Nettoyer et fiabiliser une base de contacts",
    type: "Workflow",
    context: "Réalisé chez Locabri",
    summary:
      "Les fichiers de prospects arrivaient incomplets et en double — ce système les corrige tout seul.",
    problem:
      "Les fichiers prospects arrivaient incomplets et en double, avec des SIRET manquants ou erronés.",
    result:
      "Base fiabilisée : doublons éliminés, chaque contact rattaché à une entreprise vérifiée par son SIRET.",
    how: [
      "Rapprochement SIRET via l'API INSEE SIRENE",
      "Complétion des données société (effectif, code NAF, adresse)",
      "Règle de dédoublonnage sur SIRET + email normalisé",
      "Rapport d'anomalies généré à chaque passage",
    ],
    accent: "sage" as const,
  },
  {
    title: "Vérifier des emails avant une campagne",
    type: "Workflow + interface",
    context: "Réalisé chez Locabri",
    summary:
      "Un outil simple pour contrôler en quelques minutes que les adresses d'un fichier sont valides et exploitables.",
    problem:
      "Aucun moyen simple de contrôler la validité des adresses et la base légale d'un fichier avant une campagne.",
    result:
      "Contrôle ramené à quelques minutes, chaque fichier assaini avant envoi — outil déployé et utilisé par l'équipe.",
    how: [
      "Interface de dépôt de fichier utilisable sans compétence technique",
      "Vérification syntaxe, domaine et délivrabilité de chaque adresse",
      "Contrôle de la source et du consentement associé (RGPD)",
      "Export d'une liste nettoyée + journal des contrôles conservé",
    ],
    accent: "terracotta" as const,
  },
  {
    title: "Piloter la prospection en un coup d'œil",
    type: "Dashboard",
    context: "Réalisé chez Locabri",
    summary:
      "Un tableau de bord qui rassemble tous les chiffres de prospection au même endroit, à jour automatiquement.",
    problem:
      "Le suivi des volumes contactés et des retours se faisait dans des fichiers éparpillés, sans vue d'ensemble.",
    result:
      "Une vue unique et actualisée : volumes, taux de réponse et pipeline par catégorie de cible.",
    how: [
      "Consolidation des exports CRM et des fichiers de campagne",
      "Tableaux croisés dynamiques et indicateurs de suivi hebdomadaire",
      "Mise en forme conditionnelle pour repérer les signaux faibles",
      "Procédure de mise à jour documentée, tenue par l'équipe",
    ],
    accent: "sage" as const,
  },
  {
    title: "Cartographier les prospects B2B à 15 minutes à pied",
    type: "Carte interactive",
    context: "Réalisé pour un client (anonymisé)",
    summary:
      "Une carte qui transforme une adresse en liste priorisée d'entreprises à démarcher autour d'elle.",
    problem:
      "L'entreprise changeait de locaux et voulait savoir quelles sociétés démarcher autour de sa nouvelle adresse, sans aucune base de prospection existante sur cette zone.",
    result:
      "99 comptes qualifiés sur 466 identifiés dans le périmètre, priorisés par effectif et type d'interlocuteur — prêts à démarcher.",
    how: [
      "Extraction du périmètre via l'API Recherche d'entreprises (Sirene/DINUM)",
      "Filtrage sur l'effectif réel du site et calcul de la distance à pied",
      "Qualification manuelle du type d'interlocuteur et de la présence d'un CSE",
      "Carte SVG interactive : filtres croisés, fiches détaillées, fond de plan dessiné à la main",
    ],
    accent: "terracotta" as const,
  },
  {
    title: "Un agent IA qui qualifie les prospects",
    type: "Agent IA",
    context: "Projet personnel / R&D",
    summary:
      "Ce qui prenait 3 à 4 heures de recherche manuelle se fait maintenant tout seul, 24 heures sur 24.",
    problem:
      "Qualifier un prospect demandait 3-4 h de recherche manuelle répartie sur une dizaine d'outils.",
    result:
      "Même travail livré en 20-30 min, l'agent tournant seul 24/7 sur un serveur dédié.",
    how: [
      "7 APIs orchestrées (Pappers, Apollo, RocketReach, Notion…)",
      "Découpage en compétences réutilisables et versionnées",
      "Déploiement autonome sur VPS, exécution planifiée",
      "Sorties normalisées, prêtes à verser dans un CRM",
    ],
    accent: "terracotta" as const,
  },
  {
    title: "Guitar Flow — d'une idée à un produit vendu",
    type: "Projet complet",
    context: "Projet personnel",
    summary:
      "Un produit physique pensé, testé puis lancé à partir des vrais besoins des guitaristes.",
    problem:
      "Vérifier qu'un besoin réel existait chez les guitaristes avant d'investir dans un produit physique.",
    result:
      "500 verbatims analysés, un cadre de besoins structuré, puis un produit réellement mis en vente.",
    how: [
      "Collecte et codage de 500 verbatims Reddit et YouTube",
      "Construction de personas et d'un cadre Jobs-to-be-Done",
      "83 cartes de créativité conçues à partir des insights",
      "Prototypage, copywriting et stratégie de lancement",
    ],
    accent: "sage" as const,
    link: { label: "Voir Guitar Flow", href: "https://guitarflow.fr" },
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

// Niveaux : 3 = Autonome (j'ai livré avec), 2 = Opérationnel (utilisé en
// production), 1 = Notions (je sais où chercher). Pas de pourcentage inventé.
export const toolLevels = {
  3: { label: "Autonome", hint: "j'ai livré avec" },
  2: { label: "Opérationnel", hint: "utilisé en production" },
  1: { label: "Notions", hint: "je sais où chercher" },
} as const

export type ToolLevel = keyof typeof toolLevels

export const toolGroups: {
  title: string
  tag: string
  accent: "terracotta" | "sage"
  tools: { name: string; level: ToolLevel }[]
}[] = [
  {
    title: "Prospection & données B2B",
    tag: "Cœur de métier",
    accent: "terracotta",
    tools: [
      { name: "Sales Navigator", level: 3 },
      { name: "Pharow", level: 3 },
      { name: "Evaboot", level: 3 },
      { name: "Societeinfo", level: 3 },
      { name: "API INSEE Sirene", level: 3 },
      { name: "Pappers", level: 3 },
    ],
  },
  {
    title: "Automatisation & CRM",
    tag: "En production",
    accent: "sage",
    tools: [
      { name: "Make", level: 3 },
      { name: "HubSpot", level: 2 },
      { name: "n8n", level: 2 },
      { name: "Airtable", level: 2 },
      { name: "Brevo", level: 2 },
      { name: "Twilio", level: 2 },
    ],
  },
  {
    title: "Agents & IA",
    tag: "Focus actuel",
    accent: "terracotta",
    tools: [
      { name: "Claude", level: 3 },
      { name: "Claude Code", level: 3 },
      { name: "Apollo · RocketReach (API)", level: 3 },
      { name: "Cursor", level: 2 },
      { name: "Python via LLM", level: 1 },
    ],
  },
  {
    title: "Pilotage & design",
    tag: "Support",
    accent: "sage",
    tools: [
      { name: "Excel", level: 3 },
      { name: "Notion", level: 3 },
      { name: "Figma", level: 2 },
    ],
  },
]

export const toolsIntro =
  "Trois niveaux, pas de pourcentage inventé. Autonome : j'ai livré un système avec. Opérationnel : je l'ai utilisé en production. Notions : je sais où aller chercher."

// Réponses : un tableau de paragraphes. Une ligne qui commence par "• "
// s'affiche comme puce.
export const faqSection = {
  title: "Avant que vous ne les posiez.",
  underlineWord: "posiez",
  subtitle: "7 réponses pour gagner 5 minutes au premier échange.",
}

export const faqs: { q: string; a: string[] }[] = [
  {
    q: "Pourquoi un CDI et pas du freelance ?",
    a: [
      "Je priorise le CDI pour la stabilité, la durée et la montée en compétences rapide. Le vrai impact sur une stack growth arrive après 6 à 12 mois : on connaît les vrais cas tordus, on construit avec l'équipe, on mesure ce qui bouge.",
      "Cela dit, je suis ouvert au freelance si le chantier est précis et le périmètre clair.",
    ],
  },
  {
    q: "Ce que je ne fais pas",
    a: [
      "Je préfère le dire en premier :",
      "• Pas de reporting pur. Un poste où je passe mes journées dans Looker Studio sans rien construire, ce n'est pas pour moi.",
      "• Je ne suis pas développeur. Python via LLM quand il le faut, pas de JavaScript en production. Je monte en compétences si besoin.",
      "• Pas de management pour l'instant : je n'en ai pas encore eu l'occasion.",
      "• En revanche, je me débrouille sans dev avec les API, les webhooks, Make, n8n et les outils no-code — les 7 APIs de l'agent Hermes tournent sans développeur.",
      "Si un point est bloquant, autant le savoir maintenant.",
    ],
  },
  {
    q: "Salaire attendu ?",
    a: [
      "À discuter franchement dès le premier échange, en fonction du périmètre, de l'autonomie attendue et de la stack. Je préfère que ce soit clair tout de suite.",
    ],
  },
  {
    q: "Géographie · télétravail ?",
    a: [
      "Basé à Lyon. Présentiel ou hybride, l'un comme l'autre me va. Full remote possible si l'équipe est structurée pour.",
    ],
  },
  {
    q: "Vous codez en quoi, exactement ?",
    a: [
      "À l'aise avec HTML/CSS et le scripting Python via LLM : je lis, j'adapte et je déploie, sans prétendre être développeur. Pas de JavaScript en production.",
      "Ce que je sais faire sans dev : API REST, webhooks, Make, n8n, Airtable, déploiement sur VPS. L'agent Hermes — 7 APIs orchestrées, exécution planifiée 24/7 — a été construit et mis en production sans développeur.",
    ],
  },
  {
    q: "Vous démarrez quand ?",
    a: ["Immédiatement. Pas de préavis."],
  },
  {
    q: "Pourquoi ce portfolio ?",
    a: [
      "Pour deux raisons honnêtes : monter en compétences sur Claude et les outils IA, et me démarquer des autres candidats. Je voulais voir de quoi l'IA est capable, et de quoi je suis capable avec elle.",
      "C'est aussi la preuve concrète de ce que j'annonce : je construis des choses qui tournent, avec les outils du moment.",
    ],
  },
]

export const about = {
  title: "Enchanté",
  emoji: "👋",
  initials: "RB",
  paragraphs: [
    "Créatif dans l'âme, jamais à court d'idées, pour autant analytique et orienté data, j'ai naturellement atterri dans le growth marketing. Ce métier est la jonction parfaite entre l'envie de tester des idées et le besoin de mesurer, comprendre ce qui a fonctionné pour le reproduire.",
  ],
}

export const contact = {
  title: "On en parle 30 minutes ?",
  subtitle:
    "Pas de pitch. Trente minutes pour voir si votre enjeu d'acquisition et mon profil collent — scraping B2B, automatisation, agents IA. Disponible immédiatement à Lyon, en CDI ou en freelance. Je réponds dans la journée.",
  email: "remibekka@gmail.com",
  phone: "06 01 72 83 47",
  phoneHref: "tel:+33601728347",
  linkedin: "https://www.linkedin.com/in/remibeccat/",
  linkedinLabel: "/in/remibeccat",
  ctaPrimary: { label: "M'écrire un email", href: "mailto:remibekka@gmail.com?subject=Opportunit%C3%A9%20Growth%20%C3%A0%20Lyon" },
  ctaSecondary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
}

export const footer = {
  copy: "© 2026 Rémi BECCAT — Growth Marketer basé à Lyon.",
  linkedin: "https://www.linkedin.com/in/remibeccat/",
}
