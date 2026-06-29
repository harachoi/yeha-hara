import { weddingData } from '../data/wedding'
import { formatWeddingTime, getPoeticDay, getPoeticMonth } from '../utils/dateText'
import { Countdown } from './Countdown'

export function Calendar() {
  const { date } = weddingData

  return (
    <section className="section calendar-section">
      <div className="poetic-date">
        <p className="poetic-month">{getPoeticMonth(date.month)}</p>
        <p className="poetic-day">{getPoeticDay(date.day)}</p>
        <p className="poetic-time">{formatWeddingTime(date.hour, date.minute)}</p>
      </div>

      <Countdown />
    </section>
  )
}
