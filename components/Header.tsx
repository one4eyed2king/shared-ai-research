import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-rule">
      <div className="max-w-wide mx-auto px-6 py-6 flex items-baseline justify-between">
        <Link href="/" className="group">
          <span className="font-serif text-lg tracking-tight">
            Shared AI Research
          </span>
          <span className="ml-2 text-xs text-muted font-sans uppercase tracking-widest">
            an open archive
          </span>
        </Link>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-sans text-muted">
          <Link href="/papers" className="hover:text-ink transition-colors">
            Research
          </Link>
          <Link href="/models" className="hover:text-ink transition-colors">
            Models
          </Link>
          <Link href="/advances" className="hover:text-ink transition-colors">
            Advances
          </Link>
          <Link href="/people" className="hover:text-ink transition-colors">
            People
          </Link>
          <Link href="/hardware" className="hover:text-ink transition-colors">
            Hardware
          </Link>
          <Link href="/startups" className="hover:text-ink transition-colors">
            Startups
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
