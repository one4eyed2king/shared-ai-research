import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { startups, startupsUpdated } from '@/lib/data/startups';

export const metadata: Metadata = {
  title: 'Startup tracker — Shared AI Research',
  description:
    'A tracker of notable AI startups: founders, focus, and most recently reported valuations.',
};

export default function StartupsPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Startup tracker"
        title="The companies of the AI era"
        lede="Notable AI startups with their founders, focus, and most recently reported valuations. Private-market figures are soft, fast-moving, and reported rather than audited."
        updated={startupsUpdated}
      />

      <ul className="border-t border-rule divide-y divide-rule">
        {startups.map((s) => (
          <li key={s.name} className="py-8 grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-3">
              <h2 className="font-serif text-xl leading-snug tracking-tight">
                {s.name}
              </h2>
              <p className="mt-1 font-sans text-xs uppercase tracking-widest text-muted">
                est. {s.founded}
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 max-w-xl">
              <p className="font-sans text-sm text-muted">{s.focus}</p>
              <p className="mt-2 font-serif text-[0.975rem] leading-relaxed text-ink/80">
                {s.note}
              </p>
              <p className="mt-2 font-sans text-xs text-muted/80">
                Founders: {s.founders}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 md:text-right">
              <p className="font-mono text-sm">{s.valuation}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
