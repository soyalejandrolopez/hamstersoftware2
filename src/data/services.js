// Servicios de desarrollo. Los otros 19 temas están en serviceArticles.js.
export const serviceCategories = [
  {
    "id": "web-movil",
    "name": "Web, Móvil y Escritorio",
    "description": "Aplicaciones pulidas y de alto rendimiento para cada plataforma donde están tus usuarios.",
    "icon": "globe",
    "services": [
      {
        "num": "09",
        "name": "Desarrollo Web",
        "description": "Diseñamos experiencias web de alto rendimiento — desde landing pages hasta plataformas empresariales complejas.",
        "bullets": [
          "Frontends con React, Next.js y Vue.js",
          "Backends con Laravel, Node.js y Django",
          "Plataformas de e-commerce y marketplaces",
          "Optimización de rendimiento (Core Web Vitals)",
          "Integraciones con CMS headless y APIs"
        ]
      },
      {
        "num": "07",
        "name": "Desarrollo Móvil",
        "description": "Creamos aplicaciones móviles pulidas y de alto rendimiento para iOS y Android que los usuarios usan cada día.",
        "bullets": [
          "iOS (Swift / SwiftUI) y Android (Kotlin)",
          "Multiplataforma con React Native y Flutter",
          "PWAs con capacidad offline",
          "Notificaciones push y compras in-app",
          "Optimización para App Store y Play Store"
        ]
      },
      {
        "num": "05",
        "name": "Software de Escritorio",
        "description": "Construimos aplicaciones de escritorio nativas con el rendimiento y la seguridad de nivel empresarial.",
        "bullets": [
          "Aplicaciones para Windows, macOS y Linux",
          "Apps multiplataforma con Electron y Tauri",
          "Integraciones con ERP y CRM",
          "Arquitectura offline-first",
          "Sistemas de actualización y despliegue automático"
        ]
      }
    ]
  }
]

export const totalServices = serviceCategories.reduce((sum, category) => sum + category.services.length, 0)
