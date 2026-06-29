let scriptPromise: Promise<void> | null = null

export function loadNaverMapScript(clientId: string): Promise<void> {
  if (window.naver?.maps) return Promise.resolve()
  if (scriptPromise) return scriptPromise

  scriptPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-naver-map="true"]',
    )

    if (existing) {
      if (window.naver?.maps) {
        resolve()
        return
      }

      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error('네이버 지도 로드 실패')))
      return
    }

    const script = document.createElement('script')
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`
    script.async = true
    script.dataset.naverMap = 'true'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('네이버 지도 로드 실패'))
    document.head.appendChild(script)
  })

  return scriptPromise
}
