'use client'

import { useState, FormEvent } from 'react'
import { contact } from '@/lib/content'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {}
    if (!data.get('nom')) errs.nom = 'Champ obligatoire'
    if (!data.get('email')) errs.email = 'Champ obligatoire'
    else if (!/\S+@\S+\.\S+/.test(data.get('email') as string)) errs.email = 'Email invalide'
    if (!data.get('message')) errs.message = 'Champ obligatoire'
    return errs
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const errs = validate(data)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-2.5 rounded-xl border ${errors[field] ? 'border-red-400' : 'border-border-dark/20'} bg-bg text-text-main text-sm font-sans placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-terracotta/30`

  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-terracotta shrink-0" />
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-main">{contact.title}</h2>
      </div>
      <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-10">{contact.subtitle}</p>

      {/* 3 CTAs principaux */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-10">
        {contact.ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            className={
              cta.style === 'primary'
                ? 'inline-flex items-center px-6 py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors'
                : 'inline-flex items-center px-6 py-3 rounded-full border border-border-dark/25 text-text-main font-sans font-semibold text-sm hover:bg-card-light transition-colors'
            }
          >
            {cta.label}
          </a>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Coordonnées */}
        <div className="border border-border-dark/12 rounded-2xl p-6 bg-card-light flex flex-col gap-4">
          <div className="flex items-start gap-3">
            <span className="text-lg">✉️</span>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-0.5">Email</p>
              <a href={`mailto:${contact.email}`} className="text-sm font-sans text-text-main hover:text-terracotta transition-colors">
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">📞</span>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-0.5">Téléphone</p>
              <a href={`tel:${contact.phone}`} className="text-sm font-sans text-text-main hover:text-terracotta transition-colors">
                {contact.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">📍</span>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-0.5">Localisation</p>
              <p className="text-sm font-sans text-text-main">{contact.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">🟢</span>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-0.5">Disponibilité</p>
              <p className="text-sm font-sans text-text-main">{contact.availability}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">🎯</span>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-0.5">Recherche</p>
              <p className="text-sm font-sans text-text-main">{contact.recherche}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-lg">🎸</span>
            <div>
              <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-0.5">Projet personnel</p>
              <a href="https://guitarflow.fr" className="text-sm font-sans text-text-main hover:text-terracotta transition-colors">
                {contact.project}
              </a>
            </div>
          </div>
        </div>

        {/* Formulaire secondaire */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center border border-border-dark/12 rounded-2xl p-8 bg-card-light">
            <span className="text-3xl">✅</span>
            <p className="font-serif font-bold text-xl text-text-main">Merci pour votre message.</p>
            <p className="text-sm font-sans text-muted">Je vous répondrai rapidement.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <div>
              <label htmlFor="nom" className="block text-xs font-sans font-semibold text-muted mb-1.5">Nom *</label>
              <input id="nom" name="nom" type="text" placeholder="Votre nom" className={inputClass('nom')} />
              {errors.nom && <p className="text-xs text-red-500 mt-1">{errors.nom}</p>}
            </div>
            <div>
              <label htmlFor="entreprise" className="block text-xs font-sans font-semibold text-muted mb-1.5">Entreprise</label>
              <input id="entreprise" name="entreprise" type="text" placeholder="Votre entreprise" className={inputClass('entreprise')} />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-sans font-semibold text-muted mb-1.5">Email *</label>
              <input id="email" name="email" type="email" placeholder="vous@entreprise.com" className={inputClass('email')} />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-sans font-semibold text-muted mb-1.5">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Bonjour Rémi, je vous contacte pour une opportunité CDI Growth Engineer Junior à Lyon..."
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="mt-1 w-full py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              Envoyer le message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
