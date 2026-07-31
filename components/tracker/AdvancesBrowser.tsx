'use client';

import { useMemo, useState } from 'react';
import { advances } from '@/lib/data/advances';
import { SearchField, matches } from './SearchField';
import { Toolbar, JumpNav, EmptyState } from './Toolbar';

export function AdvancesBrowser() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(
    () => advances.filter((a) => matches(query, a.name, a.what, a.why, a.reference, a.year)),
    [query],
  );

  const years = useMemo(
    () => [...new Set(filtered.map((a) => a.year))],
    [filtered],
  );

  return (
    <>
      <Toolbar>
        <SearchField
          value={query}
          onChange={setQuery}
          placeholder="Search advances, papers, concepts…"
          count={filtered.length}
          total={advances.length}
        />
        <JumpNav
          items={[...new Set(advances.map((a) => a.year))].map((y) => ({
            id: `y${y}`,
            label: String(y),
          }))}
        />
      </Toolbar>

      {filtered.length === 0 ? (
        <EmptyState query={query} onClear={() => setQuery('')} />
      ) : (
        <ol className="divide-y divide-rule">
          {filtered.map((a, i) => {
            const firstOfYear = i === 0 || filtered[i - 1].year !== a.year;
            return (
              <li
                key={a.name}
                id={firstOfYear ? `y${a.year}` : undefined}
                className="py-10 grid grid-cols-12 gap-6 scroll-mt-20 entry-mark"
              >
                <div className="col-span-12 md:col-span-2">
                  {firstOfYear && (
                    <span className="font-mono text-base text-ink">{a.year}</span>
                  )}
                </div>
                <div className="col-span-12 md:col-span-10 max-w-3xl">
                  <h2 className="font-serif text-2xl leading-snug tracking-tight">
                    {a.name}
                  </h2>
                  <p className="mt-3 font-serif text-[1.0625rem] leading-relaxed text-ink/90">
                    {a.what}
                  </p>
                  <p className="mt-3 font-serif text-[1.0625rem] leading-relaxed text-ink/80">
                    <span className="italic">Why it mattered.</span> {a.why}
                  </p>
                  {a.reference && (
                    <p className="mt-4 font-sans text-sm text-muted">{a.reference}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      )}
      {years.length > 0 && <div className="border-t border-rule" />}
    </>
  );
}
