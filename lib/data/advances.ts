// Technical advances that shaped modern AI, in chronological order.
//
// Each entry names the advance, when it landed, what it is, and why it
// mattered. References cite the canonical paper or release where one exists.
// Data compiled as of early 2026.

export interface AdvanceEntry {
  year: number;
  name: string;
  what: string;
  why: string;
  reference?: string;
}

export const advancesUpdated = 'January 2026';

export const advances: AdvanceEntry[] = [
  {
    year: 2017,
    name: 'The Transformer',
    what: 'A sequence architecture built entirely on attention, discarding recurrence and convolution.',
    why: 'Every frontier model since is a descendant. Parallelizable training made web-scale pretraining practical.',
    reference: 'Vaswani et al., “Attention Is All You Need” (2017)',
  },
  {
    year: 2018,
    name: 'Generative pretraining',
    what: 'Pretrain a large model on unlabeled text, then adapt it to tasks — GPT by autoregression, BERT by masked prediction.',
    why: 'Replaced task-specific architectures with one recipe: pretrain once, specialize cheaply.',
    reference: 'Radford et al., GPT (2018); Devlin et al., BERT (2018)',
  },
  {
    year: 2020,
    name: 'Neural scaling laws',
    what: 'Loss falls as a smooth power law in parameters, data, and compute; Chinchilla (2022) corrected the parameter–data ratio.',
    why: 'Turned model building into an investment calculus — labs could forecast returns on compute before spending it.',
    reference: 'Kaplan et al. (2020); Hoffmann et al., Chinchilla (2022)',
  },
  {
    year: 2020,
    name: 'In-context learning',
    what: 'GPT-3 showed a large enough model performs new tasks from examples in the prompt, with no weight updates.',
    why: 'Made prompting the dominant interface to AI and revealed that scale produces qualitatively new behavior.',
    reference: 'Brown et al., “Language Models are Few-Shot Learners” (2020)',
  },
  {
    year: 2020,
    name: 'Retrieval-augmented generation',
    what: 'Ground a model’s output in documents fetched at inference time rather than in weights alone.',
    why: 'Became the standard bridge between static models and private or fresh data; the backbone of enterprise deployment.',
    reference: 'Lewis et al., RAG (2020)',
  },
  {
    year: 2020,
    name: 'Denoising diffusion models',
    what: 'Generate images by learning to reverse gradual noising; latent diffusion (2022) made it cheap enough for consumer hardware.',
    why: 'Displaced GANs and powered DALL·E 2, Stable Diffusion, and Midjourney — the image-generation boom of 2022.',
    reference: 'Ho et al., DDPM (2020); Rombach et al., Latent Diffusion (2022)',
  },
  {
    year: 2021,
    name: 'Sparse mixture of experts',
    what: 'Route each token through a small subset of expert subnetworks, decoupling total parameters from per-token compute.',
    why: 'Now the default frontier architecture — Mixtral, DeepSeek-V3, Llama 4, and (reportedly) GPT-4 are MoE.',
    reference: 'Fedus et al., Switch Transformer (2021)',
  },
  {
    year: 2021,
    name: 'Low-rank adaptation (LoRA)',
    what: 'Fine-tune by learning small low-rank weight deltas instead of updating the full model.',
    why: 'Cut fine-tuning costs by orders of magnitude and enabled the hobbyist fine-tune ecosystem around open models.',
    reference: 'Hu et al., LoRA (2021)',
  },
  {
    year: 2022,
    name: 'RLHF and instruction tuning',
    what: 'Fine-tune on human demonstrations, then optimize against a learned model of human preferences.',
    why: 'Turned raw text predictors into usable assistants; the technique behind ChatGPT.',
    reference: 'Ouyang et al., InstructGPT (2022)',
  },
  {
    year: 2022,
    name: 'Chain-of-thought prompting',
    what: 'Ask a model to reason step by step before answering.',
    why: 'Unlocked multi-step reasoning at inference time and seeded the later reasoning-model paradigm.',
    reference: 'Wei et al. (2022)',
  },
  {
    year: 2022,
    name: 'Constitutional AI',
    what: 'Align a model against a written set of principles using AI-generated feedback (RLAIF) instead of human labels alone.',
    why: 'Showed alignment training could scale without proportional human labeling; core to Claude’s training.',
    reference: 'Bai et al., Constitutional AI (2022)',
  },
  {
    year: 2022,
    name: 'FlashAttention',
    what: 'An IO-aware exact attention kernel that avoids materializing the full attention matrix.',
    why: 'Made long contexts computationally tractable; standard in every serious training and inference stack.',
    reference: 'Dao et al. (2022)',
  },
  {
    year: 2023,
    name: 'Weight quantization',
    what: 'Compress trained weights to 8, 4, or fewer bits with minimal quality loss (GPTQ, AWQ, GGUF).',
    why: 'Let frontier-class open models run on single GPUs and laptops; the foundation of local inference.',
    reference: 'Frantar et al., GPTQ (2022); Lin et al., AWQ (2023)',
  },
  {
    year: 2023,
    name: 'Efficient inference serving',
    what: 'PagedAttention (vLLM) manages KV-cache like virtual memory; continuous batching keeps GPUs saturated; speculative decoding drafts tokens with a small model.',
    why: 'Cut serving costs several-fold and made high-throughput API serving economically viable.',
    reference: 'Kwon et al., vLLM (2023); Leviathan et al. (2023)',
  },
  {
    year: 2023,
    name: 'Context-length extension',
    what: 'Positional-encoding interpolation and scaling (RoPE variants, YaRN) stretched contexts from 4K to 128K+ tokens.',
    why: 'Whole-codebase and whole-document reasoning became routine; long context now substitutes for fine-tuning in many uses.',
    reference: 'Chen et al. (2023); Peng et al., YaRN (2023)',
  },
  {
    year: 2023,
    name: 'Selective state-space models',
    what: 'Mamba matched transformer quality at small scale with linear-time sequence mixing.',
    why: 'The strongest challenge yet to attention’s monopoly; hybrid SSM–attention layers now appear in production models.',
    reference: 'Gu & Dao, Mamba (2023)',
  },
  {
    year: 2024,
    name: 'Native multimodality',
    what: 'Single models trained end-to-end across text, images, and audio (GPT-4o, Gemini), rather than stitched-together encoders.',
    why: 'Real-time voice conversation and unified any-to-any interfaces; multimodal became the frontier default.',
  },
  {
    year: 2024,
    name: 'Test-time compute scaling',
    what: 'Train models by reinforcement learning to produce long private chains of thought, spending more inference compute on harder problems (o1, R1).',
    why: 'Opened a second scaling axis beyond pretraining; reasoning models now dominate math, science, and coding benchmarks.',
    reference: 'OpenAI o1 (2024); DeepSeek-R1 (2025)',
  },
  {
    year: 2024,
    name: 'Computer use and agentic tool use',
    what: 'Models operate real interfaces — terminals, browsers, GUIs — in a perception–action loop.',
    why: 'Moved AI from answering questions to performing work; the basis of coding agents and the emerging agent economy.',
    reference: 'Anthropic computer use (2024)',
  },
  {
    year: 2024,
    name: 'Model Context Protocol',
    what: 'An open standard connecting models to tools and data sources, adopted across major labs and editors in 2025.',
    why: 'Did for agent tooling what USB did for peripherals: one integration, every model.',
    reference: 'Anthropic, MCP (2024)',
  },
  {
    year: 2025,
    name: 'Reasoning distillation',
    what: 'DeepSeek-R1 showed reasoning behavior can be distilled from RL-trained teachers into small open models, and that pure RL can elicit it without supervised scaffolding.',
    why: 'Collapsed the cost of reasoning capability and spread it through the open ecosystem within months.',
    reference: 'DeepSeek-R1 (2025)',
  },
  {
    year: 2025,
    name: 'Long-horizon agents',
    what: 'Context management, memory, and sub-agent orchestration let models sustain coherent work over hours and thousands of tool calls.',
    why: 'The unit of delegation shifted from the prompt to the task; autonomous coding sessions became products rather than demos.',
  },
];
