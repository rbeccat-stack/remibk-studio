export const nav = {
  name: "rémi beccat",
  tagline: "Growth Marketer",
  links: [
    { label: "Réalisations", href: "#realisations" },
    { label: "Apports", href: "#apports" },
    { label: "Outils", href: "#outils" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Réserver un call",
  ctaHref: "https://cal.com/remi-beccat-32m3gf/30min",
}

export const hero = {
  title: "Growth Marketer",
  lead: "Un savant mélange de",
  keywords: ["Scraping", "Data", "Automatisation", "IA"],
  // Preuve chiffrée sous le titre : tirée de l'étude façadiers (26 vrais façadiers sur 100 dans le NAF).
  proof: "534 façadiers confirmés en croisant 4 sources publiques, là où le code NAF se trompait 3 fois sur 4.",
  proofLink: { label: "Voir les réalisations", href: "#realisations" },
  meta: "Disponible immédiatement · Lyon",
  ctaPrimary: { label: "Réserver un call · 30 min", href: "https://cal.com/remi-beccat-32m3gf/30min" },
  ctaSecondary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
}

export const features = [
  {
    icon: "🔍",
    title: "Scraping B2B & enrichissement",
    bullets: [
      "10 000 contacts ciblés par reverse engineering de la BDD clients",
      "Sales Navigator, Pharow, Evaboot, Societeinfo",
      "Déduplication SIRET et enrichissement API INSEE SIRENE",
      "Utilisation d'APIs pour automatiser la collecte et l'enrichissement",
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
    icon: "📊",
    title: "Data : préparation & dashboards",
    bullets: [
      "Nettoyage, déduplication et normalisation de bases CRM et exports",
      "Croisement de sources : SIRET, INSEE SIRENE, BODACC, HubSpot",
      "Dashboards de prospection à jour automatiquement : volumes, réponses, pipeline",
      "Modèles Excel documentés, tenus par l'équipe",
    ],
    accent: "sage" as const,
  },
  {
    icon: "🤖",
    title: "Agents IA & orchestration",
    bullets: [
      {
        text: "Agent Hermes : automatisation et optimisation de la recherche d'entreprises pour candidatures spontanées (3-4h → 20-30 min)",
        details: [
          "Collecte croisée sur 2 sources minimum (registres légaux, site, réseaux), chaque info étiquetée confirmée, inférée ou non trouvée",
          "Diagnostic des failles d'acquisition → 3 angles de candidature uniques, livrés en une page chiffrée",
        ],
        file: { label: "Télécharger le prompt (.md)", href: "/prompt-hermes.md" },
      },
      "VPS 24/7, 6 APIs orchestrées (Pappers, Notion, Apollo…)",
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
    title: "Trouver les décideurs d'une entreprise",
    type: "Outil web",
    context: "Projet personnel",
    tools: ["Make", "SocieteInfo API"],
    summary:
      "Un outil qui transforme un SIREN en liste de décideurs qualifiés, prêts à contacter.",
    problem:
      "Identifier le bon interlocuteur dans une entreprise (marketing, growth, direction, RH) demandait une recherche manuelle croisant plusieurs outils.",
    result:
      "Décideurs identifiés et qualifiés par rôle, avec email et score de délivrabilité, consultables via une interface web ou exportables en CSV.",
    how: [
      "Interface web + webhook : un SIREN suffit pour lancer la recherche",
      "Appel à l'API SocieteInfo, filtré sur une cinquantaine d'intitulés de poste pertinents (growth, marketing, direction, RH…)",
      "Email et score de délivrabilité renvoyés pour chaque contact",
      "Deux sorties selon le besoin : JSON pour l'interface, CSV agrégé pour l'export",
    ],
    accent: "terracotta" as const,
    link: { label: "Voir l'outil", href: "https://enrichissement-decideurs.remibk-studio.fr" },
  },
  {
    title: "Enrichir des décideurs à la chaîne",
    type: "Workflow",
    context: "Projet personnel",
    tools: ["Make", "Google Sheets", "API SIRENE (INSEE)", "SocieteInfo API"],
    summary:
      "Le même principe que l'outil web, mais capable de traiter une liste entière sans repasser par l'interface.",
    problem:
      "L'outil web traite une entreprise à la fois : pas de solution pour enrichir une liste de SIREN sans relancer la recherche à la main pour chacun.",
    result:
      "Une liste de SIREN déposée dans un Google Sheet suffit à lancer la chaîne : établissements récupérés et décideurs qualifiés s'écrivent automatiquement, sans intervention.",
    how: [
      "Un SIREN ajouté dans l'onglet INPUT est détecté automatiquement",
      "Récupération des établissements ouverts via l'API SIRENE (INSEE), écrits dans l'onglet OUTPUT",
      "Déclenchement automatique du second scénario par webhook",
      "Décideurs qualifiés (API SocieteInfo) ajoutés directement dans l'onglet CONTACTS",
    ],
    accent: "sage" as const,
  },
  {
    title: "Vérifier des emails avant une campagne",
    type: "Workflow + interface",
    context: "Réalisé chez Locabri",
    tools: ["Make", "Google Sheets", "JavaScript"],
    summary:
      "Un outil qui repère les emails dont le domaine ne correspond ni au site ni au nom de l'entreprise.",
    problem:
      "Avant une campagne, aucun moyen simple de repérer les emails dont le domaine ne correspondait pas à l'entreprise visée — erreur de saisie, contact parti, adresse générique.",
    result:
      "Chaque contact annoté d'un score de cohérence (0 à 100) entre son email, le site de l'entreprise et son nom légal, avec un commentaire explicite.",
    how: [
      "Dépôt d'un fichier Excel (onglet CONTACTS) via une interface d'upload",
      "Détection souple des colonnes Email, URL et Nom légal, quel que soit leur intitulé",
      "Extraction et comparaison des domaines (email, site, nom nettoyé, acronyme)",
      "Fichier de résultat généré automatiquement, prêt à consulter ou télécharger",
    ],
    accent: "terracotta" as const,
  },
  {
    // Masqué tant qu'il n'est pas retravaillé : passer draft à false pour le republier.
    draft: true,
    title: "Piloter la prospection en un coup d'œil",
    type: "Dashboard",
    context: "Réalisé chez Locabri",
    tools: ["HubSpot", "Excel"],
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
    context: "Projet personnel",
    tools: ["API Recherche d'entreprises", "SVG", "HTML"],
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
    link: { label: "Voir la carte", href: "https://cartographie-comptes-cibles.remibk-studio.fr/" },
  },
  {
    title: "Cibler un métier invisible aux codes NAF",
    type: "Étude de prospection",
    context: "Projet personnel",
    tools: ["Python", "API Recherche d'entreprises", "RGE ADEME", "BODACC", "Excel"],
    summary:
      "Un fichier de prospection fiable construit à partir de sources publiques, sans dépendre du code NAF.",
    problem:
      "Le code NAF ne suffit pas à cibler un métier de niche : sur 100 entreprises tirées au hasard dans le code le plus fréquent des façadiers, seules 26 faisaient vraiment ce métier.",
    result:
      "534 façadiers confirmés par preuve (label RGE, activité déclarée, contrôle web), 487 prospectables une fois les entreprises en procédure écartées.",
    how: [
      "Croisement de 4 sources publiques : Recherche d'entreprises, RGE ADEME, BODACC, contrôle web",
      "Hiérarchie de preuves par entreprise, du label RGE à l'absence de preuve",
      "Filtrage des entreprises en liquidation, redressement ou sauvegarde récente",
      "Audit complet et fichier Excel livrable, prêt à prospecter",
    ],
    accent: "sage" as const,
    link: { label: "Voir l'étude complète", href: "/cibler-les-facadiers" },
  },
  {
    title: "Swipe and Prospect — qualifier des associations preuves à l'appui",
    type: "Application web",
    context: "Projet personnel — en cours",
    tools: ["Next.js", "TypeScript", "SQLite", "Cheerio", "Zod"],
    summary:
      "Une application qui prépare, pour chaque association, un dossier sourcé et un brouillon d'approche, avant toute prise de contact.",
    problem:
      "Repérer des associations à accompagner sur le numérique prend du temps, et une simple liste de noms ne dit pas si le besoin existe vraiment. Un texte généré sans preuves, lui, invente des besoins.",
    result:
      "V0 fonctionnelle en local : 9 associations lyonnaises qualifiées en pilote, chaque fait relié à sa source ou marqué « à vérifier », aucun message envoyé à une association.",
    how: [
      "Ciblage versionné : chaque dossier garde la version des critères utilisée",
      "Collecte limitée à trois pages publiques par association, avec URL et date de consultation",
      "Fiche qui sépare faits sourcés, hypothèses et inconnus, puis brouillon d'approche versionné",
      "Dossier envoyé uniquement à soi-même pour relecture ; l'analyse IA est prête, à brancher sur un fournisseur",
    ],
    accent: "terracotta" as const,
    link: { label: "Voir l'application", href: "https://swipe-and-prospect.remibk-studio.fr" },
  },
  {
    title: "Hermes, l'agent qui prépare mes candidatures spontanées",
    type: "Agent IA",
    context: "Projet personnel",
    tools: ["Claude", "Pappers", "Apollo", "Notion", "VPS"],
    summary:
      "Pour une entreprise cible, un dossier sourcé et trois angles de candidature en 20 à 30 minutes.",
    problem:
      "Une candidature spontanée sérieuse demandait 3 à 4 h de recherche à la main : registres légaux, site, réseaux, une dizaine d'outils.",
    result:
      "Le même dossier en 20-30 min : identité juridique, finances, stack, failles d'acquisition, puis trois angles de candidature propres à l'entreprise.",
    how: [
      "6 APIs orchestrées (Pappers, Apollo, Notion…) sur un VPS, exécution planifiée",
      "Chaque info croisée sur 2 sources et étiquetée confirmée, inférée ou non trouvée",
      "Compétences découpées et versionnées, réutilisées d'une cible à l'autre",
      "Aucun fichier de contacts nominatifs : un scoring de comptes, conforme RGPD",
    ],
    accent: "terracotta" as const,
    link: { label: "Lire le prompt", href: "/prompt-hermes.md" },
  },
  {
    title: "Guitar Flow — d'une idée à un produit vendu",
    type: "Projet complet",
    context: "Projet personnel",
    tools: ["Claude Code", "Reddit", "Google Sheets", "Figma", "Cursor", "Gemini", "Canva"],
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

// Niveaux : 3 = Autonome (j'ai livré avec), 2 = Opérationnel (utilisé en
// production), 1 = Notions (je sais où chercher). Pas de pourcentage inventé.
export const toolLevels = {
  3: { label: "Autonome" },
  2: { label: "Opérationnel" },
  1: { label: "Notions" },
} as const

export type ToolLevel = keyof typeof toolLevels

export const toolGroups: {
  title: string
  tag: string
  tools: { name: string; level: ToolLevel }[]
}[] = [
  {
    title: "Prospection & données B2B",
    tag: "Cœur de métier",
    tools: [
      { name: "Sales Navigator", level: 3 },
      { name: "Pharow", level: 3 },
      { name: "Evaboot", level: 3 },
      { name: "Societeinfo", level: 3 },
      { name: "API et Open Data", level: 3 },
      { name: "Pappers", level: 3 },
    ],
  },
  {
    title: "Automatisation & CRM",
    tag: "En production",
    tools: [
      { name: "Make", level: 3 },
      { name: "HubSpot", level: 2 },
      { name: "n8n", level: 2 },
      { name: "Airtable", level: 2 },
      { name: "Brevo", level: 2 },
      { name: "Google Colab", level: 2 },
    ],
  },
  {
    title: "Agents & IA",
    tag: "Focus actuel",
    tools: [
      { name: "Claude", level: 3 },
      { name: "Claude Code", level: 3 },
      { name: "Apollo (API)", level: 3 },
      { name: "Cursor", level: 2 },
      { name: "Python via LLM", level: 2 },
    ],
  },
  {
    title: "Pilotage & design",
    tag: "Support",
    tools: [
      { name: "Excel", level: 3 },
      { name: "Notion", level: 3 },
      { name: "Figma", level: 2 },
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
    "Pas de pitch commercial. Trente minutes pour se jauger mutuellement : toi, moi, le poste. Si ça matche, on enchaîne. Sinon, au moins on aura été clairs.",
  availability: {
    lead: "Je suis",
    highlight: "dispo ASAP.",
    text: "Le créneau le plus rapide pour un call : 24h. Si tu préfères l'écrit, écris-moi, je réponds dans la journée. Le CV est en téléchargement direct.",
  },
  terms: [
    { label: "Contrat", value: "CDI en priorité, freelance possible sur un chantier précis" },
    { label: "Lieu", value: "Lyon · présentiel ou hybride, full remote si l'équipe est structurée pour" },
    { label: "Démarrage", value: "Immédiat, pas de préavis" },
    { label: "Salaire", value: "À discuter dès le premier échange, selon le périmètre" },
  ],
  ctaPrimary: { emoji: "📞", label: "Réserver un call · 30 min", href: "https://cal.com/remi-beccat-32m3gf/30min" },
  ctaSecondary: { emoji: "↓", label: "Télécharger CV · 1 page", href: "/cv-remi-beccat.pdf" },
  email: "remibekka@gmail.com",
  phone: "06 01 72 83 47",
  phoneHref: "tel:+33601728347",
  linkedinLabel: "linkedin.com/in/remibeccat",
}

export const footer = {
  copy: "© 2026 Rémi BECCAT — Growth Marketer basé à Lyon.",
  linkedin: "https://www.linkedin.com/in/remibeccat/",
}
