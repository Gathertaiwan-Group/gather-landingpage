"use client";

import { useState } from "react";
import Reveal from "@/components/reveal";

const pillars = [
  {
    title: "AI 高品質媒合",
    desc: "依價值觀、興趣、生活目標與互動偏好做更準的推薦，而不是無限滑卡。",
    tag: "Matchmaking",
  },
  {
    title: "活動主辦整合",
    desc: "主辦方可上架活動、招募適合對象、管理報名與追蹤成效。",
    tag: "Events",
  },
  {
    title: "場地與資源調度",
    desc: "場地方與器材/服務供應商可管理時段、價格、設備與接單流程。",
    tag: "Supply Chain",
  },
];

const metrics = [
  { label: "服務角色", value: "4 類" },
  { label: "整合模組", value: "媒合 / 活動 / 場地 / 資源" },
  { label: "營運模式", value: "AI + 自動化" },
];

const scenarios = [
  { name: "單身用戶", result: "獲得更適合的對象與活動推薦" },
  { name: "活動主辦方", result: "快速找到合適參加者與場地資源" },
  { name: "場地方 / 供應商", result: "把閒置時段與器材轉成收入" },
];

export default function Home() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <main className="min-h-screen text-zinc-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="particle p1" />
        <div className="particle p2" />
        <div className="particle p3" />
        <div className="particle p4" />
      </div>

      <section
        className="relative overflow-hidden border-b border-white/10"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
          setTilt({ x, y });
        }}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#00e5ff2a_0%,transparent_40%),radial-gradient(circle_at_80%_0%,#7c5cff35_0%,transparent_35%)]" />
        <div
          className="hero-banner"
          style={{ transform: `translateX(calc(-50% + ${tilt.x}px)) translateY(${tilt.y * 0.35}px)` }}
        >
          <div className="hero-banner-glow" />
          <div className="hero-banner-scan" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:py-28">
          <div className="relative z-10">
            <p className="intro-fade-up mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs tracking-wider text-cyan-200">
              AI MATCHMAKING & EVENT OS
            </p>
            <h1 className="intro-fade-up intro-delay-1 text-4xl font-semibold leading-tight sm:text-6xl">
              AI 月老
              <br />
              <span className="text-gradient">把人、活動、場地與資源整合成一個系統</span>
            </h1>
            <p className="intro-fade-up intro-delay-2 mt-6 max-w-xl text-lg text-zinc-300">
              我們不是只做交友配對，而是打造一個 AI 驅動的社交活動平台，讓用戶找到適合的人，也讓活動主辦方、場地方與供應商更有效率地媒合與營運。
            </p>
            <div className="intro-fade-up intro-delay-3 mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#051019]">
                申請搶先體驗
              </a>
              <a href="/services" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
                查看服務架構
              </a>
            </div>
          </div>

          <div className="relative z-10 glass-card intro-glow rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> MATCHMAKING SYSTEM ONLINE
            </div>
            <div className="rounded-xl border border-white/10 bg-[#03070f] p-4 font-mono text-xs leading-6 text-zinc-300">
              <p className="text-cyan-300">$ ai-matchmaker.run --mode ecosystem</p>
              <p>&gt; 分析用戶偏好與交友目標...</p>
              <p>&gt; 匹配合適活動、主辦方與場地資源...</p>
              <p>&gt; 推薦候選人與可參加場次...</p>
              <p>&gt; 完成。平台已進入自動媒合模式。</p>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              {metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <p className="text-sm font-semibold text-cyan-200">{m.value}</p>
                  <p className="mt-1 text-[11px] text-zinc-400">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-6 py-14" delayMs={80}>
        <section>
          <h2 className="text-2xl font-semibold">平台三大核心價值</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {pillars.map((s, idx) => (
              <article key={s.title} className="glass-card rounded-2xl p-5 hover:-translate-y-1 hover:border-cyan-300/40 transition-all duration-300" style={{ transitionDelay: `${idx * 70}ms` }}>
                <p className="text-xs text-violet-300">{s.tag}</p>
                <h3 className="mt-2 text-lg font-semibold text-cyan-200">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-6 pb-12" delayMs={120}>
        <section>
          <h2 className="text-2xl font-semibold">適用場景</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {scenarios.map((item, idx) => (
              <article key={item.name} className="glass-card rounded-2xl p-5 hover:-translate-y-1 hover:border-violet-300/40 transition-all duration-300" style={{ transitionDelay: `${idx * 70}ms` }}>
                <p className="text-xs font-medium text-violet-300">Use Case</p>
                <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
                <p className="mt-2 text-sm text-zinc-300">{item.result}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="mx-auto max-w-6xl px-6 pb-20" delayMs={160}>
        <section className="neon-outline rounded-3xl bg-[#081325b8] p-8">
          <h2 className="text-2xl font-semibold">準備把月老服務升級成 AI 驅動平台？</h2>
          <p className="mt-3 text-zinc-300">從媒合、活動、客服到行銷推廣，我們用 AI 與自動化幫你打造可擴張的營運系統。</p>
          <a href="/contact" className="mt-6 inline-flex rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#051019]">
            預約專案規劃
          </a>
        </section>
      </Reveal>
    </main>
  );
}
