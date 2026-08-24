# Awesome DeepSeek Harness (DSH) 插件精选

[English](README.md)

> 一份**自动更新**的 DeepSeek Harness（`dsh`）插件精选列表。

本仓库是一个活着的插件目录的数据源：

- **`data/plugins/*.yml`** —— 每个插件一个文件（唯一数据源）。
- **`scripts/collect.mjs`** —— 每日定时爬虫，发现 `dsh-*` 插件、探测 star、自动分类并写回。人工设定的分类永远优先于机器人。
- **`scripts/generate-readme.mjs`** —— 根据 YAML 数据重新生成双语 README（含每类 star 前三 ⭐ 置顶）。
- **`scripts/build-site.mjs`** —— 用同一份数据构建部署在 Vercel 上的网站。

网站部署在 **Vercel**，每次推送都会重建，因此列表与站点始终保持同步、全天候自我刷新。

## 如何被收录

爬虫在 GitHub 发现带真实使用量的 `dsh-*` 仓库即收录，或由社区提 PR（见 [contributing](contributing.md)）。自动分类是启发式的——若分错类，提一个修正 `category` 的 PR 即可胜出。

## 本地使用

```bash
npm install
npm run generate   # 根据 data/plugins 重新生成 README
npm run collect     # 试跑爬虫（写文件但不提交）
```

## 免责声明

安装插件会在你的机器上运行第三方代码。上榜不代表安全背书——安装前请先审阅源码。
