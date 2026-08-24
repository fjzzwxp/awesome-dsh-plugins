// Generate the plugin list + table of contents in every README from
// data/plugins/*.yml. Everything outside the marker blocks (badges, banner,
// intro, Contributing / Badge / Disclaimer) stays hand-maintained.
//
//   node scripts/generate-readme.mjs          # write
//   node scripts/generate-readme.mjs --check  # verify in sync (CI)
import fs from 'node:fs'
import { BASE_LOCALE, CAT_EMOJI, CAT_IDS, displayName, orderEntries, readEntries, validateEntries } from './lib/entries.mjs'

const CHECK = process.argv.includes('--check')

// Locale definitions. Keep in sync if you add a locale (e.g. 'ja').
const LOCALES = [
  {
    code: 'en',
    readme: 'README.md',
    sep: '-', // entry separator between link text and description
    categories: {
      ui: 'UI Enhancements', usage: 'Usage & Billing', theme: 'Themes & Appearance', model: 'Models & Providers',
      identity: 'Identity & Communication', session: 'Sessions & Messages', memory: 'Memory', tools: 'Tools & Capabilities',
      browser: 'Browser & Web', vision: 'Vision & Multimodal', voice: 'Voice & Audio', docs: 'Docs & Knowledge',
      skill: 'Skills & Gestures', workflow: 'Workflows & Automation', git: 'Git & Version Control', notify: 'Notifications & Alerts',
      dev: 'Developer Tools', security: 'Security & Privacy', remote: 'Remote & Mobile', market: 'Market & Store', fun: 'Fun & Gimmicks',
    },
  },
  {
    code: 'zh',
    readme: 'README.zh.md',
    sep: '-',
    categories: {
      ui: 'UI 增强', usage: '用量与计费', theme: '主题与外观', model: '模型与提供商',
      identity: '身份与沟通', session: '会话与消息', memory: '记忆', tools: '工具与能力',
      browser: '浏览器与网络', vision: '视觉与多模态', voice: '语音与音频', docs: '文档与知识',
      skill: '技能与指令', workflow: '工作流与自动化', git: 'Git 与版本控制', notify: '通知与提醒',
      dev: '开发工具', security: '安全与隐私', remote: '远程与移动', market: '市场与商店', fun: '趣味与整活',
    },
  },
]

const MARKERS = {
  toc: ['<!-- BEGIN TOC -->', '<!-- END TOC -->'],
  plugins: ['<!-- BEGIN PLUGINS -->', '<!-- END PLUGINS -->'],
}

/**
 * GitHub heading anchor: lowercase, drop everything that isn't a letter,
 * digit, space or hyphen, then turn each remaining space into a hyphen.
 *
 * Dropping a character without collapsing its neighbouring spaces is what
 * produces the two anchors that look like typos but aren't:
 *   "Themes & Appearance" -> "themes--appearance"  (& removed, both spaces kept)
 *   "🎨 UI 增强"          -> "-ui-增强"            (emoji removed, its space kept)
 */
function anchor(heading) {
  return heading
    .toLowerCase()
    .replace(/[^\p{L}\p{N} -]/gu, '') // drops "&", emoji, variation selectors, ZWJ
    .replaceAll(' ', '-')
}

/** Translated READMEs carry an emoji prefix on headings; README.md does not. */
function headingFor(loc, id) {
  const name = loc.categories[id]
  return loc.code === 'en' ? name : `${CAT_EMOJI[id]} ${name}`
}

// The non-category rows of the Contents list. awesome-lint wants one single
// list, so the markers wrap the whole thing and these are emitted too.
const TOC_SHELL = {
  en: { top: 'Plugins', tail: ['Badge', 'Disclaimer'] },
  zh: { top: '插件', tail: ['徽章', '免责声明'] },
}

function replaceBlock(text, [open, close], body, file) {
  const i = text.indexOf(open)
  const j = text.indexOf(close)
  if (i === -1 || j === -1 || j < i) {
    console.error(`${file}: missing marker pair ${open} … ${close}`)
    process.exit(1)
  }
  return text.slice(0, i + open.length) + '\n' + body + '\n' + text.slice(j)
}

/**
 * Every entry line this generator would emit, wherever it sits. Replacing the
 * marker blocks only guarantees what's inside them, so this catches an entry
 * smuggled in outside — e.g. a second `### UI Enhancements` after
 * `<!-- END PLUGINS -->`.
 */
function parsedUrls(loc) {
  const urls = new Set()
  let cat = null
  for (const line of fs.readFileSync(loc.readme, 'utf8').split('\n')) {
    const h = line.match(/^#{2,3} (.+)$/)
    if (h) {
      cat = CAT_IDS.find((id) => h[1].includes(loc.categories[id])) ?? null
      continue
    }
    const m = line.match(/^- (?:⭐ )?\[(.+?)\]\((https:\/\/github\.com\/[^)]+)\) ([—-]) (.+)$/)
    if (m && cat) urls.add(m[2])
  }
  return urls
}

let entries
try {
  entries = readEntries()
} catch (e) {
  console.error(e.message)
  process.exit(1)
}
const problems = validateEntries(entries)
if (problems.length) {
  for (const p of problems) console.error(`  ${p}`)
  console.error(`\n${problems.length} problem(s) in data/plugins — refusing to generate.`)
  process.exit(1)
}

const ordered = orderEntries(entries)
const used = CAT_IDS.filter((id) => ordered.some((x) => x.e.category === id))

let stale = false
const untranslated = []
for (const loc of LOCALES) {
  const shell = TOC_SHELL[loc.code]
  if (!shell) {
    console.error(`${loc.readme}: no TOC_SHELL entry for locale "${loc.code}"`)
    process.exit(1)
  }
  const toc = [
    `- [${shell.top}](#${anchor(shell.top)})`,
    ...used.map((id) => `  - [${headingFor(loc, id)}](#${anchor(headingFor(loc, id))})`),
    ...shell.tail.map((t) => `- [${t}](#${anchor(t)})`),
  ].join('\n')

  const plugins = used
    .map((id) => {
      const lines = ordered
        .filter((x) => x.e.category === id)
        .map(({ e, pinned }) => {
          // Untranslated entries render their English text rather than blocking
          // the build — an honest gap a maintainer closes later.
          const d = e.description[loc.code] ?? e.description[BASE_LOCALE]
          if (e.description[loc.code] === undefined) untranslated.push(`${loc.readme}: ${e.url}`)
          // ⭐ marks the star-ranked featured trio at the top of each category.
          const mark = pinned ? '⭐ ' : ''
          return `- ${mark}[${displayName(e.url)}](${e.url}) ${loc.sep} ${d}`
        })
      return `### ${headingFor(loc, id)}\n\n${lines.join('\n')}`
    })
    .join('\n\n')

  const before = fs.readFileSync(loc.readme, 'utf8')
  let after = replaceBlock(before, MARKERS.toc, toc, loc.readme)
  after = replaceBlock(after, MARKERS.plugins, plugins, loc.readme)

  if (before !== after) {
    if (CHECK) {
      console.error(`${loc.readme} is out of sync with data/plugins/ — run "npm run generate"`)
      stale = true
      continue
    }
    fs.writeFileSync(loc.readme, after)
    console.log(`${loc.readme}: regenerated (${ordered.length} entries)`)
  } else {
    console.log(`${loc.readme}: up to date (${ordered.length} entries)`)
  }

  // Set check: the README as a whole (markers or not) must parse to exactly
  // the URLs data/plugins declares — no smuggled or missing entries anywhere.
  const inReadme = parsedUrls(loc)
  const inData = new Set(ordered.map((x) => x.e.url))
  const smuggled = [...inReadme].filter((u) => !inData.has(u))
  const missing = [...inData].filter((u) => !inReadme.has(u))
  for (const u of smuggled) console.error(`${loc.readme}: ${u} appears in the README but has no data/plugins file`)
  for (const u of missing) console.error(`${loc.readme}: ${u} is declared in data/plugins but the README doesn't list it`)
  if (smuggled.length || missing.length) stale = true
}

if (untranslated.length) {
  console.log(`\n${untranslated.length} entries render English text in a translated README (zh descriptions can be added later):`)
  for (const u of untranslated) console.log(`  ${u}`)
}

if (stale) {
  console.error('\nStale. Fix the problems above and rerun.')
  process.exit(1)
}
