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
  const led = accent === 'terracotta' ? 'led-red' : 'led-green'

  const renderTitle = () => {
    if (!underlineWord) return title
    const parts = title.split(underlineWord)
    return (
      <>
        {parts[0]}
        <span className="text-accent-ink">{underlineWord}</span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={centered ? 'text-center' : ''}>
      <div className={`flex items-center gap-3 mb-3 ${centered ? 'justify-center' : ''}`}>
        <span aria-hidden className={`led ${led} h-2.5 w-2.5`} />
        <h2 className="text-fg text-shadow-emboss font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
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
