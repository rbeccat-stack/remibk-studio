interface SectionTitleProps {
  title: string
  underlineWord?: string
  subtitle?: string
  accent?: 'terracotta' | 'sage'
  centered?: boolean
}

export default function SectionTitle({
  title,
  underlineWord,
  subtitle,
  accent = 'terracotta',
  centered = false,
}: SectionTitleProps) {
  const dotColor = accent === 'terracotta' ? 'bg-accent' : 'bg-accent-2'
  const dotGlow = accent === 'terracotta' ? 'shadow-[0_0_12px_rgba(94,106,210,0.8)]' : 'shadow-[0_0_12px_rgba(129,140,248,0.8)]'

  const renderTitle = () => {
    if (!underlineWord) return title
    const parts = title.split(underlineWord)
    return (
      <>
        {parts[0]}
        <span className="text-gradient-accent">{underlineWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={centered ? 'text-center' : ''}>
      <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
        <span className={`w-2 h-2 rounded-full ${dotColor} ${dotGlow} shrink-0`} />
        <h2 className="text-gradient-fg font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
          {renderTitle()}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-fg-muted text-base md:text-lg leading-relaxed ${centered ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
