import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { AdvancesBrowser } from '@/components/tracker/AdvancesBrowser';
import { advances, advancesUpdated } from '@/lib/data/advances';

export const metadata: Metadata = {
  title: 'Technical advances',
  description:
    'A searchable chronology of the technical breakthroughs behind modern AI, from the transformer to long-horizon agents.',
};

export default function AdvancesPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Technical advances"
        title="How the field got here"
        lede="The breakthroughs that produced modern AI, in order: what each one is, and why it mattered. A reading list disguised as a timeline."
        updated={advancesUpdated}
        count={`${advances.length} advances`}
      />
      <AdvancesBrowser />
    </div>
  );
}
