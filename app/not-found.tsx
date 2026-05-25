import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-reading mx-auto px-6 py-32 text-center">
      <div className="font-sans text-xs uppercase tracking-widest text-muted mb-6">
        404
      </div>
      <h1 className="font-serif text-4xl tracking-tight">Not in the archive</h1>
      <p className="mt-6 font-serif text-lg text-muted">
        The page you requested is not part of the archive. It may have been
        moved, or it may not yet exist.
      </p>
      <div className="mt-10 font-sans text-sm">
        <Link href="/papers" className="text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors">
          Browse the archive
        </Link>
      </div>
    </div>
  );
}
