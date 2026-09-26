// ============================================================
// SERVICIOS — 22 servicios agrupados en 5 categorías.
// Cada servicio conserva su número original (01–22).
// ============================================================

export const serviceCategories = [
  {
    id: 'datos-ia',
    name: 'Datos e Inteligencia Artificial',
    description:
      'Desde pipelines de datos hasta modelos predictivos: la columna vertebral analítica de tu empresa.',
    icon: 'chart',
    services: [
      {
        num: '01',
        name: 'Ingeniería de Datos',
        description:
          'Arquitectamos e implementamos pipelines de datos robustos y escalables que son la columna vertebral de tu estrategia de datos.',
        bullets: [
          'Diseño e implementación de pipelines de datos',
          'Procesamiento en tiempo real y por lotes',
          'Migración a data warehouse en la nube',
          'Integración con Apache Spark y Kafka',
          'Marcos de calidad y gobernanza de datos',
        ],
      },
      {
        num: '02',
        name: 'Extracción de Datos / ETL',
        description:
          'Extraemos datos de cualquier fuente y los transformamos en formatos limpios y estructurados listos para análisis.',
        bullets: [
          'Integración de datos multi-fuente',
          'Ingestión de APIs y webhooks',
          'Migración de sistemas heredados',
          'Estrategias incrementales y de carga completa',
          'Programación y monitoreo automatizado',
        ],
      },
      {
        num: '03',
        name: 'Visualización de Datos',
        description:
          'Transformamos datos complejos en visuales claros y convincentes que empoderan decisiones rápidas basadas en evidencia.',
        bullets: [
          'Dashboards interactivos (Tableau, Power BI, D3.js)',
          'Sistemas de reportes ejecutivos',
          'Monitoreo de KPIs en tiempo real',
          'Componentes de gráficos personalizados',
          'Visualización geoespacial y de redes',
        ],
      },
      {
        num: '04',
        name: 'Minería y Gestión de Datos',
        description:
          'Descubrimos insights ocultos en tus datos con soluciones de minería y gestión que te dan visibilidad y control total.',
        bullets: [
          'Detección de patrones y anomalías',
          'Segmentación y clustering de clientes',
          'Minería de reglas de asociación',
          'Gestión de datos maestros (MDM)',
          'Catálogo de datos y seguimiento de linaje',
        ],
      },
      {
        num: '06',
        name: 'Machine Learning',
        description:
          'Desplegamos sistemas inteligentes de ML que automatizan decisiones complejas — desde pronósticos hasta procesamiento de documentos.',
        bullets: [
          'Analítica predictiva y pronósticos',
          'Modelos de NLP y visión por computadora',
          'Fine-tuning de LLMs y pipelines RAG',
          'MLOps y gestión del ciclo de vida de modelos',
          'Frameworks de A/B testing y experimentación',
        ],
      },
      {
        num: '13',
        name: 'Redes Neuronales y Deep Learning',
        description:
          'Diseñamos, entrenamos y desplegamos arquitecturas de redes neuronales profundas para visión artificial, NLP, clasificación y detección de anomalías.',
        bullets: [
          'Arquitecturas CNN, RNN, Transformers y Autoencoders',
          'Visión por computadora (detección de objetos, segmentación y OCR)',
          'Modelos de series temporales y procesamiento de señales',
          'Optimización y cuantización para inferencia en tiempo real',
          'Pipelines de entrenamiento distribuido en GPU / TPU',
        ],
      },
      {
        num: '14',
        name: 'Analítica Avanzada de Negocios',
        description:
          'Modelado estadístico, análisis de cohortes, modelos de propensión y analítica prescriptiva para acelerar la toma de decisiones empresariales.',
        bullets: [
          'Modelado predictivo de ventas, abandono (churn) y demanda',
          'Segmentación comportamental y análisis de Lifetime Value (LTV)',
          'Cuadros de mando ejecutivos y tableros interactivos',
          'Detección de patrones de compra y recomendaciones',
          'Análisis de atribución de marketing y optimización de CAC',
        ],
      },
    ],
  },
  {
    id: 'ia-generativa',
    name: 'IA Generativa y Asistentes',
    description:
      'Modelos de lenguaje y agentes conversacionales que trabajan para tu negocio, con privacidad total.',
    icon: 'sparkles',
    services: [
      {
        num: '10',
        name: 'Modelos de Lenguaje Pequeño (SLMs)',
        description:
          'Desplegamos modelos de IA compactos, rápidos y eficientes para ejecutarse en tus propios servidores o en local con total privacidad de datos.',
        bullets: [
          'Modelos compactos de alta precisión (Phi-3, Gemma, LLaMA 3 8B, Qwen)',
          'Despliegue local y on-premise con 100% de privacidad',
          'Fine-tuning especializado para tu negocio y terminología',
          'Inferencia ultra-rápida y optimización con cuantización (GGUF, AWQ)',
          'Integración RAG local (Retrieval-Augmented Generation) sin costos por token',
        ],
      },
      {
        num: '11',
        name: 'Bases de Datos Vectoriales',
        description:
          'Implementamos y optimizamos bases de datos vectoriales para búsqueda semántica, sistemas de recomendación y pipelines RAG de alta escala.',
        bullets: [
          'Índices de similitud vectorial (HNSW, IVF-PQ, ScaNN)',
          'Embeddings de alta dimensionalidad para texto, imágenes y audio',
          'Integración con frameworks de IA (LangChain, LlamaIndex, Haystack)',
          'Escalabilidad horizontal y baja latencia en consultas (sub-10ms)',
          'Almacenamiento híbrido: vectorial + metadatos relacionales',
        ],
      },
      {
        num: '12',
        name: 'Chatbots y Asistentes Virtuales',
        description:
          'Desarrollamos chatbots inteligentes y agentes conversacionales multicanal con IA generativa, integrados a tus bases de datos y WhatsApp.',
        bullets: [
          'Agentes conversacionales con memoria y contexto de cliente',
          'Integración con WhatsApp Business API, Web, Telegram y CRM',
          'RAG conectado a inventario, catálogos y políticas internas',
          'Derivación inteligente a agentes humanos ante casos complejos',
          'Analítica de conversaciones, sentimiento y tasas de resolución',
        ],
      },
    ],
  },
  {
    id: 'web-movil',
    name: 'Web, Móvil y Escritorio',
    description:
      'Aplicaciones pulidas y de alto rendimiento para cada plataforma donde están tus usuarios.',
    icon: 'globe',
    services: [
      {
        num: '09',
        name: 'Desarrollo Web',
        description:
          'Diseñamos experiencias web de alto rendimiento — desde landing pages hasta plataformas empresariales complejas.',
        bullets: [
          'Frontends con React, Next.js y Vue.js',
          'Backends con Laravel, Node.js y Django',
          'Plataformas de e-commerce y marketplaces',
          'Optimización de rendimiento (Core Web Vitals)',
          'Integraciones con CMS headless y APIs',
        ],
      },
      {
        num: '07',
        name: 'Desarrollo Móvil',
        description:
          'Creamos aplicaciones móviles pulidas y de alto rendimiento para iOS y Android que los usuarios usan cada día.',
        bullets: [
          'iOS (Swift / SwiftUI) y Android (Kotlin)',
          'Multiplataforma con React Native y Flutter',
          'PWAs con capacidad offline',
          'Notificaciones push y compras in-app',
          'Optimización para App Store y Play Store',
        ],
      },
      {
        num: '05',
        name: 'Software de Escritorio',
        description:
          'Construimos aplicaciones de escritorio nativas con el rendimiento y la seguridad de nivel empresarial.',
        bullets: [
          'Aplicaciones para Windows, macOS y Linux',
          'Apps multiplataforma con Electron y Tauri',
          'Integraciones con ERP y CRM',
          'Arquitectura offline-first',
          'Sistemas de actualización y despliegue automático',
        ],
      },
    ],
  },
  {
    id: 'cloud-ops',
    name: 'Cloud y Operaciones TI',
    description:
      'Infraestructura confiable, automatizada y observable para lanzar y operar sin fricción.',
    icon: 'server',
    services: [
      {
        num: '18',
        name: 'Nube y Arquitectura Cloud',
        description:
          'Migración, diseño y optimización de arquitecturas en la nube (AWS, GCP, Azure, Cloudflare) con alta disponibilidad y costos controlados.',
        bullets: [
          'Arquitecturas serverless y basadas en microservicios',
          'Migración segura de infraestructura on-premise a la nube',
          'Optimización de costos cloud (FinOps) y reducción de facturación',
          'Redundancia multi-zona y alta disponibilidad (99.99%)',
          'Estrategias de respaldo automatizado y Disaster Recovery',
        ],
      },
      {
        num: '19',
        name: 'Computación y Servidores',
        description:
          'Configuración, administración y virtualización de servidores Linux/Windows, bare metal, clústeres y almacenamiento de alto rendimiento.',
        bullets: [
          'Aprovisionamiento de servidores dedicados y VPS (Linux / Windows)',
          'Virtualización con Proxmox, VMware y KVM',
          'Hardening de seguridad de sistemas operativos y firewalls',
          'Configuración de almacenamiento en red (NAS/SAN, ZFS, Ceph)',
          'Monitoreo 24/7 de CPU, memoria, disco y red con alertas',
        ],
      },
      {
        num: '20',
        name: 'DevOps y CI/CD',
        description:
          'Pipelines de integración y despliegue continuo (CI/CD), infraestructura como código (IaC) y observabilidad para lanzar software más rápido y sin errores.',
        bullets: [
          'Pipelines automatizados de CI/CD (GitHub Actions, GitLab CI)',
          'Infraestructura como código con Terraform y Ansible',
          'Orquestación de contenedores con Kubernetes y Docker Swarm',
          'Estrategias de despliegue sin tiempo de inactividad (Blue-Green / Canary)',
          'Monitoreo de logs y métricas centralizadas (Prometheus, Grafana, ELK)',
        ],
      },
      {
        num: '21',
        name: 'Automatización de TI',
        description:
          'Scripts, herramientas de auto-remediación y gestión centralizada para automatizar la administración de sistemas y soporte técnico.',
        bullets: [
          'Aprovisionamiento desatendido de estaciones de trabajo y servidores',
          'Scripts de mantenimiento preventivo y limpieza automatizada',
          'Auto-reparación de servicios caídos y alertas en tiempo real',
          'Gestión masiva de parches de seguridad y actualizaciones',
          'Backups programados y pruebas automáticas de restauración',
        ],
      },
      {
        num: '22',
        name: 'Middleware e Integración de Sistemas',
        description:
          'Conectores, buses de eventos y capas de integración para comunicar sistemas heterogéneos, ERPs, APIs y bases de datos sin fricción.',
        bullets: [
          'Arquitecturas dirigidas por eventos (Event-Driven) con Kafka y RabbitMQ',
          'APIs REST y GraphQL unificadas sobre sistemas legados',
          'Transformación y mapeo de datos en tiempo real entre sistemas',
          'Gestión de colas, reintentos y tolerancia a fallos',
          'Monitoreo de transacciones y auditoría de mensajes',
        ],
      },
    ],
  },
  {
    id: 'procesos',
    name: 'Procesos y Automatización de Negocio',
    description:
      'Digitalizamos y automatizamos tus operaciones para reducir costos y cuellos de botella.',
    icon: 'workflow',
    services: [
      {
        num: '08',
        name: 'Sistemas Bajo Demanda',
        description:
          '¿Necesitas una solución personalizada — rápido? Arquitectamos y entregamos sistemas adaptados a tus requisitos y plazos.',
        bullets: [
          'Prototipado rápido y entrega de MVPs',
          'Arquitectura de microservicios y serverless',
          'Ingeniería de plataformas SaaS',
          'Diseño API-first y GraphQL',
          'Configuración de DevOps y pipelines CI/CD',
        ],
      },
      {
        num: '16',
        name: 'Automatización Empresarial (RPA)',
        description:
          'Automatizamos flujos de trabajo repetitivos, integración de sistemas y procesos manuales con bots RPA y orquestadores modernos.',
        bullets: [
          'Bots de automatización de tareas administrativas y financieras',
          'Extracción y procesamiento inteligente de facturas y documentos',
          'Sincronización automática entre ERPs, CRMs y bancos',
          'Workflows impulsados por eventos y webhooks en tiempo real',
          'Trazabilidad y monitoreo continuo de ejecuciones',
        ],
      },
      {
        num: '17',
        name: 'Operaciones de Negocios (BPM)',
        description:
          'Diseño, digitalización y optimización de flujos operativos empresariales (BPM) para aumentar la eficiencia y reducir cuellos de botella.',
        bullets: [
          'Mapeo y rediseño de procesos de negocio (BPMN 2.0)',
          'Portales de autoservicio y aprobaciones multinivel',
          'Dashboards de cuellos de botella y tiempos de ciclo (SLA)',
          'Gestión documental y firma digital integrada',
          'Integración con sistemas de contabilidad y recursos humanos',
        ],
      },
      {
        num: '15',
        name: 'Gestión de Activos de TI',
        description:
          'Sistemas centralizados para inventario, ciclo de vida, licencias, mantenimiento y auditoría de activos tecnológicos y empresariales.',
        bullets: [
          'Inventario automatizado de hardware, servidores y dispositivos',
          'Control de licencias de software y fechas de renovación',
          'Historial de mantenimiento, garantías y depreciación contable',
          'Códigos QR / RFID y asignación a empleados por departamento',
          'Auditorías de cumplimiento y reportes de seguridad',
        ],
      },
    ],
  },
]

export const totalServices = serviceCategories.reduce(
  (acc, cat) => acc + cat.services.length,
  0,
)
