// API « clin d'œil » pour les fondateurs tech : `curl remibk-studio.fr/api/remi`.
// Source unique des réponses de /api/remi/* : la V2 (/hello/[slug]) et la V3 (serveur MCP) liront ce même fichier.
// Tout ce qui est ici est PUBLIC : uniquement des infos déjà visibles sur le portfolio.
import { agent, contact, footer, hero, realisations, toolGroups, toolLevels } from "./content"
import { API_URL, endpoints, snippet } from "./remi-endpoints"

export const SITE = API_URL

const absolute = (href: string) => (href.startsWith("/") ? `${SITE}${href}` : href)
const term = (label: string) => contact.terms.find((t) => t.label === label)?.value ?? null
const toolsAt = (level: keyof typeof toolLevels) =>
  toolGroups.flatMap((g) => g.tools.filter((t) => t.level === level).map((t) => t.name))

export const links = {
  bookACall: contact.ctaPrimary.href,
  talkToMyAgent: `${SITE}/agent?src=api`,
  cv: absolute(contact.ctaSecondary.href),
  linkedin: footer.linkedin,
  github: footer.github,
  portfolio: SITE,
}

// Commandes suggérées à la fin de chaque réponse : on guide le visiteur comme dans un jeu.
export const commands = {
  profile: snippet("curl", "profile"),
  hire: snippet("curl", "hire"),
  coffee: snippet("curl", "coffee"),
  headers: snippet("curl", "profile").replace("curl -L", "curl -iL"),
}

// Défauts assumés, en auto-dérision. À ajuster librement.
export const knownBugs = [
  { id: "BUG-001", title: "Peaufine trop longtemps avant de montrer", severity: "low", workaround: "Lui donner une deadline" },
  { id: "BUG-002", title: "Dit oui à trop de projets", severity: "medium", workaround: "Lui demander lequel il arrête" },
]

// `to` et `company` restent vides en V1 : la V2 les remplira à partir du slug imprimé sur chaque lettre.
export function buildProfile(personalization: { to: string | null; company: string | null } = { to: null, company: null }) {
  return {
    hello: "Vous venez de curl un portfolio. On devrait s'entendre.",
    ...personalization,
    name: "Rémi Beccat",
    title: hero.title,
    pitch: `${hero.lead} ${hero.keywords.slice(0, -1).join(", ")} et ${hero.keywords.at(-1)}.`,
    based_in: "Lyon, France",
    status: "available",
    availability: {
      contract: term("Contrat"),
      location: term("Lieu"),
      start: term("Démarrage"),
    },
    latency_to_first_reply: "< 24h",
    stack: {
      autonome: toolsAt(3),
      operationnel: toolsAt(2),
    },
    proof: hero.proof,
    shipped: realisations
      .filter((r) => !r.draft)
      .map((r) => ({
        title: r.title,
        summary: r.summary,
        ...(r.link ? { url: absolute(r.link.href) } : {}),
      })),
    known_bugs: knownBugs,
    background_processes: ["guitare (15+ ans d'uptime)"],
    contact: {
      book_a_call: links.bookACall,
      talk_to_my_agent: links.talkToMyAgent,
      agent_name: agent.name,
      cv: links.cv,
      linkedin: links.linkedin,
      github: links.github,
    },
    next: [commands.hire, commands.coffee, commands.headers],
  }
}

export const hireResponse = {
  error: "402 Payment Required",
  message: "Tentative de recrutement détectée. Un paiement est requis pour continuer.",
  accepted_payment_methods: ["un café", "un call de 30 minutes", "un CDI (de préférence)"],
  pay_here: links.bookACall,
  or_ask_my_agent: links.talkToMyAgent,
}

export const coffeeResponse = {
  error: "418 I'm a teapot",
  message: "Je suis une théière. Pour le café, il faudra m'inviter.",
  rfc: "https://www.rfc-editor.org/rfc/rfc2324",
  next: commands.hire,
}

export const notFoundResponse = {
  error: "404 Not Found",
  message: "Cette route n'existe pas. Même mes automatisations ne savent pas où elle est.",
  try: [commands.profile, commands.hire, commands.coffee],
}

// Headers trouvés par ceux qui font `curl -i`. Valeurs ASCII uniquement (pas d'accents dans un header HTTP).
const easterEggHeaders = {
  "X-Hire-Me": "yes, please",
  "X-Built-With": "Next.js + Claude + too much coffee",
  "X-Easter-Egg": `try POST ${endpoints.hire.path}`,
  "X-Agent": `talk to ${agent.name} at ${SITE}/agent`,
}

// Réponse JSON indentée (lisible dans un terminal), terminée par un retour à la ligne pour ne pas coller au prompt.
export function remiJson(body: unknown, status = 200) {
  return new Response(JSON.stringify(body, null, 2) + "\n", {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      ...easterEggHeaders,
    },
  })
}
