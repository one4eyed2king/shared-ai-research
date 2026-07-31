import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { StartupsBrowser } from '@/components/tracker/StartupsBrowser';
import { startups, startupsUpdated } from '@/lib/data/startups';

export const metadata: Metadata = {
  title: 'Startup tracker',
  description:
    'A searchable tracker of notable AI startups: founders, focus, and most recently reported valuations.',
};

export default function StartupsPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Startup tracker"
        title="The companies of the AI era"
        lede="Notable AI startups with their founders, focus, and most recently reported valuations. Private-market figures are soft, fast-moving, and reported rather than audited."
        updated={startupsUpdated}
        count={`${startups.length} companies`}
      />
      <StartupsBrowser />
    </div>
  );
}
