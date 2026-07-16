import { weddingData } from '../data/wedding'

export function BibleVerse() {
  const { bibleVerse } = weddingData

  return (
    <section className="section bible-verse-section">
      <div className="scroll-reveal bible-verse-content">
        <blockquote className="bible-verse scroll-reveal-item">
          <p className="bible-verse-text">{bibleVerse.text}</p>
          <cite className="bible-verse-ref">{bibleVerse.reference}</cite>
        </blockquote>
      </div>
    </section>
  )
}
