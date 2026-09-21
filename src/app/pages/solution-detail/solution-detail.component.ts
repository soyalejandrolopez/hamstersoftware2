import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { 
  LucideAngularModule, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  Server, 
  Database, 
  Layers, 
  Cpu, 
  Globe, 
  TerminalSquare, 
  Sparkles, 
  Activity, 
  Lock,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-angular';

export interface SolutionDetail {
  slug: string;
  num: string;
  name: string;
  subtitle: string;
  tagline: string;
  overview: string;
  challengesSolved: string[];
  features: { title: string; desc: string; icon: string }[];
  technicalSpecs: { label: string; value: string }[];
  useCases: string[];
  deliverables: string[];
}

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-solution-detail',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    LucideAngularModule,
    MatButtonModule,
    MatRippleModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  templateUrl: './solution-detail.component.html',
  styleUrl: './solution-detail.component.scss'
})
export class SolutionDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  readonly icons = {
    ArrowLeft,
    ArrowRight,
    Check,
    ShieldCheck,
    Zap,
    Server,
    Database,
    Layers,
    Cpu,
    Globe,
    TerminalSquare,
    Sparkles,
    Activity,
    Lock,
    Phone,
    Mail,
    ExternalLink
  };

  currentSlug = '';
  solution: SolutionDetail | null = null;
  relatedSolutions: { name: string; subtitle: string; slug: string }[] = [];

  contactForm = {
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  };

  private solutionsDatabase: Record<string, SolutionDetail> = {
    'vulnerabilities': {
      slug: 'vulnerabilities',
      num: '01',
      name: 'Vulnerabilidades',
      subtitle: 'Pentesting y auditorías',
      tagline: 'Identificación, análisis y mitigación de brechas de seguridad antes de que sean explotadas.',
      overview: 'Nuestro servicio de auditoría y pentesting examina a profundidad tus aplicaciones web, APIs, redes internas y código fuente. Simulamos ataques avanzados de actores maliciosos para entregar informes de remediación priorizados por criticidad con soporte directo de ingenieros de seguridad.',
      challengesSolved: [
        'Riesgo de fuga de información confidencial y bases de datos de clientes.',
        'Incumplimiento de normativas de protección de datos (GDPR, Habeas Data).',
        'Vulnerabilidades de día cero (0-day) y fallos lógicos en lógica de negocio.',
        'Configuraciones inseguras en servidores cloud y contenedores.'
      ],
      features: [
        { title: 'Ethical Hacking Web y Móvil', desc: 'Pruebas OWASP Top 10 aplicadas a frontends, backends y microservicios.', icon: 'ShieldCheck' },
        { title: 'Auditoría de Código Estático (SAST)', desc: 'Inspección profunda de repositorios buscando debilidades de inyección y credenciales expuestas.', icon: 'TerminalSquare' },
        { title: 'Pentesting de Infraestructura Cloud', desc: 'Revisión exhaustiva de configuraciones en AWS, GCP, Azure y Proxmox.', icon: 'Server' },
        { title: 'Informes Ejecutivos & Técnicos', desc: 'PoC (pruebas de concepto) paso a paso con código de parcheo listo para implementar.', icon: 'Check' }
      ],
      technicalSpecs: [
        { label: 'Metodología', value: 'OWASP, OSSTMM, NIST SP 800-115' },
        { label: 'Cobertura', value: 'Web, iOS, Android, APIs REST/GraphQL, Redes' },
        { label: 'Entregable', value: 'Reporte PDF con CVSS v3.1 + Sesión de Remedio' },
        { label: 'Tiempo Promedio', value: '5 a 15 días hábiles según alcance' }
      ],
      useCases: [
        'Fintechs y pasarelas de pago que requieren certificación de seguridad.',
        'Empresas de SaaS antes de lanzar su versión de producción al mercado.',
        'Plataformas gubernamentales o de salud que manejan datos sensibles.'
      ],
      deliverables: [
        'Reporte ejecutivo para junta directiva',
        'Reporte técnico detallado con pasos de reproducción (PoC)',
        'Checklist de remediación y recomendaciones preventivas',
        'Re-test gratuito para verificar la corrección de fallas críticas'
      ]
    },
    'seismic-monitoring': {
      slug: 'seismic-monitoring',
      num: '02',
      name: 'Monitoreo Sísmico',
      subtitle: 'Estaciones sísmicas en tiempo real',
      tagline: 'Red de telemetría y sensores en tiempo real para análisis y alerta temprana de actividad telúrica.',
      overview: 'Desarrollamos e integramos plataformas de adquisición continua de datos sismológicos con sensores triaxiales y acelerómetros. Procesamos espectros de frecuencia, aceleraciones pico del terreno (PGA) y emitimos alertas de alta fiabilidad en milisegundos.',
      challengesSolved: [
        'Latencia alta en la transmisión de señales desde zonas remotas o montañosas.',
        'Falta de visualización unificada de sismogramas en tiempo real.',
        'Falsas alarmas por ruido ambiental o vibraciones de tráfico pesado.',
        'Dificultad para correlacionar eventos históricos con modelos geológicos.'
      ],
      features: [
        { title: 'Adquisición de Datos IoT', desc: 'Transmisión vía MQTT, WebSockets y radiofrecuencia desde estaciones de campo.', icon: 'Activity' },
        { title: 'Visualización de Sismogramas', desc: 'Gráficos interactivos a 100 Hz con zoom temporal y cálculo dinámico de amplitudes.', icon: 'Layers' },
        { title: 'Motor de Detección de Fases', desc: 'Algoritmos STA/LTA automáticos para detección inmediata de ondas P y S.', icon: 'Zap' },
        { title: 'Alertas Multi-Canal', desc: 'Notificaciones push, SMS, sirens y webhooks a organismos de protección civil.', icon: 'Sparkles' }
      ],
      technicalSpecs: [
        { label: 'Tasa de Muestreo', value: '50 Hz - 250 Hz continua' },
        { label: 'Protocolos', value: 'SeedLink, miniSEED, MQTT, WebSockets' },
        { label: 'Almacenamiento', value: 'TimescaleDB / InfluxDB con compresión Gorilla' },
        { label: 'Latencia de Alerta', value: '< 2.5 segundos post-disparo' }
      ],
      useCases: [
        'Institutos geográficos y observatorios vulcanológicos regionales.',
        'Compañías de infraestructura civil, represas hidroeléctricas y puentes.',
        'Empresas mineras que monitorean estabilidad de taludes y galerías.'
      ],
      deliverables: [
        'Dashboard de telemetría sísmica 24/7 web y responsive',
        'Microservicios de ingestión en tiempo real con alta redundancia',
        'API de consulta para investigadores y analistas de datos',
        'Manual de calibración de sensores y guías de mantenimiento'
      ]
    },
    'sports-results': {
      slug: 'sports-results',
      num: '03',
      name: 'Resultados Deportivos',
      subtitle: 'Plataforma live score',
      tagline: 'Motor de marcador en vivo, estadísticas detalladas y alertas instantáneas para ligas, clubes y medios.',
      overview: 'Plataforma completa de marcadores en vivo para torneos deportivos. Diseñada para soportar millones de conexiones concurrentes vía WebSockets con baja latencia, feeds automatizados de incidencias, tablas de posiciones y perfiles de jugadores.',
      challengesSolved: [
        'Picos de tráfico masivos durante finales y minutos culminantes de partidos.',
        'Desincronización en la actualización de goles, faltas y tarjetas.',
        'Complejidad para administrar calendarios, clasificaciones y fixtures dinámicos.',
        'Monetización limitada y baja retención de aficionados.'
      ],
      features: [
        { title: 'Live Match Center', desc: 'Visualización jugada a jugada con línea de tiempo y alineaciones interactivas.', icon: 'Activity' },
        { title: 'Arquitectura Ultra-Escalable', desc: 'Broadcasting distribuido capaz de servir a miles de usuarios sin retrasos.', icon: 'Server' },
        { title: 'Estadísticas Avanzadas', desc: 'Posesión, disparos al arco, mapa de calor y efectividad por jugador.', icon: 'Layers' },
        { title: 'Panel de Árbitros / Operadores', desc: 'Interfaz rápida para registrar eventos en 2 toques desde cualquier dispositivo móvil.', icon: 'Zap' }
      ],
      technicalSpecs: [
        { label: 'Tecnología Real-Time', value: 'WebSockets / SSE con fallback a polling' },
        { label: 'Caché', value: 'Redis Cluster con invalidación instantánea' },
        { label: 'Compatibilidad', value: 'Web responsive, PWA y SDK para iOS/Android' },
        { label: 'Latencia de Actualización', value: '< 400 milisegundos' }
      ],
      useCases: [
        'Ligas departamentales, torneos profesionales y copas de fútbol/baloncesto.',
        'Portales de noticias y medios de comunicación que transmiten eventos en vivo.',
        'Casas de apuestas y plataformas deportivas de fidelización.'
      ],
      deliverables: [
        'Aplicación web responsiva con diseño optimizado para móvil',
        'Panel de administración para comisarios y relatores deportivos',
        'API pública/privada de resultados para integración en terceros',
        'Infraestructura cloud autoscalable'
      ]
    },
    'sales-analytics': {
      slug: 'sales-analytics',
      num: '04',
      name: 'Análisis de Ventas',
      subtitle: 'Dashboards y métricas',
      tagline: 'Inteligencia de negocios y visualización ejecutiva para maximizar ingresos y predecir demanda.',
      overview: 'Convertimos tus bases de datos de facturación, CRM y comercio electrónico en tableros ejecutivos interactivos. Monitorea ingresos en tiempo real, identifica productos más rentables, reduce la fuga de clientes y anticipa tendencias de compra.',
      challengesSolved: [
        'Reportes manuales en hojas de cálculo propensos a error humano y desactualizados.',
        'Datos aislados entre facturación electrónica, tiendas físicas y e-commerce.',
        'Falta de visibilidad sobre el Costo de Adquisición (CAC) y el Customer Lifetime Value (LTV).',
        'Demoras para tomar decisiones estratégicas de precios e inventario.'
      ],
      features: [
        { title: 'Dashboards Ejecutivos Multi-Canal', desc: 'Métricas consolidadas de ventas físicas, web, mayoristas y marketplace.', icon: 'Layers' },
        { title: 'Modelos de Cohortes y Retención', desc: 'Análisis de comportamiento de recompra y predicción de churn.', icon: 'Activity' },
        { title: 'Proyecciones con Machine Learning', desc: 'Estimación de demanda para optimizar compras y stock de inventario.', icon: 'Cpu' },
        { title: 'Alertas Inteligentes a Telegram/Slack', desc: 'Notificaciones automáticas cuando se alcance una meta o se detecte una caída anómala.', icon: 'Zap' }
      ],
      technicalSpecs: [
        { label: 'Fuentes Soportadas', value: 'PostgreSQL, MySQL, Shopify, WooCommerce, Odoo, SAP' },
        { label: 'Herramientas', value: 'Dashboards a medida en Angular / Apache Superset / Metabase' },
        { label: 'Frecuencia de Actualización', value: 'Tiempo real o sincronizaciones periódicas' },
        { label: 'Seguridad', value: 'Control de acceso granular por sucursales y roles' }
      ],
      useCases: [
        'Cadenas de retail y supermercados con múltiples puntos de venta.',
        'Empresas B2B con fuerza de ventas y metas por representante.',
        'Marcas de comercio electrónico directo al consumidor (D2C).'
      ],
      deliverables: [
        'Tablero de control interactivo con filtros por fecha, sede y vendedor',
        'Pipeline de ingesta y transformación de datos automatizado',
        'Diccionario de datos y capacitación a líderes de ventas',
        'Manual de usuario y soporte analítico'
      ]
    },
    'radio-streaming': {
      slug: 'radio-streaming',
      num: '05',
      name: 'Radio Streaming',
      subtitle: 'Infraestructura de audio',
      tagline: 'Transmisión de audio en vivo y podcasts con estabilidad ininterrumpida y reproductores modernos.',
      overview: 'Infraestructura de streaming de audio de grado profesional con tecnología Icecast / SHOUTcast optimizada. Incluye autodj, transcoding adaptativo en AAC/MP3, panel de control de programación y reproductores HTML5 embebibles ultraligeros.',
      challengesSolved: [
        'Caídas de transmisión durante momentos de máxima sintonía.',
        'Consumo excesivo de ancho de banda y altos costos de servidores.',
        'Reproductores lentos o bloqueados en navegadores móviles.',
        'Dificultad para medir oyentes reales, ubicación y tiempo promedio de escucha.'
      ],
      features: [
        { title: 'AutoDJ 24/7 en la Nube', desc: 'Automatización de listas de reproducción y cuñas publicitarias sin depender de la PC local.', icon: 'Server' },
        { title: 'Player Web HTML5 Personalizable', desc: 'Diseño responsive con visualizador de espectro, portada de álbum y metadatos.', icon: 'Globe' },
        { title: 'Analítica de Audiencia en Vivo', desc: 'Mapa geográfico de oyentes, dispositivos, picos de sintonía y retención.', icon: 'Activity' },
        { title: 'Grabación de Podcasts y Emisiones', desc: 'Archivo automático de programas para publicación inmediata en plataformas de audio.', icon: 'Database' }
      ],
      technicalSpecs: [
        { label: 'Códecs', value: 'AAC+ v2 (HD a 64-128kbps) y MP3 hasta 320kbps' },
        { label: 'Protocolo de Entrega', value: 'HTTPS / HLS / SSL con soporte en Chrome, Safari, Edge' },
        { label: 'Red de Distribución', value: 'Nodos CDN con baja latencia para streaming mundial' },
        { label: 'Disponibilidad', value: '99.95% SLA respaldado por monitoreo proactivo' }
      ],
      useCases: [
        'Emisoras de radio comunitarias, comerciales y universitarias.',
        'Comunidades religiosas y ministerios con programas en vivo.',
        'Podcasters y productores de eventos musicales online.'
      ],
      deliverables: [
        'Servidor Icecast de alta capacidad configurado y securizado',
        'Widget reproductor web responsivo integrable en cualquier sitio',
        'Acceso a consola de AutoDJ y analíticas en tiempo real',
        'Documentación para enlaces en apps móviles y directorios de radio'
      ]
    },
    'telemedicine': {
      slug: 'telemedicine',
      num: '06',
      name: 'Sistema Telemedicina',
      subtitle: 'Consultas y expedientes',
      tagline: 'Plataforma médica integral: videoconsultas cifradas, historia clínica digital y prescripciones seguras.',
      overview: 'Solución completa de salud digital que conecta a médicos y pacientes. Ofrece salas virtuales de atención con videollamada cifrada de extremo a extremo, agendamiento inteligente con pagos en línea, historia clínica electrónica normada y recetas digitales con firma.',
      challengesSolved: [
        'Desplazamientos innecesarios y salas de espera congestionadas.',
        'Historias clínicas en papel desorganizadas o sin respaldos seguros.',
        'Incumplimiento de la confidencialidad médico-paciente en canales no seguros.',
        'Altas tasas de ausentismo a citas programadas.'
      ],
      features: [
        { title: 'Videoconsultas HD Cifradas', desc: 'Conexión WebRTC directa sin necesidad de instalar software adicional.', icon: 'Lock' },
        { title: 'Historia Clínica Electrónica', desc: 'Formatos clínicos parametrizables según especialidad con antecedentes y evolución.', icon: 'Layers' },
        { title: 'Prescripción Médica Digital', desc: 'Emisión de fórmulas con código QR de validación y firma electrónica.', icon: 'ShieldCheck' },
        { title: 'Agendamiento y Recordatorios', desc: 'Confirmación automática de citas vía WhatsApp y correo electrónico.', icon: 'Zap' }
      ],
      technicalSpecs: [
        { label: 'Cifrado', value: 'TLS 1.3 + AES-256 en reposo, compatible con HIPAA' },
        { label: 'Vídeo', value: 'WebRTC P2P con relay TURN/STUN redundante' },
        { label: 'Integraciones', value: 'Pasarelas Wompi/Stripe, WhatsApp Cloud API' },
        { label: 'Auditoría', value: 'Trazabilidad completa de accesos a historias clínicas' }
      ],
      useCases: [
        'Clínicas y centros médicos con atención ambulatoria y de especialistas.',
        'Consultorios particulares de psicología, nutrición y medicina general.',
        'Programas de salud ocupacional para empresas corporativas.'
      ],
      deliverables: [
        'Portal para pacientes con reservas y acceso a recetas médicas',
        'Panel médico para control de consultas, agenda e historias',
        'Sistema de facturación y cobro automático por consulta',
        'Infraestructura privada con copias de seguridad continuas'
      ]
    },
    'ticketing': {
      slug: 'ticketing',
      num: '07',
      name: 'Reserva y Boletos',
      subtitle: 'Ticketing avanzado',
      tagline: 'Venta de boletos, control de aforo y validación de accesos con códigos QR anti-fraude en segundos.',
      overview: 'Plataforma para organizadores de eventos, teatros, conferencias y empresas de transporte. Gestiona mapa de asientos interactivo, compras seguras con pasarelas locales e internacionales, y control de accesos ultra-rápido mediante app móvil de escaneo offline.',
      challengesSolved: [
        'Filas interminables en taquillas y puertas de ingreso.',
        'Falsificación y reventa descontrolada de boletos.',
        'Comisiones abusivas de intermediarios tradicionales de boletería.',
        'Pérdida de conectividad a internet en recintos cerrados durante el ingreso.'
      ],
      features: [
        { title: 'Selector de Asientos Interactivo', desc: 'Mapa visual del recinto con reservas de butacas en tiempo real.', icon: 'Layers' },
        { title: 'QR Dinámico Anti-Clonación', desc: 'Códigos criptográficamente firmados que previenen duplicados.', icon: 'Lock' },
        { title: 'App de Escaneo de Acceso', desc: 'Validación en menos de 0.3 segundos compatible con modo sin conexión.', icon: 'Zap' },
        { title: 'Reportes de Taquilla y Aforo', desc: 'Métricas de ventas, ingresos recaudados y flujo de entrada por puerta.', icon: 'Activity' }
      ],
      technicalSpecs: [
        { label: 'Velocidad de Escaneo', value: '< 300 ms por entrada con feedback auditivo/visual' },
        { label: 'Modo Offline', value: 'Sincronización bidireccional local ante caídas de red' },
        { label: 'Formatos', value: 'Apple Wallet, Google Wallet, PDF descargable y WhatsApp' },
        { label: 'Capacidad', value: 'Soporte de miles de transacciones por minuto en preventas' }
      ],
      useCases: [
        'Conciertos, festivales musicales y espectáculos teatrales.',
        'Congresos académicos, seminarios y exposiciones comerciales.',
        'Empresas de transporte intermunicipal y excursiones turísticas.'
      ],
      deliverables: [
        'Sitio web de venta de boletería personalizado con tu propia marca',
        'Aplicación móvil para validadores y personal de control en puerta',
        'Panel de administración con liquidación en tiempo real de ingresos',
        'Capacitación operativa para el día del evento'
      ]
    },
    'odoo-erp': {
      slug: 'odoo-erp',
      num: '08',
      name: 'Sistema Odoo CRM',
      subtitle: 'Implementación ERP',
      tagline: 'Implementación, migración y módulos a medida para unificar compras, ventas, inventario y contabilidad.',
      overview: 'Consultoría e ingeniería especializada en Odoo ERP (Community y Enterprise). Adaptamos los flujos de trabajo de tu empresa a Odoo, desarrollamos módulos propios para facturación electrónica local, conectamos tiendas online y capacitamos a tu equipo.',
      challengesSolved: [
        'Desconexión total entre el inventario físico, la contabilidad y las ventas.',
        'Procesos manuales duplicados que consumen cientos de horas operativas al mes.',
        'Dificultad para cumplir con los requisitos de facturación electrónica DIAN.',
        'Sistemas legados rígidos y costosos de licenciar por usuario.'
      ],
      features: [
        { title: 'Localización y Facturación Electrónica', desc: 'Módulos adaptados a la normativa fiscal y tributaria de tu país.', icon: 'ShieldCheck' },
        { title: 'Módulos Personalizados en Python', desc: 'Desarrollo de lógica exclusiva que Odoo estándar no cubre por defecto.', icon: 'TerminalSquare' },
        { title: 'Sincronización con E-Commerce', desc: 'Conexión bidireccional automática con WooCommerce, Shopify y MercadoLibre.', icon: 'Globe' },
        { title: 'Optimización de Rendimiento en Servidor', desc: 'Despliegue sobre clústeres optimizados con PostgreSQL y Workers afinados.', icon: 'Server' }
      ],
      technicalSpecs: [
        { label: 'Versiones Soportadas', value: 'Odoo 16, 17 y 18 (Community / Enterprise)' },
        { label: 'Stack Técnico', value: 'Python, PostgreSQL, XML, JavaScript, Docker' },
        { label: 'Infraestructura', value: 'Despliegues en VPS propios o servidores dedicados' },
        { label: 'Copias de Seguridad', value: 'Backups automáticos en caliente a almacenamiento S3' }
      ],
      useCases: [
        'Empresas distribuidoras con bodegas y múltiples sucursales físicas.',
        'Fábricas y manufactureras que requieren órdenes de producción y costos.',
        'Compañías de servicios que gestionan cotizaciones, proyectos y soporte.'
      ],
      deliverables: [
        'Instancia de Odoo lista para producción con SSL y dominio propio',
        'Migración de clientes, proveedores, catálogo e históricos',
        'Módulos a la medida desarrollados y testeados',
        'Programa de capacitación por roles y manual de procedimientos'
      ]
    },
    'wordpress-plugins': {
      slug: 'wordpress-plugins',
      num: '09',
      name: 'Plugins WordPress',
      subtitle: 'Desarrollo a medida',
      tagline: 'Plugins, integraciones y extensiones a la medida construidas con código limpio, seguro y veloz.',
      overview: 'Creamos plugins profesionales y temas personalizados para WordPress y WooCommerce. Si los plugins del repositorio no cumplen tus expectativas o sobrecargan tu servidor, desarrollamos soluciones exactas siguiendo los estándares de código de WordPress (WPCS).',
      challengesSolved: [
        'Sitios lentos por exceso de plugins de terceros con dependencias pesadas.',
        'Vulnerabilidades de seguridad causadas por código desactualizado o sin soporte.',
        'Falta de integración con pasarelas de pago o APIs locales específicas.',
        'Conflictos entre extensiones tras actualizar versiones del core.'
      ],
      features: [
        { title: 'Plugins a Medida desde Cero', desc: 'Funcionalidades exactas sin sobrecoste de scripts o estilos innecesarios.', icon: 'TerminalSquare' },
        { title: 'Pasarelas de Pago Custom', desc: 'Integración nativa con pasarelas bancarias y billeteras digitales locales.', icon: 'Lock' },
        { title: 'Sincronización con ERP y CRM', desc: 'Ingesta de catálogos y órdenes entre WooCommerce y sistemas empresariales.', icon: 'Layers' },
        { title: 'Optimización Extrema de Velocidad', desc: 'Consultas SQL optimizadas, transient caching y carga condicional de assets.', icon: 'Zap' }
      ],
      technicalSpecs: [
        { label: 'Estándares', value: 'WordPress Coding Standards (PSR-12 / WPCS)' },
        { label: 'Compatibilidad', value: 'PHP 8.1 - 8.4, WooCommerce 8+, Block Editor (Gutenberg)' },
        { label: 'Seguridad', value: 'Nonces, Data Sanitization, Prepared SQL statements' },
        { label: 'Mantenibilidad', value: 'Código modular con Hooks, Filters y tests automatizados' }
      ],
      useCases: [
        'Tiendas WooCommerce con flujos de checkout, descuentos o envíos singulares.',
        'Portales corporativos que precisan tipos de contenido (CPT) y metaboxes avanzados.',
        'Empresas que desean paquetizar su solución como plugin para sus clientes.'
      ],
      deliverables: [
        'Paquete zip instalable del plugin con panel de configuración en WP-Admin',
        'Documentación completa de hooks y filtros para desarrolladores',
        'Garantía de compatibilidad con actualizaciones futuras',
        'Instalación y puesta a punto en el entorno del cliente'
      ]
    },
    'iot': {
      slug: 'iot',
      num: '10',
      name: 'IoT Internet de las Cosas',
      subtitle: 'Hardware y sensores',
      tagline: 'Integración de hardware, sensores inteligentes y firmware con plataformas cloud de visualización y control.',
      overview: 'Diseñamos soluciones completas de Internet de las Cosas (IoT). Desde la programación de microcontroladores (ESP32, STM32, Raspberry Pi) hasta la infraestructura en la nube para procesar millones de mensajes de telemetría y activar actuadores en tiempo real.',
      challengesSolved: [
        'Pérdida de datos en zonas con mala cobertura de red móvil o satelital.',
        'Consumo excesivo de batería en nodos de sensores de campo.',
        'Falta de control centralizado y gestión remota de flotas de dispositivos.',
        'Fallas de seguridad por falta de cifrado en las transmisiones de hardware.'
      ],
      features: [
        { title: 'Firmware Eficiente y Robusto', desc: 'Código en C/C++ y MicroPython optimizado para bajo consumo y auto-reinicio.', icon: 'Cpu' },
        { title: 'Broker MQTT de Alta Concurrencia', desc: 'Arquitectura escalable para recibir telemetría con autenticación por certificados.', icon: 'Server' },
        { title: 'Panel de Control de Dispositivos', desc: 'Monitoreo de estado en línea, nivel de batería, señal y comandos remotos.', icon: 'Activity' },
        { title: 'Actualizaciones OTA (Over-The-Air)', desc: 'Despliegue de nuevo firmware de forma inalámbrica a miles de dispositivos simultáneos.', icon: 'Zap' }
      ],
      technicalSpecs: [
        { label: 'Protocolos', value: 'MQTT / MQTTS, LoRaWAN, CoAP, HTTP REST, BLE' },
        { label: 'Hardware Compatible', value: 'ESP32, Arduino, Raspberry Pi, Quectel 4G/LTE, Modbus' },
        { label: 'Seguridad', value: 'TLS con certificados en hardware / Secure Boot' },
        { label: 'Dashboard', value: 'Visualización de series de tiempo con InfluxDB y Grafana' }
      ],
      useCases: [
        'Agricultura de precisión: humedad de suelo, temperatura ambiental y riego inteligente.',
        'Monitoreo de cadenas de frío y transporte refrigerado de alimentos y medicinas.',
        'Medición de variables en plantas industriales y control de motores a distancia.'
      ],
      deliverables: [
        'Firmware testeado y listo para flashear en los dispositivos',
        'Plataforma web de monitoreo y telegestión con mapas satelitales',
        'Servidor broker MQTT privado y securizado',
        'Esquemas de conexión de sensores y lista de componentes requeridos'
      ]
    },
    'medicine-prices': {
      slug: 'medicine-prices',
      num: '11',
      name: 'Precios Medicamentos',
      subtitle: 'Comparador farmacéutico',
      tagline: 'Motor de búsqueda, comparación y analítica de precios farmacéuticos en tiempo real entre cadenas.',
      overview: 'Plataforma para cotejar precios de medicamentos, principios activos y presentaciones comerciales entre múltiples cadenas farmacéuticas. Incluye rastreadores automáticos con machine learning para homologación de catálogos y cálculo de ahorro para el consumidor o aseguradoras.',
      challengesSolved: [
        'Dispersión y variabilidad extrema en precios de una farmacia a otra.',
        'Nombres comerciales diferentes para un mismo principio activo o molécula genérica.',
        'Catálogos cambiantes sin estandarización de códigos de barra o empaque.',
        'Dificultad de los pacientes para encontrar stock disponible cerca a su ubicación.'
      ],
      features: [
        { title: 'Homologación Inteligente de Fármacos', desc: 'Algoritmos de NLP que reconocen equivalentes genéricos y de marca.', icon: 'Cpu' },
        { title: 'Rastreo Automatizado de Precios', desc: 'Scrapers éticos y conectores API que monitorean cambios de precio diarios.', icon: 'Activity' },
        { title: 'Geolocalización de Farmacias', desc: 'Mapa con disponibilidad de inventario y ruta más cercana para comprar.', icon: 'Globe' },
        { title: 'Alertas de Descuento y Ahorro', desc: 'Notificaciones a usuarios cuando un medicamento crónico baje de precio.', icon: 'Sparkles' }
      ],
      technicalSpecs: [
        { label: 'Base de Datos', value: 'Clasificación ATC y catálogo oficial Invima / FDA' },
        { label: 'Frecuencia de Actualización', value: 'Monitoreo diario programado con validación de datos' },
        { label: 'Búsqueda', value: 'Elasticsearch / PostgreSQL FTS con tolerancia a errores tipográficos' },
        { label: 'Plataforma', value: 'Web responsiva ultra-veloz optimizada para móviles' }
      ],
      useCases: [
        'Pacientes que buscan optimizar su presupuesto en tratamientos periódicos.',
        'Empresas aseguradoras y EPS que auditan costos de dispensación de medicamentos.',
        'Cadenas de farmacias independientes para comparar precios con la competencia.'
      ],
      deliverables: [
        'Motor comparador web con buscador por principio activo o marca',
        'Pipeline automatizado de captura y normalización de precios',
        'Dashboard administrativo de tendencias de mercado farmacéutico',
        'API de integración de precios para apps móviles'
      ]
    },
    'openclaw': {
      slug: 'openclaw',
      num: '12',
      name: 'OpenClaw',
      subtitle: 'Control de hardware arcade',
      tagline: 'Sistema de telemetría, auditoría de fichas y control electrónico para máquinas arcade y garras de peluches.',
      overview: 'Software y controlador embebido para máquinas recreativas tipo garra (claw machines) y salones de juegos. Permite auditar ingresos en efectivo o pagos digitales, ajustar la fuerza electromagnética de la garra y prevenir fraudes en tiempo real desde el móvil.',
      challengesSolved: [
        'Fraude y robo hormiga por parte de operadores o visitantes inescrupulosos.',
        'Falta de control real sobre el número de partidas jugadas vs. dinero recaudado.',
        'Dificultad para calibrar la probabilidad de premios de forma remota y precisa.',
        'Paradas imprevistas por falta de premios en la tolva o fallos de motores.'
      ],
      features: [
        { title: 'Telemetría de Fichas y Pagos', desc: 'Conteo digital inviolable de monedas, billetes y transferencias QR.', icon: 'Activity' },
        { title: 'Calibración Remota de Fuerza', desc: 'Configuración milimétrica del voltaje del electroimán según probabilidad programada.', icon: 'Zap' },
        { title: 'Detección de Movimientos Bruscos', desc: 'Acelerómetro anti-balanceo y sensores de impacto que bloquean la máquina ante trampas.', icon: 'ShieldCheck' },
        { title: 'App de Gestión para Dueños de Salones', desc: 'Visualización de recaudación diaria por máquina, ciudad o centro comercial.', icon: 'Globe' }
      ],
      technicalSpecs: [
        { label: 'Conectividad', value: 'WiFi / 4G LTE con fallback local en memoria Flash' },
        { label: 'Compatibilidad', value: 'Placas PCB estándar de garras arcade chinas y taiwanesas' },
        { label: 'Sensores', value: 'Óptico de caída de premio, vibración de gabinete, contador de pulsos' },
        { label: 'Seguridad', value: 'Cifrado de comandos y firma de hardware para evitar bypass' }
      ],
      useCases: [
        'Operadores de salones de juegos arcade y parques de diversiones familiares.',
        'Centros comerciales y cines con máquinas de premios en pasillos.',
        'Fabricantes de máquinas recreativas que desean ofrecer modelos con gestión en la nube.'
      ],
      deliverables: [
        'Módulo controlador electrónico programado y listo para ensamblar',
        'Panel web y app móvil para monitoreo en vivo de ingresos',
        'Sistema de notificaciones automáticas ante fallas o tolva vacía',
        'Manual de instalación eléctrica y cableado paso a paso'
      ]
    },
    'barbershop-booking': {
      slug: 'barbershop-booking',
      num: '13',
      name: 'Reserva Barbería',
      subtitle: 'Sistema para peluquerías',
      tagline: 'Gestión moderna de citas, comisiones de barberos, inventario y fidelización de clientes.',
      overview: 'Sistema de agendamiento y punto de venta diseñado para barberías y salones de estética. Permite a los clientes reservar su barbero preferido en segundos, pagar por adelantado y recibir recordatorios automáticos, aumentando la ocupación y eliminando tiempos muertos.',
      challengesSolved: [
        'Clientes que no asisten a sus citas (no-shows) generando pérdidas de ingresos.',
        'Desorden en el cálculo de comisiones diarias y quincenales para cada profesional.',
        'Pérdida de tiempo respondiendo mensajes manuales en WhatsApp para agendar.',
        'Falta de registro histórico de servicios y preferencias de cada cliente.'
      ],
      features: [
        { title: 'Agendamiento Online 24/7', desc: 'Enlace personalizado para redes sociales donde los clientes eligen día, hora y barbero.', icon: 'Globe' },
        { title: 'Recordatorios por WhatsApp', desc: 'Envío de confirmación automática horas antes de la cita para garantizar asistencia.', icon: 'Sparkles' },
        { title: 'Cálculo Automático de Comisiones', desc: 'Reportes de caja detallados por barbero con deducción de productos e insumos.', icon: 'Layers' },
        { title: 'Punto de Venta e Inventario', desc: 'Control de ceras, geles, cuchillas y productos de cuidado personal vendidos.', icon: 'Check' }
      ],
      technicalSpecs: [
        { label: 'Dispositivos', value: 'Funciona en celular, tablet, laptop y datáfono Android' },
        { label: 'Pasarelas Integradas', value: 'Nequi, Daviplata, Wompi, Tarjeta y Efectivo' },
        { label: 'Velocidad', value: 'Reserva completa en solo 3 pasos para el cliente final' },
        { label: 'Acceso', value: 'Permisos diferenciados para administrador, cajero y barberos' }
      ],
      useCases: [
        'Barberías con 2 a 20 profesionales con pago por comisión.',
        'Salones de belleza, peluquerías unisex y estudios de uñas.',
        'Estudios de tatuajes y micropigmentación.'
      ],
      deliverables: [
        'Link de agendamiento con logo, fotos de cortes y catálogo de servicios',
        'Panel administrativo de caja, citas y control de asistencia',
        'Configuración de mensajes de WhatsApp automáticos',
        'Capacitación inicial al equipo de trabajo'
      ]
    },
    'facial-cleaning': {
      slug: 'facial-cleaning',
      num: '14',
      name: 'Limpieza Facial',
      subtitle: 'Sistema para spas y clínicas',
      tagline: 'Expediente estético, control de sesiones, aparatología y agenda para spas y cosmetología.',
      overview: 'Software para centros de estética facial y corporal, spas y clínicas dermatológicas. Administra expedientes estéticos digitales, consentimientos informados con firma táctil, registro fotográfico de antes/después y control de paquetes de sesiones.',
      challengesSolved: [
        'Riesgo legal por falta de consentimientos informados firmados adecuadamente.',
        'Dificultad para demostrar resultados visuales tangibles a los clientes entre sesiones.',
        'Descontrol en el seguimiento de paquetes de 5, 8 o 10 tratamientos pagados por adelantado.',
        'Mala gestión de mantenimiento y calibración de aparatología médica/estética.'
      ],
      features: [
        { title: 'Ficha Estética y Fotografía Evolutiva', desc: 'Carga de fotos de alta resolución para comparar evolución en pantalla dividida.', icon: 'Layers' },
        { title: 'Consentimiento Informado Digital', desc: 'Firma en tablet o celular con almacenamiento inalterable en la nube.', icon: 'ShieldCheck' },
        { title: 'Control de Paquetes de Sesiones', desc: 'Descuento automático de tratamientos consumidos con saldo pendiente claro.', icon: 'Check' },
        { title: 'Recordatorios Post-Tratamiento', desc: 'Mensajes con recomendaciones de fotoprotección e hidratación al salir de consulta.', icon: 'Sparkles' }
      ],
      technicalSpecs: [
        { label: 'Seguridad', value: 'Imágenes cifradas con permisos estrictos por profesional' },
        { label: 'Compatibilidad', value: 'iPad, tablets Android, computadores táctiles y web' },
        { label: 'Formatos', value: 'Exportación de historial médico estético en PDF firmado' },
        { label: 'Notificaciones', value: 'Integración directa con WhatsApp Cloud API' }
      ],
      useCases: [
        'Spas faciales y centros de cosmetología y estética integral.',
        'Clínicas de medicina estética y depilación láser.',
        'Consultorios de dermatología estética.'
      ],
      deliverables: [
        'Plataforma web con formularios estéticos adaptados a tus protocolos',
        'Módulo de firma de consentimientos informados',
        'Agenda de cabinas y asignación de aparatología especializada',
        'Soporte técnico continuo y copias de seguridad de expedientes'
      ]
    },
    'lms-moodle': {
      slug: 'lms-moodle',
      num: '15',
      name: 'Plataformas LMS y Moodle',
      subtitle: 'Cursos para escuelas y empresas',
      tagline: 'Aulas virtuales de alto rendimiento, diseño moderno y personalizado con Moodle y plataformas e-learning.',
      overview: 'Implementación, diseño y optimización de plataformas educativas virtuales (Moodle, Totara o desarrollos a medida). Despedimos las interfaces anticuadas y lentas creando una experiencia de aprendizaje moderna, atractiva para los alumnos y fácil de evaluar para los docentes.',
      challengesSolved: [
        'Moodle lento o caído durante entregas masivas de exámenes o cuestionarios.',
        'Interfaces grises y confusas que desmotivan a los estudiantes.',
        'Dificultad para certificar a los alumnos con diplomas automáticos verificables.',
        'Falta de integración con sistemas académicos institucionales o cobro de cursos.'
      ],
      features: [
        { title: 'Diseño UX/UI Moderno y Responsive', desc: 'Temas visuales limpios, tipo app móvil, con navegación intuitiva por módulos.', icon: 'Globe' },
        { title: 'Afinamiento de Servidor para Exámenes', desc: 'Optimización de base de datos y PHP-FPM para soportar miles de conexiones simultáneas.', icon: 'Server' },
        { title: 'Certificados Digitales con QR', desc: 'Generación automática de diplomas con código de verificación pública.', icon: 'ShieldCheck' },
        { title: 'Venta de Cursos Online', desc: 'Integración con pasarelas de pago para auto-matriculación inmediata del estudiante.', icon: 'Zap' }
      ],
      technicalSpecs: [
        { label: 'Versiones', value: 'Moodle 4.x optimizado con caché Redis y OPcache' },
        { label: 'Escalabilidad', value: 'Clústeres en la nube preparados para alta concurrencia' },
        { label: 'Compatibilidad', value: 'SCORM 1.2/2004, H5P interactivo, LTI 1.3' },
        { label: 'App Móvil', value: 'Personalización de la aplicación oficial Moodle con tu marca' }
      ],
      useCases: [
        'Colegios, universidades e institutos de educación superior.',
        'Empresas que capacitan a colaboradores e inducen personal remoto.',
        'Academias y creadores de contenido que monetizan cursos digitales.'
      ],
      deliverables: [
        'Plataforma LMS instalada en tu propio dominio con diseño corporativo',
        'Estructura de cursos modelo y banco de preguntas configurado',
        'Capacitación técnica para administradores y profesores',
        'Monitoreo de recursos del servidor durante épocas de parciales'
      ]
    },
    'laundry-rentals': {
      slug: 'laundry-rentals',
      num: '16',
      name: 'Alquiler Lavadoras',
      subtitle: 'Gestión de rentas',
      tagline: 'Control de máquinas en alquiler, rutas de entrega, cobro diario/semanal y mantenimiento preventivo.',
      overview: 'Software diseñado específicamente para empresas dedicadas a la renta de lavadoras a domicilio. Controla el inventario de maquinaria en calle, programa despachos y recogidas con geolocalización, registra cobros y anticipa reparaciones mecánicas.',
      challengesSolved: [
        'Pérdida de rastro de lavadoras en calle o confusión sobre quién tiene cada máquina.',
        'Cobros olvidados o dinero en efectivo extraviado durante la ruta de cobradores.',
        'Rutas de despacho ineficientes con alto gasto de combustible y tiempo.',
        'Falta de historial de mantenimientos que causa que las máquinas fallen en servicio.'
      ],
      features: [
        { title: 'Trazabilidad por Número de Serie/Placa', desc: 'Conoce en tiempo real en qué domicilio está cada máquina y desde qué fecha.', icon: 'Layers' },
        { title: 'Módulo de Cobranza Móvil', desc: 'Registro de abonos con recibo digital vía WhatsApp para el arrendatario.', icon: 'Check' },
        { title: 'Ruta Óptima de Entrega y Recogida', desc: 'Organización geográfica de servicios diarios para el personal de transporte.', icon: 'Globe' },
        { title: 'Bitácora de Reparaciones y Repuestos', desc: 'Historial de cambio de bandas, bombas, transmisiones y costos asociados.', icon: 'Activity' }
      ],
      technicalSpecs: [
        { label: 'Acceso', value: 'App web offline-first para choferes y cobradores en ruta' },
        { label: 'Control de Fraude', value: 'Georreferenciación de cada cobro y entrega registrada' },
        { label: 'Estados de Máquina', value: 'Disponible, Alquilada, En Taller, En Ruta, De Baja' },
        { label: 'Liquidación', value: 'Cierre de caja diario por vehículo de reparto' }
      ],
      useCases: [
        'Empresas urbanas de renta de lavadoras por horas, días o semanas.',
        'Negocios de alquiler de electrodomésticos y herramientas de construcción.',
        'Compañías de lavandería comunitaria y autoservicio.'
      ],
      deliverables: [
        'Sistema web accesible desde PC de oficina y teléfonos de repartidores',
        'Catálogo de lavadoras codificado con etiquetas QR para escaneo rápido',
        'Panel de estadísticas de rentabilidad por máquina y sector',
        'Capacitación operativa y soporte técnico'
      ]
    },
    'iaas-proxmox-zsvirt': {
      slug: 'iaas-proxmox-zsvirt',
      num: '17',
      name: 'Infraestructura IaaS',
      subtitle: 'Virtualización Proxmox & ZSVirt',
      tagline: 'Nube privada de alto rendimiento, hiperconvergencia y virtualización empresarial sin costos de licencias abusivos.',
      overview: 'Diseñamos, desplegamos y operamos nubes privadas empresariales utilizando Proxmox VE y clústeres hiperconvergentes con almacenamiento Ceph y ZFS (ZSVirt). Te permitimos tener tu propio AWS privado en tus servidores locales o en centros de datos dedicados con alta disponibilidad (HA).',
      challengesSolved: [
        'Facturas mensuales astronómicas en nubes públicas (AWS, GCP, Azure).',
        'Costos de licenciamiento prohibitivos tras los cambios comerciales en VMware.',
        'Pérdida de datos o tiempos de inactividad por fallos de hardware en un único servidor.',
        'Dificultad para aislar cargas de trabajo con redes definidas por software (SDN).'
      ],
      features: [
        { title: 'Clustering con Alta Disponibilidad (HA)', desc: 'Si un servidor físico falla, las máquinas virtuales se inician automáticamente en otro nodo.', icon: 'Server' },
        { title: 'Almacenamiento Distribuido Ceph / ZFS', desc: 'IOPS ultra-rápidos con redundancia completa sin necesidad de costosas cabinas SAN.', icon: 'Database' },
        { title: 'Redes Definidas por Software (SDN)', desc: 'VLANs, cortafuegos distribuidos y segmentación de red por departamentos o clientes.', icon: 'Lock' },
        { title: 'Copias de Seguridad con Proxmox Backup Server', desc: 'Backups incrementales deduplicados y cifrados con restauración instantánea.', icon: 'ShieldCheck' }
      ],
      technicalSpecs: [
        { label: 'Hipervisor', value: 'KVM / LXC containers sobre kernel Linux optimizado' },
        { label: 'Redundancia', value: 'Quorum Corosync, Redes duales de 10Gbps/25Gbps' },
        { label: 'Migración', value: 'Live migration sin pérdida de paquetes ni desconexión' },
        { label: 'Monitoreo', value: 'Métricas integradas con InfluxDB y paneles en Grafana' }
      ],
      useCases: [
        'Proveedores de hosting, ISPs y empresas de software como servicio (SaaS).',
        'Empresas que buscan salir de VMware para evitar renovaciones de licencias costosas.',
        'Bancos, entidades de salud e industrias que requieren soberanía total de datos on-premise.'
      ],
      deliverables: [
        'Clúster Proxmox VE configurado y afinado para máxima estabilidad',
        'Pool de almacenamiento ZFS / Ceph con políticas de snapshots',
        'Servidor de backups PBS programado con retención de datos',
        'Pruebas de conmutación por error (failover) en caliente certificadas'
      ]
    },
    'imei-aftersales-control': {
      slug: 'imei-aftersales-control',
      num: '18',
      name: 'Control IMEI & Posventa',
      subtitle: 'Trazabilidad, garantías y servicio técnico',
      tagline: 'Trazabilidad total de dispositivos móviles por IMEI, gestión de garantías, partes y órdenes de servicio.',
      overview: 'Plataforma especializada para importadores, distribuidores y talleres de servicio técnico de smartphones y dispositivos electrónicos. Lleva el control estricto de cada número IMEI desde su ingreso a aduana/bodega hasta su venta final, reclamos de garantía y estado de reparación.',
      challengesSolved: [
        'Venta de equipos duplicados o reclamos de garantía de aparatos no vendidos por la empresa.',
        'Pérdida de trazabilidad de repuestos costosos (pantallas, baterías, tarjetas lógicas).',
        'Clientes insatisfechos llamando constantemente para preguntar el estado de su reparación.',
        'Incumplimiento de requerimientos legales de registro y homologación ante entes reguladores.'
      ],
      features: [
        { title: 'Registro y Verificación Masiva de IMEIs', desc: 'Ingreso rápido con lectores de código de barras y validación de 15 dígitos con algoritmo Luhn.', icon: 'Check' },
        { title: 'Módulo de Órdenes de Servicio Técnico', desc: 'Fichas técnicas con diagnóstico, cotización de repuestos y aprobación del cliente.', icon: 'Layers' },
        { title: 'Portal de Consulta para el Cliente', desc: 'Seguimiento en línea con el número de orden o IMEI para ver avances y fotos.', icon: 'Globe' },
        { title: 'Gestión de Garantías y Proveedores', desc: 'Control de plazos de garantía del fabricante y cambios mano a mano de dispositivos.', icon: 'ShieldCheck' }
      ],
      technicalSpecs: [
        { label: 'Trazabilidad', value: 'Línea de tiempo cronológica completa por cada IMEI' },
        { label: 'Validación', value: 'Consulta con listas de homologación y bases de datos regulatorias' },
        { label: 'Notificaciones', value: 'Alertas automáticas vía WhatsApp cuando el equipo esté reparado' },
        { label: 'Impresión', value: 'Generación de etiquetas térmicas adhesivas con código de barras' }
      ],
      useCases: [
        'Mayoristas e importadores de teléfonos móviles nuevos y reacondicionados.',
        'Cadenas de talleres de servicio técnico y reparación de dispositivos electrónicos.',
        'Operadores móviles virtuales y retailers de tecnología de consumo.'
      ],
      deliverables: [
        'Sistema web completo multi-sucursal con permisos para técnicos y vendedores',
        'Diseño de etiquetas térmicas con códigos de barras para empaque y producto',
        'Portal web embebible para que los clientes consulten el estado de su equipo',
        'Capacitación al equipo y manual operativo'
      ]
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.currentSlug = slug;
      this.loadSolution(slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadSolution(slug: string) {
    this.solution = this.solutionsDatabase[slug] || null;

    // Obtener soluciones relacionadas excluyendo la actual
    const allSolutions = Object.values(this.solutionsDatabase);
    this.relatedSolutions = allSolutions
      .filter(s => s.slug !== slug)
      .slice(0, 3)
      .map(s => ({ name: s.name, subtitle: s.subtitle, slug: s.slug }));

    this.cdr.detectChanges();
  }

  sendWhatsAppLead() {
    const solName = this.solution ? this.solution.name : 'Solución';
    const text = `Hola Hamster Software, me interesa cotizar la solución *${solName}*.\n\n*Nombre:* ${this.contactForm.nombre || 'No especificado'}\n*Email:* ${this.contactForm.email || 'No especificado'}\n*Empresa:* ${this.contactForm.empresa || 'No especificado'}\n*Mensaje:* ${this.contactForm.mensaje || 'Quiero conocer más detalles y precios de implementación.'}`;
    const url = `https://wa.me/573025790274?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
