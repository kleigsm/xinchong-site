/**
 * 客户端发布信息。
 *
 * 发版流程：打好 zip → 建 GitHub Release → 把下面三个字段改掉 → push。
 * 页面上的下载按钮、版本号、文件大小都从这里读，不需要动组件。
 */

export type ReleaseStatus = "building" | "available";

export const release = {
  /** 当前版本号，展示用 */
  version: "v0.1.0",

  /** building = 开发中（按钮置灰）；available = 可下载 */
  status: "building" as ReleaseStatus,

  /** 产物文件名，仅展示 */
  fileName: "xinchong-win-x64.zip",

  /** 文件大小，展示用；发版后填真实值，如 "24.6 MB" */
  size: "—",

  /** 发布日期，展示用；发版后填，如 "2026-11-20" */
  date: "即将发布",

  /** 下载地址：指向产品主仓库的最新 Release */
  url: "https://github.com/kleigsm/xinchong/releases/latest",

  /** 更新日志链接 */
  notesUrl: "https://github.com/kleigsm/xinchong/releases",

  /** 本次更新摘要 */
  notes: "桌面悬浮、点击反馈、三套性格切换",

  /** 系统要求 */
  requires: {
    os: "Windows 10 / 11",
    arch: "x64",
  },
} as const;

export const repoUrl = "https://github.com/kleigsm/xinchong";
export const siteRepoUrl = "https://github.com/kleigsm/xinchong-site";
