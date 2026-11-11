import { notFoundResponse, remiJson } from "@/lib/remi"

// Toute autre route sous /api/remi : un 404 en JSON plutôt que la page HTML du site.
export function GET() {
  return remiJson(notFoundResponse, 404)
}
