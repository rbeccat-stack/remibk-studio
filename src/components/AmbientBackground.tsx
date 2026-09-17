// Fond en quatre couches : gradient de base, bruit, blobs lumineux animés, grille.
// Les blobs sont des radial-gradients (pas de filter: blur) : même rendu, zéro
// coût de filtre, et will-change les isole sur le GPU pour l'animation.
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ambient-base">
      <div className="absolute inset-0 bg-noise opacity-[0.015]" />

      <div className="absolute left-1/2 top-[-30%] h-[1400px] w-[600px] md:w-[900px] -translate-x-1/2 animate-float will-change-transform bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.28)_0%,rgba(94,106,210,0.12)_35%,transparent_70%)] md:bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.38)_0%,rgba(94,106,210,0.16)_35%,transparent_70%)]" />
      <div className="absolute left-[-15%] top-[35%] h-[800px] w-[600px] animate-float-slow will-change-transform bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.2)_0%,rgba(236,72,153,0.08)_40%,transparent_70%)]" />
      <div className="absolute right-[-12%] top-[55%] h-[700px] w-[500px] animate-float will-change-transform bg-[radial-gradient(ellipse_at_center,rgba(96,165,250,0.16)_0%,rgba(94,106,210,0.08)_40%,transparent_70%)]" />
      <div className="absolute bottom-[-20%] left-1/2 h-[600px] w-[900px] -translate-x-1/2 animate-pulse-glow will-change-[opacity] bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.14)_0%,transparent_65%)]" />

      <div className="absolute inset-0 bg-grid-64 opacity-[0.02]" />
    </div>
  )
}
