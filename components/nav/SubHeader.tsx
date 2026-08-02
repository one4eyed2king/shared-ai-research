'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { findGroup, findItem, isActive } from '@/lib/nav';

/**
 * Breadcrumbs and, where a section has siblings, a tab strip across them.
 *
 * The tabs are what make the grouping real rather than decorative: standing on
 * /models you can see that Advances and Hardware answer the same question and
 * step sideways to them, instead of returning to the nav to find out.
 *
 * Deliberately not sticky — the trackers already pin their own search toolbar
 * to the top of the viewport, and two stacked sticky bars would fight over it.
 */
export function SubHeader() {
  const pathname = usePathname();
  const group = findGroup(pathname);
  const item = findItem(pathname);
  if (!group || !item) return null;

  const siblings = group.items.length > 1 ? group.items : [];

  return (
    <div className="border-b border-rule">
      <div className="max-w-wide mx-auto px-6 pt-5 pb-0">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-sans text-xs text-muted">
            <li>
              <Link href="/" className="hover:text-ink transition-colors">
                Archive
              </Link>
            </li>
            <li aria-hidden className="text-muted/50">/</li>
            <li className="text-muted/80">{group.label}</li>
            <li aria-hidden className="text-muted/50">/</li>
            <li className="text-ink" aria-current="page">{item.label}</li>
          </ol>
        </nav>

        {siblings.length > 0 && (
          <nav aria-label={group.label} className="mt-3 -mb-px flex gap-6 overflow-x-auto">
            {siblings.map((s) => {
              const active = isActive(pathname, s.href);
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  aria-current={active ? 'page' : undefined}
                  className={`whitespace-nowrap pb-2.5 border-b-2 font-sans text-sm transition-colors ${
                    active
                      ? 'border-accent text-accent'
                      : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  {s.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </div>
  );
}

/** The slim bar a paper page gets in place of the sidebar. */
export function ReadingBar({ onOpenSearch }: { onOpenSearch: () => void }) {
  return (
    <div className="border-b border-rule">
      <div className="max-w-wide mx-auto px-6 py-3 flex items-center justify-between gap-6">
        <div className="flex items-baseline gap-3 min-w-0">
          <Link
            href="/"
            className="font-serif text-base tracking-tight hover:text-accent transition-colors whitespace-nowrap"
          >
            Shared AI Research
          </Link>
          <span aria-hidden className="text-muted/50 font-sans text-xs">/</span>
          <Link
            href="/papers"
            className="font-sans text-xs text-muted hover:text-ink transition-colors whitespace-nowrap"
          >
            Research
          </Link>
        </div>
        <button
          onClick={onOpenSearch}
          className="flex items-center gap-2 font-sans text-xs text-muted hover:text-ink transition-colors whitespace-nowrap"
        >
          <span aria-hidden>&#8981;</span>
          <span className="hidden sm:inline">Search</span>
          <kbd className="hidden sm:inline text-[0.65rem] tracking-widest text-muted/60">
            &#8984;K
          </kbd>
        </button>
      </div>
    </div>
  );
}
