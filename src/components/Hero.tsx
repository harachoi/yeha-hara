import heroPhoto from '../assets/hero.jpg'
import { weddingData } from '../data/wedding'

export function Hero() {
  const { groom, bride, date } = weddingData

  return (
    <section className="hero">
      <img
        className="hero-image"
        src={heroPhoto}
        alt={`${groom.name}와 ${bride.name}의 웨딩 사진`}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-subtitle">Wedding Invitation</p>
        <h1 className="hero-names">
          <span>{groom.name}</span>
          <span className="hero-amp">&</span>
          <span>{bride.name}</span>
        </h1>
        <div className="hero-divider" />
        <p className="hero-date">
          {date.year}년 {date.month}월 {date.day}일
        </p>
        <p className="hero-weekday">{date.weekday} · {date.time}</p>
      </div>
    </section>
  )
}
