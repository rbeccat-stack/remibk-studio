import { buildProfile, remiJson } from "@/lib/remi"

export function GET() {
  return remiJson(buildProfile())
}
