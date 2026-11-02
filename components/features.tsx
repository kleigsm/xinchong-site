const features = [
  {
    icon: "🖥️",
    title: "桌面悬浮",
    desc: "常驻桌面边缘，随时看得见。可拖拽、可一键临时隐藏，不挡你干活。",
  },
  {
    icon: "👆",
    title: "点击就有反应",
    desc: "点击或抚摸触发动作 + 一句简短台词。不做长对话，也不需要你打字。",
  },
  {
    icon: "🎭",
    title: "三种性格",
    desc: "开朗、傲娇、害羞，动作、台词、音效成套切换。同一只宠物，不同脾气。",
  },
  {
    icon: "🔕",
    title: "默认不打扰",
    desc: "默认静音、默认不主动搭话、开机自启默认关闭。需要它时才出现。",
  },
];

export function Features() {
  return (
    <section id="features" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          它只做四件事
        </h2>
        <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          不做聊天机器人，不做养成系统，不做功能堆砌。把「陪伴」这一件事做扎实。
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <div className="text-2xl" aria-hidden>
                {f.icon}
              </div>
              <h3 className="mt-4 font-medium">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
