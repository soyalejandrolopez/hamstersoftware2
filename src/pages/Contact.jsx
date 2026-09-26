import { useLocalizedData } from '../data/i18nData'
import ContactForm from '../components/ContactForm'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Contact() {
  const { site, contactHighlights, t, isEn } = useLocalizedData()

  const channels = isEn
    ? [
        {
          mark: 'HQ',
          title: 'Main Headquarters',
          desc: site.location,
          hint: 'In-person meetings by appointment',
        },
        {
          mark: '24h',
          title: 'Response Time',
          desc: 'Senior technical response within 24 business hours',
          hint: 'Detailed proposal in 48h',
        },
        {
          mark: 'GL',
          title: 'Global Delivery',
          desc: 'Serving enterprise clients across Colombia & internationally',
          hint: 'Remote & On-site',
        },
      ]
    : [
        {
          mark: 'HQ',
          title: 'Sede Principal',
          desc: site.location,
          hint: 'Popayán, Cauca, Colombia',
        },
        {
          mark: '24h',
          title: 'Tiempo de Respuesta',
          desc: 'Atención técnica en menos de 24 horas hábiles',
          hint: 'Propuesta en 48h',
        },
        {
          mark: 'GL',
          title: 'Cobertura',
          desc: 'Atendemos proyectos a nivel nacional e internacional',
          hint: 'Remoto & Presencial',
        },
      ]

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-16 sm:py-20">
          <SectionHeading
            eyebrow={t.contact.pageEyebrow}
            title={t.contact.pageTitle}
            description={t.contact.pageDescription}
          />
          <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {contactHighlights.map((item) => (
              <span key={item} className="chip !border-ink-900 !bg-white !text-ink-900">
                {item}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="container-hs grid gap-10 py-14 sm:py-16 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <h2 className="font-display text-2xl font-black text-ink-950">
            {t.contact.enterpriseTitle}
          </h2>
          <p className="mt-2 text-sm text-ink-600">
            {t.contact.enterpriseDesc}
          </p>

          <div className="mt-6 border-t-2 border-ink-900">
            {channels.map((ch) => (
              <div
                key={ch.title}
                className="group flex items-center gap-4 border-b-2 border-ink-900 py-4 transition hover:bg-brand-50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink-900 bg-white font-mono text-sm font-bold text-brand-600 transition group-hover:bg-brand-500 group-hover:text-white">
                  {ch.mark}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink-950">{ch.title}</p>
                  <p className="text-xs text-ink-600">{ch.desc}</p>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-500">
                    {ch.hint}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-2 border-ink-950 bg-ink-950 p-5 text-paper shadow-hard-accent">
            <p className="font-mono text-xs leading-relaxed tracking-wide">
              <span className="font-bold uppercase text-brand-400">
                {t.contact.proposalBadgeTitle}
              </span>{' '}
              <span className="text-ink-300">
                {t.contact.proposalBadgeDesc}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  )
}
