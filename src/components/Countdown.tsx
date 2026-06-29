import { useEffect, useState } from 'react'
import { weddingData } from '../data/wedding'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
  ended: boolean
}

function getWeddingDate() {
  const { year, month, day, hour, minute, second } = weddingData.date
  return new Date(year, month - 1, day, hour, minute, second)
}

function getTimeLeft(): TimeLeft {
  const diff = getWeddingDate().getTime() - Date.now()

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true }
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ended: false,
  }
}

function pad(value: number) {
  return String(value).padStart(2, '0')
}

export function Countdown() {
  const { groom, bride } = weddingData
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'DAY' },
    { value: timeLeft.hours, label: 'HOUR' },
    { value: timeLeft.minutes, label: 'MIN' },
    { value: timeLeft.seconds, label: 'SEC' },
  ]

  return (
    <div className="countdown">
      <div className="countdown-timer">
        {units.map((unit, index) => (
          <div key={unit.label} className="countdown-unit-wrap">
            {index > 0 && <span className="countdown-separator">:</span>}
            <div className="countdown-unit">
              <span className="countdown-value">{pad(unit.value)}</span>
              <span className="countdown-unit-label">{unit.label}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="countdown-message">
        {timeLeft.ended
          ? `${groom.name} ♥ ${bride.name}의 결혼식 날입니다.`
          : `${groom.name} ♥ ${bride.name}의 결혼식이 ${timeLeft.days}일 남았습니다.`}
      </p>
    </div>
  )
}
