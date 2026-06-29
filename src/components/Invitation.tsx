import { weddingData } from '../data/wedding'

export function Invitation() {
  const { groom, bride, parentsMessage } = weddingData

  return (
    <section className="section invitation">
      <p className="section-label">Invitation</p>
      <h2 className="section-title">초대합니다</h2>

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
