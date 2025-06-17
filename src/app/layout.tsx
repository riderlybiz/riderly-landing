import type { Metadata } from "next";
import { Header } from "./components/common/Header";
import StyledComponentsRegistry from "./lib/registry";

import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Footer } from "./components/common/Footer";

const notoSansKr = Noto_Sans_KR({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "라이더의, 라이더를 위한, 라이더에 의한, Riderly",
  description: "모터사이클 라이더를 위한 라이딩 모임 소셜 플랫폼",
  openGraph: {
    title: "라이더의, 라이더를 위한, 라이더에 의한, Riderly",
    description: "모터사이클 라이더를 위한 라이딩 모임 소셜 플랫폼",
    url: "https://riderlybiz.github.io/riderly-landing/",
    siteName: "Riderly",
    images: [
      {
        url: "https://riderlybiz.github.io/riderly-landing/imgs/open_graph_thumnail.png",
        width: 1200,
        height: 600,
        alt: "Riderly OG Image",
      },
    ],
    type: "website",
  }
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
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
