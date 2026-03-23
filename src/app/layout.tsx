import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "給樂數位｜自動運轉網站服務",
  description: "形象網站、一頁式團購網站、醫美診所網站架設與自動化導入。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <header className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold tracking-wide">
              給樂數位
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium">
              <Link href="/services">服務</Link>
              <Link href="/portfolio">作品集</Link>
              <Link href="/contact" className="rounded-full bg-zinc-900 px-4 py-2 text-white">
                諮詢
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-zinc-200 bg-white py-6 text-center text-xs text-zinc-500">
          © {new Date().getFullYear()} 給樂數位 Gele Digital. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
