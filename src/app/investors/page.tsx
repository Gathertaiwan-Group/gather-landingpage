export default function InvestorsPage() {
  const blocks = [
    {
      title: "市場問題",
      body: "現有交友平台只解決『看見人』，卻沒有解決高品質媒合、活動落地與供應鏈整合的問題。活動主辦方缺流量與工具，場地與資源方缺有效媒合。",
    },
    {
      title: "我們的解法",
      body: "AI 月老是一個整合 AI 配對、活動主辦、場地與資源出租的社交活動平台，讓媒合不只停留在線上，而是延伸到可執行的活動與供應鏈。",
    },
    {
      title: "商業模式",
      body: "C 端會員、高級媒合、活動抽成、場地/資源預約抽成、主辦方 SaaS 月費與合作品牌收入。",
    },
    {
      title: "護城河",
      body: "AI 配對引擎 + 活動 / 場地 / 資源一體化 + OpenClaw / n8n 自動化營運，降低人力成本並形成平台飛輪。",
    },
  ];

  const milestones = [
    "14 天：Landing Page + Waitlist + 主辦方/場地方表單",
    "30 天：AI profile、活動上架、場地上架、基礎推薦",
    "60 天：預約流程、CRM、自動化客服與內容行銷",
  ];

  return (
    <main className="min-h-screen px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-6xl">
        <section className="neon-outline rounded-3xl bg-[#081325b8] p-8">
          <p className="text-xs tracking-[0.2em] text-cyan-200">INVESTOR ONE-PAGER</p>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">AI 月老：AI 媒合 × 活動 × 場地資源平台</h1>
          <p className="mt-4 max-w-3xl text-zinc-300">
            我們正在打造一個把人、活動、場地與資源整合起來的 AI 社交活動平台，用更低的人力成本，建立更高品質的媒合效率與可擴張商業模式。
          </p>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {blocks.map((b) => (
            <article key={b.title} className="glass-card rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-cyan-200">{b.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{b.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-200">目標客群</h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
              <li>C 端高意圖交友/交際用戶</li>
              <li>活動主辦單位</li>
              <li>場地方與資源供應商</li>
            </ul>
          </article>
          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-200">平台飛輪</h2>
            <p className="mt-4 text-sm text-zinc-300">更多用戶帶來更多活動需求，更多活動帶來場地與資源需求，供應增加又讓平台體驗更完整，形成增長飛輪。</p>
          </article>
          <article className="glass-card rounded-2xl p-6">
            <h2 className="text-xl font-semibold text-cyan-200">資金用途</h2>
            <p className="mt-4 text-sm text-zinc-300">產品開發、AI agent 與自動化流程、主辦方招商、早期用戶增長、內容與品牌推廣。</p>
          </article>
        </section>

        <section className="mt-10 glass-card rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-cyan-200">Roadmap</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-zinc-300">
            {milestones.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
