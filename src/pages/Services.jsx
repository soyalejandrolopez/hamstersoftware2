import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icons'

export default function Services() {
  const { serviceCategories, t, isEn } = useLocalizedData()

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-16 sm:py-20">
          <SectionHeading
            eyebrow={t.services.pageEyebrow}
            title={t.services.pageTitle}
            description={t.services.pageDescription}
          />
        </div>
      </section>

      {serviceCategories.map((cat, ci) => (
        <section
          key={cat.id}
          id={cat.id}
          className="border-b-2 border-ink-900 py-14 sm:py-16"
        >
          <div className="container-hs">
            <Reveal className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-mono text-sm font-bold text-brand-600">
                /{String(ci + 1).padStart(2, '0')}
              </span>
              <h2 className="font-display text-3xl font-black tracking-tight text-ink-950 sm:text-4xl">
                {cat.name}
              </h2>
              <span className="badge">
                {cat.services.length} {t.services.servicesCount}
              </span>
            </Reveal>
            <Reveal>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
                {cat.description}
              </p>
              <span className="mt-6 block h-[2px] w-full bg-ink-900" aria-hidden="true" />
            </Reveal>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cat.services.map((service, i) => (
                <Reveal key={service.num} delay={(i % 3) * 80} className="h-full">
                  <article className="card card-hover group flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-black leading-snug text-ink-950">
                        {service.name}
                      </h3>
                      <span className="font-display text-3xl font-black text-ink-200 transition group-hover:text-brand-500">
                        {service.num}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {service.description}
                    </p>
                    <ul className="mt-4 flex-1 space-y-0 border-t border-ink-200">
                      {service.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 border-b border-ink-100 py-2 text-sm text-ink-600"
                        >
                          <span className="mt-0.5 font-bold text-brand-600">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-center justify-between">
                      <Link to="/contacto" className="btn-ghost">
                        {isEn ? 'Request Quote' : 'Solicitar Cotización'}
                        <Icon name="arrowRight" className="h-3.5 w-3.5" />
                      </Link>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-ink-400">
                        #{service.num}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="container-hs py-14 text-center sm:py-16">
        <Reveal>
          <p className="font-display text-2xl font-black text-ink-950 sm:text-3xl">
            {isEn ? "Can't find exactly what you're looking for?" : '¿No encuentras exactamente lo que buscas?'}
          </p>
          <p className="mx-auto mt-2 max-w-xl text-sm text-ink-600">
            {isEn
              ? 'We also build tailor-made systems engineered for your unique operations.'
              : 'También construimos sistemas a la medida de tu operación.'}
          </p>
          <Link to="/contacto" className="btn-primary mt-6">
            {isEn ? 'Tell us about your project' : 'Cuéntanos tu proyecto'}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
