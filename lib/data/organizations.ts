// Organizations that structure the AI field, grouped by the institutional
// role they play. The startup tracker records funding; this page records
// function. Data compiled as of July 2026.

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

export const organizationsUpdated = 'July 2026';

export const organizationGroups: OrganizationGroup[] = [
  {
    title: 'Frontier labs',
    description: 'The handful of organizations training models at the frontier of capability.',
    orgs: [
      {
        name: 'OpenAI',
        founded: 2015,
        hq: 'San Francisco',
        note: 'Restructured in late 2025 as OpenAI Group PBC under the nonprofit OpenAI Foundation; makers of GPT, the o-series, and ChatGPT, the fastest-adopted consumer product in history.',
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
        note: 'Meta’s frontier effort under chief AI officer Alexandr Wang; repeated reorganizations and a retreat from open-weight releases after Llama 4.',
      },
      {
        name: 'xAI',
        founded: 2023,
        hq: 'Palo Alto / Memphis',
        note: 'Acquired by SpaceX in February 2026 and folded into a unified AI unit; its Memphis Colossus buildout now rents training capacity to rival labs.',
      },
      {
        name: 'Mistral AI',
        founded: 2023,
        hq: 'Paris',
        note: 'Europe’s frontier champion; open-weight releases, a sovereignty pitch to European governments, and ASML as its anchor shareholder.',
      },
      {
        name: 'DeepSeek',
        founded: 2023,
        hq: 'Hangzhou',
        note: 'Hedge-fund-funded lab whose efficient open models forced a global repricing of training-cost assumptions; V4 (2026) extended the run.',
      },
      {
        name: 'Alibaba (Qwen)',
        founded: 2023,
        hq: 'Hangzhou',
        note: 'The most downloaded open-weight model family and the default base for fine-tunes worldwide, now split between Apache-licensed workhorses and a closed frontier flagship.',
      },
      {
        name: 'Moonshot AI',
        founded: 2023,
        hq: 'Beijing',
        note: 'Maker of Kimi; K3 (July 2026), the largest open-weight model released to date, claims parity with the closed frontier.',
      },
      {
        name: 'ByteDance Seed',
        founded: 2023,
        hq: 'Beijing',
        note: 'ByteDance’s frontier model group; its Seed models power Doubao, China’s most-used AI chatbot.',
      },
      {
        name: 'Z.ai (Zhipu AI)',
        founded: 2019,
        hq: 'Beijing',
        note: 'Tsinghua spinoff behind the GLM open-weight line; became the first pure-play foundation-model lab to go public (Hong Kong, January 2026).',
      },
      {
        name: 'Safe Superintelligence',
        founded: 2024,
        hq: 'Palo Alto / Tel Aviv',
        note: 'Sutskever’s deliberately productless lab pursuing aligned superintelligence directly; a July 2026 NVIDIA partnership scaled its compute an order of magnitude.',
      },
      {
        name: 'Thinking Machines Lab',
        founded: 2025,
        hq: 'San Francisco',
        note: 'Murati’s lab betting on customizable, human-collaborative AI; shipped the Tinker fine-tuning API and its first open-weight model, Inkling, in July 2026.',
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
        note: 'OpenAI’s anchor partner, holding 27% of the restructured PBC with model IP rights through 2032; Copilot across Windows, Office, and GitHub.',
      },
      {
        name: 'Alphabet',
        founded: 1998,
        hq: 'Mountain View',
        note: 'The only company vertically integrated from silicon (TPU) through models (Gemini) to distribution; Gemini now also powers Apple’s rebuilt Siri.',
      },
      {
        name: 'Amazon (AWS)',
        founded: 1994,
        hq: 'Seattle',
        note: 'Anthropic’s largest investor; Bedrock for model access and the Trainium-powered Project Rainier cluster for Claude training.',
      },
      {
        name: 'Apple',
        founded: 1976,
        hq: 'Cupertino',
        note: 'The distribution giant that stayed cautious: on-device Apple Intelligence plus a 2026 deal putting Google’s Gemini behind the rebuilt Siri.',
      },
      {
        name: 'Oracle',
        founded: 1977,
        hq: 'Austin',
        note: 'Reinvented as an AI landlord; hundreds of billions in contracted OpenAI capacity, though the Stargate buildout slowed and narrowed through 2026.',
      },
      {
        name: 'CoreWeave',
        founded: 2017,
        hq: 'Livingston, NJ',
        note: 'The archetypal neocloud: crypto-mining castoff turned NYSE-listed GPU landlord; its bid for Core Scientific was voted down by shareholders in late 2025.',
      },
      {
        name: 'Nebius',
        founded: 2024,
        hq: 'Amsterdam',
        note: 'Neocloud carved out of Yandex’s international assets; builds AI capacity for Microsoft and pitches sovereign infrastructure to European customers.',
      },
      {
        name: 'Lambda',
        founded: 2012,
        hq: 'San Francisco',
        note: 'Developer-focused GPU cloud for training and inference; a multibillion-dollar Microsoft supply deal moved it into hyperscale territory.',
      },
      {
        name: 'Crusoe',
        founded: 2018,
        hq: 'Denver',
        note: 'Energy-first datacenter developer that builds power alongside compute; anchor builder of the Abilene, Texas Stargate campus.',
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
        note: 'The credible second source; OpenAI’s six-gigawatt Instinct commitment begins deploying MI450 at scale in late 2026.',
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
        note: 'Dominates high-bandwidth memory, the binding constraint on accelerator production since 2023; holds roughly 60% of the market into the HBM4 era.',
      },
      {
        name: 'Samsung',
        founded: 1969,
        hq: 'Suwon, South Korea',
        note: 'Memory giant and the only leading-edge foundry alternative to TSMC; racing to regain HBM ground with HBM4 and HBM4E.',
      },
      {
        name: 'Micron',
        founded: 1978,
        hq: 'Boise, ID',
        note: 'The third high-bandwidth memory supplier; overtook Samsung in HBM share during the HBM4 transition, easing the memory bottleneck.',
      },
      {
        name: 'Intel',
        founded: 1968,
        hq: 'Santa Clara',
        note: 'The US national-champion foundry bet: roughly 10% government-owned since 2025, with the 18A node reaching volume production in early 2026.',
      },
      {
        name: 'Broadcom',
        founded: 1961,
        hq: 'Palo Alto',
        note: 'The quiet winner of custom silicon: co-designs TPUs, OpenAI’s in-house accelerators, and the wider wave of lab-specific chips.',
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
        name: 'Redwood Research',
        founded: 2021,
        hq: 'Berkeley',
        note: 'Originator of the AI control agenda: techniques for deploying capable models safely even if they turn out to be misaligned.',
      },
      {
        name: 'Apollo Research',
        founded: 2023,
        hq: 'London / San Francisco',
        note: 'Evaluates frontier models for scheming and deception; a fixture of pre-deployment safety testing at the major labs.',
      },
      {
        name: 'MATS',
        founded: 2021,
        hq: 'Berkeley',
        note: 'The field’s main safety-talent pipeline; its research fellows and alumni staff much of the alignment and evaluations ecosystem.',
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
        note: 'Successor to the US AI Safety Institute (renamed 2025); voluntary security testing of frontier models and a 2026 AI-agent standards initiative.',
      },
      {
        name: 'EU AI Office',
        founded: 2024,
        hq: 'Brussels',
        note: 'Enforces the AI Act; GPAI obligations began August 2025, while the 2026 Digital Omnibus deferred high-risk deadlines to 2027–28.',
      },
      {
        name: 'Cyberspace Administration of China',
        founded: 2014,
        hq: 'Beijing',
        note: 'China’s internet regulator; administers the layered AI rulebook of generative-AI measures, model filings, and AI-content labeling mandates.',
      },
      {
        name: 'UN Global Dialogue on AI Governance',
        founded: 2025,
        hq: 'Geneva / New York',
        note: 'The first universal-membership AI forum, paired with an independent scientific panel; held its inaugural session in Geneva in July 2026.',
      },
      {
        name: 'Frontier Model Forum',
        founded: 2023,
        hq: 'Washington, DC',
        note: 'Industry body of the frontier labs; coordinates safety frameworks, threat information sharing, and anti-distillation intelligence.',
      },
    ],
  },
];
