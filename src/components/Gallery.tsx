import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { weddingData } from '../data/wedding'
import { PhotoWaves } from './PhotoWaves'

type GalleryItem = (typeof weddingData.gallery)[number]

type GalleryRow = {
  cols: 2 | 3
  items: { item: GalleryItem; index: number }[]
}

function getGalleryRows(gallery: GalleryItem[]): GalleryRow[] {
  const rows: GalleryRow[] = []
  let i = 0

  while (i < gallery.length) {
    const remaining = gallery.length - i

    if (remaining <= 2) {
      rows.push({
        cols: 2,
        items: gallery.slice(i).map((item, offset) => ({ item, index: i + offset })),
      })
      break
    }

    rows.push({
      cols: 3,
      items: gallery.slice(i, i + 3).map((item, offset) => ({ item, index: i + offset })),
    })
    i += 3
  }

  return rows
}

export function Gallery() {
  const { gallery } = weddingData
  const rows = getGalleryRows(gallery)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)

  const close = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const showPrev = useCallback(() => {
    setActiveIndex((index) => {
      if (index === null || gallery.length === 0) return index
      return (index - 1 + gallery.length) % gallery.length
    })
  }, [gallery.length])

  const showNext = useCallback(() => {
    setActiveIndex((index) => {
      if (index === null || gallery.length === 0) return index
      return (index + 1) % gallery.length
    })
  }, [gallery.length])

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX
    touchStartY.current = event.touches[0].clientY
  }

  const handleTouchEnd = (event: React.TouchEvent) => {
    const deltaX = event.changedTouches[0].clientX - touchStartX.current
    const deltaY = event.changedTouches[0].clientY - touchStartY.current

    if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return

    if (deltaX > 0) showPrev()
    else showNext()
  }

  useEffect(() => {
    if (activeIndex === null) return

    const scrollY = window.scrollY

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, close, showNext, showPrev])

  if (gallery.length === 0) return null

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null

  return (
    <section className="section gallery-section">
      <p className="section-label">Gallery</p>

      <div className="gallery-rows">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`gallery-row gallery-row-${row.cols}`}
          >
            {row.items.map(({ item, index }) => (
              <button
                key={item.src}
                type="button"
                className="gallery-item"
                onClick={() => setActiveIndex(index)}
                aria-label={`${item.alt} 크게 보기`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </button>
            ))}
          </div>
        ))}
      </div>

      {activeItem && activeIndex !== null && createPortal(
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="갤러리 이미지 보기"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={close}
            aria-label="닫기"
          >
            ✕
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-prev"
                onClick={showPrev}
                aria-label="이전 사진"
              >
                ‹
              </button>
              <button
                type="button"
                className="gallery-lightbox-nav gallery-lightbox-next"
                onClick={showNext}
                aria-label="다음 사진"
              >
                ›
              </button>
            </>
          )}

          <div className="gallery-lightbox-content">
            <div className="gallery-lightbox-media">
              <img
                key={activeIndex}
                src={activeItem.src}
                alt={activeItem.alt}
              />
              <PhotoWaves className="photo-waves--lightbox" />
            </div>
            <p className="gallery-lightbox-caption">
              {activeIndex + 1} / {gallery.length}
            </p>
          </div>
        </div>,
        document.body,
      )}
    </section>
  )
}
