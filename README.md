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
  - [Workflows & Automation](#workflows--automation)
  - [Git & Version Control](#git--version-control)
  - [Notifications & Alerts](#notifications--alerts)
  - [Developer Tools](#developer-tools)
  - [Security & Privacy](#security--privacy)
  - [Remote & Mobile](#remote--mobile)
  - [Market & Store](#market--store)
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
- [dream-num/dsh-univer-office](https://github.com/dream-num/dsh-univer-office) - Preview, create, edit office spreadsheets, docs & slides inside DeepSeek Harness. Power by Univer.
- [e2mcc/dsh-popout-sidebar](https://github.com/e2mcc/dsh-popout-sidebar) - A sidebar can pop out a separate browser tab (drag it to another monitor).
- [Fishquito7/dsh-skill-mcp-panel](https://github.com/Fishquito7/dsh-skill-mcp-panel) - DSH Web UI plugin: skill and MCP management（Web界面的skill/MCP管理工具）.
- [GraySilver/dsh-evolve-modes](https://github.com/GraySilver/dsh-evolve-modes) - 让 Agent 的工作方式可组合、可审查、可持续改进，最终实现 Agent Self Evoling。 DeepSeek Harness Web plugin with composable task controls and isolated, human-reviewed self-evolution.
- [hust-open-atom-club/oh-dsh](https://github.com/hust-open-atom-club/oh-dsh) - 一套 DSH runtime，Desktop、Web 与 TUI 三种开发体验。
- [kelai141/dsh-mobile-apk](https://github.com/kelai141/dsh-mobile-apk) - dsh 安卓壳 APK——WebView UI + 内嵌 Termux 运行时快照（解压即跑），为dsh本地运行设计的高性能方案.
- [Laplace-bit/dsh-smooth-stream](https://github.com/Laplace-bit/dsh-smooth-stream) - DeepSeek Harness Web UI plugin for fluid streaming rendering and silky scrolling. 流畅流式渲染与丝滑滚动。
- [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) - GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill.
- [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) - Open DeepSeek Harness workspace directories in VS Code directly from the web GUI.
- [Ruler4396/dsh-launcher](https://github.com/Ruler4396/dsh-launcher) - DeepSeek Harness（dsh）Windows 轻量启动器：双击即用，克制的原生体验 / Lightweight Windows launcher for DeepSeek Harness (dsh) — double-click to run, native & restrained.
- [shengsheng90/DSH-taskboard](https://github.com/shengsheng90/DSH-taskboard) - Native local Taskboard plugin for DeepSeek Harness. SQLite-backed projects, Agent claim/review, and a native Web UI — no iframe, no second chat runtime.
- [toolclub/dsh-agent-team-gui](https://github.com/toolclub/dsh-agent-team-gui) - Persistent multi-model workflow teams for DeepSeek Harness — dynamic lead planning, bounded DAGs, per-agent model/tools, Run Center and Token insights.
- [ZSeven-W/dsh-ios](https://github.com/ZSeven-W/dsh-ios) - DeepSeek Harness (DSH) plugin: a live iOS Simulator — and a USB-connected iPhone — inside the conversation. 22 agent tools for booting, building, driving the UI by accessibility identity, OCR text or list rows, plus a streaming sidebar panel you can tap and drag on.
- [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) - The DeepSeek Harness plugin for OpenPencil — preview, inspect, and edit real .op documents inside a conversation.

### Usage & Billing

- ⭐ [Han-1413141/dsh-cost-meter](https://github.com/Han-1413141/dsh-cost-meter) - DeepSeek Harness session cost meter plugin: session/daily cost, budget, history, OpenCode Go quota, official & custom-provider balance, Codex-like token heatmap, peak/off-peak pricing with pre-switch popup & system-notification alerts, official price sync, 90+ model pricing catalog, Coding Plan quota queries (7 vendors), bilingual zh/en UI.
- ⭐ [Ychris12138/dsh-usage-stats](https://github.com/Ychris12138/dsh-usage-stats) - Provider balances, subscription quotas, and token-usage analytics for the DeepSeek Harness Web GUI (dsh web).
- ⭐ [wssfk12138/dsh-damage-pulse](https://github.com/wssfk12138/dsh-damage-pulse) - DeepSeek Harness Token 余额监控插件：鲸鱼娘待机/扣费/复苏动画、峰谷计费、连续扣费飘字与会话费用统计。
- [dclichang2022/dsh-green-meter](https://github.com/dclichang2022/dsh-green-meter) - Energy & carbon metering for DeepSeek Harness: per-turn/per-request energy, cache carbon savings, electricity cost.
- [kelearns/dsh-token-usage](https://github.com/kelearns/dsh-token-usage) - Token usage heatmap for the Web UI: daily/weekly/cumulative views over a 12-month window with light/dark themes.
- [yxxbc/dsh-balance-plugin](https://github.com/yxxbc/dsh-balance-plugin) - deepSeek 余额监控与用量统计（DSH 动态 Cordis 插件）：余额监控 · 官方充值入口 · 用量统计 · 三方插件管理.

### Themes & Appearance

- ⭐ [Small-tailqwq/dsh-deep-whale](https://github.com/Small-tailqwq/dsh-deep-whale) - Whale Girl skin series for DeepSeek Harness. 适用于 DeepSeek Harness 的，鲸鱼娘系列皮肤。
- ⭐ [FSMargoo/dsh-at-file](https://github.com/FSMargoo/dsh-at-file) - Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their path to prompts.
- ⭐ [WYH66666666/DSH-Transparent-UI-Plugin](https://github.com/WYH66666666/DSH-Transparent-UI-Plugin) - 是一层高自由度的玻璃质感主题，套在 DeepSeek Harness 网页端。顶栏、侧边栏、输入框、统计行、轨迹视图都成了磨砂玻璃片。玻璃模糊度、磨砂度、背景（流体或自定义壁纸，壁纸还能单独调模糊和磨砂）全都能在设置卡片里自由调节。关掉开关就回到原生界面，不改 DSH 任何一行源码。
- [0nt-one/dsh-neo-skin](https://github.com/0nt-one/dsh-neo-skin) - Neo-brutalism skin with two switchable schemes (Blue Command / Aged Newspaper), hard shadows, sharp corners, and light/dark theme support.
- [elysia395/dsh-wallpaper-engine](https://github.com/elysia395/dsh-wallpaper-engine) - 把本机 Wallpaper Engine 的壁纸变成 DSH 网页界面的背景：Video 动态播放、Web 以 iframe 加载、Scene 壁纸提取主纹理作为静态帧；iOS 液态玻璃设置窗口（配色 / 玻璃颜色 / 透明度）、内容分级与类型过滤、自定义壁纸上传、紧凑 CD 架布局、黑胶唱片展示、隐藏 / 恢复、倍速 / 翻转与自动轮播。感谢 Jerry 维护 macOS 版。
- [kingOfSoySauce/dsh-liang-skin](https://github.com/kingOfSoySauce/dsh-liang-skin) - DeepSeek Harness 滑动变阻器皮肤.
- [kingOfSoySauce/dsh-skin-market](https://github.com/kingOfSoySauce/dsh-skin-market) - DeepSeek Harness skin market 皮肤市场 已收录100+DSH 皮肤 完善评分系统加人工审核，有便捷的社区收录入口；有在线页面方便在线浏览，也有插件方便管理本地皮肤.
- [lyq3/dsh-skin-nebula](https://github.com/lyq3/dsh-skin-nebula) - Anime skin pack for the DSH Web UI: five AI-generated HD themes (Ninja, Sakura, Bamboo, Ronin, Ryujin) with per-theme accent palettes, a top-right shirt-icon switcher, and an adjustable transparency slider.
- [NoNameLeGo/dsh-catppuccin-theme](https://github.com/NoNameLeGo/dsh-catppuccin-theme) - Catppuccin themes plus a toggleable glassmorphism skin for the DSH Web GUI: Latte, Frappé, Macchiato and Mocha registered into the native theme runtime, one-click switching with a persisted choice, and adjustable frosted glass for the top bar, sidebar, composer, stats line and trajectory view.
- [RevolutionLA/dsh-dream-skin](https://github.com/RevolutionLA/dsh-dream-skin) - DeepSeek Harness 换肤 / 壁纸 / 主题包插件 (dsh-plugin) — 8 套 Mirage 主题、每用户强调色、壁纸2.0、主题包导入导出/分享链接、收藏与随机，纯原生 token 系统实现。
- [XieRW/dsh-beauty-skins](https://github.com/XieRW/dsh-beauty-skins) - 给 DeepSeek Harness 用的美女系列皮肤：设置里从 哲风壁纸 拉预览网格，点一张即应用，配色从壁纸提取。支持动态壁纸，也保留自定义选图。

### Models & Providers

- ⭐ [xiaobright/dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) - Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap, then full Standard tools (Project2 98/99).
- ⭐ [dataelement/dsh-desktop](https://github.com/dataelement/dsh-desktop) - DSHDesktop：DeepSeek Harness Desktop / DeepSeek Harness 桌面版.
- ⭐ [dsh-tauri-desk/deepseek-harness-desktop](https://github.com/dsh-tauri-desk/deepseek-harness-desktop) - DeepSeek Harness Tauri 桌面版 | Only 5mb installer, zero environment setup, preset plugins, Windows / macOS / Linux.
- [a179-sanae/dsh-auto-collapse](https://github.com/a179-sanae/dsh-auto-collapse) - A DeepSeek Harness (dsh) plugin.
- [AITabby/dockyard-dsh](https://github.com/AITabby/dockyard-dsh) - A macOS-only native account-pool and provider plugin for DeepSeek Harness.
- [anysearch-team/anysearch-dsh](https://github.com/anysearch-team/anysearch-dsh) - AnySearch web search provider and advanced search tools for DeepSeek Harness (DSH).
- [ChangedenCZD/dsh-minimal-turbo](https://github.com/ChangedenCZD/dsh-minimal-turbo) - Deepseek Harness 极简模式 / 许愿模式 Windows 适配，享用满血 Deepseek-V4 系列模型。
- [cpj-dev/dsh-plugin-cc](https://github.com/cpj-dev/dsh-plugin-cc) - Bridge Deepseek-harness into Claude Code for review, critique, delegation, and session import.
- [DDDMUC/dsh-free-search](https://github.com/DDDMUC/dsh-free-search) - Free web search provider for DeepSeek Harness - DuckDuckGo backend, no API key needed.
- [Electricitysheep/dsh-handbook](https://github.com/Electricitysheep/dsh-handbook) - DeepSeek Harness (dsh) 从 0 到 1 深度手册：安装/插件开发/性能调优/实测案例/同模型多 Agent 实测对比（中文 + 英文 PDF）.
- [Ephemeral-AI-Lab/dsh-plugins](https://github.com/Ephemeral-AI-Lab/dsh-plugins) - Make Deepseek Harness Great.
- [eri64/dsh-claude-ux](https://github.com/eri64/dsh-claude-ux) - DSH plugin: Claude-style Chinese risk control & conversation autonomy for DeepSeek Harness web.
- [FlashingChen/dsh-desktop-hub](https://github.com/FlashingChen/dsh-desktop-hub) - DSH Desktop Hub — DeepSeek Harness 桌面管理控制台（Electron + TypeScript）。多 Tab 管理 Harness / Plugin / MCP / Skills，双击即用。
- [franksong2702/dsh-codex-connect](https://github.com/franksong2702/dsh-codex-connect) - Use openai-codex models and image generation via ChatGPT OAuth for DeepSeek Harness.
- [HanaAyane/dsh-reasoning-effort](https://github.com/HanaAyane/dsh-reasoning-effort) - DSH适用的Codex风格的思考强度滑块，以及大肥鱼跑步滑块。Codex-style model and reasoning-effort slider for DeepSeek Harness.
- [hanshenmesen/dsh-turn-delete](https://github.com/hanshenmesen/dsh-turn-delete) - Delete one complete turn from a DeepSeek Harness session without deleting the session.
- [howmp/dsh-pentest](https://github.com/howmp/dsh-pentest) - 面向 DeepSeek Harness（dsh）的渗透测试模式 @CloverSecLabs.
- [lamost423/dsh-trace-compare](https://github.com/lamost423/dsh-trace-compare) - Trace Compare & Live Maze for DeepSeek Harness: visualize agent exploration (main path, detours, backtracks) from session logs or live sessions.
- [LayneChai/superpowers-dsh](https://github.com/LayneChai/superpowers-dsh) - Superpowers skills for DeepSeek Harness: TDD, debugging, planning, and collaboration skills adapted from obra/superpowers.
- [MarcoG-h/DSH-Launcher](https://github.com/MarcoG-h/DSH-Launcher) - 最全面的DeepSeek Harness🐋启动器 *首创多实例管理中枢* | 多开并行 | 整合包下载 | 一键部署 | 插件管理 |.
- [Mars-Sea/dsh-commandcode-provider](https://github.com/Mars-Sea/dsh-commandcode-provider) - Unofficial DeepSeek Harness LLM provider plugin for Command Code: live model catalog, reasoning-effort support, Models-page card. Ported from pi-commandcode-provider.
- [Mr-potato-123/dsh-mcp](https://github.com/Mr-potato-123/dsh-mcp) - dsh as mcp, make your claude code or codex etc. faster, more powerful and more economic!
- [myYangyunfan/dsh_desktop](https://github.com/myYangyunfan/dsh_desktop) - DeepSeek Harness (dsh) Windows desktop client - bundled Node.js + dsh CLI, one-click launch.
- [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) - 在 DSH 对话中生成交互式可视化｜Render model-generated interactive cards inside DSH conversations.
- [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) - AgentTeams plugin for DeepSeek Harness.
- [NanmiCoder/dsh-auto-mode](https://github.com/NanmiCoder/dsh-auto-mode) - Safe automatic permissions for DeepSeek Harness.
- [OBdangshang07/DSH_Creative_Workshop](https://github.com/OBdangshang07/DSH_Creative_Workshop) - Steam-Workshop-inspired discovery, trust, graph search, collections, and transactional installation planning for DeepSeek Harness plugins.
- [oil-oil/dsh-oil-creator](https://github.com/oil-oil/dsh-oil-creator) - AI-assisted local creator workbench for DeepSeek Harness.
- [omdsh-dev/dsh_workflow](https://github.com/omdsh-dev/dsh_workflow) - 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层.
- [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) - Connect DSH to your database for conversational data analysis and actionable business insights.
- [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) - Three-tier memory control plane for DeepSeek Harness: persistent runtime context, searchable project documents, pluggable long-term memory, smart routing, supervised agent workflows, WebUI, and headless tools.
- [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) - Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules.
- [Optim-Agent/dsh-plans](https://github.com/Optim-Agent/dsh-plans) - Human-in-the-loop planning preset for DeepSeek Harness (DSH), adapted from prime-plans: researched Markdown plans in ./dsh-plans, reviewer/criticizer subagent refinement, per-workspace language & model settings, goal-driven execution with ponytail + MVP tests.
- [PC2005-cloud/dsh-pet](https://github.com/PC2005-cloud/dsh-pet) - DSH 桌面宠物：一行命令装好即用的透明动画小桌宠，支持多开、大小位置随心配置；还内置 DIY 素材链，能用 AI 视频自造专属宠物.
- [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) - Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -> autoReview/verdict -> approval/decided).
- [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) - Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection).
- [QCYTSN/dsh-dafeiyu](https://github.com/QCYTSN/dsh-dafeiyu) - Desktop-native BigFish companion for DeepSeek Harness — real Agent status, always on top on Windows.
- [qiannianhuanxiang/DSHA](https://github.com/qiannianhuanxiang/DSHA) - DeepSeek Harness 安卓启动器：内置 proot+Ubuntu，免 ROOT 免 Termux 一键运行 deepseek-harness，多源测速/分步安装/WebUI 预览/设备 Shell 桥接.
- [qufei1993/dsh-desktop](https://github.com/qufei1993/dsh-desktop) - A community-maintained desktop client for DeepSeek Harness on macOS and Windows.
- [seriousz158/dsh-memory](https://github.com/seriousz158/dsh-memory) - A DeepSeek Harness (dsh) plugin.
- [shanliuling/dsh-image-gen](https://github.com/shanliuling/dsh-image-gen) - Generate images directly in DeepSeek Harness chats.
- [Stormycry-cryp/dsh-AuthInOne](https://github.com/Stormycry-cryp/dsh-AuthInOne) - Self-contained DeepSeek Harness (DSH) plugin for Provider/Auth login, model switching, image fallback, token/cost analytics, and same-port Web restart. Useful? A star helps.
- [Totoro-qaq/dsh-plugin-bridge](https://github.com/Totoro-qaq/dsh-plugin-bridge) - DeepSeek Harness plugin for previewable cross-preset session migration. Fixed-schema handoffs preserve state, source-model intent, and unresolved images; the original session stays untouched.
- [V1ki/dsh-plugin-subscriptions](https://github.com/V1ki/dsh-plugin-subscriptions) - Use ChatGPT (Codex), Claude, and Grok (X Premium) subscriptions as DeepSeek Harness LLM providers — OAuth login in the web UI, no API keys.
- [vibeinging/dsh-desktop](https://github.com/vibeinging/dsh-desktop) - DeepSeek Harness Desktop App: a local AI desktop workspace for DSH Sessions, projects, files, web research, plugins, and Office artifacts.
- [worldwonderer/oh-story-dsh](https://github.com/worldwonderer/oh-story-dsh) - A DSH plugin for novel writing and short-drama production, powered by Oh Story and Drama Skills.
- [xingj404-lab/dsh-desktop](https://github.com/xingj404-lab/dsh-desktop) - deepseek harness desktop.
- [xuanyuanzhifeng/dsh-plugin-agent-workflow](https://github.com/xuanyuanzhifeng/dsh-plugin-agent-workflow) - DeepSeek Harness Agent Workflow.
- [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) - Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow.
- [yanhua1010/dsh-harness-tutorial](https://github.com/yanhua1010/dsh-harness-tutorial) - DeepSeek Harness Agent 的原理与实现：从零到一实现一个 AI Agent —— 一切皆插件的中文教程（VitePress 站点 + 8 个 Demo + mini-harness 教学项目）.

### Identity & Communication

- ⭐ [hewzhew/dsh-agent-rp](https://github.com/hewzhew/dsh-agent-rp) - SillyTavern migration and next-generation Agent RP for DSH.

### Sessions & Messages

- ⭐ [liangmianya/dsh-synapse](https://github.com/liangmianya/dsh-synapse) - A visual, non-linear conversation workspace plugin for DeepSeek Harness ; A canvas-based session explorer and branching workspace for DeepSeek Harness.
- ⭐ [dream12347/dsh-session-manager](https://github.com/dream12347/dsh-session-manager) - DSH 会话管理插件：删除（回收站恢复/彻底清除）、统计、继续/暂停、打开日志目录、对话顶部抽屉、工作区分组与排序、上下文压缩阈值设置。DSH session manager: delete with trash/restore/purge, stats, continue/pause, log folder, header drawer, workspace grouping, context compaction threshold.

### Memory

- ⭐ [csyangwen/dsh-memory-evolve](https://github.com/csyangwen/dsh-memory-evolve) - 为 DeepSeek Harness 带来「跨会话长期记忆 + 后台自我进化」能力的纯插件实现：五轨记忆 · git 分支感知 · 回合内自我审查 · 技能自我进化与技能管理器 · 四轨待办 · COI 调度 · 会话广播 · 会话搜索 · 提示词管理器 · 临时信息便签——零核心修改、零运行时依赖，随装随用、卸载即净。
- ⭐ [ZSeven-W/dsh-noema](https://github.com/ZSeven-W/dsh-noema) - Noema long-term memory plugin for DSH: durable, inspectable agent memory with recall tools and a settings page.

### Tools & Capabilities

- ⭐ [bowenliang123/dsh-context](https://github.com/bowenliang123/dsh-context) - The best DeepSeek Harness plugin for context insight and management, with context dashboard / browser and context command, for context statistics, composition, breakdown, evolution details, understanding how the context is made of, and how it evolves. 一站式 DeepSeek Harness 上下文可视化插件，Context 面板及浏览器与 Context 命令，透视上下文组成、演进、压缩、剪枝等事件与动作。
- ⭐ [yjh051108/dsh-router-standard](https://github.com/yjh051108/dsh-router-standard) - Task-aware reasoning-mode router for DeepSeek Harness: three measured behavior bands (spec/mixed/react) with phase-transition evidence, persona + first-turn tool injection, agent-visible tuning. Dual-attractor policy paper included.
- ⭐ [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) - 官方 DeepSeek Harness 的交互式终端 UI 插件：自研 ANSI 极简渲染核心（由作者自己的开源项目天枢 Tui 演进）、流式 Markdown/工具卡、多会话 tab、16+ 主题、slash 命令与选择器、输入历史与本地偏好持久化、LSP 诊断、成本统计、启动自更新。纯展示层。
- [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) - deepseek harness对话和代码状态回退插件 | DSH — rewind conversation and workspace state, powered by a persistent Change Ledger.
- [antinomie-lab/dsh-explore](https://github.com/antinomie-lab/dsh-explore) - Into the Unknown. —— 探索未至之境。
- [Awu12277/dsh-stock-watch](https://github.com/Awu12277/dsh-stock-watch) - A股自选股实时行情盯盘插件 - DeepSeek Harness Web 右上角可折叠弹窗.
- [bruc3van/dsh-desktop](https://github.com/bruc3van/dsh-desktop) - 一款主打安全且更尊重开发者的开源 DeepSeek Harness 桌面客户端。官方 Web UI ，长任务常驻托盘，支持通知推送；内置安全市场，600+精选插件支持先审查、再安装。
- [c3ll256/dsh-toy](https://github.com/c3ll256/dsh-toy) - Toy Control Protocol for DSH.
- [Fishsb/dsh-prompt-enhancer](https://github.com/Fishsb/dsh-prompt-enhancer) - DeepSeek Harness (DSH) 插件：✨ 提示词一键增强 + 💬 语音识别（说完自动停·云端/本地双引擎）· 附 🔁 服务异常一键重启.
- [LaplaceYoung/oh-my-dsh](https://github.com/LaplaceYoung/oh-my-dsh) - oh-my-dsh：面向 DSH (DeepSeek Harness) 的插件生态——700+ 插件，只通过扩展接缝注册，不修改 agent-loop 骨架.
- [liceses/dsh-gitbash-preset](https://github.com/liceses/dsh-gitbash-preset) - DeepSeek Harness 插件：一键安装「极简模式 (Git Bash)」agent preset —— 把 DSH 自带极简模式中的 bash 调用映射到 Git for Windows 的 bash（MSYS），让 Windows 上的极简模式真正可用。
- [like-study1/Oh-My-DSH](https://github.com/like-study1/Oh-My-DSH) - 🐳 DeepSeek Harness 插件聚合社区 — 自动同步 dsh-plugin 生态 · 精选目录 · 每 4 小时自动维护 | Oh-My-DSH: a community-maintained catalog of DeepSeek Harness plugins, auto-synced from the dsh-plugin topic.
- [liyupi/dsh-kun-like-pet](https://github.com/liyupi/dsh-kun-like-pet) - Kun Like 桌宠 —— DeepSeek Harness 桌面宠物插件：右下角小坤宠随 Agent 工作状态切换 9 种动作，任务完成播放「你干嘛~哎哟」.
- [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) - 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、更新检测、健康检查（依赖/冲突/兼容性分析）、环境管理、插件市场。bundle 与非 bundle 插件全覆盖.
- [Minglink/dsh-infinite-gen-2](https://github.com/Minglink/dsh-infinite-gen-2) - DeepSeek 专用破甲插件「无限二代」dsh-infinite-gen-2 — armor-breaking plugin for DeepSeek稳定化破甲提示词，求 Star 收藏 ⭐.
- [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) - DSH 插件：分支式消息编辑、重掷、重试与版本时间线 | DSH plugin: branch-based message editing, reroll, retry, version timeline.
- [multica-ai/dsh-multica-runtime](https://github.com/multica-ai/dsh-multica-runtime) - Support dsh runtime on Multica.
- [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) - DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动.
- [PerryLink/dsh-mcp-panel](https://github.com/PerryLink/dsh-mcp-panel) - MCP management console for the official DeepSeek Harness MCP client: /mcp command with health diagnostics and pipeline trial calls, a Settings MCP tab with server CRUD (approval-gated writes, automatic backups) and a tool trial console over the official tool pipeline (Apache-2.0, dsh-plugin).
- [pingfanfan/hello-dsh](https://github.com/pingfanfan/hello-dsh) - 从零开始，看懂 DeepSeek Harness 的「万物皆可插件」— 零基础插件开发教程（含 22 个中文技能实例）| Zero-to-plugin tutorial for DeepSeek Harness.
- [Renzic-Stone/DSH-EasyRewrite](https://github.com/Renzic-Stone/DSH-EasyRewrite) - DSH Web内目前最无感的消息撤回、重编辑插件，原版体验，兼容性强，功能简单可开关，设置丰富，现代化轻量ui框架。The most seamless message recall & re-edit plugin for DSH Web — native experience, strong compatibility, simple toggles, rich settings, modern lightweight UI. DSH Web で最もシームレスなメッセージ撤回・再編集プラグイン——ネイティブ体験、高い互換性、シンプルなトグル、充実した設定、モダンで軽量な UI。
- [Sanqi-normal/dsh-webui-market-plugin](https://github.com/Sanqi-normal/dsh-webui-market-plugin) - dsh Web GUI 社区插件市场：浏览 awesome-dsh-plugin.com 插件目录，一键安装/卸载到 profile。Community plugin market for the DeepSeek Harness (dsh) web GUI: browse, install and uninstall plugins into a profile.
- [tencent-connect/dsh-qqbot](https://github.com/tencent-connect/dsh-qqbot) - 让 QQ Bot 接入 DeepSeek Harness（dsh）的官方插件.
- [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) - DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装.
- [weijiafu14/pi2dsh](https://github.com/weijiafu14/pi2dsh) - Bridge the Pi and DeepSeek Harness ecosystems: one Pi Host ABI runs unmodified Pi extensions as native DSH plugins. 打通 Pi 与 DSH 生态。
- [whiteguo233/dsh-openbiliclaw](https://github.com/whiteguo233/dsh-openbiliclaw) - OpenBiliClaw 是本地运行的跨平台个性化内容推荐 Agent，持续理解你的兴趣并主动找内容。本仓库是它的 DeepSeek Harness 插件：DSH 界面常驻第四栏（推荐/内容库/对话/画像/设置），注册 22 个 Agent Bridge 工具，让 Agent 也能读推荐、答探测、闭环学习。
- [whyihaveyou/dsh-suite](https://github.com/whyihaveyou/dsh-suite) - The living DeepSeek Harness plugin directory — refreshed hourly, compat-tested daily, with an in-app plugin store and scaffolder. DSH 插件活目录：每小时刷新，每日兼容实测，内置插件商店与脚手架。
- [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) - A DeepSeek Harness (dsh) plugin.
- [YuJunZhiXue/dsh-purge](https://github.com/YuJunZhiXue/dsh-purge) - no more refusals, do everything.
- [yyh-001/dsh-meme](https://github.com/yyh-001/dsh-meme) - DeepSeek Harness 的表情包插件——找得到、发得出、学得会，纯文本斗图、情绪主动发图、像 QQ/微信 一样发图、AI 自动学图、自定义表情包 、多种风格随意切换。

### Browser & Web

- ⭐ [Lum1104/dsh-browser](https://github.com/Lum1104/dsh-browser) - Chrome sidebar extension that lets DeepSeek Harness operate your browser directly, no vision capabilities required. 一款 Chrome 侧边栏扩展程序，可让 DeepSeek Harness 直接操控您的浏览器，无需视觉能力。
- ⭐ [Tabbit-Browser/dsh-tabbit](https://github.com/Tabbit-Browser/dsh-tabbit) - Tabbit Browser plugins for Deepseek Harness.
- ⭐ [deepstreamIO/dsh-demo-webrtc-examples](https://github.com/deepstreamIO/dsh-demo-webrtc-examples) - A DeepSeek Harness (dsh) plugin.
- [xgone/dsh-remote](https://github.com/xgone/dsh-remote) - Remote access for DeepSeek Harness: account/password auth + MFA (TOTP) login gate, signed session cookies, role-based access, in-browser directory picker, and a Settings page for account management.

### Vision & Multimodal

- ⭐ [ysr666/dsh-vision-router](https://github.com/ysr666/dsh-vision-router) - Eyes for text-only DeepSeek Harness agents: built-in free vision chain (no key) + pixel-level vision tools (Q&A, grounding, crop, pixel diff, colors, OCR, SVG trace, cutout, screenshots). One-command install, no Python, image turns work like ordinary tool-calling turns.
- ⭐ [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) - [dsh]为纯文本模型设计更强大的视觉工具箱：一行安装使用、粘贴图片直接识别、多张图片问答、截图到前端UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI.
- ⭐ [yg33717/DSH_tensorflow](https://github.com/yg33717/DSH_tensorflow) - implemement of DEEP SUPERVISED HASHING FOR FAST IMAGE RETRIEVAL_CVPR2016.
- [oil-oil/dsh-vision](https://github.com/oil-oil/dsh-vision) - Near-native image understanding for DeepSeek Harness.
- [Yts1919/dsh-vision-complete](https://github.com/Yts1919/dsh-vision-complete) - 给 DeepSeek 补上「眼睛和耳朵」的多模态视觉插件：看图 / OCR / 物体检测 / 视频理解 / 语音转写 / 截图直读，一键安装（DSH 插件）。
- [ZSeven-W/dsh-crew](https://github.com/ZSeven-W/dsh-crew) - DeepSeek Harness (DSH) plugin: dispatch work to DSH agents from Claude Code / Codex — native subagent progress, in-host worker sessions with per-tier presets, and a multimodal bridge that lends the text-only harness vision and image generation.

### Workflows & Automation

- ⭐ [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) - DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent.

### Git & Version Control

- ⭐ [Nagi-ovo/dsh-find-plugins](https://github.com/Nagi-ovo/dsh-find-plugins) - 帮 DSH 搜索、安装并验证插件的 Skill｜A DSH skill that finds, installs, and verifies GitHub plugins.
- ⭐ [bradeGithub/DSH-Plugins-Marketplace](https://github.com/bradeGithub/DSH-Plugins-Marketplace) - DSH插件市场 / DSH Plugin Marketplace: 在 DeepSeek Harness Web GUI 中一键浏览、安装与更新 GitHub topic:dsh-plugin 的全部插件 | browse, install & update all GitHub dsh-plugin plugins in the DSH Web GUI.
- ⭐ [MerZlin/dsh-pet-indesktop](https://github.com/MerZlin/dsh-pet-indesktop) - 基于项目git@github.com:PC2005-cloud/dsh-pet.git，将桌宠移植到Windows和MacOS上，现在可以随时看到蓝色大肥鱼了：）.
- [awesome-dsh-plugin/dsh-find-plugin](https://github.com/awesome-dsh-plugin/dsh-find-plugin) - Find DSH plugins inside the agent — live GitHub dsh-plugin topic search, star-ranked / 会话内搜索发现 DSH 插件.
- [Noob-stupid/dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub) - DeepSeek Harness (DSH) 插件管理面板：一键启用/停用插件 + GitHub dsh-plugin 插件市场，带插件详情与一键安装 | Plugin manager & marketplace for DeepSeek Harness.
- [sunruize93-cmyk/dsh-benign-exit](https://github.com/sunruize93-cmyk/dsh-benign-exit) - Deterministically annotate benign non-zero bash/pwsh exit codes in DeepSeek Harness (grep 1 = no match, git diff --exit-code = differences, test/which/jq -e) so models stop over-investigating normal results.

### Notifications & Alerts

- ⭐ [xmanrui/dsh-im](https://github.com/xmanrui/dsh-im) - 通过扫码或机器人凭据把IM机器人接入DeepSeek Harness（支持飞书、微信、钉钉、企业微信、QQ、Slack、Telegram、Discord和WhatsApp）。 Connect IM bots to DeepSeek Harness via QR code or credentials (9 channels).
- ⭐ [THEWOLFWALKER/dsh-notifier](https://github.com/THEWOLFWALKER/dsh-notifier) - Unified notification push plugin for DeepSeek Harness (DSH): one minimal notify() API, 8 channel adapters (telegram/dingtalk/feishu/wxpusher/pushplus/serverchan/bark/webhook), dual trigger (auto session events + agent tool).

### Developer Tools

- ⭐ [ccch1mneyyy/dsh-TUI](https://github.com/ccch1mneyyy/dsh-TUI) - DSH 官方公众号收录的 TUI 补位插件：Claude Code 风，鲸鱼顶栏/实时状态/流式思考/双击 Esc 回滚/上下文进度+TPS。npm 一键装。 DSH official WeChat featured TUI plugin — Claude Code style: whale bar, live status, streaming thoughts, double-Esc rollback, context bar + TPS. npm one-click.
- ⭐ [whitelonng/dshcode](https://github.com/whitelonng/dshcode) - Community desktop companion for DeepSeek Harness — one-click Electron app for macOS and Windows.
- ⭐ [lire1131/dsh-undo-savepoint](https://github.com/lire1131/dsh-undo-savepoint) - DSH crash-rescue plugin: undo config & plugin-code changes, secret-safe snapshots, one-click SAFE MODE, plus offline CLI/GUI that work even when DSH won't boot.
- [anoslide/dsh-vscode-layout](https://github.com/anoslide/dsh-vscode-layout) - 把 DeepSeek Harness（dsh）Web 界面改造成 VS Code 式 IDE：三栏布局、文件树、多标签查看器/编辑器、桌面启动器，全部补丁可重放（MIT）.
- [kanghelyu/dsh-deepseek-flow](https://github.com/kanghelyu/dsh-deepseek-flow) - A DeepSeek Harness (dsh) plugin.
- [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) - Import 14+ external agent chat histories (Claude Code, Codex, ChatGPT, Cursor, Gemini, Reasonix, opencode, ZCode, Grok Build, OpenClaw, Pi, Hermes, Kimi CLI, DSH) into DeepSeek Harness as resumable sessions — full-fidelity, reverse export/sync, bundle backup. | 从 Claude Code、Codex、Reasonix 等 Agent 工具导入历史消息到 DeepSeek Harness 并继续对话。
- [sryimnoob123/dsh-starter](https://github.com/sryimnoob123/dsh-starter) - A beginner-friendly starter for DeepSeek Harness - a minimal Electron desktop client for the official web GUI.
- [ZSeven-W/dsh-android](https://github.com/ZSeven-W/dsh-android) - DeepSeek Harness plugin for Android — build, run, and interact with a live emulator or USB device stream inside a conversation, driven entirely through adb.

### Security & Privacy

- ⭐ [dhicoc/dsh-reverse-skill](https://github.com/dhicoc/dsh-reverse-skill) - Complete reverse-skill (85 SKILL.md) as a DeepSeek Harness (dsh) Cordis plugin — reverse engineering, authorized pentesting and security research skill pack.

### Remote & Mobile

- ⭐ [zhu1090093659/dsh-web-ui](https://github.com/zhu1090093659/dsh-web-ui) - DeepSeek Harness（DSH）Web GUI 插件与皮肤生态：一切皆插件。任务看板、移动端远程与 SSH 运维构筑开发工作台；皮肤经 WebGL 深度优化，更支持 Wallpaper Engine 壁纸；皮肤、宠物、插件由 DSH 大市场一键安装，正迈向 DSH 创意工坊。A pluggable plugin-skin ecosystem for the DSH Web GUI - Task board, remote mobile UI, SSH ops, WebGL-optimized skins with Wallpaper Engine wallpapers - becoming a DSH creative workshop.
- ⭐ [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket) - 把 DeepSeek Harness 装进你的口袋：电脑上跑 dsh web，手机扫码即同步访问（局域网 + 公网，实时同屏）Put DeepSeek Harness in your pocket: run dsh web on your computer and access it synchronously by scanning a QR code on your phone (LAN + public network, real‑time screen mirroring).
- ⭐ [saya-ch/dsh-mobile](https://github.com/saya-ch/dsh-mobile) - DeepSeek Harness 移动端适配与安全访问插件，支持局域网、远程连接、Android App 和手机浏览器。
- [mexiaosqwq/dsh-web-mobile](https://github.com/mexiaosqwq/dsh-web-mobile) - DSH Web UI 移动端适配：窄屏好用，宽屏适用.
- [summer1238/dsh-remote-web-gateway](https://github.com/summer1238/dsh-remote-web-gateway) - 手机平板远程 DeepSeek Harness：扫码即可继续使用电脑上的 DSH，无需远程桌面 / SSH / 公网 IP，支持一次性配对、Github授权加密登录，独立设备授权与随时撤销，实现远程连接很简单，但安全才是我们所想要的。

### Market & Store

- ⭐ [dsh-market/dsh-market](https://github.com/dsh-market/dsh-market) - The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场.
- ⭐ [hikariming/dshfind](https://github.com/hikariming/dshfind) - DSH (DeepSeek Harness) 原理学习、插件市场与最佳实践 · Learn DSH principles, plugin marketplace & best practices.
- ⭐ [mishibeikejie/zat-dsh-engine](https://github.com/mishibeikejie/zat-dsh-engine) - Visual plugin marketplace for DeepSeek Harness — browse, search and install community plugins.
- [2BingLing/dsh-market](https://github.com/2BingLing/dsh-market) - DeepSeek Harness 插件市场 · 持续收录 1500+ DSH 插件：中文搜索 + 实用五维评分 + 一键安装。Web 版与 DSH 侧边栏插件双形态。Plugin marketplace for DeepSeek Harness: 1500+ plugins, Chinese search, 5-dim scoring, one-click install.
- [ZASENJC/dsh-plugins-store](https://github.com/ZASENJC/dsh-plugins-store) - 自动分类、收录和验证 DeepSeek-Harness 社区插件的市场。 Automatically categorize, curate, and validate the DeepSeek-Harness community plugin marketplace.
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
