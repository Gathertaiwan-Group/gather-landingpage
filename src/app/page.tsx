const services = [
  {
    title: "形象網站架設",
    desc: "打造高信任品牌官網，讓陌生訪客快速理解你的價值。",
    tag: "Brand Site",
  },
  {
    title: "一頁式團購網站架設",
    desc: "專注轉換路徑，讓活動流量直接變成訂單與名單。",
    tag: "One-page Campaign",
  },
  {
    title: "醫美診所網站架設",
    desc: "以案例、療程、預約導流建立診所的穩定獲客系統。",
    tag: "Clinic Growth",
  },
];

const metrics = [
  { label: "平均建置時程", value: "14-30 天" },
  { label: "可交付頁面", value: "5-20 頁" },
  { label: "可串接流程", value: "客服 / 名單 / 通知" },
];

const portfolio = [
  { name: "品牌形象站 A", category: "形象網站", result: "詢問量 +2.3x" },
  { name: "團購活動頁 B", category: "一頁式團購", result: "轉換率 8.1%" },
  { name: "醫美官網 C", category: "醫美診所", result: "預約送出 +62%" },
];

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#00e5ff2a_0%,transparent_40%),radial-gradient(circle_at_80%_0%,#7c5cff35_0%,transparent_35%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2 md:py-28">
          <div className="relative z-10">
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs tracking-wider text-cyan-200">
              GATHER DIGITAL SYSTEM
            </p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              給樂數位
              <br />
              <span className="text-gradient">讓網站自動運轉</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-300">
              我們把網站從「展示頁」升級成「營運系統」：可接待、可收單、可持續迭代。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#051019]">
                預約策略諮詢
              </a>
              <a href="/portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold">
                查看作品
              </a>
            </div>
          </div>

          <div className="relative z-10 glass-card rounded-2xl p-5">
            <div className="mb-4 flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> SYSTEM ONLINE
            </div>
            <div className="rounded-xl border border-white/10 bg-[#03070f] p-4 font-mono text-xs leading-6 text-zinc-300">
              <p className="text-cyan-300">$ website.deploy --brand "給樂數位"</p>
              <p>&gt; 初始化品牌架構...</p>
              <p>&gt; 連接名單流程...</p>
              <p>&gt; 設定客服自動回覆...</p>
              <p>&gt; 完成。網站已進入自動營運模式。</p>
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

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-semibold">核心服務</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="glass-card rounded-2xl p-5">
              <p className="text-xs text-violet-300">{s.tag}</p>
              <h3 className="mt-2 text-lg font-semibold text-cyan-200">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-2xl font-semibold">精選案例</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.name} className="glass-card rounded-2xl p-5">
              <p className="text-xs font-medium text-violet-300">{item.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.result}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
