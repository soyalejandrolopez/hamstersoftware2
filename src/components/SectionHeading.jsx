import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'
  return (
    <Reveal className={`flex max-w-3xl flex-col ${alignClass}`}>
      {eyebrow && (
        <span className="eyebrow">
          <span className="eyebrow-mark" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight text-ink-950 sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600">{description}</p>
      )}
      <span className="mt-6 block h-[3px] w-16 bg-brand-gradient" aria-hidden="true" />
    </Reveal>
  )
}
