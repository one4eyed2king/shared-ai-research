// Curated glossary of complex or specialized terms used across the papers.
//
// Only genuinely technical or jargon terms belong here — legal, economic,
// statistical, and AI-specific vocabulary that a general reader may not know.
// Everyday words are deliberately omitted so the reading surface stays clean;
// each term that appears is annotated only on its first occurrence in a paper.
//
// Keys are matched case-insensitively on whole-word boundaries. To cover a
// spelling variant (e.g. a hyphenated form), add it as a separate key pointing
// at the same definition. Definitions should be one concise sentence.

export type Glossary = Record<string, string>;

export const glossary: Glossary = {
  // — Law —
  tort: 'A civil wrong (other than breach of contract) that causes harm, for which the injured party can sue for damages.',
  fiduciary:
    'Relating to a legal duty to act in another party’s best interest, as a trustee or director must.',
  adjudicative:
    'Concerning the formal resolution of a dispute or claim by a judge, regulator, or other authority.',
  adjudication:
    'The formal process of judging or settling a dispute through a court or regulatory body.',
  indemnification:
    'A contractual promise by one party to cover the losses or liabilities incurred by another.',
  'strict liability':
    'Legal responsibility for harm imposed regardless of fault or intent to cause it.',
  'disparate impact':
    'A legal theory under which a neutral policy is unlawful if it disproportionately harms a protected group.',
  'safe harbor':
    'A provision that shields conduct from liability when stated conditions are met.',
  'principal-agent':
    'The relationship in which one party (the agent) acts on behalf of another (the principal), creating risks of misaligned incentives.',
  'Sarbanes-Oxley':
    'A 2002 U.S. law imposing strict financial-reporting and accountability requirements on public companies.',
  jurisprudence: 'The theory, philosophy, or body of a system of law.',
  precedent:
    'A prior court decision that guides or binds the resolution of later, similar cases.',
  statute: 'A formal written law enacted by a legislature.',
  'respondeat superior':
    'A doctrine holding an employer or principal liable for wrongful acts an agent commits within the scope of their authority.',
  'veil-piercing':
    'A court disregarding a company’s limited liability to hold its owners or parent directly responsible.',
  'proximate cause':
    'A cause close enough in the chain of events to carry legal responsibility for the resulting harm.',
  'intervening cause':
    'A later, independent event that breaks the causal chain and can relieve an earlier actor of liability.',
  'injunctive relief':
    'A court order requiring a party to do, or stop doing, a specific act, as opposed to paying damages.',
  disgorgement:
    'A remedy requiring a wrongdoer to surrender gains obtained through misconduct.',
  'constructive trust':
    'An equitable remedy treating wrongfully held property as if it were held in trust for its rightful owner.',
  'fiduciary duty':
    'The legal obligation of a fiduciary to act loyally and prudently in another party’s interest.',
  'duty of loyalty':
    'A fiduciary’s obligation to avoid conflicts of interest and put the beneficiary’s interests first.',
  'duty of care':
    'An obligation to act with the prudence and diligence a reasonable person would exercise.',
  'non-delegation':
    'A constitutional principle limiting how far a legislature may transfer its lawmaking power to other bodies.',
  'sub-delegation':
    'The onward transfer of already-delegated authority to a further agent, often restricted by law.',
  'regulatory arbitrage':
    'Structuring activity to exploit differences between regulatory regimes and lower the cost of compliance.',
  'product liability':
    'The body of law holding makers and sellers responsible for injuries caused by defective products.',
  'design defect':
    'A flaw inherent in a product’s design — rather than its manufacture — that makes it unreasonably unsafe.',
  'information fiduciary':
    'A proposed legal category under which those who hold others’ data owe them fiduciary-like duties.',
  'judgment-proof':
    'Having too few assets to satisfy a legal judgment, so a lawsuit cannot meaningfully recover damages.',
  'ex ante': 'Beforehand — assessed in advance of an action or its outcome.',
  'ex post': 'After the fact — assessed once the outcome is known.',

  // — Economics & decision theory —
  'Knightian uncertainty':
    'Uncertainty that cannot be assigned a probability distribution, as distinct from quantifiable, insurable risk.',
  'real options':
    'A valuation approach treating a decision as an option, so the value of waiting for more information can exceed acting now.',
  'real-options':
    'A valuation approach treating a decision as an option, so the value of waiting for more information can exceed acting now.',
  'general purpose technology':
    'A foundational technology (like electricity or the computer) that spreads across the economy and spawns complementary innovation.',
  'net present value':
    'The value today of future cash flows minus the upfront cost, used to judge whether an investment is worthwhile.',
  NPV: 'Net present value — future cash flows discounted to today, minus upfront cost.',
  endogenous:
    'Determined within the system being studied, rather than imposed from outside it.',
  endogeneity:
    'The condition in which an explanatory variable is correlated with unobserved factors, complicating causal claims.',
  exogenous:
    'Originating outside the system being studied and treated as independent of it.',
  equilibrium:
    'A state in which opposing forces balance, so there is no tendency to change.',
  'path dependence':
    'The tendency for past choices to constrain present options, even when better alternatives now exist.',
  'automation bias':
    'The human tendency to over-rely on automated suggestions and under-scrutinize them.',
  heuristic:
    'A practical rule of thumb that yields good-enough answers without guaranteeing the optimal one.',
  counterfactual:
    'A hypothetical statement about what would have happened under different conditions.',
  'moral hazard':
    'The tendency to take greater risks when shielded from their full consequences.',
  'incentive compatibility':
    'A mechanism is incentive-compatible when pursuing one’s own interest also produces the outcome the designer intends.',
  'participation constraint':
    'In contract design, the requirement that an agent be at least as well off accepting the contract as declining it.',
  'residual claimant':
    'The party entitled to what remains after fixed claims are paid — and who therefore bears the residual risk.',
  'information asymmetry':
    'A situation in which one party to a transaction knows materially more than the other.',
  'tail risk':
    'The risk of rare but extreme outcomes in the far tail of a probability distribution.',
  'ambiguity aversion':
    'A preference for risks with known probabilities over equivalent risks with unknown probabilities.',
  'productivity paradox':
    'The puzzle that large technology investments can fail to appear in measured productivity for years.',
  'relational contracting':
    'Cooperation sustained by an ongoing relationship and trust rather than by fully specified, enforceable terms.',

  // — Statistics & method —
  'instrumental variable':
    'A variable used to isolate causal effects by standing in for a cause that is otherwise entangled with confounders.',
  'omitted variable bias':
    'Distortion in an estimate caused by leaving out a relevant factor correlated with the included variables.',
  'event study':
    'A method that measures how an outcome changes around a specific event, comparing before and after.',
  'cross-sectional':
    'Comparing many units at a single point in time, rather than tracking change over time.',
  orthogonal:
    'Statistically unrelated; varying independently of another quantity.',
  'selection bias':
    'Distortion that arises when the sample studied is not representative of the population of interest.',
  'exclusion restriction':
    'The assumption that an instrument affects the outcome only through the variable it stands in for.',
  'identification strategy':
    'The research design used to isolate a causal effect from merely correlational data.',

  // — AI & systems —
  substitutive:
    'Replacing human judgment in a task, rather than assisting it.',
  augmentative:
    'Assisting or extending human judgment rather than replacing it.',
  'proactive AI':
    'Algorithmic systems that initiate action and operate on triggers or schedules without per-instance human authorization.',
  bifurcation:
    'A splitting into two distinct branches or paths.',
  emergent:
    'Arising from the interaction of simpler parts in ways not evident from the parts alone.',
  corrigibility:
    'A system’s property of allowing its operators to correct, modify, or shut it down without resistance.',
  'scalable oversight':
    'Supervising an AI system closely enough to catch and correct its errors even as its capability grows.',
  'mesa-optimization':
    'When a trained model develops its own internal optimizer pursuing goals that may diverge from the training objective.',
  'specification gaming':
    'An AI scoring well by exploiting loopholes in its objective rather than doing what was intended.',
  'reward hacking':
    'An AI exploiting flaws in its reward signal to score highly without accomplishing the intended task.',
  "Goodhart's Law":
    'Once a measure becomes a target, it ceases to be a good measure, because the metric itself gets optimized.',

  // — Philosophy & argument —
  normative:
    'Concerning how things ought to be — values and standards — as opposed to merely describing how they are.',
  tripartite: 'Divided into or composed of three parts.',
  isomorphism:
    'A correspondence in underlying structure between two systems that differ on the surface.',
};
