export default function Home() {
  const features = [
    { icon: "🖼️", title: "专属外观", desc: "上传一张图片，生成属于你的桌宠形象。" },
    { icon: "🎭", title: "可变人格", desc: "开朗 / 傲娇 / 害羞，一键切换性格。" },
    { icon: "👆", title: "桌面陪伴", desc: "点击拖拽，动作、表情与声音实时回应。" },
  ];

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-10 px-6 py-24 text-center">
      <span className="rounded-full border border-zinc-300 px-4 py-1 text-xs tracking-widest text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        MVP 开发中 · WIP
      </span>

      <div className="flex flex-col items-center gap-4">
        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">芯宠</h1>
        <p className="max-w-md text-balance text-lg text-zinc-600 dark:text-zinc-400">
          轻量化桌面情感陪伴小伙伴
        </p>
        <p className="text-sm text-zinc-400">
          专属外观 × 可变人格 × 桌面陪伴
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-zinc-200 p-6 text-left dark:border-zinc-800"
          >
            <div className="text-2xl">{f.icon}</div>
            <h2 className="mt-3 font-medium">{f.title}</h2>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{f.desc}</p>
          </div>
        ))}
      </div>

      <p className="max-w-lg text-xs leading-relaxed text-zinc-400">
        不做聊天机器人，不做养成系统，不做功能堆砌。默认静音、默认不主动搭话。
      </p>

      <footer className="mt-6 text-xs text-zinc-400">
        芯宠 · 集美大学《人机交互与设计心理学》课程项目
      </footer>
    </main>
  );
}
