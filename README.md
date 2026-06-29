# 모바일 청첩장

모바일에 최적화된 웨딩 초대장 웹앱입니다.

## 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하세요.

## 내용 수정

`src/data/wedding.ts` 파일에서 신랑·신부 정보, 날짜, 장소, 계좌번호 등을 수정할 수 있습니다.

메인 사진은 `public/images/hero.jpg` 파일을 교체하거나, `heroImage` 경로를 변경하면 됩니다.

갤러리 사진은 `public/images/gallery/` 폴더에 이미지를 넣고, `gallery` 배열에 경로를 추가하면 됩니다.

## 네이버 지도 설정

1. [네이버 클라우드 플랫폼](https://www.ncloud.com/)에서 Maps API 신청
2. Application 등록 후 Client ID 발급
3. 프로젝트 루트에 `.env` 파일 생성:

```
VITE_NAVER_MAP_CLIENT_ID=발급받은_Client_ID
```

4. `src/data/wedding.ts`에서 예식장 좌표 수정:

```ts
coords: { lat: 37.5012, lng: 127.0396 },
```

API 키 없이 사용하려면, 네이버 지도에서 **공유 → 지도 퍼가기**로 받은 URL을 `mapEmbedUrl`에 넣을 수도 있습니다.

## 카카오톡 공유 설정

1. [카카오 디벨로퍼스](https://developers.kakao.com/)에서 JavaScript 키 발급
2. 플랫폼 Web 도메인에 로컬/배포 URL 등록
3. `.env` 파일에 키 추가:

```
VITE_KAKAO_JAVASCRIPT_KEY=발급받은_JavaScript_키
```

키가 없으면 "카카오톡 공유하기" 버튼은 일반 링크 공유로 자동 대체됩니다.

```ts
export const weddingData = {
  groom: { name: '...', ... },
  bride: { name: '...', ... },
  date: { year: 2026, month: 9, day: 12, ... },
  venue: { name: '...', address: '...', ... },
  // ...
}
```

## 배포

GitHub Pages로 배포됩니다: `https://harachoi.github.io/wedding/`

```bash
npm run build
```

`dist` 폴더를 Netlify, Vercel, GitHub Pages 등에 배포하면 됩니다.

배포 후 카카오/네이버 개발자 콘솔에 `https://harachoi.github.io` 도메인을 등록해야 지도·공유 기능이 동작합니다.

## 포함된 섹션

- 메인 히어로 (신랑·신부 이름, 날짜)
- 초대 인사말
- 달력
- 갤러리 (사진 클릭 시 크게 보기)
- 오시는 길 (카카오맵/네이버지도 링크)
- 마음 전하실 곳 (계좌번호 복사)
- 연락처
- 청첩장 공유
