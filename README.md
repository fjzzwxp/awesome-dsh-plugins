# Awesome DeepSeek Harness (DSH) Plugin [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

English | [中文](README.zh.md)

> A curated list of plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`).

This list is continuously enriched by an automated collector (`scripts/collect.mjs`): it discovers `dsh-*` plugins on GitHub every day, probes their star counts, and auto-classifies them into the categories below. Auto-classification is heuristic — if a plugin lands in the wrong bucket, a PR correcting its `category` wins over the bot. The companion site is built and deployed on Vercel from this repo.

DeepSeek Harness is DeepSeek's open-source agent harness — a runnable coding agent (Web and headless), built on a framework where everything is a plugin: models, tools, sandboxes, session storage, UI, even the agent loop itself. Plugins can extend the official coding agent, swap out its core parts, or assemble something entirely different.

This list collects community plugins that are installable via `dsh plugin add` (each declares a `dsh.bundle` manifest). [PRs welcome](#contributing).

> [!WARNING]
> Installing a plugin runs third-party code on your machine with your own permissions — it can read your files, use your credentials, and reach the network. Tool approvals don't sandbox plugin code. Being on this list is not a security review: check the source before you install, and try unfamiliar plugins somewhere that doesn't hold your keys. See the full disclaimer at the bottom of this page.

<details>
<summary><b>What it takes to be listed here</b></summary>

An entry is added when the plugin installs with `dsh plugin add`, does what its one-line description says, sits in the right category, and is maintained.

That is the whole bar. **This list doesn't rank plugins or judge their quality, and we don't want to.** A slot here proves nothing beyond meeting those rules.

A listing isn't permanent either: entries whose repos go away, stop being maintained, or turn out to be broken get removed. Full criteria and the review checklist: [how submissions are reviewed](contributing.md).

</details>

## Contents

<!-- BEGIN TOC -->
- [Plugins](#plugins)
  - [UI Enhancements](#ui-enhancements)
  - [Usage & Billing](#usage--billing)
  - [Themes & Appearance](#themes--appearance)
  - [Models & Providers](#models--providers)
  - [Identity & Communication](#identity--communication)
  - [Sessions & Messages](#sessions--messages)
  - [Memory](#memory)
  - [Tools & Capabilities](#tools--capabilities)
  - [Browser & Web](#browser--web)
  - [Vision & Multimodal](#vision--multimodal)
  - [Voice & Audio](#voice--audio)
  - [Docs & Knowledge](#docs--knowledge)
  - [Skills & Gestures](#skills--gestures)
  - [Workflows & Automation](#workflows--automation)
  - [Git & Version Control](#git--version-control)
  - [Notifications & Alerts](#notifications--alerts)
  - [Developer Tools](#developer-tools)
  - [Security & Privacy](#security--privacy)
  - [Remote & Mobile](#remote--mobile)
  - [Market & Store](#market--store)
  - [Fun & Gimmicks](#fun--gimmicks)
- [Badge](#badge)
- [Disclaimer](#disclaimer)
<!-- END TOC -->

## Plugins

<!-- BEGIN PLUGINS -->
### UI Enhancements

- ⭐ [yjh051108/dsh-routing-suite](https://github.com/yjh051108/dsh-routing-suite) - dsh-routing-suite — injector + router-standard kit: install the runtime injector first, then the task-aware reasoning-mode router preset (measured P1-P23).
- ⭐ [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) - 开放的侧边栏底座，支持三方拓展注册新侧边栏页面。内置文件渲染编辑/终端/侧边对话/Git/子代理页面 ｜ Open sidebar foundation, supports third-party extensions to register new sidebar pages. Built-in file rendering/editing, terminal, side chat, Git, and sub-agent pages.
- ⭐ [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) - 把 DSH 变成 2005 年门户网站｜Parody ads, fake games, and popups for the DSH Web UI.
- [01Virex/dsh-status-rotator](https://github.com/01Virex/dsh-status-rotator) - Replaces the "Deep diving..." turn-status label with rotating meme-worthy phrases, with typewriter and gradient effects.
- [agi-fans/oh-my-dsh](https://github.com/agi-fans/oh-my-dsh) - A focused, keyboard-first DeepSeek coding agent built on the plugin architecture of DeepSeek Harness and inspired by the interaction quality of oh-my-pi.
- [Aisland-SJL/dsh-worktable](https://github.com/Aisland-SJL/dsh-worktable) - 🖥️ Agent-project workbench for DeepSeek Harness — sidebar app drawer + dockable split workspace + a live control room watching every project.
- [baihejiangnan/dsh-session-context-menu](https://github.com/baihejiangnan/dsh-session-context-menu) - 更好的右键：DeepSeek Harness 应用封装端的完整原生风格上下文菜单.
- [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) - 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件.
- [CanglongCl/dsh-web-review](https://github.com/CanglongCl/dsh-web-review) - DeepSeek Harness Web GUI 的网页预览与元素批注插件，让 AI 根据可视化反馈直接修改前端源码。
- [CAPTAIN1275/dsh-ui-web](https://github.com/CAPTAIN1275/dsh-ui-web) - A DeepSeek Harness (dsh) plugin.
- [cofy-x/dsh-console](https://github.com/cofy-x/dsh-console) - A TypeScript and React/Ink terminal frontend for DeepSeek Harness.
- [dhicoc/dsh-chinese-traditional-wisdom-skill](https://github.com/dhicoc/dsh-chinese-traditional-wisdom-skill) - 中华传统智慧（玄枢）AI Agent 技能包的 DeepSeek Harness（dsh）Cordis 插件：八字/紫微/六爻/梅花/奇门/风水/五运六气/体质全融合，本地确定性引擎 + 可视化 Dashboard，一行 dsh plugin add 安装。
- [DietCokewithSugar/dsh-user-experience](https://github.com/DietCokewithSugar/dsh-user-experience) - Persona-driven UX walkthrough plugin for DeepSeek Harness (DSH) - scans React + TypeScript source code for UX issues, pinpoints them, and suggests fixes.
- [dragonbaba/dsh-routing-suite](https://github.com/dragonbaba/dsh-routing-suite) - Lightweight, localized task routing for DeepSeek Harness.
- [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) - Preview, create, edit office spreadsheets, docs & slides inside DeepSeek Harness. Power by Univer.
- [DreamRift/dsh-router-jspace](https://github.com/DreamRift/dsh-router-jspace) - Router J-Space: DSH agent preset combining dsh-routing-suite, J-Space Cognition Suite and oh-we-need.
- [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) - A sidebar can pop out a separate browser tab (drag it to another monitor).
- [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) - DSH Web UI plugin: skill and MCP management（Web界面的skill/MCP管理工具）.
- [GraySilver/dsh-evolve-modes](https://github.com/GraySilver/dsh-evolve-modes) - 让 Agent 的工作方式可组合、可审查、可持续改进，最终实现 Agent Self Evoling。 DeepSeek Harness Web plugin with composable task controls and isolated, human-reviewed self-evolution.
- [hancao97/hanai-investment-dsh](https://github.com/hancao97/hanai-investment-dsh) - Local-first A-share research workbench for DeepSeek Harness: market dashboards, watchlists, valuation, four investor agents, versioned reports, and continuous post-report chat.
- [HsiangNianian/dsh-auto-continue](https://github.com/HsiangNianian/dsh-auto-continue) - DSH Web UI plugin: auto-sends 「继续」 to resume requests interrupted by non-human causes — error classification, adaptive backoff, pause, idempotency guard, loop guard, templated resume texts, stats, all configurable from the settings card.
- [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) - 为 better-sidebar 提供 Office 三件套预览（.docx/.xlsx/.pptx），独立 bundle 瘦身主体 | Provides Office-suite preview (.docx/.xlsx/.pptx) for better-sidebar as a separate bundle to slim the core.
- [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) - 一套 DSH runtime，Desktop、Web 与 TUI 三种开发体验。
- [kelai141/dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) - dsh 安卓壳 APK——WebView UI + 内嵌 Termux 运行时快照（解压即跑），为dsh本地运行设计的高性能方案.
- [kenz1117/dsh-ui-usage-billing](https://github.com/kenz1117/dsh-ui-usage-billing) - Usage billing dashboard plugin for DeepSeek Harness: sidebar cost metrics, real usage aggregation from session logs, current multi-provider pricing catalog.
- [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) - DeepSeek Harness Web UI plugin for fluid streaming rendering and silky scrolling. 流畅流式渲染与丝滑滚动。
- [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) - DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private.
- [liguobao/dsh-desktop](https://github.com/liguobao/dsh-desktop) - An independent, open-source desktop wrapper for DeepSeek Harness. It starts the bundled @deepseek-ai/dsh Web UI locally and loads it in a hardened Electron window on Linux, macOS, and Windows.
- [lsz-asd/dsh-plugin-session-delete](https://github.com/lsz-asd/dsh-plugin-session-delete) - Delete DeepSeek Harness sessions from the UI: header danger button + sidebar session-row menu item (no conversation jump), risk-consent dialog with session name/id, stops running agents first, in-place list refresh without page reload. Works in web and the desktop client.
- [Moresyl/dsh-studio](https://github.com/Moresyl/dsh-studio) - DeepSeek Harness 原生桌面端 · Linux / macOS / Windows · Rust + Tauri.
- [Nexus-Aethra/DSHBox](https://github.com/Nexus-Aethra/DSHBox) - Manage DeepSeek Harness locally: run multiple DSH versions in isolated containers, open the UI in an embedded WebView, import plugins/skills with one click, share extension bundles, and let a queued task system handle installs with live logs. Zero-dependency installer.
- [niiang/dsh-kimino-theme](https://github.com/niiang/dsh-kimino-theme) - Kimi no Na wa (Your Name) theme for DeepSeek Harness Web GUI.
- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) - GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) - Open DeepSeek Harness workspace directories in VS Code directly from the web GUI.
- [PGZXB/dsh-feishu](https://github.com/PGZXB/dsh-feishu) - The Feishu UI for DeepSeek Harness — a panel-driven control console: every slash command a button on the ⚙️ control-panel card, in-card approvals & questions, live streaming cards, one-QR setup. | DeepSeek Harness 的飞书 UI：面板驱动控制台——每个命令都是卡片按钮，卡内审批与提问，流式卡片，扫码一键配置。
- [plolpl789/dsh-raw-html](https://github.com/plolpl789/dsh-raw-html) - VCP visual-synesthesia protocol plugin for DeepSeek Harness: render agent HTML output as real UI (cards / KaTeX math / Mermaid diagrams / built-in calligraphy fonts / zero-JS interactions), plug-and-play on any DSH environment.
- [rison114514/dsh-endfield-ui](https://github.com/rison114514/dsh-endfield-ui) - Endfield-inspired industrial UI shell for DeepSeek Harness (dsh) — non-official fan theme. Install: dsh plugin --profile web add @rison/dsh-endfield-ui.
- [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) - DeepSeek Harness（dsh）Windows 轻量启动器：双击即用，克制的原生体验 / Lightweight Windows launcher for DeepSeek Harness (dsh) — double-click to run, native & restrained.
- [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) - Native local Taskboard plugin for DeepSeek Harness. SQLite-backed projects, Agent claim/review, and a native Web UI — no iframe, no second chat runtime.
- [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) - OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching.
- [Tommy00748/dsh-theme-cyberpunk2077](https://github.com/Tommy00748/dsh-theme-cyberpunk2077) - Cyberpunk 2077 / Night City theme for the DeepSeek Harness Web UI — CRT scanlines, Kiroshi lock-on, typewriter SFX, Relic glitch & easter eggs.
- [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) - Persistent multi-model workflow teams for DeepSeek Harness — dynamic lead planning, bounded DAGs, per-agent model/tools, Run Center and Token insights.
- [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) - DSH WebUI sticker plugin for bidirectional user and agent reactions.
- [WSL043/DSH-Portable](https://github.com/WSL043/DSH-Portable) - A truly portable DeepSeek Harness desktop build. Sessions, settings, plugins, and workspace move with the folder.
- [xituisuany-max/dsh-client-ui-pet](https://github.com/xituisuany-max/dsh-client-ui-pet) - DSH web GUI 鲸鱼娘桌宠插件：23 个序列帧动作、多吸附点、坐姿专属动作套、token 汇报、滑动选择器（RunningHub H3 Ref2VA 素材管线）.
- [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) - DeepSeek Harness (DSH) plugin: a live iOS Simulator — and a USB-connected iPhone — inside the conversation. 22 agent tools for booting, building, driving the UI by accessibility identity, OCR text or list rows, plus a streaming sidebar panel you can tap and drag on.
- [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) - The DeepSeek Harness plugin for OpenPencil — preview, inspect, and edit real .op documents inside a conversation.

### Usage & Billing

- ⭐ [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - DeepSeek Harness session cost meter plugin: session/daily cost, budget, history, OpenCode Go quota, official & custom-provider balance, Codex-like token heatmap, peak/off-peak pricing with pre-switch popup & system-notification alerts, official price sync, 90+ model pricing catalog, Coding Plan quota queries (7 vendors), bilingual zh/en UI.
- ⭐ [wssfk12138/dsh-damage-pulse](https://github.com/wssfk12138/dsh-damage-pulse) - DeepSeek Harness Token 余额监控插件：鲸鱼娘待机/扣费/复苏动画、峰谷计费、连续扣费飘字与会话费用统计。
- ⭐ [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) - Provider balances, subscription quotas, and token-usage analytics for the DeepSeek Harness Web GUI (dsh web).
- [ai-shushu/dsh-quota-meter](https://github.com/ai-shushu/dsh-quota-meter) - Per-session quota meter for DSH: real-token billing, live progress bar, budget blocking, configurable multi-model pricing. 会话额度监控：真实记账、进度条、额度拦截、价目可配。
- [Aisland-SJL/dsh-usage](https://github.com/Aisland-SJL/dsh-usage) - 🌊 Persistent dock & fully-customizable balance/usage panel for DeepSeek Harness — activity heatmap, dual-channel comparison, local-only & privacy-first.
- [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) - Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost.
- [feiyang-dev/dsh-usage-plugin](https://github.com/feiyang-dev/dsh-usage-plugin) - DeepSeek Harness 用量与消耗插件（dsh-usage-plugin）—— 每次调用的 token 用量/缓存命中统计、峰谷计费、余额查询、CSV/JSON/PNG 导出，可经桌面端一键安装或命令行 dsh plugin add 安装。
- [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) - DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI.
- [kelearns/dsh-token-usage](https://github.com/kelearns/dsh-token-usage) - Token usage heatmap for the Web UI: daily/weekly/cumulative views over a 12-month window with light/dark themes.
- [loongsuite/dsh-plugin](https://github.com/loongsuite/dsh-plugin) - OpenTelemetry tracing for DeepSeek Harness (dsh): turns each agent turn into a GenAI span tree — steps, LLM calls with TTFT, tool executions, token usage — exported over standard OTLP to Jaeger, Grafana Tempo, SigNoz, Langfuse, or any compatible backend.
- [Lxiayu/DshCockpit](https://github.com/Lxiayu/DshCockpit) - Desktop cockpit for DeepSeek Harness (dsh): token usage & cost tracking, budget alerts, runtime auto-update with rollback, Quick Ask hotkey, scheduled tasks, session search. Win+macOS. DeepSeek Harness 桌面驾驶舱：成本/用量监控 · 自动更新 · 定时任务.
- [Make0209/dsh-usage-stats](https://github.com/Make0209/dsh-usage-stats) - DeepSeek Harness 插件：GitHub 风格用量热力图 + Token / 缓存命中 / 账户余额看板 + 工作区别名管理。
- [PolinniZhong/dsh-personal-center](https://github.com/PolinniZhong/dsh-personal-center) - DeepSeek Harness 个人中心:用量统计 / 自定义指令 / 成本估算 / 桌面宠物(纯本地，不联网）。 Personal center & custom instructions for DSH.
- [Rianico/dsh-better-edit](https://github.com/Rianico/dsh-better-edit) - Hash-anchored read/edit/undo_last_edit tools for DeepSeek Harness (dsh), fewer token consumption, lower cost.
- [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) - deepSeek 余额监控与用量统计（DSH 动态 Cordis 插件）：余额监控 · 官方充值入口 · 用量统计 · 三方插件管理.

### Themes & Appearance

- ⭐ [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) - Whale Girl skin series for DeepSeek Harness. 适用于 DeepSeek Harness 的，鲸鱼娘系列皮肤。
- ⭐ [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) - Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path to prompts.
- ⭐ [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) - 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。
- [0nt-one/dsh-neo-skin](https://github.com/0nt-one/dsh-neo-skin) - Neo-brutalism skin with two switchable schemes (Blue Command / Aged Newspaper), hard shadows, sharp corners, and light/dark theme support.
- [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) - Keyboard-first command palette for DeepSeek Harness Web.
- [147228/dsh-xiaoyao-skins](https://github.com/147228/dsh-xiaoyao-skins) - 夕小瑶 × DeepSeek Harness Web 皮肤合集、安装器与社区创作工具链.
- [chouxiaohuai/dsh-uiskin-theme](https://github.com/chouxiaohuai/dsh-uiskin-theme) - Blue Glass Theme (ocean fantasy) for DeepSeek Harness Web — static profile bundle. 海洋幻想主题:海洋背景、玻璃气泡、海洋侧边栏、鲸鱼设置按钮、炫彩模型文字。安装: dsh plugin --profile web add github:chouxiaohuai/uiskin-theme.
- [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) - 把本机 Wallpaper Engine 的壁纸变成 DSH 网页界面的背景：Video 动态播放、Web 以 iframe 加载、Scene 壁纸提取主纹理作为静态帧；iOS 液态玻璃设置窗口（配色 / 玻璃颜色 / 透明度）、内容分级与类型过滤、自定义壁纸上传、紧凑 CD 架布局、黑胶唱片展示、隐藏 / 恢复、倍速 / 翻转与自动轮播。感谢 Jerry 维护 macOS 版。
- [Ewnscat-ya/dsh-client-ui-skin-denia](https://github.com/Ewnscat-ya/dsh-client-ui-skin-denia) - DeepSeek Harness Web GUI 皮肤 · 鸣潮·达妮娅(Denia)主题「虚无之泡」。双形态亮/暗、侧边立绘、可修改的玻璃卡片、浮动泡泡粒子、锁链边框。
- [FeatherHunter/dsh-opencode-palette](https://github.com/FeatherHunter/dsh-opencode-palette) - 🎨 看腻了 DSH 默认皮肤？34 款 opencode 经典配色一键换上——tokyonight、dracula、gruvbox、matrix、rose-pine……即点即换，重启不丢。34 opencode themes for DeepSeek Harness, one click, persisted. More by @FeatherHunter: ⚡ dsh-prompt · 🧠 dsh-mattpocock-skills-deck.
- [fredalxin/dsh-solo-thinking](https://github.com/fredalxin/dsh-solo-thinking) - Solo-style isolated brainstorm branches and Handoffs for DeepSeek Harness.
- [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) - Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, persisted per browser (like Codex themes) — 换皮肤 / 自定义背景插件.
- [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) - DeepSeek Harness 滑动变阻器皮肤.
- [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) - DeepSeek Harness skin market 皮肤市场 已收录100+DSH 皮肤 完善评分系统加人工审核，有便捷的社区收录入口；有在线页面方便在线浏览，也有插件方便管理本地皮肤.
- [LAN-TINA-WS/dsh-gui-customization](https://github.com/LAN-TINA-WS/dsh-gui-customization) - DeepSeek Harness 时装工坊：给 DSH 界面换装——更改主题配色/自定义背景图/自定义视频背景/可调节氛围灯，中英双语 ·DSH Web UI 时装工坊。
- [LaplaceYoung/dsh-qq2006](https://github.com/LaplaceYoung/dsh-qq2006) - DSH (DeepSeek Harness) 的 QQ2006 皮肤插件：注册 qq2006 主题、镜像 body[data-ds-skin]、全局皮肤表与完整素材.
- [Liu-ZA-81/dsh-theme-firefly](https://github.com/Liu-ZA-81/dsh-theme-firefly) - A DeepSeek Harness (dsh) plugin.
- [lyq3/dsh-skin-nebula](https://github.com/lyq3/dsh-skin-nebula) - Anime skin pack for the DSH Web UI: five AI-generated HD themes (Ninja, Sakura, Bamboo, Ronin, Ryujin) with per-theme accent palettes, a top-right shirt-icon switcher, and an adjustable transparency slider.
- [nevertoday/dsh-theme-plugin](https://github.com/nevertoday/dsh-theme-plugin) - Chinese traditional colors as a DeepSeek Harness theme pack.
- [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) - Catppuccin themes plus a toggleable glassmorphism skin for the DSH Web GUI: Latte, Frappé, Macchiato and Mocha registered into the native theme runtime, one-click switching with a persisted choice, and adjustable frosted glass for the top bar, sidebar, composer, stats line and trajectory view.
- [oil-oil/dsh-theme](https://github.com/oil-oil/dsh-theme) - Live theme editor for DeepSeek Harness with curated palettes and typography controls.
- [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) - DeepSeek Harness 换肤 / 壁纸 / 主题包插件 (dsh-plugin) — 8 套 Mirage 主题、每用户强调色、壁纸2.0、主题包导入导出/分享链接、收藏与随机，纯原生 token 系统实现。
- [SLin-code/dsh-custom-skin](https://github.com/SLin-code/dsh-custom-skin) - DSH自定义壁纸/皮肤插件——Custom wallpapers and translucent skins for DeepSeek Harness Web.
- [Small-tailqwq/dsh-deepcel](https://github.com/Small-tailqwq/dsh-deepcel) - 一款模仿 excel 的 dsh 皮肤.
- [XieRW/dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins) - 给 DeepSeek Harness 用的美女系列皮肤：设置里从 哲风壁纸 拉预览网格，点一张即应用，配色从壁纸提取。支持动态壁纸，也保留自定义选图。
- [ymh0000123/dsh-theme-endfield](https://github.com/ymh0000123/dsh-theme-endfield) - 终末地官网风格的 DSH Web 主题：奶油纸底、墨黑文字、信号黄强调、全直角工业编辑风。
- [yoli-mi/dsh-client-ui-custom](https://github.com/yoli-mi/dsh-client-ui-custom) - Configurable DSH web-surface plugin: wallpaper & frosted-glass themes, accent colors, custom keyboard shortcuts, app-usage panel, history strip, message Markdown — zero shell edits.
- [zhaiyateng/dsh-design-skills](https://github.com/zhaiyateng/dsh-design-skills) - Design aesthetics skill pack for DeepSeek Harness (DSH) - keeps vibe-coded websites away from the AI look. 6 styles: dark-saas, apple-minimal, neo-neumorphism, brutalism, glassmorphism, japanese-minimal.

### Models & Providers

- ⭐ [xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) - Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap, then full Standard tools (Project2 98/99).
- ⭐ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) - DSHDesktop：DeepSeek Harness Desktop / DeepSeek Harness 桌面版.
- ⭐ [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) - DeepSeek Harness Tauri 桌面版 | Only 5mb installer, zero environment setup, preset plugins, Windows / macOS / Linux.
- [2439816947/DSH-Desktop](https://github.com/2439816947/DSH-Desktop) - DeepSeek Harness 桌面端.
- [609476965/dsh-LorebookMD](https://github.com/609476965/dsh-LorebookMD) - DSH lorebook-driven fiction writer plugin: import Tavern/SillyTavern character cards & world books, save local Markdown settings, generate novel prose referencing the world.
- [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) - A DeepSeek Harness (dsh) plugin.
- [AcidGr/dsh-web-lan-access](https://github.com/AcidGr/dsh-web-lan-access) - DeepSeek Harness (dsh) Web plugin.
- [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) - A macOS-only native account-pool and provider plugin for DeepSeek Harness.
- [amlyczz/dsh-agy-link](https://github.com/amlyczz/dsh-agy-link) - Google Antigravity (agy CLI) models for DeepSeek Harness — streaming chat, thinking, tool activity, usage, in-GUI Google OAuth login.
- [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) - Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering).
- [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) - AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH).
- [Averyyy/pi-dsh-minimal](https://github.com/Averyyy/pi-dsh-minimal) - Pi adapter for official DeepSeek Harness minimal mode. V4 Pro thinks We need… / I need…, not Let me….
- [Axiaohungry/dsh-llm-codebuddy](https://github.com/Axiaohungry/dsh-llm-codebuddy) - 在deepseek harness中使用workbuddy api，因为公司只提供workbuddy积分.
- [aYang998122/dsh-desktop](https://github.com/aYang998122/dsh-desktop) - DeepSeek Harness 桌面客户端：自包含运行时、双击即用、内置插件市场/技能/记忆管理.
- [BeforeWave/dsh-with-chatgpt](https://github.com/BeforeWave/dsh-with-chatgpt) - Bring ChatGPT’s reasoning to your local codebase. Work directly, or delegate larger tasks to DSH.
- [bihangchi9-creator/dsh-lark-bridge](https://github.com/bihangchi9-creator/dsh-lark-bridge) - A native DeepSeek Harness (dsh) plugin bridging dsh coding agents to Feishu/Lark group chats — one group, one project directory.
- [BlockRunAI/dsh-clawrouter](https://github.com/BlockRunAI/dsh-clawrouter) - A safety gate for DeepSeek Harness: a stronger model reviews dangerous tool calls before they run. Plus vision and BlockRun's full model catalog from one wallet, paid per request over x402.
- [bugmaker2/dsh-plugin-template](https://github.com/bugmaker2/dsh-plugin-template) - Template for deepseek-harness plugin development.
- [cclank/dsh-plugin-hub](https://github.com/cclank/dsh-plugin-hub) - DeepSeek Harness community plugin registry with evidence-based screening.
- [ChangedenCZD/dsh-minimal-turbo](https://github.com/ChangedenCZD/dsh-minimal-turbo) - Deepseek Harness 极简模式 / 许愿模式 Windows 适配，享用满血 Deepseek-V4 系列模型。
- [ChaoMixian/dsh2shell](https://github.com/ChaoMixian/dsh2shell) - Unauthenticated RCE PoC for exposed DeepSeek Harness (dsh) web instances.
- [chaos-03x/dsh-agy](https://github.com/chaos-03x/dsh-agy) - Google Antigravity (agy) OAuth auth + model access plugin for DeepSeek Harness: multi-account pool, 429 rotation, device fingerprinting, CLI and web login.
- [ChenRuoT/dsh-sidebar-qa](https://github.com/ChenRuoT/dsh-sidebar-qa) - 一个基于DSH-better-sidebar的侧边栏提问tab，实现类codex的侧边提问或claude code的/btw功能.
- [CocoSgt/dsh-skills](https://github.com/CocoSgt/dsh-skills) - A DeepSeek Harness (dsh) plugin.
- [Code-DSH/deepseek-harness-code](https://github.com/Code-DSH/deepseek-harness-code) - Community desktop packaging for DeepSeek Harness with an Electron host, integrated plugins, and an independent watchdog.
- [corrinehu/dsh-workbuddy-connect](https://github.com/corrinehu/dsh-workbuddy-connect) - 将 WorkBuddy 桌面 App 包含的模型自动接入 DeepSeek Harness，零配置使用。Bring the models in the WorkBuddy desktop app into DeepSeek Harness with zero configuration.
- [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) - Bridge Deepseek-harness into Claude Code for review, critique, delegation, and session import.
- [cpp285/dsh-plugin-center](https://github.com/cpp285/dsh-plugin-center) - A compact discovery and lifecycle console for DeepSeek Harness plugins.
- [crazywoola/dsh-balance](https://github.com/crazywoola/dsh-balance) - DeepSeek Harness balance plugin for the Settings page.
- [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) - Free web search provider for DeepSeek Harness - DuckDuckGo backend, no API key needed.
- [dickpy/dsh-cloud-sync](https://github.com/dickpy/dsh-cloud-sync) - Portable DeepSeek Harness profile and local-plugin source synchronization via WebDAV.
- [dickpy/dsh-imagegen](https://github.com/dickpy/dsh-imagegen) - DSH (DeepSeek Harness) Web GUI AI image generation plugin: text-to-image & image-to-image via OpenAI-compatible endpoints (gpt-image-2), with shared cross-device history.
- [dsh-tui/dsh-tui](https://github.com/dsh-tui/dsh-tui) - Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle.
- [dundunhan/dsh-video-lens](https://github.com/dundunhan/dsh-video-lens) - A DeepSeek Harness (dsh) plugin.
- [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) - DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF）.
- [Ephemeral-AI-Lab/dsh-plugins](https://github.com/Ephemeral-AI-Lab/dsh-plugins) - Make Deepseek Harness Great.
- [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) - DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web.
- [ExElectron/dsh-gov-portal](https://github.com/ExElectron/dsh-gov-portal) - A DeepSeek Harness (dsh) plugin.
- [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub) - DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（Electron + TypeScript）。多 Tab 管理 Harness / Plugin / MCP / Skills，双击即用。
- [flizzywine/dsh-tavern](https://github.com/flizzywine/dsh-tavern) - 基于 DeepSeek Harness（DSH）的 SillyTavern 类文字游戏 Agent，支持候选项生成、对话式人物卡编辑、剧本模式与素材抽取。
- [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) - DeepSeek Harness 插件：DeepSeek Pro 大脑 + 自动识图。GUI 附加图片默认经官方 deepseek-v4-flash-vision-exp 原生识图，转译成文字后交给 DeepSeek 作答（纯文本的 V4-Pro 也能看图）；支持百炼/智谱/OpenRouter 等任意 OpenAI 兼容 VLM，无 key 自动探测本地 Ollama；安装时有一问式确认.
- [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) - Use openai-codex models and image generation via ChatGPT OAuth for DeepSeek Harness.
- [HakureiMonika/dsh-sandbox-escalation-fix](https://github.com/HakureiMonika/dsh-sandbox-escalation-fix) - Session-aware sandbox escalation compatibility plugin for DeepSeek Harness/DSH第三方模型会话沙箱升级兼容插件.
- [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) - DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness.
- [hanshenmesen/dsh-turn-delete](https://github.com/hanshenmesen/dsh-turn-delete) - Delete one complete turn from a DeepSeek Harness session without deleting the session.
- [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) - 让 AI 回复加入自定义表情，支持Bilibili、小红书、贴吧、知乎等多平台表情包，或自定义表情.
- [hg1048596-pixel/dsh-recall-unread](https://github.com/hg1048596-pixel/dsh-recall-unread) - DeepSeek Harness (DSH) 插件：在模型读取前撤回已发送的文字消息，支持单条与全部撤回。A DeepSeek Harness plugin that recalls sent-but-unread text messages before the model reads them — one-by-one or all at once.
- [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) - 面向 DeepSeek Harness（dsh）的渗透测试模式 @CloverSecLabs.
- [JAdpp/dsh-whale-galgame](https://github.com/JAdpp/dsh-whale-galgame) - 工作推gal两不误~面向DeepSeek Harness的跨会话事件感知Galgame引擎与界面插件，支持鲸鱼娘/GPT/Claude/Grok/Gemini/Kimi多位模型娘角色.
- [JUSTMONIKA2022/dsh-sandbox-escalation-fix](https://github.com/JUSTMONIKA2022/dsh-sandbox-escalation-fix) - Session-aware sandbox escalation compatibility plugin for DeepSeek Harness/DSH第三方模型会话沙箱升级兼容插件.
- [lamost423/dsh-maze](https://github.com/lamost423/dsh-maze) - DeepSeek Harness 的执行迷宫——看 Agent 真实怎么干活：迷宫时间轴 · 数据轨道 · 确定性执行分析 · 多会话对比 | The execution maze for DSH agents: maze timeline, per-step data tracks, deterministic execution analysis, multi-session comparison. Formerly dsh-trace-compare.
- [lamost423/dsh-trace-compare](https://github.com/lamost423/dsh-trace-compare) - Trace Compare & Live Maze for DeepSeek Harness: visualize agent exploration (main path, detours, backtracks) from session logs or live sessions.
- [Lanxing6480/dsh-galgame](https://github.com/Lanxing6480/dsh-galgame) - 我要成为Galgame高手！！将你的Vibe coding界面修改成为Galgame的样子，在不影响工作的情况下和赏心悦目的DeepSeek娘进行友好互动.
- [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) - Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/superpowers.
- [LiangYin233/dsh-provider-model-configurator](https://github.com/LiangYin233/dsh-provider-model-configurator) - DSH 模型 Pro:为 DSH WebUI 提供将 pi-ai 预设或任意已配置提供商的模型上下文、输出上限、推理档位与兼容开关一键应用到目标提供商,并集中查看、新建、编辑、复制与删除各提供商模型条目的能力。
- [MarcoG-h/DSH-Launcher](https://github.com/MarcoG-h/DSH-Launcher) - 最全面的DeepSeek Harness🐋启动器 *首创多实例管理中枢* | 多开并行 | 整合包下载 | 一键部署 | 插件管理 |.
- [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) - Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support, Models-page card. Ported from pi-commandcode-provider.
- [memorax-ai/dsh-harmony](https://github.com/memorax-ai/dsh-harmony) - A library for patching, replacing and decorating dsh plugin during runtime.
- [MichengAI/dsh-agency-agents](https://github.com/MichengAI/dsh-agency-agents) - DSH agency agents 基于 DeepSeek Harness 的全行业智能体.
- [MichengAI/dsh-codex-desktop](https://github.com/MichengAI/dsh-codex-desktop) - DeepSeek Harness Codex 跨平台桌面版，无需提前安装任何环境，开箱即用.
- [MJorgin/dsh-media-skills](https://github.com/MJorgin/dsh-media-skills) - Free image reading & generation for DeepSeek Harness (rc.7 / rc.8 / v0.1.1-rc.1 / rc.2) — paste-image reading with auto vision transcription, DeepSeek-V4-Flash-Vision-Exp / GLM-4V-Flash / SenseNova / Gemini failover, Kolors + U1 Fast generation. No keys in repo.
- [MoFeng2223/dsh-claude-provider](https://github.com/MoFeng2223/dsh-claude-provider) - Custom Claude provider support for DeepSeek Harness.
- [Mombrane/dsh-subagent-monitor](https://github.com/Mombrane/dsh-subagent-monitor) - A DeepSeek Harness (dsh) plugin.
- [Mr-potato-123/dsh-mcp](https://github.com/Mr-potato-123/dsh-mcp) - dsh as mcp, make your claude code or codex etc. faster, more powerful and more economic!
- [myYangyunfan/dsh_desktop](https://github.com/myYangyunfan/dsh_desktop) - DeepSeek Harness (dsh) Windows desktop client - bundled Node.js + dsh CLI, one-click launch.
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) - 在 DSH 对话中生成交互式可视化｜Render model-generated interactive cards inside DSH conversations.
- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) - AgentTeams plugin for DeepSeek Harness.
- [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) - Safe automatic permissions for DeepSeek Harness.
- [OBdangshang07/DSH_Creative_Workshop](https://github.com/OBdangshang07/DSH_Creative_Workshop) - Steam-Workshop-inspired discovery, trust, graph search, collections, and transactional installation planning for DeepSeek Harness plugins.
- [oil-oil/dsh-oil-creator](https://github.com/oil-oil/dsh-oil-creator) - AI-assisted local creator workbench for DeepSeek Harness.
- [oil-oil/dsh-oil-sticky-prompt](https://github.com/oil-oil/dsh-oil-sticky-prompt) - Pin the nearest user prompt to the top of a DeepSeek Harness transcript.
- [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) - 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层.
- [omdsh-dev/dsh-advisor](https://github.com/omdsh-dev/dsh-advisor) - Advisor - Pair a second model that passively reviews each turn and injects notes. 搭配一个会在每轮对话被动注入见解和审查的副模型。
- [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) - Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle.
- [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) - Connect DSH to your database for conversational data analysis and actionable business insights.
- [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) - Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design).
- [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) - 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强.
- [omdsh-dev/dsh-llm-fallbacks](https://github.com/omdsh-dev/dsh-llm-fallbacks) - An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件.
- [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) - Three-tier memory control plane for DeepSeek Harness: persistent runtime context, searchable project documents, pluggable long-term memory, smart routing, supervised agent workflows, WebUI, and headless tools.
- [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) - Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules.
- [onychen/learn-dsh](https://github.com/onychen/learn-dsh) - DeepSeek Harness 拆解教学课程（附上简单教学版实现项目）.
- [Optim-Agent/dsh-plans](https://github.com/Optim-Agent/dsh-plans) - Human-in-the-loop planning preset for DeepSeek Harness (DSH), adapted from prime-plans: researched Markdown plans in ./dsh-plans, reviewer/criticizer subagent refinement, per-workspace language & model settings, goal-driven execution with ponytail + MVP tests.
- [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) - DSH 桌面宠物：一行命令装好即用的透明动画小桌宠，支持多开、大小位置随心配置；还内置 DIY 素材链，能用 AI 视频自造专属宠物.
- [pengpengyi92/dsh-quant](https://github.com/pengpengyi92/dsh-quant) - "🐳 Dsh-Quant: The Everything-Plugin Ai native Quant OS ".
- [PensiveFei/dsh-secure-audit](https://github.com/PensiveFei/dsh-secure-audit) - Read-only security & compliance plugin for DeepSeek Harness: prompt-injection detection, Chinese-PII redaction, and local configuration audit with redacted, reproducible reports.
- [PensiveFei/dsh-voice-scribe](https://github.com/PensiveFei/dsh-voice-scribe) - DSH voice input plugin: tap Alt to talk, get text in composer. Web Speech default (zero config), optional OpenAI-compatible ASR, polish via DSH LLM.
- [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) - Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -> autoReview/verdict -> approval/decided).
- [PerryLink/dsh-industry-research](https://github.com/PerryLink/dsh-industry-research) - Industry and company research domain pack for DeepSeek Harness: methodology skills, industry chain mapping, public-source policy/news tracking, company research cards, and auditable research reports. Research only - not investment advice.
- [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) - Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection).
- [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) - Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, session-log audit, and HMR reload.
- [PlutoKeating/dsh-lark-bot](https://github.com/PlutoKeating/dsh-lark-bot) - DeepSeek Harness (dsh) 接入飞书/Lark bot，扫码即用：流式卡片、项目工作区、并行任务、多角色 Agent、跨会话通知、对话内模型/密钥管理与安全网守护（dsh 崩溃后飞书仍可自救）。A scan-to-connect bridge bot connecting DeepSeek Harness (dsh) into Feishu/Lark: streaming cards, workspaces, parallel tasks, multi-role agents, cross-session notify, in-chat model/key management, and a safety-net guardian.
- [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) - Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows.
- [qiannianhuanxiang/DSHA](https://github.com/qiannianhuanxiang/DSHA) - DeepSeek Harness 安卓启动器：内置 proot+Ubuntu，免 ROOT 免 Termux 一键运行 deepseek-harness，多源测速/分步安装/WebUI 预览/设备 Shell 桥接.
- [qufei1993/dsh-desktop](https://github.com/qufei1993/dsh-desktop) - A community-maintained desktop client for DeepSeek Harness on macOS and Windows.
- [raullenchai/rapid-mlx-dsh-provider](https://github.com/raullenchai/rapid-mlx-dsh-provider) - Native Rapid-MLX provider for DeepSeek Harness (dsh) — dsh reads model facts from the server instead of your settings.yaml.
- [SeaOf0/dsh-redteam-model](https://github.com/SeaOf0/dsh-redteam-model) - 基于dsh web实现的多种模式，目的是服务于redteam进行授权的安全研究，覆盖渗透测试、红队评估、代码审计等范围领域，请勿用于非法行为。（允许二开，赋予模块各位自己的业务逻辑，不定期完善逻辑与修复bug）.
- [seriousz158/dsh-memory](https://github.com/seriousz158/dsh-memory) - A DeepSeek Harness (dsh) plugin.
- [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) - Generate images directly in DeepSeek Harness chats.
- [shaokeyibb/dsh-plugin-product-subagents](https://github.com/shaokeyibb/dsh-plugin-product-subagents) - Role-based Codex / Claude Code / ACP subagent providers for the DeepSeek Harness — continuable children, durable session recovery, per-role product permissions, and delegation with a permission ceiling.
- [SiriLee/dsh-rewind](https://github.com/SiriLee/dsh-rewind) - DeepSeek Harness plugin: in-place conversation rewind in the same session window (Claude Code /rewind semantics) + optional file restore.
- [sjh9714/dsh-win32](https://github.com/sjh9714/dsh-win32) - Fix and diagnose DeepSeek Harness on native Windows. Official PowerShell, Workspace Write, shortcuts, and legacy preset repair. No WSL.
- [sluminositys/dsh-nested-followups](https://github.com/sluminositys/dsh-nested-followups) - Ask a follow-up on any past answer in an isolated branch, keeping your main conversation clean. 针对任意历史回答发起追问，新问题在独立分支中展开，主对话保持干净。A conversation-tree plugin for DeepSeek Harness / DeepSeek Harness 会话树插件。
- [Solismuchengxue/dsh_plugin_swift_cycle](https://github.com/Solismuchengxue/dsh_plugin_swift_cycle) - Swift Cycle governance skill adapter for DeepSeek Harness; user-invoked, version-pinned, and offline-verifiable.
- [songoao25/dsh-bottom-info-bar](https://github.com/songoao25/dsh-bottom-info-bar) - Bottom Info Bar — an information bar plugin for DeepSeek Harness: provider/model, live balance, peak/off-peak pricing with countdown, and real persisted per-session spend in a single line.
- [STARKTANG108/dsh-free-models](https://github.com/STARKTANG108/dsh-free-models) - 一键把 6 家大厂免费大模型接入 DeepSeek Harness：安装脚本 + 配置模板，全部免费、不绑信用卡，不含任何 API Key.
- [starslittle/dsh-queue-plus](https://github.com/starslittle/dsh-queue-plus) - DSH 排队消息增强面板：编辑、删除、插话、排序与批量删除功能.
- [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) - Self-contained DeepSeek Harness (DSH) plugin for Provider/Auth login, model switching, image fallback, token/cost analytics, and same-port Web restart. Useful? A star helps.
- [sumarilkkxx/dsh-artifact](https://github.com/sumarilkkxx/dsh-artifact) - Inline ECharts rendering plugin for DeepSeek Harness.
- [tianmingwan/dsh-vision-any](https://github.com/tianmingwan/dsh-vision-any) - 让纯文本 DeepSeek Harness Agent 直接粘贴图片，支持任意 OpenAI 兼容 / Anthropic / Gemini 视觉 API | Paste images into text-only DeepSeek Harness agents and analyze them with any OpenAI-compatible, Anthropic, or Gemini vision API.
- [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) - DeepSeek Harness plugin for previewable cross-preset session migration. Fixed-schema handoffs preserve state, source-model intent, and unresolved images; the original session stays untouched.
- [Tyan66666/billion-context-dsh](https://github.com/Tyan66666/billion-context-dsh) - Model-driven context management (Active Context Pruning / ACP) for the DeepSeek Harness — the model decides when and what to compress. Ported from billion-context-pi (ranxianglei); acp-kernel reused verbatim. CompactionEngine backend with compress/decompress/search_context/acp_status tools.
- [UNLINEARITY/dsh-code](https://github.com/UNLINEARITY/dsh-code) - Claude-Code-style TUI bundle for DeepSeek Harness. 充分结合 DSH 的核心机制和高级特性与Codex CLI 、Claude Code 等主流交互机制，打造的 DSH-Code. （对齐DSH官方上游最新版本！持续更新中！支持DSH 特殊模式，插件系统，模型管理，子代理管理，切换模型特殊动画）.
- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) - Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth login in the web UI, no API keys.
- [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop) - DeepSeek Harness Desktop App: a local AI desktop workspace for DSH Sessions, projects, files, web research, plugins, and Office artifacts.
- [w2112515/dsh-plugin-development](https://github.com/w2112515/dsh-plugin-development) - Portable Agent Skill for developing and auditing DeepSeek Harness plugins, with an optional profile-installable DSH bundle adapter.
- [Walvez/dsh-codex-sync](https://github.com/Walvez/dsh-codex-sync) - The ultimate 2-way bridge between OpenAI Codex and DSH: bidirectional chat sync, live Skills mount & auto MCP mirroring.
- [william-jin-cmu/dsh-vision](https://github.com/william-jin-cmu/dsh-vision) - dsh 插件：给纯文本 DeepSeek 加视觉——view_image 工具桥接任意 OpenAI 兼容 VLM（默认智谱免费档，实测 4 厂商 10 模型）.
- [WNJXYK/dsh-codex-oauth](https://github.com/WNJXYK/dsh-codex-oauth) - Use your OpenAI subscription with DeepSeek Harness to access GPT models, image generation, and web search.
- [worldwonderer/oh-story-dsh](https://github.com/worldwonderer/oh-story-dsh) - A DSH plugin for novel writing and short-drama production, powered by Oh Story and Drama Skills.
- [wqty123/dsh-browser](https://github.com/wqty123/dsh-browser) - Shared real browser plugin for DeepSeek Harness.
- [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) - DeepSeek Harness 的 ChatGPT/Codex 订阅插件：独立 OAuth、模型、真实额度、搜索与图片；无需 API Key 或 Codex CLI.
- [xiajiajun516/dsh-config-manager](https://github.com/xiajiajun516/dsh-config-manager) - DeepSeek Harness (DSH) backup & restore plugin — export, import, migrate and sync your complete DSH configuration, plugins, MCP servers, skills and workspace. One-click migration to another machine.
- [xiaoshihou514/dsh-desktop-pet](https://github.com/xiaoshihou514/dsh-desktop-pet) - DeepSeek Harness：鲸鱼娘桌宠！.
- [xiaozhe7772222/dsh-opencode-zen](https://github.com/xiaozhe7772222/dsh-opencode-zen) - 0 元接入 6 个免费大模型：OpenCode Zen 免费档模型零配置接入 DeepSeek Harness，免注册免充值，内置 6 个免费模型，多 Key 轮换与限流退避。
- [xiehuan123/dsh-deepread](https://github.com/xiehuan123/dsh-deepread) - Evidence-first deep reading for AI agents — trace claims, evidence, confidence and knowledge maps across articles, books and PDFs.
- [xingj404-lab/dsh-desktop](https://github.com/xingj404-lab/dsh-desktop) - deepseek harness desktop.
- [xmutfyh/dsh-plugin-writing-guard](https://github.com/xmutfyh/dsh-plugin-writing-guard) - DeepSeek Harness (DSH) academic writing guard for papers — 论文去AI味 / AI-writing style detection, evidence preservation, journal-fit calibration, manuscript proofreading, writing_audit & automatic checks. Local, zero network, zero LLM.
- [xuanyuanzhifeng/dsh-plugin-agent-workflow](https://github.com/xuanyuanzhifeng/dsh-plugin-agent-workflow) - DeepSeek Harness Agent Workflow.
- [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) - Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow.
- [yanhua1010/dsh-harness-tutorial](https://github.com/yanhua1010/dsh-harness-tutorial) - DeepSeek Harness Agent 的原理与实现：从零到一实现一个 AI Agent —— 一切皆插件的中文教程（VitePress 站点 + 8 个 Demo + mini-harness 教学项目）.
- [yequ172672/dsh-codex-subscription](https://github.com/yequ172672/dsh-codex-subscription) - DSH 插件:直接复用 Codex CLI 本地登录订阅凭证,在 DeepSeek Harness 中使用 ChatGPT 订阅模型,无需 API Key | DSH plugin: reuse your Codex CLI local subscription login to use ChatGPT subscription models in DeepSeek Harness, no API key required.
- [Yi-111-a/dsh-jingling](https://github.com/Yi-111-a/dsh-jingling) - dsh · dsh-plugin · deepseek · deepseek-harness · deepseek-harness-plugin · ai-companion · desktop-pet · character-card · local-first · privacy · jingling · 鲸灵.
- [Yuntwo/dsh-langfuse-plugin](https://github.com/Yuntwo/dsh-langfuse-plugin) - Langfuse telemetry sidecar bundle for DeepSeek Harness.
- [yyxcnasd/amadeus-for-dsh](https://github.com/yyxcnasd/amadeus-for-dsh) - Amadeus (AI assistant from Steins;Gate 0) for DeepSeek Harness.
- [zenstory-ai/oh-story-dsh](https://github.com/zenstory-ai/oh-story-dsh) - A DSH plugin for novel writing and short-drama production, powered by Oh Story and Drama Skills.
- [zerob13/dsh-better-markdown](https://github.com/zerob13/dsh-better-markdown) - DeepSeek Harness Web plugin powered by markstream-react for resilient streaming Markdown, Mermaid diagrams, KaTeX math, and safe renderer fallback.
- [zhoujianbin/dsh-team-hub](https://github.com/zhoujianbin/dsh-team-hub) - Turn a single-user DeepSeek Harness instance into a secure, workspace-isolated team service.
- [zhu168/dsh-save-money](https://github.com/zhu168/dsh-save-money) - Save-money plugin for DSH (DeepSeek Harness) — define your own "pause / resume" time windows; at pause time running long tasks are paused (not stopped) automatically, and they resume when the window ends.
- [zimodzh/dsh-plugin-dev-skills](https://github.com/zimodzh/dsh-plugin-dev-skills) - An Agent Skills skill for developing DeepSeek Harness (DSH) plugins（开发 DSH 插件的 Agent Skill）——插件/服务/事件/工具/LLM 适配器/打包安装的标准。Works with Claude Code, Codex, DSH, VS Code Copilot & any compatible agent.
- [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) - Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories, with a benchmark-driven validation loop.
- [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) - DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站.

### Identity & Communication

- ⭐ [hewzhew/dsh-agent-rp](https://github.com/hewzhew/dsh-agent-rp) - SillyTavern migration and next-generation Agent RP for DSH.
- ⭐ [liucaimao2026/dsh-personal-directive](https://github.com/liucaimao2026/dsh-personal-directive) - harness 破甲插件安装即用.
- ⭐ [chen731215-dev/dsh-tavern](https://github.com/chen731215-dev/dsh-tavern) - DSH 原生酒馆管理面板，入口：设置 → 通用设置 → 酒馆管理（原生）。多角色卡/多世界书/多预设，会话级预设隔离；世界书智能关键词注入省 60-70% 上下文；记忆总结 + 角色关系网；剧情选项一键发送；创作/扮演双模式；NSFW 成人模式。免费非商用（CC BY-NC-SA 4.0）。安装：dsh plugin --profile web add dsh-tavern.
- [oliblue-evan/dsh-roleplay-preset](https://github.com/oliblue-evan/dsh-roleplay-preset) - DeepSeek 深度调校的沉浸式角色扮演 Agent 预设（dsh）——零工具纯对话、酒馆式演出格式、文件记忆库.
- [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) - DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依赖官方 @deepseek-ai SDK。
- [yjh051108/dsh-mode-boost](https://github.com/yjh051108/dsh-mode-boost) - 模式提升插件：任务感知思维模式路由的实测提升版（deep-persona / boost 重分类 / 深度自适应）.

### Sessions & Messages

- ⭐ [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) - A visual, non-linear conversation workspace plugin for DeepSeek Harness ; A canvas-based session explorer and branching workspace for DeepSeek Harness.
- ⭐ [Tasihi89/dsh-talk-map](https://github.com/Tasihi89/dsh-talk-map) - Visual conversation map for DeepSeek Harness — sessions as cards on a whiteboard: drag to arrange, double-click to chat, draw an edge to fork with injected context. ADHD-friendly spatial memory. · DSH 可视化对话地图.
- ⭐ [Phant0Meow/dsh-meow-memory](https://github.com/Phant0Meow/dsh-meow-memory) - Cross-session memory plugin for DeepSeek Harness: seven-layer SQLite store (soul/user/project/fact/lesson/topic/rules), BM25 retrieval, per-window dream consolidation. 跨会话七层长期记忆插件。
- [abhishekgahlot2/pi-dsh](https://github.com/abhishekgahlot2/pi-dsh) - Pi coding-agent harness with durable sessions, causal history, reversible components, and approval-gated host self-extension.
- [Blank-not-black/dsh-Remote](https://github.com/Blank-not-black/dsh-Remote) - DSH Remote · 口袋里的 DSH 控制台 会话 · 审批 · 提问 · 文件传输，局域网 / Tailscale 直连 多服务器自动选优，聊天记录离线可看 带 Token 鉴权，数据只在你的设备之间流动 Sessions · approvals · questions · file transfer over LAN / Tailscale. Automatic fastest-server selection. Chat history available offline. Token-authenticated — your data flows only between your devices.
- [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) - 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。
- [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) - 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词.
- [dream12347/dsh-session-manager](https://github.com/dream12347/dsh-session-manager) - DSH 会话管理插件：删除（回收站恢复/彻底清除）、统计、继续/暂停、打开日志目录、对话顶部抽屉、工作区分组与排序、上下文压缩阈值设置。DSH session manager: delete with trash/restore/purge, stats, continue/pause, log folder, header drawer, workspace grouping, context compaction threshold.
- [gokul6350/dsh-shell](https://github.com/gokul6350/dsh-shell) - Deep Shell is an intelligent terminal application that combines a chat interface with a command-line interface, It helps users execute terminal commands through natural language conversations.
- [jsdvjx/dsh-strata](https://github.com/jsdvjx/dsh-strata) - Session strata for the DeepSeek Harness Web GUI: the transcript's scrollbar becomes a to-scale, colour-coded map of the whole run, with your own messages emphasised and clickable anchors.
- [Miyazawai/dsh-client-pricing](https://github.com/Miyazawai/dsh-client-pricing) - 会话顶栏实时显示 DeepSeek API 价格（峰谷定价 / 现行一口价，flash / pro 自动切换） | DeepSeek Harness client plugin: live DeepSeek API pricing badge (peak/off-peak, flash/pro) in the session header.
- [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) - Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。
- [Zephyr-vibe/dsh-archived-sessions](https://github.com/Zephyr-vibe/dsh-archived-sessions) - DSH Session Manager: manage conversations, archive/restore, delete safely, open record folders.
- [zhuiyueya/dsh-im-gateway](https://github.com/zhuiyueya/dsh-im-gateway) - 把 dsh agent 接入微信、飞书等 20+ 聊天平台的聚合网关插件 | Aggregate IM gateway for DeepSeek Harness (dsh): connect your agents to WeChat, Feishu, Telegram, Discord & 20+ chat platforms.

### Memory

- ⭐ [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) - 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。
- ⭐ [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) - Noema long-term memory plugin for DSH: durable, inspectable agent memory with recall tools and a settings page.
- ⭐ [FuRongJun-1999/dsh-memory](https://github.com/FuRongJun-1999/dsh-memory) - AGI 的长期记忆基础设施。让 AI Agent 拥有不可遗忘的自我。跨会话记忆 · 持续学习 · 可审计信任（智能论 v3.2）.
- [modusensus/dsh-mneme](https://github.com/modusensus/dsh-mneme) - 🧠 The memory that dreams — self-evolving memory for DeepSeek Harness: your AI remembers across sessions, consolidates in its sleep, forgets what matters less, and grows smarter over time. Fully offline & private.
- [Qinling-Melon-Farmers/dsh-memoir](https://github.com/Qinling-Melon-Farmers/dsh-memoir) - 本地优先、零普通运行时依赖的 DSH 项目记忆：有界会话冻结 Hot Memory、倒排 BM25 召回、生命周期与缓存命中优化、中英双语 GUI。 / Local-first DSH project memory with zero regular runtime dependencies: bounded session-frozen Hot Memory, inverted-index BM25 recall, lifecycle, cache-aware design, and a bilingual GUI.
- [Soren-ABT/dsh-knowledge](https://github.com/Soren-ABT/dsh-knowledge) - Knowledge base & RAG plugin for DeepSeek Harness (DSH): chunking, local embeddings, hybrid search, management panel.

### Tools & Capabilities

- ⭐ [anywhere-labs/dsh-desktop](https://github.com/anywhere-labs/dsh-desktop) - 为 DeepSeek Harness (DSH) 插件生态打造的现代化桌面端解决方案。万物皆「插件」，桌面本身也是「插件」。
- ⭐ [AdamPlatin123/dsh-plugin-radar](https://github.com/AdamPlatin123/dsh-plugin-radar) - DSH Plugin Radar — 开源 DSH 插件生态雷达：自动发现 15900+ 候选、k8s 运行级实测 10000+、15 分钟快照管线；插件目录是其自动生成的 artifact.
- ⭐ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) - The best DeepSeek Harness plugin for context insight and management, with context dashboard / browser and context command, for context statistics, composition, breakdown, evolution details, understanding how the context is made of, and how it evolves. 一站式 DeepSeek Harness 上下文可视化插件，Context 面板及浏览器与 Context 命令，透视上下文组成、演进、压缩、剪枝等事件与动作。
- [10086ggqq/dsh_theme_terraria](https://github.com/10086ggqq/dsh_theme_terraria) - 把 DeepSeek Harness 的 AI 编码控制台变成泰拉瑞亚像素世界——向导陪你写代码，真实对话、工具审批、难度切换，单文件零依赖。
- [1692775560/dsh-Mimir-Academic-research](https://github.com/1692775560/dsh-Mimir-Academic-research) - Mimir — 一站式科研工作台插件：LaTeX 论文边写边编译、arXiv 文献管理、实验追踪、指标图表、GPU 服务器 SSH 任务编排，管理科研全周期。An open-source research workbench plugin for the whole research cycle.
- [6Mikao9/dsh-wsl-workspace](https://github.com/6Mikao9/dsh-wsl-workspace) - WSL workspace support for DeepSeek Harness——无缝的 WSL 工作区使用体验，无需在 WSL 之中再安装一个dsh，安装该插件后在 GUI 里直接添加 WSL 工作区即可。WSL workspace support for DeepSeek Harness — Enjoy a seamless WSL workspace experience without needing to install dsh inside WSL. Once this plugin is installed, you can directly add a WSL workspace right from the GUI.
- [Aik358/dsh-auto-memory](https://github.com/Aik358/dsh-auto-memory) - A caring memory companion for DSH — three-layer auto memory, proactive calendar reminders, warm AI greetings, per-turn auto-consolidation, and inheritance of memories from other AI tools.
- [akira399/dsh-novel-writer](https://github.com/akira399/dsh-novel-writer) - 大肥鱼的小说工坊 — DSH 网络小说创作插件：九阶段门禁式创作流程 + 世界书设定注入 + 本地书籍导入 + AI 一键润色 + 去AI味 + 黄金三章诊断 + 百万字一致性 + 市场调研与模板复制。
- [amlyczz/dsh-lark-link](https://github.com/amlyczz/dsh-lark-link) - High-reliability Feishu/Lark bridge for DeepSeek Harness — QR one-click auth, multi-mode agents, card-based commands, zero-loss outbox, media in/out, session-log doctor, reusable DSH Web GUI.
- [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) - 有效解决了写代码的时候账户不能同时亏钱的BUG.
- [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) - 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input.
- [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) - deepseek harness对话和代码状态回退插件 | DSH — rewind conversation and workspace state, powered by a persistent Change Ledger.
- [AnkoCD/dsh-server-deployment](https://github.com/AnkoCD/dsh-server-deployment) - DeepSeek Harness 多用户服务器部署：登录门户 / 每用户独立实例与 OS 级隔离 / 独立 API Key / 交付文件抽屉；文件访问经 sudo 助手降权执行（修复 issue #1 TOCTOU）。非本机工具。
- [antinomie-lab/dsh-explore](https://github.com/antinomie-lab/dsh-explore) - Into the Unknown. —— 探索未至之境。
- [ARFCON/dsh-hotplug-hub](https://github.com/ARFCON/dsh-hotplug-hub) - DSH - Dseam.
- [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) - A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗.
- [ayuanwong/dsh-ux](https://github.com/ayuanwong/dsh-ux) - 长任务，不刷屏：关键进度清晰可见，完成后自动折叠，详情随时展开。 Long agent tasks, without transcript clutter: focused progress, auto-folded history, details on demand.
- [biociao/dsh-science](https://github.com/biociao/dsh-science) - A DeepSeek Harness (dsh) plugin.
- [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) - 一款主打安全且更尊重开发者的开源 DeepSeek Harness 桌面客户端。官方 Web UI ，长任务常驻托盘，支持通知推送；内置安全市场，600+精选插件支持先审查、再安装。
- [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) - Toy Control Protocol for DSH.
- [chenw2759-wq/dsh-plugin-healthcheck](https://github.com/chenw2759-wq/dsh-plugin-healthcheck) - 害怕插件装了就崩溃？用这个插件帮你检测插件是否正常/是否含木马！.
- [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) - Cross-instance message/event handoff plugins for DSH (interconnect service + tools).
- [cloader/dsh-taskboard](https://github.com/cloader/dsh-taskboard) - deepseekharness 任务看板插件.
- [dingkaihu63/dsh-robotic-harness](https://github.com/dingkaihu63/dsh-robotic-harness) - Robotic Harness: embodied-intelligence research tools for DeepSeek Harness - robot asset inspection, MuJoCo pick-place simulation with fault injection, evidence-based diagnostics, and reproducible experiment bundles.
- [dsheval/dsh-top100](https://github.com/dsheval/dsh-top100) - A DeepSeek Harness (dsh) plugin.
- [EdgeTypE/dsh-better-deepseek](https://github.com/EdgeTypE/dsh-better-deepseek) - DeepSeek Harness bridge plugin for Better DeepSeek Chrome extension.
- [enchangcui340-cloud/dsh-whale-balance](https://github.com/enchangcui340-cloud/dsh-whale-balance) - A DeepSeek Harness (dsh) plugin.
- [fandc520/dsh-comfyui](https://github.com/fandc520/dsh-comfyui) - 一个基于DeepSeek-Harness的ComfyUI插件.
- [Fengze233/dsh-vscode](https://github.com/Fengze233/dsh-vscode) - 在 VS Code 侧边栏内嵌使用 DeepSeek Harness（DSH）网页界面的插件.
- [Fisfzy/dsh-ego-browser](https://github.com/Fisfzy/dsh-ego-browser) - DSH（DeepSeek Harness）插件：把 ego-lite 浏览器（给 AI Agent 用的 Chromium）接入 HARNESS——13 个结构化 ego_* 工具（文本语义快照、语义定位点击、表单填充、截图、CDP 控制、任务空间隔离），内置 ego 运行时，Linux + Chrome 开箱即用，无需克隆官方仓库或手动构建。
- [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) - DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 💬 语音识别（说完自动停·云端/本地双引擎）· 附 🔁 服务异常一键重启.
- [flymysql/dsh-remote](https://github.com/flymysql/dsh-remote) - Remote-work assistant for DeepSeek Harness (DSH): connect SSH (key or password), pick a remote workspace, operate with rw_* tools, and SFTP-mirror it into a real local DSH workspace.
- [FTShare-Lab/dsh_kline](https://github.com/FTShare-Lab/dsh_kline) - 面向 DeepSeek Harness 的交互式 K 线分析插件，支持多市场行情、技术指标、支撑压力位、新闻与基本面分析，并在原生侧栏中直接展示。
- [Gin-7/dsh-pet-remielle](https://github.com/Gin-7/dsh-pet-remielle) - A DeepSeek Harness (dsh) plugin.
- [gityuanbao/DSH-Plugins](https://github.com/gityuanbao/DSH-Plugins) - 🔥 DeepSeek Harness 插件中文导航：热门项目、适用人群、安装命令、贴心 Tips 与避坑指南.
- [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) - DSH 对话分享插件，分享单轮或多轮对话，可导出为图片或 Markdown。Share DSH Q&As or selected conversation groups as PNG or Markdown.
- [HiWhaleW/dsh-toolbox](https://github.com/HiWhaleW/dsh-toolbox) - Local-first DeepSeek Harness plugins for product research, context routing, plugin preflight, and compatibility monitoring.
- [houyanchao/dsh-timeline](https://github.com/houyanchao/dsh-timeline) - 为 DeepSeek Harness（DSH）打造的会话效率插件，时间轴导航、收藏文件夹、对话导出、提示词库、闪记。
- [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) - provider-agnostic AIGC HTTP 桥 + 无限画布 + ffmpeg 后处理，13 个工具含画布连边/reroll/媒体编辑 | Provider-agnostic AIGC HTTP bridge + infinite canvas + ffmpeg post-processing; 13 tools incl. canvas linking/reroll/media-edit.
- [HuanLinOTO/dsh-plugin-pet-rs](https://github.com/HuanLinOTO/dsh-plugin-pet-rs) - DSH 桌宠（Rust 版），5 态鲸鱼 + 双 SSE 实时推送 + 透明置顶窗 + 系统托盘，三端支持 | DSH desktop pet (Rust edition): 5-state whale + dual SSE real-time push + transparent always-on-top window + tray, cross-platform.
- [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) - 可配置子代理 profile 系统，单一 subagent 工具 + profile 参数，含 Web UI 设置/实时进度/子代理树 | Configurable subagent profile system: single subagent tool + profile param, with Web UI settings/real-time progress/subagent tree.
- [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) - 官方 DeepSeek Harness 的交互式终端 UI 插件：自研 ANSI 极简渲染核心（由作者自己的开源项目天枢 Tui 演进）、流式 Markdown/工具卡、多会话 tab、16+ 主题、slash 命令与选择器、输入历史与本地偏好持久化、LSP 诊断、成本统计、启动自更新。纯展示层。
- [ianlike-ui/dsh-pet-standalone](https://github.com/ianlike-ui/dsh-pet-standalone) - A DeepSeek Harness (dsh) plugin.
- [iuikj/dsh-desktop](https://github.com/iuikj/dsh-desktop) - 一个微调美观的DeepSeek harness客户端（欢迎插件加入）.
- [Jackywxsz/DSH-Creator](https://github.com/Jackywxsz/DSH-Creator) - Jacky Creator：面向内容创作者的 DeepSeek Harness 本地内容与运营工作台.
- [joejojoking-cloud/dsh-file-explorer](https://github.com/joejojoking-cloud/dsh-file-explorer) - File explorer plugin for DeepSeek Harness: file tree, preview, markdown, syntax highlighting, in-panel editing, VS Code integration - DeepSeek Harness 全局文件资源管理器插件.
- [Js2Hou/dsh-mcp-manager](https://github.com/Js2Hou/dsh-mcp-manager) - 用于 DeepSeek Harness 的 MCP 可视化管理插件：在「设置 → MCP」中查看已安装/启用的 MCP 服务器，支持增删、启用/停用，并实时查看连接状态。
- [Jungod1121/dsh-anchored-standard](https://github.com/Jungod1121/dsh-anchored-standard) - Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap (bash+read), then full Standard tools after the first tool call or reply.
- [JustGenius-s/DSH-Desktop](https://github.com/JustGenius-s/DSH-Desktop) - DSH-Desktop.
- [kanneiren/dsh-network-settings](https://github.com/kanneiren/dsh-network-settings) - DSH网络设置插件 | DeepSeek Harness network diagnostics, proxy detection and repair for Windows/WSL/MacOS.
- [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) - oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架.
- [left0ver/dsh-file-review](https://github.com/left0ver/dsh-file-review) - dsh插件 - 立刻审查agent对文件的修改，查看diff。a dsh plugin - review files that an agent just changed,you can see the diff.
- [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) - A DeepSeek Harness (dsh) plugin.
- [lhh010/dsh-ui-whale](https://github.com/lhh010/dsh-ui-whale) - 【求⭐】🐋DSH Web UI 全手绘像素鲸鱼伙伴插件：会话标题栏常驻，平时眨眼/偶尔摆尾/动胸鳍，思考运行时持续动起来，回合完成头顶喷水，点击还会冒爱心，不工作时还会偷懒睡觉，零核心改动。 【喜欢的话就点点star⭐吧~】.
- [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) - DeepSeek Harness 插件：一键安装「极简模式 (Git Bash)」agent preset —— 把 DSH 自带极简模式中的 bash 调用映射到 Git for Windows 的 bash（MSYS），让 Windows 上的极简模式真正可用。
- [like-study1/Oh-My-DSH](https://github.com/like-study1/Oh-My-DSH) - 🐳 DeepSeek Harness 插件聚合社区 — 自动同步 dsh-plugin 生态 · 精选目录 · 每 4 小时自动维护 | Oh-My-DSH: a community-maintained catalog of DeepSeek Harness plugins, auto-synced from the dsh-plugin topic.
- [limbo947/dsh-recall-plugin](https://github.com/limbo947/dsh-recall-plugin) - DSH 消息撤回插件：回到发送该消息时的状态 DSH Message Recall Plugin: Return to the state when the message was sent.
- [LingyeSoul/dsh-tavern](https://github.com/LingyeSoul/dsh-tavern) - A DeepSeek Harness (dsh) plugin.
- [Lixxx1/dsh-vscode](https://github.com/Lixxx1/dsh-vscode) - 在 VS Code 中使用 DeepSeek Harness. Use DeepSeek Harness in VS Code.
- [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) - Kun Like 桌宠 —— DeepSeek Harness 桌面宠物插件：右下角小坤宠随 Agent 工作状态切换 9 种动作，任务完成播放「你干嘛~哎哟」.
- [LoserFox/dsh-gal](https://github.com/LoserFox/dsh-gal) - DSH Galgame 模式：前台 flash GM 即兴演出 + 后台 pro 真实干活的双 agent 视觉小说舞台（独立插件）.
- [loudMore/dsh-launcher](https://github.com/loudMore/dsh-launcher) - DeepSeek Harness (dsh) 傻瓜式启动器｜一键安装/更新/维护 dsh 与插件，环境检测，小白友好。A beginner-friendly launcher & manager for dsh: one-click install/update/maintain plugins & environment.
- [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) - 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、更新检测、健康检查（依赖/冲突/兼容性分析）、环境管理、插件市场。bundle 与非 bundle 插件全覆盖.
- [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) - dsh-scholar.
- [maddogfinance/dsh-trading](https://github.com/maddogfinance/dsh-trading) - Trading research workbench for DeepSeek Harness (dsh): typed market-data seam, deterministic indicators, interactive chart cards ｜ 交易研究工作台插件：数据接缝 · 确定性指标 · 交互式K线卡.
- [Magiczerowxy/dsh-modef](https://github.com/Magiczerowxy/dsh-modef) - A DeepSeek Harness (dsh) plugin.
- [majiayu000/dsh-desk](https://github.com/majiayu000/dsh-desk) - Installable Tauri desktop distribution for DeepSeek Harness with a bundled runtime, trusted plugin review, and daily compatibility checks.
- [MAXeaglet/dsh-bash-terminal](https://github.com/MAXeaglet/dsh-bash-terminal) - A DeepSeek Harness (dsh) plugin.
- [MichengAI/dsh-archive-manager](https://github.com/MichengAI/dsh-archive-manager) - DSH Archive Manager 基于 DeepSeek Harness 的归档会话管理插件.
- [MichengAI/dsh-codex-ui](https://github.com/MichengAI/dsh-codex-ui) - DSH Codex UI 基于 DeepSeek Harness 的 Codex UI 插件，还原度90%，小细节拉满.
- [MichengAI/dsh-skills-manager](https://github.com/MichengAI/dsh-skills-manager) - DSH Skills Manager 基于 DeepSeek Harness 的Skills管理插件.
- [Minglink/dsh-infinite-gen-2](https://github.com/Minglink/dsh-infinite-gen-2) - DeepSeek 专用破甲插件「无限二代」dsh-infinite-gen-2 — armor-breaking plugin for DeepSeek稳定化破甲提示词，求 Star 收藏 ⭐.
- [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) - DSH 插件：分支式消息编辑、重掷、重试与版本时间线 | DSH plugin: branch-based message editing, reroll, retry, version timeline.
- [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) - Support dsh runtime on Multica.
- [not-big-dog/DSH-pipeline-kernel](https://github.com/not-big-dog/DSH-pipeline-kernel) - A DeepSeek Harness (dsh) plugin.
- [Nyasers/dsh-hanako](https://github.com/Nyasers/dsh-hanako) - DSH for Hanako.
- [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) - DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动.
- [omdsh-dev/dsh-lark](https://github.com/omdsh-dev/dsh-lark) - Lark/Feishu IM bot channel for DeepSeek Harness | 飞书 DeepSeek Harness （DSH）插件.
- [omdsh-dev/dsh-office](https://github.com/omdsh-dev/dsh-office) - 办公三件套！Office document tools for DeepSeek Harness (dsh): generate, read, and edit spreadsheets (.xlsx), PDFs, and presentations (.pptx).
- [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) - DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具.
- [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) - DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装.
- [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) - MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and pipeline trial calls, a Settings MCP tab with server CRUD (approval-gated writes, automatic backups) and a tool trial console over the official tool pipeline (Apache-2.0, dsh-plugin).
- [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) - 从零开始，看懂 DeepSeek Harness 的「万物皆可插件」— 零基础插件开发教程（含 22 个中文技能实例）| Zero-to-plugin tutorial for DeepSeek Harness.
- [PKUfudawei/dsh-capability-menu](https://github.com/PKUfudawei/dsh-capability-menu) - Unified capability menu for DeepSeek Harness: manage exposure level (context footprint) and execution mode of MCP tools & skills via Exposed/Progressive/Blocked tiers.
- [Rain-kl/dsh-preset-plus](https://github.com/Rain-kl/dsh-preset-plus) - DSH 预设编辑器插件, 支持一键破甲.
- [Renzic-Stone/DSH-EasyRewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite) - DSH Web内目前最无感的消息撤回、重编辑插件，原版体验，兼容性强，功能简单可开关，设置丰富，现代化轻量ui框架。The most seamless message recall & re-edit plugin for DSH Web — native experience, strong compatibility, simple toggles, rich settings, modern lightweight UI. DSH Web で最もシームレスなメッセージ撤回・再編集プラグイン——ネイティブ体験、高い互換性、シンプルなトグル、充実した設定、モダンで軽量な UI。
- [rirko/dsh-melody-launcher](https://github.com/rirko/dsh-melody-launcher) - dsh-旋律启动器：DeepSeek Harness 桌面启动器与插件管理器.
- [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) - dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Harness (dsh) web GUI: browse, install and uninstall plugins into a profile.
- [SenmuuuuW/dsh-whale-report](https://github.com/SenmuuuuW/dsh-whale-report) - 深迹 DeepTrace — Your Agent, in numbers. DSH 插件：从会话事件日志生成日报/周报/月报/年报/自定义区间，确定性洞察与协作复盘，只读、不改写历史。
- [sugarforever/dsh-lark](https://github.com/sugarforever/dsh-lark) - DeepSeek Harness Plugin for Lark Integration.
- [Sutera-Diffusus/dsh-whale-musume](https://github.com/Sutera-Diffusus/dsh-whale-musume) - DeepSeek Harness 桌宠插件：元气鲸鱼娘陪你写代码 🐋.
- [T-Auto/dsh-ecosystem-spec](https://github.com/T-Auto/dsh-ecosystem-spec) - deepseek-harness TUI Plugin Access and Implementation Standards / deepseek-harness终端交互生态插件准入规范与实施标准.
- [taxueseek/dsh-files](https://github.com/taxueseek/dsh-files) - DeepSeek Harness dual-face plugin: session-isolated file upload with colorful composer cards + read_document tool (text/PDF/DOCX/XLSX) with content sniffing and LRU caching.
- [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) - 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件.
- [Tkingxiao/dsh-any-background](https://github.com/Tkingxiao/dsh-any-background) - Deepseek Harness 自定义主题插件，支持自定义图片/视频壁纸，对话框，侧边栏等透明度模糊度调整，全局主题色的色轮调整插件.
- [urzeye/dsh-outline](https://github.com/urzeye/dsh-outline) - DeepSeek Harness（DSH）Web GUI 的实时大纲插件，移植自 Ophel Atlas.
- [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) - DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装.
- [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) - Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plugins. 打通 Pi 与 DSH 生态。
- [WEP-56/DSH-Launcher](https://github.com/WEP-56/DSH-Launcher) - deepseek harness的启动器，非webui二次打包而是webui内嵌，可以适配所有webui强化插件。额外提供dsh包管理、配置文件管理、插件管理、浏览器标签页、多窗口等功能.
- [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) - OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。
- [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) - The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin store and scaffolder. DSH 插件活目录：每小时刷新，每日兼容实测，内置插件商店与脚手架。
- [wzxaaaa/dsh-w-plugin-ecosystem](https://github.com/wzxaaaa/dsh-w-plugin-ecosystem) - 为dsh专属打造的贴近原生的自定义插件生态，支持插件可配置，独立协议，热拔插.
- [xiaoxianyu-office/dsh-router-flash](https://github.com/xiaoxianyu-office/dsh-router-flash) - DSH bundle 插件：V4 Flash 神模式（opencode-go）agent preset 分发包，dsh plugin add 安装后自动同步 router-flash preset。DSH agent preset bundle for DeepSeek V4 Flash godmode.
- [xuedai-mayi/dsh-wenshan](https://github.com/xuedai-mayi/dsh-wenshan) - 问山：DeepSeek Harness 地理野外实习知识图谱插件与非官方二次开发项目.
- [Yan-Zero/dsh-std](https://github.com/Yan-Zero/dsh-std) - A DeepSeek Harness (dsh) plugin.
- [yejiming/dsh-museai-tavern](https://github.com/yejiming/dsh-museai-tavern) - MuseAI的DeepSeek Harness插件，可以将你的MuseAI角色放进DSH使用啦！.
- [yjh051108/dsh-router-standard](https://github.com/yjh051108/dsh-router-standard) - Task-aware reasoning-mode router for DeepSeek Harness: three measured behavior bands (spec/mixed/react) with phase-transition evidence, persona + first-turn tool injection, agent-visible tuning. Dual-attractor policy paper included.
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) - A DeepSeek Harness (dsh) plugin.
- [YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) - no more refusals, do everything.
- [yunxiiQwQ/dsh-maid-whale-webUI](https://github.com/yunxiiQwQ/dsh-maid-whale-webUI) - DeepSeek Harness Web UI 鲸鱼女仆主题插件.
- [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) - DeepSeek Harness 的表情包插件——找得到、发得出、学得会，纯文本斗图、情绪主动发图、像 QQ/微信 一样发图、AI 自动学图、自定义表情包 、多种风格随意切换。
- [zebbkira/dsh-skills-mcp-manager](https://github.com/zebbkira/dsh-skills-mcp-manager) - 面向 DeepSeek Harness Web GUI 的正式插件包：在设置页的「Web UI 插件」分组中新增一张「技能与 MCP」卡片，用于在浏览器里管理技能（skills）与 MCP 服务器。
- [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) - DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost.
- [zhouwumu2-lab/dsh-vision-fix](https://github.com/zhouwumu2-lab/dsh-vision-fix) - Temporary fork for PR: fix dsh.plugin.json in files.
- [ZRui-C/dsh-computer-use](https://github.com/ZRui-C/dsh-computer-use) - Text-first browser & background macOS control for DeepSeek Harness (DSH): target the right process and window without taking the user's pointer. 为 DSH 提供文本优先的电脑控制：后台操作 Chromium 与 macOS，不抢前台、不移动鼠标。
- [ZSeven-W/dsh-harbor](https://github.com/ZSeven-W/dsh-harbor) - DeepSeek Harness (DSH) plugin: a read-only ledger for the plugins you already have installed — a capability inventory with file:line evidence, declared-vs-detected reconciliation, cross-profile version drift, and a diff of what changed since the last scan.

### Browser & Web

- ⭐ [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) - Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capabilities required. 一款 Chrome 侧边栏扩展程序，可让 DeepSeek Harness 直接操控您的浏览器，无需视觉能力。
- ⭐ [Tabbit-Browser/dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) - Tabbit Browser plugins for Deepseek Harness.
- ⭐ [deepstreamIO/dsh-demo-webrtc-examples](https://github.com/deepstreamIO/dsh-demo-webrtc-examples) - A DeepSeek Harness (dsh) plugin.
- [2672243194/dsh-read-url](https://github.com/2672243194/dsh-read-url) - DeepSeek Harness URL reader: fetch any page and return clean main-content text/Markdown. Auto charset (GBK/GB2312/UTF-8/Big5), token-efficient (6000-char cap, cache, offset), zero deps, no API key. 网页一键读全文 → 干净正文 / 结构化 Markdown.
- [A3Boy/dsh-web-tools](https://github.com/A3Boy/dsh-web-tools) - Multi-provider Web Search & Fetch for DeepSeek Harness — Tavily, Exa, Firecrawl, Brave, You.com, Jina & SearXNG with fallback and native settings UI.
- [cyijun/dsh-surfing-plugin](https://github.com/cyijun/dsh-surfing-plugin) - SearXNG search and Crawl4AI fetch providers for DeepSeek Harness.
- [statem-li/dsh-webui](https://github.com/statem-li/dsh-webui) - DeepSeek Harness 会话增强全家桶：定时自动化任务引擎（cron 调度·绑定模型真实执行·Agent 建议确认）、会话产物卡片、对话退回与文件回退/修改历史对比、视图图块与消息导航、工具调用聚合、Markdown 渲染、模型推理等级同步与 Developer Role 兼容检测、AnySearch 网页搜索、本地记忆（hybrid 检索）、用量工作台与 Token 预算、技能管理、文件浏览器、供应商设置、AI 浏览器、生图/辅助视觉、邮箱验证码、网络代理、任务完成提示音、审批提醒等。
- [xgone/dsh-remote](https://github.com/xgone/dsh-remote) - Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, role-based access, in-browser directory picker, and a Settings page for account management.

### Vision & Multimodal

- ⭐ [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots). One-command install, no Python, image turns work like ordinary tool-calling turns.
- ⭐ [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) - [dsh]为纯文本模型设计更强大的视觉工具箱：一行安装使用、粘贴图片直接识别、多张图片问答、截图到前端UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI.
- ⭐ [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) - DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress, in-host worker sessions with per-tier presets, and a multimodal bridge that lends the text-only harness vision and image generation.
- [hisence999/DSH-vision](https://github.com/hisence999/DSH-vision) - A DeepSeek Harness (dsh) plugin.
- [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) - Near-native image understanding for DeepSeek Harness.
- [yg33717/DSH_tensorflow](https://github.com/yg33717/DSH_tensorflow) - implemement of DEEP SUPERVISED HASHING FOR FAST IMAGE RETRIEVAL_CVPR2016.
- [Yts1919/dsh-vision-complete](https://github.com/Yts1919/dsh-vision-complete) - 给 DeepSeek 补上「眼睛和耳朵」的多模态视觉插件：看图 / OCR / 物体检测 / 视频理解 / 语音转写 / 截图直读，一键安装（DSH 插件）。

### Voice & Audio

- ⭐ [PolinniZhong/dsh-omi-voice](https://github.com/PolinniZhong/dsh-omi-voice) - DeepSeek Harness 语音朗读插件：沉浸式听朗读，用豆包 TTS 自然音色读 AI 回复（BYOK · 点读/暂停/继续）.
- ⭐ [beiyege-01/dsh-voice-ai-girlfriend](https://github.com/beiyege-01/dsh-voice-ai-girlfriend) - 语音 AI 女友（Voice AI girlfriend for DeepSeek Harness）：Whisper 语音输入 + Qwen3-TTS 声音克隆 + 句子级流式朗读 + 数字人动画窗。插话/排队双模式，说话即打断。
- ⭐ [DIAG5/dsh-better-input](https://github.com/DIAG5/dsh-better-input) - BetterInput是一套输入增强套件：从语音识别、AI 润色、提示词优化，到把各类文件转成结构清晰的Md，再到交互体验优化等——把每一种喂给智能体的输入都变得更好。BetterInput is an input-enhancement suite for DSH: voice recognition, AI polishing, prompt optimization, turning files into structured Markdown, and UX refinements — making every input you feed an agent better.

### Docs & Knowledge

- ⭐ [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) - 向模型暴露 MinerU 文档解析工具，将 PDF/图片/DOCX/PPTX/XLSX 转为结构化 Markdown/JSON | Exposes MinerU document-parsing tools to the model, converting PDF/images/DOCX/PPTX/XLSX into structured Markdown/JSON.
- ⭐ [yueyezhufeng/dsh-markdown](https://github.com/yueyezhufeng/dsh-markdown) - 一个MarkDown轻量级智能编辑器.
- ⭐ [HongMing-Huang/dsh-file-upload](https://github.com/HongMing-Huang/dsh-file-upload) - DeepSeek Harness (dsh) file-message plugin: Claude-style drag-and-drop / paperclip upload, content sniffing, document-to-Markdown via Microsoft MarkItDown (with built-in JS fallback), text inlining, read_document tool for agents.

### Skills & Gestures

- ⭐ [a735624258/dsh-skill-picker](https://github.com/a735624258/dsh-skill-picker) - DSH 实现 workbuddy 同款选择 skill 功能 | WorkBuddy-style skill picker for DeepSeek Harness: pick a skill in the composer, insert the official /skill-name gesture, and DSH loads it with your message.
- ⭐ [pyqx/dsh-preset-minimal-plus](https://github.com/pyqx/dsh-preset-minimal-plus) - A DeepSeek Harness (dsh) plugin.

### Workflows & Automation

- ⭐ [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) - DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent.
- ⭐ [KelaoHu/dsh-lowtide](https://github.com/KelaoHu/dsh-lowtide) - Time-shifting task delegation for DeepSeek Harness (dsh): plan tasks at leisure, they run unattended off-peak, come back to a report. Human-adjudicated, desktop + web.

### Git & Version Control

- ⭐ [MerZlin/dsh-pet-indesktop](https://github.com/MerZlin/dsh-pet-indesktop) - 基于项目git@github.com:PC2005-cloud/dsh-pet.git，将桌宠移植到Windows和MacOS上，现在可以随时看到蓝色大肥鱼了：）.
- ⭐ [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) - 帮 DSH 搜索、安装并验证插件的 Skill｜A DSH skill that finds, installs, and verifies GitHub plugins.
- ⭐ [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) - DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 | browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI.
- [1841220388zzzcccxxx-star/dsh-git-graph](https://github.com/1841220388zzzcccxxx-star/dsh-git-graph) - Embedded git repository graph visualizer for the DeepSeek Harness Web GUI | 嵌入式 Git 仓库图谱可视化插件（提交历史图 / 分支过滤 / 文件 diff / VSCode 式未提交改动）.
- [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) - Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件.
- [AwesomeHou/dsh-plugin-marketplace](https://github.com/AwesomeHou/dsh-plugin-marketplace) - Plugin marketplace for DeepSeek Harness — live-syncs the GitHub dsh-plugin topic (1800+ repos) into a searchable, paginated settings tab with one-click install and agent tools (market_search / market_install).
- [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) - DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。
- [DCspirit-23/DSH-inspired-Code-Simplification-Skill](https://github.com/DCspirit-23/DSH-inspired-Code-Simplification-Skill) - This Codex skill is adapted from DeepSeek Harness’s [dsh-find-simplifications](https://github.com/deepseek-ai/deepseek-harness/tree/master/.agents/skills/dsh-find-simplifications) skill.
- [FeatherHunter/dsh-mattpocock-skills-deck](https://github.com/FeatherHunter/dsh-mattpocock-skills-deck) - 拨开迷雾看见终点，剩下的交给任务栏。Part the fog, see the end — the task bar handles the rest. 🎮 mattpocock/skills 的 DSH 游戏任务系统：map 拨迷雾，任务栏推进一步。A game-like mission system for Matt Pocock skills in DeepSeek Harness. More by @FeatherHunter: 🎨 dsh-opencode-palette · ⚡ dsh-prompt.
- [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) - DeepSeek Harness (DSH) 插件管理面板：一键启用/停用插件 + GitHub dsh-plugin 插件市场，带插件详情与一键安装 | Plugin manager & marketplace for DeepSeek Harness.
- [PerryLink/dsh-research-report](https://github.com/PerryLink/dsh-research-report) - Verifiable research-report engine for DeepSeek Harness: content-addressed evidence ledger (claim-snapshot binding, tamper-evident) plus versioned sealed reports with per-claim verification verdicts and a manifest-sealed directory.
- [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) - A DeepSeek Harness (dsh) plugin.
- [SenmuuuuW/dsh-group-photo](https://github.com/SenmuuuuW/dsh-group-photo) - DSH 内测收官合影墙：GitHub OAuth 零权限登录 + 冻结白名单校验的拍立得合影站（含 DSH Skill 包装）.
- [sunruize93-cmyk/dsh-benign-exit](https://github.com/sunruize93-cmyk/dsh-benign-exit) - Deterministically annotate benign non-zero bash/pwsh exit codes in DeepSeek Harness (grep 1 = no match, git diff --exit-code = differences, test/which/jq -e) so models stop over-investigating normal results.
- [yyyyukari/dsh-plugin-workshop](https://github.com/yyyyukari/dsh-plugin-workshop) - Steam Workshop-style plugin browser for the DeepSeek Harness (DSH) Web UI - zero-server: GitHub-powered search, trending windows, Chinese search & bilingual translation, plugin-signature filtering, and smart one-click install/update/uninstall with an installed-plugins manager.

### Notifications & Alerts

- ⭐ [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) - 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord和WhatsApp）。 Connect IM bots to DeepSeek Harness via QR code or credentials (9 channels).
- ⭐ [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) - Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook), dual trigger (auto session events + agent tool).
- ⭐ [Phant0Meow/dsh-meow-smooth](https://github.com/Phant0Meow/dsh-meow-smooth) - 手机电脑dsh通知功能！移动端可用的通知！手机端ui交互优化！让手机端dsh真正可用。
- [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) - 为 DSH 增加桌面通知提醒.

### Developer Tools

- ⭐ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) - DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。 DSH official WeChat featured TUI plugin — Claude Code style: whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS. npm one-click.
- ⭐ [whitelonng/dshcode](https://github.com/whitelonng/dshcode) - Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows.
- ⭐ [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) - DSH crash-rescue plugin: undo config & plugin-code changes, secret-safe snapshots, one-click SAFE MODE, plus offline CLI/GUI that work even when DSH won't boot.
- [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) - DSH 原生鸿蒙开发助手：hdc 设备闭环调试 + 设备面板（官方 client 插件形态）+ 离线官方知识层（Tier-1 随包）+ DevEco CLI 构建/签名/模拟器控制 / DSH-native HarmonyOS dev assistant: hdc device loop, live device panel, offline official knowledge, DevEco CLI build/sign/emulator.
- [anoslide/dsh-vscode-layout](https://github.com/anoslide/dsh-vscode-layout) - 把 DeepSeek Harness（dsh）Web 界面改造成 VS Code 式 IDE：三栏布局、文件树、多标签查看器/编辑器、桌面启动器，全部补丁可重放（MIT）.
- [CCMu04/DSHDesktop](https://github.com/CCMu04/DSHDesktop) - Unofficial Windows desktop client for the unmodified DeepSeek Harness Web UI.
- [ClapEcho233/dsh-cli-provider](https://github.com/ClapEcho233/dsh-cli-provider) - A DeepSeek Harness (dsh) plugin.
- [jjxjjjjiik-bot/dsh-chat-timeline](https://github.com/jjxjjjjiik-bot/dsh-chat-timeline) - 1:1 port of DeepSeek's official web right-side chat navigation rail (ScrollNav) as a DeepSeek Harness (DSH) plugin.
- [kanghelyu/dsh-deepseek-flow](https://github.com/kanghelyu/dsh-deepseek-flow) - A DeepSeek Harness (dsh) plugin.
- [lxzy-7/dsh-plugin-guard](https://github.com/lxzy-7/dsh-plugin-guard) - Install safety net for DeepSeek Harness: pre-install snapshots, one-click/automatic rollback, guarded boot, and incident reports that auto-trigger agent analysis. 中文: DeepSeek Harness 插件安装安全网（安装前自动快照、一键/自动回退、守护启动、事故报告自动触发 Agent 分析）。
- [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCode, Grok Build, OpenClaw, Pi, Hermes, Kimi CLI, DSH) into DeepSeek Harness as resumable sessions — full-fidelity, reverse export/sync, bundle backup. | 从 Claude Code、Codex、Reasonix 等 Agent 工具导入历史消息到 DeepSeek Harness 并继续对话。
- [PerryLink/dsh-plugin-guide](https://github.com/PerryLink/dsh-plugin-guide) - Installable DSH bundle: the dsh-plugin-guide plugin-development knowledge base as an on-demand agent skill. Official docs archive (EN/ZH), Cordis primer, 114-repo community archive, 1654 archived Discussions, 20+ battle-tested pitfalls.
- [sryimnoob123/dsh-starter](https://github.com/sryimnoob123/dsh-starter) - A beginner-friendly starter for DeepSeek Harness - a minimal Electron desktop client for the official web GUI.
- [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) - DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb.

### Security & Privacy

- ⭐ [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authorized pentesting and security research skill pack.
- ⭐ [wenbin-wb/dsh-bridge](https://github.com/wenbin-wb/dsh-bridge) - 🚀 DeepSeek Harness 多通道远程访问与安全守护插件 | 局域网扫码直连、Cloudflare / 自建公网隧道、微信 / QQ / 飞书 / Telegram 机器人全生命周期对话 | 内置全协议访问安全认证、后台防篡改与容灾保命体系.
- ⭐ [slywalker2006/dsh-passwords](https://github.com/slywalker2006/dsh-passwords) - Server-grade gateway that turns DeepSeek Harness into a multi-tenant platform: remote access + auto HTTPS, subuser permissions & quotas, sandbox enforcement, encrypted auth, audit log.
- [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) - DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告.

### Remote & Mobile

- ⭐ [zhu1090093659/dsh-web](https://github.com/zhu1090093659/dsh-web) - DeepSeek Harness（DSH）Web GUI 插件与皮肤生态：一切皆插件。任务看板、移动端远程与 SSH 运维构筑开发工作台；皮肤经 WebGL 深度优化，更支持 Wallpaper Engine 壁纸；皮肤、宠物、插件由 DSH 大市场一键安装，正迈向 DSH 创意工坊。A pluggable plugin-skin ecosystem for the DSH Web GUI - Task board, remote mobile UI, SSH ops, WebGL-optimized skins with Wallpaper Engine wallpapers - becoming a DSH creative workshop.
- ⭐ [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) - DeepSeek Harness（DSH）Web GUI 插件与皮肤生态：一切皆插件。任务看板、移动端远程与 SSH 运维构筑开发工作台；皮肤经 WebGL 深度优化，更支持 Wallpaper Engine 壁纸；皮肤、宠物、插件由 DSH 大市场一键安装，正迈向 DSH 创意工坊。A pluggable plugin-skin ecosystem for the DSH Web GUI - Task board, remote mobile UI, SSH ops, WebGL-optimized skins with Wallpaper Engine wallpapers - becoming a DSH creative workshop.
- ⭐ [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) - 把 DeepSeek Harness 装进你的口袋：电脑上跑 dsh web，手机扫码即同步访问（局域网 + 公网，实时同屏）Put DeepSeek Harness in your pocket: run dsh web on your computer and access it synchronously by scanning a QR code on your phone (LAN + public network, real‑time screen mirroring).
- [201222-L/dsh-mobile-remote](https://github.com/201222-L/dsh-mobile-remote) - DeepSeek Harness 手机远程控制：发消息派活、看进度、收通知、审批决策（插件 + Flutter App）.
- [Buzzso/dsh-sev](https://github.com/Buzzso/dsh-sev) - Remote DSH host management for DeepSeek Harness — run a headless dsh on your own server, operate it from the local GUI (SSH tunnels, mixed session list, auto-heal).
- [chenw2759-wq/dsh-IDE](https://github.com/chenw2759-wq/dsh-IDE) - dsh-IDE 把 DeepSeek Harness（DSH）网页版升级成一站式 IDE：JupyterLab 式文件树、带语法高亮的代码编辑、多格式预览、Trae 风格红绿 diff 和内置终端，再加上「本地大脑、远程手脚」的 SSH 远程工作区，让 AI 直接在本机操控远程服务器，全程零配置文件改动。
- [Clarklevis1995/dsh-mobile](https://github.com/Clarklevis1995/dsh-mobile) - DeepSeek Harness Mobile 是一个面向 DeepSeek Harness 的原生 iOS 客户端。它通过 dsh-plugin-mobile-gateway 与 Harness 建立 WebSocket 连接，将工作区、会话、实时回复和 Agent 执行轨迹带到 iPhone，同时延续 DeepSeek WebUI 克制、清晰的视觉语言.
- [hongshuxifan321/dsh-mobile-app](https://github.com/hongshuxifan321/dsh-mobile-app) - DSH Remote - Android client for DeepSeek Harness.
- [JUANWANG-BUAA/dsh-full-remote](https://github.com/JUANWANG-BUAA/dsh-full-remote) - Auditable, token-gated DeepSeek Harness remote gateway: mobile QR access, per-device sessions, Host/Origin rewrite, settings/credentials/directory support.
- [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) - DSH Web UI 移动端适配：窄屏好用，宽屏适用.
- [railgun0325/dsh-phone](https://github.com/railgun0325/dsh-phone) - 让 DeepSeek Harness 的 agent 跑在手机里，通过 Magisk root 原生操作安卓系统（截图/点击/滑动/开应用）+ 移动端布局 + WebView APK.
- [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) - DeepSeek Harness 移动端适配与安全访问插件，支持局域网、远程连接、Android App 和手机浏览器。
- [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway) - 手机平板远程 DeepSeek Harness：扫码即可继续使用电脑上的 DSH，无需远程桌面 / SSH / 公网 IP，支持一次性配对、Github授权加密登录，独立设备授权与随时撤销，实现远程连接很简单，但安全才是我们所想要的。
- [thness/dsh-mobile](https://github.com/thness/dsh-mobile) - DeepSeek Harness Android — 把 DeepSeek Harness 完整装进安卓手机：内嵌 Node.js 运行时 + 官方 Web UI，开箱即用的独立 App。
- [zexadev/dsh-tether](https://github.com/zexadev/dsh-tether) - Reach the DeepSeek Harness on your dev machine from your phone — across networks, through no server at all (iroh P2P).

### Market & Store

- ⭐ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) - The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场.
- ⭐ [hikariming/dshfind](https://github.com/hikariming/dshfind) - DSH (DeepSeek Harness) 原理学习、插件市场与最佳实践 · Learn DSH principles, plugin marketplace & best practices.
- ⭐ [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market) - DeepSeek Harness 插件市场 · 持续收录 1500+ DSH 插件：中文搜索 + 实用五维评分 + 一键安装。Web 版与 DSH 侧边栏插件双形态。Plugin marketplace for DeepSeek Harness: 1500+ plugins, Chinese search, 5-dim scoring, one-click install.
- [alexchenzl/dsh-plugin-directory](https://github.com/alexchenzl/dsh-plugin-directory) - Community-driven DeekSeek Harness Plugin Directory.
- [dshplugin/dsh-plugin-hub](https://github.com/dshplugin/dsh-plugin-hub) - DeepSeek Harness 社区内置插件市场（dsh-plugin）— 搜索插件、下载并安装 4000+ 人工精选社区插件，每日更新、完全免费。内置在 Harness「设置 → 插件中心」，无需离开应用即可浏览、搜索、安装各类 AI 插件。
- [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) - Visual plugin marketplace for DeepSeek Harness — browse, search and install community plugins.
- [sliverp/dsh-hub-plugin](https://github.com/sliverp/dsh-hub-plugin) - Native DSH Hub marketplace plugin for DeepSeek Harness.
- [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) - Verified plugin marketplace and autonomous registry for DeepSeek Harness.
- [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) - 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace.

### Fun & Gimmicks

- ⭐ [the-beating-light-of-the-nail/dsh-meme-hub](https://github.com/the-beating-light-of-the-nail/dsh-meme-hub) - 🐋 The meme side of DeepSeek Harness — 贪玩蓝鲸/QQ2006/whale girls/mini-games · A curated tour of the wildest dsh plugins.
- ⭐ [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) - DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器.
<!-- END PLUGINS -->

## Contributing

The READMEs are **generated** — don't edit them by hand. The list lives in `data/plugins/`, one YAML file per plugin. To add one:

```yaml
url: https://github.com/owner/repo        # must match the repo exactly
name: owner/repo                          # link text shown in the list
category: ui                              # see the category list in contributing.md
description:
  en: One-line description ending with a period.
  zh: 一句话描述，以句号结尾。   # optional — a maintainer will add it
```

Then regenerate and commit together:

```sh
npm ci
npm run generate
```

Only `description.en` is required. See [contributing.md](contributing.md) for the full rules, category list, and monorepo guidance.

## Badge

Using or loving the list? Spread the word with the badge:

```md
[![Awesome DSH Plugin](https://awesome.re/badge.svg)](https://github.com/fjzzwxp/awesome-dsh-plugins)
```

## Disclaimer

Being listed here does **not** mean a plugin is safe, trustworthy, or well-maintained. Installing a plugin executes third-party code on your machine with your own permissions — it can read your files, use your credentials, and reach the network. Tool approval mechanisms do not sandbox plugin code. Always review the source before installing, and never install an unfamiliar plugin on a machine that holds sensitive credentials. If you find a listed plugin behaving maliciously, open an issue so it can be removed.

---

<p align="center"><sub>Maintained with <code>data/plugins/*.yml</code> + <code>scripts/generate-readme.mjs</code> · 一插件一文件，永不冲突 · generated lists, hand-written soul</sub></p>
