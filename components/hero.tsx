import { release, repoUrl } from "@/lib/release";

export function Hero() {
  const downloadable = release.status === "available";

  return (
    <section id="top" className="relative overflow-hidden px-5 pt-20 pb-12 sm:px-8 sm:pt-28 sm:pb-16">
      {/* 柔光背景 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.18),transparent_65%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(244,114,182,0.12),transparent_65%)]"
      />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-300/80 px-3 py-1 text-xs tracking-wide text-zinc-500 dark:border-zinc-700/80 dark:text-zinc-400">
          <span className="size-1.5 rounded-full bg-rose-500" aria-hidden />
          MVP 开发中 · Windows
        </span>

        <h1 className="mt-8 text-6xl font-semibold tracking-tight sm:text-8xl">
          芯宠
        </h1>

        <p className="mt-5 text-xl text-zinc-700 sm:text-2xl dark:text-zinc-300">
          轻量化桌面情感陪伴小伙伴
        </p>

        <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-zinc-600 dark:text-zinc-400">
          上传一张照片，生成只属于你的桌宠。开朗、傲娇、害羞三种性格一键切换，
          点击或拖拽时，它用动作、表情和声音回应你。
        </p>

        <p className="mt-4 text-sm text-zinc-400">
          专属外观 × 可变人格 × 桌面陪伴
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={downloadable ? release.url : "#download"}
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            下载 Windows 版
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            查看源码
          </a>
        </div>

        <p className="mt-4 text-xs text-zinc-400">
          当前 {release.version} · {release.date}
        </p>
      </div>
    </section>
  );
}
