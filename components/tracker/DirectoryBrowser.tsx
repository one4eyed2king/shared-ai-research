'use client';

// Shared grouped-directory browser used by the People and Organizations
// pages: sticky search + group jump links over a grid of entries.

import { useMemo, useState } from 'react';
import { SearchField, matches } from './SearchField';
import { Toolbar, JumpNav, EmptyState, slugify } from './Toolbar';

export interface DirectoryEntry {
  title: string;
  meta: string; // small sans line under the title
  note: string;
}

export interface DirectoryGroup {
  title: string;
  description?: string;
  entries: DirectoryEntry[];
}

export function DirectoryBrowser({
  groups,
  placeholder,
}: {
  groups: DirectoryGroup[];
  placeholder: string;
}) {
  const [query, setQuery] = useState('');
  const total = groups.reduce((n, g) => n + g.entries.length, 0);

  const filtered = useMemo(
    () =>
      groups
        .map((g) => ({
          ...g,
          entries: g.entries.filter((e) => matches(query, e.title, e.meta, e.note)),
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
          placeholder={placeholder}
          count={count}
          total={total}
        />
        <JumpNav
          items={groups.map((g) => ({ id: slugify(g.title), label: g.title }))}
        />
      </Toolbar>

      {filtered.length === 0 ? (
        <EmptyState query={query} onClear={() => setQuery('')} />
      ) : (
        filtered.map((group) => (
          <section
            key={group.title}
            id={slugify(group.title)}
            className="border-b border-rule py-12 scroll-mt-20"
          >
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted">
              {group.title}
              <span className="ml-3 font-sans text-xs tracking-normal normal-case text-muted/70 tabular-nums">
                {group.entries.length}
              </span>
            </h2>
            {group.description && (
              <p className="mt-2 font-serif italic text-[0.975rem] text-muted max-w-2xl">
                {group.description}
              </p>
            )}
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {group.entries.map((e) => (
                <li key={e.title} className="max-w-xl">
                  <h3 className="font-serif text-xl leading-snug tracking-tight">
                    {e.title}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-muted">{e.meta}</p>
                  <p className="mt-2 font-serif text-[0.975rem] leading-relaxed text-ink/80">
                    {e.note}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </>
  );
}
