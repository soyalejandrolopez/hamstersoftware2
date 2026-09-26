import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Reveal from './Reveal'
import Icon from './Icons'

export default function CtaBanner({ title, description }) {
  const { t, isEn } = useLocalizedData()

  const bannerTitle = title || t.cta.title
  const bannerDescription = description || t.cta.description

  return (
    <section className="container-hs pb-16 sm:pb-20 lg:pb-24">
      <Reveal>
        <div className="relative overflow-hidden border-2 border-ink-950 bg-ink-950 px-6 py-16 text-center shadow-hard-accent sm:px-12 sm:py-20">
          {/* Imagen de oficina de fondo */}
          <div className="pointer-events-none absolute inset-0">
            <img
              src="/images/consulting-office.jpg"
              alt={
                isEn
                  ? 'Software consulting and cloud engineering team'
                  : 'Equipo de consultoría de software y arquitectura cloud'
              }
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-center opacity-30 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink-950/90 via-ink-950/75 to-ink-950/90" />
            <div className="bg-hatch absolute inset-0 opacity-40" aria-hidden="true" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-400">
              {t.cta.badge}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] text-paper sm:text-5xl">
              {bannerTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-300">
              {bannerDescription}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 border-2 border-paper bg-paper px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:border-brand-500 hover:text-white hover:shadow-hard-white active:translate-y-0"
              >
                {t.cta.button}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 font-mono text-xs text-ink-400">
              {t.cta.disclaimer}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
