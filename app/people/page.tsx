import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { DirectoryBrowser } from '@/components/tracker/DirectoryBrowser';
import { peopleGroups, peopleUpdated } from '@/lib/data/people';

export const metadata: Metadata = {
  title: 'People',
  description:
    'A searchable directory of the people shaping the AI industry: lab leaders, researchers, and the compute and capital behind them.',
};

export default function PeoplePage() {
  const groups = peopleGroups.map((g) => ({
    title: g.title,
    entries: g.people.map((p) => ({
      title: p.name,
      meta: `${p.role} · ${p.org}`,
      note: p.note,
    })),
  }));

  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="AI industry humans"
        title="The people shaping the field"
        lede="Lab leaders, researchers, and the figures controlling compute and capital. Roles and affiliations move quickly; this is a snapshot, not a census."
        updated={peopleUpdated}
        count={`${peopleGroups.reduce((n, g) => n + g.people.length, 0)} people`}
      />
      <DirectoryBrowser groups={groups} placeholder="Search people, roles, organizations…" />
    </div>
  );
}
