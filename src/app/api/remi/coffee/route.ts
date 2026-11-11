import { coffeeResponse, remiJson } from "@/lib/remi"

// RFC 2324 : une théière refuse de faire du café.
export function GET() {
  return remiJson(coffeeResponse, 418)
}
