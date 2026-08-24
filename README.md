# Awesome DeepSeek Harness (DSH) Plugins

[中文](README.zh.md)

> A curated, **auto-updating** list of plugins for [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) (`dsh`).

This repository is the data source behind a living plugin directory:

- **`data/plugins/*.yml`** — one file per plugin (the single source of truth).
- **`scripts/collect.mjs`** — a daily GitHub Action crawler that discovers `dsh-*` plugins, probes their star counts, auto-classifies them, and writes them back. Human-set categories always win over the bot.
- **`scripts/generate-readme.mjs`** — regenerates the bilingual README (this file + `README.zh.md`) from the YAML data, with the top-3 starred plugins ⭐-pinned per category.
- **`scripts/build-site.mjs`** — builds the Vercel-hosted website from the same data.

The companion website is deployed on **Vercel** and rebuilt on every push, so the list and the site stay in lockstep and refresh themselves around the clock.

## How a plugin gets listed

It is added when the crawler finds a `dsh-*` repo on GitHub with real usage, or when someone opens a PR (see [contributing](contributing.md)). Auto-classification is heuristic — if a plugin lands in the wrong category, a PR correcting its `category` wins over the bot.

## Local usage

```bash
npm install
npm run generate   # regenerate the READMEs from data/plugins
npm run collect     # dry-run the crawler (writes files, no commit)
```

## Disclaimer

Installing a plugin runs third-party code on your machine. Being on this list is not a security review — check the source before you install.
