const items = [
  { title: "AI 配對引擎", category: "Matching", summary: "根據 profile、興趣、目標與活動偏好做更高品質推薦" },
  { title: "活動主辦工作台", category: "Organizer OS", summary: "幫活動方管理上架、報名、名單與觸達流程" },
  { title: "場地 / 資源供應鏈", category: "Venue & Resources", summary: "整合場地時段、器材服務與活動需求媒合" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">平台模組</h1>
        <p className="mt-3 text-zinc-300">這不只是交友產品，而是一套可自動化營運的媒合與活動基礎設施。</p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="glass-card rounded-2xl p-5">
              <p className="text-xs font-semibold text-violet-300">{item.category}</p>
              <h2 className="mt-2 text-xl font-semibold text-zinc-100">{item.title}</h2>
              <p className="mt-2 text-sm text-zinc-300">{item.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
