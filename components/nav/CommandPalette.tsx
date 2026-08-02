'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { searchDocs, type SearchDoc } from '@/lib/search-index';

/**
 * Cross-section search, opened with ⌘K.
 *
 * The trackers already bind "/" to their own in-page search field, so this
 * deliberately does not claim that key — pressing "/" on a tracker page should
 * still filter the table in front of you.
 */
export function CommandPalette({
  docs,
  open,
  onOpenChange,
}: {
  docs: SearchDoc[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const results = useMemo(() => searchDocs(docs, query), [docs, query]);

  useEffect(() => setCursor(0), [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setCursor(0);
      // let the dialog paint before taking focus
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const go = useCallback(
    (doc: SearchDoc) => {
      onOpenChange(false);
      router.push(doc.href);
    },
    [onOpenChange, router],
  );

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onOpenChange(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setCursor((c) => (results.length ? (c + 1) % results.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setCursor((c) => (results.length ? (c - 1 + results.length) % results.length : 0));
      } else if (e.key === 'Enter' && results[cursor]) {
        e.preventDefault();
        go(results[cursor]);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, results, cursor, go, onOpenChange]);

  // keep the highlighted row in view when arrowing past the fold
  useEffect(() => {
    listRef.current?.querySelector<HTMLElement>('[data-active="true"]')
      ?.scrollIntoView({ block: 'nearest' });
  }, [cursor]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search the archive"
    >
      <button
        aria-hidden
        tabIndex={-1}
        className="absolute inset-0 bg-ink/25 backdrop-blur-[2px] cursor-default"
        onClick={() => onOpenChange(false)}
      />
      <div className="relative w-full max-w-xl bg-paper border border-rule shadow-2xl">
        <div className="flex items-center gap-3 px-4 border-b border-rule">
          <span aria-hidden className="text-muted/70 font-sans text-sm">
            &#8981;
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search papers, models, people, hardware…"
            aria-label="Search the archive"
            className="flex-1 bg-transparent py-4 font-serif text-lg outline-none placeholder:text-muted/60"
          />
          <kbd className="font-sans text-[0.65rem] uppercase tracking-widest text-muted/70">
            Esc
          </kbd>
        </div>

        {query.trim() === '' ? (
          <p className="px-4 py-6 font-serif text-sm text-muted">
            Search across every section at once — papers, model releases,
            advances, people, organizations, hardware and startups.
          </p>
        ) : results.length === 0 ? (
          <p className="px-4 py-6 font-serif text-sm text-muted">
            Nothing matches &ldquo;{query}&rdquo;.
          </p>
        ) : (
          <ul ref={listRef} className="max-h-[52vh] overflow-y-auto py-1">
            {results.map((doc, i) => (
              <li key={doc.id}>
                <button
                  data-active={i === cursor}
                  onMouseEnter={() => setCursor(i)}
                  onClick={() => go(doc)}
                  className={`w-full text-left px-4 py-2.5 flex items-baseline gap-3 transition-colors ${
                    i === cursor ? 'bg-rule/50' : ''
                  }`}
                >
                  <span className="flex-1 min-w-0">
                    <span className="block font-serif text-[1.0625rem] truncate">
                      {doc.title}
                    </span>
                    {doc.meta && (
                      <span className="block font-sans text-xs text-muted truncate">
                        {doc.meta}
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 font-sans text-[0.65rem] uppercase tracking-widest text-muted/70">
                    {doc.section}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
