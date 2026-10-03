import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Logo from './Logo'
import Icon from './Icons'

export default function Footer() {
  const { navLinks, site, serviceCategories, solutions, t, isEn } = useLocalizedData()
  const topServices = serviceCategories[0].services.slice(0, 4)
  const topSolutions = solutions.slice(0, 8)

  return (
    <footer className="relative overflow-hidden border-t-2 border-ink-900 bg-ink-950 text-paper">
      {/* Imagen de oficina de fondo en el footer */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/tech-office-night.jpg"
          alt={
            isEn
              ? 'Hamster Software engineering headquarters in Popayán, Colombia'
              : 'Sede de ingeniería de Hamster Software en Popayán, Colombia'
          }
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-25 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/90 to-ink-950/80" />
        <div className="bg-hatch absolute inset-0 opacity-40" aria-hidden="true" />
      </div>

      <div className="container-hs relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <Logo className="h-9 w-9" />
            <span className="font-display text-xl font-black tracking-tight">
              Hamster<span className="text-brand-400">Software</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">{site.claim}</p>
          <p className="mt-4 max-w-sm font-mono text-[11px] leading-relaxed text-ink-600">
            {site.legal}
          </p>
        </div>

        <nav aria-label={t.footer.navTitle}>
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-400">
            {t.footer.navTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-sm text-ink-300 transition hover:text-paper">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.servicesTitle}>
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-400">
            {t.footer.servicesTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {topServices.map((s) => (
              <li key={s.num}>
                <Link to="/servicios" className="text-sm text-ink-300 transition hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/servicios"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-400 hover:text-brand-300"
              >
                {t.services.viewAll} →
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={t.footer.solutionsTitle}>
          <h3 className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-400">
            {t.footer.solutionsTitle}
          </h3>
          <ul className="mt-4 space-y-2.5">
            {topSolutions.map((s) => (
              <li key={s.num}>
                <Link to={`/blog/${s.slug}`} className="text-sm text-ink-300 transition hover:text-paper">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="font-mono text-xs font-semibold uppercase tracking-wider text-brand-400 hover:text-brand-300"
              >
                {t.solutions.viewAll} →
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink-800">
        <div className="container-hs flex flex-col items-center justify-between gap-3 py-6 font-mono text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Hamster Software. {t.footer.rights}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="pin" className="h-4 w-4 text-brand-400" />
              {site.location}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
