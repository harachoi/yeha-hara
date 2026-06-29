const MONTH_NAMES = [
  '',
  '일월',
  '이월',
  '삼월',
  '사월',
  '오월',
  '유월',
  '칠월',
  '팔월',
  '구월',
  '시월',
  '십일월',
  '십이월',
]

const ONES = ['', '한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉']

export function getPoeticMonth(month: number) {
  return `${MONTH_NAMES[month]}의`
}

export function getPoeticDay(day: number) {
  if (day === 1) return '첫 번째 날.'
  if (day < 10) return `${ONES[day]} 번째 날.`
  if (day === 10) return '열 번째 날.'
  if (day < 20) return `열${ONES[day % 10]} 번째 날.`
  if (day === 20) return '스무 번째 날.'
  if (day < 30) return `스물${ONES[day % 10]} 번째 날.`
  if (day === 30) return '서른 번째 날.'
  return `서른${ONES[day % 10]} 번째 날.`
}

export function formatWeddingTime(hour: number, minute: number) {
  const period = hour < 12 ? '오전' : '오후'
  const displayHour = hour % 12 === 0 ? 12 : hour % 12

  return `${period} ${displayHour}:${String(minute).padStart(2, '0')}`
}
