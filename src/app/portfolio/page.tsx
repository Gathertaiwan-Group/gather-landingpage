const items = [
  { title: "品牌形象站 A", category: "形象網站", summary: "強化品牌故事與服務導流" },
  { title: "團購活動頁 B", category: "一頁式團購", summary: "優化轉換路徑與下單流程" },
  { title: "醫美官網 C", category: "醫美診所", summary: "建立信任與預約轉化機制" },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">作品集</h1>
        <p className="mt-3 text-zinc-300">以商業結果導向設計，每個專案都為轉換與成長服務。</p>

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
