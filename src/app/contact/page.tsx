export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-zinc-100">
      <div className="glass-card mx-auto max-w-3xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold">聯絡我們</h1>
        <p className="mt-2 text-zinc-300">留下需求，給樂數位將回覆最適合你的網站與自動化方案。</p>

        <form className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100 placeholder:text-zinc-400" placeholder="姓名" />
          <input className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100 placeholder:text-zinc-400" placeholder="聯絡方式（Email/LINE）" />
          <select className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100">
            <option>想了解的服務</option>
            <option>形象網站架設</option>
            <option>一頁式團購網站架設</option>
            <option>醫美診所網站架設</option>
          </select>
          <textarea className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100 placeholder:text-zinc-400" rows={5} placeholder="需求描述" />
          <button type="button" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#06101a]">
            送出需求
          </button>
        </form>
      </div>
    </main>
  );
}
