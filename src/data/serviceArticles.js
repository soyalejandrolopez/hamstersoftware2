// Artículos bilingües trasladados desde Servicios. Cada slug reúne resumen y contenido.
export const serviceArticles = [
  {
    "num": "19",
    "slug": "ingenieria-datos",
    "es": {
      "name": "Ingeniería de Datos",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Arquitectamos e implementamos pipelines de datos robustos y escalables que son la columna vertebral de tu estrategia de datos.",
      "features": [
        "Diseño e implementación de pipelines de datos",
        "Procesamiento en tiempo real y por lotes",
        "Migración a data warehouse en la nube",
        "Integración con Apache Spark y Kafka",
        "Marcos de calidad y gobernanza de datos"
      ],
      "intro": "Una estrategia de datos necesita un recorrido confiable desde las fuentes hasta los sistemas que utilizan la información. La ingeniería de datos diseña ese recorrido: define cómo ingresar, transformar, almacenar y entregar registros sin perder el contexto que permite interpretarlos. El trabajo comienza con las preguntas del negocio y con la calidad real de las fuentes disponibles.",
      "benefits": "Un pipeline documentado facilita conocer de dónde viene cada dato y detectar interrupciones. Las reglas compartidas permiten comparar información entre áreas y reducir correcciones manuales. El monitoreo ayuda a identificar fallas antes de que afecten a los reportes o a los procesos que consumen los datos.",
      "example": "Por ejemplo, una distribuidora puede reunir ventas, inventario y entregas en un repositorio analítico. Cada carga valida identificadores y fechas; los responsables consultan su estado y pueden revisar qué registros quedaron pendientes sin rehacer toda la actualización.",
      "implementation": "Inventariamos las fuentes, definimos los destinos y acordamos frecuencia, calidad y permisos. Construimos un flujo inicial, lo validamos con registros conocidos y añadimos observabilidad. La selección de herramientas y la capacidad se adaptan al volumen y a la operación."
    },
    "en": {
      "name": "Data Engineering",
      "tag": "Data & Artificial Intelligence",
      "description": "We design and implement robust, scalable data pipelines that form the backbone of your data strategy.",
      "features": [
        "Data pipeline design and implementation",
        "Real-time and batch processing",
        "Cloud data warehouse migration",
        "Integration with Apache Spark and Kafka",
        "Data quality and governance frameworks"
      ],
      "intro": "A data strategy needs a reliable path from source systems to the tools that use the information. Data engineering designs that path: how records enter, transform, store, and reach consumers without losing the context needed to interpret them. Work starts with business questions and the actual quality of available sources.",
      "benefits": "A documented pipeline makes data origins and interruptions easier to trace. Shared rules help teams compare information across departments and reduce manual corrections. Monitoring helps identify failures before they affect reports or processes that consume the data.",
      "example": "For example, a distributor can combine sales, inventory, and deliveries in an analytical repository. Each load validates identifiers and dates; staff check its status and review pending records without rebuilding the entire update.",
      "implementation": "We inventory sources, define destinations, and agree on frequency, quality, and permissions. We build an initial workflow, validate it against known records, and add observability. Tool selection and capacity are adapted to data volume and operations."
    }
  },
  {
    "num": "20",
    "slug": "extraccion-datos-etl",
    "es": {
      "name": "Extracción de Datos / ETL",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Extraemos datos de cualquier fuente y los transformamos en formatos limpios y estructurados listos para análisis.",
      "features": [
        "Integración de datos multi-fuente",
        "Ingestión de APIs y webhooks",
        "Migración de sistemas heredados",
        "Estrategias incrementales y de carga completa",
        "Programación y monitoreo automatizado"
      ],
      "intro": "Extraer datos es el primer paso; hacerlos comparables es lo que permite utilizarlos. Un proceso ETL reúne extracción, transformación y carga para convertir formatos diferentes en información estructurada. También debe definir cómo manejar registros incompletos, cambios en las fuentes y cargas que necesitan repetirse sin duplicar información.",
      "benefits": "Automatizar la preparación de datos reduce tareas repetitivas y establece reglas consistentes de limpieza. Las cargas incrementales permiten actualizar lo necesario cuando las fuentes lo admiten. Registrar errores y estados facilita investigar diferencias entre el sistema de origen y el destino.",
      "example": "Por ejemplo, una empresa puede recibir pedidos de una API y datos de clientes desde un sistema heredado. El flujo unifica identificadores, revisa campos obligatorios y carga los registros válidos. Los casos incompletos quedan disponibles para revisión, con su origen y motivo de rechazo.",
      "implementation": "Revisamos formatos, permisos y límites de cada fuente. Definimos mapeos, validaciones y estrategias de carga, después probamos duplicados, interrupciones y cambios de esquema. El equipo recibe instrucciones para monitorear el flujo y resolver las excepciones."
    },
    "en": {
      "name": "Data Extraction & ETL",
      "tag": "Data & Artificial Intelligence",
      "description": "We extract data from different sources and transform it into clean, structured formats ready for analysis.",
      "features": [
        "Multi-source data integration",
        "API and webhook ingestion",
        "Legacy system migration",
        "Incremental and full-load strategies",
        "Automated scheduling and monitoring"
      ],
      "intro": "Extracting data is the first step; making it comparable is what allows people to use it. An ETL process combines extraction, transformation, and loading to convert different formats into structured information. It must also define how to handle incomplete records, source changes, and repeated loads without duplicating data.",
      "benefits": "Automating data preparation reduces repetitive work and establishes consistent cleaning rules. Incremental loads update only what is needed when sources support them. Error and status records make differences between source and destination systems easier to investigate.",
      "example": "For example, a company can receive orders through an API and customer data from a legacy system. The workflow matches identifiers, checks required fields, and loads valid records. Incomplete cases remain available for review with their origin and rejection reason.",
      "implementation": "We review each source’s formats, permissions, and limits. We define mappings, validations, and loading strategies, then test duplicates, interruptions, and schema changes. The team receives instructions for monitoring the workflow and resolving exceptions."
    }
  },
  {
    "num": "21",
    "slug": "visualizacion-datos",
    "es": {
      "name": "Visualización de Datos",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Transformamos datos complejos en visuales claros y convincentes que empoderan decisiones rápidas basadas en evidencia.",
      "features": [
        "Dashboards interactivos (Tableau, Power BI, D3.js)",
        "Sistemas de reportes ejecutivos",
        "Monitoreo de KPIs en tiempo real",
        "Componentes de gráficos personalizados",
        "Visualización geoespacial y de redes"
      ],
      "intro": "Una visualización aporta valor cuando ayuda a responder una pregunta, no solo cuando presenta muchos gráficos. El diseño de dashboards parte de los usuarios, las decisiones y las métricas que necesitan consultar. Elegir escalas, filtros y comparaciones adecuados permite entender los datos sin ocultar sus límites ni perder contexto.",
      "benefits": "Los indicadores compartidos ayudan a que distintos equipos hablen sobre las mismas cifras. Las vistas interactivas permiten explorar diferencias por período, región o segmento. Presentar la fecha de actualización y las definiciones de las métricas evita interpretaciones basadas en información desactualizada o cálculos distintos.",
      "example": "Por ejemplo, un equipo comercial puede revisar ventas por región y filtrar por categoría de producto. Una comparación con períodos equivalentes muestra dónde cambió la actividad; el usuario puede consultar el detalle antes de decidir qué cuentas o zonas requieren seguimiento.",
      "implementation": "Acordamos las preguntas y definiciones de los indicadores. Preparamos las fuentes y diseñamos una primera vista con datos reales. Validamos cifras, legibilidad y navegación con los usuarios antes de añadir nuevos gráficos o distribuir reportes."
    },
    "en": {
      "name": "Data Visualization",
      "tag": "Data & Artificial Intelligence",
      "description": "We turn complex data into clear visuals that support timely, evidence-based decisions.",
      "features": [
        "Interactive dashboards with Tableau, Power BI, and D3.js",
        "Executive reporting systems",
        "Real-time KPI monitoring",
        "Custom chart components",
        "Geospatial and network visualization"
      ],
      "intro": "A visualization is useful when it answers a question, rather than simply displaying many charts. Dashboard design starts with users, decisions, and the metrics they need. Appropriate scales, filters, and comparisons make data understandable without hiding its limitations or removing context.",
      "benefits": "Shared indicators help teams discuss the same figures. Interactive views let users explore differences by period, region, or segment. Visible update dates and metric definitions prevent interpretations based on outdated information or inconsistent calculations.",
      "example": "For example, a sales team can review revenue by region and filter by product category. Comparisons with equivalent periods show where activity changed; users can inspect the details before deciding which accounts or areas need follow-up.",
      "implementation": "We agree on questions and indicator definitions. We prepare sources and design an initial view with real data. We validate figures, readability, and navigation with users before adding more charts or distributing reports."
    }
  },
  {
    "num": "22",
    "slug": "mineria-gestion-datos",
    "es": {
      "name": "Minería y Gestión de Datos",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Descubrimos insights ocultos en tus datos con soluciones de minería y gestión que te dan visibilidad y control total.",
      "features": [
        "Detección de patrones y anomalías",
        "Segmentación y clustering de clientes",
        "Minería de reglas de asociación",
        "Gestión de datos maestros (MDM)",
        "Catálogo de datos y seguimiento de linaje"
      ],
      "intro": "Los patrones de un conjunto de datos pueden revelar relaciones útiles, pero necesitan información consistente y un contexto de negocio. La minería de datos explora esas relaciones, mientras la gestión de datos organiza identificadores, definiciones y responsabilidades. Ambas tareas se complementan para que los hallazgos puedan revisarse y utilizarse en decisiones concretas.",
      "benefits": "Un catálogo y un registro de linaje ayudan a entender el origen de la información. La segmentación permite explorar grupos con comportamientos similares, y la revisión de anomalías puede orientar investigaciones. Los resultados deben contrastarse con el proceso real para distinguir una señal útil de un problema de calidad.",
      "example": "Por ejemplo, un comercio puede analizar qué productos se compran juntos y cómo varían esas relaciones por temporada. El equipo revisa los patrones con datos de inventario y promociones antes de diseñar una propuesta comercial o probar una recomendación.",
      "implementation": "Definimos las preguntas, revisamos la calidad de los datos y acordamos criterios de evaluación. Construimos análisis reproducibles y documentamos las reglas de gestión. Los hallazgos se validan con los responsables del negocio antes de incorporarlos a procesos operativos."
    },
    "en": {
      "name": "Data Mining & Management",
      "tag": "Data & Artificial Intelligence",
      "description": "We uncover patterns in your data with mining and management tools that improve visibility and control.",
      "features": [
        "Pattern and anomaly detection",
        "Customer segmentation and clustering",
        "Association rule mining",
        "Master data management (MDM)",
        "Data catalogs and lineage tracking"
      ],
      "intro": "Patterns in a dataset can reveal useful relationships, but they require consistent information and business context. Data mining explores those relationships, while data management organizes identifiers, definitions, and responsibilities. Together, they make findings reviewable and usable in concrete decisions.",
      "benefits": "A catalog and lineage records help explain where information comes from. Segmentation supports exploration of groups with similar behavior, while anomaly review can guide investigations. Results must be checked against actual workflows to distinguish useful signals from data quality issues.",
      "example": "For example, a retailer can analyze products frequently purchased together and how those relationships change by season. Staff review patterns alongside inventory and promotions before designing a commercial offer or testing a recommendation.",
      "implementation": "We define questions, review data quality, and agree on evaluation criteria. We build reproducible analyses and document management rules. Findings are validated with business owners before being incorporated into operational processes."
    }
  },
  {
    "num": "23",
    "slug": "machine-learning",
    "es": {
      "name": "Machine Learning",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Desplegamos sistemas inteligentes de ML que automatizan decisiones complejas — desde pronósticos hasta procesamiento de documentos.",
      "features": [
        "Analítica predictiva y pronósticos",
        "Modelos de NLP y visión por computadora",
        "Fine-tuning de LLMs y pipelines RAG",
        "MLOps y gestión del ciclo de vida de modelos",
        "Frameworks de A/B testing y experimentación"
      ],
      "intro": "El aprendizaje automático utiliza ejemplos para construir modelos que detectan patrones o generan estimaciones. Un proyecto útil necesita una tarea definida, datos representativos y una forma de medir los resultados. Antes de automatizar una decisión, conviene entender qué errores son aceptables, cuándo se requiere revisión humana y cómo cambia el problema con el tiempo.",
      "benefits": "Un modelo evaluado puede apoyar pronósticos, clasificación y preparación de información. Mantener versiones y métricas facilita comparar mejoras y detectar cambios de desempeño. Integrar la supervisión al flujo permite revisar los resultados que requieren contexto adicional antes de utilizarlos.",
      "example": "Por ejemplo, una empresa puede estimar demanda por producto para apoyar la planificación. Compara las predicciones con una referencia sencilla y con los resultados reales. El equipo revisa los casos afectados por promociones o cambios de catálogo antes de ajustar sus compras.",
      "implementation": "Definimos la tarea y una referencia de comparación, preparamos los datos y separamos conjuntos de evaluación. Probamos modelos, documentamos límites e integramos el elegido con monitoreo. Las actualizaciones se validan antes de reemplazar una versión en operación."
    },
    "en": {
      "name": "Machine Learning",
      "tag": "Data & Artificial Intelligence",
      "description": "We develop machine learning systems for forecasting, document processing, and other business workflows.",
      "features": [
        "Predictive analytics and forecasting",
        "NLP and computer vision models",
        "LLM fine-tuning and RAG pipelines",
        "MLOps and model lifecycle management",
        "A/B testing and experimentation frameworks"
      ],
      "intro": "Machine learning uses examples to build models that detect patterns or produce estimates. A useful project needs a defined task, representative data, and a way to measure results. Before automating a decision, teams should understand acceptable errors, when human review is required, and how the problem changes over time.",
      "benefits": "An evaluated model can support forecasting, classification, and information preparation. Versioning and metrics make improvements comparable and help detect performance changes. Supervision within the workflow lets teams review results that need additional context before using them.",
      "example": "For example, a company can estimate product demand to support planning. It compares predictions with a simple baseline and actual results. Staff review cases affected by promotions or catalog changes before adjusting purchasing decisions.",
      "implementation": "We define the task and a comparison baseline, prepare data, and separate evaluation sets. We test models, document limitations, and integrate the selected version with monitoring. Updates are validated before replacing an operational version."
    }
  },
  {
    "num": "24",
    "slug": "redes-neuronales-deep-learning",
    "es": {
      "name": "Redes Neuronales y Deep Learning",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Diseñamos, entrenamos y desplegamos arquitecturas de redes neuronales profundas para visión artificial, NLP, clasificación y detección de anomalías.",
      "features": [
        "Arquitecturas CNN, RNN, Transformers y Autoencoders",
        "Visión por computadora (detección de objetos, segmentación y OCR)",
        "Modelos de series temporales y procesamiento de señales",
        "Optimización y cuantización para inferencia en tiempo real",
        "Pipelines de entrenamiento distribuido en GPU / TPU"
      ],
      "intro": "Las redes neuronales pueden aprender representaciones a partir de imágenes, texto y señales. Su diseño requiere relacionar la arquitectura con la tarea, los datos y los recursos disponibles. Entrenar un modelo es parte del recorrido: también hay que evaluar sus errores y preparar una inferencia que encaje en las condiciones reales de uso.",
      "benefits": "Una evaluación organizada permite comparar arquitecturas y entender en qué casos falla cada modelo. La optimización de inferencia puede ayudar a adaptar consumo de memoria y tiempos de respuesta. Registrar datos, parámetros y versiones facilita reproducir resultados y revisar cambios durante el mantenimiento.",
      "example": "Por ejemplo, una línea de producción puede evaluar un modelo para clasificar imágenes de piezas. El equipo compara sus resultados con ejemplos revisados, estudia errores bajo distintas condiciones de iluminación y decide qué casos deben enviarse a inspección manual.",
      "implementation": "Revisamos muestras y criterios de aceptación, preparamos datos y entrenamos una referencia. Evaluamos rendimiento y errores, después probamos la inferencia en el hardware previsto. Documentamos el proceso de actualización y las condiciones que requieren nueva evaluación."
    },
    "en": {
      "name": "Neural Networks & Deep Learning",
      "tag": "Data & Artificial Intelligence",
      "description": "We design, train, and deploy deep neural networks for computer vision, NLP, classification, and anomaly detection.",
      "features": [
        "CNN, RNN, Transformer, and Autoencoder architectures",
        "Computer vision: object detection, segmentation, and OCR",
        "Time series models and signal processing",
        "Optimization and quantization for real-time inference",
        "Distributed training pipelines on GPUs and TPUs"
      ],
      "intro": "Neural networks can learn representations from images, text, and signals. Their design must connect architecture with the task, data, and available resources. Training is only part of the journey: teams also need to evaluate errors and prepare inference that fits actual operating conditions.",
      "benefits": "Organized evaluation makes architectures comparable and reveals where each model fails. Inference optimization can help adapt memory use and response times. Recording data, parameters, and versions makes results reproducible and changes easier to review during maintenance.",
      "example": "For example, a production line can evaluate a model for classifying images of parts. Staff compare results with reviewed examples, study errors under different lighting conditions, and decide which cases should go to manual inspection.",
      "implementation": "We review samples and acceptance criteria, prepare data, and train a baseline. We evaluate performance and errors, then test inference on the intended hardware. We document update procedures and conditions that require another evaluation."
    }
  },
  {
    "num": "25",
    "slug": "analitica-avanzada-negocios",
    "es": {
      "name": "Analítica Avanzada de Negocios",
      "tag": "Datos e Inteligencia Artificial",
      "description": "Modelado estadístico, análisis de cohortes, modelos de propensión y analítica prescriptiva para acelerar la toma de decisiones empresariales.",
      "features": [
        "Modelado predictivo de ventas, abandono (churn) y demanda",
        "Segmentación comportamental y análisis de Lifetime Value (LTV)",
        "Cuadros de mando ejecutivos y tableros interactivos",
        "Detección de patrones de compra y recomendaciones",
        "Análisis de atribución de marketing y optimización de CAC"
      ],
      "intro": "La analítica avanzada conecta preguntas empresariales con métodos estadísticos y modelos que permiten explorar escenarios. Un análisis de cohortes, una estimación de abandono o una comparación de campañas necesita definiciones claras y datos apropiados. El objetivo es apoyar decisiones con evidencia que pueda revisarse, explicando tanto los resultados como sus supuestos.",
      "benefits": "Comparar grupos y períodos de forma consistente ayuda a identificar cambios en clientes y operaciones. Los modelos pueden aportar estimaciones para planificar acciones, mientras los tableros permiten dar seguimiento. Documentar los supuestos facilita entender cuándo un resultado deja de ser aplicable.",
      "example": "Por ejemplo, una empresa de suscripciones puede revisar la retención de clientes por mes de ingreso. Contrasta las diferencias con cambios en el servicio y campañas, y diseña una prueba de acompañamiento. Después mide el resultado frente a un grupo comparable.",
      "implementation": "Definimos la decisión, las métricas y el diseño del análisis. Revisamos fuentes y posibles sesgos, construimos modelos y contrastamos resultados con el negocio. La entrega incluye interpretaciones, límites y un plan para evaluar las acciones que se deriven del análisis."
    },
    "en": {
      "name": "Advanced Business Analytics",
      "tag": "Data & Artificial Intelligence",
      "description": "Statistical modeling, cohort analysis, propensity models, and prescriptive analytics to support business decisions.",
      "features": [
        "Predictive modeling of sales, churn, and demand",
        "Behavioral segmentation and lifetime value (LTV) analysis",
        "Executive scorecards and interactive dashboards",
        "Purchase pattern detection and recommendations",
        "Marketing attribution analysis and customer acquisition cost (CAC) optimization"
      ],
      "intro": "Advanced analytics connects business questions with statistical methods and models for exploring scenarios. Cohort analysis, churn estimation, and campaign comparisons need clear definitions and appropriate data. The goal is to support decisions with reviewable evidence, explaining both results and assumptions.",
      "benefits": "Consistent comparisons across groups and periods help identify changes in customers and operations. Models can provide estimates for planning actions, while dashboards support follow-up. Documented assumptions make it easier to understand when a result no longer applies.",
      "example": "For example, a subscription company can review retention by customer joining month. It checks differences against service and campaign changes, then designs a support experiment. Results are measured against a comparable group.",
      "implementation": "We define the decision, metrics, and analytical design. We review sources and potential biases, build models, and discuss results with business owners. Delivery includes interpretations, limitations, and a plan for evaluating resulting actions."
    }
  },
  {
    "num": "26",
    "slug": "modelos-lenguaje-pequeno",
    "es": {
      "name": "Modelos de Lenguaje Pequeño (SLMs)",
      "tag": "IA Generativa y Asistentes",
      "description": "Desplegamos modelos de lenguaje compactos en tus propios servidores o en entornos locales, con controles de acceso adaptados a tus datos.",
      "features": [
        "Evaluación de modelos compactos como Phi-3, Gemma, LLaMA 3 8B y Qwen",
        "Despliegue local y on-premise con control de acceso a los datos",
        "Fine-tuning especializado para tu negocio y terminología",
        "Optimización de inferencia con cuantización (GGUF, AWQ)",
        "Integración RAG local con gestión de los costos de infraestructura"
      ],
      "intro": "Un modelo de lenguaje pequeño puede ser una opción cuando la tarea está bien delimitada y el entorno necesita controlar dónde se procesan los datos. Su tamaño por sí solo no determina la calidad. Hay que evaluar respuestas, recursos de ejecución y mecanismos de acceso para decidir si encaja en el flujo previsto.",
      "benefits": "Un despliegue local permite definir el recorrido de la información y adaptar la integración a sistemas internos. Los modelos compactos pueden facilitar pruebas en recursos limitados. La privacidad depende también de permisos, registros, conectividad y operación; ejecutar un modelo localmente no sustituye esos controles.",
      "example": "Por ejemplo, un equipo puede probar un asistente que clasifique solicitudes internas y consulte documentos autorizados. Evalúa la calidad de las respuestas con ejemplos representativos y decide qué consultas necesitan revisión. El acceso a documentos se limita al rol de cada usuario.",
      "implementation": "Definimos la tarea, los datos permitidos y la evaluación. Comparamos modelos en el hardware disponible y probamos cuantización o ajustes cuando aporten valor. Documentamos costos de infraestructura, controles de acceso y procedimientos de actualización."
    },
    "en": {
      "name": "Small Language Models (SLMs)",
      "tag": "Generative AI & Assistants",
      "description": "We deploy compact language models on your own servers or local environments, with data access controls adapted to your business.",
      "features": [
        "Evaluation of compact models such as Phi-3, Gemma, LLaMA 3 8B, and Qwen",
        "Local and on-premise deployment with controlled data access",
        "Fine-tuning for your business and terminology",
        "Inference optimization with quantization formats such as GGUF and AWQ",
        "Local retrieval-augmented generation (RAG) with infrastructure costs managed separately"
      ],
      "intro": "A small language model can be an option when the task is well defined and the environment needs control over where data is processed. Size alone does not determine quality. Responses, execution resources, and access mechanisms must be evaluated to decide whether a model fits the intended workflow.",
      "benefits": "Local deployment lets teams define the information path and adapt integration to internal systems. Compact models can make experiments possible on limited resources. Privacy also depends on permissions, logging, connectivity, and operations; running a model locally does not replace those controls.",
      "example": "For example, a team can test an assistant that classifies internal requests and consults authorized documents. It evaluates responses against representative examples and decides which queries need review. Document access is limited by each user’s role.",
      "implementation": "We define the task, permitted data, and evaluation. We compare models on available hardware and test quantization or tuning where useful. We document infrastructure costs, access controls, and update procedures."
    }
  },
  {
    "num": "27",
    "slug": "bases-datos-vectoriales",
    "es": {
      "name": "Bases de Datos Vectoriales",
      "tag": "IA Generativa y Asistentes",
      "description": "Implementamos y optimizamos bases de datos vectoriales para búsqueda semántica, sistemas de recomendación y pipelines RAG de alta escala.",
      "features": [
        "Índices de similitud vectorial (HNSW, IVF-PQ, ScaNN)",
        "Embeddings de alta dimensionalidad para texto, imágenes y audio",
        "Integración con frameworks de IA (LangChain, LlamaIndex, Haystack)",
        "Escalabilidad y evaluación de latencia según las necesidades del proyecto",
        "Almacenamiento híbrido: vectorial + metadatos relacionales"
      ],
      "intro": "Una búsqueda semántica compara representaciones de contenido para encontrar resultados relacionados con una consulta. Las bases de datos vectoriales organizan esas representaciones junto con metadatos que permiten filtrar y contextualizar los resultados. Un diseño útil debe considerar la calidad de los embeddings, las reglas de acceso y la actualización de documentos.",
      "benefits": "Combinar similitud y filtros ayuda a encontrar contenido relevante dentro del alcance permitido. Los índices permiten organizar consultas según volumen y requisitos de respuesta. Medir recuperación y latencia con datos reales permite comparar opciones sin asumir que cualquier configuración tendrá el mismo resultado.",
      "example": "Por ejemplo, un portal interno puede buscar manuales por el significado de una pregunta, aunque no use las mismas palabras del documento. Antes de mostrar resultados, aplica filtros de área y permisos. Cada respuesta enlaza la fuente para que el usuario pueda revisar su contexto.",
      "implementation": "Seleccionamos el contenido, los metadatos y las reglas de acceso. Probamos embeddings e índices con consultas representativas y definimos cómo actualizar o retirar documentos. La evaluación cubre relevancia, capacidad y tiempos de respuesta del entorno concreto."
    },
    "en": {
      "name": "Vector Databases",
      "tag": "Generative AI & Assistants",
      "description": "We implement and optimize vector databases for semantic search, recommendation systems, and RAG pipelines.",
      "features": [
        "Vector similarity indexes such as HNSW, IVF-PQ, and ScaNN",
        "Text, image, and audio embeddings",
        "Integration with LangChain, LlamaIndex, and Haystack",
        "Scaling and query performance evaluation against project requirements",
        "Hybrid storage combining vectors and relational metadata"
      ],
      "intro": "Semantic search compares content representations to find results related to a query. Vector databases organize those representations alongside metadata used to filter and contextualize results. A useful design must consider embedding quality, access rules, and document updates.",
      "benefits": "Combining similarity and filters helps find relevant content within the permitted scope. Indexes organize queries according to volume and response requirements. Measuring retrieval and latency with real data allows meaningful comparisons instead of assuming every configuration will perform identically.",
      "example": "For example, an internal portal can find manuals based on a question’s meaning even when its wording differs from the document. Before displaying results, it applies department and permission filters. Each response links its source so users can review the context.",
      "implementation": "We select content, metadata, and access rules. We test embeddings and indexes with representative queries and define how to update or remove documents. Evaluation covers relevance, capacity, and response times in the actual environment."
    }
  },
  {
    "num": "28",
    "slug": "chatbots-asistentes-virtuales",
    "es": {
      "name": "Chatbots y Asistentes Virtuales",
      "tag": "IA Generativa y Asistentes",
      "description": "Desarrollamos chatbots inteligentes y agentes conversacionales multicanal con IA generativa, integrados a tus bases de datos y WhatsApp.",
      "features": [
        "Agentes conversacionales con memoria y contexto de cliente",
        "Integración con WhatsApp Business API, Web, Telegram y CRM",
        "RAG conectado a inventario, catálogos y políticas internas",
        "Derivación inteligente a agentes humanos ante casos complejos",
        "Analítica de conversaciones, sentimiento y tasas de resolución"
      ],
      "intro": "Un asistente conversacional necesita algo más que generar texto: debe saber qué información puede consultar y qué acciones puede realizar. Integrarlo con los canales de atención permite organizar consultas frecuentes y acompañar al usuario. Un flujo claro distingue respuestas informativas, operaciones autorizadas y casos que necesitan intervención del equipo humano.",
      "benefits": "Conectar fuentes autorizadas permite ofrecer respuestas con contexto del negocio. El seguimiento de conversaciones ayuda a detectar preguntas recurrentes y puntos donde el asistente no resuelve la necesidad. La derivación a una persona conserva continuidad cuando hace falta una evaluación adicional o una acción fuera del alcance automático.",
      "example": "Por ejemplo, un comercio puede atender preguntas sobre catálogo y estado de pedidos desde su web y WhatsApp. El asistente consulta datos permitidos y solicita identificación cuando corresponde. Si una consulta exige revisar una incidencia, la transfiere al equipo con el contexto relevante.",
      "implementation": "Definimos canales, preguntas, permisos y límites de actuación. Integramos fuentes y probamos conversaciones, errores y derivaciones. Acordamos cómo medir resultados y revisar respuestas para mejorar el flujo sin perder control sobre los datos o las acciones."
    },
    "en": {
      "name": "Chatbots & Virtual Assistants",
      "tag": "Generative AI & Assistants",
      "description": "We build conversational assistants with generative AI connected to your data and channels such as WhatsApp.",
      "features": [
        "Conversational agents with customer context and memory",
        "Integration with WhatsApp Business API, web, Telegram, and CRM",
        "RAG connected to inventory, catalogs, and internal policies",
        "Escalation to human agents for complex cases",
        "Conversation analytics, sentiment, and resolution rates"
      ],
      "intro": "A conversational assistant needs more than text generation: it must know which information it may consult and which actions it may perform. Connecting it to support channels helps organize frequent inquiries and guide users. A clear workflow distinguishes informational answers, authorized operations, and cases requiring human staff.",
      "benefits": "Authorized sources provide answers with business context. Conversation tracking helps identify recurring questions and points where the assistant cannot resolve a need. Human escalation preserves continuity when further assessment or an action outside automated scope is required.",
      "example": "For example, a retailer can handle catalog and order-status questions through its website and WhatsApp. The assistant consults permitted data and requests identification when appropriate. If an inquiry requires incident review, it transfers the case with relevant context.",
      "implementation": "We define channels, questions, permissions, and action boundaries. We integrate sources and test conversations, failures, and handoffs. We agree on measurement and answer review procedures to improve the workflow while retaining control over data and actions."
    }
  },
  {
    "num": "29",
    "slug": "nube-arquitectura-cloud",
    "es": {
      "name": "Nube y Arquitectura Cloud",
      "tag": "Cloud y Operaciones TI",
      "description": "Migración, diseño y optimización de arquitecturas en la nube (AWS, GCP, Azure, Cloudflare) con alta disponibilidad y costos controlados.",
      "features": [
        "Arquitecturas serverless y basadas en microservicios",
        "Migración segura de infraestructura on-premise a la nube",
        "Optimización de costos cloud (FinOps) y reducción de facturación",
        "Redundancia multi-zona y objetivos de disponibilidad acordados",
        "Estrategias de respaldo automatizado y Disaster Recovery"
      ],
      "intro": "Migrar a la nube requiere decidir cómo se ejecutarán las aplicaciones, qué dependencias conservarán y cómo se administrarán los recursos. La arquitectura cloud relaciona esas decisiones con disponibilidad, recuperación y presupuesto. No todos los servicios necesitan el mismo diseño; el entorno debe responder a cargas y objetivos concretos del negocio.",
      "benefits": "Un diseño documentado facilita conocer responsabilidades y costos por servicio. La observación del consumo permite revisar recursos infrautilizados y detectar cambios de demanda. Planear redundancia y recuperación aporta procedimientos para responder a fallas, con objetivos medibles y pruebas acordadas.",
      "example": "Por ejemplo, una empresa puede trasladar una aplicación interna por etapas. Primero revisa dependencias y prepara un entorno de prueba, después valida datos y funcionamiento antes del cambio. El equipo comprueba copias, accesos y costos previstos durante la transición.",
      "implementation": "Inventariamos aplicaciones, datos y conectividad, y definimos objetivos de operación. Evaluamos proveedores y alternativas de arquitectura, planificamos la migración y probamos recuperación. Entregamos documentación, monitoreo y criterios para revisar capacidad y presupuesto."
    },
    "en": {
      "name": "Cloud Architecture",
      "tag": "Cloud & IT Operations",
      "description": "Cloud architecture design, migration, and optimization with AWS, GCP, Azure, or Cloudflare, considering availability and cost objectives.",
      "features": [
        "Serverless and microservice architectures",
        "Migration from on-premise infrastructure to the cloud",
        "Cloud cost optimization and FinOps",
        "Multi-zone redundancy and agreed availability objectives",
        "Automated backup and disaster recovery strategies"
      ],
      "intro": "Moving to the cloud requires decisions about how applications run, which dependencies remain, and how resources are managed. Cloud architecture connects those decisions to availability, recovery, and budget. Different services need different designs; the environment should support concrete workloads and business objectives.",
      "benefits": "Documented design clarifies responsibilities and costs by service. Consumption monitoring helps identify unused resources and demand changes. Redundancy and recovery planning provide failure response procedures with measurable objectives and agreed tests.",
      "example": "For example, a company can move an internal application in stages. It first reviews dependencies and prepares a test environment, then validates data and behavior before switching. Staff check backups, access, and expected costs during the transition.",
      "implementation": "We inventory applications, data, and connectivity and define operational objectives. We evaluate providers and architecture options, plan the migration, and test recovery. Delivery includes documentation, monitoring, and criteria for reviewing capacity and budget."
    }
  },
  {
    "num": "30",
    "slug": "computacion-servidores",
    "es": {
      "name": "Computación y Servidores",
      "tag": "Cloud y Operaciones TI",
      "description": "Configuración, administración y virtualización de servidores Linux/Windows, bare metal, clústeres y almacenamiento de alto rendimiento.",
      "features": [
        "Aprovisionamiento de servidores dedicados y VPS (Linux / Windows)",
        "Virtualización con Proxmox, VMware y KVM",
        "Hardening de seguridad de sistemas operativos y firewalls",
        "Configuración de almacenamiento en red (NAS/SAN, ZFS, Ceph)",
        "Monitoreo 24/7 de CPU, memoria, disco y red con alertas"
      ],
      "intro": "Un servidor necesita una configuración que responda a su carga y una administración que conserve su estabilidad. Cómputo, almacenamiento y red deben planearse junto con accesos, actualizaciones y recuperación. La virtualización puede ayudar a organizar servicios, pero también requiere entender dependencias y recursos compartidos antes de mover una aplicación.",
      "benefits": "Una configuración registrada permite repetir instalaciones y revisar cambios. El monitoreo aporta señales sobre saturación y uso de recursos, mientras el mantenimiento organizado reduce tareas improvisadas. Conocer dependencias y copias disponibles facilita responder a incidentes y preparar ampliaciones.",
      "example": "Por ejemplo, una empresa puede separar sus aplicaciones administrativas en servidores virtuales y asignar recursos según su uso. El equipo revisa indicadores de memoria y almacenamiento, programa mantenimiento y realiza una restauración de prueba para validar su procedimiento.",
      "implementation": "Inventariamos equipos y servicios, evaluamos capacidad y definimos una configuración base. Preparamos permisos, almacenamiento, copias y monitoreo. Probamos el funcionamiento con las aplicaciones reales y entregamos instrucciones para administrar cambios y atender incidencias."
    },
    "en": {
      "name": "Computing & Servers",
      "tag": "Cloud & IT Operations",
      "description": "Configuration, administration, and virtualization of Linux and Windows servers, bare metal systems, clusters, and storage.",
      "features": [
        "Dedicated server and VPS provisioning for Linux and Windows",
        "Virtualization with Proxmox, VMware, and KVM",
        "Operating system hardening and firewall configuration",
        "Network storage with NAS/SAN, ZFS, and Ceph",
        "CPU, memory, disk, and network monitoring with alerts"
      ],
      "intro": "A server needs configuration suited to its workload and administration that maintains stability. Compute, storage, and networking must be planned alongside access, updates, and recovery. Virtualization can help organize services, but moving an application also requires understanding dependencies and shared resources.",
      "benefits": "Recorded configuration makes installations repeatable and changes reviewable. Monitoring provides signals about saturation and resource use, while planned maintenance reduces improvised work. Understanding dependencies and available backups helps teams respond to incidents and prepare expansions.",
      "example": "For example, a company can separate administrative applications into virtual servers and assign resources according to usage. Staff review memory and storage indicators, schedule maintenance, and run a restoration test to validate the procedure.",
      "implementation": "We inventory equipment and services, evaluate capacity, and define a baseline configuration. We prepare permissions, storage, backups, and monitoring. We test with actual applications and provide instructions for managing changes and incidents."
    }
  },
  {
    "num": "31",
    "slug": "devops-ci-cd",
    "es": {
      "name": "DevOps y CI/CD",
      "tag": "Cloud y Operaciones TI",
      "description": "Pipelines de integración y despliegue continuo (CI/CD), infraestructura como código (IaC) y observabilidad para entregar software con un proceso repetible.",
      "features": [
        "Pipelines automatizados de CI/CD (GitHub Actions, GitLab CI)",
        "Infraestructura como código con Terraform y Ansible",
        "Orquestación de contenedores con Kubernetes y Docker Swarm",
        "Estrategias de despliegue sin tiempo de inactividad (Blue-Green / Canary)",
        "Monitoreo de logs y métricas centralizadas (Prometheus, Grafana, ELK)"
      ],
      "intro": "Un pipeline de integración y despliegue convierte una entrega de software en una secuencia reproducible. Incluye verificaciones, preparación de artefactos y reglas para publicar cambios. DevOps conecta ese recorrido con la operación, de modo que el equipo pueda observar qué versión está disponible, cómo se comporta y qué hacer si necesita revertirla.",
      "benefits": "Automatizar pasos repetitivos permite aplicar las mismas verificaciones en cada entrega. La infraestructura como código ayuda a revisar diferencias entre entornos. Las métricas y los registros aportan contexto después del despliegue para detectar problemas y decidir si continuar, detener o revertir un cambio.",
      "example": "Por ejemplo, un equipo puede ejecutar pruebas cuando se propone una modificación, generar un artefacto y publicarlo primero en un entorno de validación. Una vez aprobado, despliega en producción y revisa los indicadores definidos antes de ampliar la entrega.",
      "implementation": "Revisamos repositorios, entornos y el proceso actual de publicación. Definimos verificaciones, permisos y procedimientos de reversión. Implementamos el pipeline por etapas y probamos fallas de entrega y recuperación para que la automatización sea comprensible y mantenible."
    },
    "en": {
      "name": "DevOps & CI/CD",
      "tag": "Cloud & IT Operations",
      "description": "Continuous integration and deployment, infrastructure as code, and observability to deliver software through a repeatable process.",
      "features": [
        "Automated CI/CD pipelines with GitHub Actions and GitLab CI",
        "Infrastructure as code with Terraform and Ansible",
        "Container orchestration with Kubernetes and Docker Swarm",
        "Blue-green and canary deployment strategies",
        "Centralized logs and metrics with Prometheus, Grafana, and ELK"
      ],
      "intro": "A continuous integration and deployment pipeline turns a software release into a repeatable sequence. It includes checks, artifact preparation, and rules for publishing changes. DevOps connects this journey with operations so teams can observe the available version, its behavior, and what to do if rollback is needed.",
      "benefits": "Automating repetitive steps applies consistent checks to every release. Infrastructure as code makes differences between environments reviewable. Metrics and logs provide context after deployment to detect problems and decide whether to continue, stop, or revert a change.",
      "example": "For example, a team can run tests when a change is proposed, build an artifact, and deploy it first to a validation environment. Once approved, it releases to production and reviews defined indicators before expanding the rollout.",
      "implementation": "We review repositories, environments, and the current release process. We define checks, permissions, and rollback procedures. We implement the pipeline in stages and test delivery failures and recovery so automation remains understandable and maintainable."
    }
  },
  {
    "num": "32",
    "slug": "automatizacion-ti",
    "es": {
      "name": "Automatización de TI",
      "tag": "Cloud y Operaciones TI",
      "description": "Scripts, herramientas de auto-remediación y gestión centralizada para automatizar la administración de sistemas y soporte técnico.",
      "features": [
        "Aprovisionamiento desatendido de estaciones de trabajo y servidores",
        "Scripts de mantenimiento preventivo y limpieza automatizada",
        "Auto-reparación de servicios caídos y alertas en tiempo real",
        "Gestión masiva de parches de seguridad y actualizaciones",
        "Backups programados y pruebas automáticas de restauración"
      ],
      "intro": "La administración de sistemas incluye tareas que se repiten: preparar equipos, revisar servicios, aplicar actualizaciones y comprobar copias. Automatizarlas requiere definir condiciones y resultados esperados para que una ejecución pueda revisarse. Un script útil no solo realiza acciones; también informa qué hizo, qué falló y cuándo necesita intervención del equipo.",
      "benefits": "Los procedimientos repetibles ayudan a mantener configuraciones consistentes entre equipos. Los registros permiten revisar ejecuciones y detectar excepciones. Separar las acciones rutinarias de las que requieren aprobación conserva el control sobre cambios que pueden afectar servicios o información.",
      "example": "Por ejemplo, un equipo de soporte puede programar comprobaciones de espacio y estado de servicios en varios servidores. La automatización registra resultados y prepara avisos cuando detecta una condición definida. Las acciones de recuperación siguen reglas acordadas y dejan evidencia para revisión.",
      "implementation": "Identificamos tareas frecuentes y sus riesgos, después definimos permisos y condiciones de ejecución. Probamos scripts en un entorno controlado, incluyendo errores e interrupciones. Documentamos monitoreo, responsabilidades y procedimientos para detener o revertir acciones cuando sea necesario."
    },
    "en": {
      "name": "IT Automation",
      "tag": "Cloud & IT Operations",
      "description": "Scripts, recovery tools, and centralized management to automate system administration and technical support.",
      "features": [
        "Unattended workstation and server provisioning",
        "Preventive maintenance and automated cleanup scripts",
        "Service recovery workflows and operational alerts",
        "Security patch and update management across devices",
        "Scheduled backups and automated restoration tests"
      ],
      "intro": "System administration includes recurring tasks: preparing devices, checking services, applying updates, and verifying backups. Automation requires defined conditions and expected results so executions can be reviewed. A useful script does more than perform actions; it reports what happened, what failed, and when staff intervention is needed.",
      "benefits": "Repeatable procedures help maintain consistent configurations across devices. Logs make execution review and exception detection possible. Separating routine actions from those requiring approval preserves control over changes that may affect services or information.",
      "example": "For example, a support team can schedule storage and service checks across several servers. Automation records results and prepares notices when a defined condition occurs. Recovery actions follow agreed rules and leave evidence for review.",
      "implementation": "We identify frequent tasks and risks, then define permissions and execution conditions. We test scripts in a controlled environment, including failures and interruptions. We document monitoring, responsibilities, and procedures for stopping or reversing actions when necessary."
    }
  },
  {
    "num": "33",
    "slug": "middleware-integracion-sistemas",
    "es": {
      "name": "Middleware e Integración de Sistemas",
      "tag": "Cloud y Operaciones TI",
      "description": "Conectores, buses de eventos y capas de integración para comunicar sistemas heterogéneos, ERPs, APIs y bases de datos sin fricción.",
      "features": [
        "Arquitecturas dirigidas por eventos (Event-Driven) con Kafka y RabbitMQ",
        "APIs REST y GraphQL unificadas sobre sistemas legados",
        "Transformación y mapeo de datos en tiempo real entre sistemas",
        "Gestión de colas, reintentos y tolerancia a fallos",
        "Monitoreo de transacciones y auditoría de mensajes"
      ],
      "intro": "Conectar aplicaciones implica algo más que enviar datos entre dos puntos. Los sistemas pueden usar identificadores, formatos y tiempos de respuesta distintos. Una capa de middleware organiza esa comunicación, transforma mensajes y define cómo manejar errores. Su diseño debe conservar trazabilidad para saber qué operación llegó, qué se procesó y qué quedó pendiente.",
      "benefits": "Centralizar reglas de integración evita repetir mapeos en cada aplicación. Las colas y los reintentos permiten manejar interrupciones con un proceso definido. Un registro de transacciones facilita investigar diferencias y conciliar el estado de los sistemas conectados.",
      "example": "Por ejemplo, una venta confirmada en una plataforma puede generar un evento para actualizar inventario y preparar documentación en el ERP. Si un destino no responde, el mensaje queda pendiente y se reintenta según reglas acordadas, evitando crear operaciones duplicadas.",
      "implementation": "Mapeamos los sistemas, los contratos de datos y los identificadores compartidos. Definimos entrega, reintentos y manejo de duplicados. Probamos cambios de formato, fallas y recuperación, y entregamos monitoreo para seguir las operaciones de extremo a extremo."
    },
    "en": {
      "name": "Middleware & Systems Integration",
      "tag": "Cloud & IT Operations",
      "description": "Connectors, event buses, and integration layers to connect different systems, ERPs, APIs, and databases.",
      "features": [
        "Event-driven architectures with Kafka and RabbitMQ",
        "Unified REST and GraphQL APIs over legacy systems",
        "Real-time data mapping and transformation between systems",
        "Queue management, retries, and fault tolerance",
        "Transaction monitoring and message auditing"
      ],
      "intro": "Connecting applications involves more than sending data between two points. Systems may use different identifiers, formats, and response times. Middleware organizes communication, transforms messages, and defines error handling. Its design must preserve traceability so staff can identify which operations arrived, were processed, or remain pending.",
      "benefits": "Central integration rules prevent repeated mappings across applications. Queues and retries handle interruptions through a defined process. Transaction records make differences easier to investigate and help reconcile the state of connected systems.",
      "example": "For example, a confirmed sale can generate an event to update inventory and prepare documents in an ERP. If a destination does not respond, the message remains pending and is retried under agreed rules, avoiding duplicate transactions.",
      "implementation": "We map systems, data contracts, and shared identifiers. We define delivery, retries, and duplicate handling. We test format changes, failures, and recovery, and provide monitoring for following operations from end to end."
    }
  },
  {
    "num": "34",
    "slug": "sistemas-bajo-demanda",
    "es": {
      "name": "Sistemas Bajo Demanda",
      "tag": "Procesos y Automatización de Negocio",
      "description": "¿Necesitas una solución personalizada — rápido? Arquitectamos y entregamos sistemas adaptados a tus requisitos y plazos.",
      "features": [
        "Prototipado rápido y entrega de MVPs",
        "Arquitectura de microservicios y serverless",
        "Ingeniería de plataformas SaaS",
        "Diseño API-first y GraphQL",
        "Configuración de DevOps y pipelines CI/CD"
      ],
      "intro": "Un sistema a medida parte de una necesidad que las herramientas actuales no resuelven bien. Definir una primera versión útil requiere separar lo esencial de lo que puede esperar, conocer a los usuarios y entender las integraciones. El desarrollo bajo demanda organiza ese recorrido con entregas que permiten validar el proceso antes de ampliar el alcance.",
      "benefits": "Un alcance inicial claro ayuda a poner a prueba el valor del sistema con una inversión controlada. Los prototipos permiten revisar recorridos y detectar requisitos faltantes. Una arquitectura adaptada al proyecto facilita incorporar funciones cuando exista evidencia de que la operación las necesita.",
      "example": "Por ejemplo, una empresa puede necesitar un portal para recibir solicitudes y asignarlas a su equipo. La primera versión registra casos, responsables y estados. Los usuarios prueban el flujo y aportan comentarios antes de incorporar reportes o nuevas integraciones.",
      "implementation": "Definimos usuarios, prioridades y criterios de aceptación. Preparamos un prototipo y planificamos entregas verificables, con pruebas e integración progresiva. Documentamos funcionamiento y mantenimiento para que el equipo pueda operar el sistema y decidir sus siguientes mejoras."
    },
    "en": {
      "name": "Custom On-Demand Systems",
      "tag": "Business Processes & Automation",
      "description": "We design and deliver custom systems adapted to your requirements, priorities, and timeline.",
      "features": [
        "Rapid prototyping and minimum viable product (MVP) delivery",
        "Microservice and serverless architecture",
        "Software as a service (SaaS) platform engineering",
        "API-first and GraphQL design",
        "DevOps setup and CI/CD pipelines"
      ],
      "intro": "A custom system starts with a need that current tools do not address well. Defining a useful first version means separating essentials from later work, understanding users, and identifying integrations. On-demand development organizes this journey through releases that validate the workflow before expanding scope.",
      "benefits": "Clear initial scope helps test system value with a controlled investment. Prototypes make journeys reviewable and expose missing requirements. Architecture suited to the project supports new features when there is evidence that operations need them.",
      "example": "For example, a company may need a portal for receiving requests and assigning them to staff. The first version records cases, owners, and statuses. Users test the workflow and provide feedback before reports or additional integrations are added.",
      "implementation": "We define users, priorities, and acceptance criteria. We prepare a prototype and plan verifiable releases with testing and progressive integration. We document operation and maintenance so the team can run the system and choose its next improvements."
    }
  },
  {
    "num": "35",
    "slug": "automatizacion-empresarial-rpa",
    "es": {
      "name": "Automatización Empresarial (RPA)",
      "tag": "Procesos y Automatización de Negocio",
      "description": "Automatizamos flujos de trabajo repetitivos, integración de sistemas y procesos manuales con bots RPA y orquestadores modernos.",
      "features": [
        "Bots de automatización de tareas administrativas y financieras",
        "Extracción y procesamiento inteligente de facturas y documentos",
        "Sincronización automática entre ERPs, CRMs y bancos",
        "Workflows impulsados por eventos y webhooks en tiempo real",
        "Trazabilidad y monitoreo continuo de ejecuciones"
      ],
      "intro": "La automatización robótica de procesos puede ejecutar tareas repetitivas que hoy realiza una persona en aplicaciones, documentos o portales. Su diseño necesita reglas claras y una forma de tratar excepciones. Antes de construir un bot, conviene revisar si el flujo puede simplificarse o integrarse mediante una API, para elegir una solución que sea mantenible.",
      "benefits": "Una ejecución trazable permite revisar resultados y dedicar atención a los casos que salen de las reglas. La automatización puede reducir captura repetida de información y preparar datos para validación. Mantener controles y responsables evita que una tarea automática avance sin supervisión cuando cambian las condiciones.",
      "example": "Por ejemplo, un equipo administrativo puede extraer campos de facturas y preparar registros para conciliación. Los documentos con datos faltantes se envían a revisión. Una persona confirma los casos que requieren validación antes de que el flujo continúe con acciones autorizadas.",
      "implementation": "Mapeamos pasos, aplicaciones y permisos, y definimos las excepciones. Probamos la automatización con ejemplos reales y condiciones de falla. Entregamos registros, alertas y procedimientos de mantenimiento para responder cuando cambian interfaces, formatos o reglas del proceso."
    },
    "en": {
      "name": "Business Automation (RPA)",
      "tag": "Business Processes & Automation",
      "description": "We automate repetitive workflows, system integrations, and manual processes with software bots and orchestration tools.",
      "features": [
        "Automation bots for administrative and financial tasks",
        "Invoice and document extraction and processing",
        "Synchronization between ERPs, CRMs, and banking systems",
        "Event-driven workflows and webhooks",
        "Execution traceability and continuous monitoring"
      ],
      "intro": "Robotic process automation can perform repetitive tasks currently carried out by people across applications, documents, and portals. It needs clear rules and an approach to exceptions. Before building a bot, teams should consider whether the workflow can be simplified or connected through an API to choose a maintainable solution.",
      "benefits": "Traceable execution makes results reviewable and directs attention to cases outside the rules. Automation can reduce repeated data entry and prepare information for validation. Controls and assigned owners prevent automatic tasks from proceeding unsupervised when conditions change.",
      "example": "For example, an administrative team can extract invoice fields and prepare reconciliation records. Documents with missing information go to review. A person confirms cases requiring validation before the workflow continues with authorized actions.",
      "implementation": "We map steps, applications, and permissions and define exceptions. We test automation against real examples and failure conditions. We provide logs, alerts, and maintenance procedures for responding when interfaces, formats, or process rules change."
    }
  },
  {
    "num": "36",
    "slug": "operaciones-negocios-bpm",
    "es": {
      "name": "Operaciones de Negocios (BPM)",
      "tag": "Procesos y Automatización de Negocio",
      "description": "Diseño, digitalización y optimización de flujos operativos empresariales (BPM) para aumentar la eficiencia y reducir cuellos de botella.",
      "features": [
        "Mapeo y rediseño de procesos de negocio (BPMN 2.0)",
        "Portales de autoservicio y aprobaciones multinivel",
        "Dashboards de cuellos de botella y tiempos de ciclo (SLA)",
        "Gestión documental y firma digital integrada",
        "Integración con sistemas de contabilidad y recursos humanos"
      ],
      "intro": "Digitalizar un proceso requiere entender quién participa, qué información necesita y qué condiciones permiten avanzar. La gestión de procesos de negocio organiza ese recorrido y hace visibles responsabilidades, estados y aprobaciones. El objetivo es mejorar la operación con un flujo comprensible, antes de trasladar sus pasos a formularios y automatizaciones.",
      "benefits": "Un proceso documentado permite revisar dónde se acumulan pendientes y qué tareas generan esperas. Los estados compartidos facilitan seguimiento sin consultas repetidas por correo. Medir tiempos de ciclo ayuda a evaluar cambios y a distinguir entre una mejora real y un traslado del cuello de botella.",
      "example": "Por ejemplo, una empresa puede organizar solicitudes internas con aprobación por área y responsable. Cada solicitud muestra su estado y los documentos necesarios. El equipo analiza tiempos por etapa y ajusta el recorrido cuando identifica aprobaciones que no aportan una revisión útil.",
      "implementation": "Mapeamos el proceso actual con quienes lo ejecutan y acordamos una versión mejorada. Definimos roles, documentos, excepciones e indicadores. Implementamos el flujo por etapas y validamos casos completos antes de incorporar nuevas automatizaciones o integraciones."
    },
    "en": {
      "name": "Business Process Management (BPM)",
      "tag": "Business Processes & Automation",
      "description": "Business process design, digitization, and optimization to improve efficiency and reduce bottlenecks.",
      "features": [
        "Business process mapping and redesign with BPMN 2.0",
        "Self-service portals and multi-level approvals",
        "Bottleneck and cycle-time dashboards",
        "Document management and digital signature integration",
        "Integration with accounting and human resources systems"
      ],
      "intro": "Digitizing a process requires understanding who participates, which information they need, and which conditions allow progress. Business process management organizes that journey and makes responsibilities, statuses, and approvals visible. The goal is an understandable workflow before its steps are converted into forms and automation.",
      "benefits": "Documented processes reveal where work accumulates and which tasks cause delays. Shared statuses support follow-up without repeated email inquiries. Cycle-time measurement helps evaluate changes and distinguish actual improvements from bottlenecks shifted elsewhere.",
      "example": "For example, a company can organize internal requests with department and owner approvals. Each request displays its status and required documents. Staff analyze time by stage and adjust the journey when an approval does not provide a useful review.",
      "implementation": "We map the current process with its participants and agree on an improved version. We define roles, documents, exceptions, and indicators. We implement in stages and validate complete cases before adding further automation or integrations."
    }
  },
  {
    "num": "37",
    "slug": "gestion-activos-ti",
    "es": {
      "name": "Gestión de Activos de TI",
      "tag": "Procesos y Automatización de Negocio",
      "description": "Sistemas centralizados para inventario, ciclo de vida, licencias, mantenimiento y auditoría de activos tecnológicos y empresariales.",
      "features": [
        "Inventario automatizado de hardware, servidores y dispositivos",
        "Control de licencias de software y fechas de renovación",
        "Historial de mantenimiento, garantías y depreciación contable",
        "Códigos QR / RFID y asignación a empleados por departamento",
        "Auditorías de cumplimiento y reportes de seguridad"
      ],
      "intro": "Un inventario de activos aporta valor cuando refleja el recorrido de cada equipo y su relación con la organización. La gestión de activos de TI conecta identificación, ubicación, asignación y mantenimiento con licencias y documentos. Mantener esa información actualizada requiere un proceso definido para registrar entregas, cambios y retiros, no solo una lista inicial de dispositivos.",
      "benefits": "Los registros compartidos facilitan conocer qué equipos están disponibles y quién los tiene asignados. El seguimiento de renovaciones y mantenimiento permite planear tareas y presupuesto. Un historial documentado ayuda a revisar diferencias de inventario y preparar auditorías con información rastreable.",
      "example": "Por ejemplo, una empresa puede registrar un portátil, asignarlo a un colaborador y conservar su acta de entrega. Cuando cambia de área, actualiza la asignación. Si requiere reparación, el equipo consulta garantía y mantenimiento antes de decidir el siguiente paso.",
      "implementation": "Definimos tipos de activo, identificadores y estados del ciclo de vida. Consolidamos inventarios y configuramos roles, documentos y recordatorios. Probamos asignaciones, devoluciones y retiros para que el registro digital corresponda a los movimientos reales de los equipos."
    },
    "en": {
      "name": "IT Asset Management",
      "tag": "Business Processes & Automation",
      "description": "Centralized inventory, lifecycle, license, maintenance, and audit management for technology and business assets.",
      "features": [
        "Hardware, server, and device inventory",
        "Software license and renewal date tracking",
        "Maintenance, warranty, and accounting depreciation history",
        "QR/RFID identifiers and employee assignment by department",
        "Compliance audits and security reports"
      ],
      "intro": "An asset inventory is valuable when it reflects each device’s journey and relationship with the organization. IT asset management connects identification, location, assignment, and maintenance with licenses and documents. Keeping it current requires a defined process for deliveries, changes, and retirement, rather than just an initial device list.",
      "benefits": "Shared records help identify available equipment and assigned users. Renewal and maintenance tracking supports task and budget planning. Documented history makes inventory differences reviewable and helps prepare audits with traceable information.",
      "example": "For example, a company can register a laptop, assign it to an employee, and keep its delivery record. When the employee changes departments, the assignment is updated. If a repair is needed, staff consult warranty and maintenance records before deciding the next step.",
      "implementation": "We define asset types, identifiers, and lifecycle states. We consolidate inventories and configure roles, documents, and reminders. We test assignments, returns, and retirement so digital records match actual equipment movements."
    }
  }
]
