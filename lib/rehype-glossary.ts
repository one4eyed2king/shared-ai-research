import type { Glossary } from './glossary';
import { buildMatcher, matchSegments, type GlossaryMatcher } from './glossary-match';

// Minimal hast node shape — enough to walk and rewrite without pulling in
// the full @types/hast surface.
interface HastNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
}

// Don't annotate inside these: headings, links (incl. autolinked headings and
// footnote refs), code, and footnote superscripts. Keeps decoration confined
// to running prose.
const EXCLUDED_TAGS = new Set([
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'a',
  'code',
  'pre',
  'sup',
  'script',
  'style',
]);

function hasMathClass(node: HastNode): boolean {
  const className = node.properties?.className;
  const classes = Array.isArray(className) ? className : [];
  return classes.some(
    (c) => typeof c === 'string' && (c.includes('math') || c.includes('katex')),
  );
}

function termNode(value: string, definition: string): HastNode {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      className: ['glossary-term'],
      tabIndex: 0,
      dataDefinition: definition,
    },
    children: [{ type: 'text', value }],
  };
}

/**
 * rehype plugin that wraps the first occurrence of each glossary term in a
 * `<span class="glossary-term" data-definition="…">`. A pure-CSS tooltip
 * (see globals.css) reveals the definition on hover or keyboard focus.
 *
 * Each term is annotated at most once per document — the standard glossary
 * convention of defining a term on first use — so the prose stays uncluttered.
 */
export default function rehypeGlossary(glossary: Glossary) {
  const built: GlossaryMatcher | null = buildMatcher(glossary);

  if (!built) {
    return () => {};
  }
  const matcher: GlossaryMatcher = built;

  return (tree: HastNode) => {
    const used = new Set<string>();

    function walk(node: HastNode, excluded: boolean): void {
      if (!node.children) return;

      const next: HastNode[] = [];
      for (const child of node.children) {
        if (child.type === 'text' && !excluded && typeof child.value === 'string') {
          for (const seg of matchSegments(child.value, used, matcher)) {
            next.push(
              seg.type === 'text'
                ? { type: 'text', value: seg.value }
                : termNode(seg.value, seg.definition),
            );
          }
        } else if (child.type === 'element') {
          const childExcluded =
            excluded ||
            (child.tagName !== undefined && EXCLUDED_TAGS.has(child.tagName)) ||
            hasMathClass(child);
          walk(child, childExcluded);
          next.push(child);
        } else {
          next.push(child);
        }
      }
      node.children = next;
    }

    walk(tree, false);
  };
}
