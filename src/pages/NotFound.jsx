import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Logo from '../components/Logo'

export default function NotFound() {
  const { t } = useLocalizedData()

  return (
    <section className="container-hs flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <Logo className="h-16 w-16 opacity-90" />
      <p className="mt-6 font-display text-8xl font-black leading-none text-brand-gradient">404</p>
      <h1 className="mt-4 font-display text-3xl font-black text-ink-950">
        {t.notFound.title}
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-600">
        {t.notFound.description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">
          {t.notFound.backHome}
        </Link>
        <Link to="/servicios" className="btn-secondary">
          {t.notFound.viewServices}
        </Link>
      </div>
    </section>
  )
}
