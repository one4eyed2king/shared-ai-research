// Organizations that structure the AI field, grouped by the institutional
// role they play. The startup tracker records funding; this page records
// function. Data compiled as of early 2026.

export interface OrganizationEntry {
  name: string;
  founded: number;
  hq: string;
  note: string;
}

export interface OrganizationGroup {
  title: string;
  description: string;
  orgs: OrganizationEntry[];
}

export const organizationsUpdated = 'January 2026';

export const organizationGroups: OrganizationGroup[] = [
  {
    title: 'Frontier labs',
    description: 'The handful of organizations training models at the frontier of capability.',
    orgs: [
      {
        name: 'OpenAI',
        founded: 2015,
        hq: 'San Francisco',
        note: 'Nonprofit turned public-benefit corporation; makers of GPT, the o-series, and ChatGPT, the fastest-adopted consumer product in history.',
      },
      {
        name: 'Anthropic',
        founded: 2021,
        hq: 'San Francisco',
        note: 'Safety-focused lab behind Claude; pioneered constitutional AI, interpretability at scale, and the leading agentic coding stack.',
      },
      {
        name: 'Google DeepMind',
        founded: 2010,
        hq: 'London / Mountain View',
        note: 'Alphabet’s merged research arm (DeepMind + Google Brain, 2023); AlphaGo, AlphaFold, and the Gemini line.',
      },
      {
        name: 'Meta Superintelligence Labs',
        founded: 2025,
        hq: 'Menlo Park',
        note: 'Meta’s reorganized frontier effort after Llama 4; recruited aggressively from rivals and moved away from open-weight releases.',
      },
      {
        name: 'xAI',
        founded: 2023,
        hq: 'Palo Alto / Memphis',
        note: 'Musk’s lab, merged with X; distinguished by the speed of its Colossus datacenter buildout.',
      },
      {
        name: 'Mistral AI',
        founded: 2023,
        hq: 'Paris',
        note: 'Europe’s frontier champion; open-weight releases and a sovereignty pitch to European governments and enterprises.',
      },
      {
        name: 'DeepSeek',
        founded: 2023,
        hq: 'Hangzhou',
        note: 'Hedge-fund-funded lab whose efficient open models forced a global repricing of training-cost assumptions.',
      },
      {
        name: 'Alibaba (Qwen)',
        founded: 2023,
        hq: 'Hangzhou',
        note: 'The most downloaded open-weight model family; the default base for fine-tunes worldwide.',
      },
      {
        name: 'Moonshot AI',
        founded: 2023,
        hq: 'Beijing',
        note: 'Maker of Kimi; K2 set the open-weight agentic frontier in mid-2025.',
      },
    ],
  },
  {
    title: 'Platforms & hyperscalers',
    description: 'The companies that distribute AI to billions of users and rent the compute underneath it.',
    orgs: [
      {
        name: 'Microsoft',
        founded: 1975,
        hq: 'Redmond',
        note: 'OpenAI’s anchor investor and exclusive cloud (through 2025’s restructuring); Copilot across Windows, Office, and GitHub.',
      },
      {
        name: 'Alphabet',
        founded: 1998,
        hq: 'Mountain View',
        note: 'The only company vertically integrated from silicon (TPU) through models (Gemini) to distribution (Search, Android).',
      },
      {
        name: 'Amazon (AWS)',
        founded: 1994,
        hq: 'Seattle',
        note: 'Anthropic’s largest investor; Bedrock for model access and Trainium silicon for its own stack.',
      },
      {
        name: 'Apple',
        founded: 1976,
        hq: 'Cupertino',
        note: 'The distribution giant that stayed cautious: on-device Apple Intelligence plus partnerships for frontier capability.',
      },
      {
        name: 'Oracle',
        founded: 1977,
        hq: 'Austin',
        note: 'Reinvented as an AI landlord; hundreds of billions in contracted OpenAI capacity through the Stargate buildout.',
      },
      {
        name: 'CoreWeave',
        founded: 2017,
        hq: 'Livingston, NJ',
        note: 'The archetypal neocloud: crypto-mining castoff turned NYSE-listed GPU landlord.',
      },
    ],
  },
  {
    title: 'Semiconductors & supply chain',
    description: 'The physical chokepoints of the AI economy.',
    orgs: [
      {
        name: 'NVIDIA',
        founded: 1993,
        hq: 'Santa Clara',
        note: 'Supplies the overwhelming majority of AI training compute; CUDA remains the industry’s deepest moat.',
      },
      {
        name: 'TSMC',
        founded: 1987,
        hq: 'Hsinchu, Taiwan',
        note: 'Fabricates essentially every leading-edge AI chip; the single point of failure in the global supply chain.',
      },
      {
        name: 'AMD',
        founded: 1969,
        hq: 'Santa Clara',
        note: 'The credible second source; the 2025 OpenAI partnership made Instinct a real alternative at scale.',
      },
      {
        name: 'ASML',
        founded: 1984,
        hq: 'Veldhoven, Netherlands',
        note: 'Monopoly maker of the EUV lithography machines below every advanced node; export-control linchpin.',
      },
      {
        name: 'SK Hynix',
        founded: 1983,
        hq: 'Icheon, South Korea',
        note: 'Dominates high-bandwidth memory, the binding constraint on accelerator production since 2023.',
      },
      {
        name: 'Broadcom',
        founded: 1961,
        hq: 'Palo Alto',
        note: 'The quiet winner of custom silicon: co-designs TPUs and the emerging wave of lab-specific accelerators.',
      },
    ],
  },
  {
    title: 'Research institutes & nonprofits',
    description: 'Organizations producing public research, evaluations, and open infrastructure.',
    orgs: [
      {
        name: 'Allen Institute for AI (Ai2)',
        founded: 2014,
        hq: 'Seattle',
        note: 'Fully open models (OLMo) with released training data and code — the transparency benchmark.',
      },
      {
        name: 'EleutherAI',
        founded: 2020,
        hq: 'distributed',
        note: 'The volunteer collective that kept open-source LLMs alive pre-Llama (GPT-J, GPT-NeoX, the Pile).',
      },
      {
        name: 'Epoch AI',
        founded: 2022,
        hq: 'distributed',
        note: 'The field’s statisticians: compute trends, training-run databases, and FrontierMath.',
      },
      {
        name: 'METR',
        founded: 2022,
        hq: 'Berkeley',
        note: 'Independent evaluator of autonomous capabilities; its task-horizon measurements track agentic progress.',
      },
      {
        name: 'Stanford HAI',
        founded: 2019,
        hq: 'Stanford',
        note: 'Publisher of the annual AI Index, the standard reference for the field’s trajectory.',
      },
    ],
  },
  {
    title: 'Governance bodies',
    description: 'Public institutions attempting to measure, standardize, and regulate frontier AI.',
    orgs: [
      {
        name: 'UK AI Security Institute',
        founded: 2023,
        hq: 'London',
        note: 'The first state frontier-evaluation body; renamed from “Safety” to “Security” in 2025 as its remit narrowed.',
      },
      {
        name: 'US Center for AI Standards & Innovation',
        founded: 2023,
        hq: 'Washington, DC',
        note: 'Successor to the US AI Safety Institute (renamed 2025); pre-deployment testing agreements with the major labs.',
      },
      {
        name: 'EU AI Office',
        founded: 2024,
        hq: 'Brussels',
        note: 'Enforces the AI Act, the world’s first comprehensive AI statute; GPAI obligations began August 2025.',
      },
      {
        name: 'Frontier Model Forum',
        founded: 2023,
        hq: 'Washington, DC',
        note: 'Industry body of the frontier labs; coordinates safety frameworks and information sharing.',
      },
    ],
  },
];
