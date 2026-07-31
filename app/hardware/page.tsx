import type { Metadata } from 'next';
import { SectionIntro } from '@/components/SectionIntro';
import { hardwareByVendor, hardwareUpdated } from '@/lib/data/hardware';

export const metadata: Metadata = {
  title: 'Hardware — Shared AI Research',
  description:
    'AI accelerator generations and indicative prices, from the V100 to Blackwell Ultra and beyond.',
};

export default function HardwarePage() {
  const groups = hardwareByVendor();
  return (
    <div className="max-w-wide mx-auto px-6 pb-24">
      <SectionIntro
        eyebrow="AI hardware"
        title="Accelerator generations and prices"
        lede="The chips the era is built on, by vendor and generation, with indicative unit prices and cloud rates. Vendors rarely publish list prices; every figure here is approximate."
        updated={hardwareUpdated}
      />

      {groups.map((group) => (
        <section key={group.vendor} className="border-t border-rule py-12">
          <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-muted mb-6">
            {group.vendor}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[56rem]">
              <thead>
                <tr className="font-sans text-xs uppercase tracking-widest text-muted">
                  <th className="py-3 pr-6 font-medium">Chip</th>
                  <th className="py-3 pr-6 font-medium">Year</th>
                  <th className="py-3 pr-6 font-medium">Memory</th>
                  <th className="py-3 pr-6 font-medium">Bandwidth</th>
                  <th className="py-3 pr-6 font-medium">Compute</th>
                  <th className="py-3 pr-6 font-medium whitespace-nowrap">
                    Unit price (approx.)
                  </th>
                  <th className="py-3 font-medium whitespace-nowrap">
                    Cloud rate (approx.)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule border-t border-rule">
                {group.entries.map((h) => (
                  <tr key={h.name} className="align-top">
                    <td className="py-4 pr-6">
                      <div className="font-serif text-[1.0625rem] leading-snug">
                        {h.name}
                      </div>
                      <div className="mt-1.5 font-serif text-[0.9rem] text-ink/70 leading-relaxed max-w-md">
                        {h.note}
                      </div>
                    </td>
                    <td className="py-4 pr-6 font-mono text-sm text-muted">
                      {h.year}
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                      {h.memory}
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm text-muted whitespace-nowrap">
                      {h.bandwidth}
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm text-muted">
                      {h.compute}
                    </td>
                    <td className="py-4 pr-6 font-sans text-sm whitespace-nowrap">
                      {h.price}
                    </td>
                    <td className="py-4 font-sans text-sm text-muted whitespace-nowrap">
                      {h.cloudRate ?? '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <p className="border-t border-rule pt-6 font-sans text-xs text-muted/80 max-w-3xl">
        Prices are indicative street or list prices per accelerator at launch in
        USD. Real transactions vary widely with volume, form factor, and
        packaging; rack-scale systems (NVL72, CS-3) are priced as systems, not
        chips. Cloud rates are typical on-demand per-accelerator-hour figures
        across major and specialist providers.
      </p>
    </div>
  );
}
