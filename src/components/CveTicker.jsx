import { useEffect, useState } from 'react'
import { useLocalizedData } from '../data/i18nData'

const severityStyles = {
  CRÍTICA: 'bg-red-600 text-white border-red-600',
  CRITICAL: 'bg-red-600 text-white border-red-600',
  ALTA: 'bg-brand-500 text-white border-brand-500',
  HIGH: 'bg-brand-500 text-white border-brand-500',
  MEDIA: 'bg-white text-ink-700 border-ink-400',
  MEDIUM: 'bg-white text-ink-700 border-ink-400',
}

export default function CveTicker() {
  const [tick, setTick] = useState(0)
  const { demoCves, timeAgoLabel, t } = useLocalizedData()

  // Re-render cada 30s para refrescar las etiquetas de tiempo
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 30000)
    return () => clearInterval(id)
  }, [])

  // Cada tick avanza el reloj demo de los CVEs
  const items = demoCves.map((cve) => ({ ...cve, minutes: cve.minutesAgo + tick * 5 }))

  return (
    <div className="border-2 border-paper bg-ink-950 text-paper shadow-hard-white">
      <div className="flex items-center justify-between gap-3 border-b border-ink-800 px-5 py-4">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-500">
            {t.security.cveRealtime}
          </p>
          <h3 className="mt-1 font-display text-lg font-black">{t.security.cveTitle}</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 border border-red-500 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-400">
          <span className="h-2 w-2 animate-pulse-dot bg-red-500" />
          {t.security.cveLive}
        </span>
      </div>
      <ul className="divide-y divide-ink-800">
        {items.map((cve) => (
          <li key={cve.id} className="flex items-start gap-3 px-5 py-4">
            <span
              className={`shrink-0 border px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] ${
                severityStyles[cve.severity] || severityStyles.MEDIUM
              }`}
            >
              {cve.severity}
            </span>
            <div className="min-w-0">
              <p className="font-mono text-sm font-bold">{cve.id}</p>
              <p className="mt-0.5 text-sm text-ink-300">{cve.title}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-ink-500">
                {timeAgoLabel(cve.minutes)}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <div className="border-t border-ink-800 px-5 py-3">
        <p className="font-mono text-[10px] uppercase tracking-wider text-ink-500">
          {t.security.cveSource}: NVD · +128 {t.security.cveMonitoredToday}
        </p>
      </div>
    </div>
  )
}
