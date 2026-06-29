let kakaoSdkPromise: Promise<void> | null = null

export function loadKakaoSdk(appKey: string): Promise<void> {
  if (window.Kakao?.isInitialized()) return Promise.resolve()
  if (kakaoSdkPromise) return kakaoSdkPromise

  kakaoSdkPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-kakao-sdk="true"]',
    )

    if (existing) {
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () =>
        reject(new Error('카카오 SDK 로드 실패')),
      )
      return
    }

    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js'
    script.dataset.kakaoSdk = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('카카오 SDK 로드 실패'))
    document.head.appendChild(script)
  })

  return kakaoSdkPromise.then(() => {
    if (!window.Kakao) {
      throw new Error('카카오 SDK 초기화 실패')
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(appKey)
    }
  })
}
