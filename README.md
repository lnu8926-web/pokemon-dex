# 🎮 포켓몬 도감 v2.0 (Pokemon Pokedex)

**레트로 CRT 스타일의 포켓몬 도감 웹 애플리케이션**

![포켓몬 도감](https://img.shields.io/badge/Pokemon-Pokedex_v2.0-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Chakra UI](https://img.shields.io/badge/Chakra_UI-2.8.2-teal?style=for-the-badge&logo=chakraui)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple?style=for-the-badge&logo=vite)

## 📖 프로젝트 소개

1990년대 포켓몬 게임의 도감을 모티브로 한 레트로 CRT 스타일의 웹 애플리케이션입니다.
포켓볼의 빨간색 하우징과 초록색 CRT 스크린을 활용한 향수 가득한 디자인으로 151마리의 1세대 포켓몬 정보를 제공합니다.

### 🎯 핵심 컨셉

- **레트로 CRT 모니터** 스타일링 (스캔라인, 글로우 효과)
- **포켓볼 디자인** 테마 (빨간색 컨테이너)
- **터미널 UI/UX** (초록색 텍스트, 모노스페이스 폰트)
- **1세대 포켓몬** 완전 지원 (151마리)

## ✨ 주요 기능

### 🔍 **스마트 검색 시스템**

- 포켓몬 번호로 실시간 검색 (1-151)
- 검색 결과 즉시 필터링
- 검색 초기화 버튼 (×) 및 "전체보기" 버튼
- 검색 상태 유지 및 페이지 자동 이동

### 📄 **효율적인 페이지네이션**

- 한 페이지당 9마리 표시 (3×3 그리드)
- 이전/다음 페이지 네비게이션
- 현재 페이지 및 전체 페이지 수 표시

### �️ **상세 정보 모달**

- 포켓몬 클릭 시 전체화면 상세 정보
- 큰 포켓몬 이미지 및 완전한 기술 목록
- 모달 내 이전/다음 포켓몬 탐색 (←→ 버튼)
- 키보드 방향키 네비게이션 지원
- ESC 키로 모달 닫기

### 🎨 **레트로 CRT 디자인**

- 포켓볼 빨간색 하우징 스타일
- CRT 모니터 효과 (스캔라인, 글로우, 플리커)
- 초록색 터미널 텍스트 (#00FF41)
- Orbitron 모노스페이스 폰트
- 부드러운 호버 애니메이션 및 트랜지션

### ⭐ **특별 포켓몬 테마**

- **#001 이상해씨**: 시작 포켓몬 (★ STARTER) - 초록색 테마
- **#151 뮤**: 전설의 포켓몬 (★ LEGENDARY) - 보라색 테마
- 특별한 그라데이션 배경과 글로우 효과
- 독특한 호버 애니메이션

## 🚀 시작하기

### 필수 요구사항

- **Node.js** 16.0.0 이상
- **npm** 또는 **yarn**
- 인터넷 연결 (PokéAPI 통신)

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/lnu8926-web/pokemon-dex.git
cd pokemon-dex

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 브라우저에서 접속
http://localhost:5173
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 🛠️ 기술 스택

### **Frontend Core**

- **React 18.2.0** - 컴포넌트 기반 UI 라이브러리
- **Vite 5.0.8** - 고속 개발 서버 및 빌드 도구
- **JavaScript ES6+** - 모던 자바스크립트

### **UI Framework & Styling**

- **Chakra UI 2.8.2** - 모던 React 컴포넌트 라이브러리
- **Chakra UI Icons 2.2.4** - 아이콘 패키지
- **Emotion 11.11.x** - CSS-in-JS 스타일링 엔진
- **Framer Motion 6.5.1** - 부드러운 애니메이션 라이브러리
- **Custom CSS** - 레트로 CRT 효과 구현

### **Data & API**

- **Axios 1.6.0** - HTTP 클라이언트
- **PokéAPI** - RESTful 포켓몬 데이터 API
- **로컬 상태 관리** - React Hooks (useState, useEffect)

### **개발 도구**

- **TypeScript Types** - React 타입 정의
- **Vite Plugin React** - React 개발 환경 최적화
- **ES Modules** - 모던 모듈 시스템

## 📁 프로젝트 구조

```
pokemon-dex/
├── public/
│   └── vite.svg                # Vite 로고
├── src/
│   ├── api/
│   │   └── pokeAPI.js          # PokéAPI 통신 로직
│   ├── components/
│   │   └── pokemonDetail.jsx   # 메인 포켓몬 컴포넌트
│   ├── styles/
│   │   └── pokedex.css         # 레트로 CRT 스타일링
│   └── main.jsx                # 앱 진입점 및 테마 설정
├── index.html                  # 메인 HTML
├── package.json               # 프로젝트 설정 및 의존성
├── vite.config.js            # Vite 빌드 설정
├── README.md                 # 프로젝트 문서
└── .gitignore               # Git 제외 파일 목록
```

## 🎯 핵심 컴포넌트

### **main.jsx**

- ChakraProvider 설정 및 테마 커스터마이징
- 전역 스타일 및 폰트 설정
- 메인 레이아웃 구성 (헤더 + 컨테이너)

### **pokemonDetail.jsx**

- **PokemonCard**: 개별 포켓몬 카드 렌더링 및 특별 스타일링
- **PCards**: 메인 컴포넌트 (검색, 페이지네이션, 그리드)
- **PokemonDetailModal**: 상세 정보 모달 및 네비게이션
- 반응형 그리드 시스템 및 상태 관리

### **pokeAPI.js**

- PokéAPI와의 비동기 통신
- 포켓몬 데이터 패칭 및 에러 처리
- 이미지 및 기술 데이터 정규화

### **pokedex.css**

- CRT 모니터 효과 (스캔라인, 글로우, 플리커)
- 키프레임 애니메이션 (펄스, 스캔, 글로우)
- 레트로 폰트 및 버튼 스타일링

## 🎮 사용 방법

### **기본 탐색**

- **포켓몬 보기**: 메인 화면에서 3×3 그리드로 배치된 포켓몬 카드 확인
- **페이지 이동**: 하단 "이전"/"다음" 버튼으로 페이지 전환
- **상세 보기**: 포켓몬 카드 클릭 시 전체화면 모달 팝업

### **검색 기능**

- **검색하기**: 상단 검색창에 포켓몬 번호 입력 (1-151)
- **실시간 필터링**: 입력 즉시 결과 업데이트
- **검색 초기화**: 검색창 우측 [×] 버튼 또는 "전체보기" 버튼 클릭

### **상세 정보 모달**

- **열기**: 포켓몬 카드 클릭
- **네비게이션**:
  - 모달 내 좌우 화살표 버튼
  - 키보드 `←` `→` 방향키
- **닫기**: `ESC` 키, [×] 버튼, 또는 배경 클릭

### **키보드 단축키**

| 키    | 기능                   |
| ----- | ---------------------- |
| `←`   | 이전 포켓몬 (모달에서) |
| `→`   | 다음 포켓몬 (모달에서) |
| `ESC` | 모달 닫기              |

## 🔧 개발 정보

### **반응형 디자인**

```javascript
// 화면 크기별 그리드 설정
columns={{ base: 1, sm: 2, md: 3, lg: 3 }}
```

- **데스크톱**: 3×3 그리드 (9마리)

### **테마 커스터마이징**

```javascript
const pokedexTheme = extendTheme({
  colors: {
    pokedex: {
      red: "#DC143C", // 포켓볼 빨간색
      screenGreen: "#00FF41", // CRT 스크린 초록색
    },
  },
  fonts: {
    heading: "Orbitron", // 레트로 모노스페이스
    body: "Orbitron",
  },
});
```

### **상태 관리 패턴**

```javascript
// 검색, 페이지네이션, 모달 상태 통합 관리
const [searchTerm, setSearchTerm] = useState("");
const [currentPage, setCurrentPage] = useState(1);
const { isOpen, onOpen, onClose } = useDisclosure();
```

### **성능 최적화**

- **조건부 렌더링**: 필요한 컴포넌트만 렌더링
- **이벤트 리스너 정리**: useEffect cleanup으로 메모리 누수 방지
- **이미지 최적화**: PokéAPI 공식 이미지 사용
- **페이지네이션**: 한 번에 9개씩만 로드하여 성능 향상

## 🐛 알려진 이슈 및 제한사항

### **현재 제한사항**

- **포켓몬 범위**: 1세대 포켓몬만 지원 (1-151번)
- **검색 기능**: 포켓몬 번호만 검색 가능 (이름 검색 미지원)
- **언어**: 한국어 UI, 포켓몬 이름은 영어

### **알려진 이슈**

- 간헐적 이미지 로딩 지연 (PokéAPI 응답 속도에 따라)
- 모달 키보드 네비게이션이 첫 로드 시 지연될 수 있음

### **브라우저 지원**

| 브라우저 | 지원 버전 |
| -------- | --------- |
| Chrome   | 80+ ✅    |
| Firefox  | 75+ ✅    |
| Safari   | 13+ ✅    |
| Edge     | 80+ ✅    |

## 🚀 향후 개발 계획

- [ ] 포켓몬 이름으로 검색 기능
- [ ] 2~9세대 포켓몬 추가
- [ ] 타입별 필터링 기능
- [ ] 즐겨찾기 시스템
- [ ] 다국어 지원 (영어, 일본어)
- [ ] PWA (Progressive Web App) 지원
- [ ] 포켓몬 소리 재생 기능

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면 다음 단계를 따라주세요:

1. **Fork** the Project
2. **Create** your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your Changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the Branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### 기여 가이드라인

- 코드 스타일: Prettier + ESLint 설정 준수
- 커밋 메시지: 영어로 명확하게 작성
- 테스트: 새로운 기능 추가 시 테스트 코드 포함

## 📄 라이선스

이 프로젝트는 **MIT 라이선스**를 따릅니다. 자세한 내용은 `LICENSE` 파일을 참고하세요.

### 저작권 고지

- **포켓몬 관련 컨텐츠**: © Nintendo/Creatures Inc./GAME FREAK inc.
- **PokéAPI**: https://pokeapi.co/ (무료 공개 API)
- **프로젝트 코드**: MIT License

## 🙏 감사의 말

- **Nintendo/Game Freak/Creatures** - 포켓몬 원작 및 캐릭터
- **PokéAPI Team** - 훌륭한 무료 포켓몬 데이터 API 제공
- **Chakra UI Team** - 뛰어난 React UI 컴포넌트 라이브러리
- **React Team** - 강력한 UI 라이브러리
- **Vite Team** - 빠른 개발 환경 제공

---

<div align="center">

**Made with ❤️ and 🎮 retro gaming vibes**

[![GitHub](https://img.shields.io/badge/GitHub-lnu8926--web-black?style=for-the-badge&logo=github)](https://github.com/lnu8926-web/pokemon-dex)

> **포켓몬 마스터가 되어보세요!** 🌟  
> _가장 좋아하는 포켓몬을 찾아 레트로 여행을 떠나보세요_

</div>
