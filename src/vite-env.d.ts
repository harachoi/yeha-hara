/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NAVER_MAP_CLIENT_ID: string
  readonly VITE_KAKAO_JAVASCRIPT_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface KakaoShareDefaultOptions {
  objectType: 'feed'
  content: {
    title: string
    description: string
    imageUrl: string
    link: {
      mobileWebUrl: string
      webUrl: string
    }
  }
  buttons?: Array<{
    title: string
    link: {
      mobileWebUrl: string
      webUrl: string
    }
  }>
  installTalk?: boolean
}

interface KakaoSdk {
  init: (appKey: string) => void
  isInitialized: () => boolean
  Share: {
    sendDefault: (options: KakaoShareDefaultOptions) => void
  }
}

interface Window {
  Kakao?: KakaoSdk
}
