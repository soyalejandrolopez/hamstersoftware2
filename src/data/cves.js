// ============================================================
// CVEs — Datos DEMO para el bloque de monitoreo en tiempo real.
// En producción, consume la API de NVD (https://nvd.nist.gov).
// `minutesAgo` se usa para mostrar "hace X min" dinámico.
// ============================================================

export const cveSource = { name: 'NVD', url: 'https://nvd.nist.gov', monitoredToday: 128 }

export const demoCves = [
  {
    id: 'CVE-2026-4821',
    severity: 'CRÍTICA',
    minutesAgo: 2,
    title: 'Ejecución remota de código en servidores Apache',
  },
  {
    id: 'CVE-2026-4730',
    severity: 'ALTA',
    minutesAgo: 18,
    title: 'Escalada de privilegios en kernel Linux',
  },
  {
    id: 'CVE-2026-4602',
    severity: 'MEDIA',
    minutesAgo: 60,
    title: 'XSS almacenado en panel de gestión',
  },
  {
    id: 'CVE-2026-4518',
    severity: 'ALTA',
    minutesAgo: 180,
    title: 'Fuga de información en API REST',
  },
]

export const securityPoints = [
  'Monitoreo en tiempo real de CVEs',
  'Auditorías de código y análisis estático',
  'Pruebas de penetración (Pen Testing)',
  'Implementación de DevSecOps',
]

export function timeAgoLabel(minutesAgo) {
  if (minutesAgo < 60) return `hace ${minutesAgo} min`
  const hours = Math.floor(minutesAgo / 60)
  if (hours < 24) return `hace ${hours} h`
  const days = Math.floor(hours / 24)
  return `hace ${days} d`
}
