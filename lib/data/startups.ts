// AI startup tracker. Valuations are the most recent widely reported
// figures with their approximate dates; private-market numbers are inherently
// soft and move quickly. Data compiled as of early 2026.

export interface StartupEntry {
  name: string;
  founded: number;
  founders: string;
  focus: string;
  valuation: string; // '~$Xb (date)' or a status note
  note: string;
}

export const startupsUpdated = 'January 2026';

export const startups: StartupEntry[] = [
  {
    name: 'OpenAI',
    founded: 2015,
    founders: 'Sam Altman, Greg Brockman, Ilya Sutskever, Elon Musk, et al.',
    focus: 'Frontier models (GPT, o-series), ChatGPT',
    valuation: '~$500B (Oct 2025)',
    note: 'The most valuable private company in history; restructured to a PBC in 2025 with Microsoft holding ~27%.',
  },
  {
    name: 'Anthropic',
    founded: 2021,
    founders: 'Dario Amodei, Daniela Amodei, et al.',
    focus: 'Frontier models (Claude), AI safety',
    valuation: '~$183B (Sep 2025)',
    note: 'Fastest-growing enterprise AI business; revenue led by API and coding (Claude Code).',
  },
  {
    name: 'xAI',
    founded: 2023,
    founders: 'Elon Musk',
    focus: 'Frontier models (Grok)',
    valuation: '~$80B (2025, merged with X)',
    note: 'Built the 200k+ GPU Colossus cluster in months; merged with X Corp in March 2025.',
  },
  {
    name: 'Safe Superintelligence',
    founded: 2024,
    founders: 'Ilya Sutskever, Daniel Gross, Daniel Levy',
    focus: 'Superintelligence research, no interim products',
    valuation: '~$32B (Apr 2025)',
    note: 'Raised billions with no product, no customers, and near-total secrecy.',
  },
  {
    name: 'Thinking Machines Lab',
    founded: 2025,
    founders: 'Mira Murati, John Schulman, Barret Zoph, et al.',
    focus: 'Multimodal models, RL fine-tuning (Tinker)',
    valuation: '~$12B (Jul 2025)',
    note: 'Record ~$2B seed round; staffed heavily from OpenAI’s senior ranks.',
  },
  {
    name: 'Mistral AI',
    founded: 2023,
    founders: 'Arthur Mensch, Guillaume Lample, Timothée Lacroix',
    focus: 'Open-weight and frontier models (Mistral, Mixtral)',
    valuation: '~€11.7B (Sep 2025)',
    note: 'Europe’s flagship lab; ASML led its 2025 round in a sovereignty-flavored deal.',
  },
  {
    name: 'DeepSeek',
    founded: 2023,
    founders: 'Liang Wenfeng',
    focus: 'Open-weight frontier models (V3, R1)',
    valuation: 'unraised; funded by High-Flyer',
    note: 'R1’s January 2025 release erased ~$600B of NVIDIA market cap in a day.',
  },
  {
    name: 'Anysphere (Cursor)',
    founded: 2022,
    founders: 'Michael Truell, Sualeh Asif, Arvid Lunnemark, Aman Sanger',
    focus: 'AI code editor',
    valuation: '~$29B (Nov 2025)',
    note: 'Fastest company ever to $500M ARR; the emblem of the AI coding boom.',
  },
  {
    name: 'Perplexity',
    founded: 2022,
    founders: 'Aravind Srinivas, et al.',
    focus: 'AI-native search and browser (Comet)',
    valuation: '~$20B (Sep 2025)',
    note: 'Made headlines with audacious bids for Chrome and TikTok.',
  },
  {
    name: 'Scale AI',
    founded: 2016,
    founders: 'Alexandr Wang, Lucy Guo',
    focus: 'Training data and evaluation',
    valuation: '~$29B (Jun 2025, Meta deal)',
    note: 'Meta bought 49% and hired Wang, prompting frontier labs to drop Scale as a vendor.',
  },
  {
    name: 'Figure AI',
    founded: 2022,
    founders: 'Brett Adcock',
    focus: 'Humanoid robots',
    valuation: '~$39B (Sep 2025)',
    note: 'A 15× valuation jump in 18 months on the humanoid-robotics thesis.',
  },
  {
    name: 'Physical Intelligence',
    founded: 2024,
    founders: 'Karol Hausman, Sergey Levine, Chelsea Finn, et al.',
    focus: 'Foundation models for robotics',
    valuation: '~$5.6B (Nov 2024)',
    note: 'Building a single generalist policy (π series) across robot embodiments.',
  },
  {
    name: 'Cognition',
    founded: 2023,
    founders: 'Scott Wu, et al.',
    focus: 'Autonomous coding agents (Devin)',
    valuation: '~$10B (2025)',
    note: 'Acquired Windsurf in 2025 after Google poached its founders in a $2.4B licensing deal.',
  },
  {
    name: 'Harvey',
    founded: 2022,
    founders: 'Winston Weinberg, Gabe Pereyra',
    focus: 'Legal AI',
    valuation: '~$5B (mid-2025)',
    note: 'The category leader in professional-services AI; deployed across elite law firms.',
  },
  {
    name: 'ElevenLabs',
    founded: 2022,
    founders: 'Mati Staniszewski, Piotr Dąbkowski',
    focus: 'Voice synthesis and audio AI',
    valuation: '~$6.6B (Jan 2026)',
    note: 'The default voice layer for the agent ecosystem.',
  },
  {
    name: 'Suno',
    founded: 2022,
    founders: 'Mikey Shulman, et al.',
    focus: 'Music generation',
    valuation: '~$2.45B (2025)',
    note: 'Settled/licensing negotiations with major labels reshaped AI-music economics.',
  },
  {
    name: 'Groq',
    founded: 2016,
    founders: 'Jonathan Ross',
    focus: 'Inference chips (LPU) and cloud',
    valuation: '~$6.9B (Sep 2025)',
    note: 'Sells speed: deterministic low-latency inference on custom silicon.',
  },
  {
    name: 'Together AI',
    founded: 2022,
    founders: 'Vipul Ved Prakash, Ce Zhang, et al.',
    focus: 'Open-model cloud and inference',
    valuation: '~$3.3B (Feb 2025)',
    note: 'The de facto serving layer for the open-weight ecosystem.',
  },
  {
    name: 'Hugging Face',
    founded: 2016,
    founders: 'Clément Delangue, Julien Chaumond, Thomas Wolf',
    focus: 'Model hub and open-source tooling',
    valuation: '~$4.5B (Aug 2023)',
    note: 'The GitHub of machine learning; hosts millions of models and datasets.',
  },
  {
    name: 'Midjourney',
    founded: 2021,
    founders: 'David Holz',
    focus: 'Image generation',
    valuation: 'bootstrapped; ~$500M+ revenue',
    note: 'Never raised venture capital; took a Meta licensing deal in 2025.',
  },
  {
    name: 'Runway',
    founded: 2018,
    founders: 'Cristóbal Valenzuela, et al.',
    focus: 'Video generation (Gen series)',
    valuation: '~$3B (2025)',
    note: 'Hollywood partnerships put generative video into real production pipelines.',
  },
  {
    name: 'Sierra',
    founded: 2023,
    founders: 'Bret Taylor, Clay Bavor',
    focus: 'Enterprise customer-service agents',
    valuation: '~$10B (Oct 2025)',
    note: 'Outcome-based pricing — customers pay per resolved conversation.',
  },
  {
    name: 'Glean',
    founded: 2019,
    founders: 'Arvind Jain, et al.',
    focus: 'Enterprise search and work agents',
    valuation: '~$7.2B (Jun 2025)',
    note: 'The connective tissue between enterprise data and LLMs.',
  },
  {
    name: 'World Labs',
    founded: 2024,
    founders: 'Fei-Fei Li, et al.',
    focus: 'Spatial intelligence / world models',
    valuation: '~$1B+ (2024)',
    note: 'Betting the next paradigm is 3D world understanding, not language.',
  },
];
