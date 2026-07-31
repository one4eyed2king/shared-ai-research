'use client';

import { useEffect, useMemo, useRef, useState, type ReactElement, type ReactNode } from 'react';
import Link from 'next/link';
import { formatShortDate } from '@/lib/format';

export interface PaperListItem {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  affiliation?: string;
  date: string;
  abstractHtml: string;
  tags: string[];
  wordCount: number;
  readingTime: number;
}

type ViewId = 'list' | 'condensed' | 'table' | 'cards';
type SortId = 'newest' | 'oldest' | 'longest' | 'shortest' | 'title';
type LengthId = 'short' | 'medium' | 'long';

const VIEWS: { id: ViewId; label: string; hint: string; icon: ReactElement }[] = [
  { id: 'list', label: 'List', hint: 'Spacious, with abstracts', icon: <ListIcon /> },
  { id: 'condensed', label: 'Condensed', hint: 'Compact one-line rows', icon: <CondensedIcon /> },
  { id: 'table', label: 'Table', hint: 'Columns at a glance', icon: <TableIcon /> },
  { id: 'cards', label: 'Cards', hint: 'Grid of cards', icon: <CardsIcon /> },
];

const SORTS: { id: SortId; label: string }[] = [
  { id: 'newest', label: 'Newest first' },
  { id: 'oldest', label: 'Oldest first' },
  { id: 'longest', label: 'Longest first' },
  { id: 'shortest', label: 'Shortest first' },
  { id: 'title', label: 'Title (A–Z)' },
];

const LENGTHS: { id: LengthId; label: string; hint: string }[] = [
  { id: 'short', label: 'Short', hint: '≤ 30 min' },
  { id: 'medium', label: 'Medium', hint: '30–50 min' },
  { id: 'long', label: 'Long', hint: '50+ min' },
];

function lengthBucket(readingTime: number): LengthId {
  if (readingTime <= 30) return 'short';
  if (readingTime <= 50) return 'medium';
  return 'long';
}

function toggle<T>(arr: T[], value: T): T[] {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export default function PapersBrowser({ papers }: { papers: PaperListItem[] }) {
  const [view, setView] = useState<ViewId>('list');
  const [sort, setSort] = useState<SortId>('newest');
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);
  const [lengths, setLengths] = useState<LengthId[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Restore the reader's last view choice (after mount, to avoid hydration mismatch).
  useEffect(() => {
    const saved = window.localStorage.getItem('papers-view');
    if (saved && VIEWS.some((v) => v.id === saved)) setView(saved as ViewId);
  }, []);
  useEffect(() => {
    window.localStorage.setItem('papers-view', view);
  }, [view]);

  const allTags = useMemo(
    () => Array.from(new Set(papers.flatMap((p) => p.tags))).sort(),
    [papers],
  );
  const allAuthors = useMemo(
    () => Array.from(new Set(papers.map((p) => p.author))).sort(),
    [papers],
  );
  const availableLengths = useMemo(
    () => new Set(papers.map((p) => lengthBucket(p.readingTime))),
    [papers],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = papers.filter((p) => {
      if (q && !`${p.title} ${p.subtitle ?? ''} ${p.author}`.toLowerCase().includes(q))
        return false;
      if (tags.length && !p.tags.some((t) => tags.includes(t))) return false;
      if (authors.length && !authors.includes(p.author)) return false;
      if (lengths.length && !lengths.includes(lengthBucket(p.readingTime))) return false;
      return true;
    });
    return filtered.sort((a, b) => {
      switch (sort) {
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'longest':
          return b.wordCount - a.wordCount;
        case 'shortest':
          return a.wordCount - b.wordCount;
        case 'title':
          return a.title.localeCompare(b.title);
        case 'newest':
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });
  }, [papers, query, tags, authors, lengths, sort]);

  const activeFilters =
    tags.length + authors.length + lengths.length + (query.trim() ? 1 : 0);

  function clearFilters() {
    setQuery('');
    setTags([]);
    setAuthors([]);
    setLengths([]);
  }

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-rule">
        <p className="font-sans text-xs uppercase tracking-widest text-muted">
          {results.length === papers.length
            ? `${papers.length} papers`
            : `${results.length} of ${papers.length} papers`}
        </p>
        <div className="flex items-center gap-2">
          <ViewMenu view={view} onChange={setView} />
          <button
            type="button"
            onClick={() => setFiltersOpen((o) => !o)}
            aria-expanded={filtersOpen}
            className={`inline-flex items-center gap-2 rounded border px-3 py-1.5 font-sans text-xs uppercase tracking-widest transition-colors ${
              filtersOpen || activeFilters
                ? 'border-ink text-ink'
                : 'border-rule text-muted hover:text-ink hover:border-ink/40'
            }`}
          >
            <FilterIcon />
            Filter
            {activeFilters > 0 && (
              <span className="inline-flex items-center justify-center min-w-[1.1rem] h-[1.1rem] px-1 rounded-full bg-accent text-paper text-[0.65rem] tracking-normal">
                {activeFilters}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Filter panel */}
      {filtersOpen && (
        <div className="mt-5 rounded border border-rule bg-ink/[0.015] p-5 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FilterGroup label="Search">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Title, subtitle, or author…"
                className="w-full rounded border border-rule bg-paper px-3 py-2 font-serif text-base text-ink placeholder:text-muted/60 focus:outline-none focus:border-ink/50"
              />
            </FilterGroup>

            <FilterGroup label="Sort by">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortId)}
                className="w-full rounded border border-rule bg-paper px-3 py-2 font-sans text-sm text-ink focus:outline-none focus:border-ink/50"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </FilterGroup>

            {allTags.length > 0 && (
              <FilterGroup label="Topic">
                <ChipRow>
                  {allTags.map((tag) => (
                    <Chip
                      key={tag}
                      active={tags.includes(tag)}
                      onClick={() => setTags((t) => toggle(t, tag))}
                    >
                      {tag}
                    </Chip>
                  ))}
                </ChipRow>
              </FilterGroup>
            )}

            {allAuthors.length > 1 && (
              <FilterGroup label="Author">
                <ChipRow>
                  {allAuthors.map((author) => (
                    <Chip
                      key={author}
                      active={authors.includes(author)}
                      onClick={() => setAuthors((a) => toggle(a, author))}
                    >
                      {author}
                    </Chip>
                  ))}
                </ChipRow>
              </FilterGroup>
            )}

            <FilterGroup label="Length">
              <ChipRow>
                {LENGTHS.filter((l) => availableLengths.has(l.id)).map((l) => (
                  <Chip
                    key={l.id}
                    active={lengths.includes(l.id)}
                    onClick={() => setLengths((cur) => toggle(cur, l.id))}
                  >
                    {l.label}
                    <span className="ml-1.5 text-muted/70 tracking-normal lowercase">
                      {l.hint}
                    </span>
                  </Chip>
                ))}
              </ChipRow>
            </FilterGroup>
          </div>

          {activeFilters > 0 && (
            <div className="mt-5 pt-4 border-t border-rule">
              <button
                type="button"
                onClick={clearFilters}
                className="font-sans text-xs uppercase tracking-widest text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Results */}
      <div className="mt-2">
        {results.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl text-muted">No papers match your filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 font-sans text-xs uppercase tracking-widest text-accent hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : view === 'list' ? (
          <ListView papers={results} />
        ) : view === 'condensed' ? (
          <CondensedView papers={results} />
        ) : view === 'table' ? (
          <TableView papers={results} />
        ) : (
          <CardsView papers={results} />
        )}
      </div>
    </div>
  );
}

/* ── View switcher dropdown ─────────────────────────────────────────────── */

function ViewMenu({ view, onChange }: { view: ViewId; onChange: (v: ViewId) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = VIEWS.find((v) => v.id === view)!;

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded border border-rule px-3 py-1.5 font-sans text-xs uppercase tracking-widest text-muted hover:text-ink hover:border-ink/40 transition-colors"
      >
        {active.icon}
        <span className="text-ink">{active.label}</span>
        <Chevron open={open} />
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-60 rounded border border-rule bg-paper shadow-lg z-30 overflow-hidden"
        >
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              role="menuitemradio"
              aria-checked={v.id === view}
              onClick={() => {
                onChange(v.id);
                setOpen(false);
              }}
              className={`flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-ink/[0.04] ${
                v.id === view ? 'text-accent' : 'text-ink'
              }`}
            >
              <span className="mt-0.5 shrink-0">{v.icon}</span>
              <span className="flex-1">
                <span className="block font-sans text-sm">{v.label}</span>
                <span className="block font-sans text-xs text-muted">{v.hint}</span>
              </span>
              {v.id === view && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Filter primitives ──────────────────────────────────────────────────── */

function FilterGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <div className="font-sans text-xs uppercase tracking-widest text-muted mb-2.5">
        {label}
      </div>
      {children}
    </div>
  );
}

function ChipRow({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-3 py-1 font-sans text-xs tracking-wide transition-colors ${
        active
          ? 'border-ink bg-ink text-paper'
          : 'border-rule text-muted hover:text-ink hover:border-ink/40'
      }`}
    >
      {children}
    </button>
  );
}

/* ── Views ──────────────────────────────────────────────────────────────── */

function ListView({ papers }: { papers: PaperListItem[] }) {
  return (
    <ul className="divide-y divide-rule">
      {papers.map((paper) => (
        <li key={paper.slug}>
          <Link
            href={`/papers/${paper.slug}`}
            className="block py-10 group grid grid-cols-12 gap-6"
          >
            <div className="col-span-12 md:col-span-3 font-sans text-xs uppercase tracking-widest text-muted">
              <div>{formatShortDate(paper.date)}</div>
              <div className="mt-1">{paper.readingTime} min read</div>
              {paper.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {paper.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[0.65rem] tracking-wider text-muted/80">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif text-2xl md:text-[1.625rem] leading-snug tracking-tight group-hover:text-accent transition-colors">
                {paper.title}
              </h2>
              {paper.subtitle && (
                <p className="mt-1 font-serif italic text-lg text-muted">{paper.subtitle}</p>
              )}
              <p
                className="mt-3 font-serif text-[1.0625rem] text-ink/80 leading-relaxed line-clamp-3"
                dangerouslySetInnerHTML={{ __html: paper.abstractHtml }}
              />
              <div className="mt-4 font-sans text-sm text-muted">
                {paper.author}
                {paper.affiliation && (
                  <span className="ml-2 text-muted/70">&middot; {paper.affiliation}</span>
                )}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function CondensedView({ papers }: { papers: PaperListItem[] }) {
  return (
    <ul className="divide-y divide-rule">
      {papers.map((paper) => (
        <li key={paper.slug}>
          <Link
            href={`/papers/${paper.slug}`}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-4 group"
          >
            <span className="font-serif text-lg leading-snug tracking-tight group-hover:text-accent transition-colors">
              {paper.title}
              {paper.subtitle && (
                <span className="text-muted italic font-normal"> — {paper.subtitle}</span>
              )}
            </span>
            <span className="shrink-0 font-sans text-xs uppercase tracking-widest text-muted whitespace-nowrap">
              {paper.author} &middot; {formatShortDate(paper.date)} &middot; {paper.readingTime} min
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

function TableView({ papers }: { papers: PaperListItem[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse font-sans text-sm">
        <thead>
          <tr className="border-b border-rule text-left">
            <Th>Title</Th>
            <Th>Author</Th>
            <Th>Topics</Th>
            <Th className="whitespace-nowrap">Length</Th>
            <Th className="whitespace-nowrap">Published</Th>
          </tr>
        </thead>
        <tbody>
          {papers.map((paper) => (
            <tr key={paper.slug} className="border-b border-rule group hover:bg-ink/[0.025]">
              <td className="py-3 pr-4 align-top">
                <Link
                  href={`/papers/${paper.slug}`}
                  className="font-serif text-base leading-snug text-ink group-hover:text-accent transition-colors"
                >
                  {paper.title}
                </Link>
              </td>
              <td className="py-3 pr-4 align-top text-muted whitespace-nowrap">{paper.author}</td>
              <td className="py-3 pr-4 align-top text-muted">
                {paper.tags.slice(0, 3).join(', ') || '—'}
              </td>
              <td className="py-3 pr-4 align-top text-muted whitespace-nowrap">
                {paper.readingTime} min
              </td>
              <td className="py-3 align-top text-muted whitespace-nowrap">
                {formatShortDate(paper.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CardsView({ papers }: { papers: PaperListItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-2">
      {papers.map((paper) => (
        <Link
          key={paper.slug}
          href={`/papers/${paper.slug}`}
          className="group flex flex-col rounded border border-rule p-6 hover:border-ink/40 hover:shadow-sm transition-all"
        >
          <div className="font-sans text-xs uppercase tracking-widest text-muted mb-3">
            {formatShortDate(paper.date)} &middot; {paper.readingTime} min read
          </div>
          <h2 className="font-serif text-xl leading-snug tracking-tight group-hover:text-accent transition-colors">
            {paper.title}
          </h2>
          {paper.subtitle && (
            <p className="mt-1 font-serif italic text-muted">{paper.subtitle}</p>
          )}
          <p
            className="mt-3 font-serif text-[0.95rem] text-ink/75 leading-relaxed line-clamp-4 flex-1"
            dangerouslySetInnerHTML={{ __html: paper.abstractHtml }}
          />
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="font-sans text-sm text-muted truncate">{paper.author}</span>
            {paper.tags.length > 0 && (
              <span className="font-sans text-[0.65rem] uppercase tracking-wider text-muted/80 whitespace-nowrap">
                {paper.tags.slice(0, 2).join(' · ')}
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

function Th({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <th
      className={`py-2 pr-4 font-sans text-xs uppercase tracking-widest text-muted font-normal ${className}`}
    >
      {children}
    </th>
  );
}

/* ── Icons ──────────────────────────────────────────────────────────────── */

function ListIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="3" width="12" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="7.25" width="12" height="1.5" rx="0.5" fill="currentColor" />
      <rect x="2" y="11.5" width="12" height="1.5" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function CondensedIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="3" width="12" height="1.25" rx="0.5" fill="currentColor" />
      <rect x="2" y="6" width="12" height="1.25" rx="0.5" fill="currentColor" />
      <rect x="2" y="9" width="12" height="1.25" rx="0.5" fill="currentColor" />
      <rect x="2" y="12" width="12" height="1.25" rx="0.5" fill="currentColor" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 6.5h12M7 3v10" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function CardsIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
      <rect x="2" y="2.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9" y="2.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="2" y="8.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <rect x="9" y="8.5" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M2 4h12M4 8h8M6 12h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={`transition-transform ${open ? 'rotate-180' : ''}`}
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5">
      <path
        d="M3 8.5l3.5 3.5L13 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
