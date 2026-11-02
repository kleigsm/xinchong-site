import { release } from "@/lib/release";

export function Download() {
  const available = release.status === "available";

  return (
    <section id="download" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-zinc-200 p-8 sm:p-12 dark:border-zinc-800">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                下载芯宠
              </h2>
              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {available
                  ? "解压即用，无需安装。首次启动会让你选择运行方式。"
                  : "客户端正在开发中。当前版本发布后，这里会出现下载按钮。"}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:grid-cols-3">
                <div>
                  <dt className="text-zinc-400">版本</dt>
                  <dd className="mt-1 font-medium">{release.version}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">发布</dt>
                  <dd className="mt-1 font-medium">{release.date}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">大小</dt>
                  <dd className="mt-1 font-medium">{release.size}</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-zinc-400">系统</dt>
                  <dd className="mt-1 font-medium">{release.requires.os}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">架构</dt>
                  <dd className="mt-1 font-medium">{release.requires.arch}</dd>
                </div>
              </dl>

              {release.notes && (
                <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                  本次更新：{release.notes}
                </p>
              )}
            </div>

            <div className="flex flex-col items-stretch gap-3">
              {available ? (
                <a
                  href={release.url}
                  className="rounded-full bg-zinc-900 px-8 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  下载 {release.fileName}
                </a>
              ) : (
                <span
                  aria-disabled
                  className="cursor-not-allowed rounded-full bg-zinc-200 px-8 py-3 text-center text-sm font-medium text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
                >
                  {release.version} 开发中
                </span>
              )}

              <a
                href={release.notesUrl}
                target="_blank"
                rel="noreferrer"
                className="text-center text-xs text-zinc-500 underline-offset-4 hover:underline dark:text-zinc-400"
              >
                查看全部版本
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            <h3 className="text-sm font-medium">图片隐私承诺</h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              上传的照片只在你的电脑本地处理，用于换肤，<strong>不会上传云端</strong>，
              处理后即丢弃原图。这是问卷中 53.85% 用户的首要顾虑，我们把它当作必须项而不是可选项。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
