# 芯宠 · 门户网站

> 芯宠的产品官网：让第一次听说它的人 30 秒内明白这是什么，并把 Windows 客户端交到用户手里。

- **产品主仓库**：[kleigsm/xinchong](https://github.com/kleigsm/xinchong)
- **线上站点（国内可直连）**：<https://xinchong-site.onrender.com>
- **备用站点（境外访问更稳）**：<https://xinchong-site.vercel.app>

> 实测：国内网络直连 Render 正常（~1s），直连 `*.vercel.app` 会超时。对外分享优先用 Render 地址。

---

## 这个仓库做什么

只做三件事：

1. **介绍** —— 产品是什么、解决什么问题、和别的桌宠有什么不同
2. **下载** —— 把 Windows 客户端压缩包交到用户手里，附版本号、系统要求、更新日志
3. **可信** —— 产品截图、功能演示、隐私承诺（图片本地处理、用后即删）

**不在这里做的事**：桌宠客户端本体。Windows 桌面应用是独立工程，见[产品主仓库](https://github.com/kleigsm/xinchong)。

---

## 技术栈

| 项 | 选型 |
|---|---|
| 框架 | Next.js 16（App Router）+ TypeScript |
| 样式 | Tailwind CSS 4 |
| 构建 | Turbopack |
| 宿主 | Render（主站）/ Vercel（备用） |

---

## 目录结构

```
xinchong-site/
├── app/
│   ├── layout.tsx      # 全局布局 + 元信息
│   ├── page.tsx        # 首页：产品介绍 + 下载入口
│   └── globals.css     # Tailwind 入口 + 全局样式变量
├── public/             # 截图、演示图等静态资源
├── README.md
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

后续规划：`components/` 放站点组件，下载区块独立成组件以便随时替换版本信息。

---

## 本地开发

```bash
pnpm install     # 安装依赖
pnpm dev         # 开发模式，http://localhost:3000
pnpm build       # 生产构建
pnpm start       # 运行生产构建
pnpm lint        # 代码检查
```

---

## 部署

两个平台都已绑定本仓库，push 到 `main` 会同时触发自动部署。

**Render（主站）**

- Build Command: `pnpm install --frozen-lockfile && pnpm run build`
- Start Command: `pnpm exec next start -H 0.0.0.0 -p $PORT`
- 环境变量：`NODE_VERSION=24`
- 域名：<https://xinchong-site.onrender.com>

> 免费实例 15 分钟无访问会休眠，冷启动约 30–60 秒。

**Vercel（备用）**

```bash
vercel link      # 首次关联项目（已完成）
vercel --prod    # 手动部署
```

- 域名：<https://xinchong-site.vercel.app>

> 国内直连 `*.vercel.app` 会超时，仅作境外/备用入口。

---

## 客户端下载包

**走 GitHub Releases，不要往 `public/` 里塞压缩包。**

| 方案 | 评价 |
|---|---|
| **GitHub Releases** | ✅ 推荐。版本化、有下载量统计、不占仓库体积、免带宽费 |
| 放 `public/` 里 | ❌ 仓库体积膨胀，每次换包都要提交一次 |
| Render 磁盘 | ❌ 免费实例磁盘非持久，重启即丢 |

压缩包发布在**产品主仓库**的 Releases，本站只做跳转，发新版不用改代码：

```
https://github.com/kleigsm/xinchong/releases/latest
```

---

## 路线图

- [x] 骨架搭建（Next.js + Tailwind）
- [ ] 首页：产品介绍 + 功能演示
- [ ] 下载页：版本号、系统要求、更新日志
- [ ] 隐私承诺区块（本地处理 / 用后即删）
- [ ] 打通 GitHub Releases 下载链路
- [x] 绑定 Vercel / Render 自动部署

---

## 团队与课程背景

**集美大学《人机交互与设计心理学》**课程实验项目（2026–2027 学年第一学期，指导老师：杨宝容）。

| 成员 | 学号 | 分工 |
|---|---|---|
| 林予炫 | 202421332089 | 组长：产品定位、竞品分析、汇报统筹 |
| 高晟铭 | 202421332087 | 问卷设计与数据回收、定量统计 |
| 胡汇兴 | 202421332088 | 访谈提纲、用户访谈、用户画像、MoSCoW |
| 朱哲弘 | 202421332086 | 用户体验地图、PPT 排版、演示视频 |
