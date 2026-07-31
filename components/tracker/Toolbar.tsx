'use client';

import type { ReactNode } from 'react';

// Sticky control bar shared by the tracker pages: search on the left,
// filters or jump links on the right, hairline rule underneath.
export function Toolbar({ children }: { children: ReactNode }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 px-6 py-3 bg-paper/95 backdrop-blur-sm border-b border-rule">
      <div className="max-w-wide mx-auto flex flex-wrap items-center gap-x-8 gap-y-3">
        {children}
      </div>
    </div>
  );
}

export function FilterPills<T extends string>({
  options,
  active,
  onSelect,
  label,
}: {
  options: { value: T; label: string }[];
  active: T;
  onSelect: (v: T) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex flex-wrap items-center gap-x-5 gap-y-1"
    >
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onSelect(o.value)}
          className={`font-sans text-xs uppercase tracking-widest pb-0.5 border-b transition-colors ${
            active === o.value
              ? 'text-accent border-accent'
              : 'text-muted border-transparent hover:text-ink'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function JumpNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="Jump to group" className="flex flex-wrap items-center gap-x-5 gap-y-1">
      {items.map((i) => (
        <a
          key={i.id}
          href={`#${i.id}`}
          className="font-sans text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors"
        >
          {i.label}
        </a>
      ))}
    </nav>
  );
}

export function EmptyState({ query, onClear }: { query: string; onClear: () => void }) {
  return (
    <div className="py-24 text-center">
      <p className="font-serif italic text-lg text-muted">
        Nothing matches &ldquo;{query}&rdquo;.
      </p>
      <button
        onClick={onClear}
        className="mt-4 font-sans text-sm text-accent border-b border-accent/40 hover:border-accent transition-colors"
      >
        Clear search
      </button>
    </div>
  );
}

export function slugify(s: string): string {
  return s.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
