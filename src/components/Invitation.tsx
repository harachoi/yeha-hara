import { weddingData } from '../data/wedding'
import { FlowerIcon } from './FlowerIcon'

export function Invitation() {
  const { groom, bride } = weddingData

  return (
    <section className="section invitation">
      <div className="scroll-reveal invitation-content">
        <FlowerIcon className="invitation-flower scroll-reveal-item" />
        <div className="parents scroll-reveal-item">
          <p className="parent-line">
            {groom.father} · {groom.mother}
            <span className="parent-of"> 의 </span>
            {groom.relation} <strong>{groom.name}</strong>
          </p>
          <p className="parent-line">
            {bride.father} · {bride.mother}
            <span className="parent-of"> 의 </span>
            {bride.relation} <strong>{bride.name}</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
