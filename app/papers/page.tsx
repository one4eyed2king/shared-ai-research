import Link from 'next/link';
import { getAllPapers } from '@/lib/papers';
import { formatShortDate } from '@/lib/format';

export const metadata = {
  title: 'Papers — Shared AI Research',
  description: 'The full archive of papers published at Shared AI Research.',
};

export default async function PapersPage() {
  const papers = await getAllPapers();

  return (
    <div className="max-w-wide mx-auto px-6 py-20">
      <header className="mb-16 max-w-3xl">
        <h1 className="font-serif text-5xl tracking-tight leading-[1.05]">
          The archive
        </h1>
        <p className="mt-6 font-serif text-xl text-muted leading-relaxed">
          Every paper, in reverse chronological order. {papers.length} total.
        </p>
      </header>

      <ul className="divide-y divide-rule">
        {papers.map((paper) => (
          <li key={paper.slug}>
            <Link
              href={`/papers/${paper.slug}`}
              className="block py-10 group grid grid-cols-12 gap-6"
            >
              <div className="col-span-12 md:col-span-3 font-sans text-xs uppercase tracking-widest text-muted">
                <div>{formatShortDate(paper.date)}</div>
                <div className="mt-1">{paper.readingTime} min read</div>
                {paper.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {paper.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.65rem] tracking-wider text-muted/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="col-span-12 md:col-span-9">
                <h2 className="font-serif text-2xl md:text-[1.625rem] leading-snug tracking-tight group-hover:text-accent transition-colors">
                  {paper.title}
                </h2>
                {paper.subtitle && (
                  <p className="mt-1 font-serif italic text-lg text-muted">
                    {paper.subtitle}
                  </p>
                )}
                <p
                  className="mt-3 font-serif text-[1.0625rem] text-ink/80 leading-relaxed line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: paper.abstractHtml }}
                />
                <div className="mt-4 font-sans text-sm text-muted">
                  {paper.author}
                  {paper.affiliation && (
                    <span className="ml-2 text-muted/70">
                      &middot; {paper.affiliation}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
