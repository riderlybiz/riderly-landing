import type { Metadata } from "next";
import Link from "next/link";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riderly - 라이더 벙개 모임 플랫폼",
  description: "오토바이 모임",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <Head>
        <Link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        <Link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
