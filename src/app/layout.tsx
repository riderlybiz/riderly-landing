import type { Metadata } from "next";
import { Header } from "./components/Header";
import StyledComponentsRegistry from "./lib/registry";

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
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
