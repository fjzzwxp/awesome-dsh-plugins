// Validate plugin submissions. Run in CI on pull requests, or locally against
// a set of files:
//
//   node scripts/check-submission.mjs                 # check all of data/plugins
//   node scripts/check-submission.mjs data/plugins/foo__bar.yml   # specific files
//
// Local checks never need a token. Remote checks (repo exists / not archived /
// old enough) only run when GITHUB_TOKEN is present — without one, local
// validation alone gates the PR.
import fs from 'node:fs'
import { load as yamlLoad } from 'js-yaml'
import { displayName, validateEntries } from './lib/entries.mjs'

const token = process.env.GITHUB_TOKEN

const targets = process.argv.slice(2).filter((a) => a.endsWith('.yml'))

let list
if (targets.length) {
  list = targets.map((f) => {
    const doc = yamlLoad(fs.readFileSync(f, 'utf8'))
    return { ...doc, file: f }
  })
} else {
  const { readEntries } = await import('./lib/entries.mjs')
  list = readEntries()
}

const problems = validateEntries(list)
if (problems.length) {
  for (const p of problems) console.error(`  ${p}`)
  console.error(`\n${problems.length} problem(s) — submission rejected.`)
  process.exit(1)
}

console.log(`Local validation passed: ${list.length} entr${list.length === 1 ? 'y' : 'ies'}.`)

if (!token) {
  console.log('No GITHUB_TOKEN set — skipping remote checks (repo existence / archived / age).')
  process.exit(0)
}

// ---- Remote checks (only with a token) -----------------------------------
const gh = 'https://api.github.com'
const results = await Promise.all(
  list.map(async (e) => {
    const repo = e.url.replace(/^https:\/\/github\.com\//, '').replace(/\/tree\/.*$/, '')
    const r = await fetch(`${gh}/repos/${repo}`, {
      headers: { Authorization: `Bearer ${token}`, 'User-Agent': 'awesome-list-check' },
    })
    if (r.status === 404) return `${displayName(e.url)}: repo not found or private`
    if (!r.ok) return `${displayName(e.url)}: GitHub API ${r.status}`
    const data = await r.json()
    const notes = []
    if (data.archived) notes.push('archived')
    const ageDays = (Date.now() - new Date(data.created_at).getTime()) / 86400000
    if (ageDays < 1) notes.push(`repo younger than 1 day (${Math.round(ageDays * 24)}h)`)
    if (data.size === 0) notes.push('empty repo')
    return notes.length ? `${displayName(e.url)}: ${notes.join(', ')}` : null
  })
)

const failed = results.filter(Boolean)
if (failed.length) {
  for (const f of failed) console.error(`  ${f}`)
  console.error(`\n${failed.length} remote check(s) failed — submission rejected.`)
  process.exit(1)
}
console.log('Remote checks passed.')
