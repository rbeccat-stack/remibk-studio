import { hireResponse, remiJson } from "@/lib/remi"

// GET ou POST : dans les deux cas, recruter Rémi demande un « paiement ».
export function GET() {
  return remiJson(hireResponse, 402)
}

export function POST() {
  return remiJson(hireResponse, 402)
}
