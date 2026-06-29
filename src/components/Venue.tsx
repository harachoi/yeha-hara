import { weddingData } from '../data/wedding'
import { NaverMap } from './NaverMap'
import { BusIcon, ParkingIcon, SubwayIcon } from './TransportIcons'

export function Venue() {
  const { venue } = weddingData

  return (
    <section className="section venue-section scroll-reveal">
      <p className="section-label">Location</p>

      <div className="venue-card">
        <h3 className="venue-name">{venue.name}</h3>
        <p className="venue-hall">{venue.hall}</p>
        <p className="venue-address">{venue.address}</p>
      </div>

      <NaverMap
        lat={venue.coords.lat}
        lng={venue.coords.lng}
        name={venue.name}
        embedUrl={venue.mapEmbedUrl || undefined}
      />

      <div className="map-buttons">
        <a href={venue.mapUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
          카카오맵
        </a>
        <a href={venue.naverMapUrl} target="_blank" rel="noopener noreferrer" className="btn-map">
          네이버지도
        </a>
      </div>

      <div className="transport-guide">
        <div className="transport-item">
          <h3 className="transport-title">
            <span className="transport-icon">
              <SubwayIcon />
            </span>
            지하철
          </h3>
          <ul className="transport-list">
            {venue.transport.subway.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="transport-item">
          <h3 className="transport-title">
            <span className="transport-icon">
              <BusIcon />
            </span>
            버스
          </h3>
          <ul className="transport-list">
            {venue.transport.bus.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="transport-item">
          <h3 className="transport-title">
            <span className="transport-icon">
              <ParkingIcon />
            </span>
            주차
          </h3>
          <ul className="transport-list">
            {venue.transport.parking.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
