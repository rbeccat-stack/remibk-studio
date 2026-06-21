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
  const dotColor = accent === 'terracotta' ? 'bg-terracotta' : 'bg-sage'
  const underlineColor = accent === 'terracotta' ? 'decoration-terracotta' : 'decoration-sage'

  const renderTitle = () => {
    if (!underlineWord) return title
    const parts = title.split(underlineWord)
    return (
      <>
        {parts[0]}
        <span className={`underline ${underlineColor} underline-offset-4 decoration-2`}>
          {underlineWord}
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={centered ? 'text-center' : ''}>
      <div className={`flex items-center gap-2 mb-3 ${centered ? 'justify-center' : ''}`}>
        <span className={`w-2 h-2 rounded-full ${dotColor} shrink-0`} />
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-text-main leading-tight">
          {renderTitle()}
        </h2>
      </div>
      {subtitle && (
        <p className={`text-muted text-base md:text-lg leading-relaxed ${centered ? 'max-w-xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
