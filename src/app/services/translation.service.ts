import { Injectable, signal } from '@angular/core';

export type LanguageCode = 'ES' | 'EN';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Idioma actual reactivo mediante Signals de Angular
  currentLang = signal<LanguageCode>('ES');

  // Diccionario bilingüe completo de la aplicación Hamster Software
  private dictionary: Record<LanguageCode, Record<string, string>> = {
    ES: {
      // Navbar & Menú
      'nav.solutions': 'Soluciones',
      'nav.services': 'Servicios',
      'nav.industries': 'Industrias',
      'nav.process': 'Proceso',
      'nav.contact': 'Contacto',
      'nav.all_solutions': 'Ver todas las soluciones',
      'nav.all_services': 'Ver todos los servicios',
      'nav.sales_cta': 'Contactar Ventas',
      'nav.talk_cta': 'Hablemos',
      'nav.not_found_hint': '¿No encuentras lo que buscas?',
      'nav.not_found_desc': 'Cuéntanos tu idea y te proponemos la solución.',

      // Hero
      'hero.badge': 'EMPRESA DE DESARROLLO DE SOFTWARE',
      'hero.title_pre': 'Construimos el',
      'hero.title_hl': 'software',
      'hero.title_post': 'que tu empresa necesita',
      'hero.subhead_bold': 'Somos una empresa de desarrollo de software en Popayán, Colombia.',
      'hero.subhead_desc': 'Creamos aplicaciones web, móviles, sistemas de datos e inteligencia artificial para empresas que quieren crecer con tecnología. Desde la idea hasta la implementación.',
      'hero.cta_consult': 'Agendar Consulta Gratis',
      'hero.cta_services': 'Ver Servicios',
      'hero.trust_delivered': '+50 proyectos entregados',
      'hero.trust_ontime': '100% a tiempo',
      'hero.trust_teams': 'Equipos dedicados',

      // Pilares
      'pillar.web.title': 'Páginas Web y Apps',
      'pillar.web.desc': 'Sitios web, tiendas online y aplicaciones web a la medida.',
      'pillar.mobile.title': 'Apps Móviles',
      'pillar.mobile.desc': 'Aplicaciones nativas e híbridas para iOS y Android.',
      'pillar.data.title': 'Datos e IA',
      'pillar.data.desc': 'Dashboards, analítica, machine learning y automatización.',
      'pillar.security.title': 'Ciberseguridad',
      'pillar.security.desc': 'Auditorías, pruebas de vulnerabilidad y monitoreo continuo.',

      // Social Proof
      'proof.clients': '+30 empresas confían en nosotros',
      'proof.rating': 'Calificación 5.0 en Google Reviews',

      // Banner Métricas
      'stat.projects': 'Proyectos Entregados',
      'stat.clients': 'Clientes Satisfechos',
      'stat.services': 'Servicios Especializados',
      'stat.satisfaction': 'Tasa de Satisfacción',

      // Secciones Generales
      'section.services_tag': 'Nuestros Servicios',
      'section.services_title': 'Soluciones integrales de software para cada desafío',
      'section.services_desc': 'Desde el análisis de datos hasta la creación de plataformas completas. Diseñamos con altos estándares técnicos.',
      'section.solutions_tag': 'Catálogo de Soluciones',
      'section.solutions_title': '18 Soluciones Especializadas',
      'section.solutions_desc': 'Sistemas listos para personalizar e integrar en tu modelo de negocio.',
      'section.cyber_tag': 'Ciberseguridad Proactiva',
      'section.cyber_title': 'Protegemos tu infraestructura contra amenazas',
      'section.cyber_desc': 'Monitoreamos vulnerabilidades públicas en tiempo real y blindamos tus sistemas.',
      'section.portfolio_tag': 'Casos de Éxito',
      'section.portfolio_title': 'Transformando ideas en experiencias digitales',
      'section.portfolio_desc': 'Conoce algunas de las soluciones de software y aplicaciones que hemos construido para llevar a nuestros clientes al siguiente nivel.',
      'section.industries_tag': 'Industrias',
      'section.industries_title': 'Experiencia en todas las industrias',
      'section.industries_desc': 'Desde fintech hasta salud, hemos construido soluciones para empresas en todos los sectores.',
      'section.process_tag': 'Cómo Trabajamos',
      'section.process_title': 'Tres pasos hacia tu transformación digital',
      'section.process_desc': 'Un proceso simple, transparente y eficiente para llevar tu proyecto de la idea a la realidad.',
      'section.contact_tag': 'Contacto',
      'section.contact_title': '¿Listo para llevar tus datos al siguiente nivel?',
      'section.contact_desc': 'Agenda una consulta gratuita con nuestro equipo. Analizamos tu caso y te presentamos una propuesta personalizada en 48 horas.',

      // Formulario de Contacto
      'form.name': 'Nombre completo *',
      'form.email': 'Email empresarial',
      'form.company': 'Empresa u Organización',
      'form.service': 'Servicio de interés',
      'form.message': 'Cuéntanos sobre tu proyecto o necesidad *',
      'form.submit': 'Agendar Consulta',
      'form.disclaimer': 'Al enviar, se abrirá WhatsApp con tu mensaje prellenado. Respuesta en 24h.',

      // Context Menu
      'menu.quote': 'Cotizar Proyecto',
      'menu.services': 'Servicios (22)',
      'menu.solutions': 'Soluciones (18)',
      'menu.portfolio': 'Casos de Éxito',
      'menu.copy_url': 'Copiar enlace de página',
      'menu.whatsapp': 'Hablar por WhatsApp',
      'menu.reload': 'Recargar vista',
      'menu.copied': '¡Enlace copiado al portapapeles!',
      'menu.back_to_top': 'Subir al inicio'
    },
    EN: {
      // Navbar & Menú
      'nav.solutions': 'Solutions',
      'nav.services': 'Services',
      'nav.industries': 'Industries',
      'nav.process': 'Process',
      'nav.contact': 'Contact',
      'nav.all_solutions': 'View all solutions',
      'nav.all_services': 'View all services',
      'nav.sales_cta': 'Contact Sales',
      'nav.talk_cta': "Let's Talk",
      'nav.not_found_hint': "Can't find what you need?",
      'nav.not_found_desc': 'Tell us your vision and we will design the solution.',

      // Hero
      'hero.badge': 'SOFTWARE DEVELOPMENT COMPANY',
      'hero.title_pre': 'We build the',
      'hero.title_hl': 'software',
      'hero.title_post': 'your business needs',
      'hero.subhead_bold': 'We are a custom software development company in Popayán, Colombia.',
      'hero.subhead_desc': 'We build web apps, mobile apps, data platforms and artificial intelligence solutions for high-growth enterprises. From concept to deployment.',
      'hero.cta_consult': 'Schedule Free Consultation',
      'hero.cta_services': 'View Services',
      'hero.trust_delivered': '+50 projects delivered',
      'hero.trust_ontime': '100% on time',
      'hero.trust_teams': 'Dedicated teams',

      // Pilares
      'pillar.web.title': 'Websites & Web Apps',
      'pillar.web.desc': 'Custom websites, e-commerce, and bespoke web platforms.',
      'pillar.mobile.title': 'Mobile Apps',
      'pillar.mobile.desc': 'Native and hybrid apps for iOS and Android devices.',
      'pillar.data.title': 'Data & AI',
      'pillar.data.desc': 'Dashboards, advanced analytics, machine learning & automation.',
      'pillar.security.title': 'Cybersecurity',
      'pillar.security.desc': 'Code audits, pentesting and 24/7 proactive monitoring.',

      // Social Proof
      'proof.clients': '+30 businesses trust our engineering',
      'proof.rating': '5.0 Rating on Google Reviews',

      // Banner Métricas
      'stat.projects': 'Projects Delivered',
      'stat.clients': 'Satisfied Clients',
      'stat.services': 'Specialized Services',
      'stat.satisfaction': 'Satisfaction Rate',

      // Secciones Generales
      'section.services_tag': 'Our Services',
      'section.services_title': 'Comprehensive software solutions for every engineering challenge',
      'section.services_desc': 'From big data pipelines to full-stack platforms. Built with top engineering standards.',
      'section.solutions_tag': 'Solutions Catalog',
      'section.solutions_title': '18 Specialized Enterprise Solutions',
      'section.solutions_desc': 'Ready-to-deploy platforms tailored directly to your business model.',
      'section.cyber_tag': 'Proactive Cybersecurity',
      'section.cyber_title': 'Defending your digital infrastructure against threats',
      'section.cyber_desc': 'We track public vulnerabilities in real-time and shield your production systems.',
      'section.portfolio_tag': 'Success Stories',
      'section.portfolio_title': 'Transforming visionary ideas into digital reality',
      'section.portfolio_desc': 'Discover some of the flagship platforms and applications we have engineered.',
      'section.industries_tag': 'Industries',
      'section.industries_title': 'Domain expertise across multiple industries',
      'section.industries_desc': 'From fintech to healthcare, we have built battle-tested solutions for diverse sectors.',
      'section.process_tag': 'How We Work',
      'section.process_title': 'Three agile steps to your digital transformation',
      'section.process_desc': 'A transparent, collaborative and rapid process from prototype to deployment.',
      'section.contact_tag': 'Contact Us',
      'section.contact_title': 'Ready to take your tech infrastructure to the next level?',
      'section.contact_desc': 'Book a free consultation with our tech leads. We analyze your requirements and deliver a detailed roadmap in 48 hours.',

      // Formulario de Contacto
      'form.name': 'Full name *',
      'form.email': 'Business email',
      'form.company': 'Company or Organization',
      'form.service': 'Service of interest',
      'form.message': 'Tell us about your project or business needs *',
      'form.submit': 'Schedule Consultation',
      'form.disclaimer': 'Submitting opens WhatsApp with your pre-filled inquiry. 24h response guaranteed.',

      // Context Menu
      'menu.quote': 'Get a Quote',
      'menu.services': 'Services (22)',
      'menu.solutions': 'Solutions (18)',
      'menu.portfolio': 'Success Stories',
      'menu.copy_url': 'Copy Page URL',
      'menu.whatsapp': 'Chat on WhatsApp',
      'menu.reload': 'Reload View',
      'menu.copied': 'Link copied to clipboard!',
      'menu.back_to_top': 'Back to top'
    }
  };

  constructor() {
    // Recuperamos idioma guardado o usamos español por defecto
    const saved = localStorage.getItem('hamster_lang') as LanguageCode;
    if (saved === 'ES' || saved === 'EN') {
      this.currentLang.set(saved);
    }
  }

  // Alterna entre Español e Inglés sin servicios externos
  toggleLanguage(): LanguageCode {
    const next: LanguageCode = this.currentLang() === 'ES' ? 'EN' : 'ES';
    this.setLanguage(next);
    return next;
  }

  // Establece un idioma específico y lo persiste localmente
  setLanguage(lang: LanguageCode): void {
    this.currentLang.set(lang);
    localStorage.setItem('hamster_lang', lang);
    document.documentElement.lang = lang.toLowerCase();
  }

  // Traduce una clave
  t(key: string, fallback?: string): string {
    const lang = this.currentLang();
    const entry = this.dictionary[lang]?.[key];
    if (entry) return entry;
    // Si no está en el idioma actual, busca en ES como respaldo
    return this.dictionary['ES']?.[key] || fallback || key;
  }
}
