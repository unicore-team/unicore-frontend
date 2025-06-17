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
  description: '프리미엄 웹 제작의 시작, UNICORE',
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png', // 선택
  },
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
