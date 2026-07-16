import { weddingData } from '../data/wedding'
import { formatWeddingTime } from '../utils/dateText'
import { Countdown } from './Countdown'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

export function Calendar() {
  const { date, parentsMessage, invitationVerse, groom, bride } = weddingData
  const firstDay = new Date(date.year, date.month - 1, 1).getDay()
  const daysInMonth = new Date(date.year, date.month, 0).getDate()
  const days: (number | null)[] = []

  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  return (
    <section className="section calendar-section">
      <div className="calendar-message-wrap">
        <div className="scroll-reveal calendar-message-content invitation-frame">
          <p className="section-label calendar-invitation-label scroll-reveal-item">
            Invitation
          </p>
          <blockquote className="invitation-verse scroll-reveal-item">
            <p className="invitation-verse-text">{invitationVerse.text}</p>
            <cite className="invitation-verse-ref">{invitationVerse.reference}</cite>
          </blockquote>
          <p className="message calendar-message scroll-reveal-item">{parentsMessage}</p>
          <p className="calendar-couple-names scroll-reveal-item">
            <span>신랑 {groom.fullName}</span>
            <span className="calendar-couple-dot" aria-hidden="true">·</span>
            <span>신부 {bride.fullName}</span>
          </p>
        </div>
      </div>

      <div className="scroll-reveal calendar-body">
      <p className="calendar-date-header scroll-reveal-item">
        {date.year}년 {date.month}월
      </p>

      <div className="calendar scroll-reveal-item">
        <div className="calendar-weekdays">
          {WEEKDAYS.map((d) => (
            <span key={d} className={d === '일' ? 'sun' : d === '토' ? 'sat' : ''}>
              {d}
            </span>
          ))}
        </div>
        <div className="calendar-days">
          {days.map((d, i) => {
            if (d === date.day) {
              return (
                <span key={i} className="wedding-day-wrap">
                  <span className="wedding-day">{d}</span>
                  <span className="wedding-time">
                    {formatWeddingTime(date.hour, date.minute)}
                  </span>
                </span>
              )
            }

            return (
              <span
                key={i}
                className={[
                  d && (i % 7 === 0) ? 'sun' : '',
                  d && (i % 7 === 6) ? 'sat' : '',
                ].filter(Boolean).join(' ')}
              >
                {d ?? ''}
              </span>
            )
          })}
        </div>
      </div>

      <div className="scroll-reveal-item">
        <Countdown />
      </div>
      </div>
    </section>
  )
}
