import heroPhoto from '../assets/hero.jpg'
import { weddingData } from '../data/wedding'
import { loadKakaoSdk } from './loadKakaoSdk'

import { getShareUrl } from './shareUrl'

function getShareImageUrl() {
  return new URL(heroPhoto, window.location.origin).href
}

function formatShareDescription() {
  const { date, venue } = weddingData
  const formattedDate = `${date.year}.${String(date.month).padStart(2, '0')}.${String(date.day).padStart(2, '0')}`

  return `${formattedDate}\n${date.time} | ${venue.name} ${venue.hall}`
}

export async function kakaoShare() {
  const appKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY

  if (!appKey) {
    throw new Error('카카오 앱 키가 설정되지 않았습니다.')
  }

  await loadKakaoSdk(appKey)

  if (!window.Kakao) {
    throw new Error('카카오 SDK를 찾을 수 없습니다.')
  }

  if (!window.Kakao.isInitialized()) {
    window.Kakao.init(appKey)
  }

  const { groom, bride } = weddingData
  const shareUrl = getShareUrl()

  window.Kakao.Share.sendDefault({
    objectType: 'feed',
    content: {
      title: `${groom.name}🤍${bride.name} 결혼합니다.`,
      description: formatShareDescription(),
      imageUrl: getShareImageUrl(),
      link: {
        mobileWebUrl: shareUrl,
        webUrl: shareUrl,
      },
    },
    buttons: [
      {
        title: '모바일 청첩장 보기',
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
    ],
    installTalk: true,
  })
}
