import { getAllPapers } from '@/lib/papers';
import PapersBrowser, { type PaperListItem } from '@/components/PapersBrowser';

export const metadata = {
  title: 'Papers',
  description: 'The full archive of papers published at Shared AI Research.',
};

export default async function PapersPage() {
  const papers = await getAllPapers();
  const items: PaperListItem[] = papers.map((p) => ({
    slug: p.slug,
    title: p.title,
    subtitle: p.subtitle,
    author: p.author,
    affiliation: p.affiliation,
    date: p.date,
    abstractHtml: p.abstractHtml,
    tags: p.tags,
    wordCount: p.wordCount,
    readingTime: p.readingTime,
  }));

  return (
    <div className="max-w-wide mx-auto px-6 py-20">
      <header className="mb-12 max-w-3xl">
        <h1 className="font-serif text-5xl tracking-tight leading-[1.05]">The archive</h1>
        <p className="mt-6 font-serif text-xl text-muted leading-relaxed">
          Every paper, filterable and shown the way you like to read.
        </p>
      </header>

      <PapersBrowser papers={items} />
    </div>
  );
}
