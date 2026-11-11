export const nav = {
  name: "Rémi Beccat",
  tagline: "Growth Marketer",
  links: [
    { label: "Réalisations", href: "#realisations" },
    { label: "Apports", href: "#apports" },
    { label: "Outils", href: "#outils" },
    { label: "À propos", href: "#apropos" },
    { label: "Contact", href: "#contact" },
  ],
  cta: "Réserver un call",
  ctaHref: "#contact",
}

export const hero = {
  title: "Growth Marketer",
  lead: "Un savant mélange de",
  keywords: ["Scraping", "Data", "Automatisation", "IA"],
  // Preuve chiffrée sous le titre : tirée de l'étude façadiers (26 vrais façadiers sur 100 dans le NAF).
  proof: "534 façadiers confirmés en croisant 4 sources publiques, là où le code NAF se trompait 3 fois sur 4.",
  proofLink: { label: "Voir la réalisation", href: "#realisation-facadiers" },
  meta: "Disponible immédiatement · Lyon",
  ctaSecondary: { label: "Télécharger mon CV", href: "/cv-remi-beccat.pdf" },
}

// Section « ce que je fais pour l'entreprise » : un volet = une promesse, des livrables, une preuve déjà livrée.
// Preuve = ancre vers une carte de réalisation (#realisation-…), jamais de lien externe ; sans lien si aucune carte ne la porte.
export const offer = {
  title: "Concrètement, ce que je fais pour vous",
  underlineWord: "Concrètement",
  subtitle: "Cinq volets. Pour chacun, ce que l'entreprise y gagne et un exemple déjà livré.",
  axes: [
    {
      label: "Data",
      promise: "Des chiffres que toute l'équipe comprend, pour mieux décider.",
      deliverables: [
        "Récolter la donnée là où elle se trouve : CRM, exports, sources publiques",
        "Construire des dashboards lisibles par tout le monde",
        "Produire des analyses qui améliorent la prise de décision",
      ],
      tools: [
        { name: "Excel", logo: "/logos/excel.svg" },
        { name: "HubSpot", logo: "/logos/hubspot.svg" },
        { name: "Google Sheets", logo: "/logos/google-sheets.svg" },
      ],
      proof: { label: "625 entreprises analysées, 534 façadiers confirmés", href: "#realisation-facadiers" },
    },
    {
      label: "Automatisation",
      promise: "Les tâches répétitives tournent sans mobiliser l'équipe.",
      deliverables: [
        "Des automatisations sur mesure avec Make ou n8n, selon le besoin",
        "Exemple : vérifier la conformité RGPD d'une liste de contacts avant de l'exploiter",
      ],
      tools: [
        { name: "Make", logo: "/logos/make.svg" },
        { name: "n8n", logo: "/logos/n8n.svg" },
        { name: "Zapier", logo: "/logos/zapier.svg" },
      ],
      proof: { label: "Vérifier des emails avant une campagne · chez Locabri", href: "#realisation-emails" },
    },
    {
      label: "IA",
      promise: "Une IA utile au quotidien, bien réglée et maîtrisée par l'équipe.",
      deliverables: [
        "Mettre en place une IA adaptée au besoin et la paramétrer correctement",
        "Former les équipes à s'en servir, si nécessaire",
      ],
      tools: [
        { name: "Claude", logo: "/logos/claude.svg" },
        { name: "Claude Code", logo: "/logos/claude.svg" },
        { name: "ChatGPT", logo: "/logos/openai.svg" },
        { name: "Codex", logo: "/logos/codex.svg" },
        { name: "Gemini", logo: "/logos/gemini.svg" },
        { name: "Cursor", logo: "/logos/cursor.svg" },
      ],
      proof: { label: "Hermes, l'agent de recherche d'entreprises", href: "#realisation-hermes" },
    },
    {
      label: "Scraping",
      promise: "La bonne donnée, collectée à la bonne échelle.",
      deliverables: [
        "Scraping en tout genre selon les besoins : Sales Navigator, Pharow, Evaboot, API publiques",
        "Du développement de quelques comptes clés à une campagne d'acquisition d'envergure",
      ],
      tools: [
        { name: "Pharow", logo: "/logos/pharow.png" },
        { name: "Evaboot", logo: "/logos/evaboot.png" },
        { name: "Sales Navigator", logo: "/logos/linkedin.svg" },
      ],
      proof: { label: "10 000 contacts ciblés à partir de la base clients" },
    },
    {
      label: "Acquisition",
      promise: "Savoir qui démarcher, dans quel ordre, et à qui parler.",
      deliverables: [
        "Cible définie à partir des meilleurs clients existants",
        "Comptes priorisés par effectif et type d'interlocuteur",
        "Décideurs identifiés par rôle à partir d'un simple SIREN",
      ],
      proof: { label: "99 comptes qualifiés sur 466 autour d'une adresse", href: "#realisation-carte" },
    },
  ],
} as {
  title: string
  underlineWord: string
  subtitle: string
  axes: {
    label: string
    promise: string
    deliverables: string[]
    tools?: { name: string; logo: string }[]
    proof: { label: string; href?: string }
  }[]
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
    // Ancre visée par les preuves de la section offre (#realisation-emails).
    id: "realisation-emails",
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
    // Ancre visée par les preuves de la section offre (#realisation-carte).
    id: "realisation-carte",
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
    // Ancre visée par les preuves de la section offre (#realisation-facadiers).
    id: "realisation-facadiers",
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
    // Ancre visée par les preuves de la section offre (#realisation-hermes).
    id: "realisation-hermes",
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
  tools: { name: string; logo: string; level: ToolLevel }[]
}[] = [
  {
    title: "Prospection & données B2B",
    tools: [
      { name: "Sales Navigator", logo: "/logos/linkedin.svg", level: 3 },
      { name: "Pharow", logo: "/logos/pharow.png", level: 3 },
      { name: "Evaboot", logo: "/logos/evaboot.png", level: 3 },
      { name: "Societeinfo", logo: "/logos/societeinfo.png", level: 3 },
      { name: "API et Open Data", logo: "/logos/api.svg", level: 3 },
      { name: "Pappers", logo: "/logos/pappers.ico", level: 3 },
    ],
  },
  {
    title: "Automatisation & CRM",
    tools: [
      { name: "Make", logo: "/logos/make.svg", level: 3 },
      { name: "HubSpot", logo: "/logos/hubspot.svg", level: 2 },
      { name: "n8n", logo: "/logos/n8n.svg", level: 2 },
      { name: "Airtable", logo: "/logos/airtable.svg", level: 2 },
      { name: "Brevo", logo: "/logos/brevo.svg", level: 2 },
      { name: "Google Colab", logo: "/logos/google-colab.svg", level: 2 },
    ],
  },
  {
    title: "Agents & IA",
    tools: [
      { name: "Claude", logo: "/logos/claude.svg", level: 3 },
      { name: "Claude Code", logo: "/logos/claude.svg", level: 3 },
      { name: "Apollo (API)", logo: "/logos/apollo.svg", level: 3 },
      { name: "Cursor", logo: "/logos/cursor.svg", level: 2 },
      { name: "Python via LLM", logo: "/logos/python.svg", level: 2 },
    ],
  },
  {
    title: "Pilotage & design",
    tools: [
      { name: "Excel", logo: "/logos/excel.svg", level: 3 },
      { name: "Notion", logo: "/logos/notion.svg", level: 3 },
      { name: "Figma", logo: "/logos/figma.svg", level: 2 },
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
  title: "On en parle ?",
  subtitle: "30 minutes pour échanger de façon concrète et directe.",
  availability: {
    lead: "Je suis disponible",
    highlight: "immédiatement.",
    // Une flèche part de textHighlight vers le téléphone / WhatsApp au survol (ContactArrow).
    text: "Réservez un call ou ",
    // Surligné en violet, texte blanc.
    textHighlight: "appelez-moi directement",
  },
  terms: [
    { label: "Contrat", value: "CDI ou CDD" },
    { label: "Lieu", value: "Lyon ou hybride" },
    { label: "Démarrage", value: "Immédiatement" },
  ] as { label: string; value: string }[],
  ctaPrimary: { emoji: "📞", label: "Réserver un call · 30 min", href: "https://cal.com/remi-beccat-32m3gf/30min" },
  ctaSecondary: { emoji: "↓", label: "Télécharger CV · 1 page", href: "/cv-remi-beccat.pdf" },
  email: "remibekka@gmail.com",
  phone: "06 01 72 83 47",
  phoneHref: "tel:+33601728347",
  whatsappHref: "https://wa.me/33601728347",
  linkedinLabel: "linkedin.com/in/remibeccat",
  githubLabel: "github.com/rbeccat-stack",
}

// John Doe : agent vocal ElevenLabs qui répond aux recruteurs.
// Le widget est affiché sur toutes les pages ; la page /agent est la destination du QR code des lettres.
// Le paramètre d'URL ?src=… est transmis à l'agent (variable dynamique « source ») pour mesurer la provenance.
export const agent = {
  name: "John Doe",
  agentId: "agent_1901m72mhnkzebn99x6bmdcbmyax",
  scriptSrc: "https://unpkg.com/@elevenlabs/convai-widget-embed",
  defaultSource: "site",
  page: {
    metaTitle: "John Doe, l'assistant vocal de Rémi BECCAT",
    metaDescription:
      "Posez vos questions à John Doe, l'assistant IA de Rémi BECCAT : parcours, réalisations, disponibilité. À la voix ou à l'écrit, 24 h/24.",
    eyebrow: "Agent vocal IA · ElevenLabs",
    title: "Bonjour, je suis John Doe.",
    lead:
      "L'assistant vocal de Rémi. Posez-moi vos questions sur son parcours, ses réalisations ou sa disponibilité, à la voix ou à l'écrit, et je peux organiser un échange de 30 minutes avec lui.",
    hint: "Écrivez votre question ou appuyez sur le téléphone pour parler à John Doe.",
    canDoTitle: "Ce que je peux faire pour vous",
    canDo: [
      "Vous présenter le parcours et les réalisations de Rémi, chiffres à l'appui.",
      "Vous dire s'il est disponible et dans quelles conditions : CDI ou CDD, Lyon ou hybride.",
      "Noter votre besoin et vos coordonnées pour que Rémi vous recontacte.",
      "Organiser un échange de 30 minutes avec lui.",
    ],
    builtTitle: "Comment Rémi m'a construit",
    built: [
      { label: "Voix et conversation", value: "ElevenLabs Agents, en français, interruptible" },
      { label: "Connaissances", value: "Une base limitée au contenu de ce portfolio : je ne réponds que sur ce que je sais" },
      { label: "Garde-fous", value: "Pas d'invention, pas de chiffre de salaire, pas d'engagement au nom de Rémi" },
      { label: "Suivi", value: "10 informations extraites après chaque échange et 3 critères de qualité évalués automatiquement" },
    ] as { label: string; value: string }[],
    privacy:
      "La conversation est enregistrée et analysée pour que Rémi puisse vous recontacter. Elle est conservée 30 jours. [Politique de confidentialité](/confidentialite).",
    fallback: { label: "Préférez un échange direct ? Réserver un call", href: "https://cal.com/remi-beccat-32m3gf/30min" },
  },
}

// Page /curl : interface façon « connecter un outil » pour l'API clin d'œil /api/remi (logique dans src/lib/remi.ts).
export const curlPage = {
  metaTitle: "API · Rémi BECCAT",
  metaDescription:
    "Mon profil est aussi une API. Interrogez-la depuis votre terminal, votre code ou directement ici.",
  eyebrow: "API publique · sans clé",
  title: "Mon profil est aussi une API.",
  lead:
    "Pour les fondateurs et les équipes tech qui préfèrent vérifier avant de lire. Choisissez votre outil, copiez la commande, ou essayez directement ici.",
  windowTitle: "Interroger le profil de Rémi",
  installTitle: "Lancer",
  installText: "Une commande, aucune clé API, aucune inscription.",
  installBadges: ["Aucune clé API requise", "macOS, Windows et Linux"],
  tryTitle: "Ce que vous pouvez faire",
  tryText: "Posez votre question en clair : la démo appelle la vraie API et affiche sa réponse.",
  tryWindowLabel: "Démo en direct",
  placeholders: ["Montre-moi son profil", "Je voudrais recruter Rémi", "Tu me fais un café ?", "Il a des défauts ?"],
  suggestions: ["Son profil", "Le recruter", "Un café ?", "Ses défauts"],
  working: "J'y travaille…",
  inputLabel: "Posez une question sur Rémi",
  copy: "Copier",
  copied: "Copié",
  footerNote: "Préférez une vraie conversation ?",
  footerCta: { label: "Parler à John Doe", href: "/agent?src=curl" },
}

export const footer = {
  copy: "© 2026 Rémi BECCAT — Growth Marketer basé à Lyon.",
  linkedin: "https://www.linkedin.com/in/remibeccat/",
  github: "https://github.com/rbeccat-stack",
  legalLinks: [
    { label: "Parler à John Doe", href: "/agent" },
    { label: "API", href: "/curl" },
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
  ],
}

// Pages légales. Les liens s'écrivent [libellé](url) dans le texte (rendus par LegalPage).
export type LegalSection = {
  heading: string
  paragraphs?: string[]
  list?: string[]
  // Paragraphes affichés après la liste.
  after?: string[]
}

export type LegalDocument = {
  metaTitle: string
  metaDescription: string
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
}

export const confidentialite: LegalDocument = {
  metaTitle: "Politique de confidentialité — Rémi BECCAT",
  metaDescription:
    "Quelles données sont traitées sur remibk-studio.fr et par mes automatisations connectées à Google Sheets et Google Drive, pourquoi, où, et comment me contacter.",
  title: "Politique de confidentialité",
  intro:
    "Cette page explique quelles données sont traitées par ce site, par son assistant vocal et par les automatisations que j'ai connectées à mon compte Google, pourquoi, où elles sont traitées et comment exercer vos droits.",
  updated: "Dernière mise à jour : 10 novembre 2026",
  sections: [
    {
      heading: "Responsable du traitement",
      paragraphs: [
        `Rémi BECCAT, Lyon, France. Contact : [${contact.email}](mailto:${contact.email}).`,
      ],
    },
    {
      heading: "Ce site",
      paragraphs: [
        "Ce site ne contient ni formulaire, ni outil de mesure d'audience, ni publicité.",
        "Comme tout hébergeur, Vercel traite des données techniques de connexion (adresse IP, localisation déduite de cette adresse, configuration du navigateur) pour servir les pages et assurer la sécurité du site. Voir la [politique de confidentialité de Vercel](https://vercel.com/legal/privacy-policy).",
        "Si vous réservez un call via Cal.com ou si vous suivez un lien vers LinkedIn, GitHub ou WhatsApp, vous quittez ce site : la politique de confidentialité du service concerné s'applique.",
      ],
    },
    {
      heading: "John Doe, l'assistant vocal",
      paragraphs: [
        "Le bouton « Parlez à John Doe ! » ouvre une conversation, à la voix ou à l'écrit, avec un assistant d'intelligence artificielle fourni par ElevenLabs. Le module est chargé depuis les serveurs d'ElevenLabs et ne s'active que si vous lancez une conversation, après avoir accepté ses conditions.",
        "La conversation (audio et transcription) est enregistrée, puis analysée automatiquement pour en extraire un résumé et les informations utiles à une prise de contact : nom, entreprise, fonction, email ou téléphone si vous les donnez, besoin exprimé, et la page ou le support depuis lequel vous êtes arrivé. Ces données servent uniquement à vous recontacter au sujet d'une opportunité professionnelle.",
        "Les conversations sont conservées 30 jours chez ElevenLabs, puis supprimées. Voir la [politique de confidentialité d'ElevenLabs](https://elevenlabs.io/privacy-policy).",
      ],
    },
    {
      heading: "Automatisations connectées à Google",
      paragraphs: [
        "J'utilise une application Google OAuth pour connecter mon instance n8n à mon propre compte Google. Elle n'est pas proposée au public et ne sert pas à accéder aux comptes d'autres personnes.",
        "Les autorisations accordées permettent à n8n d'accéder aux fichiers Google Sheets et Google Drive du compte connecté. Elles servent uniquement à :",
      ],
      list: [
        "créer un fichier Google Sheets de résultats ;",
        "écrire dans ce fichier le résultat des traitements, par exemple la vérification de la cohérence entre l'adresse email, le site et le nom d'une entreprise ;",
        "ranger ce fichier dans le dossier Google Drive prévu à cet effet.",
      ],
      after: [
        "Les fichiers traités peuvent contenir des données professionnelles sur des contacts : nom de l'entreprise, site internet, adresse email.",
      ],
    },
    {
      heading: "Utilisation limitée des données Google",
      paragraphs: [
        "L'utilisation et le transfert des informations reçues des API Google respectent le [règlement sur les données utilisateur des services d'API Google](https://developers.google.com/terms/api-services-user-data-policy), y compris ses exigences d'utilisation limitée.",
        "Ces données ne sont ni vendues, ni transmises à des tiers à des fins publicitaires, ni utilisées pour entraîner des modèles d'intelligence artificielle.",
      ],
    },
    {
      heading: "Où les données sont traitées",
      list: [
        "n8n est auto-hébergé sur un serveur privé loué chez Hostinger et situé en France.",
        "Les fichiers de résultats sont stockés dans mon compte Google.",
        "Le site est hébergé par Vercel.",
        "Les conversations avec John Doe sont traitées et stockées par ElevenLabs.",
      ],
      after: [
        "Google et Vercel peuvent traiter des données hors de l'Union européenne, selon les garanties prévues par leurs propres conditions.",
      ],
    },
    {
      heading: "Durée de conservation",
      paragraphs: [
        "Les fichiers de résultats restent dans mon compte Google tant qu'ils sont utiles, puis je les supprime. L'historique technique des exécutions conservé par n8n peut contenir les données traitées et est purgé périodiquement.",
        "Les jetons de connexion Google sont conservés dans n8n tant que la connexion est active. Ils peuvent être révoqués à tout moment depuis la page [Applications tierces de votre compte Google](https://myaccount.google.com/connections).",
      ],
    },
    {
      heading: "Vos droits",
      paragraphs: [
        `Conformément au RGPD, vous pouvez demander l'accès à vos données, leur rectification ou leur effacement, ou vous opposer à leur traitement, en m'écrivant à [${contact.email}](mailto:${contact.email}). Vous pouvez aussi introduire une réclamation auprès de la [CNIL](https://www.cnil.fr/fr/plaintes).`,
      ],
    },
  ],
}

export const mentionsLegales: LegalDocument = {
  metaTitle: "Mentions légales — Rémi BECCAT",
  metaDescription: "Éditeur et hébergeur du site remibk-studio.fr.",
  title: "Mentions légales",
  intro: "Informations sur l'éditeur et l'hébergeur du site remibk-studio.fr.",
  updated: "Dernière mise à jour : 4 novembre 2026",
  sections: [
    {
      heading: "Éditeur et directeur de la publication",
      paragraphs: [
        "Rémi BECCAT, Lyon, France.",
        `Email : [${contact.email}](mailto:${contact.email}). Téléphone : [${contact.phone}](${contact.phoneHref}).`,
      ],
    },
    {
      heading: "Hébergeur",
      paragraphs: [
        "Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis. Site : [vercel.com](https://vercel.com).",
      ],
    },
    {
      heading: "Propriété intellectuelle",
      paragraphs: [
        "Les textes et réalisations présentés sur ce site appartiennent à Rémi BECCAT, sauf mention contraire. Les logos et marques cités restent la propriété de leurs détenteurs respectifs.",
      ],
    },
    {
      heading: "Données personnelles",
      paragraphs: [
        "Le traitement des données est décrit dans la [politique de confidentialité](/confidentialite).",
      ],
    },
  ],
}
