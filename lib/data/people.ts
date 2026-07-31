// Notable figures in the AI industry, grouped by the role they principally
// play. Affiliations are as of mid-2026 and change often.

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

export const peopleUpdated = 'July 2026';

export const peopleGroups: PeopleGroup[] = [
  {
    title: 'Lab leadership',
    people: [
      {
        name: 'Sam Altman',
        role: 'CEO',
        org: 'OpenAI',
        note: 'Steered OpenAI from research lab to the most valuable private company; filed confidentially in June 2026 for an IPO he wants valued above $1T.',
      },
      {
        name: 'Greg Brockman',
        role: 'Co-founder & President',
        org: 'OpenAI',
        note: 'Runs OpenAI’s engineering and infrastructure buildout; took over product leadership in mid-2026 after Fidji Simo stepped back.',
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
        note: 'Founded DeepMind in 2010; 2024 chemistry Nobel laureate for AlphaFold; in July 2026 proposed a US-led body to test frontier models.',
      },
      {
        name: 'Ilya Sutskever',
        role: 'Co-founder & CEO',
        org: 'Safe Superintelligence',
        note: 'OpenAI’s former chief scientist; took a $5B NVIDIA investment in July 2026 to scale SSI’s still product-free superintelligence research.',
      },
      {
        name: 'Mira Murati',
        role: 'Founder & CEO',
        org: 'Thinking Machines Lab',
        note: 'Former OpenAI CTO; after a record ~$2B seed round, shipped the lab’s first open-weight models and Tinker fine-tuning platform.',
      },
      {
        name: 'Elon Musk',
        role: 'Founder',
        org: 'SpaceX (xAI) / Tesla',
        note: 'OpenAI co-founder turned litigant; folded xAI into SpaceX in 2026 as the ~555,000-GPU Colossus 2 cluster came online.',
      },
      {
        name: 'Liang Wenfeng',
        role: 'Founder',
        org: 'DeepSeek',
        note: 'Hedge-fund founder (High-Flyer) whose lab’s V3, R1, and 2026’s V4 reset assumptions about training costs.',
      },
      {
        name: 'Yang Zhilin',
        role: 'Co-founder & CEO',
        org: 'Moonshot AI',
        note: 'CMU-trained researcher whose open-weight Kimi models — K3 in July 2026 — repeatedly set the frontier for open releases.',
      },
      {
        name: 'Zhang Peng',
        role: 'CEO',
        org: 'Z.ai (Zhipu AI)',
        note: 'Leads the Tsinghua-born GLM lab that became the world’s first listed LLM company with its January 2026 Hong Kong IPO.',
      },
      {
        name: 'Arthur Mensch',
        role: 'Co-founder & CEO',
        org: 'Mistral AI',
        note: 'Former DeepMind researcher leading Europe’s flagship AI lab, in 2026 raising at a roughly €20B valuation.',
      },
      {
        name: 'Mustafa Suleyman',
        role: 'CEO, Microsoft AI',
        org: 'Microsoft',
        note: 'DeepMind co-founder; now leads Microsoft’s in-house MAI models and its superintelligence team after the OpenAI pact was loosened.',
      },
      {
        name: 'Aravind Srinivas',
        role: 'Co-founder & CEO',
        org: 'Perplexity',
        note: 'Former OpenAI researcher whose answer engine became the leading AI-native challenger to Google search.',
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
        role: 'Co-founder',
        org: 'AMI Labs',
        note: 'Turing Award winner and LLM skeptic; left Meta in late 2025 and raised $1.03B in March 2026 to build JEPA world models.',
      },
      {
        name: 'Andrej Karpathy',
        role: 'Research lead',
        org: 'Anthropic',
        note: 'OpenAI founding member and former Tesla AI lead; joined Anthropic in May 2026 to lead a pre-training team, pausing Eureka Labs.',
      },
      {
        name: 'Jakub Pachocki',
        role: 'Chief Scientist',
        org: 'OpenAI',
        note: 'Succeeded Sutskever in 2024; directs the research agenda behind OpenAI’s reasoning models.',
      },
      {
        name: 'Mark Chen',
        role: 'Chief Research Officer',
        org: 'OpenAI',
        note: 'Shares OpenAI’s research leadership with Pachocki; longtime head of its frontier-model teams.',
      },
      {
        name: 'Noam Shazeer',
        role: 'Researcher',
        org: 'OpenAI',
        note: 'Transformer co-author; quit as Gemini co-lead for OpenAI in June 2026, two years after Google’s ~$2.7B Character.AI deal brought him back.',
      },
      {
        name: 'Jeff Dean',
        role: 'Chief Scientist',
        org: 'Google',
        note: 'Built Google’s foundational systems (MapReduce, TensorFlow); co-leads the Gemini models with Oriol Vinyals.',
      },
      {
        name: 'Jared Kaplan',
        role: 'Co-founder & Chief Science Officer',
        org: 'Anthropic',
        note: 'Physicist who formalized neural scaling laws — the empirical basis of the scaling era.',
      },
      {
        name: 'John Schulman',
        role: 'Chief Scientist',
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
        name: 'Shengjia Zhao',
        role: 'Chief Scientist',
        org: 'Meta Superintelligence Labs',
        note: 'GPT-4 and o1 co-creator recruited from OpenAI in 2025 to set the scientific agenda of Meta’s superintelligence effort.',
      },
      {
        name: 'Fei-Fei Li',
        role: 'Co-founder & CEO, World Labs; Professor',
        org: 'Stanford',
        note: 'Created ImageNet, the dataset that launched the deep-learning era; World Labs shipped its Marble world-model product in 2026.',
      },
    ],
  },
  {
    title: 'Safety & governance',
    people: [
      {
        name: 'Jan Leike',
        role: 'Alignment lead',
        org: 'Anthropic',
        note: 'Left OpenAI in 2024 warning that “safety culture has taken a backseat”; leads alignment science research at Anthropic.',
      },
      {
        name: 'Jack Clark',
        role: 'Co-founder & Head of Public Benefit',
        org: 'Anthropic',
        note: 'Led Anthropic policy from its founding until 2026, when he launched the Anthropic Institute think tank; writes Import AI.',
      },
      {
        name: 'Dan Hendrycks',
        role: 'Executive Director',
        org: 'Center for AI Safety',
        note: 'Organized the 2023 extinction-risk statement; CAIS added a national-security-focused Frontier Security Institute in 2026.',
      },
      {
        name: 'Paul Christiano',
        role: 'Head of AI Safety',
        org: 'US Center for AI Standards and Innovation',
        note: 'Invented RLHF at OpenAI and founded the Alignment Research Center; now runs frontier-model safety testing inside NIST.',
      },
      {
        name: 'Michael Kratsios',
        role: 'Director',
        org: 'White House OSTP',
        note: 'Architect of the Trump administration’s AI Action Plan and its light-touch, buildout-first regulatory posture.',
      },
      {
        name: 'David Sacks',
        role: 'Co-chair, PCAST',
        org: 'White House',
        note: 'The first White House AI and crypto czar; stepped down in early 2026 to co-chair the President’s Council of Advisors on Science and Technology.',
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
        note: 'Scale AI founder recruited to lead Meta Superintelligence Labs in the 2025 talent wars; shipped its first frontier model in 2026.',
      },
      {
        name: 'Masayoshi Son',
        role: 'Chairman & CEO',
        org: 'SoftBank',
        note: 'The largest single financier of the buildout — OpenAI’s mega-rounds and the Stargate datacenter venture, which he chairs.',
      },
      {
        name: 'Larry Ellison',
        role: 'Chairman & CTO',
        org: 'Oracle',
        note: 'Oracle’s $300B compute contract with OpenAI anchors the Stargate buildout, from Abilene onward.',
      },
      {
        name: 'Jonathan Ross',
        role: 'Chief Software Architect',
        org: 'NVIDIA',
        note: 'Created Google’s original TPU and founded Groq; joined NVIDIA after it licensed Groq’s inference technology in a ~$20B deal.',
      },
    ],
  },
];
