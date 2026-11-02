import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "芯宠 · 轻量化桌面情感陪伴小伙伴",
  description:
    "上传一张照片生成专属桌宠，开朗 / 傲娇 / 害羞三种性格一键切换，点击就有动作、表情和声音回应。Windows 桌面应用。",
  keywords: ["桌宠", "AI 桌宠", "桌面宠物", "芯宠", "情感陪伴"],
  openGraph: {
    title: "芯宠 · 轻量化桌面情感陪伴小伙伴",
    description:
      "上传一张照片生成专属桌宠，三种性格一键切换，点击就有反应。",
    type: "website",
    locale: "zh_CN",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
