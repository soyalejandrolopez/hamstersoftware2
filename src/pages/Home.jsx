import { Link } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import SectionHeading from '../components/SectionHeading'
import HeroVisual from '../components/HeroVisual'
import SolutionsGrid from '../components/SolutionsGrid'
import CaseStudyCard from '../components/CaseStudyCard'
import CveTicker from '../components/CveTicker'
import CtaBanner from '../components/CtaBanner'
import Icon from '../components/Icons'

function TopTicker() {
  const { t } = useLocalizedData()
  const row = [...t.ticker, ...t.ticker]

  return (
    <div className="overflow-hidden border-b-2 border-ink-900 bg-ink-950 py-2 text-paper">
      <div className="flex w-max animate-marquee gap-8">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.2em]"
          >
            {item}
            <span className="text-brand-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const {
    t,
    isEn,
    hero,
    features,
    stats,
    rating,
    processSteps,
    successCases,
    serviceCategories,
    solutions,
    industryGroups,
    securityPoints,
  } = useLocalizedData()

  return (
    <>
      <TopTicker />

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative grid items-center gap-8 py-4 sm:py-6 lg:grid-cols-[1.1fr_1fr] lg:py-8">
          <Reveal>
            <p className="eyebrow">
              <span className="eyebrow-mark" />
              {hero.badge}
            </p>
            <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
              {t.hero.titlePrefix}
              <span className="italic text-brand-gradient">{t.hero.titleHighlight}</span>
              {t.hero.titleSuffix}
            </h1>
            <div className="mt-6 h-[3px] w-24 bg-brand-gradient" aria-hidden="true" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacto" className="btn-primary">
                {hero.primaryCta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link to="/servicios" className="btn-secondary">
                {hero.secondaryCta}
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ============ PRUEBA SOCIAL / STATS ============ */}
      <section className="border-b-2 border-ink-900 bg-white">
        <div className="container-hs py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
            <Reveal className="flex items-center gap-4">
              <div>
                <p className="flex items-center gap-2 font-display text-3xl font-black text-ink-950">
                  <Icon name="star" className="h-5 w-5 text-brand-600" />
                  {rating.score}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                  {rating.score} {t.stats.ratingLabel}
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-6 divide-x-0 sm:grid-cols-4 sm:divide-x sm:divide-ink-200">
              {stats.map((stat, i) => (
                <Reveal
                  key={stat.label}
                  delay={i * 80}
                  className="px-0 py-2 text-center sm:px-6 sm:text-left"
                >
                  <p className="font-display text-4xl font-black tracking-tight text-ink-950">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CASOS DE ÉXITO ============ */}
      <section className="border-b-2 border-ink-900 bg-paper section-pad">
        <div className="container-hs">
          <SectionHeading
            eyebrow={t.caseStudies.eyebrow}
            title={t.caseStudies.title}
            description={t.caseStudies.description}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {successCases.map((cs) => (
              <CaseStudyCard key={cs.title} caseStudy={cs} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="container-hs section-pad">
        <div className="grid gap-px border-2 border-ink-900 bg-ink-900 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 60} className="h-full">
              <article className="group h-full bg-paper p-6 transition hover:bg-white">
                <span className="font-mono text-xs font-bold text-brand-600">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-xl font-black text-ink-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{feature.description}</p>
                <span className="mt-4 block h-0.5 w-8 bg-ink-900 transition-all group-hover:w-16 group-hover:bg-brand-600" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SERVICIOS (PREVIEW POR CATEGORÍAS) ============ */}
      <section className="border-y-2 border-ink-900 bg-white section-pad">
        <div className="container-hs">
          <SectionHeading
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            description={t.services.description}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={(i % 3) * 80} className="h-full">
                <Link
                  to="/servicios"
                  className="card card-hover group flex h-full flex-col p-6"
                  aria-label={`${t.services.viewCategory} ${cat.name}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs font-bold text-brand-600">
                      /{String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="badge">
                      {cat.services.length} {t.services.servicesCount}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-black text-ink-950">
                    {cat.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
                    {cat.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-t border-ink-200 pt-4">
                    {cat.services.slice(0, 3).map((s) => (
                      <li key={s.num} className="font-mono text-xs text-ink-600">
                        — {s.name}
                      </li>
                    ))}
                  </ul>
                  <span className="btn-ghost mt-4 self-start">
                    {t.services.viewCategory}
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={160} className="h-full">
              <Link
                to="/blog"
                className="group flex h-full min-h-[220px] flex-col items-center justify-center border-2 border-dashed border-ink-300 bg-transparent p-6 text-center transition hover:border-ink-900 hover:bg-brand-50"
              >
                <span className="font-display text-4xl font-black text-ink-300 transition group-hover:text-brand-600">
                  {solutions.length}
                </span>
                <h3 className="mt-3 font-display text-xl font-black text-ink-950">
                  {t.solutions.viewAll}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  {t.blog.articles} · ES / EN
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ BLOG (PREVIEW) ============ */}
      <section className="container-hs section-pad">
        <SectionHeading
          eyebrow={t.solutions.eyebrow}
          title={t.solutions.title}
          description={t.solutions.description}
        />
        <SolutionsGrid limit={6} />
        <Reveal className="mt-10 text-center">
          <Link to="/blog" className="btn-secondary">
            {t.solutions.viewAll}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>

      {/* ============ CIBERSEGURIDAD + CVE ============ */}
      <section className="relative overflow-hidden border-y-2 border-ink-900 bg-ink-950 section-pad text-paper">
        {/* Imagen de oficina de fondo */}
        <div className="pointer-events-none absolute inset-0">
          <img
            src="/images/cybersecurity-office.jpg"
            alt={
              isEn
                ? 'Cybersecurity operations and software development center'
                : 'Centro de operaciones de ciberseguridad y desarrollo de software'
            }
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/90 to-ink-950/75" />
          <div className="bg-hatch absolute inset-0 opacity-40" aria-hidden="true" />
        </div>
        <div className="container-hs relative grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-400">
              {t.security.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] sm:text-5xl">
              {t.security.titlePrefix}
              <span className="italic text-brand-400">{t.security.titleHighlight}</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-400">
              {t.security.description}
            </p>
            <ul className="mt-6 space-y-0 border-t border-ink-800">
              {securityPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 border-b border-ink-800 py-3 font-mono text-sm text-ink-300"
                >
                  <span className="text-brand-400">▸</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link
              to="/blog/vulnerabilidades"
              className="mt-8 inline-flex items-center gap-2 border-2 border-paper bg-paper px-5 py-3 text-sm font-semibold text-ink-950 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:border-brand-500 hover:text-white hover:shadow-hard-white"
            >
              {t.security.exploreBtn}
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={150}>
            <CveTicker />
          </Reveal>
        </div>
      </section>

      {/* ============ INDUSTRIAS (PREVIEW) ============ */}
      <section className="border-b-2 border-ink-900 bg-white section-pad">
        <div className="container-hs">
          <SectionHeading
            eyebrow={t.industries.eyebrow}
            title={t.industries.title}
            description={t.industries.description}
          />
          <Reveal className="mt-10 flex flex-wrap justify-center gap-2">
            {industryGroups.flatMap((g) => g.items).map((item) => (
              <Link key={item} to="/industrias" className="chip">
                {item}
              </Link>
            ))}
          </Reveal>
          <Reveal className="mt-8 text-center">
            <Link to="/industrias" className="btn-secondary">
              {t.industries.exploreBtn}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESO ============ */}
      <section className="container-hs section-pad">
        <SectionHeading
          eyebrow={t.process.eyebrow}
          title={t.process.title}
          description={t.process.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 120} className="h-full">
              <article className="card card-hover relative h-full p-6">
                <span className="font-display text-6xl font-black text-brand-gradient">
                  {step.num}
                </span>
                <h3 className="mt-3 font-display text-2xl font-black text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <Icon
                    name="arrowRight"
                    className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-ink-900 md:block"
                  />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
