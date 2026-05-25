import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
      <div className="max-w-wide mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-muted font-sans">
        <div>
          <span className="font-serif text-ink">Shared AI Research</span>
          <span className="ml-2">
            &mdash; an open archive operated as a nonprofit.
          </span>
        </div>
        <div className="flex gap-6">
          <Link href="/papers" className="hover:text-ink transition-colors">
            Papers
          </Link>
          <Link href="/submit" className="hover:text-ink transition-colors">
            Submit
          </Link>
          <Link href="/about" className="hover:text-ink transition-colors">
            About
          </Link>
          <a
            href="https://github.com/shared-ai-research"
            className="hover:text-ink transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
