import { weddingData } from '../data/wedding'
import { kakaoShare } from '../utils/kakaoShare'

export function Share() {
  const { groom, bride, date } = weddingData
  const shareText = `${groom.name} ♥ ${bride.name} 결혼식에 초대합니다\n${date.year}.${date.month}.${date.day} ${date.time}`
  const shareTitle = `${groom.name} ♥ ${bride.name} 결혼식`

  const fallbackShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: window.location.href,
        })
        return
      } catch {
        /* user cancelled */
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText}\n${window.location.href}`)
      alert('청첩장 링크가 복사되었습니다.')
    } catch {
      alert('공유 기능을 사용할 수 없습니다.')
    }
  }

  const handleKakaoShare = async () => {
    try {
      await kakaoShare()
    } catch {
      await fallbackShare()
    }
  }

  const handleShare = async () => {
    await fallbackShare()
  }

  return (
    <section className="section share-section scroll-reveal">
      <p className="section-label">Share</p>
      <div className="share-buttons">
        <button type="button" className="btn-share" onClick={handleKakaoShare}>
          카카오톡 공유
        </button>
        <button type="button" className="btn-share" onClick={handleShare}>
          링크 공유
        </button>
      </div>
    </section>
  )
}
