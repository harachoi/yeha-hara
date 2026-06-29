import { weddingData } from '../data/wedding'

export function Invitation() {
  const { groom, bride, message, parentsMessage } = weddingData

  return (
    <section className="section invitation">
      <p className="section-label">Invitation</p>
      <h2 className="section-title">초대합니다</h2>

      <div className="parents">
        <div className="parent-row">
          <span className="parent-label">신랑</span>
          <span>{groom.father} · {groom.mother}</span>
          <span className="child-name">의 아들 <strong>{groom.name}</strong></span>
        </div>
        <div className="parent-row">
          <span className="parent-label">신부</span>
          <span>{bride.father} · {bride.mother}</span>
          <span className="child-name">의 딸 <strong>{bride.name}</strong></span>
        </div>
      </div>

      <p className="message">{message}</p>
      <p className="message parents-msg">{parentsMessage}</p>
    </section>
  )
}
