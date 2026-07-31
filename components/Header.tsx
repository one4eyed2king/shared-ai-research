import Link from 'next/link';
import { NavLinks } from './NavLinks';

export function Header() {
  return (
    <header className="masthead-rule">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-paper focus:px-3 focus:py-2 focus:font-sans focus:text-sm focus:border focus:border-ink"
      >
        Skip to content
      </a>
      <div className="max-w-wide mx-auto px-6 py-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <Link href="/" className="group whitespace-nowrap">
          <span className="font-serif text-lg tracking-tight group-hover:text-accent transition-colors">
            Shared AI Research
          </span>
          <span className="ml-2 text-xs text-muted font-sans uppercase tracking-widest">
            an open archive
          </span>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}
