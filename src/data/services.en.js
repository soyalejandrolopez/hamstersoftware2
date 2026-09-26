// ============================================================
// SERVICES (ENGLISH) — 22 services in 5 categories.
// ============================================================

export const serviceCategoriesEn = [
  {
    id: 'datos-ia',
    name: 'Data & Artificial Intelligence',
    description:
      'From data pipelines to predictive machine learning: the core analytical backbone of your enterprise.',
    icon: 'chart',
    services: [
      {
        num: '01',
        name: 'Data Engineering',
        description:
          'We architect and deploy robust, high-throughput data pipelines that serve as the foundation of your data strategy.',
        bullets: [
          'Design and implementation of data pipelines',
          'Real-time streaming and batch processing',
          'Cloud data warehouse migration (Snowflake, BigQuery)',
          'Integration with Apache Spark and Kafka',
          'Data governance and quality assurance frameworks',
        ],
      },
      {
        num: '02',
        name: 'Data Extraction & ETL',
        description:
          'We extract data from any source and transform it into clean, structured formats ready for enterprise analytics.',
        bullets: [
          'Multi-source data ingestion and normalization',
          'REST API and webhook integration',
          'Legacy database and ERP migrations',
          'Incremental and full-load extraction strategies',
          'Automated scheduling, monitoring, and alerts',
        ],
      },
      {
        num: '03',
        name: 'Data Visualization & BI',
        description:
          'We turn complex datasets into clear, compelling dashboards that empower leadership to make swift, evidence-based decisions.',
        bullets: [
          'Interactive dashboards (Tableau, Power BI, custom D3.js)',
          'Automated executive reporting suites',
          'Real-time KPI and operational metrics monitoring',
          'Custom charting and visual analytics components',
          'Geospatial mapping and network visualizations',
        ],
      },
      {
        num: '04',
        name: 'Data Mining & Management',
        description:
          'We uncover hidden trends and patterns in your data with mining and management solutions that grant total clarity.',
        bullets: [
          'Pattern discovery and anomaly detection',
          'Customer clustering and behavioral segmentation',
          'Churn prediction and lifetime value modeling',
          'Enterprise metadata catalogs and data lineage',
          'Master Data Management (MDM) architecture',
        ],
      },
      {
        num: '05',
        name: 'Predictive Analytics',
        description:
          'We build machine learning forecasting models that predict market shifts, customer behavior, and demand trends.',
        bullets: [
          'Time series forecasting and demand planning',
          'Risk scoring and algorithmic fraud detection',
          'Predictive equipment maintenance algorithms',
          'Dynamic pricing optimization engines',
          'A/B testing analytics and causal inference',
        ],
      },
    ],
  },
  {
    id: 'ia-generativa',
    name: 'Generative AI & LLMs',
    description:
      'Integrate Large Language Models and intelligent agents directly into your workflows to automate decisions.',
    icon: 'sparkles',
    services: [
      {
        num: '06',
        name: 'Custom LLM Solutions',
        description:
          'We fine-tune and deploy proprietary language models tailored to your company documentation, vocabulary, and compliance.',
        bullets: [
          'Domain-specific fine-tuning (LoRA, QLoRA)',
          'Retrieval-Augmented Generation (RAG) architecture',
          'Enterprise vector database integration (Pinecone, Qdrant, pgvector)',
          'AI safety, guardrails, and compliance governance',
          'Private, on-premises or VPC LLM hosting',
        ],
      },
      {
        num: '07',
        name: 'Conversational Agents & Chatbots',
        description:
          'Smart conversational bots that understand context, access your internal data, and resolve customer requests 24/7.',
        bullets: [
          'Multi-channel AI assistants (Web, WhatsApp, Slack, Teams)',
          'Transactional agents connected to internal APIs and ERPs',
          'Sentiment analysis and intelligent human escalation',
          'Multi-language conversational support',
          'Voice integration with speech-to-text and text-to-speech',
        ],
      },
      {
        num: '08',
        name: 'Workflow AI Automation',
        description:
          'We automate repetitive cognitive work — such as document review, classification, and summarization — using AI.',
        bullets: [
          'Automated invoice, contract, and document parsing',
          'Intelligent email triaging and response generation',
          'Automated code reviews and synthetic data generation',
          'Multi-agent collaborative orchestration frameworks',
          'End-to-end human-in-the-loop validation pipelines',
        ],
      },
      {
        num: '09',
        name: 'Computer Vision & Multimodal AI',
        description:
          'We build visual intelligence models to analyze images, videos, and scanned documents with human-level accuracy.',
        bullets: [
          'Object detection and visual quality control',
          'Document OCR and identity verification',
          'Facial recognition and biometric access control',
          'Medical imaging and anomaly identification',
          'Video analytics for physical retail and surveillance',
        ],
      },
    ],
  },
  {
    id: 'web-movil',
    name: 'Web & Mobile Development',
    description:
      'High-performance web platforms and native mobile applications crafted to scale alongside your user base.',
    icon: 'globe',
    services: [
      {
        num: '10',
        name: 'Full-Stack Web Applications',
        description:
          'Custom web platforms built with modern architectures — React, Next.js, Node.js, Python, and scalable cloud databases.',
        bullets: [
          'Single Page Applications (SPA) and Server-Side Rendering (SSR)',
          'Robust RESTful and GraphQL API backends',
          'Multi-tenant database architectures',
          'Role-Based Access Control (RBAC) and OAuth2/SSO authentication',
          'Stripe, PayU, and regional payment gateway integrations',
        ],
      },
      {
        num: '11',
        name: 'Mobile Apps (iOS & Android)',
        description:
          'Fast, fluid mobile applications developed with React Native and Flutter, providing native speed and exceptional UX.',
        bullets: [
          'Cross-platform development for iOS and Android',
          'Offline-first architecture with local SQLite/WatermelonDB sync',
          'Push notifications and deep-linking integrations',
          'Camera, GPS, Bluetooth, and biometric sensor access',
          'Full App Store and Google Play publication management',
        ],
      },
      {
        num: '12',
        name: 'E-commerce & Marketplaces',
        description:
          'High-converting digital commerce platforms, multi-vendor marketplaces, and custom checkout flows.',
        bullets: [
          'Multi-vendor marketplace infrastructure and seller dashboards',
          'Real-time inventory and supply-chain management',
          'Automated shipping carrier and logistics integrations',
          'Conversion-rate-optimized (CRO) checkout experiences',
          'Headless commerce solutions (Shopify Storefront, Medusa.js)',
        ],
      },
      {
        num: '13',
        name: 'Progressive Web Apps (PWA)',
        description:
          'Web applications that deliver app-like offline performance, home-screen installation, and lightning-fast loading.',
        bullets: [
          'Installable across iOS, Android, macOS, and Windows',
          'Service Workers with smart caching strategies',
          'Offline capabilities and background background data sync',
          'Push notifications directly through the browser',
          'Lighthouse scores consistently above 95 in performance',
        ],
      },
      {
        num: '14',
        name: 'Custom UI/UX & Design Systems',
        description:
          'User-centered product design, interactive prototypes, and production design systems that unify your digital identity.',
        bullets: [
          'Comprehensive user research and journey mapping',
          'Figma component libraries and design tokens',
          'Accessible interfaces compliant with WCAG 2.1 AA',
          'Micro-interactions and motion design for engagement',
          'Component libraries built in React and Tailwind CSS',
        ],
      },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps',
    description:
      'Reliable, automated cloud architectures that guarantee 99.9% uptime, zero-downtime deployments, and ironclad security.',
    icon: 'server',
    services: [
      {
        num: '15',
        name: 'Cloud Architecture & Migration',
        description:
          'We migrate and architect enterprise workloads on AWS, Google Cloud, and Azure, optimizing costs and reliability.',
        bullets: [
          'Assessment and cost optimization (FinOps)',
          'Migration from on-premises servers to cloud environments',
          'Serverless and containerized microservice architectures',
          'Multi-region redundancy and disaster recovery plans',
          'Infrastructure as Code (IaC) with Terraform and Pulumi',
        ],
      },
      {
        num: '16',
        name: 'CI/CD & DevOps Automation',
        description:
          'Automated continuous integration and deployment pipelines that empower your team to ship code safely multiple times a day.',
        bullets: [
          'Automated deployment pipelines (GitHub Actions, GitLab CI)',
          'Zero-downtime releases (blue-green and canary strategies)',
          'Automated testing suites and static code analysis',
          'Container orchestration using Kubernetes and Docker Swarm',
          'Secret management and compliance scanning in CI/CD',
        ],
      },
      {
        num: '17',
        name: 'Database Optimization & Scaling',
        description:
          'Tuning, sharding, replication, and high-availability clustering for PostgreSQL, MySQL, Redis, and MongoDB.',
        bullets: [
          'Slow query profiling, indexing, and execution plan audits',
          'Read/write replication and automatic failover clustering',
          'Database partitioning and connection pooling (PgBouncer)',
          'Automated backup verification and point-in-time recovery',
          'Zero-downtime schema migrations for high-traffic apps',
        ],
      },
      {
        num: '18',
        name: 'Application Performance & Monitoring',
        description:
          'Comprehensive observability stacks to monitor metrics, logs, and distributed traces, catching bottlenecks instantly.',
        bullets: [
          'Full-stack APM implementation (Datadog, New Relic, Grafana)',
          'Distributed tracing with OpenTelemetry',
          'Centralized logging solutions (Elasticsearch, Loki)',
          'Proactive alerts via Slack, PagerDuty, and email',
          'Web Vitals optimization and frontend performance tuning',
        ],
      },
    ],
  },
  {
    id: 'negocio-procesos',
    name: 'Business Automation & Integration',
    description:
      'Unify your digital ecosystem: connecting ERPs, CRMs, APIs, and custom software to eliminate manual data entry.',
    icon: 'layers',
    services: [
      {
        num: '19',
        name: 'API Design & Systems Integration',
        description:
          'We build robust, documented API gateways that connect your disparate enterprise software into a synchronized ecosystem.',
        bullets: [
          'RESTful and GraphQL API design following OpenAPI/Swagger',
          'Enterprise Service Bus (ESB) and event-driven architectures',
          'Legacy ERP integrations (SAP, Oracle, Siigo, World Office)',
          'Webhook infrastructure with exponential backoff retries',
          'API rate limiting, caching, and developer portals',
        ],
      },
      {
        num: '20',
        name: 'CRM & ERP Custom Implementation',
        description:
          'Custom deployments, customizations, and extensions for Odoo, Salesforce, HubSpot, and bespoke operational systems.',
        bullets: [
          'Odoo module development and Python customizations',
          'Automated sales, invoicing, and inventory pipelines',
          'Bi-directional sync between CRM, ecommerce, and ERP',
          'Role-based permissions and audit logging',
          'Data cleansing and legacy migration to new systems',
        ],
      },
      {
        num: '21',
        name: 'Robotic Process Automation (RPA)',
        description:
          'Software bots that automate tedious repetitive tasks across desktop applications, portals, and spreadsheets.',
        bullets: [
          'Web scraping and automated data entry bots',
          'PDF extraction and cross-system reconciliation',
          'Automated report generation and distribution',
          'Integration with legacy software lacking modern APIs',
          'Exception handling and audit trail reporting',
        ],
      },
      {
        num: '22',
        name: 'Technical Consulting & Architecture Audits',
        description:
          'Expert senior architectural reviews to assess code quality, scalability, security vulnerabilities, and technology roadmaps.',
        bullets: [
          'Comprehensive codebase and architecture health checks',
          'Security posture and OWASP vulnerability assessments',
          'Technology stack selection and digital modernization plans',
          'CTO-as-a-Service and engineering leadership advisory',
          'Technical Due Diligence for funding and acquisitions',
        ],
      },
    ],
  },
]
