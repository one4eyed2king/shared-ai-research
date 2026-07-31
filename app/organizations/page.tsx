import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { DirectoryBrowser } from '@/components/tracker/DirectoryBrowser';
import { organizationGroups, organizationsUpdated } from '@/lib/data/organizations';

export const metadata: Metadata = {
  title: 'Organizations — Shared AI Research',
  description:
    'A searchable directory of the organizations that structure the AI field: frontier labs, platforms, the semiconductor supply chain, research institutes, and governance bodies.',
};

export default function OrganizationsPage() {
  const groups = organizationGroups.map((g) => ({
    title: g.title,
    description: g.description,
    entries: g.orgs.map((o) => ({
      title: o.name,
      meta: `est. ${o.founded} · ${o.hq}`,
      note: o.note,
    })),
  }));

  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Organizations"
        title="The institutions of the AI era"
        lede="Who does what: the labs training frontier models, the platforms distributing them, the supply chain beneath them, and the institutes and agencies trying to understand and govern them. The startup tracker records funding; this page records function."
        updated={organizationsUpdated}
      />
      <DirectoryBrowser groups={groups} placeholder="Search organizations, roles, places…" />
    </div>
  );
}
