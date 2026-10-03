import test from 'node:test'
import assert from 'node:assert/strict'
import { renderToStaticMarkup, renderToPipeableStream } from 'react-dom/server'
import { PassThrough } from 'node:stream'
import { MemoryRouter } from 'react-router-dom'
import { LanguageProvider } from '../src/context/LanguageContext'
import SolutionsGrid from '../src/components/SolutionsGrid'
import * as Application from '../src/App'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import { solutions } from '../src/data/solutions'
import { solutionsEn } from '../src/data/solutions.en'

function renderInLanguage(element, lang = 'es', path = '/blog') {
  globalThis.localStorage = { getItem: () => lang }
  return renderToStaticMarkup(
    <LanguageProvider>
      <MemoryRouter initialEntries={[path]}>{element}</MemoryRouter>
    </LanguageProvider>,
  )
}

function renderRouteInLanguage(lang, path = '/blog') {
  globalThis.localStorage = { getItem: () => lang }
  return new Promise((resolve, reject) => {
    const destination = new PassThrough()
    let html = ''
    destination.on('data', (chunk) => { html += chunk.toString() })
    destination.on('end', () => resolve(html))
    destination.on('error', reject)
    const stream = renderToPipeableStream(
      <LanguageProvider>
        <MemoryRouter initialEntries={[path]}><Application.SiteRoutes /></MemoryRouter>
      </LanguageProvider>,
      { onAllReady: () => stream.pipe(destination), onShellError: reject, onError: reject },
    )
  })
}

// Catches cards that still send readers to sales instead of their article.
test('each of the 37 cards opens its own article in either language', () => {
  for (const lang of ['es', 'en']) {
    const html = renderInLanguage(<SolutionsGrid />, lang)
    const articleLinks = [...html.matchAll(/href="(\/blog\/[^\"]+)"/g)].map((match) => match[1])
    assert.equal(new Set(articleLinks).size, 37)
    assert.ok(articleLinks.includes('/blog/vulnerabilidades'))
    assert.ok(articleLinks.includes('/blog/control-imei-posventa'))
    assert.ok(!html.includes('href="/contacto"'))
  }
})

// Catches incomplete conversion of the navigation and footer.
test('navigation and footer lead to the blog and individual posts', () => {
  for (const lang of ['es', 'en']) {
    const navbar = renderInLanguage(<Navbar />, lang)
    const footer = renderInLanguage(<Footer />, lang)
    assert.match(navbar, /href="\/blog"/)
    assert.match(footer, /href="\/blog\/vulnerabilidades"/)
    assert.ok(!navbar.includes('href="/soluciones"'))
  }
})

// Catches missing index/detail routes, mismatched translations, or empty articles.
test('the blog lists 37 posts and renders every full article in both languages', async () => {
  assert.equal(typeof Application.SiteRoutes, 'function', 'The application needs its blog routes')
  for (const lang of ['es', 'en']) {
    const catalog = lang === 'en' ? solutionsEn : solutions
    const index = await renderRouteInLanguage(lang)
    assert.match(index, /<h1[^>]*>Blog/)
    assert.equal((index.match(/href="\/blog\/[^\"]+"/g) || []).length, 37)
    for (const post of catalog) {
      const html = await renderRouteInLanguage(lang, `/blog/${post.slug}`)
      assert.ok(html.includes(`<h1`), post.slug)
      assert.ok(html.includes(post.name.replaceAll('&', '&amp;')), post.slug)
      assert.ok((html.match(/<section/g) || []).length >= 4, `Full article: ${lang}/${post.slug}`)
      assert.ok(html.includes('href="/blog"'), 'Return to blog')
      assert.ok(html.includes('href="/contacto"'), 'Article contact action')
      assert.ok(!html.includes('>404<'), post.slug)
    }
  }
})

// Catches topics remaining in the sales catalog, disappearing, or missing in English.
test('the 19 selected services move to blog articles while web, mobile and desktop remain services', async () => {
  const movedSlugs = [
    'ingenieria-datos', 'extraccion-datos-etl', 'visualizacion-datos', 'mineria-gestion-datos',
    'machine-learning', 'redes-neuronales-deep-learning', 'analitica-avanzada-negocios',
    'modelos-lenguaje-pequeno', 'bases-datos-vectoriales', 'chatbots-asistentes-virtuales',
    'nube-arquitectura-cloud', 'computacion-servidores', 'devops-ci-cd', 'automatizacion-ti',
    'middleware-integracion-sistemas', 'sistemas-bajo-demanda', 'automatizacion-empresarial-rpa',
    'operaciones-negocios-bpm', 'gestion-activos-ti',
  ]
  for (const lang of ['es', 'en']) {
    const catalog = lang === 'en' ? solutionsEn : solutions
    const servicesPage = await renderRouteInLanguage(lang, '/servicios')
    assert.equal((servicesPage.match(/<article/g) || []).length, 3)
    assert.ok(servicesPage.includes(lang === 'es' ? 'Software de Escritorio' : 'Desktop Software'))
    for (const slug of movedSlugs) {
      const post = catalog.find((item) => item.slug === slug)
      assert.ok(post, `${lang}: ${slug} must have a blog entry`)
      assert.ok(!servicesPage.includes(post.name.replaceAll('&', '&amp;')), `${slug} must leave Services`)
      const article = await renderRouteInLanguage(lang, `/blog/${slug}`)
      assert.ok((article.match(/<section/g) || []).length >= 4, `${lang}: ${slug} must open a full article`)
    }
  }
})

test('an unknown article shows the localized 404 page', async () => {
  assert.equal(typeof Application.SiteRoutes, 'function')
  for (const lang of ['es', 'en']) {
    const html = await renderRouteInLanguage(lang, '/blog/nonexistent-post')
    assert.match(html, />404</)
  }
})
