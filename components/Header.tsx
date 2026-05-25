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
        <nav className="flex gap-7 text-sm font-sans text-muted">
          <Link href="/papers" className="hover:text-ink transition-colors">
            Papers
          </Link>
          <Link href="/submit" className="hover:text-ink transition-colors">
            Submit
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
