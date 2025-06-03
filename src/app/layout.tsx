import type { Metadata } from "next";
import { Header } from "./components/common/Header";
import StyledComponentsRegistry from "./lib/registry";

import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Riderly - 라이더 벙개 모임 플랫폼",
  description: "Riderly - 라이더 벙개 모임 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKr.className} style={{ overflowX: 'hidden' }}>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
