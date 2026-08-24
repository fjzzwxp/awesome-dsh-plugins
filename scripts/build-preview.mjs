// Build the GitHub-style repo preview from the current READMEs.
//
//   node scripts/build-preview.mjs
//
// Reads preview/template.html, injects README.md and README.zh.md into the
// <!--MD-EN--> / <!--MD-ZH--> placeholders, writes preview/awesome-repo-preview.html.
// Escapes `<` so the markdown (which contains HTML like <details>) can never
// close the embedding <script> tag.
import fs from 'node:fs'

const TPL = 'preview/template.html'
const OUT = 'preview/awesome-repo-preview.html'

function esc(src) {
  return src.replace(/</g, '\\u003c')
}

const tpl = fs.readFileSync(TPL, 'utf8')
if (!tpl.includes('<!--MD-EN-->') || !tpl.includes('<!--MD-ZH-->')) {
  console.error(`${TPL}: missing <!--MD-EN--> / <!--MD-ZH--> placeholder.`)
  process.exit(1)
}

const out = tpl
  .replace('<!--MD-EN-->', esc(fs.readFileSync('README.md', 'utf8')))
  .replace('<!--MD-ZH-->', esc(fs.readFileSync('README.zh.md', 'utf8')))

fs.writeFileSync(OUT, out)
console.log(`${OUT} regenerated (READMEs injected).`)
