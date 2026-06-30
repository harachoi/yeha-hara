type FlowerIconProps = {
  className?: string
}

const PETAL_ANGLES = [0, 72, 144, 216, 288]

export function FlowerIcon({ className }: FlowerIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 76"
      fill="none"
      aria-hidden="true"
    >
      <g
        stroke="currentColor"
        strokeWidth="1.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(22 17)">
          {PETAL_ANGLES.map((angle) => (
            <ellipse
              key={angle}
              cx="0"
              cy="-5.2"
              rx="2.15"
              ry="4.35"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>

        <path d="M22 23.5v31.5" />
        <path d="M22 39.5 17.2 43.5 22 42" />
        <path d="M22 49.5 26.8 53.5 22 52" />
      </g>
    </svg>
  )
}
