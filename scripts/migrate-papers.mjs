import fs from 'node:fs';
import path from 'node:path';

const SRC_DIR = '/Users/holdenzerega/proactive-ai-thesis';
const DEST_DIR = '/Users/holdenzerega/shared-ai-research/content/papers';

const DATE = '2026-05-25';
const AUTHOR = 'Holden Zerega';
const DISCLOSURE =
  'Authored by Holden Zerega in collaboration with Claude Opus 4.7 (Anthropic). Substantive arguments and structure by the human author; drafting and exposition assistance by the AI.';

const papers = [
  {
    src: 'candidate-A-delegation-without-agent.md',
    slug: 'delegation-without-an-agent',
    tags: ['principal-agent', 'fiduciary', 'corporate-governance', 'alignment'],
  },
  {
    src: 'candidate-B-augmentative-substitutive.md',
    slug: 'augmentative-or-substitutive',
    tags: ['constitutional-law', 'administrative-law', 'state-ai', 'due-process'],
  },
  {
    src: 'candidate-C-bifurcation-hypothesis.md',
    slug: 'bifurcation-hypothesis',
    tags: ['adoption', 'strategy', 'real-options', 'liability'],
  },
  {
    src: 'candidate-D-delegation-is-novelty.md',
    slug: 'delegation-is-the-novelty',
    tags: ['economic-history', 'automation', 'delegation', 'institutions'],
  },
];

function yamlEscape(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function extractTitle(content) {
  const m = content.match(/^# (.+?)$/m);
  return m ? m[1].trim() : 'Untitled';
}

function extractSubtitle(content) {
  const lines = content.split('\n');
  const h1Idx = lines.findIndex((l) => /^# /.test(l));
  if (h1Idx < 0) return '';
  for (let j = h1Idx + 1; j < lines.length; j++) {
    const l = lines[j].trim();
    if (l === '') continue;
    if (l.startsWith('## ')) {
      // ensure this is the subtitle, not the next section like "## Abstract" or "## I."
      const sub = l.replace(/^## /, '').trim();
      if (/^[IVX]+\./.test(sub) || /^Abstract$/i.test(sub)) return '';
      return sub;
    }
    return '';
  }
  return '';
}

function extractAbstract(content) {
  const idx = content.search(/^##\s+Abstract\b/m);
  if (idx < 0) return '';
  const after = content.slice(idx).replace(/^##\s+Abstract\b\s*/, '');
  // End of abstract: next ## section, or "---" separator
  const endRe = /^(?:---|##\s)/m;
  const endMatch = after.match(endRe);
  const body = endMatch ? after.slice(0, endMatch.index) : after;
  return body
    .trim()
    .replace(/\s+/g, ' ');
}

function extractBody(content) {
  // Body starts at first "## I." or "## 1." section header
  const m = content.match(/^## (?:[IVX]+\.|\d+\.)\s/m);
  if (m) return content.slice(content.indexOf(m[0]));
  // Fallback: after the second "---" horizontal rule (after abstract)
  const hrs = [...content.matchAll(/^---\s*$/gm)];
  if (hrs.length >= 2) return content.slice(hrs[1].index + 4).replace(/^\s+/, '');
  return content;
}

function wordCount(s) {
  return s.split(/\s+/).filter(Boolean).length;
}

for (const p of papers) {
  const srcPath = path.join(SRC_DIR, p.src);
  const content = fs.readFileSync(srcPath, 'utf-8');

  const title = extractTitle(content);
  const subtitle = extractSubtitle(content);
  const abstract = extractAbstract(content);
  const body = extractBody(content);
  const wc = wordCount(body);

  let fm = '---\n';
  fm += `title: "${yamlEscape(title)}"\n`;
  if (subtitle) fm += `subtitle: "${yamlEscape(subtitle)}"\n`;
  fm += `author: "${AUTHOR}"\n`;
  fm += `date: "${DATE}"\n`;
  fm += `abstract: "${yamlEscape(abstract)}"\n`;
  fm += `tags: [${p.tags.map((t) => `"${t}"`).join(', ')}]\n`;
  fm += `wordCount: ${wc}\n`;
  fm += `authorshipDisclosure: "${yamlEscape(DISCLOSURE)}"\n`;
  fm += `license: "CC BY 4.0"\n`;
  fm += '---\n\n';

  const out = fm + body.trimStart();
  const destPath = path.join(DEST_DIR, `${p.slug}.md`);
  fs.writeFileSync(destPath, out);
  console.log(
    `${p.slug}: title="${title}" subtitle="${subtitle}" abstract=${abstract.length}ch body=${wc}w`,
  );
}
