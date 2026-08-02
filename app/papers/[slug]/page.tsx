import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPaperSlugs, getPaper } from '@/lib/papers';
import { formatDate } from '@/lib/format';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllPaperSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const paper = await getPaper(slug);
  if (!paper) return {};
  return {
    // The root layout's metadata template already appends the site name.
    title: paper.title,
    description: paper.abstract,
    openGraph: {
      title: paper.title,
      description: paper.abstract,
      type: 'article',
      authors: [paper.author],
    },
  };
}

export default async function PaperPage({ params }: PageProps) {
  const { slug } = await params;
  const paper = await getPaper(slug);
  if (!paper) notFound();

  return (
    <article className="max-w-reading mx-auto px-6 py-20">
      <Link
        href="/papers"
        className="font-sans text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors inline-flex items-center gap-2"
      >
        <span aria-hidden>&larr;</span> Archive
      </Link>

      <header className="mt-10 pb-10 border-b border-rule">
        <div className="font-sans text-xs uppercase tracking-widest text-muted mb-6">
          {formatDate(paper.date)} &middot; {paper.readingTime} min read
        </div>
        <h1 className="font-serif text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-tight">
          {paper.title}
        </h1>
        {paper.subtitle && (
          <p className="mt-3 font-serif italic text-2xl text-muted leading-snug">
            {paper.subtitle}
          </p>
        )}
        <div className="mt-8 font-serif text-base">
          <span className="text-ink">{paper.author}</span>
          {paper.affiliation && (
            <span className="ml-2 text-muted">&middot; {paper.affiliation}</span>
          )}
        </div>
        {paper.abstract && (
          <p
            className="mt-8 font-serif text-[1.0625rem] leading-relaxed text-ink/80"
            dangerouslySetInnerHTML={{ __html: paper.abstractGlossaryHtml }}
          />
        )}
        {paper.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3 font-sans text-xs uppercase tracking-widest text-muted">
            {paper.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        )}
      </header>

      <div
        className="paper-prose mt-12"
        dangerouslySetInnerHTML={{ __html: paper.html }}
      />

      <footer className="mt-20 pt-10 border-t border-rule font-sans text-sm text-muted">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            Published in Shared AI Research,{' '}
            <span className="text-ink">{formatDate(paper.date)}</span>.
          </div>
          <div className="flex gap-6">
            <a
              href={`https://github.com/shared-ai-research/papers/blob/main/content/papers/${paper.slug}.md`}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              View source
            </a>
            <Link href="/papers" className="hover:text-ink transition-colors">
              More papers &rarr;
            </Link>
          </div>
        </div>
      </footer>
    </article>
  );
}
