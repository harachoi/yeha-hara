import { QRCodeSVG } from 'qrcode.react'
import { weddingData } from '../data/wedding'
import { kakaoShare } from '../utils/kakaoShare'
import { getShareUrl } from '../utils/shareUrl'

export function Share() {
  const { groom, bride, date, shareUrl } = weddingData
  const shareText = `${groom.name} ♥ ${bride.name} 결혼식에 초대합니다\n${date.year}.${date.month}.${date.day} ${date.time}`
  const shareTitle = `${groom.name} ♥ ${bride.name} 결혼식`

  const fallbackShare = async () => {
    const url = getShareUrl()

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url,
        })
        return
      } catch {
        /* user cancelled */
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText}\n${url}`)
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

      {shareUrl && (
        <div className="share-qr">
          <QRCodeSVG
            value={shareUrl}
            size={148}
            level="M"
            marginSize={2}
            bgColor="#ffffff"
            fgColor="#3d3530"
          />
          <p className="share-qr-caption">QR 코드를 스캔해 청첩장을 확인하세요</p>
        </div>
      )}

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
