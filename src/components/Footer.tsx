import { weddingData } from '../data/wedding'

export function Footer() {
  const { groom, bride } = weddingData

  return (
    <footer className="footer scroll-reveal">
      <p className="footer-names">{groom.name} · {bride.name}</p>
      <p className="footer-thanks">감사합니다</p>
    </footer>
  )
}
