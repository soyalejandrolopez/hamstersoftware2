import { useId } from 'react'

// Logo oficial de Hamster Software: icono app squircle con gradiente azul y símbolo de foco/precisión
export default function Logo({ className = 'h-9 w-9' }) {
  const rawId = useId()
  const gradId = `hs-logo-grad-${rawId.replace(/:/g, '')}`

  return (
    <svg viewBox="0 0 72 72" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2072E8" />
          <stop offset="50%" stopColor="#168CE0" />
          <stop offset="100%" stopColor="#0DAAD8" />
        </linearGradient>
      </defs>

      {/* Contenedor squircle con esquinas redondeadas estilo app icon */}
      <rect width="72" height="72" rx="18" ry="18" fill={`url(#${gradId})`} />

      {/* Círculo exterior blanco */}
      <circle cx="36" cy="36" r="18.8" stroke="#FFFFFF" strokeWidth="4.6" />

      {/* 4 marcas interiores en cruz con puntas redondeadas */}
      <line x1="36" y1="18" x2="36" y2="24.6" stroke="#FFFFFF" strokeWidth="4.6" strokeLinecap="round" />
      <line x1="36" y1="54" x2="36" y2="47.4" stroke="#FFFFFF" strokeWidth="4.6" strokeLinecap="round" />
      <line x1="18" y1="36" x2="24.6" y2="36" stroke="#FFFFFF" strokeWidth="4.6" strokeLinecap="round" />
      <line x1="54" y1="36" x2="47.4" y2="36" stroke="#FFFFFF" strokeWidth="4.6" strokeLinecap="round" />

      {/* Anillo / dona central */}
      <circle cx="36" cy="36" r="5.8" stroke="#FFFFFF" strokeWidth="4.2" />
    </svg>
  )
}
