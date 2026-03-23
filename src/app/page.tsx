const services = [
  {
    title: "形象網站架設",
    desc: "為品牌打造專業可信的官網，完整呈現定位、服務與轉換入口。",
  },
  {
    title: "一頁式團購網站架設",
    desc: "聚焦單一商品與快速轉單流程，優化活動檔期與行銷投放成效。",
  },
  {
    title: "醫美診所網站架設",
    desc: "以信任與諮詢為核心，整合療程內容、案例展示與預約導流。",
  },
];

const portfolio = [
  { name: "品牌形象站 A", category: "形象網站", result: "品牌詢問提升 2.3x" },
  { name: "團購活動頁 B", category: "一頁式團購", result: "單檔轉換率 8.1%" },
  { name: "醫美官網 C", category: "醫美診所", result: "預約表單送出 +62%" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm font-semibold tracking-wider text-sky-700">給樂數位</p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
          可自動運轉的網站，
          <br />
          讓品牌不只上線，還能持續成長。
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          我們提供建站 + 自動化導入服務，從客服、名單收集到功能迭代，打造真正可持續營運的網站系統。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white">
            立即諮詢
          </a>
          <a href="/portfolio" className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold">
            查看作品集
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <h2 className="text-2xl font-bold">服務項目</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-bold">精選作品</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.name} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-xs font-semibold text-sky-700">{item.category}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.name}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-zinc-900 px-8 py-10 text-white">
          <h2 className="text-2xl font-bold">想讓網站自動幫你工作嗎？</h2>
          <p className="mt-2 text-zinc-300">從建站到自動化，我們提供可落地、可持續優化的全流程方案。</p>
          <a href="/contact" className="mt-5 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900">
            預約免費諮詢
          </a>
        </div>
      </section>
    </main>
  );
}
