const services = [
  {
    title: "形象網站架設",
    target: "適合品牌官網、專業顧問、企業形象升級",
    deliverables: ["網站資訊架構", "品牌視覺頁面", "SEO 基礎設定", "聯絡轉換流程"],
    timeline: "約 2-4 週",
  },
  {
    title: "一頁式團購網站架設",
    target: "適合短檔期活動、團購主、爆品頁面",
    deliverables: ["高轉換 Landing Page", "活動倒數與 CTA", "表單/下單導流", "成效追蹤"],
    timeline: "約 1-2 週",
  },
  {
    title: "醫美診所網站架設",
    target: "適合醫美、診所、專業療程品牌",
    deliverables: ["療程內容架構", "案例展示模組", "諮詢預約流程", "信任建立區塊"],
    timeline: "約 3-5 週",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-16 text-zinc-900">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">服務方案</h1>
        <p className="mt-3 text-zinc-600">給樂數位提供建站 + 自動化導入，讓網站成為可持續運轉的營運系統。</p>
        <div className="mt-10 space-y-5">
          {services.map((s) => (
            <section key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-zinc-600">{s.target}</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-sky-700">預估時程：{s.timeline}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
