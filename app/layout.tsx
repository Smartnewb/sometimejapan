import type { Metadata } from "next";
import { Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "썸타임 × 日本 | 일본 대학생과의 특별한 만남",
  description: "일본 여행 가기 전에 먼저 친구를 만들어보세요. 일본 대학생과 매칭되는 유일한 앱, 썸타임 × 日本",
  keywords: "썸타임, 일본 친구, 일본 대학생, 언어교환, 문화교류, 국제 연애",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
