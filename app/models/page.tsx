import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { models, modelsUpdated } from '@/lib/data/models';
import { formatYearMonth } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Model tracking — Shared AI Research',
  description:
    'A chronological record of frontier and notable AI model releases.',
};

export default function ModelsPage() {
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="Model tracking"
        title="Frontier and notable model releases"
        lede="A running record of the models that defined the field: who released them, when, under what access terms, and why they mattered."
        updated={modelsUpdated}
      />

      <div className="overflow-x-auto border-t border-rule">
        <table className="w-full text-left border-collapse min-w-[52rem]">
          <thead>
            <tr className="font-sans text-xs uppercase tracking-widest text-muted">
              <th className="py-3 pr-6 font-medium">Model</th>
              <th className="py-3 pr-6 font-medium">Developer</th>
              <th className="py-3 pr-6 font-medium whitespace-nowrap">Released</th>
              <th className="py-3 pr-6 font-medium">Access</th>
              <th className="py-3 pr-6 font-medium">Context</th>
              <th className="py-3 font-medium">Significance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-rule border-t border-rule">
            {models.map((m) => (
              <tr key={`${m.developer}-${m.name}`} className="align-top">
                <td className="py-4 pr-6 font-serif text-[1.0625rem] leading-snug">
                  {m.name}
                </td>
                <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                  {m.developer}
                </td>
                <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                  {formatYearMonth(m.released)}
                </td>
                <td className="py-4 pr-6 font-sans text-sm whitespace-nowrap">
                  {m.access === 'Open weights' ? (
                    <span className="text-accent">Open weights</span>
                  ) : (
                    <span className="text-muted">Proprietary</span>
                  )}
                </td>
                <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                  {m.context ?? '—'}
                </td>
                <td className="py-4 font-serif text-[0.95rem] text-ink/80 leading-relaxed">
                  {m.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
