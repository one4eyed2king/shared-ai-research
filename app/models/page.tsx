import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { ModelsBrowser } from '@/components/tracker/ModelsBrowser';
import { models, modelsUpdated } from '@/lib/data/models';

export const metadata: Metadata = {
  title: 'Model tracking',
  description:
    'A searchable chronological record of frontier and notable AI model releases.',
};

export default function ModelsPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Model tracking"
        title="Frontier and notable model releases"
        lede="A running record of the models that defined the field: who released them, when, under what access terms, and why they mattered."
        updated={modelsUpdated}
        count={`${models.length} releases`}
      />
      <ModelsBrowser />
    </div>
  );
}
