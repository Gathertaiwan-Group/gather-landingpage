export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-zinc-100">
      <div className="glass-card mx-auto max-w-3xl rounded-2xl p-8">
        <h1 className="text-3xl font-bold">聯絡我們</h1>
        <p className="mt-2 text-zinc-300">想合作、成為主辦方、場地方或搶先體驗 AI 月老平台，歡迎留下資訊。</p>

        <form className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100 placeholder:text-zinc-400" placeholder="姓名 / 品牌名稱" />
          <input className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100 placeholder:text-zinc-400" placeholder="聯絡方式（Email / LINE）" />
          <select className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100">
            <option>你是哪一種角色？</option>
            <option>一般用戶</option>
            <option>活動主辦方</option>
            <option>場地方</option>
            <option>器材 / 資源供應方</option>
            <option>合作夥伴</option>
          </select>
          <textarea className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-zinc-100 placeholder:text-zinc-400" rows={5} placeholder="需求描述 / 想合作的內容" />
          <button type="button" className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-[#06101a]">
            送出需求
          </button>
        </form>
      </div>
    </main>
  );
}
