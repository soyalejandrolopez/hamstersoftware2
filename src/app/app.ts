import { Component, HostListener, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { 
  LucideAngularModule, 
  Menu, 
  X, 
  ChevronRight,
  ChevronDown, 
  Smartphone, 
  Globe, 
  Database, 
  ShieldCheck,
  Code, 
  Server, 
  Cloud, 
  Cpu, 
  BrainCircuit, 
  TerminalSquare, 
  BarChart, 
  Bot, 
  Activity, 
  Layers, 
  Lock, 
  ArrowRight,
  Check,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Radio,
  Stethoscope,
  Ticket,
  Scissors,
  Sparkles,
  GraduationCap,
  Star,
  MessageSquare,
  Zap,
  Shield,
  Workflow,
  Monitor,
  Boxes,
  Copy,
  RefreshCw,
  Compass,
  Share2,
  ChevronUp
} from 'lucide-angular';

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  desc: string;
  features: string[];
  icon: string;
}

export interface SolutionItem {
  num: string;
  name: string;
  subtitle: string;
  desc: string;
  slug: string;
}

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface CveItem {
  id: string;
  severity: 'CRÍTICA' | 'ALTA' | 'MEDIA';
  desc: string;
  time: string;
}

export interface ProcessItem {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule, 
    RouterOutlet, 
    LucideAngularModule,
    MatButtonModule,
    MatRippleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  // Inyección de dependencias para enrutamiento y detección de cambios
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  
  // Bandera para saber si estamos en la página de inicio o en una subpágina
  isHomePage = true;

  ngOnInit() {
    // Revisamos el desplazamiento de una vez al arrancar
    this.checkScroll();
    this.updateRouteStatus(this.router.url);

    // Escuchamos los cambios de ruta para dejar la vista arriba y cerrar los menús abiertos
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateRouteStatus(event.urlAfterRedirects || event.url);
      window.scrollTo({ top: 0, behavior: 'instant' }); // Subimos la página al pelo
      this.closeSolutionsMenu();
      this.closeServicesMenu();
      this.closeMobileMenu();
      this.cdr.detectChanges(); // Forzamos el refresco para que todo quede sincronizado
    });
  }

  // Verifica si la persona está parada en el Home
  private updateRouteStatus(url: string) {
    const cleanUrl = (url || '').split('?')[0].split('#')[0];
    this.isHomePage = cleanUrl === '/' || cleanUrl === '';
  }

  // Lucide Icons Map
  readonly icons = {
    Menu, X, ChevronRight, ChevronDown, Smartphone, Globe, Database, ShieldCheck,
    Code, Server, Cloud, Cpu, BrainCircuit, TerminalSquare, BarChart, Bot, Activity, Layers, Lock, ArrowRight,
    Check, Phone, Mail, MapPin, ExternalLink, Radio, Stethoscope, Ticket, Scissors, Sparkles, GraduationCap, Star,
    MessageSquare, Zap, Shield, Workflow, Monitor, Boxes,
    Copy, RefreshCw, Compass, Share2, ChevronUp
  };

  // Variables de control de interfaz y desplazamiento
  isScrolled = false;
  scrollProgress = 0;       // Porcentaje de scroll (0 a 100%) para la barra de lectura
  showBackToTop = false;    // Muestra el botoncito flotante para volver arriba
  isMobileMenuOpen = false;
  // Idiomas soportados por Google Translate (controlados por nuestro dropdown personalizado)
  availableLanguages = [
    { code: 'es', label: 'ES', name: 'Español' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'pt', label: 'PT', name: 'Português' },
    { code: 'fr', label: 'FR', name: 'Français' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'it', label: 'IT', name: 'Italiano' }
  ];
  currentLang = 'ES';
  currentLangCode = 'es';
  isLangDropdownOpen = false;

  // Contact form model
  contactForm = {
    nombre: '',
    email: '',
    empresa: '',
    servicio: 'Ingeniería de Datos',
    mensaje: ''
  };

  // Metricas Hero
  stats = [
    { value: '+50', label: 'Proyectos Entregados' },
    { value: '+30', label: 'Clientes Satisfechos' },
    { value: '22', label: 'Servicios Especializados' },
    { value: '100%', label: 'Tasa de Satisfacción' }
  ];

  // 22 Servicios Especializados
  specializedServices: ServiceItem[] = [
    {
      id: '01',
      title: 'Ingeniería de Datos',
      slug: 'data-engineering',
      desc: 'Arquitectamos e implementamos pipelines de datos robustos y escalables que son la columna vertebral de tu estrategia de datos.',
      features: [
        'Diseño e implementación de pipelines de datos',
        'Procesamiento en tiempo real y por lotes',
        'Migración a data warehouse en la nube',
        'Integración con Apache Spark y Kafka',
        'Marcos de calidad y gobernanza de datos'
      ],
      icon: 'Database'
    },
    {
      id: '02',
      title: 'Extracción de Datos / ETL',
      slug: 'data-extraction-etl',
      desc: 'Extraemos datos de cualquier fuente y los transformamos en formatos limpios y estructurados listos para análisis.',
      features: [
        'Integración de datos multi-fuente',
        'Ingestión de APIs y webhooks',
        'Migración de sistemas heredados',
        'Estrategias incrementales y de carga completa',
        'Programación y monitoreo automatizado'
      ],
      icon: 'Layers'
    },
    {
      id: '03',
      title: 'Visualización de Datos',
      slug: 'data-visualization',
      desc: 'Transformamos datos complejos en visuales claros y convincentes que empoderan decisiones rápidas basadas en evidencia.',
      features: [
        'Dashboards interactivos (Tableau, Power BI, D3.js)',
        'Sistemas de reportes ejecutivos',
        'Monitoreo de KPIs en tiempo real',
        'Componentes de gráficos personalizados',
        'Visualización geoespacial y de redes'
      ],
      icon: 'BarChart'
    },
    {
      id: '04',
      title: 'Minería y Gestión de Datos',
      slug: 'data-mining-management',
      desc: 'Descubrimos insights ocultos en tus datos con soluciones de minería y gestión que te dan visibilidad y control total.',
      features: [
        'Detección de patrones y anomalías',
        'Segmentación y clustering de clientes',
        'Minería de reglas de asociación',
        'Gestión de datos maestros (MDM)',
        'Catálogo de datos y seguimiento de linaje'
      ],
      icon: 'Database'
    },
    {
      id: '05',
      title: 'Software de Escritorio',
      slug: 'desktop-software',
      desc: 'Construimos aplicaciones de escritorio nativas con el rendimiento y la seguridad de nivel empresarial.',
      features: [
        'Aplicaciones para Windows, macOS y Linux',
        'Apps multiplataforma con Electron y Tauri',
        'Integraciones con ERP y CRM',
        'Arquitectura offline-first',
        'Sistemas de actualización y despliegue automático'
      ],
      icon: 'Monitor'
    },
    {
      id: '06',
      title: 'Machine Learning',
      slug: 'machine-learning',
      desc: 'Desplegamos sistemas inteligentes de ML que automatizan decisiones complejas — desde pronósticos hasta procesamiento de documentos.',
      features: [
        'Analítica predictiva y pronósticos',
        'Modelos de NLP y visión por computadora',
        'Fine-tuning de LLMs y pipelines RAG',
        'MLOps y gestión del ciclo de vida de modelos',
        'Frameworks de A/B testing y experimentación'
      ],
      icon: 'BrainCircuit'
    },
    {
      id: '07',
      title: 'Desarrollo Móvil',
      slug: 'mobile-development',
      desc: 'Creamos aplicaciones móviles pulidas y de alto rendimiento para iOS y Android que los usuarios usan cada día.',
      features: [
        'iOS (Swift / SwiftUI) y Android (Kotlin)',
        'Multiplataforma con React Native y Flutter',
        'PWAs con capacidad offline',
        'Notificaciones push y compras in-app',
        'Optimización para App Store y Play Store'
      ],
      icon: 'Smartphone'
    },
    {
      id: '08',
      title: 'Sistemas Bajo Demanda',
      slug: 'on-demand-systems',
      desc: '¿Necesitas una solución personalizada — rápido? Arquitectamos y entregamos sistemas adaptados a tus requisitos y plazos.',
      features: [
        'Prototipado rápido y entrega de MVPs',
        'Arquitectura de microservicios y serverless',
        'Ingeniería de plataformas SaaS',
        'Diseño API-first y GraphQL',
        'Configuración de DevOps y pipelines CI/CD'
      ],
      icon: 'Zap'
    },
    {
      id: '09',
      title: 'Desarrollo Web',
      slug: 'web-development',
      desc: 'Diseñamos experiencias web de alto rendimiento — desde landing pages hasta plataformas empresariales complejas.',
      features: [
        'Frontends con React, Next.js y Vue.js',
        'Backends con Laravel, Node.js y Django',
        'Plataformas de e-commerce y marketplaces',
        'Optimización de rendimiento (Core Web Vitals)',
        'Integraciones con CMS headless y APIs'
      ],
      icon: 'Globe'
    },
    {
      id: '10',
      title: 'Modelos de Lenguaje Pequeño (SLMs)',
      slug: 'small-language-models',
      desc: 'Desplegamos modelos de IA compactos, rápidos y eficientes para ejecutarse en tus propios servidores o en local con total privacidad de datos.',
      features: [
        'Modelos compactos de alta precisión (Phi-3, Gemma, LLaMA 3 8B, Qwen)',
        'Despliegue local y on-premise con 100% de privacidad',
        'Fine-tuning especializado para tu negocio y terminología',
        'Inferencia ultra-rápida y optimización con cuantización (GGUF, AWQ)',
        'Integración RAG local sin costos por token'
      ],
      icon: 'Bot'
    },
    {
      id: '11',
      title: 'Bases de Datos Vectoriales',
      slug: 'vector-databases',
      desc: 'Implementamos y optimizamos bases de datos vectoriales para búsqueda semántica, sistemas de recomendación y pipelines RAG de alta escala.',
      features: [
        'Índices de similitud vectorial (HNSW, IVF-PQ, ScaNN)',
        'Embeddings de alta dimensionalidad para texto, imágenes y audio',
        'Integración con frameworks de IA (LangChain, LlamaIndex, Haystack)',
        'Escalabilidad horizontal y baja latencia en consultas (sub-10ms)',
        'Almacenamiento híbrido: vectorial + metadatos relacionales'
      ],
      icon: 'Database'
    },
    {
      id: '12',
      title: 'Chatbots y Asistentes Virtuales',
      slug: 'chatbots',
      desc: 'Desarrollamos chatbots inteligentes y agentes conversacionales multicanal con IA generativa, integrados a tus bases de datos y WhatsApp.',
      features: [
        'Agentes conversacionales con memoria y contexto de cliente',
        'Integración con WhatsApp Business API, Web, Telegram y CRM',
        'RAG conectado a inventario, catálogos y políticas internas',
        'Derivación inteligente a agentes humanos ante casos complejos',
        'Analítica de conversaciones, sentimiento y tasas de resolución'
      ],
      icon: 'MessageSquare'
    },
    {
      id: '13',
      title: 'Redes Neuronales y Deep Learning',
      slug: 'neural-networks',
      desc: 'Diseñamos, entrenamos y desplegamos arquitecturas de redes neuronales profundas para visión artificial, NLP, clasificación y detección de anomalías.',
      features: [
        'Arquitecturas CNN, RNN, Transformers y Autoencoders',
        'Visión por computadora (detección de objetos, segmentación y OCR)',
        'Modelos de series temporales y procesamiento de señales',
        'Optimización y cuantización para inferencia en tiempo real',
        'Pipelines de entrenamiento distribuido en GPU / TPU'
      ],
      icon: 'BrainCircuit'
    },
    {
      id: '14',
      title: 'Analítica Avanzada de Negocios',
      slug: 'advanced-analytics',
      desc: 'Modelado estadístico, análisis de cohortes, modelos de propensión y analítica prescriptiva para acelerar la toma de decisiones empresariales.',
      features: [
        'Modelado predictivo de ventas, abandono (churn) y demanda',
        'Segmentación comportamental y análisis de Lifetime Value (LTV)',
        'Cuadros de mando ejecutivos y tableros interactivos',
        'Detección de patrones de compra y recomendaciones',
        'Análisis de atribución de marketing y optimización de CAC'
      ],
      icon: 'BarChart'
    },
    {
      id: '15',
      title: 'Gestión de Activos de TI',
      slug: 'asset-management',
      desc: 'Sistemas centralizados para inventario, ciclo de vida, licencias, mantenimiento y auditoría de activos tecnológicos y empresariales.',
      features: [
        'Inventario automatizado de hardware, servidores y dispositivos',
        'Control de licencias de software y fechas de renovación',
        'Historial de mantenimiento, garantías y depreciación contable',
        'Códigos QR / RFID y asignación a empleados por departamento',
        'Auditorías de cumplimiento y reportes de seguridad'
      ],
      icon: 'Boxes'
    },
    {
      id: '16',
      title: 'Automatización Empresarial (RPA)',
      slug: 'enterprise-automation',
      desc: 'Automatizamos flujos de trabajo repetitivos, integración de sistemas y procesos manuales con bots RPA y orquestadores modernos.',
      features: [
        'Bots de automatización de tareas administrativas y financieras',
        'Extracción y procesamiento inteligente de facturas y documentos',
        'Sincronización automática entre ERPs, CRMs y bancos',
        'Workflows impulsados por eventos y webhooks en tiempo real',
        'Trazabilidad y monitoreo continuo de ejecuciones'
      ],
      icon: 'Cpu'
    },
    {
      id: '17',
      title: 'Operaciones de Negocios (BPM)',
      slug: 'business-operations',
      desc: 'Diseño, digitalización y optimización de flujos operativos empresariales (BPM) para aumentar la eficiencia y reducir cuellos de botella.',
      features: [
        'Mapeo y rediseño de procesos de negocio (BPMN 2.0)',
        'Portales de autoservicio y aprobaciones multinivel',
        'Dashboards de cuellos de botella y tiempos de ciclo (SLA)',
        'Gestión documental y firma digital integrada',
        'Integración con sistemas de contabilidad y recursos humanos'
      ],
      icon: 'Workflow'
    },
    {
      id: '18',
      title: 'Nube y Arquitectura Cloud',
      slug: 'cloud-computing',
      desc: 'Migración, diseño y optimización de arquitecturas en la nube (AWS, GCP, Azure, Cloudflare) con alta disponibilidad y costos controlados.',
      features: [
        'Arquitecturas serverless y basadas en microservicios',
        'Migración segura de infraestructura on-premise a la nube',
        'Optimización de costos cloud (FinOps) y reducción de facturación',
        'Redundancia multi-zona y alta disponibilidad (99.99%)',
        'Estrategias de respaldo automatizado y Disaster Recovery'
      ],
      icon: 'Cloud'
    },
    {
      id: '19',
      title: 'Computación y Servidores',
      slug: 'servers-computing',
      desc: 'Configuración, administración y virtualización de servidores Linux/Windows, bare metal, clústeres y almacenamiento de alto rendimiento.',
      features: [
        'Aprovisionamiento de servidores dedicados y VPS (Linux / Windows)',
        'Virtualización con Proxmox, VMware y KVM',
        'Hardening de seguridad de sistemas operativos y firewalls',
        'Configuración de almacenamiento en red (NAS/SAN, ZFS, Ceph)',
        'Monitoreo 24/7 de CPU, memoria, disco y red con alertas'
      ],
      icon: 'Server'
    },
    {
      id: '20',
      title: 'DevOps y CI/CD',
      slug: 'devops',
      desc: 'Pipelines de integración y despliegue continuo (CI/CD), infraestructura como código (IaC) y observabilidad para lanzar software más rápido y sin errores.',
      features: [
        'Pipelines automatizados de CI/CD (GitHub Actions, GitLab CI)',
        'Infraestructura como código con Terraform y Ansible',
        'Orquestación de contenedores con Kubernetes y Docker Swarm',
        'Estrategias de despliegue sin tiempo de inactividad (Blue-Green / Canary)',
        'Monitoreo de logs y métricas centralizadas (Prometheus, Grafana, ELK)'
      ],
      icon: 'TerminalSquare'
    },
    {
      id: '21',
      title: 'Automatización de TI',
      slug: 'it-automation',
      desc: 'Scripts, herramientas de auto-remediación y gestión centralizada para automatizar la administración de sistemas y soporte técnico.',
      features: [
        'Aprovisionamiento desatendido de estaciones de trabajo y servidores',
        'Scripts de mantenimiento preventivo y limpieza automatizada',
        'Auto-reparación de servicios caídos y alertas en tiempo real',
        'Gestión masiva de parches de seguridad y actualizaciones',
        'Backups programados y pruebas automáticas de restauración'
      ],
      icon: 'Code'
    },
    {
      id: '22',
      title: 'Middleware e Integración de Sistemas',
      slug: 'middleware',
      desc: 'Conectores, buses de eventos y capas de integración para comunicar sistemas heterogéneos, ERPs, APIs y bases de datos sin fricción.',
      features: [
        'Arquitecturas dirigidas por eventos (Event-Driven) con Kafka y RabbitMQ',
        'APIs REST y GraphQL unificadas sobre sistemas legados',
        'Transformación y mapeo de datos en tiempo real entre sistemas',
        'Gestión de colas, reintentos y tolerancia a fallos',
        'Monitoreo de transacciones y auditoría de mensajes'
      ],
      icon: 'Activity'
    }
  ];

  // 18 Soluciones
  solutions: SolutionItem[] = [
    { num: '01', name: 'Vulnerabilidades', subtitle: 'Pentesting y auditorías', desc: 'Auditorías de seguridad y pruebas de penetración para encontrar y corregir vulnerabilidades antes que los atacantes.', slug: 'vulnerabilities' },
    { num: '02', name: 'Monitoreo Sísmico', subtitle: 'Estaciones sísmicas en tiempo real', desc: 'Red de estaciones sísmicas con datos en tiempo real para alertar, analizar y visualizar actividad telúrica.', slug: 'seismic-monitoring' },
    { num: '03', name: 'Resultados Deportivos', subtitle: 'Plataforma live score', desc: 'Plataforma live score con resultados en tiempo real, estadísticas y notificaciones para ligas y torneos.', slug: 'sports-results' },
    { num: '04', name: 'Análisis de Ventas', subtitle: 'Dashboards y métricas', desc: 'Dashboards y métricas que transforman tus datos de ventas en decisiones accionables.', slug: 'sales-analytics' },
    { num: '05', name: 'Radio Streaming', subtitle: 'Infraestructura de audio', desc: 'Infraestructura de audio para transmisión en vivo y bajo demanda con alta disponibilidad.', slug: 'radio-streaming' },
    { num: '06', name: 'Sistema Telemedicina', subtitle: 'Consultas y expedientes', desc: 'Plataforma de consultas médicas virtuales con expedientes clínicos digitales seguros.', slug: 'telemedicine' },
    { num: '07', name: 'Reserva y Boletos', subtitle: 'Ticketing avanzado', desc: 'Plataforma de ticketing avanzado para eventos, transporte y espectáculos.', slug: 'ticketing' },
    { num: '08', name: 'Sistema Odoo CRM', subtitle: 'Implementación ERP', desc: 'Implementación y personalización de Odoo para integrar CRM, ventas, inventario y contabilidad.', slug: 'odoo-erp' },
    { num: '09', name: 'Plugins WordPress', subtitle: 'Desarrollo a medida', desc: 'Desarrollo de plugins y temas WordPress a medida para llevar tu sitio al siguiente nivel.', slug: 'wordpress-plugins' },
    { num: '10', name: 'IoT Internet de las Cosas', subtitle: 'Hardware y sensores', desc: 'Hardware y sensores conectados con software para monitorear y automatizar en tiempo real.', slug: 'iot' },
    { num: '11', name: 'Precios Medicamentos', subtitle: 'Comparador farmacéutico', desc: 'Comparador farmacéutico con precios actualizados de medicamentos en múltiples farmacias.', slug: 'medicine-prices' },
    { num: '12', name: 'OpenClaw', subtitle: 'Control de hardware arcade', desc: 'Software de control para hardware arcade: máquinas, juegos y gestión de fichas.', slug: 'openclaw' },
    { num: '13', name: 'Reserva Barbería', subtitle: 'Sistema para peluquerías', desc: 'Sistema de reservas para barberías y peluquerías con recordatorios automáticos.', slug: 'barbershop-booking' },
    { num: '14', name: 'Limpieza Facial', subtitle: 'Sistema para spas y clínicas', desc: 'Sistema para spas y clínicas estéticas: citas, expedientes y tratamiento de clientes.', slug: 'facial-cleaning' },
    { num: '15', name: 'Plataformas LMS y Moodle', subtitle: 'Cursos para escuelas y empresas', desc: 'Plataformas de aprendizaje para escuelas y empresas con Moodle y desarrollos a medida.', slug: 'lms-moodle' },
    { num: '16', name: 'Alquiler Lavadoras', subtitle: 'Gestión de rentas', desc: 'Gestión de rentas de lavadoras: máquinas, pagos, contratos y mantenimiento.', slug: 'laundry-rentals' },
    { num: '17', name: 'Infraestructura IaaS', subtitle: 'Virtualización Proxmox & ZSVirt', desc: 'Implementación de infraestructura como servicio (IaaS), virtualización empresarial de alto rendimiento con Proxmox VE y ZSVirt, clustering y alta disponibilidad.', slug: 'iaas-proxmox-zsvirt' },
    { num: '18', name: 'Control IMEI & Posventa', subtitle: 'Trazabilidad, garantías y servicio técnico', desc: 'Sistema integral para control de números IMEI, trazabilidad de dispositivos, gestión de garantías, órdenes de servicio técnico y atención posventa.', slug: 'imei-aftersales-control' }
  ];

  // CVE Feed
  cveData: CveItem[] = [
    { id: 'CVE-2026-4821', severity: 'CRÍTICA', desc: 'Ejecución remota de código en servidores Apache', time: 'hace 2 min' },
    { id: 'CVE-2026-4730', severity: 'ALTA', desc: 'Escalada de privilegios en kernel Linux', time: 'hace 18 min' },
    { id: 'CVE-2026-4602', severity: 'MEDIA', desc: 'XSS almacenado en panel de gestión', time: 'hace 1 h' },
    { id: 'CVE-2026-4518', severity: 'ALTA', desc: 'Fuga de información en API REST', time: 'hace 3 h' }
  ];

  // 34 Industrias
  industries: string[] = [
    'SaaS', 'Micro SaaS', 'B2B', 'Developer Tools', 'IA / Chatbots', 'Ciberseguridad',
    'Fintech', 'Banca', 'Seguros', 'Facturación', 'Clínica Médica', 'Farmacia',
    'Odontología', 'Veterinaria', 'Salud Mental', 'E-commerce', 'Marketplace', 'Suscripciones',
    'Delivery', 'Restaurantes', 'Hoteles', 'Belleza / Spa', 'Servicios Legales', 'Reservas',
    'Portafolio', 'Agencia', 'Gaming', 'Streaming', 'Hábitos', 'Recetas',
    'Meditación', 'Web3 / NFT', 'Computación Cuántica', 'Drones Autónomos'
  ];

  // 3 Pasos de Proceso
  processSteps: ProcessItem[] = [
    {
      num: '01',
      title: 'Consulta',
      desc: 'Escuchamos tus necesidades, analizamos tu situación actual y definimos juntos los objetivos del proyecto.'
    },
    {
      num: '02',
      title: 'Diseño & Desarrollo',
      desc: 'Arquitectamos la solución, diseñamos prototipos y construimos con metodología ágil — con entregas iterativas.'
    },
    {
      num: '03',
      title: 'Entrega & Soporte',
      desc: 'Desplegamos tu solución, capacitamos a tu equipo y ofrecemos soporte continuo para garantizar el éxito.'
    }
  ];

  // Escucha el scroll de la ventana para recalcular la barra de progreso y botón de retorno
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollY > 40;
    this.showBackToTop = scrollY > 450;

    // Cálculo del porcentaje de avance de lectura en la página
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (height > 0) {
      this.scrollProgress = Math.min(100, Math.max(0, (scrollY / height) * 100));
    } else {
      this.scrollProgress = 0;
    }
  }

  // Sube suavemente hasta la cima de la página
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  isSolutionsMenuOpen = false;
  isServicesMenuOpen = false;
  selectedServiceCategory = 'all';

  serviceCategories = [
    {
      id: 'data-ai',
      name: 'Datos, IA & Machine Learning',
      count: 8,
      items: [
        { name: 'Ingeniería de Datos', slug: 'data-engineering', icon: 'Database' },
        { name: 'Extracción de Datos / ETL', slug: 'data-extraction-etl', icon: 'Layers' },
        { name: 'Visualización de Datos', slug: 'data-visualization', icon: 'BarChart' },
        { name: 'Minería y Gestión de Datos', slug: 'data-mining-management', icon: 'Database' },
        { name: 'Machine Learning', slug: 'machine-learning', icon: 'BrainCircuit' },
        { name: 'Bases de Datos Vectoriales', slug: 'vector-databases', icon: 'Database' },
        { name: 'Chatbots y Asistentes Virtuales', slug: 'chatbots', icon: 'Bot' },
        { name: 'Analítica Avanzada de Negocios', slug: 'advanced-analytics', icon: 'BarChart' }
      ]
    },
    {
      id: 'web-mobile',
      name: 'Desarrollo Web, Móvil & Sistemas',
      count: 4,
      items: [
        { name: 'Software de Escritorio', slug: 'desktop-software', icon: 'Monitor' },
        { name: 'Desarrollo Móvil', slug: 'mobile-development', icon: 'Smartphone' },
        { name: 'Sistemas Bajo Demanda', slug: 'on-demand-systems', icon: 'Zap' },
        { name: 'Desarrollo Web', slug: 'web-development', icon: 'Globe' }
      ]
    },
    {
      id: 'cloud-devops',
      name: 'Cloud, Servidores & DevOps',
      count: 3,
      items: [
        { name: 'Nube y Arquitectura Cloud', slug: 'cloud-computing', icon: 'Cloud' },
        { name: 'Computación y Servidores', slug: 'servers-computing', icon: 'Server' },
        { name: 'DevOps y CI/CD', slug: 'devops', icon: 'TerminalSquare' }
      ]
    },
    {
      id: 'automation-it',
      name: 'Automatización & TI Empresarial',
      count: 2,
      items: [
        { name: 'Automatización Empresarial (RPA)', slug: 'enterprise-automation', icon: 'Cpu' },
        { name: 'Automatización de TI', slug: 'it-automation', icon: 'Code' }
      ]
    }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleSolutionsMenu(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isSolutionsMenuOpen = !this.isSolutionsMenuOpen;
    if (this.isSolutionsMenuOpen) {
      this.isServicesMenuOpen = false;
    }
  }

  closeSolutionsMenu() {
    this.isSolutionsMenuOpen = false;
  }

  toggleServicesMenu(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isServicesMenuOpen = !this.isServicesMenuOpen;
    if (this.isServicesMenuOpen) {
      this.isSolutionsMenuOpen = false;
    }
  }

  closeServicesMenu() {
    this.isServicesMenuOpen = false;
  }

  toggleLang(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isLangDropdownOpen = !this.isLangDropdownOpen;
  }

  closeLangDropdown() {
    this.isLangDropdownOpen = false;
  }

  // Traducción dinámica mediante Google Translate Widget
  // Estrategia: seteamos la cookie 'googtrans' y recargamos la página.
  // Google Translate lee esa cookie al cargar y traduce todo el DOM automáticamente.
  changeLanguage(langCode: string, label: string) {
    this.currentLang = label;
    this.currentLangCode = langCode;
    this.isLangDropdownOpen = false;

    if (langCode === 'es') {
      // Restaurar al idioma original: limpiamos cookies y recargamos
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname}`;
    } else {
      // Seteamos la cookie con el idioma destino y recargamos
      document.cookie = `googtrans=/es/${langCode}; path=/;`;
      document.cookie = `googtrans=/es/${langCode}; path=/; domain=${window.location.hostname}`;
    }

    // Recargamos la página para que Google Translate aplique la traducción de una
    window.location.reload();
  }

  // Scroll suave al formulario de contacto y foco inmediato en el primer campo
  scrollToContact(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const el = document.getElementById('contacto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const input = document.getElementById('nombre');
        if (input) {
          input.focus();
        }
      }, 400);
    }
  }

  // Despacha el mensaje de cotización directo al WhatsApp de Hamster Software (+57 302 5790274)
  sendWhatsApp(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    const nombre = this.contactForm.nombre?.trim() || 'Cliente';
    const email = this.contactForm.email?.trim() || 'No especificado';
    const empresa = this.contactForm.empresa?.trim() || 'No especificada';
    const servicio = this.contactForm.servicio || 'Desarrollo de Software';
    const mensaje = this.contactForm.mensaje?.trim() || 'Deseo agendar una consulta técnica.';

    const text = `Hola Hamster Software, me gustaría agendar una consulta técnica y cotizar un proyecto.\n\n*Nombre:* ${nombre}\n*Email:* ${email}\n*Empresa:* ${empresa}\n*Servicio:* ${servicio}\n*Mensaje:* ${mensaje}`;
    const url = `https://wa.me/573025790274?text=${encodeURIComponent(text)}`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = url;
    } else {
      const win = window.open(url, '_blank');
      if (!win) {
        window.location.href = url;
      }
    }
  }

  // Estado y coordenadas del menú contextual personalizado (al dar clic derecho)
  isContextMenuOpen = false;
  contextMenuPosition = { x: 0, y: 0 };
  copiedNotification = false;

  // Atrapamos el clic derecho del ratón en toda la pantalla
  @HostListener('document:contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault(); // Bloqueamos el menú por defecto del navegador
    
    // Calculamos para que el menú no se vaya a salir de la pantalla por los lados ni por abajo
    const menuWidth = 240;
    const menuHeight = 310;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let posX = event.clientX;
    let posY = event.clientY;

    if (posX + menuWidth > viewportWidth) {
      posX = viewportWidth - menuWidth - 10;
    }
    if (posY + menuHeight > viewportHeight) {
      posY = viewportHeight - menuHeight - 10;
    }

    this.contextMenuPosition = { x: posX, y: posY };
    this.isContextMenuOpen = true; // Abrimos el menú bacano
  }

  // Si hace clic en cualquier otro lado, cerramos los menús desplegados
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.isContextMenuOpen) {
      this.isContextMenuOpen = false;
    }
    if (this.isLangDropdownOpen) {
      this.isLangDropdownOpen = false;
    }
  }

  // Si presiona la tecla Escape, cerramos el menú de una
  @HostListener('document:keydown.escape')
  onEscape() {
    this.isContextMenuOpen = false;
  }

  // Copia el enlace actual en el portapapeles del usuario
  copyCurrentUrl() {
    navigator.clipboard.writeText(window.location.href);
    this.showCopiedToast();
    this.isContextMenuOpen = false;
  }

  // Recarga la página por si se necesita refrescar datos
  reloadCurrentPage() {
    this.isContextMenuOpen = false;
    window.location.reload();
  }

  // Navega hacia una ruta o ancla específica
  navigateTo(path: string, fragment?: string) {
    this.isContextMenuOpen = false;
    if (fragment) {
      this.router.navigate([path], { fragment });
    } else {
      this.router.navigate([path]);
    }
  }

  // Abre el chat oficial de soporte por WhatsApp
  contactWhatsAppDirect() {
    this.isContextMenuOpen = false;
    window.open('https://wa.me/573025790274', '_blank');
  }

  // Muestra la notificación flotante (toast) cuando se copia el enlace
  private showCopiedToast() {
    this.copiedNotification = true;
    setTimeout(() => {
      this.copiedNotification = false;
      this.cdr.detectChanges();
    }, 2500);
  }
}
