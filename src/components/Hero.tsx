import { useEffect, useRef } from 'react'
import heroPhoto from '../assets/hero.jpg'
import { weddingData } from '../data/wedding'
import { HeroNameWord } from './HeroNameWord'
import { PhotoWaves } from './PhotoWaves'

const HERO_TAGLINE = 'We are getting Married'

export function Hero() {
  const { groom, bride } = weddingData
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    // Lock height once so mobile browser chrome show/hide doesn't rescale the photo.
    const lockHeight = () => {
      hero.style.height = `${window.innerHeight}px`
    }

    lockHeight()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
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
        <h1 className="hero-names" aria-label={HERO_TAGLINE}>
          <HeroNameWord text={HERO_TAGLINE} startDelay={0.7} />
        </h1>
      </div>
    </section>
  )
}
