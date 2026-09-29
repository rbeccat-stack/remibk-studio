// Châssis : plastique gris mat, point chaud de lumière en haut à gauche,
// micro-grain en mode overlay pour imiter les imperfections du matériau.
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.65),transparent_55%)]" />
      <div className="absolute inset-0 bg-noise opacity-25 mix-blend-overlay" />
    </div>
  )
}
