import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Logo from './Logo'
import Icon from './Icons'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { lang, setLang, t, navLinks } = useLocalizedData()

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink-900 bg-paper/95 backdrop-blur">
      {/* Barra superior de acento con el gradiente del logo */}
      <div className="h-[2.5px] w-full bg-brand-gradient" />

      <div className="container-hs flex h-16 items-center justify-between gap-4">
        {/* Marca + Logotipo */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Hamster Software — inicio">
          <Logo className="h-9 w-9" />
          <span className="font-display text-xl font-black tracking-tight text-ink-950">
            Hamster<span className="text-brand-gradient">Software</span>
          </span>
        </Link>

        {/* Menú Desktop con colores y gradientes del logo */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.nav.mainNavAria}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `group relative py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive ? 'font-bold text-brand-600' : 'text-ink-600 hover:text-brand-500'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {/* Línea inferior indicadora con gradiente oficial */}
                  <span
                    className={`absolute -bottom-[21px] left-0 right-0 h-[3px] bg-brand-gradient transition-all duration-200 ${
                      isActive
                        ? 'opacity-100 shadow-[0_2px_8px_rgba(32,114,232,0.4)]'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Selector interactivo de idioma y botón CTA con el gradiente del logo */}
        <div className="hidden items-center gap-3.5 lg:flex">
          {/* Switcher ES | EN */}
          <div className="flex items-center border-2 border-ink-900 bg-white p-0.5 text-xs font-mono font-bold shadow-[2px_2px_0_0_#1C1917]">
            <button
              type="button"
              onClick={() => setLang('es')}
              className={`px-2.5 py-0.5 transition-all ${
                lang === 'es'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-ink-600 hover:text-brand-600'
              }`}
              aria-label="Cambiar idioma a Español"
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-0.5 transition-all ${
                lang === 'en'
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-ink-600 hover:text-brand-600'
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
          </div>

          <Link
            to="/contacto"
            className="inline-flex items-center justify-center gap-2 border-2 border-ink-900 bg-brand-gradient px-4 py-2.5 text-sm font-semibold text-white shadow-hard transition-all hover:-translate-y-0.5 hover:shadow-hard-accent active:translate-y-0"
          >
            {t.nav.contactSales}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </div>

        {/* Botón menú móvil */}
        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center border-2 transition lg:hidden ${
            open
              ? 'border-brand-500 bg-brand-50 text-brand-600 shadow-hard-accent'
              : 'border-ink-900 bg-white text-ink-900 hover:border-brand-500 hover:text-brand-500 hover:shadow-hard'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {/* Menú móvil desplegable con selector de idioma y enlaces traducidos */}
      {open && (
        <nav className="border-t-2 border-ink-900 bg-paper lg:hidden" aria-label={t.nav.mobileNavAria}>
          <div className="container-hs flex flex-col gap-2 py-4">
            {/* Selector de idioma móvil */}
            <div className="flex items-center justify-between border-b border-ink-200 pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-ink-500">
                {lang === 'es' ? 'Idioma / Language' : 'Language / Idioma'}
              </span>
              <div className="flex items-center border-2 border-ink-900 bg-white p-0.5 text-xs font-mono font-bold shadow-[2px_2px_0_0_#1C1917]">
                <button
                  type="button"
                  onClick={() => setLang('es')}
                  className={`px-3 py-1 transition-all ${
                    lang === 'es' ? 'bg-brand-500 text-white' : 'text-ink-600 hover:text-brand-600'
                  }`}
                >
                  ES
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1 transition-all ${
                    lang === 'en' ? 'bg-brand-500 text-white' : 'text-ink-600 hover:text-brand-600'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center justify-between border-l-4 px-4 py-3 font-mono text-xs uppercase tracking-[0.16em] transition-all ${
                    isActive
                      ? 'border-brand-500 bg-brand-50/90 font-bold text-brand-600 shadow-sm'
                      : 'border-transparent text-ink-700 hover:border-brand-400 hover:bg-brand-50/40 hover:text-brand-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && <span className="font-bold text-brand-400">▸</span>}
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contacto"
              className="mt-3 inline-flex items-center justify-center gap-2 border-2 border-ink-900 bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-hard transition-all hover:shadow-hard-accent"
            >
              {t.nav.contactSales}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
