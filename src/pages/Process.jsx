import { useLocalizedData } from '../data/i18nData'
import SectionHeading from '../components/SectionHeading'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'

const stepDetailsEs = [
  {
    points: [
      'Reunión inicial sin costo de 30–45 minutos',
      'Análisis de tu situación actual y objetivos',
      'Propuesta personalizada en 48 horas',
    ],
  },
  {
    points: [
      'Prototipos y diseño validados contigo',
      'Sprints ágiles con entregas iterativas',
      'Demostraciones continuas del avance',
    ],
  },
  {
    points: [
      'Despliegue y puesta en producción',
      'Capacitación de tu equipo',
      'Soporte continuo y mejoras evolutivas',
    ],
  },
]

const stepDetailsEn = [
  {
    points: [
      'Free 30–45 minute initial technical discovery session',
      'In-depth review of your technical stack and milestones',
      'Comprehensive custom proposal delivered in 48 hours',
    ],
  },
  {
    points: [
      'Interactive Figma prototypes and user testing',
      'Two-week agile sprints with working software demos',
      'Continuous code reviews, CI/CD, and quality assurance',
    ],
  },
  {
    points: [
      'Production deployment with zero downtime',
      'Team onboarding and comprehensive documentation',
      'Ongoing SLA support, monitoring, and feature iteration',
    ],
  },
]

export default function Process() {
  const { processSteps, contactHighlights, t, isEn } = useLocalizedData()
  const stepDetails = isEn ? stepDetailsEn : stepDetailsEs

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-16 sm:py-20">
          <SectionHeading
            eyebrow={t.process.pageEyebrow}
            title={t.process.pageTitle}
            description={t.process.pageDescription}
          />
        </div>
      </section>

      <section className="container-hs section-pad">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10">
            {processSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <article className="card card-hover relative flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
                  <div className="sm:w-28 sm:shrink-0">
                    <span className="font-display text-7xl font-black leading-none text-brand-gradient">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl font-black text-ink-950 sm:text-3xl">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                    <ul className="mt-4 space-y-0 border-t-2 border-ink-900">
                      {stepDetails[i].points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 border-b border-ink-200 py-2.5 text-sm text-ink-600"
                        >
                          <span className="mt-0.5 font-bold text-brand-600">▸</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-2">
          {contactHighlights.map((item) => (
            <span key={item} className="chip !border-ink-900 !bg-white !text-ink-900">
              {item}
            </span>
          ))}
        </Reveal>
      </section>

      <CtaBanner />
    </>
  )
}
