export const weddingData = {
  heroImage: '/images/hero.jpg',
  groom: {
    name: '예하',
    father: '김영호',
    mother: '이정희',
    phone: '010-1234-5678',
    accounts: [
      { role: '신랑', bank: '국민', number: '111-1234-5678-99', holder: '예하' },
      { role: '아버지', bank: '농협', number: '111-1234-5678-99', holder: '김영호' },
      { role: '어머니', bank: '우리', number: '111-1234-5678-99', holder: '이정희' },
    ],
  },
  bride: {
    name: '하라',
    father: '박성진',
    mother: '최미경',
    phone: '010-8765-4321',
    accounts: [
      { role: '신부', bank: '신한', number: '110-123-456789', holder: '하라' },
      { role: '아버지', bank: '국민', number: '111-1234-5678-99', holder: '박성진' },
      { role: '어머니', bank: '농협', number: '111-1234-5678-99', holder: '최미경' },
    ],
  },
  date: {
    year: 2026,
    month: 9,
    day: 19,
    weekday: '토요일',
    time: '오후 12시 20분',
    hour: 12,
    minute: 20,
    second: 0,
  },
  venue: {
    name: '그랜드 웨딩홀',
    hall: '3층 그랜드볼룸',
    address: '서울특별시 강남구 테헤란로 123',
    phone: '02-1234-5678',
    coords: {
      lat: 37.5012,
      lng: 127.0396,
    },
    mapEmbedUrl: '',
    mapUrl: 'https://map.kakao.com',
    naverMapUrl: 'https://map.naver.com/v5/search/%EA%B0%95%EB%82%A8%EC%97%AD',
    transport: {
      subway: [
        '2호선 강남역 3번 출구 하차',
        '도보 약 5분',
      ],
      bus: [
        '강남역·강남역사거리 정류장 하차',
        '간선 146, 360, 740 / 지선 4318',
      ],
      parking: [
        '건물 지하 1~3층 주차 가능',
        '2시간 무료 (초과 시 10분당 1,000원)',
        '만차 시 인근 공영주차장 이용',
      ],
    },
  },
  message: `저희 두 사람이 사랑으로 하나가 되어
새로운 인생을 시작하려 합니다.
귀한 걸음 하시어 축복해 주시면
더없는 기쁨으로 간직하겠습니다.`,
  parentsMessage: `사랑하는 두 사람이
서로를 아끼고 존중하며
행복한 가정을 이루기를 바랍니다.
바쁘시겠지만 참석하시어
두 사람의 앞날을 축복해 주시면
감사하겠습니다.`,
  gallery: [
    { src: '/images/gallery/01.jpg', alt: '웨딩 사진 1' },
    { src: '/images/gallery/02.jpg', alt: '웨딩 사진 2' },
    { src: '/images/gallery/03.jpg', alt: '웨딩 사진 3' },
    { src: '/images/gallery/04.jpg', alt: '웨딩 사진 4' },
    { src: '/images/gallery/05.jpg', alt: '웨딩 사진 5' },
    { src: '/images/gallery/06.jpg', alt: '웨딩 사진 6' },
    { src: '/images/gallery/07.jpg', alt: '웨딩 사진 7' },
    { src: '/images/gallery/08.jpg', alt: '웨딩 사진 8' },
  ],
  contact: {
    groomSide: '신랑측 혼주 김영호',
    brideSide: '신부측 혼주 박성진',
  },
}
