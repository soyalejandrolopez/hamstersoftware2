import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'

export default function Industries() {
  const { industryGroups, t, isEn } = useLocalizedData()

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-16 sm:py-20">
          <SectionHeading
            eyebrow={t.industries.pageEyebrow}
            title={t.industries.pageTitle}
            description={t.industries.pageDescription}
          />
        </div>
      </section>

      <section className="container-hs section-pad">
        <div className="grid gap-6 md:grid-cols-2">
          {industryGroups.map((group, gi) => (
            <Reveal key={group.name} delay={(gi % 2) * 100} className="h-full">
              <article className="card card-hover h-full p-6 sm:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs font-bold text-brand-600">
                    /{String(gi + 1).padStart(2, '0')}
                  </span>
                  <span className="badge">
                    {group.items.length} {isEn ? 'sectors' : 'sectores'}
                  </span>
                </div>
                <h2 className="mt-3 font-display text-2xl font-black text-ink-950 sm:text-3xl">
                  {group.name}
                </h2>
                <span className="mt-4 block h-[2px] w-full bg-ink-900" aria-hidden="true" />
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Link
                      key={item}
                      to="/contacto"
                      className="chip"
                      aria-label={
                        isEn
                          ? `Project in ${item}: contact us`
                          : `Proyecto de ${item}: contáctanos`
                      }
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner
        title={
          isEn
            ? "Don't see your specific sector listed?"
            : '¿Tu sector no está en la lista?'
        }
        description={
          isEn
            ? "Even if your specific niche is not listed, our architecture and engineering principles adapt to any operational domain. Tell us about your challenge."
            : 'Si tu industria no aparece, no significa que no podamos ayudarte: la lista refleja proyectos entregados, pero construimos software para cualquier sector. Cuéntanos tu caso.'
        }
      />
    </>
  )
}
