import { weddingData } from '../data/wedding'
import { Countdown } from './Countdown'

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토']

export function Calendar() {
  const { date } = weddingData
  const firstDay = new Date(date.year, date.month - 1, 1).getDay()
  const daysInMonth = new Date(date.year, date.month, 0).getDate()
  const days: (number | null)[] = []

  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let d = 1; d <= daysInMonth; d++) days.push(d)

  return (
    <section className="section calendar-section">
      <p className="section-label">Calendar</p>
      <h2 className="section-title">
        {date.year}년 {date.month}월
      </h2>

      <div className="calendar">
        <div className="calendar-weekdays">
          {WEEKDAYS.map((d) => (
            <span key={d} className={d === '일' ? 'sun' : d === '토' ? 'sat' : ''}>
              {d}
            </span>
          ))}
        </div>
        <div className="calendar-days">
          {days.map((d, i) => (
            <span
              key={i}
              className={[
                d === date.day ? 'wedding-day' : '',
                d && (i % 7 === 0) ? 'sun' : '',
                d && (i % 7 === 6) ? 'sat' : '',
              ].filter(Boolean).join(' ')}
            >
              {d ?? ''}
            </span>
          ))}
        </div>
      </div>

      <Countdown />

      <div className="date-detail">
        <p className="date-main">
          {date.month}월 {date.day}일 {date.weekday}
        </p>
        <p className="date-time">{date.time}</p>
      </div>
    </section>
  )
}
