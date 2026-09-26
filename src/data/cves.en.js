// ============================================================
// CVEs (ENGLISH) — Real-time vulnerability monitoring demo data.
// ============================================================

export const cveSourceEn = { name: 'NVD', url: 'https://nvd.nist.gov', monitoredToday: 128 }

export const demoCvesEn = [
  {
    id: 'CVE-2026-4821',
    severity: 'CRITICAL',
    minutesAgo: 2,
    title: 'Remote code execution in Apache HTTP server engines',
  },
  {
    id: 'CVE-2026-4730',
    severity: 'HIGH',
    minutesAgo: 18,
    title: 'Privilege escalation vulnerability in Linux kernel subsystem',
  },
  {
    id: 'CVE-2026-4602',
    severity: 'MEDIUM',
    minutesAgo: 60,
    title: 'Stored cross-site scripting (XSS) in administrative portal',
  },
  {
    id: 'CVE-2026-4518',
    severity: 'HIGH',
    minutesAgo: 180,
    title: 'Information disclosure in unauthenticated REST API endpoint',
  },
]

export const securityPointsEn = [
  'Continuous real-time CVE threat monitoring',
  'Automated static code analysis and security audits',
  'Full penetration testing & ethical hacking (Pen Testing)',
  'DevSecOps pipeline hardening and secret auditing',
]

export function timeAgoLabelEn(minutesAgo) {
  if (minutesAgo < 60) return `${minutesAgo}m ago`
  const hours = Math.floor(minutesAgo / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}
