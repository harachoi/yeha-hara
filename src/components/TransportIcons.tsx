type IconProps = {
  className?: string
}

export function SubwayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="7.5" width="19" height="9.5" rx="2.5" />
      <path d="M2.5 10h19" />
      <rect x="5.5" y="12" width="3.2" height="2.4" rx="0.4" fill="currentColor" stroke="none" />
      <rect x="10.4" y="12" width="3.2" height="2.4" rx="0.4" fill="currentColor" stroke="none" />
      <rect x="15.3" y="12" width="3.2" height="2.4" rx="0.4" fill="currentColor" stroke="none" />
      <circle cx="7" cy="18.8" r="1.2" />
      <circle cx="17" cy="18.8" r="1.2" />
      <path d="M1.5 20.5h21" />
    </svg>
  )
}

export function BusIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="13.5" rx="2.5" />
      <rect x="7" y="6" width="10" height="5" rx="1.2" />
      <path d="M7 14.5h10" />
      <circle cx="9" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14.5" r="0.9" fill="currentColor" stroke="none" />
      <path d="M8 18.5h8" />
      <circle cx="8.5" cy="20.2" r="1.3" />
      <circle cx="15.5" cy="20.2" r="1.3" />
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
