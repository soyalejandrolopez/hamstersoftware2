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
  },
]
