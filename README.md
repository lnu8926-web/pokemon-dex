# 🎮 포켓몬 도감 (Pokemon Pokedex)

**레트로 스타일의 포켓몬 도감 웹 애플리케이션**

![포켓몬 도감](https://img.shields.io/badge/Pokemon-Pokedex-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.8.2-teal?style=for-the-badge&logo=chakraui)

## 📖 프로젝트 소개

1990년대 포켓몬 게임의 도감을 모티브로 한 레트로 스타일의 웹 애플리케이션입니다.
포켓볼의 빨간색과 연두색 스크린을 활용한 향수 가득한 디자인으로 151마리의 1세대 포켓몬 정보를 제공합니다.

## ✨ 주요 기능

### 🔍 **검색 및 탐색**

- 포켓몬 번호로 빠른 검색
- 페이지네이션 (12개씩 표시)
- 키보드 화살표 키 탐색 지원
- 모바일 스와이프 제스처 지원

### 📱 **상세 정보 모달**

- 포켓몬 클릭 시 상세 정보 팝업
- 이전/다음 포켓몬 탐색 버튼
- 포켓몬 이미지, 타입, 능력, 스탯 정보
- 학습 가능한 기술 목록 (10개)

### 🎨 **레트로 디자인**

- 포켓볼 빨간색 기계 스타일
- CRT 모니터 효과 (스캔라인, 글로우)
- 연두색 터미널 텍스트
- 모노스페이스 폰트 (Orbitron)

### ⭐ **특별 포켓몬**

- **#001 이상해씨**: 초록색 스타터 테마
- **#151 뮤**: 보라색 전설 테마
- 특별한 애니메이션과 그림자 효과

## 🚀 시작하기

### 필수 요구사항

```bash
Node.js 16.0.0 이상
npm 또는 yarn
```

### 설치 및 실행

```bash
# 저장소 클론
git clone [repository-url]
cd poketmon

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 접속
http://localhost:5173
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🛠️ 기술 스택

### **Frontend**

- **React 18.2.0** - 사용자 인터페이스
- **Chakra UI 2.8.2** - UI 컴포넌트 라이브러리
- **Emotion** - CSS-in-JS 스타일링
- **Framer Motion 6.5.1** - 애니메이션

### **개발 도구**

- **Vite 5.0.8** - 빌드 도구
- **Axios 1.6.0** - HTTP 클라이언트

### **API**

- **PokeAPI** - 포켓몬 데이터 제공

## 📁 프로젝트 구조

```
poketmon/
├── src/
│   ├── api/
│   │   └── pokeAPI.js          # 포켓몬 API 호출 로직
│   ├── components/
│   │   └── PokemonCard.jsx     # 메인 포켓몬 카드 컴포넌트
│   ├── styles/
│   │   └── pokedex.css         # 레트로 스타일링
│   └── main.jsx                # 앱 진입점
├── public/
├── package.json
└── README.md
```

## 🎯 주요 컴포넌트

### **PokemonCard.jsx**

- 포켓몬 카드 그리드 렌더링
- 검색 및 페이지네이션 로직
- 모달 상태 관리
- 키보드/터치 이벤트 처리

### **PokemonDetailModal**

- 포켓몬 상세 정보 표시
- 이전/다음 탐색 기능
- 반응형 디자인

### **pokeAPI.js**

- PokeAPI와의 통신
- 데이터 캐싱 시스템
- 에러 처리

## 🎮 사용 방법

### **탐색**

- **마우스**: 포켓몬 카드 클릭
- **키보드**: ← → 화살표 키 (모달 내)
- **모바일**: 좌우 스와이프 (모달 내)

### **검색**

- 상단 검색창에 포켓몬 번호 입력
- 실시간 필터링 지원

### **페이지네이션**

- 하단 이전/다음 버튼
- 현재 페이지 정보 표시

## 🔧 개발 정보

### **캐싱 시스템**

```javascript
// 포켓몬 데이터 캐시로 성능 최적화
const pokemonCache = new Map();
```

### **반응형 디자인**

- 데스크톱: 4열 그리드
- 태블릿: 3열 그리드
- 모바일: 2열 그리드

### **접근성**

- ARIA 라벨 지원
- 키보드 네비게이션
- 색상 대비 최적화

## 🐛 알려진 이슈

- 일부 포켓몬 이미지 로딩 지연 가능
- 모바일에서 스와이프 감도 조정 필요할 수 있음

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.

## 🙏 감사의 말

- **Nintendo/Game Freak** - 포켓몬 원작
- **PokeAPI** - 포켓몬 데이터 제공
- **Chakra UI Team** - 훌륭한 UI 라이브러리

---

**Made with ❤️ and 🎮 retro vibes**

> 포켓몬 마스터가 되어보세요! 🌟
