import { Link, useParams } from 'react-router-dom'
import { useLocalizedData } from '../data/i18nData'
import { blogContent } from '../data/blogContent'
import usePageMetadata from '../hooks/usePageMetadata'
import NotFound from './NotFound'
import Icon from '../components/Icons'

export default function BlogArticle() {
  const { slug } = useParams()
  const { solutions, lang, t } = useLocalizedData()
  const post = solutions.find((item) => item.slug === slug)
  const content = Object.hasOwn(blogContent, slug) ? blogContent[slug][lang] : undefined
  usePageMetadata(post ? `${post.name} — Hamster Software` : undefined, post?.description)

  if (!post || !content) return <NotFound />

  const wordCount = [content.intro, ...content.features, content.benefits, content.example, content.implementation]
    .join(' ').trim().split(/\s+/).length
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 200))
  const sections = [
    { id: 'features', title: t.blog.features, items: content.features },
    { id: 'benefits', title: t.blog.benefits, text: content.benefits },
    { id: 'example', title: t.blog.example, text: content.example },
    { id: 'implementation', title: t.blog.implementation, text: content.implementation },
  ]
  const index = solutions.findIndex((item) => item.slug === slug)
  const neighbors = [solutions[index - 1], solutions[index + 1]].filter(Boolean)

  return (
    <article>
      <header className="relative overflow-hidden border-b-2 border-ink-900">
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="container-hs relative py-12 sm:py-16">
          <Link to="/blog" className="btn-ghost">← {t.blog.back}</Link>
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-brand-600">{t.blog.article} {post.num}</span>
              <span className="badge">{post.tag}</span>
            </div>
            <h1 className="mt-5 break-words font-display text-4xl font-black leading-tight tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">{post.name}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-600">{post.description}</p>
            <p className="mt-6 font-mono text-xs text-ink-500">Hamster Software · {readingMinutes} {t.blog.readingTime}</p>
          </div>
        </div>
      </header>

      <div className="container-hs grid items-start gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <div className="min-w-0 max-w-3xl">
          <p className="text-lg leading-8 text-ink-700">{content.intro}</p>
          {sections.map((section) => (
            <section key={section.id} aria-labelledby={`article-${section.id}`} className="mt-10 border-t border-ink-200 pt-8">
              <h2 id={`article-${section.id}`} className="font-display text-2xl font-black text-ink-950 sm:text-3xl">{section.title}</h2>
              {section.items ? (
                <ul className="mt-5 list-disc space-y-4 pl-5 text-base leading-7 text-ink-600 marker:text-brand-500">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : <p className="mt-4 text-base leading-8 text-ink-600">{section.text}</p>}
            </section>
          ))}
        </div>

        <aside className="border-2 border-ink-950 bg-ink-950 p-6 text-paper shadow-hard-accent lg:sticky lg:top-24">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-brand-400">{t.blog.projectEyebrow}</span>
          <h2 className="mt-4 font-display text-2xl font-black">{t.blog.projectTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-ink-300">{t.blog.projectDescription}</p>
          <Link to="/contacto" className="btn-secondary mt-6 w-full">
            {t.blog.contact}<Icon name="arrowUpRight" className="h-4 w-4 shrink-0" />
          </Link>
          <Link to="/blog" className="mt-5 inline-block font-mono text-xs text-brand-400 underline underline-offset-4">{t.blog.back}</Link>
        </aside>
      </div>

      <nav className="container-hs border-t border-ink-200 py-10 sm:py-12" aria-label={t.blog.moreArticles}>
        <h2 className="font-display text-2xl font-black text-ink-950">{t.blog.moreArticles}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {neighbors.map((neighbor) => (
            <Link key={neighbor.slug} to={`/blog/${neighbor.slug}`} className="card card-hover flex items-center justify-between gap-4 p-5">
              <span><span className="block font-mono text-xs text-ink-500">{t.blog.article} {neighbor.num}</span><span className="mt-2 block font-display text-lg font-bold text-ink-950">{neighbor.name}</span></span>
              <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-brand-600" />
            </Link>
          ))}
        </div>
      </nav>
    </article>
  )
}
