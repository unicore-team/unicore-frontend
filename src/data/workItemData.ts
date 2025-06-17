export type WorkItemData = {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
};

export const workItemData: WorkItemData[] = [
  {
    id: 1,
    thumbnail: '/assets/thumbnails/benefit-thumbnail.png',
    title: '오프라인 홀덤펍 사용자 및 \u200B관리자 페이지 구축',
    description: 'WEB | 디자인 · 프론트엔드 · 백엔드',
  },
  {
    id: 2,
    thumbnail: '/assets/thumbnails/realcoach-thumbnail.png',
    title: '트레이너 맞춤형 일정·회원 \u200B관리 앱 개발',
    description: 'APP | 프론트엔드 · 백엔드',
  },
  {
    id: 3,
    thumbnail: '/assets/thumbnails/facereview-thumbnail.png',
    title: 'AI 활용 감정 분석 웹서비스\u200B - Face Review',
    description: 'WEB | 프론트엔드 · 백엔드',
  },
  {
    id: 4,
    thumbnail: '/assets/thumbnails/mbtid-thumbnail.png',
    title: 'MBTI 기반 디지털 명함 및 \u200B소셜링 서비스 개발',
    description: 'WEB | 디자인 · 프론트엔드',
  },
  {
    id: 5,
    thumbnail: '/assets/thumbnails/trackfarm-thumbnail.png',
    title: 'B2B 농업 기술 스타트업 소개 \u200B홈페이지 구축',
    description: 'WEB | 회사 소개 · SEO',
  },
  {
    id: 6,
    thumbnail: '/assets/thumbnails/dittotrip-thumbnail.png',
    title: '콘텐츠 기반 장소 탐색 \u200B커뮤니티 플랫폼 개발',
    description: 'WEB | 공모전 수상 · 커뮤니티',
  },
];
