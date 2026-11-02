const stats = [
  { value: "92.31%", label: "期待桌宠能「美化桌面」" },
  { value: "4.35", label: "点击动画反馈意愿（5 分制最高项）" },
  { value: "73.08%", label: "因卡顿会直接弃用 —— 性能是红线" },
  { value: "50%", label: "愿意主动下载体验，无人明确拒绝" },
];

export function Evidence() {
  return (
    <section id="evidence" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          这些数字不是拍脑袋
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          产品形态来自 52 份问卷与 2 位用户的深度访谈。用户要的是「好看 + 解压」，
          不是「更能聊」——所以我们把优先级全部压在交互反馈和低打扰上。
        </p>

        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-800">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-6 dark:bg-zinc-950">
              <dt className="text-3xl font-semibold tracking-tight">{s.value}</dt>
              <dd className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 text-xs text-zinc-400">
          数据来源：芯宠用户调研问卷（N=52，2026.10），95% 置信水平下抽样误差约 ±13.6%。
        </p>
      </div>
    </section>
  );
}
