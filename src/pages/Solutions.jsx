import { useLocalizedData } from '../data/i18nData'
import SectionHeading from '../components/SectionHeading'
import SolutionsGrid from '../components/SolutionsGrid'
import CtaBanner from '../components/CtaBanner'
import Reveal from '../components/Reveal'

export default function Solutions() {
  const { t, isEn } = useLocalizedData()

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-16 sm:py-20">
          <SectionHeading
            eyebrow={t.solutions.pageEyebrow}
            title={t.solutions.pageTitle}
            description={t.solutions.pageDescription}
          />
        </div>
      </section>

      <div className="container-hs pt-12">
        <Reveal>
          <div className="border-2 border-ink-950 bg-ink-950 px-5 py-4 text-paper shadow-hard-accent">
            <p className="font-mono text-xs leading-relaxed tracking-wide">
              <span className="font-bold uppercase text-brand-400">
                {t.solutions.readyCount}
              </span>{' '}
              <span className="text-ink-300">
                {isEn
                  ? 'Each platform can be customized and integrated into your current systems. Request a no-commitment demo.'
                  : 'Cada una puede personalizarse e integrarse con tus sistemas actuales. Pide una demo sin compromiso.'}
              </span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="container-hs pb-16 sm:pb-20">
        <SolutionsGrid />
      </div>

      <CtaBanner />
    </>
  )
}
