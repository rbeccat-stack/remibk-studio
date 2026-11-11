// Routes et commandes de l'API /api/remi, sans dépendance : importable côté client (page /curl) comme côté serveur.

// remibk-studio.fr redirige (308) vers https://www. : les commandes curl ont donc besoin de -L.
export const API_HOST = "remibk-studio.fr"
export const API_URL = "https://www.remibk-studio.fr"

export type EndpointId = "profile" | "hire" | "coffee"

export const endpoints: Record<EndpointId, { label: string; method: "GET" | "POST"; path: string }> = {
  profile: { label: "Profil", method: "GET", path: "/api/remi" },
  hire: { label: "Recruter", method: "POST", path: "/api/remi/hire" },
  coffee: { label: "Café", method: "GET", path: "/api/remi/coffee" },
}

export type ToolId = "curl" | "powershell" | "javascript" | "python" | "browser"

export const toolGroups: { title: string; tools: { id: ToolId; name: string; icon: string }[] }[] = [
  {
    title: "Terminal",
    tools: [
      { id: "curl", name: "curl", icon: ">_" },
      { id: "powershell", name: "PowerShell", icon: "PS" },
    ],
  },
  {
    title: "Code",
    tools: [
      { id: "javascript", name: "JavaScript", icon: "JS" },
      { id: "python", name: "Python", icon: "Py" },
    ],
  },
  {
    title: "Autre",
    tools: [{ id: "browser", name: "Navigateur", icon: "↗" }],
  },
]

export function snippet(tool: ToolId, id: EndpointId): string {
  const { method, path } = endpoints[id]
  const url = `${API_URL}${path}`
  const post = method === "POST"
  switch (tool) {
    case "curl":
      return `curl -L${post ? " -X POST" : ""} ${API_HOST}${path}`
    case "powershell":
      return `curl.exe -L${post ? " -X POST" : ""} ${API_HOST}${path}`
    case "javascript":
      return post
        ? `const res = await fetch("${url}", { method: "POST" })\nconsole.log(res.status, await res.json())`
        : `const res = await fetch("${url}")\nconsole.log(res.status, await res.json())`
    case "python":
      return `import requests\n\nres = requests.${post ? "post" : "get"}("${url}")\nprint(res.status_code, res.json())`
    case "browser":
      return url
  }
}

// Démo : on devine la route à partir de la question tapée en clair.
export function guessEndpoint(question: string): EndpointId {
  const q = question.toLowerCase()
  if (/recrut|embauch|engag|hire|cdi|cdd|poste|job/.test(q)) return "hire"
  if (/caf[eé]|coffee|th[eé]i[eè]re|expresso/.test(q)) return "coffee"
  return "profile"
}
