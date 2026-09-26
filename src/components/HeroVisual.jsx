import { useLocalizedData } from '../data/i18nData'
import Icon from './Icons'

// Composición visual del hero: mock de "terminal/dashboard" editorial.
export default function HeroVisual() {
  const { t, isEn } = useLocalizedData()

  const kpis = [
    { label: t.hero.kpi1Label, value: t.hero.kpi1Value, tone: 'text-emerald-700' },
    { label: t.hero.kpi2Label, value: t.hero.kpi2Value, tone: 'text-brand-600' },
    { label: t.hero.kpi3Label, value: t.hero.kpi3Value, tone: 'text-sky-700' },
  ]

  const logs = [
    { mark: '✓', text: t.hero.log1, tone: 'text-emerald-700' },
    { mark: '↻', text: t.hero.log2, tone: 'text-brand-600' },
    { mark: '■', text: t.hero.log3, tone: 'text-sky-700' },
  ]

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="border-2 border-ink-950 bg-white shadow-hard">
        {/* Barra de ventana */}
        <div className="flex items-center gap-1.5 border-b-2 border-ink-950 bg-paper px-4 py-2.5">
          <span className="h-2.5 w-2.5 border border-ink-950 bg-red-500" />
          <span className="h-2.5 w-2.5 border border-ink-950 bg-amber-400" />
          <span className="h-2.5 w-2.5 border border-ink-950 bg-emerald-500" />
          <span className="ml-3 font-mono text-[10px] font-medium tracking-wide text-ink-500">
            app.hamstersoftware.com
          </span>
        </div>

        <div className="space-y-4 p-5">
          {/* KPIs */}
          <div className="grid grid-cols-3 gap-3">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="border border-ink-200 bg-paper p-3">
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-ink-400">
                  {kpi.label}
                </p>
                <p className={`mt-1 font-display text-lg font-black ${kpi.tone}`}>{kpi.value}</p>
              </div>
            ))}
          </div>

          {/* Gráfico de barras cuadradas */}
          <div className="border border-ink-200 p-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-ink-700">
                {isEn ? 'Data activity' : 'Actividad de datos'}
              </p>
              <span className="badge">{isEn ? 'Real-time' : 'Tiempo real'}</span>
            </div>
            <div className="mt-3 flex h-24 items-end gap-1.5">
              {[35, 55, 40, 70, 52, 85, 64, 92, 74, 100, 82, 95].map((h, i) => (
                <div
                  key={i}
                  className={`w-full ${i === 9 ? 'bg-brand-600' : 'bg-brand-200'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          {/* Filas de pipeline estilo log */}
          <div className="space-y-1.5 font-mono text-xs">
            {logs.map((row) => (
              <div
                key={row.text}
                className="flex items-center gap-2.5 border border-ink-200 bg-paper px-3 py-2.5"
              >
                <span className={`font-bold ${row.tone}`}>{row.mark}</span>
                <p className="text-ink-600">{row.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tarjeta flotante desplazada */}
      <div className="absolute -bottom-5 -left-4 flex items-center gap-3 border-2 border-ink-950 bg-brand-gradient px-4 py-3 shadow-hard sm:-left-8">
        <Icon name="rocket" className="h-5 w-5 text-white" />
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-wide text-white">
            {t.hero.badgeDeployment}
          </p>
          <p className="font-mono text-[10px] text-white/80">{t.hero.badgeTime}</p>
        </div>
      </div>
    </div>
  )
}
