type WaveVariant =
  | 'top-1'
  | 'top-2'
  | 'top-3'
  | 'bottom-1'
  | 'bottom-2'
  | 'bottom-3'

type WaveSvgProps = {
  variant: WaveVariant
}

const wavePaths: Record<WaveVariant, { d: string; fill: string; fillOpacity?: number }> = {
  'top-1': {
    d: 'M0,0 H400 V8 Q100,24 200,8 T400,8 V60 H0 Z',
    fill: 'var(--color-white)',
    fillOpacity: 0.3,
  },
  'top-2': {
    d: 'M0,0 H400 V12 Q100,28 200,12 T400,12 V60 H0 Z',
    fill: 'var(--color-bg)',
    fillOpacity: 0.45,
  },
  'top-3': {
    d: 'M0,0 H400 V16 Q100,22 200,16 T400,16 V60 H0 Z',
    fill: 'var(--color-white)',
  },
  'bottom-1': {
    d: 'M0,60 V24 Q100,42 200,24 T400,24 V60 Z',
    fill: 'var(--color-white)',
    fillOpacity: 0.28,
  },
  'bottom-2': {
    d: 'M0,60 V29 Q100,45 200,29 T400,29 V60 Z',
    fill: 'var(--color-bg)',
    fillOpacity: 0.45,
  },
  'bottom-3': {
    d: 'M0,60 V34 Q100,26 200,34 T400,34 V60 Z',
    fill: 'var(--color-white)',
  },
}

function WaveSvg({ variant }: WaveSvgProps) {
  const { d, fill, fillOpacity } = wavePaths[variant]

  return (
    <svg viewBox="0 0 400 60" preserveAspectRatio="none">
      <path d={d} fill={fill} fillOpacity={fillOpacity} />
    </svg>
  )
}

function WaveTrack({ variant }: { variant: WaveVariant }) {
  return (
    <div className={`photo-waves__track photo-waves__track--${variant}`}>
      <WaveSvg variant={variant} />
      <WaveSvg variant={variant} />
    </div>
  )
}

type PhotoWavesProps = {
  className?: string
}

export function PhotoWaves({ className }: PhotoWavesProps) {
  return (
    <div className={`photo-waves ${className ?? ''}`} aria-hidden="true">
      <div className="photo-waves__top">
        <div className="photo-waves__top-space" />
        <div className="photo-waves__edge photo-waves__edge--top">
          <div className="photo-waves__layer photo-waves__layer--1">
            <WaveTrack variant="top-1" />
          </div>
          <div className="photo-waves__layer photo-waves__layer--2">
            <WaveTrack variant="top-2" />
          </div>
          <div className="photo-waves__layer photo-waves__layer--3">
            <WaveTrack variant="top-3" />
          </div>
        </div>
      </div>

      <div className="photo-waves__edge photo-waves__edge--bottom">
        <div className="photo-waves__layer photo-waves__layer--1">
          <WaveTrack variant="bottom-1" />
        </div>
        <div className="photo-waves__layer photo-waves__layer--2">
          <WaveTrack variant="bottom-2" />
        </div>
        <div className="photo-waves__layer photo-waves__layer--3">
          <WaveTrack variant="bottom-3" />
        </div>
      </div>
    </div>
  )
}
