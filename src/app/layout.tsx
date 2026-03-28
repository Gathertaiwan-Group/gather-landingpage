import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI 月老｜AI 媒合 × 活動 × 場地平台",
  description: "整合 AI 配對、活動主辦、場地與資源調度的智慧社交活動平台。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-zinc-100">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050914cc] backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-[0.18em] text-cyan-200">
              AI 月老
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium text-zinc-200">
              <Link href="/services" className="hover:text-cyan-300">服務</Link>
              <Link href="/portfolio" className="hover:text-cyan-300">架構</Link>
              <Link href="/contact" className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-cyan-200">
                聯絡我們
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-auto border-t border-white/10 bg-[#050914] py-6 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} AI 月老
        </footer>
      </body>
    </html>
  );
}
