import localFont from 'next/font/local';
import type { Metadata } from 'next';
import '@/styles/global.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pretendard = localFont({
  variable: '--font-pretendard',
  display: 'swap',
  src: [
    {
      path: '../fonts/Pretendard/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Pretendard/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'UNICORE - 핵심을 꿰뚫는 특별함',
  description:
    '유니코어는 본질을 꿰뚫는 특별함으로 프리미엄 웹 제작을 제공합니다. 웹 · 앱 개발, 디자인, 기술 컨설팅까지 믿고 맡기세요.',
  keywords:
    'UNICORE, 유니코어, 웹 제작, 웹 개발, 프론트엔드, 백엔드, 앱 개발, 디자인, 기술 컨설팅, 외주 개발, 스타트업 개발, 반응형 웹, 기업 홈페이지, 쇼핑몰 구축, SaaS 개발, 플랫폼 구축, UI/UX 디자인, 맞춤형 개발, B2B 솔루션',
  authors: [{ name: 'UNICORE', url: 'https://unicore.kr' }],
  openGraph: {
    title: 'UNICORE - 핵심을 꿰뚫는 특별함',
    description: '프리미엄 웹 제작, 앱 개발, 디자인까지 올인원으로 제공합니다.',
    url: 'https://unicore.kr',
    siteName: 'UNICORE',
    images: [
      {
        url: 'https://unicore.kr/assets/images/og-image.png',
        width: 1080,
        height: 1080,
        alt: 'UNICORE 대표 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNICORE - 핵심을 꿰뚫는 특별함',
    description: '프리미엄 웹 제작, 앱 개발, 디자인까지 올인원으로 제공합니다.',
    images: ['https://unicore.kr/assets/images/og-image.png'],
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: 'index, follow',
  generator: 'Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
