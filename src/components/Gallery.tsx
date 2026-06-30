import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { weddingData } from '../data/wedding'

type RowVariant = 'hero' | 'trio' | 'duo' | 'solo'

type GalleryRow = {
  variant: RowVariant
  items: { item: (typeof weddingData.gallery)[number]; index: number }[]
}

function getGalleryRows(
  gallery: (typeof weddingData.gallery),
): GalleryRow[] {
  const rows: GalleryRow[] = []
  let i = 0

  if (i < gallery.length) {
    rows.push({
      variant: 'hero',
      items: [{ item: gallery[i], index: i }],
    })
    i += 1
  }

  while (i < gallery.length) {
    const remaining = gallery.length - i

    if (remaining >= 3) {
      rows.push({
        variant: 'trio',
        items: gallery.slice(i, i + 3).map((item, offset) => ({ item, index: i + offset })),
      })
      i += 3
      continue
    }

    if (remaining === 2) {
      rows.push({
        variant: 'duo',
        items: gallery.slice(i, i + 2).map((item, offset) => ({ item, index: i + offset })),
      })
      i += 2
      continue
    }

    rows.push({
      variant: 'solo',
      items: [{ item: gallery[i], index: i }],
    })
    i += 1
  }

  return rows
}

export function Gallery() {
  const { gallery } = weddingData
  const rows = getGalleryRows(gallery)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const touchStartX = useRef(0)
  const touchStartY = useRef(0)
  const scrollLockY = useRef(0)

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

  const activeItem = activeIndex !== null ? gallery[activeIndex] : null
  const lightboxOpen = activeIndex !== null

  useEffect(() => {
    if (!lightboxOpen) return

    scrollLockY.current = window.scrollY

    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollLockY.current}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.width = '100%'
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollLockY.current)
    }
  }, [lightboxOpen])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') showPrev()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, close, showNext, showPrev])

  if (gallery.length === 0) return null

  return (
    <section className="section gallery-section">
      <div className="scroll-reveal gallery-panel">
        <div className="gallery-header scroll-reveal-item">
          <p className="section-label">Gallery</p>
          <p className="gallery-subtitle">우리의 순간들</p>
        </div>

        <div className="gallery-rows">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`gallery-row gallery-row--${row.variant}`}
            >
              {row.items.map(({ item, index }) => (
                <button
                  key={item.src}
                  type="button"
                  className={`gallery-item gallery-item--${row.variant} gallery-item-reveal`}
                  style={{ ['--item-index' as string]: index }}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`${item.alt} 크게 보기`}
                >
                  <span className="gallery-frame">
                    <img src={item.src} alt={item.alt} loading="lazy" />
                    <span className="gallery-frame-shine" aria-hidden="true" />
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
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
