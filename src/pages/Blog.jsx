import { useLocalizedData } from '../data/i18nData'
import SolutionsGrid from '../components/SolutionsGrid'
import CtaBanner from '../components/CtaBanner'
import usePageMetadata from '../hooks/usePageMetadata'

export default function Blog() {
  const { t, solutions } = useLocalizedData()
  usePageMetadata('Blog — Hamster Software', t.solutions.pageDescription)

  return (
    <>
      <section className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow"><span className="eyebrow-mark" />{t.blog.eyebrow}</span>
            <h1 className="mt-4 font-display text-5xl font-black tracking-tight text-ink-950 sm:text-6xl">Blog</h1>
            <p className="mt-5 text-base leading-relaxed text-ink-600">{t.solutions.pageDescription}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <span className="badge">{solutions.length} {t.blog.articles}</span>
              <span className="badge">{t.blog.languages}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container-hs pb-16 sm:pb-20" aria-label={t.blog.articleList}>
        <SolutionsGrid />
      </section>
      <CtaBanner />
    </>
  )
}
