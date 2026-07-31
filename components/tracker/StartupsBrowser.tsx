'use client';

import { useMemo, useState } from 'react';
import { startups } from '@/lib/data/startups';
import { SearchField, matches } from './SearchField';
import { Toolbar, FilterPills, EmptyState } from './Toolbar';

type SortId = 'valuation' | 'name' | 'founded';

// Parse '~$500B (Oct 2025)' / '~€11.7B' / '~$2.45B' into a comparable number.
function valuationValue(v: string): number {
  const m = v.match(/[~$€£]\s*([\d.]+)\s*(t|b|m)/i);
  if (!m) return 0;
  const n = parseFloat(m[1]);
  const unit = m[2].toLowerCase();
  return unit === 't' ? n * 1e12 : unit === 'b' ? n * 1e9 : n * 1e6;
}

export function StartupsBrowser() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState<SortId>('valuation');

  const filtered = useMemo(() => {
    const list = startups.filter((s) =>
      matches(query, s.name, s.focus, s.note, s.founders, s.valuation, s.founded),
    );
    switch (sort) {
      case 'name':
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      case 'founded':
        return [...list].sort((a, b) => b.founded - a.founded);
      default:
        return [...list].sort((a, b) => valuationValue(b.valuation) - valuationValue(a.valuation));
    }
  }, [query, sort]);

  return (
    <>
      <Toolbar>
        <SearchField
          value={query}
          onChange={setQuery}
          placeholder="Search companies, founders, focus…"
          count={filtered.length}
          total={startups.length}
        />
        <FilterPills<SortId>
          label="Sort"
          active={sort}
          onSelect={setSort}
          options={[
            { value: 'valuation', label: 'By valuation' },
            { value: 'founded', label: 'Newest' },
            { value: 'name', label: 'A–Z' },
          ]}
        />
      </Toolbar>

      {filtered.length === 0 ? (
        <EmptyState query={query} onClear={() => setQuery('')} />
      ) : (
        <ul className="divide-y divide-rule border-b border-rule">
          {filtered.map((s) => (
            <li key={s.name} className="py-8 grid grid-cols-12 gap-6 entry-mark">
              <div className="col-span-12 md:col-span-3">
                <h2 className="font-serif text-xl leading-snug tracking-tight">
                  {s.name}
                </h2>
                <p className="mt-1 font-sans text-xs uppercase tracking-widest text-muted">
                  est. {s.founded}
                </p>
              </div>
              <div className="col-span-12 md:col-span-6 max-w-xl">
                <p className="font-sans text-sm text-muted">{s.focus}</p>
                <p className="mt-2 font-serif text-[0.975rem] leading-relaxed text-ink/80">
                  {s.note}
                </p>
                <p className="mt-2 font-sans text-xs text-muted/80">
                  Founders: {s.founders}
                </p>
              </div>
              <div className="col-span-12 md:col-span-3 md:text-right">
                <p className="font-mono text-sm">{s.valuation}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
