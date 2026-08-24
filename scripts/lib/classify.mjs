// Heuristic auto-classifier: maps a DSH plugin repo to one of the 21
// CAT_IDS using keyword scoring over its name + description + topics.
//
// This is the part a human normally does via a PR. The classifier is a
// pragmatic stand-in: it scores every category by keyword hits and picks the
// best. It is deliberately transparent and overridable — collect.mjs never
// overwrites a category a human already set in an existing YAML.
import { CAT_IDS } from './entries.mjs'

// Keyword sets per category. Lowercase substrings; a hit is counted once per
// category (presence, not frequency) to keep scoring stable across languages.
const KEYWORDS = {
  ui: ['ui', 'interface', 'widget', 'panel', 'button', 'menu', 'layout', 'sidebar', 'dashboard', 'display', 'component', 'react', 'view'],
  usage: ['usage', 'billing', 'cost', 'token', 'price', 'quota', 'budget', 'spend', 'meter', 'invoice', '消耗', '计费', '用量'],
  theme: ['theme', 'skin', 'appearance', 'color', 'colour', 'dark', 'light', 'palette', 'style', 'look', 'css', 'neon', 'gradient', 'wallpaper', '主题', '皮肤'],
  model: ['model', 'provider', 'llm', 'gpt', 'claude', 'deepseek', 'openai', 'anthropic', 'ollama', 'llama', 'gemini', 'endpoint', 'inference', '模型'],
  identity: ['identity', 'avatar', 'profile', 'persona', 'character', 'role', 'communication', 'greet', '身份', '角色'],
  session: ['session', 'message', 'chat', 'conversation', 'history', 'thread', 'context', 'dialog', '会话', '聊天'],
  memory: ['memory', 'remember', 'recall', 'vector', 'rag', 'embed', 'knowledge base', 'long-term', 'note', '记忆', '知识库'],
  tools: ['tool', 'capability', 'function', 'plugin', 'extension', 'integration', 'command', 'utility', 'helper', 'addon', '工具', '插件'],
  browser: ['browser', 'web', 'scrap', 'crawl', 'http', 'url', 'fetch', 'site', 'page', 'navigate', 'automation', '浏览器', '网页'],
  vision: ['vision', 'image', 'photo', 'visual', 'ocr', 'screenshot', 'picture', 'camera', 'multimodal', 'detect', '视觉', '图像'],
  voice: ['voice', 'audio', 'speech', 'tts', 'stst', 'transcrib', 'sound', 'music', 'listen', 'mic', '语音', '音频'],
  docs: ['doc', 'document', 'wiki', 'markdown', 'guide', 'manual', 'help', '文档', '知识'],
  skill: ['skill', 'gesture', 'ability', 'trick', 'macro', 'preset', 'recipe', '技能'],
  workflow: ['workflow', 'automation', 'automate', 'pipeline', 'schedule', 'cron', 'trigger', 'batch', '工作流', '自动化'],
  git: ['git', 'github', 'commit', 'repo', 'version', 'diff', 'branch', 'pull request', 'sync', 'git'],
  notify: ['notify', 'alert', 'notification', 'remind', 'alarm', 'webhook', 'slack', 'discord', 'telegram', 'email', '通知', '提醒'],
  dev: ['dev', 'developer', 'debug', 'code', 'ide', 'lint', 'test', 'build', 'ci', 'sdk', 'cli', 'tooling', '开发'],
  security: ['security', 'privacy', 'encrypt', 'auth', 'permission', 'secret', 'safe', 'guard', 'protect', 'sanitize', '安全', '隐私'],
  remote: ['remote', 'mobile', 'phone', 'ssh', 'server', 'cloud', 'device', 'app', '远程', '移动'],
  market: ['market', 'store', 'shop', 'sell', 'buy', 'marketplace', 'commercial', 'monetiz', '市场', '商店'],
  fun: ['fun', 'game', 'gimmick', 'toy', 'joke', 'meme', 'play', 'entertain', 'easter', '趣味', '游戏'],
}

const DEFAULT_CATEGORY = 'tools'
const FALLBACK_KEYWORDS = KEYWORDS[DEFAULT_CATEGORY]

/**
 * Classify a plugin. `repo` = { name, description, topics[] }.
 * Returns one of CAT_IDS. Never throws.
 */
export function classify(repo) {
  const hay = [
    repo.name || '',
    repo.description || '',
    (repo.topics || []).join(' '),
  ].join(' ').toLowerCase()

  let best = null
  let bestScore = 0
  for (const id of CAT_IDS) {
    const words = KEYWORDS[id] || []
    let score = 0
    for (const w of words) if (hay.includes(w)) score++
    if (score > bestScore) {
      bestScore = score
      best = id
    }
  }
  // Nothing matched, or only the generic tools words matched — keep the
  // fallback but only if it actually had a keyword hit; otherwise 'tools'.
  if (bestScore === 0) return DEFAULT_CATEGORY
  return best ?? DEFAULT_CATEGORY
}

/** Exposed for diagnostics / tests. */
export function classifyScores(repo) {
  const hay = [
    repo.name || '',
    repo.description || '',
    (repo.topics || []).join(' '),
  ].join(' ').toLowerCase()
  const out = {}
  for (const id of CAT_IDS) {
    out[id] = (KEYWORDS[id] || []).filter((w) => hay.includes(w)).length
  }
  return out
}

export { FALLBACK_KEYWORDS }
