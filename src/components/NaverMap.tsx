import { useEffect, useRef, useState } from 'react'
import { loadNaverMapScript } from '../utils/loadNaverMapScript'

type NaverMapProps = {
  lat: number
  lng: number
  name: string
  embedUrl?: string
}

export function NaverMap({ lat, lng, name, embedUrl }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading')
  const clientId = import.meta.env.VITE_NAVER_MAP_CLIENT_ID

  useEffect(() => {
    if (embedUrl) {
      setStatus('ready')
      return
    }

    if (!clientId) {
      setStatus('error')
      return
    }

    let cancelled = false

    loadNaverMapScript(clientId)
      .then(() => {
        if (cancelled || !mapRef.current || !window.naver?.maps) return

        const position = new naver.maps.LatLng(lat, lng)
        const map = new naver.maps.Map(mapRef.current, {
          center: position,
          zoom: 16,
          zoomControl: true,
          zoomControlOptions: {
            position: naver.maps.Position.TOP_RIGHT,
          },
        })

        new naver.maps.Marker({
          position,
          map,
          title: name,
        })

        setStatus('ready')
      })
      .catch(() => {
        if (!cancelled) setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [clientId, embedUrl, lat, lng, name])

  if (embedUrl) {
    return (
      <div className="map-container">
        <iframe
          src={embedUrl}
          title={`${name} 위치`}
          className="map-iframe"
          loading="lazy"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="map-container">
      {status === 'loading' && (
        <div className="map-status">
          <p>지도를 불러오는 중...</p>
        </div>
      )}
      {status === 'error' && (
        <div className="map-status map-status-error">
          <p>지도를 표시할 수 없습니다</p>
          <span>
            프로젝트 루트에 .env 파일을 만들고
            <br />
            VITE_NAVER_MAP_CLIENT_ID를 설정해 주세요
          </span>
        </div>
      )}
      <div ref={mapRef} className="map-canvas" />
    </div>
  )
}
