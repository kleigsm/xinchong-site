import { repoUrl } from "@/lib/release";

const nav = [
  { href: "#features", label: "功能" },
  { href: "#compare", label: "对比" },
  { href: "#evidence", label: "调研" },
  { href: "#download", label: "下载" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span aria-hidden className="text-lg leading-none">🐾</span>
          <span>芯宠</span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-300 px-3 py-1 text-xs text-zinc-600 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
