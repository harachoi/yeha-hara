import { weddingData } from '../data/wedding'

export function Invitation() {
  const { groom, bride, parentsMessage } = weddingData

  return (
    <section className="section invitation scroll-reveal">
      <p className="section-label">Invitation</p>

      <div className="parents">
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

      <p className="message">{parentsMessage}</p>
    </section>
  )
}
