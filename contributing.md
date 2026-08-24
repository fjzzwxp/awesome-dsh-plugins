# Contributing / 贡献指南

Thanks for helping grow the list! / 感谢参与！

## Adding a plugin / 收录插件

> **The READMEs are generated — don't edit them by hand.** The list lives in `data/plugins/`, one YAML file per plugin. / **两个 README 由脚本生成，请勿手工编辑。** 列表数据在 `data/plugins/`，一个插件一个 YAML 文件。

Open a PR that adds **one file**, named after your repo — `data/plugins/<owner>__<repo>.yml`:

```yaml
url: https://github.com/owner/repo        # must match the repo exactly / 必须与仓库完全一致
name: owner/repo                          # link text shown in the list / 列表中显示的链接文字
category: ui                              # see the category list below / 见下方分类列表
description:
  en: One-line description ending with a period.
  zh: 一句话描述，以句号结尾。   # optional — a maintainer will add it / 可选，维护者会补
```

**Only `description.en` is required.** If you can't write the Chinese, leave `zh` out and a maintainer will add it. / **只有 `description.en` 是必填的。** 写不了中文就不写 `zh`，维护者会补上。

Then regenerate both READMEs and commit them along with your YAML file / 然后重新生成两个 README，与 YAML 文件一起提交：

```sh
npm install
npm run generate
```

⚠️ **A description containing `: ` must be quoted** — otherwise YAML reads it as a nested key. / **描述中含 `: `（冒号加空格）时必须加引号**，否则 YAML 会把它当成嵌套键：

```yaml
description:
  en: 'Vision toolkit: OCR, grounding and pixel diff.'   # ✅ quoted / 加引号
  zh: '识图工具包：OCR、定位与像素比对。'                    # 中文全角冒号无此问题，加引号也无妨
```

```yaml
  en: Vision toolkit: OCR, grounding and pixel diff.     # ❌ breaks the parser / 解析失败
```

**Why one file per plugin / 为什么一个插件一个文件：** everyone used to append to the same spot in the same README section, so merging one PR broke the next. Separate files never collide. / 以前所有人都往同一分类的同一位置追加，合并一个 PR 就会撞掉下一个。独立文件永不冲突。

## Categories / 分类

Valid `category` values / 可用的 `category` 取值：

`ui` `usage` `theme` `model` `identity` `session` `memory` `tools` `browser` `vision` `voice` `docs` `skill` `workflow` `git` `notify` `dev` `security` `remote` `market` `fun`

This set is not fixed — categories live in `scripts/lib/entries.mjs` (`CAT_IDS`). To add or merge a category, edit that one array, then regenerate. / 这组取值不是固定的——分类定义在 `scripts/lib/entries.mjs` 的 `CAT_IDS` 中。增删分类只需改这一个数组，然后重新生成。

## Monorepo subpackages / Monorepo 子包

Point `url` at the subdirectory and use `owner/repo#subname` as the `name`, e.g. `url: https://github.com/owner/repo/tree/main/packages/my-plugin`. The filename becomes `owner__repo--packages-my-plugin.yml`. / 把 `url` 指向子目录，`name` 写作 `owner/repo#子包名`，例如 `url: https://github.com/owner/repo/tree/main/packages/my-plugin`，文件名即为 `owner__repo--packages-my-plugin.yml`。

## Featured sorting / 置顶排序

Within each category, the **top 3 entries by GitHub stars** are pinned to the top and prefixed with `⭐` (featured). The rest sort by URL alphabetically. / 每个分类内，**按 GitHub star 数排名前 3** 的条目会被置顶到分类最上方并加 `⭐` 前缀（推荐位），其余按 URL 字母序排列。

Stars are not hard-coded — they live in `data/stars.json`, refreshed by probing the GitHub API. Refresh manually, or let CI do it weekly (`.github/workflows/probe-stars.yml`). / star 数据不硬编码，存在 `data/stars.json`，由探测脚本拉取刷新。可手动刷新，也可交给 CI 每周自动刷（`.github/workflows/probe-stars.yml`）：

```sh
npm run probe            # fetch missing only / 只补缺失
npm run probe -- --fresh # re-fetch everything / 全部重拉
```

Entries with no star data (0 stars, or a repo not yet probed) are never pinned — they sort alphabetically. / 无 star 数据的条目（0 星或尚未探测）不参与置顶，按字母序排列。

## Requirements / 收录要求

- The repo declares a `dsh.bundle` manifest in `package.json` (this is what makes it installable via `dsh plugin add`). Monorepos qualify if the root or a subpackage declares it. / 仓库的 `package.json` 需声明 `dsh.bundle` manifest（monorepo 根包或子包声明亦可）。
- The repo exists and is not archived / 仓库存在且未被归档。
- The repo is older than one day / 仓库创建超过 1 天。

## Review checklist / 评审清单

- [ ] YAML parses; `description.en` present and ends with a period / YAML 可解析；`description.en` 存在且以句号结尾
- [ ] `url` is a real, non-archived GitHub repo / `url` 是真实且未归档的 GitHub 仓库
- [ ] The repo declares a `dsh.bundle` manifest / 仓库声明了 `dsh.bundle` manifest
- [ ] One-line description matches what the plugin actually does / 一行描述与插件实际功能相符
- [ ] Category is right / 分类正确
- [ ] Both READMEs regenerated with `npm run generate` / 已用 `npm run generate` 重新生成两个 README
