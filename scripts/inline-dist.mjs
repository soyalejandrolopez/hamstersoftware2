// Genera un dist/index.html autocontenido (CSS y JS inline) a partir del build de Vite.
// Uso: npm run build:single
// Útil para abrir el sitio con doble clic, enviarlo por correo o alojarlo en cualquier
// hosting estático sin configuración adicional.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const dist = new URL('../dist', import.meta.url).pathname

const html = readFileSync(join(dist, 'index.html'), 'utf8')

// Localiza el CSS generado
const cssFile = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.css'))
const css = readFileSync(join(dist, 'assets', cssFile), 'utf8')

// Localiza el JS generado
const jsFile = readdirSync(join(dist, 'assets')).find((f) => f.endsWith('.js'))
let js = readFileSync(join(dist, 'assets', jsFile), 'utf8')

// Escapa </script> dentro del bundle para poder inlinearlo sin romper el HTML
js = js.replace(/<\/script>/g, '<\\/script>')

// Favicon como data URI
const favicon = readFileSync(join(dist, 'favicon.svg'), 'utf8')
const faviconDataUri = `data:image/svg+xml,${encodeURIComponent(favicon)}`

let out = html
  .replace(/<link rel="icon"[^>]*>/, () => `<link rel="icon" href="${faviconDataUri}" />`)
  .replace(/<script type="module"[^>]*src="[^"]*"[^>]*><\/script>/, () => `<script type="module">${js}</script>`)
  .replace(/<link rel="stylesheet"[^>]*href="[^"]*"[^>]*>/, () => `<style>${css}</style>`)

writeFileSync(join(dist, 'index.html'), out)
console.log('✓ dist/index.html autocontenido generado (CSS y JS inline)')
