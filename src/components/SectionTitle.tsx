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
  const dot = accent === 'terracotta' ? 'dot-accent' : 'dot-green'

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
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span aria-hidden className={`dot ${dot} h-2 w-2`} />
        <h2 className="text-fg font-medium text-3xl sm:text-4xl md:text-[40px] leading-[1.1] tracking-[-0.022em]">
          {renderTitle()}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-fg-muted text-[15px] md:text-base leading-relaxed ${centered ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
