// BLOG — Solution and service article summaries in English.
// Shared slugs preserve the article when switching languages.
import { serviceArticles } from './serviceArticles'

export const solutionsEn = [
  {
    "num": "01",
    "slug": "vulnerabilidades",
    "name": "Vulnerability Assessment",
    "tag": "Pentesting & Security Audits",
    "description": "Security audits and penetration tests to identify and address vulnerabilities before attackers exploit them."
  },
  {
    "num": "02",
    "slug": "monitoreo-sismico",
    "name": "Seismic Monitoring",
    "tag": "Real-Time Seismic Stations",
    "description": "Seismic station networks with real-time data to report, analyze, and visualize seismic activity."
  },
  {
    "num": "03",
    "slug": "resultados-deportivos",
    "name": "Live Sports Scores",
    "tag": "Live Score Platform",
    "description": "A live score platform with real-time results, statistics, and notifications for leagues and tournaments."
  },
  {
    "num": "04",
    "slug": "analisis-ventas",
    "name": "Sales Analytics",
    "tag": "Dashboards & Metrics",
    "description": "Dashboards and metrics that turn your sales data into actionable business decisions."
  },
  {
    "num": "05",
    "slug": "radio-streaming",
    "name": "Radio Streaming",
    "tag": "Audio Infrastructure",
    "description": "Audio infrastructure for live and on-demand broadcasting, designed for high availability."
  },
  {
    "num": "06",
    "slug": "telemedicina",
    "name": "Telemedicine Platform",
    "tag": "Consultations & Patient Records",
    "description": "A virtual medical consultation platform with secure digital patient records."
  },
  {
    "num": "07",
    "slug": "reserva-boletos",
    "name": "Reservations & Ticketing",
    "tag": "Advanced Ticketing",
    "description": "Advanced ticketing for events, transportation, and live entertainment."
  },
  {
    "num": "08",
    "slug": "odoo-crm",
    "name": "Odoo CRM & ERP",
    "tag": "ERP Implementation",
    "description": "Odoo implementation and customization to connect CRM, sales, inventory, and accounting."
  },
  {
    "num": "09",
    "slug": "plugins-wordpress",
    "name": "WordPress Plugins",
    "tag": "Custom Development",
    "description": "Custom WordPress plugins and themes to extend your website with the functionality your business needs."
  },
  {
    "num": "10",
    "slug": "internet-cosas",
    "name": "IoT: Internet of Things",
    "tag": "Hardware & Sensors",
    "description": "Connected hardware and sensors working with software to monitor and automate operations in real time."
  },
  {
    "num": "11",
    "slug": "precios-medicamentos",
    "name": "Medication Price Comparison",
    "tag": "Pharmacy Price Comparator",
    "description": "A pharmacy comparison platform that brings together updated medication prices from multiple pharmacies."
  },
  {
    "num": "12",
    "slug": "openclaw",
    "name": "OpenClaw",
    "tag": "Arcade Hardware Control",
    "description": "Arcade hardware control software for machines, games, and token management."
  },
  {
    "num": "13",
    "slug": "reserva-barberia",
    "name": "Barbershop Booking",
    "tag": "Barbershop & Salon Management",
    "description": "A booking system for barbershops and hair salons with automatic appointment reminders."
  },
  {
    "num": "14",
    "slug": "limpieza-facial",
    "name": "Facial Care Management",
    "tag": "Spa & Aesthetic Clinic Systems",
    "description": "Appointment, client record, and treatment management for spas and aesthetic clinics."
  },
  {
    "num": "15",
    "slug": "lms-moodle",
    "name": "LMS & Moodle Platforms",
    "tag": "Courses for Schools & Businesses",
    "description": "Learning platforms for schools and businesses using Moodle and custom development."
  },
  {
    "num": "16",
    "slug": "alquiler-lavadoras",
    "name": "Washing Machine Rentals",
    "tag": "Rental Management",
    "description": "Washing machine rental management covering equipment, payments, contracts, and maintenance."
  },
  {
    "num": "17",
    "slug": "infraestructura-iaas",
    "name": "IaaS Infrastructure",
    "tag": "Proxmox & ZSVirt Virtualization",
    "description": "Infrastructure as a service and enterprise virtualization with Proxmox VE and ZSVirt, clustering, and high availability."
  },
  {
    "num": "18",
    "slug": "control-imei-posventa",
    "name": "IMEI Tracking & After-Sales Service",
    "tag": "Traceability, Warranties & Repairs",
    "description": "IMEI tracking, device traceability, warranty management, repair orders, and after-sales support in one system."
  },
  ...serviceArticles.map(({ num, slug, en }) => ({ num, slug, name: en.name, tag: en.tag, description: en.description })),
]
