export const nav = {
  name: "rémi beccat",
  tagline: "Growth Marketer",
  links: [
    { label: "Apports", href: "#apports" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Méthode", href: "#methode" },
    { label: "Stack", href: "#stack" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Télécharger mon CV",
  ctaHref: "/cv-remi-beccat.pdf",
}

export const hero = {
  title: "Growth Marketer",
  leadStart: "Je construis des systèmes de",
  keywords: ["Scraping", "Automatisation", "Data", "IA"],
  leadEnd: "utilisables par toute l'équipe.",
  meta: "Freelance ou intégré à votre équipe · Lyon",
  ctaPrimary: { label: "Me contacter", href: "mailto:remibekka@gmail.com" },
  ctaSecondary: { label: "Voir mes réalisations", href: "#realisations" },
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

// ─────────────────────────────────────────────────────────────────────────
// SECTION FICTIVE — livrables extrapolés pour caler la structure et le design.
// À remplacer par les vraies réalisations. Les valeurs `result` (et les [X])
// sont des placeholders à confirmer avant mise en ligne.
// Gabarit : problem + result = lecture rapide / how = niveau technique.
// ─────────────────────────────────────────────────────────────────────────
export const realisations = [
  {
    title: "Scraping B2B automatisé de bout en bout",
    type: "Workflow",
    context: "Réalisé chez Locabri",
    problem:
      "L'équipe commerciale montait ses listes de prospection à la main, cible par cible, plusieurs heures par semaine.",
    result:
      "≈ 10 000 contacts collectés en autonomie, sans saisie manuelle — [X] h/semaine rendues à l'équipe.",
    how: [
      "Scénario Make déclenché sur une liste de critères (secteur, taille, zone)",
      "Chaînage Sales Navigator → Pharow → Evaboot pour l'extraction",
      "Nettoyage et normalisation des champs avant sortie",
      "Export CSV au format figé, prêt à importer dans le CRM",
    ],
    accent: "terracotta" as const,
  },
  {
    title: "Enrichissement et dédoublonnage de contacts",
    type: "Workflow",
    context: "Réalisé chez Locabri",
    problem:
      "Les fichiers prospects arrivaient incomplets et en double, avec des SIRET manquants ou erronés.",
    result:
      "Base fiabilisée à [X] %, doublons éliminés, chaque contact rattaché à une entreprise vérifiée.",
    how: [
      "Rapprochement SIRET via l'API INSEE SIRENE",
      "Complétion des données société (effectif, code NAF, adresse)",
      "Règle de dédoublonnage sur SIRET + email normalisé",
      "Rapport d'anomalies généré à chaque passage",
    ],
    accent: "sage" as const,
  },
  {
    title: "Vérification d'emails conforme RGPD",
    type: "Workflow + interface",
    context: "Réalisé chez Locabri",
    problem:
      "Aucun moyen simple de contrôler la validité des adresses et la base légale d'un fichier avant une campagne.",
    result:
      "Contrôle ramené à quelques minutes, [X] fichiers assainis avant envoi — outil déployé pour l'équipe.",
    how: [
      "Interface de dépôt de fichier utilisable sans compétence technique",
      "Vérification syntaxe, domaine et délivrabilité de chaque adresse",
      "Contrôle de la source et du consentement associé (RGPD)",
      "Export d'une liste nettoyée + journal des contrôles conservé",
    ],
    accent: "terracotta" as const,
  },
  {
    title: "Dashboard Excel de pilotage de la prospection",
    type: "Dashboard",
    context: "Réalisé chez Locabri",
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
    title: "Agent IA d'enrichissement multi-sources (Hermes)",
    type: "Agent IA",
    context: "Projet personnel / R&D",
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
    title: "Guitar Flow — de la recherche utilisateur au produit lancé",
    type: "Projet complet",
    context: "Projet personnel",
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

export const stack = [
  "Sales Navigator",
  "Pharow",
  "Evaboot",
  "Societeinfo",
  "HubSpot",
  "Make",
  "n8n",
  "Airtable",
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
  title: "Enchanté",
  emoji: "👋",
  initials: "RB",
  photoCaption: "Lyon · Growth Ops",
  paragraphs: [
    "Je m'appelle Rémi BECCAT, 28 ans, basé à Lyon. Je recherche un CDI Growth Ops à partir de septembre 2026.",
    "Ce qui me différencie d'un growth classique : je ne fais pas qu'exécuter des tactiques, je construis l'infrastructure. Mes outils sont pensés pour être utilisés par l'équipe, pas juste par moi. Je connecte des briques que personne n'a pensé à connecter.",
    "Chez Locabri, j'ai livré 10 000 contacts B2B ciblés par reverse engineering de la base clients, automatisé des workflows Make accessibles aux non-techniciens et construit un agent IA qui réduit 3-4h de recherche manuelle à 20-30 minutes.",
    "18 mois en environnement anglophone. Anglais professionnel. Ce que je cherche : une équipe avec un vrai enjeu d'acquisition à résoudre — pas un poste où je vais refaire ce qui existe déjà.",
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
  copy: "© 2026 Rémi BECCAT — Growth Marketer basé à Lyon.",
  linkedin: "https://www.linkedin.com/in/remibeccat/",
}
