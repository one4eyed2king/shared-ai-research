import { glossary } from './glossary';
import { buildMatcher, matchSegments } from './glossary-match';

const matcher = buildMatcher(glossary);

function escapeAttr(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Annotate glossary terms in already-rendered, simple inline HTML (a paper
 * abstract, produced by renderInlineMarkdown). Only the text *between* tags is
 * processed, so existing <strong>/<em> markup and HTML entities pass through
 * untouched. The text is already HTML-escaped, so matched text is emitted
 * verbatim; only the definition attribute is escaped.
 */
export function annotateAbstractHtml(html: string): string {
  if (!matcher) return html;
  const used = new Set<string>();

  return html
    .split(/(<[^>]+>)/)
    .map((token) => {
      if (token.startsWith('<')) return token;
      return matchSegments(token, used, matcher)
        .map((seg) =>
          seg.type === 'text'
            ? seg.value
            : `<span class="glossary-term" tabindex="0" data-definition="${escapeAttr(
                seg.definition,
              )}">${seg.value}</span>`,
        )
        .join('');
    })
    .join('');
}
