import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { peopleGroups, peopleUpdated } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'People — Shared AI Research',
  description:
    'A directory of the people shaping the AI industry: lab leaders, researchers, and the compute and capital behind them.',
};

export default function PeoplePage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="AI industry humans"
        title="The people shaping the field"
        lede="Lab leaders, researchers, and the figures controlling compute and capital. Roles and affiliations move quickly; this is a snapshot, not a census."
        updated={peopleUpdated}
      />

      {peopleGroups.map((group) => (
        <section key={group.title} className="border-t border-rule py-12">
          <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-8">
            {group.title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {group.people.map((p) => (
              <li key={p.name} className="max-w-xl">
                <h3 className="font-serif text-xl leading-snug tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-muted">
                  {p.role} &middot; {p.org}
                </p>
                <p className="mt-2 font-serif text-[0.975rem] leading-relaxed text-ink/80">
                  {p.note}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
