const LETTER_GAP = 0.1
const LETTER_DURATION = 0.42

type HeroNameWordProps = {
  text: string
  startDelay: number
  className?: string
}

export function getHeroNameEnd(startDelay: number, text: string) {
  if (text.length === 0) return startDelay
  return startDelay + (text.length - 1) * LETTER_GAP + LETTER_DURATION
}

export function HeroNameWord({
  text,
  startDelay,
  className = 'hero-name-word',
}: HeroNameWordProps) {
  return (
    <span className={className} aria-hidden="true">
      {[...text].map((char, index) => (
        <span
          key={`${char}-${index}`}
          className={char === ' ' ? 'hero-letter hero-letter--space' : 'hero-letter'}
          style={{
            animationDelay: `${startDelay + index * LETTER_GAP}s`,
          }}
        >
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </span>
  )
}
