# 🐹 Hamster Software — Plataforma Digital & Portafolio Corporativo

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4.3-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-6.30.1-CA4245?style=flat-square&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-Private-1C1917?style=flat-square)](LICENSE)

Sitio web corporativo y portafolio interactivo de **Hamster Software**, agencia de ingeniería de software a medida, desarrollo web, aplicaciones móviles, arquitectura de datos y ciberseguridad.

🌐 **Sitio Web Oficial:** [https://hamstersoftware.com/](https://hamstersoftware.com/)

---

## 🚀 Características Principales

- **Arquitectura Bilingüe Nativa (ES / EN):** Contexto reactivo global (`LanguageContext`) con traducciones completas de interfaz, catálogo de servicios, casos de éxito y flujos de contacto.
- **Blog (37 artículos ES / EN):** Las 18 soluciones y 19 temas trasladados desde Servicios tienen páginas con funcionalidades, beneficios, un ejemplo de uso y su proceso de implementación. El selector de idioma conserva el artículo abierto.
- **Activos Multimedia 100% Locales (Offline-First):** Todas las capturas de pantalla y recursos gráficos de proyectos están integrados localmente bajo `public/images/`, garantizando tiempos de carga óptimos y cero dependencias de CDNs de terceros.
- **Enrutamiento Estático Resiliente (`HashRouter`):** Compatibilidad total con hosting estático, cPanel, Vercel, Netlify o GitHub Pages sin requerir configuraciones de reescritura de URLs en el servidor web.
- **Menú Contextual Personalizado:** Menú contextual interactivo accesible con clic derecho con accesos directos al portafolio, cambio de idioma, contacto directo vía WhatsApp y utilidades de navegación.
- **SEO Técnico & Datos Estructurados:** Integración de Schema.org JSON-LD (`Organization`, `WebSite`, `ProfessionalService`), Open Graph dinámico y Twitter Cards para máxima indexación en motores de búsqueda.
- **Portafolio de Casos de Éxito:** Muestrario de 16+ proyectos reales en sectores de salud digital, aplicaciones móviles, e-commerce, fundaciones/ONGs y streaming.
- **Monitoreo de Ciberseguridad (CVE):** Componente interactivo que refleja fuentes de seguridad y métricas de monitoreo de vulnerabilidades (NVD / NIST).

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework UI** | [React 18.3](https://react.dev/) |
| **Empaquetador & Servidor Dev** | [Vite 6.4](https://vitejs.dev/) |
| **Estilos & Diseño** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS + Autoprefixer |
| **Navegación & Rutas** | [React Router DOM 6.30](https://reactrouter.com/) |
| **Tipografía** | Fraunces, IBM Plex Mono, Inter (Google Fonts + BunnyCDN fallback) |
| **Iconografía & Assets** | SVG nativos optimizados |

---

## 📁 Estructura del Proyecto

```text
hamstersoftware2/
├── index.html                 # Punto de entrada HTML con SEO y Schema.org JSON-LD
├── package.json               # Dependencias y scripts de construcción
├── vite.config.js             # Configuración del compilador Vite
├── tailwind.config.js         # Configuración de tema, colores y tipografías
├── postcss.config.js          # Plugins de PostCSS (Tailwind, Autoprefixer)
├── scripts/
│   └── inline-dist.mjs        # Script de compilación bundle monorarchivo
├── public/
│   ├── favicon.svg            # Favicon corporativo SVG
│   ├── manifest.json          # Web App Manifest PWA
│   └── images/                # Galería de imágenes y capturas de proyectos locales
└── src/
    ├── main.jsx               # Montaje principal de la aplicación React
    ├── App.jsx                # Configuración de rutas y proveedores de contexto
    ├── index.css              # Directivas base de Tailwind y estilos globales
    ├── context/
    │   └── LanguageContext.jsx # Proveedor global de idioma (ES / EN)
    ├── data/
    │   ├── site.js            # Contenido, servicios y casos de éxito en Español
    │   ├── site.en.js         # Contenido, servicios y casos de éxito en Inglés
    │   ├── cves.js            # Datos y telemetría de seguridad en Español
    │   ├── cves.en.js         # Datos y telemetría de seguridad en Inglés
    │   ├── solutions.js       # Resúmenes y slugs del blog en Español
    │   ├── solutions.en.js    # Los mismos temas y slugs en Inglés
    │   ├── blogContent.js     # Contenido de las soluciones y unión del contenido del blog
    │   └── serviceArticles.js # Los 19 servicios convertidos en artículos bilingües
    ├── components/            # Componentes reutilizables (Navbar, Footer, ContextMenu, etc.)
    └── pages/                 # Vistas principales y Blog / BlogArticle
```

---

## 💻 Instalación y Uso Local

### Prerrequisitos

- **Node.js**: `v18.0.0` o superior (Recomendado `v20+` / `v24+`)
- **npm**: `v9.0.0` o superior

### 1. Clonar el Repositorio

```bash
git clone https://github.com/soyalejandrolopez/hamstersoftware2.git
cd hamstersoftware2
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Iniciar Entorno de Desarrollo

```bash
npm run dev
```

El servidor local iniciará en `http://localhost:3000/`.

### Blog y edición de artículos

El índice está en `/#/blog` y cada artículo en `/#/blog/<slug>`; `/#/soluciones` redirige al blog para conservar los enlaces anteriores. Los slugs son compartidos entre idiomas.

Edita los títulos, etiquetas y resúmenes de las 18 soluciones en `src/data/solutions.js` y `src/data/solutions.en.js`, y su contenido completo en `src/data/blogContent.js`. Los 19 artículos trasladados desde Servicios se editan en `src/data/serviceArticles.js`: cada entrada reúne su slug, número y versiones `es` y `en`, con resumen y contenido. Cada versión incluye introducción, funcionalidades, beneficios, ejemplo e implementación. Los textos de la interfaz se encuentran en `src/data/translations.js`.

La página Servicios conserva únicamente Web, Móvil y Escritorio. Datos e IA, IA Generativa, Cloud y Operaciones TI, y Procesos de Negocio se encuentran en el blog.

Ejecuta `npm test` para verificar enlaces de tarjetas, navegación, pie de página, índice, las 74 versiones de los artículos, el traslado de los 19 temas y las rutas inexistentes. Después ejecuta `npm run build` para verificar la compilación de producción.

---

## 📦 Scripts de Compilación y Despliegue

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con Hot Module Replacement (HMR). |
| `npm test` | Verifica las rutas y la presentación de todos los artículos en ES / EN. |
| `npm run build` | Compila los assets de producción optimizados en el directorio `dist/`. |
| `npm run preview` | Previsualiza localmente el resultado de la carpeta `dist/`. |
| `npm run build:single` | Compila y genera un artefacto monorarchivo (`inline-dist.mjs`). |
| `npm run build:cpanel` | Compila la app y empaqueta un archivo ZIP listo para desplegar en cPanel (`cpanel-deploy.zip`). |

---

## 🌐 Opciones de Despliegue

### Despliegue en cPanel / Hosting Compartido

Ejecuta el script automatizado:

```bash
npm run build:cpanel
```

Sube el archivo resultante `cpanel-deploy.zip` a tu directorio `public_html` en cPanel y descomprímelo. No requiere Node.js activo en el servidor gracias a la arquitectura cliente con `HashRouter`.

### Despliegue en Vercel / Netlify

1. Conecta el repositorio GitHub a tu cuenta de Vercel/Netlify.
2. Build Command: `npm run build`
3. Output Directory: `dist`

---

## 📞 Contacto & Soporte

- **Sitio Web:** [https://hamstersoftware.com/](https://hamstersoftware.com/)
- **WhatsApp:** [+57 302 579 0274](https://wa.me/573025790274)
- **Email:** contacto@hamstersoftware.com
- **LinkedIn / Redes:** [@hamstersoftware](https://hamstersoftware.com/#/contacto)

---

Desarrollado con ❤️ por el equipo de **Hamster Software**.
