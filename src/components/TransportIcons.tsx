type IconProps = {
  className?: string
}

export function SubwayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="4.5" width="15" height="12" rx="3" />
      <path d="M8 8.5h2.5M13.5 8.5H16M7 13h10" />
      <circle cx="8" cy="17.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="17.5" r="1" fill="currentColor" stroke="none" />
      <path d="M8.5 20h7" />
    </svg>
  )
}

export function BusIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="4.5" width="14" height="12" rx="2.5" />
      <path d="M7.5 8h9M8 12.5h8" />
      <circle cx="9" cy="17.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="17.5" r="1" fill="currentColor" stroke="none" />
      <path d="M8 20h8" />
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
