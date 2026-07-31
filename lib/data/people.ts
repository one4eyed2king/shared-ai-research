// Notable figures in the AI industry, grouped by the role they principally
// play. Affiliations are as of early 2026 and change often.

export interface PersonEntry {
  name: string;
  role: string;
  org: string;
  note: string;
}

export interface PeopleGroup {
  title: string;
  people: PersonEntry[];
}

export const peopleUpdated = 'January 2026';

export const peopleGroups: PeopleGroup[] = [
  {
    title: 'Lab leadership',
    people: [
      {
        name: 'Sam Altman',
        role: 'CEO',
        org: 'OpenAI',
        note: 'Steered OpenAI from research lab to the most valuable private company; briefly ousted and reinstated in November 2023.',
      },
      {
        name: 'Dario Amodei',
        role: 'Co-founder & CEO',
        org: 'Anthropic',
        note: 'Left OpenAI in 2021 to found Anthropic around safety-focused scaling; author of “Machines of Loving Grace.”',
      },
      {
        name: 'Daniela Amodei',
        role: 'Co-founder & President',
        org: 'Anthropic',
        note: 'Runs Anthropic’s operations, policy, and commercial organization.',
      },
      {
        name: 'Demis Hassabis',
        role: 'CEO',
        org: 'Google DeepMind',
        note: 'Founded DeepMind in 2010; shared the 2024 Nobel Prize in Chemistry for AlphaFold.',
      },
      {
        name: 'Ilya Sutskever',
        role: 'Co-founder & CEO',
        org: 'Safe Superintelligence',
        note: 'OpenAI’s former chief scientist; founded SSI in 2024 to pursue superintelligence with no interim products.',
      },
      {
        name: 'Mira Murati',
        role: 'Founder & CEO',
        org: 'Thinking Machines Lab',
        note: 'Former OpenAI CTO; raised a record ~$2B seed round in 2025.',
      },
      {
        name: 'Elon Musk',
        role: 'Founder',
        org: 'xAI / Tesla',
        note: 'OpenAI co-founder turned litigant; xAI built the Colossus supercluster at unprecedented speed.',
      },
      {
        name: 'Liang Wenfeng',
        role: 'Founder',
        org: 'DeepSeek',
        note: 'Hedge-fund founder (High-Flyer) whose lab produced V3 and R1, resetting assumptions about training costs.',
      },
      {
        name: 'Arthur Mensch',
        role: 'Co-founder & CEO',
        org: 'Mistral AI',
        note: 'Former DeepMind researcher leading Europe’s flagship AI lab.',
      },
      {
        name: 'Mustafa Suleyman',
        role: 'CEO, Microsoft AI',
        org: 'Microsoft',
        note: 'DeepMind co-founder; joined Microsoft in 2024 when it absorbed his startup Inflection.',
      },
    ],
  },
  {
    title: 'Research',
    people: [
      {
        name: 'Geoffrey Hinton',
        role: 'Professor emeritus',
        org: 'University of Toronto',
        note: '“Godfather of deep learning”; left Google in 2023 to warn about AI risk; 2024 Nobel laureate in Physics.',
      },
      {
        name: 'Yoshua Bengio',
        role: 'Professor; founder, LawZero',
        org: 'Mila',
        note: 'Turing Award winner now focused on AI safety; chaired the International AI Safety Report.',
      },
      {
        name: 'Yann LeCun',
        role: 'Chief AI Scientist (departing)',
        org: 'Meta',
        note: 'Turing Award winner and LLM skeptic; announced departure from Meta in late 2025 to found a world-model startup.',
      },
      {
        name: 'Andrej Karpathy',
        role: 'Founder',
        org: 'Eureka Labs',
        note: 'OpenAI founding member and former Tesla AI lead; the field’s most influential educator.',
      },
      {
        name: 'Noam Shazeer',
        role: 'Co-lead, Gemini',
        org: 'Google DeepMind',
        note: 'Transformer co-author; returned to Google in 2024 via a ~$2.7B Character.AI licensing deal.',
      },
      {
        name: 'Jared Kaplan',
        role: 'Co-founder & Chief Science Officer',
        org: 'Anthropic',
        note: 'Physicist who formalized neural scaling laws — the empirical basis of the scaling era.',
      },
      {
        name: 'John Schulman',
        role: 'Researcher',
        org: 'Thinking Machines Lab',
        note: 'Invented PPO, the workhorse algorithm of RLHF; co-created ChatGPT at OpenAI.',
      },
      {
        name: 'Chris Olah',
        role: 'Co-founder',
        org: 'Anthropic',
        note: 'Pioneer of mechanistic interpretability — reverse-engineering what happens inside neural networks.',
      },
      {
        name: 'Fei-Fei Li',
        role: 'Co-founder, World Labs; Professor',
        org: 'Stanford',
        note: 'Created ImageNet, the dataset that launched the deep-learning era; now building spatial-intelligence world models.',
      },
      {
        name: 'Jan Leike',
        role: 'Alignment lead',
        org: 'Anthropic',
        note: 'Left OpenAI in 2024 warning that “safety culture has taken a backseat”; leads alignment research at Anthropic.',
      },
    ],
  },
  {
    title: 'Compute & capital',
    people: [
      {
        name: 'Jensen Huang',
        role: 'Founder & CEO',
        org: 'NVIDIA',
        note: 'Bet the company on accelerated computing two decades early; NVIDIA became the world’s most valuable company on AI demand.',
      },
      {
        name: 'Lisa Su',
        role: 'Chair & CEO',
        org: 'AMD',
        note: 'Rebuilt AMD into the credible second source for AI accelerators with the Instinct MI series.',
      },
      {
        name: 'Satya Nadella',
        role: 'Chairman & CEO',
        org: 'Microsoft',
        note: 'The decisive early OpenAI investment; repositioned Microsoft around Copilot and Azure AI.',
      },
      {
        name: 'Sundar Pichai',
        role: 'CEO',
        org: 'Alphabet',
        note: 'Merged Brain and DeepMind and drove the Gemini counteroffensive after ChatGPT.',
      },
      {
        name: 'Mark Zuckerberg',
        role: 'Founder & CEO',
        org: 'Meta',
        note: 'Bankrolled the open-weight Llama line, then pivoted to a closed superintelligence lab with nine-figure hiring offers.',
      },
      {
        name: 'Alexandr Wang',
        role: 'Chief AI Officer',
        org: 'Meta',
        note: 'Scale AI founder; recruited to lead Meta Superintelligence Labs in the 2025 talent wars.',
      },
      {
        name: 'Masayoshi Son',
        role: 'Chairman & CEO',
        org: 'SoftBank',
        note: 'The largest single financier of the buildout — OpenAI’s mega-rounds and the Stargate datacenter venture.',
      },
      {
        name: 'Jonathan Ross',
        role: 'Founder & CEO',
        org: 'Groq',
        note: 'Created Google’s original TPU; Groq’s LPUs made ultra-fast inference a product category.',
      },
    ],
  },
];
