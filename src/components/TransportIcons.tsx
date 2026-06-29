type IconProps = {
  className?: string
}

export function SubwayIcon({ className }: IconProps) {
  return (
    <svg
      className={`transport-svg-filled ${className ?? ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M4 15.5C4 17.43 5.57 19 7.5 19L6 20.5h1.5L11 19h2l3.5 1.5H18L16.5 19c1.93 0 3.5-1.57 3.5-3.5V5c0-3.5-3.58-4-8-4s-8 .5-8 4v10.5zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V5h12v6z" />
    </svg>
  )
}

export function BusIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="8.5" width="2.2" height="2.8" rx="0.4" />
      <rect x="17.8" y="8.5" width="2.2" height="2.8" rx="0.4" />
      <rect x="7" y="5.5" width="10" height="14" rx="2" />
      <rect x="8.5" y="7" width="7" height="1.2" rx="0.3" />
      <rect x="8.5" y="9" width="7" height="4.8" rx="0.4" />
      <path d="M8.5 14.5h7" />
      <rect x="8.5" y="16.2" width="1.8" height="1.8" rx="0.35" />
      <rect x="13.7" y="16.2" width="1.8" height="1.8" rx="0.35" />
    </svg>
  )
}

export function ParkingIcon({ className }: IconProps) {
  return (
    <svg
      className={`transport-svg-filled ${className ?? ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm2.2 4.2V17h2.9c2.15 0 3.9-1.75 3.9-3.9S14.25 9.2 12.1 9.2H9.2z"
      />
    </svg>
  )
}
