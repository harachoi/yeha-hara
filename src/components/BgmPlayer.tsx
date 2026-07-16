import { useEffect } from 'react'
import { assetUrl } from '../utils/assetUrl'

const BGM_SRC = assetUrl('audio/bgm.mp3')
const BGM_VOLUME = 0.45

export function BgmPlayer() {
  useEffect(() => {
    const audio = new Audio(BGM_SRC)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = BGM_VOLUME

    const tryPlay = () => {
      void audio.play().catch(() => {})
    }

    tryPlay()

    const unlock = () => {
      if (!audio.paused) return
      tryPlay()
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('keydown', unlock)
    }

    window.addEventListener('pointerdown', unlock)
    window.addEventListener('touchstart', unlock)
    window.addEventListener('keydown', unlock)

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('touchstart', unlock)
      window.removeEventListener('keydown', unlock)
      audio.pause()
      audio.src = ''
    }
  }, [])

  return null
}
