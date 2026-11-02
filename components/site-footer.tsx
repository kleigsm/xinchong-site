import { repoUrl, siteRepoUrl } from "@/lib/release";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 px-5 py-10 sm:px-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 text-sm text-zinc-500 sm:flex-row sm:items-start sm:justify-between dark:text-zinc-400">
        <div>
          <div className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100">
            <span aria-hidden>🐾</span>
            <span>芯宠</span>
          </div>
          <p className="mt-2 max-w-sm text-xs leading-relaxed">
            轻量化桌面情感陪伴小伙伴。集美大学《人机交互与设计心理学》课程项目，
            2026–2027 学年第一学期。
          </p>
        </div>

        <div className="flex gap-10 text-xs">
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">项目</span>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href={repoUrl} target="_blank" rel="noreferrer">
              产品主仓库
            </a>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href={siteRepoUrl} target="_blank" rel="noreferrer">
              本站源码
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-400">站内</span>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="#features">
              功能
            </a>
            <a className="hover:text-zinc-900 dark:hover:text-zinc-100" href="#download">
              下载
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
