// ============================================================
// DATOS GLOBALES DEL SITIO — Hamster Software
// Edita este archivo para actualizar textos de marca, contacto,
// hero, features, estadísticas, proceso y casos de éxito.
// ============================================================

export const site = {
  name: 'Hamster Software',
  shortName: 'HamsterSoftware',
  tagline: 'Soluciones de datos a tu medida',
  claim:
    'Desde Popayán, transformamos datos en decisiones inteligentes. Soluciones de software con la energía y dedicación de un hámster en su rueda.',
  location: 'Popayán, Cauca, Colombia',
  legal:
    'Razón social legalmente constituida y registrada en la Cámara de Comercio del Cauca. Registro Único Empresarial y Social (RUES).',
  footerNote: 'Respuesta garantizada en 24-48 horas hábiles.',
}

export const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Soluciones', to: '/soluciones' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Industrias', to: '/industrias' },
  { label: 'Proceso', to: '/proceso' },
  { label: 'Contacto', to: '/contacto' },
]

export const hero = {
  badge: 'Empresa de desarrollo de software',
  title: 'Construimos el software que tu empresa necesita',
  description:
    'Somos una empresa de desarrollo de software en Popayán, Colombia. Creamos aplicaciones web, móviles, sistemas de datos e inteligencia artificial para empresas que quieren crecer con tecnología. Desde la idea hasta la implementación.',
  primaryCta: 'Agendar Consulta Gratis',
  secondaryCta: 'Ver Servicios',
  chips: ['+50 proyectos entregados', '100% a tiempo', 'Equipos dedicados'],
}

export const features = [
  {
    icon: 'globe',
    title: 'Páginas Web y Apps',
    description: 'Sitios web, tiendas online y aplicaciones web a la medida.',
  },
  {
    icon: 'mobile',
    title: 'Apps Móviles',
    description: 'Aplicaciones para iPhone y Android para tu negocio.',
  },
  {
    icon: 'chart',
    title: 'Datos e IA',
    description: 'Dashboards, análisis de datos y modelos de inteligencia artificial.',
  },
  {
    icon: 'shield',
    title: 'Ciberseguridad',
    description: 'Protegemos tu empresa de vulnerabilidades y ataques.',
  },
]

export const stats = [
  { value: 50, suffix: '+', label: 'Proyectos Entregados' },
  { value: 30, suffix: '+', label: 'Clientes Satisfechos' },
  { value: 22, suffix: '', label: 'Servicios Especializados' },
  { value: 100, suffix: '%', label: 'Tasa de Satisfacción' },
]

export const rating = { score: '5.0', label: 'calificación' }

export const processSteps = [
  {
    num: '01',
    title: 'Consulta',
    description:
      'Escuchamos tus necesidades, analizamos tu situación actual y definimos juntos los objetivos del proyecto.',
  },
  {
    num: '02',
    title: 'Diseño & Desarrollo',
    description:
      'Arquitectamos la solución, diseñamos prototipos y construimos con metodología ágil — con entregas iterativas.',
  },
  {
    num: '03',
    title: 'Entrega & Soporte',
    description:
      'Desplegamos tu solución, capacitamos a tu equipo y ofrecemos soporte continuo para garantizar el éxito.',
  },
]

export const contactHighlights = ['Sin compromiso', 'Respuesta en 24h', '100% confidencial']

export const successCases = [
  {
    domain: 'rentaya.com.co',
    tags: ['WhatsApp Direct', 'Inmuebles & Autos', 'Filtros Avanzados'],
    title: 'Portal Web Inmobiliario & Automotriz',
    type: 'Plataforma Web',
    image: '/images/rentaya-web.png',
    description:
      'Compra, vende o alquila con total confianza. Conexión directa con propietarios y concesionarios mediante WhatsApp sin intermediarios innecesarios.',
    highlight: '100% Verificado',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Integración directa con WhatsApp para contacto inmediato',
      'Filtros de búsqueda avanzada y geolocalización',
    ],
  },
  {
    domain: 'rentaya.com.co',
    tags: ['WhatsApp Direct', 'Sin intermediarios', 'Experiencia Rápida', 'Geolocalización'],
    title: 'App Móvil de Clasificados & Renta',
    type: 'Mobile App',
    image: '/images/rentaya-app.png',
    description:
      'Compra, vende o alquila con total confianza. Conexión directa con propietarios y concesionarios mediante WhatsApp sin intermediarios innecesarios.',
    highlight: 'Trato Directo',
    features: [
      'Aplicación nativa optimizada para iOS y Android',
      'Notificaciones push en tiempo real para nuevos anuncios',
      'Chat y negociación directa sin comisiones',
    ],
  },
  {
    domain: 'empresamedicaencasa.com',
    tags: ['Salud', 'Citas', 'Web App'],
    title: 'Servicios Médicos Personalizados',
    type: 'Web App',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/empresamedicaencasa.png',
    description:
      'Implantación de un sitio web personalizado para atención médica personalizada, gestión de consultas y agendamiento de citas en línea.',
    highlight: 'Salud Digital',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'fundacionmallory.org',
    tags: ['Internacional', 'Donaciones', 'React'],
    title: "Sitios Web ONG'S — Mallory Ave Jersey City",
    type: "Sitio Web ONG",
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/ong3.png',
    description:
      'Implantación de una página web para una fundación ubicada en Mallory Ave Jersey City con canal de difusión comunitaria y pasarela de donaciones.',
    highlight: 'Impacto Social',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'fundaciontimbio.org',
    tags: ['ONG', 'Donaciones', 'WordPress'],
    title: "Sitios Web ONG'S — Timbío, Cauca",
    type: "Sitio Web ONG",
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitioong.png',
    description:
      'Implantación de una página web para una fundación en Timbío, Cauca, fortaleciendo el alcance social, la transparencia y el recaudo de donaciones.',
    highlight: 'Comunidad & Donaciones',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'radiostreaming.live',
    tags: ['Streaming', 'Radio', 'VPS'],
    title: 'Radio Streaming Services',
    type: 'Streaming & VPS',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitioradio.png',
    description:
      'Implementación con software de una radio virtual con servidores VPS optimizados para transmisión continua, baja latencia y alta concurrencia.',
    highlight: 'Transmisión 24/7',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'consultoriacontable.co',
    tags: ['Servicios', 'React', 'Tailwind'],
    title: 'Sitios Corporativos — Consultora Contable',
    type: 'Sitio Corporativo',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitiowebcorporativo2.png',
    description:
      'Implantación de una web para una consultora contable que ofrece asesoría fiscal, tributaria y financiera con integración analítica.',
    highlight: 'Finanzas & Analítica',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
      'Integración con sistemas de análisis y redes sociales',
    ],
  },
  {
    domain: 'agenciamarketing.com',
    tags: ['Marketing', 'Next.js', 'SEO'],
    title: 'Sitios Web Empresariales — Agencia de Marketing',
    type: 'Sitio Empresarial',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitiowebcorporativo3.png',
    description:
      'Implantación de una web para una agencia de marketing que ofrece servicios de consultoría estratégica y captación de clientes potenciales.',
    highlight: 'Estrategia Digital',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'comercializadorapt.com',
    tags: ['Corporativo', 'WordPress', 'Multilingüe'],
    title: 'Sitios Corporativos — Comercializadora Portugal',
    type: 'Sitio Corporativo',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitiowebcorporativo.png',
    description:
      'Implantación de una web para una comercializadora de Portugal con arquitectura multilingüe y catálogo corporativo para el mercado europeo.',
    highlight: 'Multilingüe Europa',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'exportacionesglobal.com',
    tags: ['Exportación', 'React', 'Multilingüe'],
    title: 'Sitios Web Empresariales — Empresa de Exportación Internacional',
    type: 'Sitio Empresarial',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitiowebjunk.png',
    description:
      'Implantación de una página web para una empresa de exportación internacional con soporte multilingüe y catálogo para comercio exterior.',
    highlight: 'Comercio Exterior',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'fundacionpopayan.org',
    tags: ['Fundación', 'WordPress', 'Eventos'],
    title: 'Sitios Web para Fundaciones — Popayán',
    type: 'Sitio para Fundación',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/sitiowebong2.png',
    description:
      'Implantación de una página web para una fundación de la ciudad de Popayán orientada a proyectos comunitarios y agenda de eventos sociales.',
    highlight: 'Gestión Social Popayán',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'modaytextil.com',
    tags: ['E-commerce', 'Woocommerce', 'Responsive'],
    title: 'Tienda Virtual — Microempresa Textil',
    type: 'Tienda Virtual',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/tienda.png',
    description:
      'Implantación de una tienda virtual para una microempresa textil con catálogo dinámico de prendas, carrito de compras y pasarela segura.',
    highlight: 'E-Commerce Textil',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
  {
    domain: 'restaurantedigital.com',
    tags: ['Restaurante', 'E-commerce', 'Pedidos'],
    title: 'Tienda Virtual — Restaurante Local',
    type: 'Tienda Virtual',
    image:
      'https://alejandrowebsites-git-main-soyalejandrolopezmurillos-projects.vercel.app/images/tiendavirtual02.png',
    description:
      'Implantación de una tienda virtual para un restaurante local con menú interactivo y recepción directa de pedidos para entrega o retiro.',
    highlight: 'Pedidos en Línea',
    features: [
      'Diseño web personalizado y adaptable a todos los dispositivos',
      'Optimización SEO para mejor posicionamiento',
    ],
  },
]

