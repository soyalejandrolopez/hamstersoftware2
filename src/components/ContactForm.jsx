import { useState, useRef } from 'react'
import { useLocalizedData } from '../data/i18nData'
import Icon from './Icons'
import Turnstile from './Turnstile'

const WHATSAPP_PHONE = '573025790274'

const initialForm = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export function buildWhatsAppMessage(form, isEn = false) {
  const lines = isEn
    ? [
        `*New project inquiry - Hamster Software*`,
        ``,
        `*Name:* ${form.name?.trim() || 'N/A'}`,
        `*Email:* ${form.email?.trim() || 'N/A'}`,
        form.company?.trim() ? `*Company:* ${form.company.trim()}` : null,
        form.service?.trim() ? `*Service of interest:* ${form.service.trim()}` : null,
        ``,
        `*Message:*`,
        form.message?.trim() || '',
      ]
    : [
        `*Nueva solicitud de proyecto - Hamster Software*`,
        ``,
        `*Nombre:* ${form.name?.trim() || 'N/A'}`,
        `*Email:* ${form.email?.trim() || 'N/A'}`,
        form.company?.trim() ? `*Empresa:* ${form.company.trim()}` : null,
        form.service?.trim() ? `*Servicio de interés:* ${form.service.trim()}` : null,
        ``,
        `*Mensaje:*`,
        form.message?.trim() || '',
      ]

  return lines.filter((line) => line !== null).join('\n')
}

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [generatedMessage, setGeneratedMessage] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [turnstileError, setTurnstileError] = useState(false)
  const turnstileRef = useRef(null)
  const { serviceCategories, site, t, isEn } = useLocalizedData()

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!turnstileToken) {
      setTurnstileError(true)
      return
    }

    try {
      const verifyRes = await fetch('/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: turnstileToken }),
      })
      if (verifyRes.ok) {
        const verification = await verifyRes.json()
        if (verification && verification.success === false) {
          setTurnstileError(true)
          return
        }
      }
    } catch {
      // Si el servidor local o estático no tiene Pages Functions activa, opera con validación cliente
    }

    const msg = buildWhatsAppMessage(form, isEn)
    const url = buildWhatsAppUrl(msg)
    setGeneratedMessage(msg)
    setWhatsappUrl(url)
    setSubmitted(true)

    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setForm(initialForm)
    setGeneratedMessage('')
    setWhatsappUrl('')
    setTurnstileToken('')
    setTurnstileError(false)
    turnstileRef.current?.reset()
  }

  if (submitted) {
    return (
      <div className="card border-2 border-ink-900 bg-white p-6 sm:p-10 text-center shadow-hard">
        <span className="inline-flex h-14 w-14 items-center justify-center border-2 border-ink-900 bg-emerald-500 text-white font-mono text-2xl font-bold shadow-[2px_2px_0_0_#1C1917]">
          ✓
        </span>
        <h3 className="mt-5 font-display text-2xl font-black text-ink-950 sm:text-3xl">
          {t.contact.formSuccessTitle}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 max-w-md mx-auto">
          {t.contact.formSuccessMessage.replace('{name}', form.name)}
        </p>

        {generatedMessage && (
          <div className="mt-6 text-left border-2 border-ink-900 bg-ink-50 p-4 shadow-[2px_2px_0_0_#1C1917]">
            <div className="flex items-center justify-between gap-2 border-b border-ink-200 pb-2 mb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-600">
                {t.contact.formPreviewTitle}
              </span>
              <span className="font-mono text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 border border-emerald-300">
                {isEn ? 'Direct WhatsApp' : 'WhatsApp Directo'}
              </span>
            </div>
            <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-ink-800 leading-relaxed bg-white border border-ink-200 p-3 select-all">
              {generatedMessage}
            </pre>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !bg-emerald-600 hover:!bg-emerald-700 !border-ink-900 w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white shadow-hard"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span>{t.contact.formWhatsAppButton}</span>
          </a>
          <button
            type="button"
            onClick={handleReset}
            className="btn-secondary w-full sm:w-auto"
          >
            {t.contact.formAnother}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="card border-2 p-6 sm:p-8">
      <div className="flex items-center justify-between gap-2">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-500">
          {t.contact.formTitle}
        </p>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
          <Icon name="whatsapp" className="h-3.5 w-3.5 text-emerald-600" />
          {isEn ? 'Direct WhatsApp' : 'WhatsApp Directo'}
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="label">
            {t.contact.formName}
          </label>
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder={t.contact.formNamePlaceholder}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="cf-email" className="label">
            {t.contact.formEmail}
          </label>
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder={t.contact.formEmailPlaceholder}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="cf-company" className="label">
            {t.contact.formCompany}
          </label>
          <input
            id="cf-company"
            type="text"
            value={form.company}
            onChange={update('company')}
            placeholder={t.contact.formCompanyPlaceholder}
            className="field"
          />
        </div>
        <div>
          <label htmlFor="cf-service" className="label">
            {t.contact.formService}
          </label>
          <select
            id="cf-service"
            value={form.service}
            onChange={update('service')}
            className="field"
          >
            <option value="">{t.contact.formSelectService}</option>
            {serviceCategories.map((cat) => (
              <optgroup key={cat.id} label={cat.name}>
                {cat.services.map((s) => (
                  <option key={s.num} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className="label">
            {t.contact.formMessage}
          </label>
          <textarea
            id="cf-message"
            required
            rows={5}
            value={form.message}
            onChange={update('message')}
            placeholder={t.contact.formMessagePlaceholder}
            className="field resize-y"
          />
        </div>
      </div>

      {/* Cloudflare Turnstile CAPTCHA Anti-Bot */}
      <div className="mt-5 border-t border-ink-200 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <label className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-700">
              {t.contact.turnstileLabel || 'Verificación de seguridad Cloudflare'}
            </label>
          </div>
          <span className="font-mono text-[10px] text-ink-500">
            {t.contact.turnstileProtected || 'Protegido con Cloudflare Turnstile anti-bot'}
          </span>
        </div>

        <div className="bg-ink-50/60 p-2.5 border border-ink-200 rounded-none inline-block">
          <Turnstile
            ref={turnstileRef}
            onSuccess={(token) => {
              setTurnstileToken(token)
              setTurnstileError(false)
            }}
            onError={() => {
              setTurnstileToken('')
            }}
            onExpire={() => {
              setTurnstileToken('')
            }}
            theme="light"
          />
        </div>

        {turnstileError && !turnstileToken && (
          <p className="mt-2 font-mono text-xs font-semibold text-rose-600 flex items-center gap-1.5 animate-bounce">
            <span>⚠</span>
            <span>{t.contact.turnstileRequired}</span>
          </p>
        )}
      </div>

      <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <button type="submit" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
          <Icon name="whatsapp" className="h-4 w-4" />
          <span>{t.contact.formSubmit}</span>
          <Icon name="arrowRight" className="h-4 w-4" />
        </button>

        <p className="font-mono text-[11px] text-ink-500">
          {isEn
            ? '⚡ Opens WhatsApp chat directly with your inquiry'
            : '⚡ Abre el chat de WhatsApp directamente con tu consulta'}
        </p>
      </div>

      <p className="mt-3 font-mono text-[11px] uppercase tracking-wide text-ink-400">
        {site.footerNote}
      </p>
    </form>
  )
}

