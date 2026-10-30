// Fond de page quasi noir, éclairé par un halo indigo diffus en haut.
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-bg-base">
      <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(94,106,210,0.16),transparent_70%)]" />
    </div>
  )
}
