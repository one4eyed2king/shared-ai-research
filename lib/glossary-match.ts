import type { Glossary } from './glossary';

// Shared glossary-matching core, used by both the rehype plugin (which emits
// hast nodes for the paper body) and the abstract annotator (which emits HTML
// strings). Keeping the matching logic here means the two paths can't diverge.

export interface GlossaryMatcher {
  regex: RegExp;
  definitions: Map<string, string>;
}

export type Segment =
  | { type: 'text'; value: string }
  | { type: 'term'; value: string; definition: string };

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function buildMatcher(glossary: Glossary): GlossaryMatcher | null {
  const terms = Object.keys(glossary);
  if (terms.length === 0) return null;

  // Longer phrases first so e.g. "general purpose technology" wins over "technology".
  const pattern = terms
    .slice()
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|');
  const regex = new RegExp(`\\b(?:${pattern})\\b`, 'gi');

  const definitions = new Map<string, string>();
  for (const term of terms) {
    definitions.set(term.toLowerCase(), glossary[term]);
  }
  return { regex, definitions };
}

/**
 * Split `value` into text/term segments, annotating each glossary term only the
 * first time it is seen. `used` tracks already-annotated terms across a whole
 * document so a term is defined once, on first occurrence.
 */
export function matchSegments(
  value: string,
  used: Set<string>,
  matcher: GlossaryMatcher,
): Segment[] {
  const { regex, definitions } = matcher;
  regex.lastIndex = 0;

  const segments: Segment[] = [];
  let lastIndex = 0;
  let matched = false;
  let m: RegExpExecArray | null;

  while ((m = regex.exec(value)) !== null) {
    const text = m[0];
    const key = text.toLowerCase();
    if (used.has(key)) continue;
    const definition = definitions.get(key);
    if (!definition) continue;

    used.add(key);
    matched = true;

    if (m.index > lastIndex) {
      segments.push({ type: 'text', value: value.slice(lastIndex, m.index) });
    }
    segments.push({ type: 'term', value: text, definition });
    lastIndex = m.index + text.length;
  }

  if (!matched) {
    return [{ type: 'text', value }];
  }
  if (lastIndex < value.length) {
    segments.push({ type: 'text', value: value.slice(lastIndex) });
  }
  return segments;
}
