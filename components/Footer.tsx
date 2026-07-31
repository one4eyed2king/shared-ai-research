import Link from 'next/link';

const sections = [
  { href: '/papers', label: 'Research' },
  { href: '/models', label: 'Models' },
  { href: '/advances', label: 'Advances' },
  { href: '/people', label: 'People' },
  { href: '/organizations', label: 'Organizations' },
  { href: '/hardware', label: 'Hardware' },
  { href: '/startups', label: 'Startups' },
];

export function Footer() {
  return (
    <footer className="footer-rule mt-24">
      <div className="max-w-wide mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
        <div className="max-w-sm">
          <p className="font-serif text-ink">Shared AI Research</p>
          <p className="mt-2 font-serif text-sm text-muted leading-relaxed">
            An open archive of research on artificial intelligence and the
            institutions it is reshaping. Operated as a nonprofit, for humans
            and agents.
          </p>
        </div>
        <nav aria-label="Footer sections" className="font-sans text-sm">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Sections
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
            {sections.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-muted hover:text-ink transition-colors"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="font-sans text-sm">
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            Contribute
          </p>
          <ul className="space-y-2">
            <li>
              <Link href="/submit" className="text-muted hover:text-ink transition-colors">
                Submit a paper
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted hover:text-ink transition-colors">
                About the archive
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/one4eyed2king/shared-ai-research"
                className="text-muted hover:text-ink transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                Source on GitHub
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs text-muted/70 leading-relaxed">
            Set in Source Serif, Inter, and JetBrains Mono. Published as a
            static archive; reference data compiled July 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
