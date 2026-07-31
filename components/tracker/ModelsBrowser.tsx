'use client';

import { useMemo, useState } from 'react';
import { models } from '@/lib/data/models';
import { formatYearMonth } from '@/lib/format';
import { SearchField, matches } from './SearchField';
import { Toolbar, FilterPills, EmptyState } from './Toolbar';

type AccessFilter = 'all' | 'Proprietary' | 'Open weights';

export function ModelsBrowser() {
  const [query, setQuery] = useState('');
  const [access, setAccess] = useState<AccessFilter>('all');

  const filtered = useMemo(
    () =>
      models.filter(
        (m) =>
          (access === 'all' || m.access === access) &&
          matches(query, m.name, m.developer, m.note, m.released, m.context),
      ),
    [query, access],
  );

  const byYear = useMemo(() => {
    const groups = new Map<string, typeof models>();
    for (const m of filtered) {
      const year = m.released.slice(0, 4);
      const list = groups.get(year) ?? [];
      list.push(m);
      groups.set(year, list);
    }
    return [...groups.entries()];
  }, [filtered]);

  return (
    <>
      <Toolbar>
        <SearchField
          value={query}
          onChange={setQuery}
          placeholder="Search models, labs, capabilities…"
          count={filtered.length}
          total={models.length}
        />
        <FilterPills<AccessFilter>
          label="Access"
          active={access}
          onSelect={setAccess}
          options={[
            { value: 'all', label: 'All' },
            { value: 'Proprietary', label: 'Proprietary' },
            { value: 'Open weights', label: 'Open weights' },
          ]}
        />
      </Toolbar>

      {filtered.length === 0 ? (
        <EmptyState query={query} onClear={() => setQuery('')} />
      ) : (
        byYear.map(([year, entries]) => (
          <section key={year} className="border-b border-rule py-8">
            <h2 className="font-mono text-sm text-muted mb-6">{year}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[52rem]">
                <thead className="sr-only">
                  <tr>
                    <th>Model</th>
                    <th>Developer</th>
                    <th>Released</th>
                    <th>Access</th>
                    <th>Context</th>
                    <th>Significance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule/70">
                  {entries.map((m) => (
                    <tr key={`${m.developer}-${m.name}`} className="align-top entry-hover">
                      <td className="py-4 pr-6 font-serif text-[1.0625rem] leading-snug w-[16rem]">
                        {m.name}
                      </td>
                      <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                        {m.developer}
                      </td>
                      <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                        {formatYearMonth(m.released)}
                      </td>
                      <td className="py-4 pr-6 font-sans text-sm whitespace-nowrap">
                        {m.access === 'Open weights' ? (
                          <span className="text-accent">Open weights</span>
                        ) : (
                          <span className="text-muted">Proprietary</span>
                        )}
                      </td>
                      <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                        {m.context ?? '—'}
                      </td>
                      <td className="py-4 font-serif text-[0.95rem] text-ink/80 leading-relaxed min-w-[18rem]">
                        {m.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))
      )}
    </>
  );
}
