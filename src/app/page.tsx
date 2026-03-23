const services = [
  {
    title: "形象網站架設",
    desc: "高質感品牌官網，強化信任與專業形象，建立可持續導流入口。",
  },
  {
    title: "一頁式團購網站架設",
    desc: "活動導向高轉換頁面，從流量到下單路徑精準優化。",
  },
  {
    title: "醫美診所網站架設",
    desc: "聚焦療程信任、案例展示與預約轉換的完整官網系統。",
  },
];

const portfolio = [
  { name: "品牌形象站 A", category: "形象網站", result: "品牌詢問提升 2.3x" },
  { name: "團購活動頁 B", category: "一頁式團購", result: "單檔轉換率 8.1%" },
  { name: "醫美官網 C", category: "醫美診所", result: "預約表單送出 +62%" },
];

export default function Home() {
  return (
    <main className="grid-bg min-h-screen text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs tracking-wider text-cyan-200">
          AUTONOMOUS WEB OPS
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-6xl">
          讓網站不只上線，
          <span className="text-gradient"> 而是自動運轉。</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          給樂數位專注於科技感網站與營運自動化，從客服流程、名單收集到功能迭代，打造可持續成長的數位引擎。
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#06101a]">
            立即諮詢
          </a>
          <a href="/portfolio" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-zinc-100">
            查看作品集
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-bold text-zinc-100">核心服務</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="glass-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-cyan-200">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">精選作品</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.name} className="glass-card rounded-2xl p-5">
              <p className="text-xs font-semibold text-violet-300">{item.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-100">{item.name}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="neon-outline rounded-3xl bg-[#0a1326cc] px-8 py-10">
          <h2 className="text-2xl font-bold">啟動你的自動營運網站</h2>
          <p className="mt-2 text-zinc-300">讓網站持續接待客戶、收集名單、推進轉換，不再只是靜態門面。</p>
          <a href="/contact" className="mt-5 inline-block rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#06101a]">
            預約免費策略會議
          </a>
        </div>
      </section>
    </main>
  );
}
