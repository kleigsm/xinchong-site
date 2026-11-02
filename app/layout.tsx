import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "芯宠 · AI 个性化互动桌宠",
  description: "芯宠 —— 一款 AI 驱动的个性化互动桌宠。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
