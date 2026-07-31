import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { HardwareBrowser } from '@/components/tracker/HardwareBrowser';
import { hardware, hardwareUpdated } from '@/lib/data/hardware';

export const metadata: Metadata = {
  title: 'Hardware',
  description:
    'A searchable record of AI accelerator generations and indicative prices, from the V100 to the current generation.',
};

export default function HardwarePage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="AI hardware"
        title="Accelerator generations and prices"
        lede="The chips the era is built on, by vendor and generation, with indicative unit prices and cloud rates. Vendors rarely publish list prices; every figure here is approximate."
        updated={hardwareUpdated}
        count={`${hardware.length} accelerators`}
      />
      <HardwareBrowser />
    </div>
  );
}
