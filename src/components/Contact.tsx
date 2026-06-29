import { weddingData } from '../data/wedding'

export function Contact() {
  const { groom, bride, contact } = weddingData

  return (
    <section className="section contact-section">
      <p className="section-label">Contact</p>
      <h2 className="section-title">연락처</h2>

      <div className="contact-grid">
        <a href={`tel:${groom.phone}`} className="contact-card">
          <span className="contact-role">신랑</span>
          <span className="contact-name">{groom.name}</span>
          <span className="contact-phone">{groom.phone}</span>
        </a>
        <a href={`tel:${bride.phone}`} className="contact-card">
          <span className="contact-role">신부</span>
          <span className="contact-name">{bride.name}</span>
          <span className="contact-phone">{bride.phone}</span>
        </a>
      </div>

      <div className="contact-parents">
        <p>{contact.groomSide}</p>
        <p>{contact.brideSide}</p>
      </div>
    </section>
  )
}
