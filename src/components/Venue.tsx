import { weddingData } from '../data/wedding'
import { NaverMap } from './NaverMap'

export function Venue() {
  const { venue } = weddingData

  return (
    <section className="section venue-section">
      <div className="scroll-reveal venue-content">
        <p className="section-label scroll-reveal-item">Location</p>

        <div className="venue-card scroll-reveal-item">
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-hall">{venue.hall}</p>
        <p className="venue-address">{venue.address}</p>
      </div>

      <div className="scroll-reveal-item">
        <NaverMap
          lat={venue.coords.lat}
          lng={venue.coords.lng}
          name={venue.name}
          embedUrl={venue.mapEmbedUrl || undefined}
        />
      </div>

      <div className="map-buttons scroll-reveal-item">
        <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
          카카오맵
        </a>
        <a href={venue.naverMapUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
          네이버지도
        </a>
      </div>

      <div className="transport-guide scroll-reveal-item">
        <div className="transport-item">
          <h3 className="transport-title">지하철</h3>
          <ul className="transport-list">
            {venue.transport.subway.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="transport-item">
          <h3 className="transport-title">버스</h3>
          <ul className="transport-list">
            {venue.transport.bus.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="transport-item">
          <h3 className="transport-title">주차</h3>
          <ul className="transport-list">
            {venue.transport.parking.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  )
}
