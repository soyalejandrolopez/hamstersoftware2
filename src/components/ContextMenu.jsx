import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Icon from './Icons'

export default function ContextMenu() {
  const [visible, setVisible] = useState(false)
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [copied, setCopied] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { isEn, toggleLang } = useLanguage()

  useEffect(() => {
    const handleContextMenu = (e) => {
      // Evitar menú del navegador por defecto
      e.preventDefault()

      // Dimensiones aproximadas del menú para evitar que se desborde fuera de la pantalla
      const menuWidth = 260
      const menuHeight = 390
      const padding = 12

      const x = e.clientX + menuWidth > window.innerWidth
        ? Math.max(padding, window.innerWidth - menuWidth - padding)
        : e.clientX
      const y = e.clientY + menuHeight > window.innerHeight
        ? Math.max(padding, window.innerHeight - menuHeight - padding)
        : e.clientY

      setCoords({ x, y })
      setVisible(true)
    }

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setVisible(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setVisible(false)
      }
    }

    const handleScroll = () => {
      if (visible) {
        setVisible(false)
      }
    }

    window.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [visible])

  if (!visible) return null

  const handleNav = (path) => {
    setVisible(false)
    navigate(path)
  }

  const handleWhatsApp = () => {
    setVisible(false)
    window.open('https://wa.me/573025790274', '_blank', 'noopener,noreferrer')
  }

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
        setVisible(false)
      }, 700)
    } catch {
      setVisible(false)
    }
  }

  const handleScrollTop = () => {
    setVisible(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      ref={menuRef}
      style={{ left: `${coords.x}px`, top: `${coords.y}px` }}
      className="fixed z-[99999] w-[260px] border-2 border-ink-950 bg-white font-mono text-xs shadow-[5px_5px_0_0_#1C1917] animate-in fade-in zoom-in-95 duration-75 select-none"
      role="menu"
      aria-label="Menú contextual de Hamster Software"
    >
      {/* Header del menú */}
      <div className="flex items-center justify-between border-b-2 border-ink-950 bg-ink-950 px-3 py-2 text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-[4px] bg-brand-500 font-display text-[10px] font-black text-white">
            H
          </span>
          <span className="font-display text-[11px] font-black tracking-wider text-paper">
            HAMSTER SOFTWARE
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[9px] font-bold text-emerald-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          ONLINE
        </span>
      </div>

      {/* Navegación rápida */}
      <div className="py-1">
        <button
          type="button"
          onClick={() => handleNav('/')}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-800 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span className="text-ink-400">/01</span>
            <span>{isEn ? 'Home' : 'Inicio'}</span>
          </span>
          <span className="font-mono text-[10px] text-ink-400">Alt+1</span>
        </button>

        <button
          type="button"
          onClick={() => handleNav('/servicios')}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-800 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span className="text-ink-400">/02</span>
            <span>{isEn ? 'Services' : 'Servicios'}</span>
          </span>
          <Icon name="arrowRight" className="h-3 w-3 text-ink-400" />
        </button>

        <button
          type="button"
          onClick={() => handleNav('/blog')}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-800 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span className="text-ink-400">/03</span>
            <span>Blog</span>
          </span>
          <Icon name="arrowRight" className="h-3 w-3 text-ink-400" />
        </button>

        <button
          type="button"
          onClick={() => handleNav('/proceso')}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-800 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span className="text-ink-400">/04</span>
            <span>{isEn ? 'Methodology' : 'Metodología'}</span>
          </span>
          <Icon name="arrowRight" className="h-3 w-3 text-ink-400" />
        </button>

        <button
          type="button"
          onClick={() => handleNav('/contacto')}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left font-bold text-brand-600 transition hover:bg-brand-500 hover:text-white"
        >
          <span className="flex items-center gap-2">
            <span>🚀</span>
            <span>{isEn ? 'Request Quote' : 'Cotizar Proyecto'}</span>
          </span>
          <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="border-t border-ink-200" />

      {/* Acciones directas y utilidades */}
      <div className="py-1">
        <button
          type="button"
          onClick={handleWhatsApp}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-emerald-700 transition hover:bg-emerald-50 font-bold"
        >
          <span className="flex items-center gap-2">
            <Icon name="whatsapp" className="h-3.5 w-3.5 text-emerald-600" />
            <span>{isEn ? 'Direct WhatsApp' : 'WhatsApp Directo'}</span>
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-600 bg-emerald-100 px-1 py-0.5 border border-emerald-300">
            Chat
          </span>
        </button>

        <button
          type="button"
          onClick={() => {
            toggleLang()
            setVisible(false)
          }}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span>🌐</span>
            <span>{isEn ? 'Language / Idioma' : 'Idioma / Language'}</span>
          </span>
          <span className="font-mono text-[10px] font-bold text-brand-600 uppercase">
            {isEn ? 'ES' : 'EN'}
          </span>
        </button>

        <button
          type="button"
          onClick={handleCopyUrl}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span>🔗</span>
            <span>{isEn ? 'Copy Page Link' : 'Copiar enlace'}</span>
          </span>
          {copied ? (
            <span className="font-mono text-[10px] font-bold text-emerald-600">✓ OK</span>
          ) : (
            <span className="font-mono text-[10px] text-ink-400">URL</span>
          )}
        </button>

        <button
          type="button"
          onClick={handleScrollTop}
          className="flex w-full items-center justify-between px-3 py-1.5 text-left text-ink-700 transition hover:bg-brand-50 hover:text-brand-600"
        >
          <span className="flex items-center gap-2">
            <span>⬆️</span>
            <span>{isEn ? 'Scroll to Top' : 'Subir al inicio'}</span>
          </span>
          <span className="font-mono text-[10px] text-ink-400">Top</span>
        </button>
      </div>

      {/* Footer del menú */}
      <div className="border-t border-ink-200 bg-ink-50 px-3 py-1.5 text-center text-[10px] text-ink-500">
        <span>Popayán, Colombia · Esc</span>
      </div>
    </div>
  )
}
