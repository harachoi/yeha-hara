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
      <rect x="3" y="5" width="18" height="10" rx="2" />
      <path d="M3 9h18" />
      <path d="M8 7v4" />
      <path d="M12 7v4" />
      <path d="M16 7v4" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  )
}

export function ParkingIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" rx="2.5" />
      <path d="M10 16v-8h3a2.5 2.5 0 0 1 0 5h-3" />
    </svg>
  )
}
