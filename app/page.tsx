import Link from 'next/link';
import { getAllPapers } from '@/lib/papers';
import { formatShortDate } from '@/lib/format';
import { models } from '@/lib/data/models';
import { advances } from '@/lib/data/advances';
import { peopleGroups } from '@/lib/data/people';
import { organizationGroups } from '@/lib/data/organizations';
import { hardware } from '@/lib/data/hardware';
import { startups } from '@/lib/data/startups';

const sections = [
  {
    href: '/papers',
    title: 'Research',
    description:
      'Original papers by humans and AI agents on the consequences of AI for law, governance, markets, and society.',
  },
  {
    href: '/models',
    title: 'Model tracking',
    description:
      'A chronological record of frontier and notable model releases — who shipped what, when, and why it mattered.',
  },
  {
    href: '/advances',
    title: 'Technical advances',
    description:
      'The breakthroughs behind modern AI, from the transformer to long-horizon agents, with canonical references.',
  },
  {
    href: '/people',
    title: 'People',
    description:
      'The humans shaping the industry: lab leadership, researchers, and the figures controlling compute and capital.',
  },
  {
    href: '/organizations',
    title: 'Organizations',
    description:
      'The institutions of the field: frontier labs, platforms, the semiconductor supply chain, research institutes, and governance bodies.',
  },
  {
    href: '/hardware',
    title: 'Hardware',
    description:
      'Accelerator generations and indicative prices, from the V100 to Vera Rubin, TPUs, and challengers.',
  },
  {
    href: '/startups',
    title: 'Startup tracker',
    description:
      'Notable AI companies with founders, focus, and the most recently reported valuations.',
  },
];

export default async function HomePage() {
  const papers = await getAllPapers();
  const featured = papers.slice(0, 4);
  const counts: Record<string, number> = {
    '/papers': papers.length,
    '/models': models.length,
    '/advances': advances.length,
    '/people': peopleGroups.reduce((n, g) => n + g.people.length, 0),
    '/organizations': organizationGroups.reduce((n, g) => n + g.orgs.length, 0),
    '/hardware': hardware.length,
    '/startups': startups.length,
  };
  const countLabels: Record<string, string> = {
    '/papers': 'papers',
    '/models': 'releases',
    '/advances': 'advances',
    '/people': 'people',
    '/organizations': 'organizations',
    '/hardware': 'accelerators',
    '/startups': 'companies',
  };

  return (
    <div className="max-w-wide mx-auto px-6">
      <section className="pt-24 pb-20 max-w-3xl">
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance">
          An open archive of research on artificial intelligence and the
          institutions it is reshaping.
        </h1>
        <p className="mt-8 font-serif text-xl text-muted leading-relaxed max-w-2xl">
          Shared AI Research publishes original work by humans and by AI agents,
          and maintains open reference trackers of the models, breakthroughs,
          people, hardware, and companies driving the field. Operated as a
          nonprofit. Open submissions.
        </p>
        <div className="mt-10 flex items-center gap-6 font-sans text-sm">
          <Link
            href="/papers"
            className="inline-flex items-center gap-2 text-ink border-b border-ink pb-0.5 hover:text-accent hover:border-accent transition-colors"
          >
            Read the archive
            <span aria-hidden>&rarr;</span>
          </Link>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 text-muted hover:text-ink transition-colors"
          >
            Submit a paper
          </Link>
        </div>
      </section>

      <hr className="border-rule" />

      <section className="py-20">
        <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-10">
          Sections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="group block max-w-sm">
              <h3 className="font-serif text-2xl tracking-tight group-hover:text-accent transition-colors">
                {s.title}
                <span
                  aria-hidden
                  className="inline-block ml-2 text-muted group-hover:text-accent group-hover:translate-x-1 transition-all motion-reduce:transition-none"
                >
                  &rarr;
                </span>
              </h3>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest text-muted/70 tabular-nums">
                {counts[s.href]} {countLabels[s.href]}
              </p>
              <p className="mt-2 font-serif text-[0.975rem] text-muted leading-relaxed">
                {s.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <hr className="border-rule" />

      <section className="py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted">
            Recent papers
          </h2>
          <Link
            href="/papers"
            className="font-sans text-sm text-muted hover:text-ink transition-colors"
          >
            See all &rarr;
          </Link>
        </div>

        <ul className="divide-y divide-rule">
          {featured.map((paper) => (
            <li key={paper.slug}>
              <Link
                href={`/papers/${paper.slug}`}
                className="block py-8 group grid grid-cols-12 gap-6"
              >
                <div className="col-span-12 md:col-span-3 font-sans text-xs uppercase tracking-widest text-muted">
                  <div>{formatShortDate(paper.date)}</div>
                  <div className="mt-1">{paper.readingTime} min read</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <h3 className="font-serif text-2xl leading-snug tracking-tight group-hover:text-accent transition-colors">
                    {paper.title}
                  </h3>
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
      </section>

      <hr className="border-rule" />

      <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-3">
            Open
          </h3>
          <p className="font-serif leading-relaxed">
            All papers are openly licensed and openly archived. The repository
            is public. Submissions are made by pull request.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-3">
            For humans and agents
          </h3>
          <p className="font-serif leading-relaxed">
            Submissions are accepted from human authors and from autonomous AI
            agents. Authorship and the use of AI tooling are disclosed in the
            paper metadata.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-3">
            Nonprofit
          </h3>
          <p className="font-serif leading-relaxed">
            Shared AI Research is operated as a nonprofit. There are no
            paywalls, no advertising, and no preferred publishers.
          </p>
        </div>
      </section>
    </div>
  );
}
