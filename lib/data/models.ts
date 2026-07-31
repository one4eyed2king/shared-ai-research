// Frontier and notable AI model releases, newest first.
//
// Entries record what was publicly known at release. Context windows are the
// maximum generally available at launch. Data compiled as of early 2026;
// entries marked with an approximate date reflect announcements whose exact
// release date is not recorded here.

export interface ModelEntry {
  name: string;
  developer: string;
  released: string; // 'YYYY-MM', or 'YYYY' when only the year is certain
  access: 'Proprietary' | 'Open weights';
  context?: string;
  note: string;
}

export const modelsUpdated = 'January 2026';

export const models: ModelEntry[] = [
  {
    name: 'Claude 5 family (Fable, Opus, Sonnet)',
    developer: 'Anthropic',
    released: '2026',
    access: 'Proprietary',
    note: 'Anthropic’s fifth model generation, introducing the Mythos-class tier above Opus.',
  },
  {
    name: 'Claude Opus 4.5',
    developer: 'Anthropic',
    released: '2025-11',
    access: 'Proprietary',
    context: '200K',
    note: 'Flagship coding and agentic model; substantial price cut from prior Opus tiers.',
  },
  {
    name: 'Gemini 3 Pro',
    developer: 'Google DeepMind',
    released: '2025-11',
    access: 'Proprietary',
    context: '1M',
    note: 'Led most reasoning and multimodal benchmarks at launch; deep integration into Search.',
  },
  {
    name: 'GPT-5.1',
    developer: 'OpenAI',
    released: '2025-11',
    access: 'Proprietary',
    note: 'Refinement of GPT-5 with adaptive reasoning effort and improved instruction following.',
  },
  {
    name: 'Claude Sonnet 4.5',
    developer: 'Anthropic',
    released: '2025-09',
    access: 'Proprietary',
    context: '200K–1M',
    note: 'Mid-tier flagship focused on long-horizon agentic coding; 1M-token context in beta.',
  },
  {
    name: 'GPT-5',
    developer: 'OpenAI',
    released: '2025-08',
    access: 'Proprietary',
    context: '400K',
    note: 'Unified router across fast and reasoning modes; replaced the GPT-4 line in ChatGPT.',
  },
  {
    name: 'gpt-oss-120b / 20b',
    developer: 'OpenAI',
    released: '2025-08',
    access: 'Open weights',
    note: 'OpenAI’s first open-weight release since GPT-2; Apache-2.0 licensed MoE reasoning models.',
  },
  {
    name: 'Grok 4',
    developer: 'xAI',
    released: '2025-07',
    access: 'Proprietary',
    context: '256K',
    note: 'Reasoning-first flagship trained on the Colossus cluster; strong benchmark results.',
  },
  {
    name: 'Kimi K2',
    developer: 'Moonshot AI',
    released: '2025-07',
    access: 'Open weights',
    note: '1T-parameter MoE (32B active); at release the strongest open agentic/coding model.',
  },
  {
    name: 'Claude Opus 4 / Sonnet 4',
    developer: 'Anthropic',
    released: '2025-05',
    access: 'Proprietary',
    context: '200K',
    note: 'Fourth-generation flagships; extended thinking with tool use during reasoning.',
  },
  {
    name: 'Qwen 3',
    developer: 'Alibaba',
    released: '2025-04',
    access: 'Open weights',
    note: 'Dense and MoE family (0.6B–235B) with switchable thinking mode; broadly adopted base for fine-tunes.',
  },
  {
    name: 'Llama 4 (Scout, Maverick)',
    developer: 'Meta',
    released: '2025-04',
    access: 'Open weights',
    context: 'up to 10M (Scout)',
    note: 'Natively multimodal MoE family; mixed reception relative to open-weight competitors.',
  },
  {
    name: 'o3 / o4-mini',
    developer: 'OpenAI',
    released: '2025-04',
    access: 'Proprietary',
    context: '200K',
    note: 'Reasoning models with full tool use during chain of thought; o3 topped many benchmarks at launch.',
  },
  {
    name: 'Gemini 2.5 Pro',
    developer: 'Google DeepMind',
    released: '2025-03',
    access: 'Proprietary',
    context: '1M',
    note: 'Thinking-by-default flagship; long-context multimodal reasoning at competitive prices.',
  },
  {
    name: 'Claude 3.7 Sonnet',
    developer: 'Anthropic',
    released: '2025-02',
    access: 'Proprietary',
    context: '200K',
    note: 'First hybrid reasoning model: a single model with a controllable extended-thinking budget.',
  },
  {
    name: 'DeepSeek-R1',
    developer: 'DeepSeek',
    released: '2025-01',
    access: 'Open weights',
    context: '128K',
    note: 'Open reasoning model rivaling o1 at a fraction of the training cost; triggered a market-wide repricing of AI capex assumptions.',
  },
  {
    name: 'DeepSeek-V3',
    developer: 'DeepSeek',
    released: '2024-12',
    access: 'Open weights',
    context: '128K',
    note: '671B MoE (37B active) trained for roughly $5.6M in compute; basis for R1.',
  },
  {
    name: 'o1',
    developer: 'OpenAI',
    released: '2024-12',
    access: 'Proprietary',
    context: '200K',
    note: 'First production reasoning model line (previewed September 2024); established test-time compute scaling.',
  },
  {
    name: 'Gemini 2.0 Flash',
    developer: 'Google DeepMind',
    released: '2024-12',
    access: 'Proprietary',
    context: '1M',
    note: 'Fast agentic workhorse model; native tool use and multimodal output.',
  },
  {
    name: 'Claude 3.5 Sonnet',
    developer: 'Anthropic',
    released: '2024-06',
    access: 'Proprietary',
    context: '200K',
    note: 'Outperformed the larger Opus tier; the October update added computer use — the first frontier agent able to operate a GUI.',
  },
  {
    name: 'GPT-4o',
    developer: 'OpenAI',
    released: '2024-05',
    access: 'Proprietary',
    context: '128K',
    note: 'Natively multimodal (“omni”) flagship with real-time voice; free-tier default in ChatGPT.',
  },
  {
    name: 'Llama 3 / 3.1',
    developer: 'Meta',
    released: '2024-04',
    access: 'Open weights',
    context: '128K (3.1)',
    note: 'Llama 3.1 405B (July 2024) was the first open-weight model at rough parity with frontier proprietary models.',
  },
  {
    name: 'Claude 3 (Opus, Sonnet, Haiku)',
    developer: 'Anthropic',
    released: '2024-03',
    access: 'Proprietary',
    context: '200K',
    note: 'Three-tier family; Opus was the first model to clearly match GPT-4.',
  },
  {
    name: 'Gemini 1.5 Pro',
    developer: 'Google DeepMind',
    released: '2024-02',
    access: 'Proprietary',
    context: '1M–2M',
    note: 'Broke the long-context barrier with near-perfect million-token recall.',
  },
  {
    name: 'Mixtral 8x7B',
    developer: 'Mistral AI',
    released: '2023-12',
    access: 'Open weights',
    context: '32K',
    note: 'Sparse MoE that beat much larger dense models; mainstreamed MoE in open models.',
  },
  {
    name: 'GPT-4 Turbo',
    developer: 'OpenAI',
    released: '2023-11',
    access: 'Proprietary',
    context: '128K',
    note: 'Cheaper, faster GPT-4 with 128K context; launched alongside the GPT Store and Assistants API.',
  },
  {
    name: 'Llama 2',
    developer: 'Meta',
    released: '2023-07',
    access: 'Open weights',
    context: '4K',
    note: 'First openly licensed Llama for commercial use; seeded the open-model ecosystem.',
  },
  {
    name: 'GPT-4',
    developer: 'OpenAI',
    released: '2023-03',
    access: 'Proprietary',
    context: '8K–32K',
    note: 'Defined the frontier for over a year; passed professional exams that stumped GPT-3.5.',
  },
  {
    name: 'ChatGPT (GPT-3.5)',
    developer: 'OpenAI',
    released: '2022-11',
    access: 'Proprietary',
    context: '4K',
    note: 'The consumer breakout: 100M users in two months; started the current investment cycle.',
  },
];
