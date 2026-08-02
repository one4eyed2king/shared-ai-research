'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { isActive, navGroups } from '@/lib/nav';

function Wordmark() {
  return (
    <Link href="/" className="group block">
      <span className="font-serif text-lg tracking-tight group-hover:text-accent transition-colors">
        Shared AI Research
      </span>
      <span className="block mt-0.5 font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted">
        an open archive
      </span>
    </Link>
  );
}

function SearchTrigger({ onClick, className = '' }: { onClick: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 w-full px-3 py-2 border border-rule text-left font-sans text-sm text-muted hover:border-muted/50 hover:text-ink transition-colors ${className}`}
    >
      <span aria-hidden className="text-muted/70">&#8981;</span>
      <span className="flex-1">Search…</span>
      <kbd className="font-sans text-[0.65rem] tracking-widest text-muted/60">&#8984;K</kbd>
    </button>
  );
}

function GroupedNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav aria-label="Sections" className="space-y-7">
      {navGroups.map((group) => (
        <div key={group.id}>
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.18em] text-muted/70 mb-2">
            {group.label}
          </p>
          <ul className="space-y-0.5">
            {group.items.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className={`block -ml-3 pl-3 pr-2 py-1.5 border-l-2 font-sans text-sm transition-colors ${
                      active
                        ? 'border-accent text-accent'
                        : 'border-transparent text-muted hover:text-ink hover:border-rule'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export function Sidebar({ onOpenSearch }: { onOpenSearch: () => void }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* desktop: a persistent rail, so navigation never scrolls away */}
      <aside className="hidden md:flex fixed inset-y-0 left-0 w-64 flex-col gap-8 border-r border-rule bg-paper px-6 py-7 overflow-y-auto">
        <Wordmark />
        <SearchTrigger onClick={onOpenSearch} />
        <GroupedNav />
        <div className="mt-auto pt-6 font-sans text-xs text-muted/70">
          <a
            href="https://github.com/one4eyed2king/shared-ai-research"
            target="_blank"
            rel="noreferrer"
            className="hover:text-ink transition-colors"
          >
            Source on GitHub
          </a>
        </div>
      </aside>

      {/* mobile: the same tree behind a disclosure. Not sticky — the trackers
          pin their own search toolbar to the top, and it earns that space more
          on a long table than a nav bar does. */}
      <div className="md:hidden border-b border-rule">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <Wordmark />
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="px-2 py-1.5 font-sans text-sm text-muted hover:text-ink transition-colors"
            >
              &#8981;
            </button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label="Sections"
              className="px-2 py-1.5 font-sans text-sm text-muted hover:text-ink transition-colors"
            >
              {mobileOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="px-5 pb-6 pt-1 border-t border-rule">
            <GroupedNav onNavigate={() => setMobileOpen(false)} />
          </div>
        )}
      </div>
    </>
  );
}
