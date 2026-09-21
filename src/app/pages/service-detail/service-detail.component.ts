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
  ExternalLink,
  Bot,
  BrainCircuit,
  Boxes,
  Workflow,
  Monitor,
  BarChart,
  Smartphone,
  Cloud,
  Code
} from 'lucide-angular';

export interface ServiceDetail {
  slug: string;
  id: string;
  category: string;
  title: string;
  tagline: string;
  overview: string;
  valueProposition: string[];
  deliverables: string[];
  techStack: { name: string; icon: string; desc: string }[];
  methodology: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-service-detail',
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
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.scss'
})
export class ServiceDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);

  readonly icons = {
    ArrowLeft, ArrowRight, Check, ShieldCheck, Zap, Server, Database, Layers,
    Cpu, Globe, TerminalSquare, Sparkles, Activity, Lock, Phone, Mail, ExternalLink,
    Bot, BrainCircuit, Boxes, Workflow, Monitor, BarChart, Smartphone, Cloud, Code
  };

  currentSlug = '';
  service: ServiceDetail | null = null;
  relatedServices: { title: string; slug: string; category: string }[] = [];

  contactForm = {
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  };

  private servicesDatabase: Record<string, ServiceDetail> = {
    'data-engineering': {
      slug: 'data-engineering',
      id: '01',
      category: 'Datos, IA & Machine Learning',
      title: 'Ingeniería de Datos',
      tagline: 'Arquitectamos pipelines de datos escalables y data warehouses que son el cimiento de tus decisiones analíticas.',
      overview: 'Diseñamos e implementamos arquitecturas modernas de datos (Modern Data Stack) para unificar información dispersa de ERPs, CRMs, bases de datos transaccionales y APIs. Garantizamos datos limpios, gobernados y disponibles en tiempo real o micro-lotes.',
      valueProposition: [
        'Eliminación de silos de información en bases de datos aisladas.',
        'Reducción de latencia en la disponibilidad de datos de días a segundos.',
        'Data warehouses y Data Lakes optimizados en costo y velocidad de consulta.',
        'Gobernanza, linaje y cumplimiento estricto de estándares de calidad.'
      ],
      deliverables: [
        'Arquitectura de pipelines ELT/ETL implementada en Apache Spark / Airflow',
        'Data Warehouse estructurado en Snowflake, BigQuery, ClickHouse o PostgreSQL',
        'Modelos dimensionales Kimball (hechos y dimensiones) documentados',
        'Monitoreo automático de calidad de datos y alertas de anomalías'
      ],
      techStack: [
        { name: 'Apache Spark & Kafka', icon: 'Database', desc: 'Procesamiento distribuido masivo y streaming' },
        { name: 'dbt (data build tool)', icon: 'TerminalSquare', desc: 'Transformación y pruebas de calidad en el warehouse' },
        { name: 'ClickHouse / Snowflake', icon: 'Server', desc: 'Motores OLAP analíticos de altísima velocidad' },
        { name: 'Airflow / Dagster', icon: 'Workflow', desc: 'Orquestación y programación confiable de flujos' }
      ],
      methodology: [
        { step: '01', title: 'Auditoría de Fuentes', desc: 'Identificamos orígenes de datos, esquemas, volumetría y frecuencias requeridas.' },
        { step: '02', title: 'Diseño de Arquitectura', desc: 'Definimos el lago o almacén de datos óptimo con balance costo-beneficio.' },
        { step: '03', title: 'Construcción & Testing', desc: 'Desarrollamos pipelines resilientes con manejo de reintentos y deduplicación.' },
        { step: '04', title: 'Despliegue & Monitoreo', desc: 'Puesta en marcha con dashboards de salud de datos y alarmas preventivas.' }
      ],
      faqs: [
        { q: '¿Cuál es la diferencia entre ETL y ELT?', a: 'En ELT se extraen los datos y se cargan sin transformar en el Data Warehouse en bruto, permitiendo transformaciones ultrarrápidas con SQL moderno usando la potencia de cómputo del almacén.' },
        { q: '¿Pueden conectarse con nuestros sistemas legados?', a: 'Sí, contamos con conectores para bases de datos relacionales tradicionales, APIs obsoletas, archivos planos y webhooks.' }
      ]
    },
    'data-extraction-etl': {
      slug: 'data-extraction-etl',
      id: '02',
      category: 'Datos, IA & Machine Learning',
      title: 'Extracción de Datos / ETL',
      tagline: 'Extracción automatizada, limpieza profunda y normalización desde cualquier origen web, API o archivo.',
      overview: 'Transformamos datos desordenados y dispersos en conjuntos limpios y estructurados listos para BI o entrenamiento de IA. Implementamos scrapers éticos, ingesta masiva de APIs, parsing de PDFs/documentos no estructurados y sincronizaciones periódicas.',
      valueProposition: [
        'Automatización del 100% de la recolección manual de reportes externos.',
        'Extracción ética resiliente a bloqueos, captchas y cambios de estructura.',
        'Normalización tipológica, validación de esquemas y enriquecimiento de datos.',
        'Trazabilidad de cada registro ingestando metadatos de auditoría.'
      ],
      deliverables: [
        'Conectores y extractores autónomos programados en contenedores Docker',
        'Validadores automáticos de esquemas y reglas de negocio',
        'Bases de datos consolidadas con históricos limpios',
        'Reporte de salud y bitácora de ejecuciones continuas'
      ],
      techStack: [
        { name: 'Python & Scrapy', icon: 'Code', desc: 'Extracción masiva estructurada de alta eficiencia' },
        { name: 'Playwright / Puppeteer', icon: 'Globe', desc: 'Automatización de navegadores headless dinámicos' },
        { name: 'Pandas & Polars', icon: 'BarChart', desc: 'Transformación y vectorización de datos a ultra-velocidad' },
        { name: 'Docker & Celery', icon: 'Layers', desc: 'Colas de tareas distribuidas y auto-escalables' }
      ],
      methodology: [
        { step: '01', title: 'Mapeo de Orígenes', desc: 'Analizamos las APIs, formatos de archivos o páginas a extraer.' },
        { step: '02', title: 'Prototipo de Extractor', desc: 'Desarrollamos algoritmos de captura y normalización sintáctica.' },
        { step: '03', title: 'Automatización & Colas', desc: 'Aseguramos la ejecución desatendida mediante orquestadores en la nube.' },
        { step: '04', title: 'Control de Calidad', desc: 'Implementamos alertas ante cambios en la estructura de los orígenes.' }
      ],
      faqs: [
        { q: '¿Qué pasa si la página web externa cambia su diseño?', a: 'Nuestros extractores cuentan con selectores dinámicos y sistemas de alarma que notifican de inmediato para realizar ajustes sin pérdida de continuidad.' },
        { q: '¿Pueden extraer datos de PDFs escaneados?', a: 'Sí, combinamos motores OCR con modelos de lenguaje para extraer tablas y texto de documentos con alta precisión.' }
      ]
    },
    'data-visualization': {
      slug: 'data-visualization',
      id: '03',
      category: 'Datos, IA & Machine Learning',
      title: 'Visualización de Datos',
      tagline: 'Dashboards interactivos, interfaces visuales de KPIs y reportes ejecutivos que inspiran acción.',
      overview: 'Diseñamos paneles visuales que convierten métricas complejas en narrativas claras. Desde tableros ejecutivos en tiempo real hasta herramientas de visualización geoespacial e interactiva a medida construidas en web nativa o plataformas BI líderes.',
      valueProposition: [
        'Comprensión instantánea del estado de tu negocio en una sola pantalla.',
        'Filtros multidimensionales dinámicos por sedes, fechas, productos y clientes.',
        'Reducción drástica del tiempo dedicado a preparar presentaciones ejecutivas.',
        'Acceso seguro y adaptable tanto en laptops como en dispositivos móviles.'
      ],
      deliverables: [
        'Tablero de control interactivo responsive con diseño UI/UX premium',
        'Modelado de KPIs estratégicos y operacionales alineados a tus objetivos',
        'Componentes visuales customizados (gráficos de Sankey, mapas de calor, redes)',
        'Guía de interpretación y manual de usuario ejecutivo'
      ],
      techStack: [
        { name: 'Angular & D3.js', icon: 'Code', desc: 'Dashboards web interactivos a medida de alto rendimiento' },
        { name: 'Apache Superset', icon: 'BarChart', desc: 'Plataforma BI open-source empresarial sin costes de licencias' },
        { name: 'Power BI & Tableau', icon: 'Layers', desc: 'Integración experta en ecosistemas corporativos existentes' },
        { name: 'MapLibre / Leaflet', icon: 'Globe', desc: 'Visualización geoespacial y mapas de cobertura interactivos' }
      ],
      methodology: [
        { step: '01', title: 'Entrevistas con Stakeholders', desc: 'Comprendemos qué preguntas clave debe responder el tablero.' },
        { step: '02', title: 'Wireframing UI/UX', desc: 'Diseñamos la disposición de tarjetas y jerarquía visual de métricas.' },
        { step: '03', title: 'Conexión a Datos', desc: 'Optimizamos consultas SQL para garantizar cargas instantáneas sub-segundo.' },
        { step: '04', title: 'Capacitación & Despliegue', desc: 'Instalación y entrenamiento a los líderes de equipo.' }
      ],
      faqs: [
        { q: '¿Se puede integrar en nuestro portal web existente?', a: 'Absolutamente. Podemos construir componentes embebibles con autenticación SSO para tus propios clientes o colaboradores.' },
        { q: '¿Qué tan rápido cargan los dashboards?', a: 'Utilizamos capas de agregación y almacenamiento columnar para que incluso con millones de registros las consultas respondan en menos de 1 segundo.' }
      ]
    },
    'data-mining-management': {
      slug: 'data-mining-management',
      id: '04',
      category: 'Datos, IA & Machine Learning',
      title: 'Minería y Gestión de Datos',
      tagline: 'Descubrimiento de patrones ocultos, linaje de datos y gobierno empresarial de la información.',
      overview: 'Implementamos soluciones integrales de Master Data Management (MDM), linaje y catalogación de datos. Aplicamos algoritmos de clustering, reglas de asociación y detección de fraude para maximizar el valor patrimonial de los datos de tu organización.',
      valueProposition: [
        'Registro único de la verdad (Golden Record) para clientes y productos.',
        'Descubrimiento de relaciones no evidentes en carteras de compra.',
        'Prevención de duplicidades y degradación de bases de datos.',
        'Auditoría y trazabilidad exigidas por normativas de protección de datos.'
      ],
      deliverables: [
        'Catálogo de datos empresarial y diccionario de términos unificado',
        'Modelos de minería (segmentación RFM, análisis de canasta de mercado)',
        'Reglas automáticas de desduplicación y limpieza continua de registros',
        'Matriz de gobernanza con asignación de roles y custodios de datos'
      ],
      techStack: [
        { name: 'PostgreSQL & pgvector', icon: 'Database', desc: 'Base de datos de referencia con capacidades analíticas' },
        { name: 'Scikit-learn & Python', icon: 'BrainCircuit', desc: 'Algoritmos estadísticos de clustering y reducción dimensional' },
        { name: 'OpenMetadata / DataHub', icon: 'Layers', desc: 'Catalogación, linaje visual y gobernanza moderna' },
        { name: 'Apache Iceberg', icon: 'Server', desc: 'Formatos de tabla abierta para lagos de datos consistentes' }
      ],
      methodology: [
        { step: '01', title: 'Diagnóstico de Calidad', desc: 'Evaluamos niveles de completitud, unicidad y validez de los datos.' },
        { step: '02', title: 'Estandarización', desc: 'Creamos las reglas de negocio para reconciliar registros heterogéneos.' },
        { step: '03', title: 'Minería Analítica', desc: 'Ejecutamos modelos matemáticos para descubrir correlaciones de alto impacto.' },
        { step: '04', title: 'Institucionalización', desc: 'Implementamos el catálogo accesible para todas las áreas técnicas.' }
      ],
      faqs: [
        { q: '¿Qué es un Golden Record en gestión de datos?', a: 'Es una versión única, depurada y fidedigna de una entidad (por ejemplo un cliente) consolidando la información de todos los sistemas de la empresa.' },
        { q: '¿Cómo ayuda la minería a las ventas?', a: 'Identifica qué combinaciones de productos se compran conjuntamente y qué clientes tienen mayor propensión a comprar ofertas complementarias.' }
      ]
    },
    'desktop-software': {
      slug: 'desktop-software',
      id: '05',
      category: 'Desarrollo Web, Móvil & Sistemas',
      title: 'Software de Escritorio',
      tagline: 'Aplicaciones nativas y multiplataforma con alto rendimiento y total integración de hardware local.',
      overview: 'Desarrollamos aplicaciones de escritorio robustas para Windows, macOS y Linux. Perfectas para operaciones industriales, puntos de venta, software de control de periféricos (impresoras térmicas, balanzas, lectores de código de barra) y sistemas que requieren trabajar 100% sin internet.',
      valueProposition: [
        'Acceso directo a periféricos y puertos COM/USB sin restricciones de navegador.',
        'Funcionamiento local ultrarrápido sin depender de la velocidad de conexión.',
        'Cero consumo de memoria innecesario con tecnologías modernas como Tauri y C++.',
        'Actualizaciones transparentes y automáticas sin intervención del usuario.'
      ],
      deliverables: [
        'Instalador nativo firmado digitalmente (.exe, .dmg, .deb / AppImage)',
        'Base de datos embebida ultra-rápida (SQLite con WAL / DuckDB)',
        'Módulo de sincronización en segundo plano con servidores centrales',
        'Sistema de actualización automática OTA'
      ],
      techStack: [
        { name: 'Tauri & Rust', icon: 'Cpu', desc: 'Apps de escritorio seguras, ultraligeras y con consumo mínimo de RAM' },
        { name: 'Electron & Node.js', icon: 'Monitor', desc: 'Ecosistema multiplataforma con interfaces web modernas' },
        { name: 'C# / .NET & WPF', icon: 'TerminalSquare', desc: 'Integración profunda con entornos empresariales Windows' },
        { name: 'SQLite / DuckDB', icon: 'Database', desc: 'Bases de datos locales de alto rendimiento offline-first' }
      ],
      methodology: [
        { step: '01', title: 'Requisitos de Hardware', desc: 'Definimos los periféricos, sistemas operativos y recursos disponibles.' },
        { step: '02', title: 'Prototipo de Interfaz', desc: 'Diseñamos la ergonomía de pantalla para operarios o profesionales.' },
        { step: '03', title: 'Lógica Local & Drivers', desc: 'Programamos la comunicación con hardware y el motor offline.' },
        { step: '04', title: 'Empaquetado & QA', desc: 'Pruebas de estrés y creación de instaladores corporativos silenciosos.' }
      ],
      faqs: [
        { q: '¿Por qué elegir Tauri sobre Electron?', a: 'Tauri utiliza el motor web nativo del sistema operativo y Rust en el backend, logrando instaladores de menos de 10 MB y un uso de memoria hasta 10 veces menor.' },
        { q: '¿El software puede seguir operando si se corta internet?', a: 'Sí, todas nuestras soluciones de escritorio se diseñan con arquitectura offline-first, guardando transacciones localmente y sincronizándolas al volver la red.' }
      ]
    },
    'machine-learning': {
      slug: 'machine-learning',
      id: '06',
      category: 'Datos, IA & Machine Learning',
      title: 'Machine Learning',
      tagline: 'Modelos predictivos, clasificación inteligente y automatización cognitiva puestos en producción.',
      overview: 'Diseñamos, entrenamos y desplegamos modelos de Machine Learning que resuelven problemas concretos de tu negocio: predicción de demanda, detección de anomalías, recomendadores personalizados y visión computacional. Nos aseguramos de que los modelos operen de manera eficiente en entornos productivos reales.',
      valueProposition: [
        'Automatización de decisiones que antes tomaban horas a especialistas.',
        'Predicción de fluctuaciones de ventas y stock con precisión matemática.',
        'Pipelines MLOps que previenen la degradación del modelo con el tiempo.',
        'Explicabilidad (XAI) para entender el porqué de cada predicción.'
      ],
      deliverables: [
        'Modelo de Machine Learning entrenado, validado y optimizado',
        'API REST/gRPC de inferencia en tiempo real con baja latencia',
        'Pipeline automatizado de reentrenamiento con nuevos datos',
        'Dashboard de monitoreo de métricas de desempeño y drift'
      ],
      techStack: [
        { name: 'PyTorch & Scikit-learn', icon: 'BrainCircuit', desc: 'Frameworks de referencia para modelado y experimentación' },
        { name: 'FastAPI & ONNX Runtime', icon: 'Zap', desc: 'Inferencia ultra-rápida optimizada en CPU o GPU' },
        { name: 'MLflow', icon: 'Activity', desc: 'Seguimiento de experimentos, linaje y registro de modelos' },
        { name: 'Docker & Kubernetes', icon: 'Server', desc: 'Despliegue elástico de servicios de inferencia' }
      ],
      methodology: [
        { step: '01', title: 'Definición del Problema', desc: 'Alineamos el objetivo matemático con la métrica financiera o de negocio.' },
        { step: '02', title: 'Ingeniería de Características', desc: 'Limpiamos, seleccionamos y creamos variables explicativas de alto valor.' },
        { step: '03', title: 'Entrenamiento & Evaluación', desc: 'Comparamos algoritmos mediante validación cruzada y métricas rigurosas.' },
        { step: '04', title: 'Puesta en Producción', desc: 'Integramos la inferencia en tus sistemas con monitoreo 24/7.' }
      ],
      faqs: [
        { q: '¿Cuántos datos necesitamos para entrenar un modelo?', a: 'Depende del caso de uso. Para modelos tabulares unos pocos miles de registros estructurados pueden ser suficientes, mientras que para visión o lenguaje se pueden aprovechar modelos base preentrenados (Transfer Learning).' },
        { q: '¿Cómo sabemos si el modelo sigue funcionando bien con el tiempo?', a: 'Implementamos monitoreo continuo de Concept Drift y Data Drift para alertar cuando las condiciones del mercado cambien y sea momento de reentrenar.' }
      ]
    },
    'mobile-development': {
      slug: 'mobile-development',
      id: '07',
      category: 'Desarrollo Web, Móvil & Sistemas',
      title: 'Desarrollo Móvil',
      tagline: 'Apps móviles nativas y multiplataforma para iOS y Android con diseño fluido y experiencia de usuario estelar.',
      overview: 'Construimos aplicaciones móviles centradas en el usuario, optimizadas para el rendimiento y con animaciones de 60fps. Ya sea una app empresarial para trabajo de campo, una billetera digital o una red social para consumidores, cubrimos desde el diseño en Figma hasta la publicación en App Store y Google Play.',
      valueProposition: [
        'Código único para iOS y Android con Flutter y React Native reduciendo costos.',
        'Experiencia de usuario intuitiva que maximiza retención y valoraciones de 5 estrellas.',
        'Soporte completo para notificaciones push, biometría, cámara y GPS.',
        'Arquitectura robusta con sincronización offline transparente.'
      ],
      deliverables: [
        'Código fuente de la app en Flutter o React Native',
        'Compilaciones listas para producción (AAB para Google Play e IPA para App Store)',
        'Backend y APIs especializadas para consumo móvil',
        'Gestión y aprobación en las tiendas de aplicaciones'
      ],
      techStack: [
        { name: 'Flutter & Dart', icon: 'Smartphone', desc: 'Rendimiento nativo compilado con UI idéntica y hermosa en ambas plataformas' },
        { name: 'React Native', icon: 'Code', desc: 'Ecosistema maduro con componentes nativos de alto desempeño' },
        { name: 'Firebase & Cloud Messaging', icon: 'Zap', desc: 'Notificaciones push en tiempo real, analíticas y crashlytics' },
        { name: 'Swift & Kotlin', icon: 'Cpu', desc: 'Módulos nativos específicos para hardware o integraciones complejas' }
      ],
      methodology: [
        { step: '01', title: 'Diseño UX/UI en Figma', desc: 'Prototipos interactivos que pruebas en tu propio teléfono antes de programar.' },
        { step: '02', title: 'Desarrollo Front & APIs', desc: 'Construcción modular con arquitectura limpia y pruebas unitarias.' },
        { step: '03', title: 'Pruebas en Dispositivos Reales', desc: 'Testeo exhaustivo en múltiples tamaños de pantalla y versiones de SO.' },
        { step: '04', title: 'Publicación en Tiendas', desc: 'Acompañamiento completo hasta la aprobación en Google Play y App Store.' }
      ],
      faqs: [
        { q: '¿Cuánto tiempo tarda la publicación en las tiendas?', a: 'Google Play suele aprobar apps en 2 a 4 días hábiles, mientras que Apple tarda entre 24 y 48 horas tras la revisión técnica.' },
        { q: '¿Pueden actualizar el contenido sin volver a enviar a la tienda?', a: 'Sí, diseñamos backends dinámicos y podemos implementar soluciones de CodePush para actualizaciones instantáneas de lógica y estilos.' }
      ]
    },
    'on-demand-systems': {
      slug: 'on-demand-systems',
      id: '08',
      category: 'Desarrollo Web, Móvil & Sistemas',
      title: 'Sistemas Bajo Demanda',
      tagline: 'Desarrollo de software a medida para requerimientos únicos, MVPs rápidos y plataformas SaaS.',
      overview: 'Cuando el software comercial empaquetado no se adapta a la realidad de tu negocio, creamos plataformas hechas exactamente a la medida de tus procesos. Diseñamos con arquitectura limpia para que tu sistema escale a medida que tu empresa crece sin acumular deuda técnica.',
      valueProposition: [
        'Propiedad total del código fuente y sin pago recurrente de licencias por usuario.',
        'Flujos de trabajo 100% personalizados según las ventajas competitivas de tu negocio.',
        'Integración sin fisuras con cualquier software o pasarela que ya utilices.',
        'Arquitectura modular preparada para crecer en usuarios y transacciones.'
      ],
      deliverables: [
        'Plataforma web completa desarrollada con código limpio y testeado',
        'Panel de administración con roles, permisos y auditoría de acciones',
        'APIs documentadas con especificación OpenAPI / Swagger',
        'Despliegue automatizado en servidores del cliente'
      ],
      techStack: [
        { name: 'NestJS / Laravel / Go', icon: 'Server', desc: 'Backends sólidos, tipados y con excelente desempeño en concurrencia' },
        { name: 'Angular & TypeScript', icon: 'Globe', desc: 'Frontends empresariales con arquitectura reactiva y mantenible' },
        { name: 'PostgreSQL & Redis', icon: 'Database', desc: 'Bases de datos confiables y caché ultra-rápida' },
        { name: 'Docker & GitHub Actions', icon: 'TerminalSquare', desc: 'CI/CD automatizado para despliegues continuos sin caídas' }
      ],
      methodology: [
        { step: '01', title: 'Levantamiento de Requerimientos', desc: 'Analizamos tus objetivos y delimitamos el alcance funcional exacto.' },
        { step: '02', title: 'Diseño de Base de Datos y UI', desc: 'Modelamos las entidades y validamos las pantallas principales.' },
        { step: '03', title: 'Desarrollo en Sprints Ágiles', desc: 'Entregamos avances funcionales cada dos semanas para tu feedback directo.' },
        { step: '04', title: 'Capacitación y Garantía', desc: 'Entrenamiento a usuarios clave y período de garantía post-lanzamiento.' }
      ],
      faqs: [
        { q: '¿El software será propiedad de nuestra empresa?', a: 'Sí, absolutamente. El 100% del código fuente, diseños y propiedad intelectual se transfieren a tu empresa.' },
        { q: '¿Ofrecen soporte y mantenimiento una vez entregado?', a: 'Sí, ofrecemos planes de soporte continuo con SLA garantizado, actualizaciones de seguridad y evolución de funcionalidades.' }
      ]
    },
    'web-development': {
      slug: 'web-development',
      id: '09',
      category: 'Desarrollo Web, Móvil & Sistemas',
      title: 'Desarrollo Web',
      tagline: 'Sitios web corporativos, aplicaciones web progresivas y portales de alta conversión y velocidad.',
      overview: 'Creamos portales web que no solo lucen impecables, sino que cargan en menos de un segundo, posicionan orgánicamente en Google y convierten visitantes en clientes. Cumplimos los más estrictos estándares de accesibilidad, SEO técnico y Core Web Vitals.',
      valueProposition: [
        'Velocidad de carga instantánea con puntuaciones de 90+ en Google PageSpeed.',
        'Diseño responsive adaptado a cualquier resolución de pantalla.',
        'Estructura optimizada para motores de búsqueda (SEO) y marcado Schema.',
        'Seguridad reforzada contra ataques comunes (XSS, CSRF, Inyecciones).'
      ],
      deliverables: [
        'Sitio o plataforma web interactiva y totalmente responsive',
        'Optimización técnica de SEO y metadatos sociales (Open Graph)',
        'Formularios conectados a CRM, correo y WhatsApp con protección antispam',
        'Configuración de dominio, certificados SSL y CDN'
      ],
      techStack: [
        { name: 'Angular & React', icon: 'Code', desc: 'Frameworks líderes para aplicaciones interactivas de una sola página' },
        { name: 'Tailwind CSS & SCSS', icon: 'Sparkles', desc: 'Estilos modernos, limpios y con mínima huella de peso' },
        { name: 'Node.js & PHP', icon: 'Server', desc: 'Lógica de servidor eficiente para procesamiento de formularios y APIs' },
        { name: 'Cloudflare CDN', icon: 'Cloud', desc: 'Distribución global de contenidos con protección DDoS incluida' }
      ],
      methodology: [
        { step: '01', title: 'Estrategia & Contenido', desc: 'Estructuramos la arquitectura de información y llamadas a la acción.' },
        { step: '02', title: 'Diseño Visual', desc: 'Creamos maquetas atractivas fieles a la identidad corporativa de la marca.' },
        { step: '03', title: 'Desarrollo & Optimización', desc: 'Programamos con código semántico y optimizamos peso de imágenes y fuentes.' },
        { step: '04', title: 'Pruebas Cross-Browser', desc: 'Verificamos compatibilidad en Chrome, Safari, Firefox y dispositivos móviles.' }
      ],
      faqs: [
        { q: '¿Podremos editar los textos nosotros mismos?', a: 'Sí, podemos integrar gestores de contenido sencillos o formularios administrativos para que actualices información sin tocar código.' },
        { q: '¿El sitio web estará optimizado para Google?', a: 'Sí, aplicamos buenas prácticas de SEO on-page: etiquetas canónicas, jerarquía de títulos H1-H6, sitemap XML y datos estructurados JSON-LD.' }
      ]
    },
    'small-language-models': {
      slug: 'small-language-models',
      id: '10',
      category: 'Datos, IA & Machine Learning',
      title: 'Modelos de Lenguaje Pequeño (SLMs)',
      tagline: 'IA generativa compacta, económica y privada que corre en tus propios servidores locales sin costos por token.',
      overview: 'Implementamos modelos de lenguaje pequeños y eficientes (SLMs) como Phi-3, Gemma, LLaMA 3 8B y Qwen adaptados a tareas específicas de tu organización. Ofrecen alta precisión con una fracción del costo computacional de los grandes modelos comerciales, garantizando que tus datos nunca salgan de tu red.',
      valueProposition: [
        'Privacidad y soberanía total: ningún dato viaja a APIs de terceros.',
        'Costos fijos y predecibles: sin pagar millones en facturas de consumo por tokens.',
        'Latencia ultra-baja en inferencia local adecuada para sistemas en tiempo real.',
        'Especialización de vocabulario técnico, legal o médico propio de tu rubro.'
      ],
      deliverables: [
        'Modelo SLM fine-tuneado y cuantizado listo para inferencia local',
        'Servidor de inferencia optimizado con vLLM o Ollama con API OpenAI-compatible',
        'Integración con bases de datos internas mediante RAG local',
        'Documentación de benchmarks y comparativa de precisión'
      ],
      techStack: [
        { name: 'Ollama & vLLM', icon: 'Cpu', desc: 'Motores de inferencia de alto rendimiento con batching continuo' },
        { name: 'Hugging Face & LoRA', icon: 'BrainCircuit', desc: 'Técnicas de adaptación de bajo rango (PEFT) para ajuste fino rápido' },
        { name: 'GGUF / AWQ Quantization', icon: 'Zap', desc: 'Reducción de tamaño a 4 u 8 bits sin pérdida perceptible de calidad' },
        { name: 'Docker / Proxmox', icon: 'Server', desc: 'Contenedores aislados en hardware local o VPS con GPU' }
      ],
      methodology: [
        { step: '01', title: 'Curaduría de Dataset', desc: 'Recopilamos y limpiamos las consultas y respuestas modelo de tu empresa.' },
        { step: '02', title: 'Selección de Arquitectura', desc: 'Elegimos el modelo base idóneo según la memoria VRAM y tareas requeridas.' },
        { step: '03', title: 'Fine-Tuning & Cuantización', desc: 'Entrenamos adaptadores LoRA y cuantizamos para máxima velocidad.' },
        { step: '04', title: 'Evaluación Rigurosa', desc: 'Validamos respuestas contra alucinaciones y medimos el tiempo de respuesta.' }
      ],
      faqs: [
        { q: '¿Qué hardware se necesita para correr un modelo SLM?', a: 'Un modelo de 7B o 8B parámetros cuantizado a 4 bits corre perfectamente en una sola GPU de 8GB a 16GB de VRAM (como RTX 3060/4060) o incluso en CPU modernas con buen rendimiento.' },
        { q: '¿Puede responder preguntas sobre los manuales de mi empresa?', a: 'Sí, combinamos el SLM con un motor RAG local para que cite extractos exactos de tus PDFs y documentos internos.' }
      ]
    },
    'vector-databases': {
      slug: 'vector-databases',
      id: '11',
      category: 'Datos, IA & Machine Learning',
      title: 'Bases de Datos Vectoriales',
      tagline: 'Almacenamiento de embeddings, búsqueda semántica y recuperación aumentada (RAG) a gran escala.',
      overview: 'Configuramos y optimizamos bases de datos vectoriales para potenciar motores de búsqueda inteligente, sistemas de recomendación y arquitecturas RAG. Permiten buscar por significado e intención en lugar de simples coincidencias exactas de palabras clave.',
      valueProposition: [
        'Búsqueda semántica capaz de entender sinónimos, contexto y conceptos complejos.',
        'Recuperación de contexto para LLMs en menos de 10 milisegundos.',
        'Soporte multimodal: búsqueda cruzada entre texto, imágenes y audio.',
        'Escalabilidad para indexar millones de vectores con alta densidad.'
      ],
      deliverables: [
        'Instancia de base de datos vectorial configurada y optimizada',
        'Pipeline automatizado de chunking, generación de embeddings e indexación',
        'Consultas híbridas configuradas (Búsqueda vectorial + Filtros relacionales)',
        'Endpoints de búsqueda de alta disponibilidad para tus aplicaciones'
      ],
      techStack: [
        { name: 'Qdrant / Milvus', icon: 'Database', desc: 'Bases de datos vectoriales nativas para producción a gran escala' },
        { name: 'pgvector (PostgreSQL)', icon: 'Server', desc: 'Extensión vectorial integrada directamente en tu base de datos SQL' },
        { name: 'FastEmbed / SentenceTransformers', icon: 'Cpu', desc: 'Generación de embeddings locales ultrarrápidos' },
        { name: 'LangChain & LlamaIndex', icon: 'Workflow', desc: 'Orquestación de flujos de recuperación y generación' }
      ],
      methodology: [
        { step: '01', title: 'Estrategia de Fragmentación', desc: 'Definimos el tamaño óptimo de fragmentos (chunks) de texto y solapamiento.' },
        { step: '02', title: 'Elección del Modelo de Embeddings', desc: 'Seleccionamos el codificador con mejor rendimiento en tu idioma y dominio.' },
        { step: '03', title: 'Indexación HNSW', desc: 'Construimos grafos de búsqueda aproximada para consultas en tiempo real.' },
        { step: '04', title: 'Tuning de Precisión', desc: 'Ajustamos técnicas de re-ranking (Cross-Encoders) para mayor exactitud.' }
      ],
      faqs: [
        { q: '¿Cuándo conviene usar pgvector vs una base vectorial dedicada como Qdrant?', a: 'pgvector es ideal si ya utilizas PostgreSQL y tienes menos de un millón de vectores, ya que unifica todo en una sola base de datos. Para decenas de millones de vectores o búsquedas muy intensivas, Qdrant o Milvus ofrecen mayor throughput.' },
        { q: '¿Qué es una búsqueda híbrida?', a: 'Combina la búsqueda por palabras clave clásica (BM25) con la similitud vectorial de significado, ofreciendo lo mejor de ambos mundos.' }
      ]
    },
    'chatbots': {
      slug: 'chatbots',
      id: '12',
      category: 'Datos, IA & Machine Learning',
      title: 'Chatbots y Asistentes Virtuales',
      tagline: 'Agentes conversacionales impulsados por IA generativa, integrados a WhatsApp, web y tus sistemas internos.',
      overview: 'Diseñamos chatbots inteligentes que van mucho más allá de los árboles de decisión rígidos tradicionales. Nuestros asistentes comprenden preguntas complejas, consultan tu inventario o bases de datos en tiempo real, agendan citas y derivan a asesores humanos cuando es necesario.',
      valueProposition: [
        'Atención continua 24/7 sin tiempos de espera para tus clientes.',
        'Respuestas precisas basadas exclusivamente en la información oficial de tu empresa.',
        'Integración oficial con la API de WhatsApp Business sin riesgo de bloqueos.',
        'Reducción de hasta un 70% en la carga de trabajo de tu equipo de soporte.'
      ],
      deliverables: [
        'Asistente virtual conversacional entrenado con tus documentos y políticas',
        'Conexión oficial con WhatsApp Cloud API, chat web y redes sociales',
        'Panel de administración con historial de conversaciones y toma de control manual',
        'Analítica de temas más consultados, satisfacción y resolución de casos'
      ],
      techStack: [
        { name: 'WhatsApp Cloud API', icon: 'MessageSquare', desc: 'Canal oficial de mensajería para empresas con alta fiabilidad' },
        { name: 'LangChain & LangGraph', icon: 'Workflow', desc: 'Control de estados, flujos lógicos y llamadas a herramientas (Tool Calling)' },
        { name: 'OpenAI / Claude / SLMs locales', icon: 'Bot', desc: 'Modelos de lenguaje de última generación para respuestas naturales' },
        { name: 'Node.js & PostgreSQL', icon: 'Server', desc: 'Backend de orquestación, gestión de sesiones y almacenamiento de chats' }
      ],
      methodology: [
        { step: '01', title: 'Ingesta de Conocimiento', desc: 'Recopilamos preguntas frecuentes, manuales de producto y políticas comerciales.' },
        { step: '02', title: 'Definición del Tono y Reglas', desc: 'Configuramos la personalidad del agente y las salvaguardas para evitar desvíos.' },
        { step: '03', title: 'Conexión con APIs Internas', desc: 'Conectamos el bot con tu base de datos para consultar precios, stock o turnos.' },
        { step: '04', title: 'Pruebas Piloto y Salida a Vivo', desc: 'Testeo con usuarios reales y ajustes de precisión antes del lanzamiento.' }
      ],
      faqs: [
        { q: '¿Qué pasa si el chatbot no sabe responder una pregunta?', a: 'El asistente reconoce de forma transparente sus límites y transfiere la conversación automáticamente a un agente humano en el panel con todo el contexto previo.' },
        { q: '¿El chatbot puede procesar pagos o generar pedidos?', a: 'Sí, podemos integrar links de pago de pasarelas locales o registrar la orden directamente en tu ERP o CRM.' }
      ]
    },
    'neural-networks': {
      slug: 'neural-networks',
      id: '13',
      category: 'Datos, IA & Machine Learning',
      title: 'Redes Neuronales y Deep Learning',
      tagline: 'Arquitecturas neuronales profundas para visión artificial, reconocimiento de patrones y señales complejas.',
      overview: 'Diseñamos y entrenamos redes neuronales profundas personalizadas para resolver tareas de alta complejidad perceptiva: clasificación de imágenes médicas o industriales, segmentación semántica, detección de defectos en líneas de manufactura y análisis de señales temporales.',
      valueProposition: [
        'Superación de la precisión humana en inspecciones visuales repetitivas.',
        'Procesamiento en tiempo real sobre hardware embebido (NVIDIA Jetson, Edge AI).',
        'Aprovechamiento de datos no estructurados (imágenes, video, audio, telemetría).',
        'Modelos adaptados a las condiciones reales de iluminación y ruido de tu operación.'
      ],
      deliverables: [
        'Pesos del modelo entrenado y cuantizado con benchmarks de exactitud',
        'Pipeline de preprocesamiento y aumentación de imágenes/datos',
        'Módulo de inferencia en tiempo real para cámaras o servidores',
        'Herramienta de etiquetado y dataset versionado'
      ],
      techStack: [
        { name: 'PyTorch & torchvision', icon: 'BrainCircuit', desc: 'Entrenamiento flexible de arquitecturas neuronales modernas' },
        { name: 'OpenCV & YOLO', icon: 'Activity', desc: 'Detección de objetos y visión por computadora en tiempo real' },
        { name: 'TensorRT & ONNX', icon: 'Cpu', desc: 'Aceleración extrema sobre tarjetas gráficas NVIDIA' },
        { name: 'Weights & Biases', icon: 'BarChart', desc: 'Monitoreo de curvas de pérdida, precisión y gradientes' }
      ],
      methodology: [
        { step: '01', title: 'Adquisición y Curaduría', desc: 'Capturamos y etiquetamos datos representativos de los casos reales.' },
        { step: '02', title: 'Arquitectura y Transfer Learning', desc: 'Seleccionamos backbones probados para acelerar la convergencia.' },
        { step: '03', title: 'Entrenamiento & Hyper-parameter Tuning', desc: 'Ajustamos hiperparámetros para evitar sobreajuste (overfitting).' },
        { step: '04', title: 'Exportación a Edge / Producción', desc: 'Compilamos a TensorRT para lograr más de 30 FPS en inferencia.' }
      ],
      faqs: [
        { q: '¿Qué es Edge AI?', a: 'Consiste en ejecutar la red neuronal directamente en un dispositivo local físico (como una cámara o microcomputador) sin enviar el video a la nube, garantizando cero latencia y privacidad.' },
        { q: '¿Cómo manejamos la falta de imágenes con defectos raros?', a: 'Utilizamos técnicas de aumentación sintética y modelos generativos para crear ejemplos adicionales y balancear el dataset.' }
      ]
    },
    'advanced-analytics': {
      slug: 'advanced-analytics',
      id: '14',
      category: 'Datos, IA & Machine Learning',
      title: 'Analítica Avanzada de Negocios',
      tagline: 'Modelado estadístico, análisis predictivo de cohortes y optimización de rentabilidad por cliente.',
      overview: 'Vamos más allá de los reportes descriptivos de "qué pasó" para responder "por qué pasó" y "qué pasará si tomamos esta decisión". Aplicamos modelado causal, econometría y analítica predictiva para optimizar precios, predecir el valor de vida del cliente (LTV) y reducir la rotación (churn).',
      valueProposition: [
        'Anticipación al abandono de clientes con suficiente tiempo para activar retención.',
        'Optimización del presupuesto de marketing con modelos de atribución multitoque.',
        'Identificación de los factores causales reales que impulsan la rentabilidad.',
        'Escenarios de simulación (What-If) para evaluar decisiones estratégicas.'
      ],
      deliverables: [
        'Modelos de predicción de Churn y Propensión de compra en producción',
        'Análisis de cohortes de clientes con métricas de LTV y retención histórica',
        'Tablero de simulación interactivo para evaluación de escenarios de precios',
        'Informe ejecutivo con recomendaciones estratégicas prioritarias'
      ],
      techStack: [
        { name: 'Python & Statsmodels', icon: 'BarChart', desc: 'Inferencia causal, series de tiempo y regresiones avanzadas' },
        { name: 'DuckDB & SQL', icon: 'Database', desc: 'Análisis analítico ultra-rápido en memoria' },
        { name: 'Streamlit & Plotly', icon: 'Layers', desc: 'Aplicaciones interactivas de simulación para directivos' },
        { name: 'XGBoost & LightGBM', icon: 'BrainCircuit', desc: 'Algoritmos de Gradient Boosting líderes en datos tabulares' }
      ],
      methodology: [
        { step: '01', title: 'Definición de Hipótesis', desc: 'Identificamos las preguntas clave de rentabilidad con la dirección.' },
        { step: '02', title: 'Unificación de Tablas de Hechos', desc: 'Consolidamos transacciones, interacciones y costos asociados.' },
        { step: '03', title: 'Modelado Causal y Predictivo', desc: 'Aislamos variables de confusión para medir impactos reales.' },
        { step: '04', title: 'Entrega de Simuladores', desc: 'Construimos herramientas visuales donde variar palancas y ver resultados.' }
      ],
      faqs: [
        { q: '¿En qué se diferencia de la reportería tradicional?', a: 'La reportería tradicional mira el retrovisor informando lo que ya ocurrió. La analítica avanzada utiliza estadística e IA para proyectar el futuro y prescribir qué acciones tomar para maximizar resultados.' },
        { q: '¿Qué es el modelo de Churn?', a: 'Es un algoritmo que calcula una probabilidad del 0% al 100% de que cada cliente deje de comprar en los próximos 30 o 60 días, permitiendo a tu equipo contactarlo preventivamente.' }
      ]
    },
    'asset-management': {
      slug: 'asset-management',
      id: '15',
      category: 'Automatización & TI Empresarial',
      title: 'Gestión de Activos de TI',
      tagline: 'Inventario inteligente, control del ciclo de vida, licencias y garantías de infraestructura tecnológica.',
      overview: 'Implementamos plataformas centralizadas para inventariar, rastrear y gestionar todo el parque informático de tu empresa: computadores, servidores, licencias de software, contratos de soporte y asignación a empleados. Evita pérdidas, optimiza renovaciones y cumple auditorías.',
      valueProposition: [
        'Conocimiento exacto de dónde está cada equipo y quién es el responsable.',
        'Ahorro significativo evitando pagar licencias de software que nadie utiliza.',
        'Prevención de fallas con alertas automáticas de fin de garantía o soporte.',
        'Cumplimiento sin fricción en auditorías contables y de seguridad de la información.'
      ],
      deliverables: [
        'Plataforma web de gestión de activos de TI (ITAM) desplegada y configurada',
        'Agentes de descubrimiento automático de hardware y software en red',
        'Sistema de etiquetado con códigos QR para auditorías con celular',
        'Capacitación al equipo de soporte y plantillas de actas de entrega/devolución'
      ],
      techStack: [
        { name: 'Snipe-IT / GLPI', icon: 'Boxes', desc: 'Plataformas de referencia mundial para gestión de activos de código abierto' },
        { name: 'PowerShell & Bash', icon: 'TerminalSquare', desc: 'Scripts de telemetría e inventario automatizado en segundo plano' },
        { name: 'PostgreSQL', icon: 'Database', desc: 'Base de datos relacional segura para trazabilidad histórica de activos' },
        { name: 'Docker', icon: 'Server', desc: 'Aislamiento y portabilidad en el despliegue de la solución' }
      ],
      methodology: [
        { step: '01', title: 'Censo Inicial', desc: 'Exportamos o importamos los inventarios existentes en planillas o carpetas.' },
        { step: '02', title: 'Despliegue del Sistema', desc: 'Configuramos categorías, modelos, ubicaciones y centros de costo.' },
        { step: '03', title: 'Agentes de Auto-Descubrimiento', desc: 'Instalamos herramientas para auditar especificaciones de hardware sin molestar usuarios.' },
        { step: '04', title: 'Etiquetado y Rutinas', desc: 'Establecemos el flujo de entrega de equipos a nuevos colaboradores.' }
      ],
      faqs: [
        { q: '¿El sistema detecta qué software tiene instalado cada usuario?', a: 'Sí, los agentes de auditoría reportan las aplicaciones instaladas para detectar licencias vencidas o software no autorizado.' },
        { q: '¿Permite generar actas de entrega firmadas?', a: 'Sí, el sistema genera documentos digitales en PDF con la firma del empleado al momento de entregarle un portátil o celular corporativo.' }
      ]
    },
    'enterprise-automation': {
      slug: 'enterprise-automation',
      id: '16',
      category: 'Automatización & TI Empresarial',
      title: 'Automatización Empresarial (RPA)',
      tagline: 'Robots de software que ejecutan tareas administrativas repetitivas sin errores y las 24 horas del día.',
      overview: 'Liberamos a tu equipo del trabajo mecánico aburrido. Implementamos automatizaciones de procesos robóticos (RPA) para procesar facturas, conciliar cuentas bancarias, descargar reportes de portales gubernamentales o sincronizar información entre sistemas que no tienen API.',
      valueProposition: [
        'Ahorro de cientos de horas hombre mensuales en tareas de ingreso de datos.',
        'Tasa de error del 0% en digitación de transacciones y conciliaciones.',
        'Operación ininterrumpida 24/7/365 procesando colas de trabajo durante la noche.',
        'Retorno de inversión (ROI) medible en los primeros 60 a 90 días.'
      ],
      deliverables: [
        'Bots RPA programados y probados en tus procesos específicos',
        'Orquestador de tareas con programación horaria y manejo de excepciones',
        'Panel de control con métricas de tiempo ahorrado y operaciones realizadas',
        'Manual de procedimientos y plan de soporte para contingencias'
      ],
      techStack: [
        { name: 'Python & Robot Framework', icon: 'Cpu', desc: 'Automatización moderna basada en código sin costos por licencia de bot' },
        { name: 'Playwright & Selenium', icon: 'Globe', desc: 'Interacción autónoma con sistemas web y portales bancarios' },
        { name: 'OCR & Document AI', icon: 'Sparkles', desc: 'Lectura inteligente de facturas, recibos y PDFs escaneados' },
        { name: 'RabbitMQ / Redis', icon: 'Layers', desc: 'Gestión confiable de colas de documentos pendientes por procesar' }
      ],
      methodology: [
        { step: '01', title: 'Mapeo del Proceso (PDD)', desc: 'Documentamos paso a paso clics, reglas de negocio y excepciones.' },
        { step: '02', title: 'Desarrollo del Robot', desc: 'Codificamos el flujo con validaciones y captura de pantalla ante anomalías.' },
        { step: '03', title: 'Pruebas en Paralelo', desc: 'Ejecutamos el bot en paralelo al trabajo humano para certificar paridad 100%.' },
        { step: '04', title: 'Pase a Producción', desc: 'El bot asume la tarea de forma autónoma con envío de reportes a supervisores.' }
      ],
      faqs: [
        { q: '¿Qué pasa si un portal cambia un botón de lugar?', a: 'Nuestros bots utilizan selectores semánticos resilientes y envían una alerta inmediata con captura de pantalla si detectan una interfaz desconocida.' },
        { q: '¿Se requiere pagar licencias costosas como UiPath o Automation Anywhere?', a: 'No. Desarrollamos soluciones basadas en frameworks modernos de código abierto que eliminan por completo el pago de miles de dólares en licencias por cada bot.' }
      ]
    },
    'business-operations': {
      slug: 'business-operations',
      id: '17',
      category: 'Automatización & TI Empresarial',
      title: 'Operaciones de Negocios (BPM)',
      tagline: 'Digitalización y optimización de flujos de trabajo (BPMN), aprobaciones y control de SLA operativo.',
      overview: 'Diseñamos y digitalizamos los procesos operativos de tu empresa con motores de flujos de trabajo (BPM). Reemplaza cadenas caóticas de correos electrónicos y mensajes de WhatsApp por solicitudes trazables con aprobaciones secuenciales, tiempos límite (SLAs) e indicadores claros.',
      valueProposition: [
        'Visibilidad total de en qué escritorio o etapa está detenido cada trámite.',
        'Cumplimiento estricto de tiempos de respuesta con escalamiento automático.',
        'Estandarización de procedimientos para mantener la calidad ante rotación de personal.',
        'Reducción drástica del uso de papel y carpetas físicas en la oficina.'
      ],
      deliverables: [
        'Motor de flujos BPM desplegado e integrado con tu directorio de usuarios',
        'Formularios dinámicos de solicitud con validaciones y adjuntos',
        'Matriz de aprobaciones por montos, departamentos o niveles jerárquicos',
        'Dashboard de tiempos de ciclo y cuellos de botella para la gerencia'
      ],
      techStack: [
        { name: 'Camunda / Flowable BPMN', icon: 'Workflow', desc: 'Motores estándar de clase mundial para orquestación de procesos' },
        { name: 'Angular Web Portal', icon: 'Globe', desc: 'Bandeja de entrada unificada intuitiva para colaboradores y aprobadores' },
        { name: 'PostgreSQL', icon: 'Database', desc: 'Auditoría inalterable de cada firma, aprobación o rechazo' },
        { name: 'Email & WhatsApp Notifications', icon: 'Zap', desc: 'Alertas automáticas cuando se requiere la firma de un directivo' }
      ],
      methodology: [
        { step: '01', title: 'Modelado As-Is / To-Be', desc: 'Mapeamos cómo se hace el proceso hoy y cómo debe optimizarse.' },
        { step: '02', title: 'Diseño de Formularios', desc: 'Creamos las pantallas sencillas donde los usuarios llenan los datos.' },
        { step: '03', title: 'Programación de Reglas', desc: 'Configuramos las condiciones de derivación y tiempos máximos de espera.' },
        { step: '04', title: 'Lanzamiento Progresivo', desc: 'Activamos departamento por departamento con acompañamiento presencial/virtual.' }
      ],
      faqs: [
        { q: '¿Qué tipo de procesos se pueden automatizar?', a: 'Solicitudes de compras, reembolsos de caja menor, vacaciones, altas de empleados, aprobaciones de créditos o solicitudes de cotizaciones especiales.' },
        { q: '¿Los aprobadores pueden responder desde el celular?', a: 'Sí, el portal es totalmente responsive y podemos configurar botones de aprobación directa desde un enlace seguro en el correo o WhatsApp.' }
      ]
    },
    'cloud-computing': {
      slug: 'cloud-computing',
      id: '18',
      category: 'Cloud, Servidores & DevOps',
      title: 'Nube y Arquitectura Cloud',
      tagline: 'Arquitecturas en la nube escalables, seguras y con costos controlados en AWS, GCP, Azure y Cloudflare.',
      overview: 'Diseñamos, migramos y optimizamos infraestructuras cloud nativas e híbridas. Ayudamos a tu empresa a aprovechar la elasticidad de la nube sin sorpresas en la factura mensual aplicando principios de FinOps, arquitecturas serverless o microservicios y alta disponibilidad (99.99%).',
      valueProposition: [
        'Reducción de costos de facturación cloud de hasta un 40% mediante optimización FinOps.',
        'Tolerancia a fallos con redundancia multi-zona y conmutación automática.',
        'Migración segura sin tiempo de inactividad para tus clientes actuales.',
        'Seguridad perimetral y cumplimiento de estándares internacionales.'
      ],
      deliverables: [
        'Arquitectura cloud documentada en diagramas de infraestructura',
        'Plantillas de Infraestructura como Código (Terraform / CloudFormation)',
        'Políticas de seguridad IAM de mínimo privilegio y auditoría',
        'Plan de copias de seguridad cruzadas y Disaster Recovery probado'
      ],
      techStack: [
        { name: 'Amazon Web Services (AWS)', icon: 'Cloud', desc: 'EC2, ECS, Lambda, RDS, S3 y CloudFront optimizados' },
        { name: 'Google Cloud Platform (GCP)', icon: 'Globe', desc: 'Cloud Run, BigQuery y Kubernetes Engine' },
        { name: 'Cloudflare', icon: 'ShieldCheck', desc: 'WAF, CDN global, DDoS mitigation y Workers serverless en el edge' },
        { name: 'Terraform', icon: 'TerminalSquare', desc: 'Gestión de infraestructura declarativa y reproducible' }
      ],
      methodology: [
        { step: '01', title: 'Auditoría de Arquitectura y Costos', desc: 'Identificamos recursos subutilizados, sobredimensionados o inseguros.' },
        { step: '02', title: 'Diseño de la Nueva Topología', desc: 'Diseñamos la red (VPC), zonas de disponibilidad y mecanismos de auto-escalado.' },
        { step: '03', title: 'Migración en Fases', desc: 'Migramos datos y servicios con ventanas de mantenimiento mínimas o nulas.' },
        { step: '04', title: 'Establecimiento de Alertas', desc: 'Configuramos presupuestos máximos y monitoreo de seguridad continuo.' }
      ],
      faqs: [
        { q: '¿Cómo nos ayudan a reducir la factura de la nube?', a: 'Revisamos instancias sobredimensionadas, aplicamos reservas e instancias spot, configuramos políticas de ciclo de vida en almacenamiento y limpiamos recursos huérfanos.' },
        { q: '¿Qué es una estrategia multicloud o híbrida?', a: 'Permite combinar lo mejor de un centro de datos propio (menor costo base) con la nube pública (para picos de demanda o respaldos geográficos).' }
      ]
    },
    'servers-computing': {
      slug: 'servers-computing',
      id: '19',
      category: 'Cloud, Servidores & DevOps',
      title: 'Computación y Servidores',
      tagline: 'Aprovisionamiento, administración, virtualización y hardening de servidores Linux y bare-metal.',
      overview: 'Administración profesional de servidores físicos y máquinas virtuales. Realizamos virtualización empresarial (Proxmox VE, KVM), hardening de seguridad, optimización de sistemas operativos Linux/Windows y almacenamiento de alta velocidad (ZFS / Ceph) con monitoreo preventivo 24/7.',
      valueProposition: [
        'Estabilidad ininterrumpida de tus servicios críticos empresariales.',
        'Blindaje de seguridad frente a escaneos y ataques de fuerza bruta.',
        'Aprovechamiento máximo del hardware físico mediante virtualización eficiente.',
        'Respuestas inmediatas ante problemas de disco, memoria o CPU.'
      ],
      deliverables: [
        'Servidores configurados, securizados y con políticas de actualización',
        'Clúster de virtualización Proxmox / KVM con almacenamiento compartido',
        'Agentes de monitoreo 24/7 con alertas a Telegram o correo',
        'Plan y automatización de respaldos periódicos inmutables'
      ],
      techStack: [
        { name: 'Linux (Debian, Ubuntu, AlmaLinux)', icon: 'Server', desc: 'Sistemas operativos estables y optimizados para servidores' },
        { name: 'Proxmox VE & KVM', icon: 'Cpu', desc: 'Virtualización de código abierto sin licencias abusivas por núcleo' },
        { name: 'ZFS & Ceph Storage', icon: 'Database', desc: 'Sistemas de archivos con auto-reparación y snapshots en caliente' },
        { name: 'Ansible', icon: 'TerminalSquare', desc: 'Automatización de configuración y parches masivos de seguridad' }
      ],
      methodology: [
        { step: '01', title: 'Dimensionamiento de Hardware', desc: 'Calculamos núcleos, RAM y almacenamiento con factor de redundancia.' },
        { step: '02', title: 'Instalación y Hardening', desc: 'Cierre de puertos, configuración de SSH con llaves, firewalls e iptables.' },
        { step: '03', title: 'Configuración de Storage', desc: 'Configuramos arreglos RAID o ZFS con protección ante fallos de disco.' },
        { step: '04', title: 'Pruebas de Carga y Monitoreo', desc: 'Validamos el comportamiento ante picos de uso y configuramos alarmas.' }
      ],
      faqs: [
        { q: '¿Dan soporte a servidores locales on-premise en nuestras oficinas?', a: 'Sí, podemos gestionar servidores locales mediante VPNs seguras y configurar arquitecturas de alta disponibilidad entre tus oficinas y la nube.' },
        { q: '¿Qué incluye el hardening de seguridad?', a: 'Desactivación de servicios innecesarios, cambio de puertos padrão, fail2ban contra fuerza bruta, cifrado de volúmenes, políticas de contraseñas y auditoría SELinux/AppArmor.' }
      ]
    },
    'devops': {
      slug: 'devops',
      id: '20',
      category: 'Cloud, Servidores & DevOps',
      title: 'DevOps y CI/CD',
      tagline: 'Pipelines automatizados de entrega continua, contenedores Docker y orquestación para lanzar software sin fricción.',
      overview: 'Aceleramos la entrega de valor de tu equipo de desarrollo. Diseñamos pipelines de Integración y Despliegue Continuo (CI/CD) para que pasar de una línea de código a producción tome minutos en lugar de semanas, con cero tiempo de inactividad (Zero-Downtime Deployments).',
      valueProposition: [
        'Despliegues rápidos, seguros y completamente automatizados en un solo clic.',
        'Eliminación de los errores humanos al subir cambios manualmente por FTP o SSH.',
        'Reversión instantánea (Rollback) a la versión anterior si ocurre un imprevisto.',
        'Entornos de desarrollo, pruebas (staging) y producción idénticos mediante contenedores.'
      ],
      deliverables: [
        'Pipelines de CI/CD en GitHub Actions o GitLab CI completamente configurados',
        'Contenedores Docker optimizados con compilaciones multietapa ultra-ligeras',
        'Estrategia de despliegues sin caídas (Blue/Green o Rolling updates)',
        'Stack de observabilidad centralizada con logs y métricas de errores'
      ],
      techStack: [
        { name: 'GitHub Actions & GitLab CI', icon: 'TerminalSquare', desc: 'Automatización de pruebas, construcción y despliegue continuo' },
        { name: 'Docker & Docker Compose', icon: 'Layers', desc: 'Empaquetado de aplicaciones y dependencias en contenedores portables' },
        { name: 'Kubernetes & K3s', icon: 'Server', desc: 'Orquestación elástica de microservicios con auto-escalado' },
        { name: 'Prometheus & Grafana', icon: 'Activity', desc: 'Monitoreo de métricas en tiempo real y alertas de latencia' }
      ],
      methodology: [
        { step: '01', title: 'Evaluación del Flujo Actual', desc: 'Analizamos cómo compila, prueba y despliega el equipo hoy en día.' },
        { step: '02', title: 'Contenedorización', desc: 'Escribimos Dockerfiles optimizados para cada microservicio o aplicación.' },
        { step: '03', title: 'Construcción del Pipeline CI/CD', desc: 'Automatizamos pruebas unitarias, análisis estático (SAST) y compilación.' },
        { step: '04', title: 'Capacitación del Equipo', desc: 'Entrenamos a los desarrolladores en buenas prácticas de GitFlow o Trunk-based.' }
      ],
      faqs: [
        { q: '¿Qué pasa si un despliegue falla en producción?', a: 'Nuestros pipelines implementan verificaciones automáticas de salud (Health Checks). Si la nueva versión no responde exitosamente, el tráfico nunca se conmuta y se ejecuta un rollback inmediato.' },
        { q: '¿Se pueden ejecutar pruebas automatizadas antes de desplegar?', a: 'Sí, el pipeline bloquea cualquier despliegue si alguna prueba unitaria o de integración falla, impidiendo que lleguen errores a los usuarios.' }
      ]
    },
    'it-automation': {
      slug: 'it-automation',
      id: '21',
      category: 'Automatización & TI Empresarial',
      title: 'Automatización de TI',
      tagline: 'Scripts de mantenimiento desatendido, auto-remediación y gestión masiva de sistemas.',
      overview: 'Reducimos los tickets de soporte técnico repetitivos mediante la automatización de la infraestructura. Desarrollamos scripts y políticas de auto-remediación para que los servicios caídos se reinicien solos, los discos se limpien antes de llenarse y los parches de seguridad se apliquen ordenadamente.',
      valueProposition: [
        'Auto-reparación de incidentes comunes sin necesidad de despertar al personal de guardia.',
        'Mantenimiento preventivo programado que evita caídas imprevistas.',
        'Aprovisionamiento automático de nuevos computadores o servidores en minutos.',
        'Estandarización de configuraciones eliminando desvíos manuales.'
      ],
      deliverables: [
        'Scripts de auto-remediación y tareas programadas documentadas',
        'Repositorio centralizado de automatización con Ansible o PowerShell',
        'Políticas de rotación y depuración automática de logs y archivos temporales',
        'Tablero de alertas con confirmación de tareas ejecutadas con éxito'
      ],
      techStack: [
        { name: 'Ansible', icon: 'TerminalSquare', desc: 'Automatización sin agentes para gestión de configuraciones masivas' },
        { name: 'Bash & Python', icon: 'Code', desc: 'Scripts robustos para administración avanzada de Linux' },
        { name: 'PowerShell', icon: 'Monitor', desc: 'Automatización integral de entornos corporativos Windows y Active Directory' },
        { name: 'Cron & Systemd Timers', icon: 'Activity', desc: 'Programación precisa de tareas en segundo plano' }
      ],
      methodology: [
        { step: '01', title: 'Análisis de Incidencias Frecuentes', desc: 'Revisamos qué tareas consumen más tiempo de soporte al mes.' },
        { step: '02', title: 'Diseño de la Lógica de Auto-Sanación', desc: 'Programamos las condiciones de detección y las acciones de remediación.' },
        { step: '03', title: 'Pruebas en Entorno de Simulación', desc: 'Provocamos fallas deliberadas para verificar que el script las solucione.' },
        { step: '04', title: 'Despliegue Centralizado', desc: 'Activamos la automatización y configuramos reportes de auditoría.' }
      ],
      faqs: [
        { q: '¿Qué es la auto-remediación?', a: 'Es la capacidad de un sistema para detectar por sí mismo una condición anómala (como un servicio web que no responde) y ejecutar automáticamente la acción correctiva (reiniciar el servicio o limpiar memoria) en segundos.' },
        { q: '¿Queda registro de lo que el script hizo?', a: 'Sí, todas las acciones se registran con sello de tiempo, resultado y notificación directa al canal de operaciones de la empresa.' }
      ]
    },
    'middleware': {
      slug: 'middleware',
      id: '22',
      category: 'Automatización & TI Empresarial',
      title: 'Middleware e Integración de Sistemas',
      tagline: 'Conectores, buses de eventos y APIs unificadas para sincronizar sistemas heterogéneos sin fricción.',
      overview: 'Diseñamos la capa invisible que hace que todos los programas de tu empresa hablen el mismo idioma. Conectamos ERPs, CRMs, pasarelas de pago, sistemas heredados y plataformas SaaS mediante APIs modernas y buses de mensajería asíncronos garantizando que ninguna orden o dato se pierda.',
      valueProposition: [
        'Comunicación bidireccional en tiempo real entre sistemas incompatibles.',
        'Garantía de entrega de mensajes mediante colas con reintentos y tolerancia a caídas.',
        'Protección de sistemas legados lentos ante avalanchas de peticiones.',
        'Visibilidad y trazabilidad completa de cada mensaje o transacción en tránsito.'
      ],
      deliverables: [
        'Capa de middleware y bus de integración implementado y documentado',
        'Conectores y transformadores de datos entre formatos (JSON, XML, EDI, CSV)',
        'Endpoints unificados protegidos con autenticación por tokens y rate-limiting',
        'Consola de monitoreo de transacciones con búsqueda por identificador de negocio'
      ],
      techStack: [
        { name: 'RabbitMQ & Kafka', icon: 'Layers', desc: 'Buses de mensajería y streaming de eventos de alta confiabilidad' },
        { name: 'NestJS / Go', icon: 'Server', desc: 'Microservicios de integración ultrarrápidos con bajo consumo de recursos' },
        { name: 'GraphQL & REST', icon: 'Globe', desc: 'Interfaces unificadas para consultar múltiples sistemas legados' },
        { name: 'Redis', icon: 'Zap', desc: 'Gestión de idempotencia, caché y deduplicación de eventos en tránsito' }
      ],
      methodology: [
        { step: '01', title: 'Levantamiento de Interfaces', desc: 'Analizamos las APIs, bases de datos y formatos de los sistemas a integrar.' },
        { step: '02', title: 'Diseño del Modelo Canónico', desc: 'Estandarizamos cómo debe lucir un "Cliente" o una "Venta" para toda la empresa.' },
        { step: '03', title: 'Construcción de Adaptadores', desc: 'Programamos los conectores con colas de reintentos y dead-letter queues.' },
        { step: '04', title: 'Pruebas de Estrés y Transacciones', desc: 'Simulamos cortes de red para certificar que ningún mensaje se pierda.' }
      ],
      faqs: [
        { q: '¿Qué pasa si uno de los sistemas se cae mientras se envía una venta?', a: 'El bus de eventos almacena el mensaje de forma persistente y realiza reintentos exponenciales automáticos hasta que el sistema destino se recupere, sin perder datos.' },
        { q: '¿Qué significa idempotencia en integraciones?', a: 'Significa que aunque un mensaje se envíe dos veces por un error de red, el sistema destino solo procesará la transacción una única vez, evitando cobros dobles o duplicidades.' }
      ]
    }
  };

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug') || '';
      this.currentSlug = slug;
      this.loadService(slug);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  loadService(slug: string) {
    this.service = this.servicesDatabase[slug] || null;

    const all = Object.values(this.servicesDatabase);
    this.relatedServices = all
      .filter(s => s.slug !== slug && (this.service ? s.category === this.service.category : true))
      .slice(0, 3)
      .map(s => ({ title: s.title, slug: s.slug, category: s.category }));

    if (this.relatedServices.length < 3) {
      const others = all
        .filter(s => s.slug !== slug && !this.relatedServices.some(r => r.slug === s.slug))
        .slice(0, 3 - this.relatedServices.length)
        .map(s => ({ title: s.title, slug: s.slug, category: s.category }));
      this.relatedServices.push(...others);
    }

    this.cdr.detectChanges();
  }

  sendWhatsAppLead() {
    const servName = this.service ? this.service.title : 'Servicio';
    const text = `Hola Hamster Software, me interesa cotizar el servicio *${servName}*.\n\n*Nombre:* ${this.contactForm.nombre || 'No especificado'}\n*Email:* ${this.contactForm.email || 'No especificado'}\n*Empresa:* ${this.contactForm.empresa || 'No especificado'}\n*Mensaje:* ${this.contactForm.mensaje || 'Quiero conocer más detalles sobre el alcance y cotización.'}`;
    const url = `https://wa.me/573025790274?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
