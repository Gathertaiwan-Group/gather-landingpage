import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "給樂數位",
  description: "形象網站、一頁式團購網站、醫美診所網站架設與自動化導入。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-zinc-100">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060a14cc] backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
              GELE DIGITAL
            </Link>
            <nav className="flex items-center gap-5 text-sm font-medium text-zinc-200">
              <Link href="/services" className="hover:text-cyan-300">服務</Link>
              <Link href="/portfolio" className="hover:text-cyan-300">作品集</Link>
              <Link href="/contact" className="rounded-full neon-outline px-4 py-2 text-cyan-200">
                諮詢
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="mt-auto border-t border-white/10 bg-[#060a14] py-6 text-center text-xs text-zinc-400">
          © {new Date().getFullYear()} 給樂數位 Gele Digital. Built for autonomous growth.
        </footer>
      </body>
    </html>
  );
}
