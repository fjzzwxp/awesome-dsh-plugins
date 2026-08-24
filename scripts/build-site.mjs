// Build the Vercel-hosted website from data/plugins + data/stars.json.
// Emits a single self-contained site/dist/index.html (no CDN, no framework)
// so Vercel can serve it straight from the build output. Reruns on every push
// because the collector rewrites the data and Vercel rebuilds.
//
//   node scripts/build-site.mjs
import fs from 'node:fs'
import path from 'node:path'
import { CAT_EMOJI, CAT_IDS, CATEGORY_NAMES, displayName, orderEntries, readEntries, readStars, repoKey } from './lib/entries.mjs'

const OUT_DIR = 'site/dist'
fs.mkdirSync(OUT_DIR, { recursive: true })

const entries = readEntries()
const stars = readStars()
const ordered = orderEntries(entries, stars)

const items = ordered.map(({ e, pinned }) => ({
  name: e.name,
  url: e.url,
  category: e.category,
  desc: e.description.zh ?? e.description.en,
  stars: stars[repoKey(e.url)] ?? 0,
  pinned,
}))

// Only categories that actually have entries, in canonical order.
const used = CAT_IDS.filter((id) => items.some((i) => i.category === id))
const meta = used.map((id) => ({
  id,
  en: CATEGORY_NAMES.en[id],
  zh: CATEGORY_NAMES.zh[id],
  emoji: CAT_EMOJI[id],
}))

const dataJson = JSON.stringify(items)
const metaJson = JSON.stringify(meta)

const html = `<!doctype html>
<html lang="zh">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>awesome-dsh-plugin · DSH 插件精选</title>
<style>
  :root { --bg:#f6f8fa; --card:#fff; --border:#d0d7de; --text:#1f2328; --muted:#57606a; --accent:#0969da; --feat:#fff8e1; --feat-border:#eac54f; }
  * { box-sizing: border-box; }
  body { margin:0; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif; background:var(--bg); color:var(--text); line-height:1.6; }
  header { background:#0d1117; color:#fff; padding:32px 20px 28px; }
  .wrap { max-width:1080px; margin:0 auto; padding:0 20px; }
  header h1 { margin:0 0 6px; font-size:26px; font-weight:600; }
  header p { margin:0; color:#8b949e; font-size:14px; }
  .bar { display:flex; gap:12px; align-items:center; margin-top:18px; flex-wrap:wrap; }
  #q { flex:1; min-width:220px; padding:10px 14px; border-radius:8px; border:1px solid #30363d; background:#010409; color:#fff; font-size:14px; }
  #q::placeholder { color:#6e7681; }
  .total { color:#8b949e; font-size:13px; white-space:nowrap; }
  .add { color:#fff; background:var(--accent); padding:9px 14px; border-radius:8px; text-decoration:none; font-size:13px; font-weight:600; }
  main { max-width:1080px; margin:0 auto; padding:24px 20px 60px; }
  .cat { margin-bottom:34px; }
  .cat h2 { font-size:18px; font-weight:600; border-bottom:1px solid var(--border); padding-bottom:8px; margin:0 0 16px; display:flex; align-items:center; gap:8px; flex-wrap:wrap; }
  .cat h2 .zh { color:var(--muted); font-weight:400; font-size:14px; }
  .cat h2 .count { margin-left:auto; color:var(--muted); font-size:13px; font-weight:400; }
  .grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:14px; }
  .card { display:block; background:var(--card); border:1px solid var(--border); border-radius:10px; padding:14px 16px; text-decoration:none; color:inherit; transition:border-color .15s,transform .15s; }
  .card:hover { border-color:var(--accent); transform:translateY(-2px); }
  .card.featured { background:var(--feat); border-color:var(--feat-border); }
  .card .top { display:flex; align-items:center; gap:8px; margin-bottom:6px; }
  .card .name { font-weight:600; font-size:14px; word-break:break-all; }
  .card .star { margin-left:auto; font-size:11px; background:var(--feat-border); color:#5b4708; padding:2px 7px; border-radius:999px; white-space:nowrap; }
  .card .desc { font-size:13px; color:var(--muted); min-height:38px; }
  .card .meta { display:flex; align-items:center; gap:10px; margin-top:10px; font-size:12px; color:var(--muted); }
  .card .stars { color:#bf8700; font-weight:600; }
  .empty { color:var(--muted); text-align:center; padding:40px; }
  footer { max-width:1080px; margin:0 auto; padding:0 20px 50px; color:var(--muted); font-size:12px; }
</style>
</head>
<body>
<header><div class="wrap">
  <h1>awesome-dsh-plugin</h1>
  <p>DeepSeek Harness (dsh) 插件精选列表 · 自动采集 + 自动分类</p>
  <div class="bar">
    <input id="q" placeholder="搜索插件名称或描述…" />
    <span class="total" id="total"></span>
    <a class="add" href="https://github.com/awesome-dsh-plugin/awesome-dsh-plugin/blob/main/contributing.md">+ 提交插件</a>
  </div>
</div></header>
<main id="app"></main>
<footer>数据每夜由爬虫自动采集自 GitHub，分类由关键词启发式自动判定，可能存在偏差 — 欢迎在仓库提 PR 修正。</footer>
<script id="meta" type="application/json">${metaJson}</script>
<script id="data" type="application/json">${dataJson}</script>
<script>
  const data = JSON.parse(document.getElementById('data').textContent);
  const meta = JSON.parse(document.getElementById('meta').textContent);
  const app = document.getElementById('app');
  const totalEl = document.getElementById('total');
  const q = document.getElementById('q');
  function esc(s){ return (s||'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
  function render(filter){
    const f = (filter||'').toLowerCase().trim();
    app.innerHTML = '';
    let total = 0;
    for (const c of meta) {
      const items = data.filter(d => d.category === c.id && (!f || (d.name + ' ' + d.desc).toLowerCase().includes(f)));
      if (!items.length) continue;
      total += items.length;
      const sec = document.createElement('section'); sec.className = 'cat';
      const h = document.createElement('h2');
      h.innerHTML = '<span>' + c.emoji + '</span> ' + esc(c.en) + ' <span class="zh">' + esc(c.zh) + '</span><span class="count">' + items.length + '</span>';
      sec.appendChild(h);
      const grid = document.createElement('div'); grid.className = 'grid';
      for (const it of items) {
        const card = document.createElement('a');
        card.className = 'card' + (it.pinned ? ' featured' : '');
        card.href = it.url; card.target = '_blank'; card.rel = 'noopener';
        card.innerHTML = '<div class="top"><span class="name">' + esc(it.name) + '</span>' + (it.pinned ? '<span class="star">★ 推荐</span>' : '') + '</div>' +
          '<div class="desc">' + esc(it.desc) + '</div>' +
          '<div class="meta"><span class="stars">★ ' + it.stars + '</span><span class="cat">' + esc(c.en) + '</span></div>';
        grid.appendChild(card);
      }
      sec.appendChild(grid); app.appendChild(sec);
    }
    totalEl.textContent = total + ' plugins';
    if (!total) app.innerHTML = '<p class="empty">没有匹配的插件。</p>';
  }
  q.addEventListener('input', e => render(e.target.value));
  render('');
</script>
</body>
</html>
`

fs.writeFileSync(path.join(OUT_DIR, 'index.html'), html)
console.log(`site/dist/index.html built — ${items.length} plugins across ${meta.length} categories`)
