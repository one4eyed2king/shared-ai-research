import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { advances, advancesUpdated } from '@/lib/data/advances';

export const metadata: Metadata = {
  title: 'Technical advances — Shared AI Research',
  description:
    'A chronology of the technical breakthroughs behind modern AI, from the transformer to long-horizon agents.',
};

export default function AdvancesPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Technical advances"
        title="How the field got here"
        lede="The breakthroughs that produced modern AI, in order: what each one is, and why it mattered. A reading list disguised as a timeline."
        updated={advancesUpdated}
      />

      <ol className="border-t border-rule divide-y divide-rule">
        {advances.map((a) => (
          <li key={a.name} className="py-10 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-2 font-sans text-sm text-muted">
              <span className="font-mono text-base text-ink">{a.year}</span>
            </div>
            <div className="col-span-12 md:col-span-10 max-w-3xl">
              <h2 className="font-serif text-2xl leading-snug tracking-tight">
                {a.name}
              </h2>
              <p className="mt-3 font-serif text-[1.0625rem] leading-relaxed text-ink/90">
                {a.what}
              </p>
              <p className="mt-3 font-serif text-[1.0625rem] leading-relaxed text-ink/80">
                <span className="italic">Why it mattered.</span> {a.why}
              </p>
              {a.reference && (
                <p className="mt-4 font-sans text-sm text-muted">{a.reference}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
