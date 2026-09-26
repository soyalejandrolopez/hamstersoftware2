import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Reveal from './Reveal'
import Icon from './Icons'

export default function SolutionsGrid({ limit }) {
  const { solutions, isEn } = useLocalizedData()
  const items = limit ? solutions.slice(0, limit) : solutions

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((sol, i) => (
        <Reveal key={sol.num} delay={(i % 3) * 80} className="h-full">
          <article className="card card-hover group flex h-full flex-col p-6">
            <div className="flex items-start justify-between gap-3">
              <span className="font-display text-5xl font-black text-ink-200 transition group-hover:text-brand-500">
                {sol.num}
              </span>
              <span className="badge mt-1">{sol.tag}</span>
            </div>
            <h3 className="mt-4 font-display text-xl font-black text-ink-950">{sol.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">{sol.description}</p>
            <Link
              to="/contacto"
              className="btn-ghost mt-4 self-start"
              aria-label={
                isEn
                  ? `Request quote for ${sol.name}`
                  : `Solicitar cotización de ${sol.name}`
              }
            >
              {isEn ? 'Learn more' : 'Ver más'}
              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  )
}
