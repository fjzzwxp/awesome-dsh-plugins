// Collector / crawler: discover DeepSeek Harness (dsh) plugins on GitHub,
// probe their star counts, auto-classify new ones, and write them back into
// data/plugins/*.yml + data/stars.json. Designed to run unattended on a cron
// (GitHub Actions) and commit the result — which is what keeps the list and
// the Vercel site continuously fresh.
//
//   node scripts/collect.mjs            # dry run: print what it would do
//   node scripts/collect.mjs --commit   # write files + git commit + push
//
// Env knobs:
//   GITHUB_TOKEN        auth for the API (Actions provides it; raises rate limit)
//   DSH_SEARCH_QUERY    default "dsh in:name"
//   DSH_MIN_STARS       default 0 (include everything; ranking handles prominence)
//   DSH_MAX_PAGES       default 5 (100 results/page)
//   GITHUB_REPOSITORY   owner/repo, used to push with the token
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'
import { PLUGINS_DIR, CAT_IDS, readEntries, readStars, repoKey, slugFor } from './lib/entries.mjs'
import { classify } from './lib/classify.mjs'

const TOKEN = process.env.GITHUB_TOKEN || ''
const SEARCH_QUERY = process.env.DSH_SEARCH_QUERY || 'dsh in:name'
const MIN_STARS = Number(process.env.DSH_MIN_STARS ?? 0)
const MAX_PAGES = Number(process.env.DSH_MAX_PAGES ?? 5)
const PER_PAGE = 100
const COMMIT = process.argv.includes('--commit')

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)) }

async function githubFetch(url) {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'dsh-awesome-collector',
  }
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`
  const res = await fetch(url, { headers })
  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`GitHub API ${res.status} for ${url}\n${body.slice(0, 300)}`)
  }
  return res.json()
}

// A repo is a dsh plugin if its name follows the `dsh-*` convention, or it is
// explicitly tagged with the dsh / dsh-plugin topic, or its description names
// the DeepSeek Harness directly. This filters out the many unrelated acronyms
// that merely contain "dsh".
function hasDshSignal(item) {
  const name = (item.name || '').toLowerCase()
  const topics = (item.topics || []).map((t) => t.toLowerCase())
  const desc = (item.description || '').toLowerCase()
  if (/^dsh[-_]/.test(name)) return true
  if (topics.includes('dsh') || topics.includes('dsh-plugin')) return true
  if (desc.includes('deepseek harness') || desc.includes('dsh plugin')) return true
  return false
}

function isSelfOrList(item) {
  if (process.env.GITHUB_REPOSITORY && item.full_name === process.env.GITHUB_REPOSITORY) return true
  const name = (item.name || '').toLowerCase()
  const blob = `${item.description || ''} ${(item.topics || []).join(' ')}`.toLowerCase()
  if (/awesome/.test(name) && /(awesome|curated list)/.test(blob)) return true
  if (name === 'dsh') return true // the harness core, not a plugin
  return false
}

// Double-quote a scalar and escape the two YAML-breaking characters.
function yq(v) {
  return '"' + String(v).replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"'
}

function normalizeDesc(desc) {
  const clean = (desc || '').replace(/\s+/g, ' ').trim()
  if (!clean) return 'A DeepSeek Harness (dsh) plugin.'
  return /[.!。]$/.test(clean) ? clean : `${clean}.`
}

function entryYaml(url, name, category, descEn) {
  return `url: ${yq(url)}
name: ${yq(name)}
category: ${category}
description:
  en: ${yq(descEn)}
`
}

async function main() {
  console.log(`Collecting dsh plugins — query "${SEARCH_QUERY}", min stars ${MIN_STARS}, token ${TOKEN ? 'on' : 'off'}`)

  const items = []
  for (let page = 1; page <= MAX_PAGES; page++) {
    const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(SEARCH_QUERY)}&sort=stars&order=desc&per_page=${PER_PAGE}&page=${page}`
    const data = await githubFetch(url)
    const batch = data.items || []
    items.push(...batch)
    if (batch.length < PER_PAGE) break
    if (!TOKEN) await sleep(1100) // unauthenticated search is 10 req/min
    else await sleep(200)
  }
  console.log(`Search returned ${items.length} repositories`)

  const existingByKey = new Map(
    readEntries().map((e) => [repoKey(e.url), e]),
  )
  const stars = readStars()
  const added = []
  const updated = []
  const skipped = []

  for (const item of items) {
    if (item.fork || item.archived) { skipped.push(`${item.full_name} (fork/archived)`); continue }
    if (!hasDshSignal(item)) { skipped.push(`${item.full_name} (no dsh signal)`); continue }
    if (isSelfOrList(item)) { skipped.push(`${item.full_name} (self/list)`); continue }
    if ((item.stargazers_count ?? 0) < MIN_STARS) { skipped.push(`${item.full_name} (below min stars)`); continue }

    const key = item.full_name
    const url = item.html_url
    const slug = slugFor(url)
    const prev = existingByKey.get(key)

    // Human-set category always wins; only auto-classify genuinely new repos.
    const category = prev?.category && CAT_IDS.includes(prev.category)
      ? prev.category
      : classify({ name: item.name, description: item.description || '', topics: item.topics || [] })
    const descEn = prev?.description?.en || normalizeDesc(item.description)
    stars[key] = item.stargazers_count ?? 0

    const file = path.join(PLUGINS_DIR, `${slug}.yml`)
    const content = entryYaml(url, item.full_name, category, descEn)

    if (!prev) {
      fs.writeFileSync(file, content)
      added.push(`${item.full_name} -> ${category} (${item.stargazers_count}★)`)
    } else {
      const old = fs.readFileSync(file, 'utf8')
      if (old !== content) {
        fs.writeFileSync(file, content)
        const changed = []
        if (prev.category !== category) changed.push(`category ${prev.category}->${category}`)
        if (prev.description?.en !== descEn) changed.push('description')
        updated.push(`${item.full_name} (${changed.join(', ') || 'stars'})`)
      }
    }
  }

  fs.writeFileSync('data/stars.json', JSON.stringify(stars, null, 2) + '\n')

  console.log(`\n=== Summary ===`)
  console.log(`Added:    ${added.length}`)
  for (const a of added) console.log(`  + ${a}`)
  console.log(`Updated:  ${updated.length}`)
  for (const u of updated) console.log(`  ~ ${u}`)
  console.log(`Skipped:  ${skipped.length}`)
  if (added.length === 0 && updated.length === 0) {
    console.log('\nNothing to write.')
    return
  }

  if (!COMMIT) {
    console.log('\nDry run (no --commit): files written to disk but not committed.')
    console.log('Re-run with --commit to git commit + push.')
    return
  }

  // Regenerate the READMEs so the committed state stays in sync, then commit.
  execSync('node scripts/generate-readme.mjs', { stdio: 'inherit' })
  gitCommitPush(`chore: auto-collect dsh plugins (+${added.length} added, ~${updated.length} updated)`)
}

function gitCommitPush(message) {
  execSync('git add -A', { stdio: 'inherit' })
  const status = execSync('git diff --cached --quiet; echo $?').toString().trim()
  if (status === '0') {
    console.log('No changes to commit.')
    return
  }
  execSync(`git -c user.name="dsh-bot" -c user.email="bot@users.noreply.github.com" commit -m "${message}"`, { stdio: 'inherit' })
  const repo = process.env.GITHUB_REPOSITORY
  if (TOKEN && repo) {
    execSync(`git remote set-url origin https://x-access-token:${TOKEN}@github.com/${repo}.git`, { stdio: 'inherit' })
  }
  try {
    execSync('git push', { stdio: 'inherit' })
    console.log('Pushed to remote.')
  } catch (e) {
    console.warn('Commit created locally; push failed (no remote / no token?).', e.message)
  }
}

main().catch((e) => {
  console.error(e.message)
  process.exit(1)
})
