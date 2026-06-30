import heroPhoto from '../assets/hero.jpg'
import { weddingData } from '../data/wedding'
import { PhotoWaves } from './PhotoWaves'

export function Hero() {
  const { groom, bride } = weddingData

  return (
    <section className="hero">
      <div className="hero-media">
        <img
          className="hero-image"
          src={heroPhoto}
          alt={`${groom.name}와 ${bride.name}의 웨딩 사진`}
        />
      </div>
      <PhotoWaves className="photo-waves--hero" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-names">
          <span>{groom.name}</span>
          <span className="hero-amp">&</span>
          <span>{bride.name}</span>
        </h1>
      </div>
    </section>
  )
}
