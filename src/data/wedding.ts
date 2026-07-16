import { gallery } from './gallery'

export const weddingData = {
  shareUrl: 'https://harachoi.github.io/yeha-hara/',
  groom: {
    name: '예하',
    fullName: '전예하',
    englishName: 'Yeha',
    relation: '장남',
    father: '전창남',
    mother: '조미애',
    accounts: [
      { role: '신랑', bank: '국민', number: '111-1234-5678-99', holder: '전예하' },
      { role: '아버지', bank: '농협', number: '111-1234-5678-99', holder: '전창남' },
      { role: '어머니', bank: '우리', number: '111-1234-5678-99', holder: '조미애' },
    ],
  },
  bride: {
    name: '하라',
    fullName: '최하라',
    englishName: 'Hara',
    relation: '장녀',
    father: '최용석',
    mother: '강현주',
    accounts: [
      { role: '신부', bank: '농협', number: '302-1611-1284-51', holder: '최하라' },
      { role: '아버지', bank: '농협', number: '176361-52-034086', holder: '최용석' },
      { role: '어머니', bank: '농협', number: '713-12-055282', holder: '강현주' },
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
        '도보 약 5분',
      ],
      bus: [
        '가락시장·가락시장역·가락몰 정류장 하차',
        '지선 3413, 3416',
        '간선 301, 302, 303, 320, 360, 401',
      ],
      parking: [
        '가락몰 동문 지하주차장 이용',
        '하객 3시간 무료',
      ],
    },
  },
  
  bibleVerse: {
    text: `이 모든 것 위에 사랑을 더하라
이는 온전하게 매는 띠니라`,
    reference: '골로새서 3:14',
  },
  parentsMessage: `시기마다 늘 찾아오는 사계절과 같이
언제나 차가운 바람이 불 때면
서로의 온기가 되어주고,
눈부신 햇살 아래서는 서로의
그림자가 되어주기로 약속했습니다.

저희의 새로운 시작에
따뜻한 응원을 보내주시면 감사하겠습니다`,
  gallery,
}
