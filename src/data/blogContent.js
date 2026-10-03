// Contenido editorial bilingüe. Los ejemplos describen escenarios posibles.
// Añade nuevos artículos con el mismo slug que su resumen en solutions.js.
import { serviceArticles } from './serviceArticles'

export const blogContent = {
  ...Object.fromEntries(serviceArticles.map(({ slug, es, en }) => [slug, { es, en }])),
  'vulnerabilidades': {
    es: {
      intro: 'Una aplicación puede funcionar correctamente y aun así dejar expuestos datos, cuentas o procesos importantes. Las auditorías de seguridad y las pruebas de penetración ayudan a entender esas debilidades antes de que se conviertan en incidentes. El objetivo es pasar de una lista de hallazgos a un plan de corrección que el equipo pueda ejecutar y verificar.',
      features: [
        'Revisión de aplicaciones, configuraciones y controles de acceso dentro de un alcance acordado con la organización.',
        'Pruebas de penetración autorizadas para evaluar el impacto de las vulnerabilidades en escenarios controlados.',
        'Informe con evidencias, prioridades y recomendaciones de corrección, seguido de una validación de los cambios.',
      ],
      benefits: 'Priorizar por impacto permite dedicar esfuerzo a los riesgos que afectan de forma más directa al negocio. Un informe comprensible conecta los hallazgos técnicos con las decisiones de quienes gestionan el producto. La revisión posterior ayuda a comprobar que la corrección resuelve el problema y no se limita a ocultarlo.',
      example: 'Por ejemplo, una tienda en línea puede revisar el acceso a pedidos, la administración de usuarios y sus integraciones de pago antes de lanzar una nueva versión. El equipo recibe tareas concretas para corregir permisos o configuraciones y puede repetir las pruebas sobre el entorno actualizado.',
      implementation: 'Empezamos definiendo los activos, los permisos de prueba y las condiciones de trabajo. Después documentamos los hallazgos y acompañamos su corrección. El alcance y el calendario se ajustan a la operación para que el proceso de evaluación sea útil tanto para desarrollo como para la dirección.',
    },
    en: {
      intro: 'An application can work as expected while still exposing important data, accounts, or business processes. Security audits and penetration tests help teams understand those weaknesses before they become incidents. The goal is to move from a list of findings to a remediation plan that the team can carry out and verify.',
      features: [
        'Review of applications, configurations, and access controls within a scope agreed with the organization.',
        'Authorized penetration tests to assess the impact of vulnerabilities in controlled scenarios.',
        'A report with evidence, priorities, and remediation recommendations, followed by validation of the changes.',
      ],
      benefits: 'Prioritizing by impact helps teams focus on the risks that matter most to the business. A clear report connects technical findings with decisions made by product owners and managers. Follow-up testing helps confirm that a fix addresses the underlying issue rather than simply hiding its symptoms.',
      example: 'For example, an online store can review order access, user administration, and payment integrations before releasing a new version. Its team receives specific tasks to correct permissions or configurations and can repeat the tests against the updated environment.',
      implementation: 'We begin by defining the assets, testing authorization, and working conditions. We then document findings and support remediation. The scope and schedule are adapted to daily operations so that the assessment is useful to both the development team and business leadership.',
    },
  },
  'monitoreo-sismico': {
    es: {
      intro: 'Una red de estaciones sísmicas produce señales que necesitan contexto para ser útiles. Reunirlas en una plataforma permite ver el estado de los equipos, consultar registros y analizar actividad desde un mismo lugar. La calidad de la información depende tanto de los sensores como de la sincronización, la conectividad y la forma de presentar los datos.',
      features: [
        'Recepción de datos de estaciones conectadas, con identificación de origen, ubicación y marcas de tiempo.',
        'Visualización de señales y mapas para explorar registros recientes y consultar el historial de actividad.',
        'Avisos configurables sobre eventos registrados, pérdida de conexión o condiciones que requieren revisión.',
      ],
      benefits: 'Un panel central facilita distinguir una señal registrada de una estación desconectada. Mantener el historial permite comparar períodos y compartir información entre equipos de análisis. Los avisos operativos ayudan a detectar problemas en la red para que las decisiones se basen en registros cuyo estado sea conocido.',
      example: 'Por ejemplo, un grupo de investigación puede reunir estaciones distribuidas en varias localidades y consultar sus señales desde una sala de monitoreo. Cuando una estación deja de transmitir, la plataforma señala la interrupción y conserva los registros disponibles para su revisión posterior.',
      implementation: 'Definimos los formatos de datos y los protocolos de cada estación, revisamos la sincronización y acordamos cómo manejar las interrupciones. La plataforma se orienta a monitoreo y análisis de registros; las alertas públicas requieren procesos de validación y coordinación específicos con las entidades responsables.',
    },
    en: {
      intro: 'A seismic station network produces signals that need context to be useful. Bringing them into one platform makes it possible to check equipment status, consult records, and analyze activity in a single place. Information quality depends on sensors, time synchronization, connectivity, and the way the data is presented.',
      features: [
        'Data collection from connected stations, including source identification, location, and timestamps.',
        'Signal and map views for exploring recent records and reviewing historical activity.',
        'Configurable notices about recorded events, connection loss, or conditions that require investigation.',
      ],
      benefits: 'A central dashboard makes it easier to distinguish a recorded signal from a disconnected station. Historical records allow teams to compare periods and share information with analysts. Operational notices help detect network problems so that decisions rely on records whose status is understood.',
      example: 'For example, a research group can bring together stations across several locations and inspect their signals from a monitoring room. When a station stops transmitting, the platform flags the interruption and keeps available records accessible for later review.',
      implementation: 'We define each station’s data formats and protocols, check synchronization, and agree on how to handle interruptions. The platform supports monitoring and record analysis; public warning systems require dedicated validation processes and coordination with the responsible authorities.',
    },
  },
  'resultados-deportivos': {
    es: {
      intro: 'En una liga o un torneo, el marcador es solo una parte de la información que necesitan aficionados y organizadores. También importan el calendario, el estado del partido y las estadísticas. Una plataforma live score reúne estos elementos y establece un flujo claro para publicar novedades sin depender de mensajes dispersos o actualizaciones manuales en varias páginas.',
      features: [
        'Gestión de ligas, equipos, encuentros y calendarios con estados como programado, en juego y finalizado.',
        'Actualización de marcadores y eventos del partido desde operadores autorizados o fuentes de datos integradas.',
        'Consulta de estadísticas y notificaciones configurables para seguir equipos, encuentros o competiciones.',
      ],
      benefits: 'Centralizar los datos evita que distintas pantallas muestren versiones contradictorias de un resultado. El público encuentra información en un mismo sitio y la organización conserva un registro de las actualizaciones. Definir quién puede publicar y corregir resultados mejora el control durante jornadas con varios encuentros simultáneos.',
      example: 'Por ejemplo, un torneo local puede asignar un operador a cada cancha. Los operadores registran puntos y finalizan los partidos mientras los aficionados consultan el tablero desde el móvil. La coordinación revisa los resultados antes de confirmar la clasificación de la siguiente fase.',
      implementation: 'Acordamos las reglas del deporte, las fuentes disponibles y la frecuencia de actualización. Diseñamos el flujo de captura, corrección y publicación, y probamos la experiencia en días de mayor tráfico. Las estadísticas y las clasificaciones se adaptan al formato de cada competición.',
    },
    en: {
      intro: 'In a league or tournament, the score is only part of what fans and organizers need to know. Schedules, match status, and statistics also matter. A live score platform brings these elements together and creates a clear publishing workflow, removing the need to coordinate scattered messages or manually update several different pages.',
      features: [
        'Management of leagues, teams, fixtures, and schedules with states such as scheduled, live, and finished.',
        'Score and match event updates from authorized operators or integrated data sources.',
        'Statistics and configurable notifications for following teams, matches, or competitions.',
      ],
      benefits: 'Centralizing data helps prevent different screens from displaying conflicting results. Fans find information in one place, while organizers keep a record of updates. Defining who can publish and correct results improves control on match days with several games taking place at once.',
      example: 'For example, a local tournament can assign an operator to each court. Operators record points and finish matches while fans check the scoreboard on their phones. The coordination team reviews the results before confirming standings for the next stage.',
      implementation: 'We agree on the sport’s rules, available sources, and update frequency. We design the capture, correction, and publishing workflow, then test the experience under expected peak traffic. Statistics and standings are adapted to the format of each competition.',
    },
  },
  'analisis-ventas': {
    es: {
      intro: 'Los datos de ventas suelen estar repartidos entre hojas de cálculo, sistemas comerciales y reportes contables. Un dashboard aporta valor cuando reúne información consistente y responde preguntas concretas: qué se vende, dónde cambia el margen y qué clientes vuelven a comprar. Antes de dibujar gráficos, es necesario acordar cómo se calcula cada indicador y qué decisiones ayudará a tomar.',
      features: [
        'Integración de fuentes de ventas y limpieza de registros para trabajar con datos comparables.',
        'Indicadores de ingresos, márgenes, productos y clientes con filtros por período, canal o equipo.',
        'Reportes y vistas por rol para que cada área consulte las métricas relevantes para su trabajo.',
      ],
      benefits: 'Compartir definiciones reduce discusiones sobre cifras que provienen de cálculos diferentes. Los equipos pueden identificar tendencias, revisar desviaciones y preparar reuniones con información disponible. Un tablero bien diseñado ayuda a formular preguntas y a contrastar decisiones con datos, en lugar de limitarse a mostrar números.',
      example: 'Por ejemplo, una distribuidora puede comparar ventas y margen por categoría. Si una línea factura más pero deja menos margen, el equipo puede revisar descuentos, costos y mezcla de productos antes de decidir cómo ajustar su estrategia comercial.',
      implementation: 'Empezamos por las preguntas del negocio, inventariamos las fuentes y documentamos las métricas. Construimos una primera versión con los indicadores esenciales y validamos sus resultados contra registros conocidos. Después incorporamos vistas y actualizaciones según las necesidades reales de la operación.',
    },
    en: {
      intro: 'Sales data is often scattered across spreadsheets, commercial systems, and accounting reports. A dashboard is useful when it brings together consistent information and answers concrete questions: what sells, where margins change, and which customers return. Before drawing charts, teams need to agree on how each metric is calculated and which decisions it will support.',
      features: [
        'Sales source integration and record cleaning to make data comparable across systems.',
        'Revenue, margin, product, and customer metrics with filters by period, channel, or team.',
        'Reports and role-specific views so each department can access metrics relevant to its work.',
      ],
      benefits: 'Shared definitions reduce disagreements over figures produced by different calculations. Teams can identify trends, investigate changes, and prepare meetings with information at hand. A well-designed dashboard helps people ask questions and check decisions against data rather than simply displaying numbers.',
      example: 'For example, a distributor can compare sales and margins by category. If a product line generates more revenue but less margin, the team can review discounts, costs, and the product mix before deciding how to adjust its commercial strategy.',
      implementation: 'We start with business questions, inventory the data sources, and document metric definitions. We build an initial version with essential indicators and validate results against known records. Additional views and update schedules follow the operation’s actual needs.',
    },
  },
  'radio-streaming': {
    es: {
      intro: 'Una emisora digital necesita que el audio llegue a sus oyentes de forma estable y que el equipo pueda gestionar la programación. La infraestructura de streaming conecta la producción de sonido con servidores de distribución y reproductores. Diseñar este recorrido permite planear capacidad, observar interrupciones y organizar tanto emisiones en directo como contenidos bajo demanda.',
      features: [
        'Recepción y distribución de audio en vivo con reproductores integrables en páginas web.',
        'Organización de programación, archivos de audio y contenidos bajo demanda según el flujo de la emisora.',
        'Monitoreo del servicio, conexiones y disponibilidad para detectar incidencias de transmisión.',
      ],
      benefits: 'Separar la producción de la distribución permite revisar cada parte del servicio con claridad. La emisora puede conocer el comportamiento de sus conexiones y planear recursos para eventos especiales. Contar con procedimientos de recuperación ayuda a responder cuando falla la fuente de audio o un componente de la infraestructura.',
      example: 'Por ejemplo, una radio comunitaria puede transmitir su programación en directo desde el estudio y publicar entrevistas para escucharlas después. Durante una cobertura especial, el equipo revisa el estado del streaming y verifica que el reproductor web recibe la señal prevista.',
      implementation: 'Revisamos las fuentes de audio, la audiencia esperada, los formatos y la conectividad. Configuramos el entorno, probamos la reproducción en distintos dispositivos y acordamos monitoreo y recuperación. Los objetivos de disponibilidad se definen junto con la capacidad y los recursos del proyecto.',
    },
    en: {
      intro: 'A digital radio station needs audio to reach listeners reliably and a manageable programming workflow for its team. Streaming infrastructure connects sound production to distribution servers and players. Designing this path makes it possible to plan capacity, observe interruptions, and organize both live broadcasts and on-demand content.',
      features: [
        'Live audio ingestion and distribution with players that can be embedded in websites.',
        'Organization of schedules, audio files, and on-demand content around the station’s workflow.',
        'Service, connection, and availability monitoring to help detect broadcasting incidents.',
      ],
      benefits: 'Separating production from distribution makes each part of the service easier to inspect. A station can understand connection patterns and plan resources for special events. Recovery procedures help the team respond when an audio source or an infrastructure component fails.',
      example: 'For example, a community station can broadcast live from its studio and publish interviews for later listening. During special coverage, the team checks the streaming service and verifies that the web player is receiving the intended signal.',
      implementation: 'We review audio sources, expected audience, formats, and connectivity. We configure the environment, test playback on different devices, and agree on monitoring and recovery procedures. Availability objectives are defined alongside the project’s capacity and resources.',
    },
  },
  'telemedicina': {
    es: {
      intro: 'Una consulta virtual requiere más que una videollamada: necesita agenda, identificación del paciente, acceso al expediente y un registro ordenado de la atención. Una plataforma de telemedicina reúne esos pasos para apoyar el trabajo del equipo de salud. Su diseño debe considerar el acceso a información sensible y las responsabilidades de quienes la consultan o actualizan.',
      features: [
        'Programación de consultas virtuales con disponibilidad, confirmación y seguimiento de citas.',
        'Expedientes clínicos digitales con permisos por rol y registro de las acciones realizadas.',
        'Integración de comunicación y documentos para acompañar el proceso de atención definido por la institución.',
      ],
      benefits: 'Reunir agenda y expediente evita que el personal tenga que buscar información en varios canales durante una consulta. Los permisos facilitan delimitar quién accede a cada registro. Un historial organizado permite dar continuidad al proceso de atención y revisar las acciones administrativas asociadas a la cita.',
      example: 'Por ejemplo, un centro de atención puede reservar una consulta virtual, enviar una confirmación y preparar el expediente para el profesional asignado. Al finalizar, el equipo registra la atención y programa el seguimiento dentro del mismo flujo de trabajo.',
      implementation: 'Definimos el recorrido de pacientes y profesionales, los roles y las integraciones necesarias. Revisamos con la institución sus requisitos de privacidad, conservación de información y operación clínica. El software se configura para apoyar ese proceso; las decisiones de atención corresponden al personal de salud.',
    },
    en: {
      intro: 'A virtual consultation requires more than a video call: it needs scheduling, patient identification, access to records, and an organized account of the appointment. A telemedicine platform brings those steps together to support healthcare teams. Its design must consider access to sensitive information and the responsibilities of people who view or update it.',
      features: [
        'Virtual consultation scheduling with availability, confirmation, and appointment follow-up.',
        'Digital patient records with role-based permissions and logs of actions performed.',
        'Communication and document integrations supporting the institution’s defined care workflow.',
      ],
      benefits: 'Bringing scheduling and patient records together reduces the need to search across different channels during consultations. Permissions help define who can access each record. An organized history supports continuity of the care process and review of administrative actions associated with the appointment.',
      example: 'For example, a care center can book a virtual consultation, send confirmation, and prepare the patient record for the assigned professional. After the appointment, the team records the visit and schedules follow-up within the same workflow.',
      implementation: 'We define patient and professional workflows, roles, and required integrations. We review the institution’s privacy, information retention, and clinical operations requirements with its team. The software supports that process; care decisions remain with healthcare professionals.',
    },
  },
  'reserva-boletos': {
    es: {
      intro: 'Vender una entrada implica coordinar disponibilidad, pago y validación de acceso. Cuando esos pasos viven en sistemas separados, aparecen reservas duplicadas y dudas sobre el estado de una compra. Una plataforma de ticketing organiza el recorrido desde la selección hasta el ingreso al evento o servicio, con reglas claras para cada tipo de boleto.',
      features: [
        'Administración de eventos, funciones, rutas o cupos con categorías y reglas de disponibilidad.',
        'Reservas y emisión de boletos vinculadas al estado del pago y a plazos de confirmación.',
        'Validación de entradas y reportes de ventas, reservas y accesos para el equipo organizador.',
      ],
      benefits: 'Un inventario compartido permite controlar los cupos que se ofrecen en cada canal. Los compradores pueden consultar el estado de su reserva y el personal dispone de un proceso definido para validar entradas. El registro de operaciones facilita resolver consultas y conciliar las ventas con los pagos recibidos.',
      example: 'Por ejemplo, un teatro puede publicar varias funciones, separar las entradas por categoría y confirmar las compras cuando se registra el pago. En la puerta, el equipo valida cada boleto y consulta si ya fue utilizado, mientras la administración revisa la ocupación por función.',
      implementation: 'Acordamos las reglas de aforo, vencimiento de reservas, cambios y devoluciones. Integramos los medios de pago seleccionados y probamos compras simultáneas para evitar asignaciones duplicadas. El flujo de validación se adapta a los dispositivos y a la conectividad disponibles en el punto de acceso.',
    },
    en: {
      intro: 'Selling a ticket means coordinating availability, payment, and admission validation. When those steps live in separate systems, duplicate reservations and uncertainty about purchases can follow. A ticketing platform organizes the journey from selection to admission to an event or service, with clear rules for each ticket type.',
      features: [
        'Management of events, performances, routes, or capacity with categories and availability rules.',
        'Reservations and ticket issuance linked to payment status and confirmation deadlines.',
        'Ticket validation and sales, reservation, and admission reports for the organizing team.',
      ],
      benefits: 'Shared inventory helps control the capacity offered through each channel. Buyers can check reservation status, and staff have a defined process for validating tickets. Transaction records make it easier to resolve inquiries and reconcile sales with received payments.',
      example: 'For example, a theater can publish multiple performances, group tickets by category, and confirm purchases when payment is recorded. At the door, staff validate each ticket and check whether it has already been used, while administrators review attendance by performance.',
      implementation: 'We agree on capacity rules, reservation expiration, changes, and refunds. We integrate the selected payment methods and test simultaneous purchases to prevent duplicate allocation. The admission workflow is adapted to the devices and connectivity available at the venue.',
    },
  },
  'odoo-crm': {
    es: {
      intro: 'Cuando ventas, inventario y contabilidad trabajan con información separada, una misma operación termina registrada varias veces. Una implementación de Odoo busca conectar esos procesos y establecer una fuente compartida para el trabajo diario. El valor del proyecto depende de adaptar el sistema al negocio con criterios claros, sin convertir cada particularidad en una personalización innecesaria.',
      features: [
        'Configuración del CRM y del flujo comercial para seguir oportunidades, actividades y ventas.',
        'Integración de inventario y procesos contables según los módulos y el alcance seleccionados.',
        'Personalización de reportes, permisos e integraciones cuando el proceso requiere funcionalidad adicional.',
      ],
      benefits: 'Conectar las áreas reduce la captura repetida de información y facilita revisar el estado de una operación. Ventas puede consultar datos relevantes de disponibilidad, mientras administración sigue los documentos relacionados. Los permisos y procedimientos compartidos ayudan a mantener consistencia a medida que crece el equipo.',
      example: 'Por ejemplo, una comercializadora puede registrar una oportunidad, preparar una cotización y seguir la venta hasta la entrega. Al conectar el flujo con inventario y contabilidad, cada área consulta los registros correspondientes sin reconstruir la historia desde correos y hojas de cálculo.',
      implementation: 'Mapeamos los procesos actuales y evaluamos qué puede resolverse con configuración estándar. Planificamos la migración de datos, probamos recorridos completos y capacitamos a los usuarios. Las personalizaciones se documentan junto con un plan de mantenimiento para que las futuras actualizaciones sean manejables.',
    },
    en: {
      intro: 'When sales, inventory, and accounting use separate information, the same transaction often gets entered several times. An Odoo implementation aims to connect these processes and provide a shared source for daily work. Its value depends on adapting the system to the business with clear criteria, without turning every detail into unnecessary customization.',
      features: [
        'CRM and sales workflow configuration to track opportunities, activities, and sales.',
        'Inventory and accounting process integration according to the selected modules and project scope.',
        'Report, permission, and integration customization when a process requires additional functionality.',
      ],
      benefits: 'Connecting departments reduces repeated data entry and makes transaction status easier to review. Sales can consult relevant availability information while administrators follow related documents. Shared permissions and procedures help maintain consistency as the team grows.',
      example: 'For example, a trading company can record an opportunity, prepare a quotation, and follow a sale through delivery. By connecting this workflow with inventory and accounting, each department can consult the relevant records without rebuilding the history from emails and spreadsheets.',
      implementation: 'We map current processes and evaluate what standard configuration can address. We plan data migration, test complete workflows, and train users. Customizations are documented alongside a maintenance plan to keep future updates manageable.',
    },
  },
  'plugins-wordpress': {
    es: {
      intro: 'Un sitio WordPress puede necesitar funciones que no encajan bien en los complementos disponibles: una integración interna, un formulario especializado o un proceso particular de negocio. El desarrollo a medida permite cubrir esa necesidad con un alcance definido. Para que la solución siga siendo útil, también hay que pensar en su mantenimiento, su rendimiento y su convivencia con el resto del sitio.',
      features: [
        'Plugins para formularios, automatizaciones e integraciones con servicios o sistemas del negocio.',
        'Temas y componentes visuales adaptados a la identidad y a los recorridos de los visitantes.',
        'Configuración de permisos, validación de entradas y pruebas de compatibilidad con el entorno del sitio.',
      ],
      benefits: 'Una función diseñada para un flujo concreto puede simplificar tareas que antes requerían varios pasos manuales. Separar la lógica del negocio de la presentación permite ajustar el diseño sin rehacer las integraciones. Documentar la solución facilita que el equipo administre sus opciones y planifique las actualizaciones.',
      example: 'Por ejemplo, una empresa de servicios puede recibir solicitudes mediante un formulario que valida los datos y los envía a su sistema comercial. El equipo revisa las consultas en su herramienta habitual, mientras el visitante recibe una confirmación coherente con la experiencia del sitio.',
      implementation: 'Revisamos el sitio, los plugins instalados y la necesidad que debe cubrirse. Construimos y probamos en un entorno de trabajo antes de publicar, incluyendo los casos de error de las integraciones. Entregamos instrucciones de uso y acordamos cómo mantener la funcionalidad cuando cambie el entorno.',
    },
    en: {
      intro: 'A WordPress website may need functionality that available plugins do not fit well: an internal integration, a specialized form, or a particular business process. Custom development addresses that need with a defined scope. To keep the solution useful, maintenance, performance, and compatibility with the rest of the website must also be considered.',
      features: [
        'Plugins for forms, automation, and integrations with business services or systems.',
        'Themes and visual components adapted to the brand and visitor journeys.',
        'Permission configuration, input validation, and compatibility testing within the website’s environment.',
      ],
      benefits: 'A feature designed for a specific workflow can simplify tasks that previously required several manual steps. Separating business logic from presentation allows design changes without rebuilding integrations. Documentation makes it easier for the team to manage settings and plan updates.',
      example: 'For example, a service company can receive inquiries through a form that validates the data and sends it to its sales system. The team reviews inquiries in its usual tool, while visitors receive a confirmation consistent with the website experience.',
      implementation: 'We review the website, installed plugins, and the need to be addressed. We build and test in a working environment before publication, including integration failure cases. We provide usage instructions and agree on how to maintain the feature as the environment changes.',
    },
  },
  'internet-cosas': {
    es: {
      intro: 'Conectar sensores al software permite observar condiciones físicas y actuar sobre ellas con información disponible. Un proyecto de Internet de las Cosas combina dispositivos, comunicación y una plataforma que organiza las lecturas. Su utilidad depende de escoger qué medir, entender las condiciones del entorno y definir qué debe ocurrir cuando falta una lectura o se pierde la conexión.',
      features: [
        'Captura de lecturas de sensores y registro del estado de los dispositivos conectados.',
        'Paneles con valores recientes, historial y avisos basados en condiciones configuradas.',
        'Automatizaciones y controles de equipos con permisos y reglas acordadas para la operación.',
      ],
      benefits: 'Observar los datos en un mismo lugar ayuda a detectar cambios y comparar el comportamiento de equipos o espacios. El historial aporta contexto para revisar incidencias. Las automatizaciones pueden reducir acciones repetitivas, siempre que las reglas contemplen fallas y que el personal mantenga control sobre las decisiones relevantes.',
      example: 'Por ejemplo, una empresa puede monitorear las condiciones de varias áreas de almacenamiento. Los responsables consultan las lecturas y reciben un aviso cuando se supera un umbral definido. Si un dispositivo deja de enviar datos, el panel distingue esa situación de una lectura dentro del rango esperado.',
      implementation: 'Seleccionamos las variables, revisamos sensores y conectividad y construimos una prueba con dispositivos reales. Después definimos la retención de datos, los permisos y el comportamiento ante fallas. La integración con otros sistemas se incorpora cuando aporta una acción concreta al flujo de trabajo.',
    },
    en: {
      intro: 'Connecting sensors to software makes it possible to observe physical conditions and respond with information at hand. An Internet of Things project combines devices, communication, and a platform that organizes readings. Its usefulness depends on choosing what to measure, understanding environmental conditions, and defining what happens when a reading is missing or a connection is lost.',
      features: [
        'Sensor reading collection and status records for connected devices.',
        'Dashboards with recent values, history, and notices based on configured conditions.',
        'Equipment automation and controls with permissions and agreed operational rules.',
      ],
      benefits: 'Viewing data in one place helps detect changes and compare equipment or location behavior. Historical readings provide context when reviewing incidents. Automation can reduce repetitive actions when rules account for failures and staff retain control over important decisions.',
      example: 'For example, a company can monitor conditions across several storage areas. Staff consult readings and receive a notice when a defined threshold is crossed. If a device stops sending data, the dashboard distinguishes that situation from a reading within the expected range.',
      implementation: 'We select variables, review sensors and connectivity, and build a trial with real devices. We then define data retention, permissions, and failure behavior. Integration with other systems is added when it supports a concrete action in the workflow.',
    },
  },
  'precios-medicamentos': {
    es: {
      intro: 'Comparar precios de medicamentos exige identificar bien el producto y mostrar cuándo se consultó la información. La presentación, la concentración y la cantidad pueden cambiar el significado de un precio. Un comparador farmacéutico organiza esos datos para facilitar la consulta, con trazabilidad de las fuentes y una separación clara entre precio informado y disponibilidad confirmada.',
      features: [
        'Catálogo de productos con atributos para distinguir presentación, concentración y cantidad.',
        'Consulta de precios por farmacia o ubicación, con origen y fecha de actualización visibles.',
        'Procesos de actualización y revisión para detectar registros incompletos o productos mal relacionados.',
      ],
      benefits: 'Unificar los atributos reduce comparaciones entre presentaciones diferentes. Mostrar la fecha de actualización ayuda a entender qué tan reciente es la información consultada. La trazabilidad permite al equipo investigar diferencias y mejorar el catálogo cuando cambia la información de una fuente.',
      example: 'Por ejemplo, una persona puede buscar una presentación específica y revisar los precios reportados por varias farmacias. El comparador muestra qué datos están disponibles y permite verificar la oferta con el establecimiento. La elección o sustitución de un tratamiento corresponde al profesional de salud.',
      implementation: 'Definimos las fuentes autorizadas de información y un modelo de catálogo que evite confusiones entre productos. Configuramos la actualización, la revisión de coincidencias y la visualización de datos faltantes. Los precios y las existencias dependen de cada farmacia y deben presentarse con ese contexto.',
    },
    en: {
      intro: 'Comparing medication prices requires accurate product identification and a clear indication of when information was checked. Form, strength, and quantity can change what a price means. A pharmacy comparator organizes these attributes to make searches easier, with traceable sources and a clear distinction between a reported price and confirmed availability.',
      features: [
        'A product catalog with attributes that distinguish form, strength, and quantity.',
        'Price searches by pharmacy or location, with visible sources and update dates.',
        'Update and review workflows for identifying incomplete records or incorrectly matched products.',
      ],
      benefits: 'Consistent attributes reduce comparisons between different product presentations. Displaying update dates helps readers understand how recent the information is. Source traceability lets the team investigate differences and improve the catalog when information from a source changes.',
      example: 'For example, someone can search for a specific presentation and review prices reported by several pharmacies. The comparator shows available information and lets the person verify an offer with the pharmacy. Treatment selection or substitution remains a decision for a healthcare professional.',
      implementation: 'We define authorized information sources and a catalog model that avoids confusion between products. We configure updates, matching review, and the display of missing data. Prices and stock depend on each pharmacy and must be presented with that context.',
    },
  },
  'openclaw': {
    es: {
      intro: 'La operación de máquinas arcade combina hardware, juegos y control de fichas. Cuando cada equipo se administra por separado, es difícil conocer su estado y revisar lo ocurrido durante una jornada. OpenClaw se plantea aquí como una solución de control para reunir esa operación, con registros que conectan el uso de la máquina con su administración y mantenimiento.',
      features: [
        'Registro de máquinas y configuraciones de operación según el hardware y los juegos disponibles.',
        'Gestión de fichas o créditos y seguimiento de los movimientos asociados a cada equipo.',
        'Consulta del estado de las máquinas e incidencias para organizar revisiones y mantenimiento.',
      ],
      benefits: 'Un panel compartido permite al operador revisar los equipos sin depender únicamente de inspecciones aisladas. Los registros de créditos y actividad facilitan conciliar la operación. Separar permisos de administración y uso ayuda a controlar los cambios de configuración y a investigar diferencias entre jornadas.',
      example: 'Por ejemplo, una sala arcade puede organizar sus máquinas por zona y revisar cuáles están disponibles o requieren atención. El personal registra recargas y consulta movimientos, mientras el responsable técnico revisa incidencias antes de devolver un equipo a la operación.',
      implementation: 'Identificamos el hardware, sus interfaces de comunicación y las reglas de gestión de fichas. Probamos la integración con una máquina antes de extenderla al resto de la sala. La compatibilidad y las funciones finales se acuerdan a partir de los equipos reales y de las condiciones del establecimiento.',
    },
    en: {
      intro: 'Arcade operations combine hardware, games, and token control. When every machine is managed separately, it becomes difficult to understand its status and review activity during a shift. Here, OpenClaw is described as a control solution that brings these operations together, connecting machine usage records with administration and maintenance.',
      features: [
        'Machine registration and operating settings adapted to available hardware and games.',
        'Token or credit management and tracking of transactions associated with each machine.',
        'Machine status and incident views to organize inspections and maintenance.',
      ],
      benefits: 'A shared dashboard lets operators review equipment without relying solely on isolated inspections. Credit and activity records make operational reconciliation easier. Separate administration and usage permissions help control configuration changes and investigate differences between shifts.',
      example: 'For example, an arcade venue can group machines by area and check which are available or need attention. Staff record credit top-ups and inspect transactions, while the technical team reviews incidents before returning equipment to service.',
      implementation: 'We identify the hardware, its communication interfaces, and token management rules. We test integration with one machine before extending it across the venue. Compatibility and final functionality are agreed based on the actual equipment and operating conditions.',
    },
  },
  'reserva-barberia': {
    es: {
      intro: 'Una agenda de barbería debe coordinar servicios, duración y disponibilidad de cada profesional. Resolverlo solo con mensajes puede generar cruces de citas o información incompleta. Un sistema de reservas organiza ese recorrido para que el cliente encuentre un horario y el equipo conozca qué servicio debe preparar, sin perder el control sobre cambios y cancelaciones.',
      features: [
        'Agenda por profesional con servicios, duración estimada y horarios de atención configurables.',
        'Reservas, cambios y cancelaciones con estados visibles para recepción y para el cliente.',
        'Recordatorios automáticos y un historial de visitas para dar seguimiento a la relación con cada cliente.',
      ],
      benefits: 'Definir la duración de los servicios ayuda a ofrecer espacios que encajen en la agenda real. Los recordatorios facilitan que el cliente tenga presente su cita y que recepción reduzca tareas repetitivas. Un registro compartido permite que distintos miembros del equipo consulten la misma información durante la jornada.',
      example: 'Por ejemplo, una barbería puede ofrecer corte y arreglo de barba como servicios con duraciones diferentes. El cliente elige profesional y horario, recibe confirmación y puede solicitar un cambio. Recepción revisa las citas del día y bloquea espacios cuando un profesional no estará disponible.',
      implementation: 'Revisamos los servicios, los tiempos y las reglas de reserva del negocio. Configuramos horarios, permisos y canales de recordatorio, y probamos citas que coinciden o cambian de estado. La experiencia se adapta al móvil para que clientes y personal puedan usarla durante su rutina.',
    },
    en: {
      intro: 'A barbershop schedule must coordinate services, duration, and each professional’s availability. Managing it only through messages can lead to overlapping appointments or incomplete information. A booking system organizes the journey so clients can find a time and staff know which service to prepare, while retaining control over changes and cancellations.',
      features: [
        'Individual staff calendars with services, estimated durations, and configurable opening hours.',
        'Bookings, changes, and cancellations with status visible to reception and clients.',
        'Automatic reminders and visit history to support ongoing client relationships.',
      ],
      benefits: 'Defining service durations helps offer slots that fit the actual schedule. Reminders help clients remember appointments and reduce repetitive work for reception. Shared records let different team members consult the same information throughout the day.',
      example: 'For example, a barbershop can offer haircuts and beard grooming as services with different durations. A client chooses a professional and time, receives confirmation, and can request a change. Reception reviews the day’s appointments and blocks time when a professional is unavailable.',
      implementation: 'We review the business’s services, timings, and booking rules. We configure schedules, permissions, and reminder channels, then test overlapping appointments and status changes. The experience is adapted for mobile use so clients and staff can use it in their daily routines.',
    },
  },
  'limpieza-facial': {
    es: {
      intro: 'Un spa o una clínica estética necesita organizar citas y conservar un registro del servicio prestado a cada cliente. La limpieza facial y otros servicios pueden formar parte de planes con varias sesiones, profesionales y recursos. Una plataforma de gestión conecta la agenda con las fichas de clientes para que el equipo tenga contexto antes, durante y después de cada visita.',
      features: [
        'Reservas por servicio, profesional y recurso disponible, con confirmación y seguimiento de citas.',
        'Fichas de clientes con historial de sesiones, documentos y acceso según el rol del personal.',
        'Registro de planes de servicio y próximas visitas para coordinar la atención del establecimiento.',
      ],
      benefits: 'Vincular cada cita con su ficha facilita preparar la visita y consultar lo registrado en sesiones anteriores. Un historial compartido mejora la continuidad administrativa cuando intervienen varios profesionales. Los permisos ayudan a delimitar el acceso a información personal y a conservar una gestión ordenada de los documentos.',
      example: 'Por ejemplo, un spa puede programar varias sesiones de un plan y asignar el espacio necesario para cada una. El profesional consulta la ficha correspondiente y registra el servicio realizado, mientras recepción confirma la próxima visita y revisa la disponibilidad de la agenda.',
      implementation: 'Definimos los servicios, los recursos y la información que necesita registrar el establecimiento. Configuramos roles, formularios y agenda junto con los responsables del proceso. La plataforma organiza citas y registros; los criterios de tratamiento y evaluación corresponden a los profesionales del centro.',
    },
    en: {
      intro: 'A spa or aesthetic clinic needs to organize appointments and keep a record of services provided to each client. Facial care and other services may be part of plans involving multiple sessions, professionals, and resources. A management platform connects scheduling with client records so staff have context before, during, and after each visit.',
      features: [
        'Bookings by service, professional, and available resource, with confirmation and appointment follow-up.',
        'Client records with session history, documents, and access based on staff roles.',
        'Service plan and upcoming visit records to coordinate the establishment’s client workflow.',
      ],
      benefits: 'Linking each appointment to a client record makes it easier to prepare for visits and consult previous sessions. A shared history improves administrative continuity when several professionals are involved. Permissions help limit access to personal information and keep document management organized.',
      example: 'For example, a spa can schedule several sessions in a plan and assign the required space for each one. The professional reviews the relevant client record and logs the completed service, while reception confirms the next visit and checks calendar availability.',
      implementation: 'We define the services, resources, and information the establishment needs to record. We configure roles, forms, and calendars with the people responsible for the workflow. The platform organizes appointments and records; treatment and assessment criteria remain with the center’s professionals.',
    },
  },
  'lms-moodle': {
    es: {
      intro: 'Publicar materiales es solo una parte de un programa de aprendizaje. También hace falta organizar participantes, actividades, evaluaciones y seguimiento. Una plataforma LMS reúne estos elementos para que docentes, estudiantes y responsables de formación trabajen con un recorrido definido. Moodle y los desarrollos a medida permiten abordar necesidades distintas según el público y el modelo educativo.',
      features: [
        'Organización de cursos, grupos, materiales y actividades según la estructura del programa.',
        'Evaluaciones y seguimiento del progreso con permisos para estudiantes, docentes y coordinadores.',
        'Reportes e integraciones con procesos de inscripción, comunicación o gestión de la institución.',
      ],
      benefits: 'Un campus organizado permite que los participantes sepan qué actividad sigue y dónde encontrar recursos. Los docentes pueden revisar entregas y dar seguimiento sin depender de archivos enviados por varios canales. Los responsables de formación obtienen una visión del avance para identificar dónde se necesita acompañamiento.',
      example: 'Por ejemplo, una empresa puede organizar un curso de inducción con materiales, actividades y una evaluación final. Los nuevos colaboradores avanzan por el recorrido definido y el equipo de formación revisa quién completó cada etapa, qué preguntas requieren atención y cómo mejorar el curso.',
      implementation: 'Definimos los roles, el contenido y las necesidades de evaluación antes de configurar el campus. Revisamos qué cubre Moodle y dónde conviene desarrollar una integración específica. Probamos el recorrido de inscripción y aprendizaje y acompañamos al equipo para administrar cursos y participantes.',
    },
    en: {
      intro: 'Publishing materials is only one part of a learning program. Participants, activities, assessments, and follow-up also need organization. A learning management system brings these elements together so teachers, students, and training managers can follow a defined journey. Moodle and custom development can address different needs depending on the audience and educational model.',
      features: [
        'Course, group, material, and activity organization aligned with the program’s structure.',
        'Assessments and progress tracking with permissions for students, teachers, and coordinators.',
        'Reports and integrations with enrollment, communication, or institutional management processes.',
      ],
      benefits: 'An organized learning campus helps participants know what comes next and where to find resources. Teachers can review submissions and follow progress without relying on files sent through several channels. Training managers gain an overview of progress to identify where support is needed.',
      example: 'For example, a company can organize an onboarding course with materials, activities, and a final assessment. New employees follow the defined journey, while the training team checks who completed each stage, which questions need attention, and how to improve the course.',
      implementation: 'We define roles, content, and assessment needs before configuring the campus. We review what Moodle covers and where a dedicated integration is useful. We test the enrollment and learning journey and support the team in administering courses and participants.',
    },
  },
  'alquiler-lavadoras': {
    es: {
      intro: 'El alquiler de lavadoras requiere saber qué máquina está disponible, quién la tiene y cuándo debe regresar. A esto se suman pagos, contratos y mantenimiento. Un sistema de gestión conecta cada renta con un equipo identificado para que la operación pueda seguirse desde la reserva hasta la devolución, con un historial útil para administración y servicio técnico.',
      features: [
        'Inventario de lavadoras con identificación, ubicación y estados de disponibilidad o mantenimiento.',
        'Registro de rentas, clientes, contratos, fechas y pagos asociados a cada operación.',
        'Seguimiento de entregas, devoluciones e incidencias para planear revisiones de los equipos.',
      ],
      benefits: 'Relacionar contratos y máquinas evita depender de apuntes separados para conocer el estado de una renta. Administración puede revisar saldos y vencimientos, mientras operación consulta qué equipos pueden asignarse. Conservar las incidencias facilita decidir cuándo una máquina necesita revisión antes de una nueva entrega.',
      example: 'Por ejemplo, un negocio puede reservar una lavadora para una fecha concreta y registrar su entrega al cliente. Al devolverla, el personal revisa el estado, anota una incidencia si existe y la deja disponible o la envía a mantenimiento según el resultado de la revisión.',
      implementation: 'Mapeamos el recorrido de reserva, entrega, cobro y devolución. Definimos los estados de los equipos y los documentos que requiere el negocio. Migramos el inventario y probamos operaciones completas para que el sistema refleje tanto la gestión comercial como el movimiento físico de las máquinas.',
    },
    en: {
      intro: 'Washing machine rentals require knowing which machine is available, who has it, and when it should return. Payments, contracts, and maintenance add more steps. A management system links each rental to an identified machine so operations can be tracked from reservation through return, with a history useful to administration and technical service teams.',
      features: [
        'A washing machine inventory with identification, location, and availability or maintenance status.',
        'Rental, customer, contract, date, and payment records linked to each transaction.',
        'Delivery, return, and incident tracking to plan equipment inspections.',
      ],
      benefits: 'Connecting contracts to machines removes the need to rely on separate notes to understand rental status. Administrators can review balances and due dates while operators check which equipment can be assigned. Incident history helps determine when a machine needs inspection before another delivery.',
      example: 'For example, a business can reserve a washing machine for a specific date and record delivery to the customer. On return, staff inspect its condition, record any incident, and mark it available or send it for maintenance based on the inspection result.',
      implementation: 'We map reservation, delivery, collection, and return workflows. We define equipment states and the documents the business requires. We migrate the inventory and test complete transactions so the system reflects both commercial management and the physical movement of machines.',
    },
  },
  'infraestructura-iaas': {
    es: {
      intro: 'La infraestructura como servicio permite organizar recursos de cómputo, almacenamiento y red para alojar aplicaciones con una administración definida. La virtualización con Proxmox VE o ZSVirt puede formar parte de ese diseño según el entorno. El punto de partida es entender las cargas de trabajo y los objetivos de recuperación, para decidir qué recursos y qué nivel de redundancia necesita cada servicio.',
      features: [
        'Diseño de entornos virtualizados con recursos asignados a las cargas de trabajo del negocio.',
        'Planificación de clustering y alta disponibilidad según la plataforma, el hardware y las necesidades del proyecto.',
        'Monitoreo, copias de seguridad y procedimientos de restauración para administrar el ciclo de vida de los servicios.',
      ],
      benefits: 'Una infraestructura documentada facilita conocer dónde corre cada servicio y qué recursos utiliza. La virtualización permite separar cargas y organizar su administración. Planear copias y recuperación aporta un procedimiento concreto para responder a incidentes; la redundancia debe evaluarse junto con los posibles puntos de falla.',
      example: 'Por ejemplo, una empresa puede separar sus aplicaciones internas en entornos virtuales y preparar un plan de migración desde servidores existentes. El equipo revisa capacidad, almacenamiento y dependencias, y realiza una restauración de prueba antes de dar por terminado el cambio.',
      implementation: 'Inventariamos las cargas, definimos objetivos de disponibilidad y evaluamos Proxmox VE o ZSVirt para el entorno concreto. Diseñamos red, almacenamiento y operación, luego ejecutamos la migración por etapas. Validamos restauraciones y documentamos responsables, monitoreo y tareas de mantenimiento.',
    },
    en: {
      intro: 'Infrastructure as a service organizes compute, storage, and networking resources to host applications under a defined management model. Virtualization with Proxmox VE or ZSVirt can form part of that design, depending on the environment. The starting point is understanding workloads and recovery objectives to decide which resources and level of redundancy each service needs.',
      features: [
        'Virtualized environment design with resources assigned to business workloads.',
        'Clustering and high-availability planning based on the platform, hardware, and project needs.',
        'Monitoring, backups, and restoration procedures to manage the service lifecycle.',
      ],
      benefits: 'Documented infrastructure makes it easier to know where each service runs and which resources it uses. Virtualization separates workloads and organizes their administration. Backup and recovery planning provides a concrete incident response procedure; redundancy must be assessed alongside potential failure points.',
      example: 'For example, a company can separate internal applications into virtual environments and prepare a migration plan from existing servers. The team reviews capacity, storage, and dependencies, then performs a test restoration before considering the transition complete.',
      implementation: 'We inventory workloads, define availability objectives, and evaluate Proxmox VE or ZSVirt for the specific environment. We design networking, storage, and operations, then migrate in stages. We validate restorations and document responsibilities, monitoring, and maintenance tasks.',
    },
  },
  'control-imei-posventa': {
    es: {
      intro: 'En la venta y el servicio técnico de dispositivos, identificar cada unidad es tan importante como registrar el producto. Un mismo modelo puede tener equipos con historias distintas de compra, garantía y reparación. Un sistema de control IMEI y posventa vincula esos eventos al dispositivo correcto para que el equipo pueda seguir su recorrido y atender consultas con información verificable.',
      features: [
        'Registro de identificadores IMEI y relación con inventario, ventas y movimientos del dispositivo.',
        'Gestión de garantías y órdenes de servicio con estados, responsables y documentos asociados.',
        'Historial de atención posventa para consultar reparaciones, comunicaciones y entregas de cada unidad.',
      ],
      benefits: 'La trazabilidad ayuda a evitar confusiones entre dispositivos del mismo modelo y a revisar qué ocurrió con una unidad concreta. Los estados compartidos permiten coordinar recepción, técnicos y atención al cliente. Un historial organizado facilita revisar la información de garantía y justificar las acciones realizadas durante el servicio.',
      example: 'Por ejemplo, una tienda puede registrar el IMEI al vender un teléfono y vincularlo con la compra. Si el cliente solicita una revisión, recepción consulta el historial y abre una orden. El técnico registra el diagnóstico y el equipo de atención comunica el estado hasta la entrega.',
      implementation: 'Definimos las reglas de identificación, los estados de servicio y los documentos necesarios. Configuramos controles para detectar registros duplicados y adaptamos la captura a dispositivos con varios identificadores. Integramos el flujo con inventario o ventas cuando sea necesario y probamos el recorrido completo de una orden.',
    },
    en: {
      intro: 'In device sales and technical service, identifying each unit matters as much as recording the product. Devices of the same model can have different purchase, warranty, and repair histories. An IMEI tracking and after-sales system links those events to the correct device so staff can follow its journey and answer inquiries with verifiable information.',
      features: [
        'IMEI identifier records linked to inventory, sales, and device movements.',
        'Warranty and repair order management with status, responsible staff, and related documents.',
        'After-sales history for reviewing repairs, communications, and deliveries for each unit.',
      ],
      benefits: 'Traceability helps avoid confusion between devices of the same model and makes a specific unit’s history accessible. Shared status information coordinates reception, technicians, and customer service. Organized records make it easier to review warranty information and explain actions taken during service.',
      example: 'For example, a store can record a phone’s IMEI at sale and link it to the purchase. If the customer requests an inspection, reception checks the history and opens a repair order. A technician records the diagnosis, and customer service communicates progress through delivery.',
      implementation: 'We define identification rules, service statuses, and required documents. We configure duplicate detection and adapt data entry to devices with multiple identifiers. We integrate the workflow with inventory or sales where needed and test the complete journey of a service order.',
    },
  },
}
