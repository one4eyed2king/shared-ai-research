import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { organizationGroups, organizationsUpdated } from '@/lib/data/organizations';

export const metadata: Metadata = {
  title: 'Organizations — Shared AI Research',
  description:
    'The organizations that structure the AI field: frontier labs, platforms, the semiconductor supply chain, research institutes, and governance bodies.',
};

export default function OrganizationsPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Organizations"
        title="The institutions of the AI era"
        lede="Who does what: the labs training frontier models, the platforms distributing them, the supply chain beneath them, and the institutes and agencies trying to understand and govern them. The startup tracker records funding; this page records function."
        updated={organizationsUpdated}
      />

      {organizationGroups.map((group) => (
        <section key={group.title} className="border-t border-rule py-12">
          <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted">
            {group.title}
          </h2>
          <p className="mt-2 mb-8 font-serif italic text-[0.975rem] text-muted max-w-2xl">
            {group.description}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {group.orgs.map((o) => (
              <li key={o.name} className="max-w-xl">
                <h3 className="font-serif text-xl leading-snug tracking-tight">
                  {o.name}
                </h3>
                <p className="mt-1 font-sans text-sm text-muted">
                  est. {o.founded} &middot; {o.hq}
                </p>
                <p className="mt-2 font-serif text-[0.975rem] leading-relaxed text-ink/80">
                  {o.note}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
