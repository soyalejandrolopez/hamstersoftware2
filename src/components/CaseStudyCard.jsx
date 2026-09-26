import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Reveal from './Reveal'
import Icon from './Icons'

export default function CaseStudyCard({ caseStudy }) {
  const { isEn } = useLocalizedData()
  const isMobile = caseStudy.type === 'Mobile App'

  return (
    <Reveal className="h-full">
      <article className="card card-hover group flex h-full flex-col overflow-hidden">
        {/* Cabecera visual con mockup del proyecto */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b-2 border-ink-900 bg-ink-950">
          <div className="bg-hatch pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

          {isMobile ? (
            /* Mockup Smartphone para App Móvil */
            <div className="relative flex h-full w-full items-center justify-center p-3 sm:p-4">
              {/* Badge tipo y dominio */}
              <span className="badge absolute left-3 top-3 z-10 border border-ink-900 bg-paper/95 text-ink-900 shadow-[2px_2px_0_0_#1C1917]">
                {caseStudy.type}
              </span>
              <span className="absolute right-3 top-3 z-10 hidden items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-ink-400 sm:inline-flex">
                <Icon name="globe" className="h-3 w-3 text-brand-400" />
                {caseStudy.domain}
              </span>

              {/* Teléfono */}
              <div className="relative h-[210px] w-[112px] sm:h-[235px] sm:w-[126px] rounded-[1.85rem] border-[3.5px] border-ink-700 bg-ink-900 shadow-[0_15px_35px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105">
                {/* Altavoz / notch superior */}
                <div className="absolute left-1/2 top-1.5 z-20 h-1.5 w-7 -translate-x-1/2 rounded-full bg-ink-700" />
                {/* Pantalla del teléfono */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.55rem] bg-ink-950">
                  <img
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-transparent" />
                </div>
              </div>

              {/* Tag flotante WhatsApp Direct */}
              <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 border border-ink-700 bg-ink-900/90 px-3 py-2 shadow-hard backdrop-blur text-paper">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-500/20 text-emerald-400">
                  <Icon name="chat" className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-ink-400">
                    {isEn ? 'Direct Contact' : 'Contacto Directo'}
                  </p>
                  <p className="font-mono text-xs font-bold text-emerald-400">WhatsApp</p>
                </div>
              </div>
            </div>
          ) : (
            /* Mockup Browser Window para Plataforma Web */
            <div className="flex h-full w-full flex-col">
              {/* Barra de ventana del navegador */}
              <div className="relative z-10 flex items-center justify-between border-b border-ink-800 bg-ink-900/95 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-ink-950 bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full border border-ink-950 bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full border border-ink-950 bg-emerald-500" />
                </div>
                <div className="flex items-center gap-1.5 rounded border border-ink-800 bg-ink-950/90 px-3 py-0.5 font-mono text-[10px] text-ink-300">
                  <Icon name="lock" className="h-2.5 w-2.5 text-emerald-400" />
                  <span>{caseStudy.domain}</span>
                </div>
                <span className="border border-paper/30 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-paper">
                  {caseStudy.type}
                </span>
              </div>

              {/* Contenido Web con imagen */}
              <div className="relative flex-1 overflow-hidden bg-ink-900">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
              </div>
            </div>
          )}
        </div>

        {/* Información y detalles del proyecto */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex flex-wrap gap-x-3 gap-y-1.5">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] font-medium uppercase tracking-wide text-ink-500"
              >
                <span className="text-brand-600">[</span> {tag}{' '}
                <span className="text-brand-600">]</span>
              </span>
            ))}
          </div>

          <h3 className="mt-3 font-display text-2xl font-black leading-tight text-ink-950 transition-colors group-hover:text-brand-600">
            {caseStudy.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
            {caseStudy.description}
          </p>

          {caseStudy.features && caseStudy.features.length > 0 && (
            <div className="mt-4 border-t border-ink-200/80 pt-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-400">
                {isEn ? 'Key Features' : 'Características del proyecto'}
              </span>
              <ul className="mt-2 space-y-1.5">
                {caseStudy.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-ink-700 leading-snug">
                    <span className="mt-0.5 text-brand-600 font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex items-center justify-between gap-3 border-t-2 border-ink-900 pt-4">
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700">
              {caseStudy.highlight}
            </span>
            <Link
              to="/contacto"
              className="btn-ghost"
              aria-label={
                isEn
                  ? `Request a project similar to ${caseStudy.title}`
                  : `Quiero un proyecto similar a ${caseStudy.title}`
              }
            >
              {isEn ? 'Request similar project' : 'Quiero uno similar'}
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  )
}
