import type { PaperMeta } from './papers';
import { models } from './data/models';
import { advances } from './data/advances';
import { peopleGroups } from './data/people';
import { organizationGroups } from './data/organizations';
import { hardware } from './data/hardware';
import { startups } from './data/startups';

/**
 * A flat, cross-section search index.
 *
 * Until now every tracker searched only its own dataset, which meant a reader
 * had to know which table held a fact before they could look it up. That is a
 * real problem here and not a hypothetical one: NVIDIA appears in hardware and
 * in organizations, and OpenAI and Anthropic appear in both organizations and
 * startups. Searching for either from the wrong page returned nothing.
 *
 * The index is built on the server and shipped as a reduced record — a display
 * title, one line of context, and a pre-lowercased haystack — rather than by
 * bundling the source datasets into the client.
 */
export interface SearchDoc {
  id: string;
  title: string;
  meta: string;
  section: string;
  group: string;
  href: string;
  haystack: string;
}

function doc(
  id: string,
  title: string,
  meta: string,
  section: string,
  group: string,
  href: string,
  extra: (string | number | undefined)[],
): SearchDoc {
  return {
    id,
    title,
    meta,
    section,
    group,
    href,
    haystack: [title, meta, section, ...extra]
      .filter(Boolean)
      .join(' ')
      .toLowerCase(),
  };
}

/** Deep-link into a tracker with its own filter pre-applied. */
function at(path: string, query: string): string {
  return `${path}?q=${encodeURIComponent(query)}`;
}

export function buildSearchIndex(papers: PaperMeta[]): SearchDoc[] {
  const docs: SearchDoc[] = [];

  for (const p of papers) {
    docs.push(
      doc(`paper:${p.slug}`, p.title, p.subtitle ?? p.author, 'Research', 'The archive',
        `/papers/${p.slug}`, [p.author, p.affiliation, p.abstract, ...p.tags]),
    );
  }

  for (const m of models) {
    docs.push(
      doc(`model:${m.name}`, m.name, `${m.developer} · ${m.released}`, 'Models',
        'What the systems do', at('/models', m.name), [m.access, m.context, m.note]),
    );
  }

  for (const a of advances) {
    docs.push(
      doc(`advance:${a.name}`, a.name, `${a.year}`, 'Advances', 'What the systems do',
        at('/advances', a.name), [a.what, a.why, a.reference]),
    );
  }

  for (const h of hardware) {
    docs.push(
      doc(`hw:${h.vendor}:${h.name}`, h.name, `${h.vendor} · ${h.year}`, 'Hardware',
        'What the systems do', at('/hardware', h.name),
        [h.memory, h.bandwidth, h.compute, h.price, h.cloudRate, h.note]),
    );
  }

  for (const g of peopleGroups) {
    for (const person of g.people) {
      docs.push(
        doc(`person:${person.name}`, person.name, `${person.role} · ${person.org}`, 'People',
          'Who is behind them', at('/people', person.name), [g.title, person.note]),
      );
    }
  }

  for (const g of organizationGroups) {
    for (const org of g.orgs) {
      docs.push(
        doc(`org:${org.name}`, org.name, `${g.title}${org.hq ? ` · ${org.hq}` : ''}`,
          'Organizations', 'Who is behind them', at('/organizations', org.name),
          [org.founded, org.note, g.description]),
      );
    }
  }

  for (const s of startups) {
    docs.push(
      doc(`startup:${s.name}`, s.name, s.focus, 'Startups', 'Who is behind them',
        at('/startups', s.name), [s.founders, s.valuation, s.founded, s.note]),
    );
  }

  return docs;
}

/**
 * Rank by where the match lands: a hit on the title beats one buried in a note,
 * and a title that starts with the term beats one that merely contains it.
 * Without this an exact name is easily outranked by a passing mention of it.
 */
export function searchDocs(docs: SearchDoc[], raw: string, limit = 12): SearchDoc[] {
  const q = raw.trim().toLowerCase();
  if (!q) return [];

  const scored: { doc: SearchDoc; score: number }[] = [];
  for (const d of docs) {
    const title = d.title.toLowerCase();
    let score = 0;
    if (title === q) score = 100;
    else if (title.startsWith(q)) score = 80;
    else if (title.includes(q)) score = 60;
    else if (d.meta.toLowerCase().includes(q)) score = 40;
    else if (d.haystack.includes(q)) score = 20;
    if (score) scored.push({ doc: d, score: score - Math.min(title.length / 20, 5) });
  }

  return scored
    .sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title))
    .slice(0, limit)
    .map((s) => s.doc);
}
