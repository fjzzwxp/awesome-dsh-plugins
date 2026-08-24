// Weekly decay scan: flag listed entries whose repos are gone or archived.
// Findings are printed to stdout for a human to review — this scan never
// removes or modifies anything.
//
//   node scripts/scan-decay.mjs
//
// Probe order: GitHub API first (authoritative; 60 req/h anonymous, 5000 with
// GITHUB_TOKEN), falling back to `git ls-remote` when the API is rate-limited
// or unreachable (common behind flaky networks). Archive status is only known
// through the API.
import { execSync } from 'node:child_process'
import { readEntries } from './lib/entries.mjs'

const token = process.env.GITHUB_TOKEN
const entries = readEntries()
const flagged = []

async function probeApi(repo) {
  const headers = { 'User-Agent': 'decay-scan' }
  if (token) headers.Authorization = `Bearer ${token}`
  const r = await fetch(`https://api.github.com/repos/${repo}`, { headers })
  if (r.status === 404) return { ok: false, reason: 'gone (deleted or private)' }
  if (r.status === 403 || r.status === 429) return { rateLimited: true }
  if (!r.ok) return { rateLimited: true } // any other API failure -> try git
  const data = await r.json()
  if (data.archived) return { ok: true, archived: true }
  return { ok: true }
}

function probeGit(repo) {
  try {
    execSync(`git ls-remote --heads https://github.com/${repo}.git >/dev/null 2>&1`, { timeout: 20000 })
    return { ok: true }
  } catch {
    return { ok: false, reason: 'unreachable (deleted, renamed, or private)' }
  }
}

let apiUnavailable = false
for (const e of entries) {
  const repo = e.url.replace(/^https:\/\/github\.com\//, '').replace(/\/tree\/.*$/, '')
  let result
  if (!apiUnavailable) {
    result = await probeApi(repo)
    if (result.rateLimited) {
      apiUnavailable = true
      console.log('GitHub API rate-limited or unreachable — falling back to git ls-remote for the rest.')
      result = probeGit(repo)
    }
  } else {
    result = probeGit(repo)
  }
  if (!result.ok) flagged.push({ e, reason: result.reason ?? 'unknown' })
  else if (result.archived) flagged.push({ e, reason: 'archived' })
}

if (!flagged.length) {
  console.log(`Decay scan: all ${entries.length} entries reachable.`)
  process.exit(0)
}

console.log(`Decay scan: ${flagged.length}/${entries.length} entries need attention:\n`)
for (const { e, reason } of flagged) {
  console.log(`- [ ] ${e.url} — ${reason}`)
}
console.log('\nReview each above; remove or keep manually. The scan never deletes anything.')
