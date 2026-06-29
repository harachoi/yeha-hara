export const weddingData = {
  heroImage: 'images/hero.jpg',
  groom: {
    name: '예하',
    relation: '장남',
    father: '전창남',
    mother: '성이름',
    phone: '010-1234-5678',
    accounts: [
      { role: '신랑', bank: '국민', number: '111-1234-5678-99', holder: '예하' },
      { role: '아버지', bank: '농협', number: '111-1234-5678-99', holder: '전창남' },
      { role: '어머니', bank: '우리', number: '111-1234-5678-99', holder: '성이름' },
    ],
  },
  bride: {
    name: '하라',
    relation: '장녀',
    father: '최용석',
    mother: '강현주',
    phone: '010-8765-4321',
    accounts: [
      { role: '신부', bank: '신한', number: '110-123-456789', holder: '하라' },
      { role: '아버지', bank: '국민', number: '111-1234-5678-99', holder: '최용석' },
      { role: '어머니', bank: '농협', number: '111-1234-5678-99', holder: '강현주' },
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
    name: '서울웨딩타워',
    hall: '2층',
    address: '서울 송파구 양재대로 932',
    phone: '02-463-5000',
    coords: {
      lat: 37.4969,
      lng: 127.1117,
    },
    mapEmbedUrl: '',
    mapUrl: 'https://map.kakao.com/link/search/%EC%84%9C%EC%9A%B8%EC%9B%A8%EB%94%A9%ED%83%80%EC%9B%8C',
    naverMapUrl: 'https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%EC%9B%A8%EB%94%A9%ED%83%80%EC%9B%8C',
    transport: {
      subway: [
        '3호선·8호선 가락시장역 2번 출구 하차',
        '도보 약 3분',
      ],
      bus: [
        '가락시장·가락시장역·가락몰 정류장 하차',
        '간선 301, 302, 303, 320, 360, 401 / 지선 3413, 3416',
      ],
      parking: [
        '가락몰 동문 지하주차장 이용',
        '약 2,000대 규모 주차 가능',
      ],
    },
  },
  
  parentsMessage: `저희 두 사람이 사랑으로 하나가 되어
새로운 인생을 시작하려 합니다.
귀한 걸음 하시어 축복해 주시면
더없는 기쁨으로 간직하겠습니다.`,
  gallery: [
    { src: 'images/gallery/01.jpg', alt: '웨딩 사진 1' },
    { src: 'images/gallery/02.jpg', alt: '웨딩 사진 2' },
    { src: 'images/gallery/03.jpg', alt: '웨딩 사진 3' },
    { src: 'images/gallery/04.jpg', alt: '웨딩 사진 4' },
    { src: 'images/gallery/05.jpg', alt: '웨딩 사진 5' },
    { src: 'images/gallery/06.jpg', alt: '웨딩 사진 6' },
    { src: 'images/gallery/07.jpg', alt: '웨딩 사진 7' },
    { src: 'images/gallery/08.jpg', alt: '웨딩 사진 8' },
  ],
  contact: {
    groomSide: '신랑측 혼주 전창남',
    brideSide: '신부측 혼주 최용석',
  },
}
