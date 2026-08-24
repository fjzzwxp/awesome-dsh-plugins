// Fetch stargazers_count for every listed repo into data/stars.json.
//
//   node scripts/probe-stars.mjs            # only fetch repos with no cached value
//   node scripts/probe-stars.mjs --fresh    # re-fetch everything
//
// Keyed by `owner/repo` (monorepo subpaths share their root repo's stars).
// GitHub API: 60 req/h anonymous, 5000/h with GITHUB_TOKEN — for large lists
// set GITHUB_TOKEN in CI (see .github/workflows/probe-stars.yml).
import fs from 'node:fs'
import { readEntries, repoKey } from './lib/entries.mjs'

const token = process.env.GITHUB_TOKEN
const FRESH = process.argv.includes('--fresh')
const FILE = 'data/stars.json'

function safeRead(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'))
  } catch {
    return {}
  }
}

const entries = readEntries()
const stars = FRESH ? {} : safeRead(FILE)

const toFetch = [...new Set(entries.map((e) => repoKey(e.url)))].filter((r) => stars[r] === undefined)
if (!toFetch.length) {
  console.log(`stars.json: all ${Object.keys(stars).length} repos cached, nothing to fetch.`)
  process.exit(0)
}
console.log(`Fetching stars for ${toFetch.length} repo(s)${token ? ' (authenticated)' : ' (anonymous, 60 req/h)'}…`)

const headers = { 'User-Agent': 'probe-stars' }
if (token) headers.Authorization = `Bearer ${token}`

let updated = 0
for (const repo of toFetch) {
  const r = await fetch(`https://api.github.com/repos/${repo}`, { headers })
  if (r.status === 404) {
    console.warn(`  ${repo}: not found — skipping (decay scan will flag it)`)
    continue
  }
  if (r.status === 403 || r.status === 429) {
    console.error(`  rate limited (HTTP ${r.status}) after ${updated} updates — rerun later or set GITHUB_TOKEN.`)
    break
  }
  if (!r.ok) {
    console.warn(`  ${repo}: HTTP ${r.status} — skipping`)
    continue
  }
  const data = await r.json()
  stars[repo] = data.stargazers_count ?? 0
  updated++
  console.log(`  ${repo}: ${stars[repo]}⭐`)
}

fs.writeFileSync(FILE, JSON.stringify(stars, null, 2) + '\n')
console.log(`\nstars.json updated (${updated} fetched, ${Object.keys(stars).length} total).`)
