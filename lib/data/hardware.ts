// AI accelerator generations with indicative prices.
//
// Prices are approximate street or list prices per accelerator at launch, in
// USD; vendors rarely publish official numbers and real transactions vary
// widely with volume and packaging (SXM vs. PCIe, single card vs. rack).
// Cloud rates are typical on-demand per-GPU-hour figures observed across
// major and specialist clouds. Compute figures are dense (non-sparse) unless
// noted. Data compiled as of early 2026.

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

export const hardwareUpdated = 'January 2026';

export const hardware: HardwareEntry[] = [
  {
    vendor: 'NVIDIA',
    name: 'V100 (Volta)',
    year: 2017,
    memory: '16–32 GB HBM2',
    bandwidth: '900 GB/s',
    compute: '125 TFLOPS FP16',
    price: '~$10,000',
    cloudRate: '~$0.5–2.50/hr',
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
    cloudRate: '~$1–4/hr',
    note: 'The workhorse of the ChatGPT moment; GPT-4 reportedly trained on ~25k A100s.',
  },
  {
    vendor: 'NVIDIA',
    name: 'H100 (Hopper)',
    year: 2022,
    memory: '80 GB HBM3',
    bandwidth: '3.35 TB/s',
    compute: '~1.0 PFLOPS FP8',
    price: '~$25,000–40,000',
    cloudRate: '~$2–10/hr',
    note: 'The scarcest commodity of 2023–24; allocation of H100s briefly functioned as industry currency.',
  },
  {
    vendor: 'NVIDIA',
    name: 'H200',
    year: 2024,
    memory: '141 GB HBM3e',
    bandwidth: '4.8 TB/s',
    compute: '~1.0 PFLOPS FP8',
    price: '~$30,000–40,000',
    cloudRate: '~$3–10/hr',
    note: 'Memory-expanded Hopper; nearly doubled inference throughput on large models.',
  },
  {
    vendor: 'NVIDIA',
    name: 'B200 (Blackwell)',
    year: 2024,
    memory: '180–192 GB HBM3e',
    bandwidth: '8 TB/s',
    compute: '~4.5 PFLOPS FP8 / 9 PFLOPS FP4',
    price: '~$30,000–50,000',
    cloudRate: '~$5–15/hr',
    note: 'Dual-die design with FP4 inference; sold primarily as GB200 NVL72 racks (~$3M each).',
  },
  {
    vendor: 'NVIDIA',
    name: 'GB300 / B300 (Blackwell Ultra)',
    year: 2025,
    memory: '288 GB HBM3e',
    bandwidth: '8 TB/s',
    compute: '~1.5× B200 (FP4)',
    price: 'rack-scale (~$3–4M per NVL72)',
    note: 'Mid-cycle refresh targeting reasoning-model inference; Rubin generation announced for 2026.',
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
    note: 'Scales to 9,216-chip pods; Anthropic contracted for up to ~1M TPUs in a 2025 expansion.',
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
    cloudRate: '~$2–6/hr',
    note: 'AMD’s first credible H100 rival; adopted by Microsoft, Meta, and OpenAI for inference.',
  },
  {
    vendor: 'AMD',
    name: 'MI355X (CDNA 4)',
    year: 2025,
    memory: '288 GB HBM3e',
    bandwidth: '8 TB/s',
    compute: '~5 PFLOPS FP8 / 10 PFLOPS FP4',
    price: '~$25,000+',
    note: 'Anchor of OpenAI’s 6-gigawatt AMD partnership announced October 2025.',
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
    vendor: 'Intel',
    name: 'Gaudi 3',
    year: 2024,
    memory: '128 GB HBM2e',
    bandwidth: '3.7 TB/s',
    compute: '~1.8 PFLOPS FP8',
    price: '~$16,000 (8-chip board ~$125k)',
    note: 'Priced aggressively against H100 but found limited adoption; Intel folded Gaudi into its Falcon Shores roadmap.',
  },
  {
    vendor: 'Cerebras',
    name: 'WSE-3',
    year: 2024,
    memory: '44 GB on-wafer SRAM',
    bandwidth: '21 PB/s (on-chip)',
    compute: '~125 PFLOPS FP16 (sparse)',
    price: '~$2–3M per CS-3 system',
    note: 'A single wafer-scale chip; sells record-setting inference speed as a service.',
  },
];

export function hardwareByVendor(): HardwareGroup[] {
  const order = ['NVIDIA', 'Google', 'AMD', 'Amazon', 'Intel', 'Cerebras'];
  return order.map((vendor) => ({
    vendor,
    entries: hardware.filter((h) => h.vendor === vendor),
  }));
}
