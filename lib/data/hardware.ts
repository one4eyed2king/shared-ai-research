// AI accelerator generations with indicative prices.
//
// Prices are approximate street or list prices per accelerator at launch, in
// USD; vendors rarely publish official numbers and real transactions vary
// widely with volume and packaging (SXM vs. PCIe, single card vs. rack).
// Cloud rates are typical on-demand per-GPU-hour figures observed across
// major and specialist clouds. Compute figures are dense (non-sparse) unless
// noted. Data compiled as of July 2026.

export interface HardwareEntry {
  vendor: string;
  name: string;
  year: number;
  memory: string;
  bandwidth: string;
  compute: string;
  price: string; // approximate unit price at launch
  cloudRate?: string; // approximate on-demand $/hr
  note: string;
}

export interface HardwareGroup {
  vendor: string;
  entries: HardwareEntry[];
}

export const hardwareUpdated = 'July 2026';

export const hardware: HardwareEntry[] = [
  {
    vendor: 'NVIDIA',
    name: 'V100 (Volta)',
    year: 2017,
    memory: '16–32 GB HBM2',
    bandwidth: '900 GB/s',
    compute: '125 TFLOPS FP16',
    price: '~$10,000',
    cloudRate: '~$0.30–2/hr',
    note: 'Introduced tensor cores; trained the GPT-2/GPT-3-era models.',
  },
  {
    vendor: 'NVIDIA',
    name: 'A100 (Ampere)',
    year: 2020,
    memory: '40–80 GB HBM2e',
    bandwidth: '2.0 TB/s',
    compute: '312 TFLOPS BF16',
    price: '~$10,000–15,000',
    cloudRate: '~$0.75–3/hr',
    note: 'The workhorse of the ChatGPT moment; GPT-4 reportedly trained on ~25k A100s.',
  },
  {
    vendor: 'NVIDIA',
    name: 'H100 (Hopper)',
    year: 2022,
    memory: '80 GB HBM3',
    bandwidth: '3.35 TB/s',
    compute: '~1.0 PFLOPS FP8',
    price: '~$25,000–40,000 new; used units now ~$10,000–20,000',
    cloudRate: '~$2–8/hr',
    note: 'The scarcest commodity of 2023–24; secondary-market prices have since fallen sharply as Blackwell ramped.',
  },
  {
    vendor: 'NVIDIA',
    name: 'H200',
    year: 2024,
    memory: '141 GB HBM3e',
    bandwidth: '4.8 TB/s',
    compute: '~1.0 PFLOPS FP8',
    price: '~$30,000–40,000',
    cloudRate: '~$3.50–9/hr',
    note: 'Memory-expanded Hopper; nearly doubled inference throughput on large models.',
  },
  {
    vendor: 'NVIDIA',
    name: 'B200 (Blackwell)',
    year: 2024,
    memory: '180–192 GB HBM3e',
    bandwidth: '8 TB/s',
    compute: '~4.5 PFLOPS FP8 / 9 PFLOPS FP4',
    price: '~$30,000–40,000',
    cloudRate: '~$4–12/hr',
    note: 'Dual-die design with FP4 inference; sold primarily as GB200 NVL72 racks (~$3–3.4M each).',
  },
  {
    vendor: 'NVIDIA',
    name: 'GB300 / B300 (Blackwell Ultra)',
    year: 2025,
    memory: '288 GB HBM3e',
    bandwidth: '8 TB/s',
    compute: '~1.5× B200 (FP4)',
    price: 'rack-scale (~$3.7–4M per NVL72; ~$40–55k per GPU)',
    cloudRate: '~$5–18/hr',
    note: 'Mid-cycle refresh for reasoning-model inference; now the volume Blackwell part as Rubin ramps.',
  },
  {
    vendor: 'NVIDIA',
    name: 'VR200 (Vera Rubin)',
    year: 2026,
    memory: '288 GB HBM4',
    bandwidth: '~13 TB/s',
    compute: '~50 PFLOPS FP4 (per dual-die package)',
    price: 'rack-scale (~$7.8–8.8M per NVL72; ~$55k per GPU est.)',
    note: 'Sampling now, volume H2 2026; HBM4 costs (~$500+ per stack) pushed rack prices to roughly double GB300.',
  },
  {
    vendor: 'NVIDIA',
    name: 'Groq 3 LPX (LPU)',
    year: 2026,
    memory: '500 MB SRAM per LPU',
    bandwidth: '150 TB/s (on-chip SRAM)',
    compute: '~315 PFLOPS per 256-LPU rack',
    price: 'rack-scale; pricing not yet public',
    note: 'Product of NVIDIA’s ~$20B Groq licensing acquihire (Dec 2025); deterministic low-latency decode engine paired with Rubin racks.',
  },
  {
    vendor: 'Google',
    name: 'TPU v4',
    year: 2021,
    memory: '32 GB HBM2',
    bandwidth: '1.2 TB/s',
    compute: '275 TFLOPS BF16',
    price: 'not sold; cloud only',
    cloudRate: '~$2–3/hr',
    note: 'Optical circuit switching across 4,096-chip pods; trained PaLM.',
  },
  {
    vendor: 'Google',
    name: 'TPU v5e / v5p',
    year: 2023,
    memory: '16 / 95 GB HBM',
    bandwidth: '0.8 / 2.8 TB/s',
    compute: '197 / 459 TFLOPS BF16',
    price: 'not sold; cloud only',
    cloudRate: '~$1.20 / $4.20/hr',
    note: 'Split the line into efficiency (v5e) and performance (v5p) tiers; trained Gemini 1.0.',
  },
  {
    vendor: 'Google',
    name: 'TPU v6 (Trillium)',
    year: 2024,
    memory: '32 GB HBM',
    bandwidth: '1.6 TB/s',
    compute: '~926 TFLOPS BF16',
    price: 'not sold; cloud only',
    cloudRate: '~$2.70/hr',
    note: '4.7× v5e per-chip performance; trained Gemini 2.x.',
  },
  {
    vendor: 'Google',
    name: 'TPU v7 (Ironwood)',
    year: 2025,
    memory: '192 GB HBM3e',
    bandwidth: '7.4 TB/s',
    compute: '~4.6 PFLOPS FP8',
    price: 'not sold; cloud only',
    cloudRate: '~$5.40–12/hr (commit vs. on-demand; large contracts far lower)',
    note: 'GA on Google Cloud April 2026; Anthropic contracted for up to ~1M chips. TPU v8 splits into Sunfish (training) and Zebrafish (inference) for ~2027.',
  },
  {
    vendor: 'AMD',
    name: 'MI250X (CDNA 2)',
    year: 2021,
    memory: '128 GB HBM2e',
    bandwidth: '3.2 TB/s',
    compute: '383 TFLOPS FP16',
    price: '~$12,000–15,000',
    note: 'Powered Frontier, the first exascale supercomputer; little LLM traction.',
  },
  {
    vendor: 'AMD',
    name: 'MI300X (CDNA 3)',
    year: 2023,
    memory: '192 GB HBM3',
    bandwidth: '5.3 TB/s',
    compute: '~1.3 PFLOPS FP8',
    price: '~$15,000–20,000',
    cloudRate: '~$2–4/hr',
    note: 'AMD’s first credible H100 rival; adopted by Microsoft, Meta, and OpenAI for inference.',
  },
  {
    vendor: 'AMD',
    name: 'MI355X (CDNA 4)',
    year: 2025,
    memory: '288 GB HBM3e',
    bandwidth: '8 TB/s',
    compute: '~5 PFLOPS FP8 / 10 PFLOPS FP4',
    price: '~$25,000–30,000',
    cloudRate: '~$2.60–8.60/hr',
    note: 'Anchor of OpenAI’s 6-gigawatt AMD partnership announced October 2025.',
  },
  {
    vendor: 'AMD',
    name: 'MI455X (CDNA 5) / Helios',
    year: 2026,
    memory: '432 GB HBM4',
    bandwidth: '~19.6 TB/s',
    compute: '~40 PFLOPS FP4 / 20 PFLOPS FP8',
    price: 'rack-scale (~$5–5.5M per 72-GPU Helios rack)',
    note: 'AMD’s NVL72 answer: 72 GPUs, 31 TB HBM4, open Ethernet fabric; claims ~30% more tokens per dollar than Rubin. Ships late 2026.',
  },
  {
    vendor: 'Amazon',
    name: 'Trainium 2',
    year: 2024,
    memory: '96 GB HBM3',
    bandwidth: '2.9 TB/s',
    compute: '~650 TFLOPS FP8',
    price: 'not sold; cloud only',
    cloudRate: '~$1–2/hr (per chip, Trn2 instances)',
    note: 'Anthropic’s Project Rainier cluster runs on hundreds of thousands of these chips.',
  },
  {
    vendor: 'Amazon',
    name: 'Trainium 3',
    year: 2025,
    memory: '144 GB HBM3e',
    bandwidth: '4.9 TB/s',
    compute: '~2.5 PFLOPS FP8',
    price: 'not sold; cloud only',
    cloudRate: '~$1.80/hr (per chip, est.)',
    note: 'AWS’s first 3nm chip, GA December 2025; UltraServers scale to 144 chips, with Anthropic and Bedrock running production workloads.',
  },
  {
    vendor: 'Microsoft',
    name: 'Maia 200',
    year: 2026,
    memory: '216 GB HBM3e',
    bandwidth: '7 TB/s',
    compute: '~5 PFLOPS FP8 / 10 PFLOPS FP4',
    price: 'not sold; internal Azure only',
    note: 'Microsoft’s first competitive inference silicon (Jan 2026); claims ~3× the FP4 of Trainium 3 or Ironwood per chip.',
  },
  {
    vendor: 'Meta',
    name: 'MTIA v2 / "Iris"',
    year: 2026,
    memory: '128 GB LPDDR5 (v2)',
    bandwidth: '~0.2 TB/s (off-chip, v2)',
    compute: '~354 TOPS INT8 (v2)',
    price: 'not sold; internal only',
    note: 'Runs Meta’s ads and recommendation inference; the GenAI-focused "Iris" chip ramps late 2026 on a roughly six-month silicon cadence.',
  },
  {
    vendor: 'Intel',
    name: 'Gaudi 3',
    year: 2024,
    memory: '128 GB HBM2e',
    bandwidth: '3.7 TB/s',
    compute: '~1.8 PFLOPS FP8',
    price: '~$16,000 (8-chip board ~$125k)',
    note: 'Priced aggressively but found little adoption; Intel shelved Falcon Shores and pivoted to the Crescent Island inference GPU, sampling H2 2026.',
  },
  {
    vendor: 'Cerebras',
    name: 'WSE-3',
    year: 2024,
    memory: '44 GB on-wafer SRAM',
    bandwidth: '21 PB/s (on-chip)',
    compute: '~125 PFLOPS FP16 (sparse)',
    price: '~$2–3M per CS-3 system',
    note: 'A single wafer-scale chip; IPO’d May 2026 (~$23B target) on the back of a ~$20B, 750 MW OpenAI inference agreement.',
  },
  {
    vendor: 'SambaNova',
    name: 'SN40L (RDU)',
    year: 2023,
    memory: '64 GB HBM + 1.5 TB DDR (three-tier)',
    bandwidth: '~1.6 TB/s (HBM)',
    compute: '688 TFLOPS BF16',
    price: 'sold as full systems/cloud; pricing not public',
    note: 'Dataflow architecture for trillion-parameter inference; JPMorgan deployment and a $350M Series E (Feb 2026) after Intel acquisition talks collapsed.',
  },
];

export function hardwareByVendor(): HardwareGroup[] {
  const order = [
    'NVIDIA',
    'Google',
    'AMD',
    'Amazon',
    'Microsoft',
    'Meta',
    'Intel',
    'Cerebras',
    'SambaNova',
  ];
  return order.map((vendor) => ({
    vendor,
    entries: hardware.filter((h) => h.vendor === vendor),
  }));
}
