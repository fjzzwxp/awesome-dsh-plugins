// Shared entry model: the data/plugins/*.yml source of truth.
//
// One file per entry, keyed by slug, so two submissions never touch the same
// file — that is what removes the merge-conflict cascade the README-as-database
// layout produced (every submission appended at the same anchor).
//
// Rebuilt to mirror awesome-dsh-plugin/awesome-dsh-plugin's architecture,
// trimmed to a single-maintainer footprint.
import fs from 'node:fs'
import path from 'node:path'
import { load as yamlLoad } from 'js-yaml'

export const PLUGINS_DIR = 'data/plugins'

// Locales the list publishes. Only BASE_LOCALE is a contributor's
// responsibility; a missing translation is maintenance work for us, not a
// defect in their submission — generation falls back to English.
export const LOCALE_CODES = ['en', 'zh']
export const BASE_LOCALE = 'en'

// Category order is canonical: it drives README section order. Matches the
// original awesome-dsh-plugin category set — extend or trim freely.
export const CAT_IDS = ['ui', 'usage', 'theme', 'model', 'identity', 'session', 'memory', 'tools', 'browser', 'vision', 'voice', 'docs', 'skill', 'workflow', 'git', 'notify', 'dev', 'security', 'remote', 'market', 'fun']

// Non-English READMEs prefix category headings with an emoji. The generator
// carries them, or regenerating would silently strip every prefix.
export const CAT_EMOJI = {
  ui: '🎨',
  usage: '💰',
  theme: '🎭',
  model: '🔌',
  identity: '🆔',
  session: '💬',
  memory: '🧠',
  tools: '🛠️',
  browser: '🌐',
  vision: '🖼️',
  voice: '🎙️',
  docs: '📄',
  skill: '🧩',
  workflow: '🔁',
  git: '🔀',
  notify: '🔔',
  dev: '🧑💻',
  security: '🔒',
  remote: '📱',
  market: '🛒',
  fun: '🎮',
}

// Display names per locale (mirrors generate-readme.mjs's LOCALES.categories).
// Centralised so the Vercel site and README generator stay in lockstep.
export const CATEGORY_NAMES = {
  en: {
    ui: 'UI Enhancements', usage: 'Usage & Billing', theme: 'Themes & Appearance', model: 'Models & Providers',
    identity: 'Identity & Communication', session: 'Sessions & Messages', memory: 'Memory', tools: 'Tools & Capabilities',
    browser: 'Browser & Web', vision: 'Vision & Multimodal', voice: 'Voice & Audio', docs: 'Docs & Knowledge',
    skill: 'Skills & Gestures', workflow: 'Workflows & Automation', git: 'Git & Version Control', notify: 'Notifications & Alerts',
    dev: 'Developer Tools', security: 'Security & Privacy', remote: 'Remote & Mobile', market: 'Market & Store', fun: 'Fun & Gimmicks',
  },
  zh: {
    ui: 'UI 增强', usage: '用量与计费', theme: '主题与外观', model: '模型与提供商',
    identity: '身份与沟通', session: '会话与消息', memory: '记忆', tools: '工具与能力',
    browser: '浏览器与网络', vision: '视觉与多模态', voice: '语音与音频', docs: '文档与知识',
    skill: '技能与指令', workflow: '工作流与自动化', git: 'Git 与版本控制', notify: '通知与提醒',
    dev: '开发工具', security: '安全与隐私', remote: '远程与移动', market: '市场与商店', fun: '趣味与整活',
  },
}

/** `https://github.com/o/r` -> `o__r`; `.../tree/main/packages/x` -> `o__r--packages-x` */
export function slugFor(url) {
  const p = url.replace(/^https:\/\/github\.com\//, '').replace(/\/+$/, '')
  const repo = p.split('/').slice(0, 2).join('/')
  const sub = p.includes('/tree/') ? p.split('/tree/')[1].replace(/^[^/]+\//, '') : null
  const base = repo.replaceAll('/', '__')
  return sub ? `${base}--${sub.replaceAll('/', '-')}` : base
}

/** `https://github.com/o/r` (or `.../tree/main/packages/x`) -> `o/r` — the key stars are keyed by. */
export function repoKey(url) {
  return url.replace(/^https:\/\/github\.com\//, '').replace(/\/tree\/.*$/, '').replace(/\/+$/, '')
}

/** Load data/stars.json (owner/repo -> stargazers_count). Missing file -> {}. */
export function readStars(file = 'data/stars.json') {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return {}
  }
}

export function readEntries(dir = PLUGINS_DIR) {
  if (!fs.existsSync(dir)) return []
  const out = []
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.yml')) continue
    const text = fs.readFileSync(path.join(dir, f), 'utf8')
    let doc
    try {
      doc = yamlLoad(text)
    } catch (e) {
      // Most common breakage: an unquoted description containing `: ` —
      // a scalar with ": " is a mapping to YAML.
      throw new Error(`${f}: YAML parse error — ${e.message}. If the description contains ": " (colon + space), quote it.`)
    }
    if (!doc || typeof doc !== 'object') {
      throw new Error(`${f}: empty or non-object YAML`)
    }
    out.push({ ...doc, file: f })
  }
  return out
}

/**
 * URL -> canonical link text. `https://github.com/o/r` -> `o/r`;
 * monorepo subpath `.../tree/main/packages/x` -> `o/r#x`.
 */
export function displayName(url) {
  const p = url.replace(/^https:\/\/github\.com\//, '').replace(/\/+$/, '')
  const repo = p.split('/').slice(0, 2).join('/')
  const sub = p.includes('/tree/') ? p.split('/tree/')[1].replace(/^[^/]+\//, '') : null
  return sub ? `${repo}#${sub}` : repo
}

export function validateEntries(entries) {
  const problems = []
  const seen = new Set()
  for (const e of entries) {
    if (!e.url || !/^https:\/\/github\.com\/[^/]+\/[^/]+/.test(e.url)) {
      problems.push(`${e.file}: url must be a github.com URL (https://github.com/owner/repo)`)
    }
    if (!e.name) problems.push(`${e.file}: missing name`)
    if (!e.category || !CAT_IDS.includes(e.category)) {
      problems.push(`${e.file}: category "${e.category}" is not one of: ${CAT_IDS.join(' ')}`)
    }
    if (!e.description?.en) {
      problems.push(`${e.file}: description.en is required`)
    } else if (!/[.!。]$/.test(e.description.en.trim())) {
      problems.push(`${e.file}: description.en should end with a period`)
    }
    const slug = e.url ? slugFor(e.url) : e.file
    if (seen.has(slug)) {
      problems.push(`${e.file}: duplicate URL (same repo as another entry)`)
    }
    seen.add(slug)
    if (e.file !== `${slug}.yml`) {
      problems.push(`${e.file}: filename should be ${slug}.yml`)
    }
  }
  return problems
}

/**
 * Order entries by category, with the top `PIN_TOP` by stars pinned to the top
 * of each category (⭐ featured) and the rest by URL. Returns [{ e, pinned }]
 * so callers can render a featured marker. Without stars data, degenerates to
 * the plain URL order — safe when data/stars.json doesn't exist yet.
 */
export const PIN_TOP = 3

export function orderEntries(entries, stars = readStars()) {
  const byCat = new Map(CAT_IDS.map((id) => [id, []]))
  for (const e of entries) {
    byCat.get(e.category)?.push(e)
  }
  const out = []
  for (const id of CAT_IDS) {
    const group = byCat.get(id)
    if (!group || !group.length) continue
    const scored = group.map((e) => ({ e, s: stars[repoKey(e.url)] ?? 0 }))
    // Descending stars for the featured trio; ties broken by URL for stability.
    scored.sort((a, b) => b.s - a.s || a.e.url.localeCompare(b.e.url))
    const pinned = scored.filter((x) => x.s > 0).slice(0, PIN_TOP)
    const pinnedSet = new Set(pinned)
    const rest = scored
      .filter((x) => !pinnedSet.has(x))
      .sort((a, b) => a.e.url.localeCompare(b.e.url))
    out.push(...pinned.map((x) => ({ e: x.e, pinned: true })), ...rest.map((x) => ({ e: x.e, pinned: false })))
  }
  return out
}
