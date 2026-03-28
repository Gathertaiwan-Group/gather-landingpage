const services = [
  {
    title: "C 端 AI 媒合服務",
    target: "適合想要高品質認識對象與參與活動的用戶",
    deliverables: ["AI profile 分析", "候選人推薦", "活動推薦", "互動建議"],
    timeline: "即將開放 Beta",
  },
  {
    title: "活動單位管理",
    target: "適合主辦方、聯誼公司、品牌活動團隊",
    deliverables: ["活動上架", "報名管理", "適合人選推薦", "活動成效追蹤"],
    timeline: "MVP 規劃中",
  },
  {
    title: "場地與資源調度",
    target: "適合場地方、器材供應商、服務提供方",
    deliverables: ["時段上架", "器材/服務管理", "預約媒合", "詢價與接單"],
    timeline: "MVP 規劃中",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-zinc-100">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">服務架構</h1>
        <p className="mt-3 text-zinc-300">AI 月老平台串接 C 端媒合、活動主辦與場地/資源供應鏈，形成完整的社交活動作業系統。</p>
        <div className="mt-10 space-y-5">
          {services.map((s) => (
            <section key={s.title} className="glass-card rounded-2xl p-6">
              <h2 className="text-2xl font-semibold text-cyan-200">{s.title}</h2>
              <p className="mt-2 text-sm text-zinc-300">{s.target}</p>
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-200">
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-violet-300">狀態：{s.timeline}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
