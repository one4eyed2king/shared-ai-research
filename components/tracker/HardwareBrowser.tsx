'use client';

import { useMemo, useState } from 'react';
import { hardwareByVendor } from '@/lib/data/hardware';
import { SearchField, matches } from './SearchField';
import { Toolbar, JumpNav, EmptyState, slugify } from './Toolbar';
import { useTrackerQuery } from '@/lib/use-tracker-query';

export function HardwareBrowser() {
  const [query, setQuery] = useTrackerQuery();
  const groups = useMemo(() => hardwareByVendor(), []);
  const total = groups.reduce((n, g) => n + g.entries.length, 0);

  const filtered = useMemo(
    () =>
      groups
        .map((g) => ({
          ...g,
          entries: g.entries.filter((h) =>
            matches(query, h.vendor, h.name, h.note, h.memory, h.compute, h.year, h.price),
          ),
        }))
        .filter((g) => g.entries.length > 0),
    [groups, query],
  );

  const count = filtered.reduce((n, g) => n + g.entries.length, 0);

  return (
    <>
      <Toolbar>
        <SearchField
          value={query}
          onChange={setQuery}
          placeholder="Search chips, vendors, specs…"
          count={count}
          total={total}
        />
        <JumpNav
          items={groups
            .filter((g) => g.entries.length > 0)
            .map((g) => ({ id: slugify(g.vendor), label: g.vendor }))}
        />
      </Toolbar>

      {filtered.length === 0 ? (
        <EmptyState query={query} onClear={() => setQuery('')} />
      ) : (
        filtered.map((group) => (
          <section
            key={group.vendor}
            id={slugify(group.vendor)}
            className="border-b border-rule py-12 scroll-mt-20"
          >
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-6">
              {group.vendor}
              <span className="ml-3 font-sans text-xs tracking-normal normal-case text-muted/70 tabular-nums">
                {group.entries.length}
              </span>
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[56rem]">
                <thead>
                  <tr className="font-sans text-xs uppercase tracking-widest text-muted">
                    <th className="py-3 pr-6 font-medium">Chip</th>
                    <th className="py-3 pr-6 font-medium">Year</th>
                    <th className="py-3 pr-6 font-medium">Memory</th>
                    <th className="py-3 pr-6 font-medium">Bandwidth</th>
                    <th className="py-3 pr-6 font-medium">Compute</th>
                    <th className="py-3 pr-6 font-medium whitespace-nowrap">
                      Unit price (approx.)
                    </th>
                    <th className="py-3 font-medium whitespace-nowrap">
                      Cloud rate (approx.)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-rule border-t border-rule">
                  {group.entries.map((h) => (
                    <tr key={h.name} className="align-top entry-hover">
                      <td className="py-4 pr-6">
                        <div className="font-serif text-[1.0625rem] leading-snug">
                          {h.name}
                        </div>
                        <div className="mt-1.5 font-serif text-[0.9rem] text-ink/70 leading-relaxed max-w-md">
                          {h.note}
                        </div>
                      </td>
                      <td className="py-4 pr-6 font-mono text-sm text-muted">{h.year}</td>
                      <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                        {h.memory}
                      </td>
                      <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                        {h.bandwidth}
                      </td>
                      <td className="py-4 pr-6 font-sans text-sm text-muted">{h.compute}</td>
                      <td className="py-4 pr-6 font-sans text-sm whitespace-nowrap">
                        {h.price}
                      </td>
                      <td className="py-4 font-sans text-sm text-muted whitespace-nowrap">
                        {h.cloudRate ?? '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))
      )}

      <p className="pt-6 font-sans text-xs text-muted/80 max-w-3xl">
        Prices are indicative street or list prices per accelerator at launch in
        USD. Real transactions vary widely with volume, form factor, and
        packaging; rack-scale systems are priced as systems, not chips. Cloud
        rates are typical on-demand per-accelerator-hour figures across major
        and specialist providers.
      </p>
    </>
  );
}
