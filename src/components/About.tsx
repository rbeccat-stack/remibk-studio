import { about } from '@/lib/content'

export default function About() {
  return (
    <section id="apropos" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-sage shrink-0" />
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-main">{about.title}</h2>
      </div>

      {/* Main card */}
      <div className="border border-border-dark/15 rounded-2xl p-7 md:p-10 bg-card-light mt-8 mb-8">
        <div className="flex flex-col gap-4">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm md:text-base font-sans text-text-main leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
