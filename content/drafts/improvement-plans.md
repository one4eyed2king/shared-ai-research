# Improvement Plans: Candidates A, C, D

This document specifies how each remaining candidate should be developed from the original thesis sketch into a publishable standalone paper. Each plan identifies the original weakness, the required intellectual moves, the target length, the target venue, and concrete success criteria.

---

## Candidate A — "Delegation Without an Agent: Extending Principal–Agent Theory to Non-Sanctionable Actors"

### Original weakness
The thesis sketch identified that the principal–agent problem applied to proactive AI is structurally severe but did not develop the theoretical move with the rigor required for an economics or law-and-economics journal. The "Balkin only cited, not engaged" critique stands; the "what does the equilibrium actually look like?" question is unanswered.

### Required intellectual moves
1. **Formal model.** Construct a principal–agent model with a non-sanctionable agent (an agent whose payoff function does not respond to monitoring outputs in the usual ways — no reputation, no compensation, no liability). Solve for the optimal contract and show how the standard solution menu degenerates.
2. **Deployer-as-residual-bearer analysis.** Develop the claim that when the agent cannot bear sanction, the deployer becomes residual bearer of agent risk. Show under what conditions this assignment produces the right incentives and when it fails.
3. **Engage Balkin head-on.** The information-fiduciary literature attempts to solve exactly this problem. Show specifically where Balkin's framework succeeds and where it fails when applied to proactive AI, with attention to the beneficiary-identification problem and the remedy problem.
4. **Holmström-Milgrom multitask.** The multitask agency literature is directly relevant because proactive AI agents typically pursue multiple objectives simultaneously. Show how the multitask analysis transfers and what new pathologies emerge.
5. **Connection to alignment.** Bridge to the alignment literature on corrigibility, scalable oversight, and assistance games. These are the same problem in different vocabulary; the paper should show the translation.
6. **Empirical illustrations.** Three or four concrete examples of degeneration: an algorithmic trading agent with no skin in the game, a customer-service agent that pursues call-resolution at the expense of customer welfare, a procurement agent whose contracts the principal cannot monitor.

### Target length
10,000–12,000 words.

### Target venue
*Journal of Law, Economics, and Organization* (best fit); *American Economic Review: Insights* (if model is sufficiently formal); *Yale Law Journal* (if reframed as a fiduciary-law paper).

### Success criteria
- A formal model section that an economist would take seriously
- A doctrinal section that a law-and-economics scholar would take seriously
- Sustained engagement with Balkin, not just citation
- Clear contribution stated in the introduction and recapitulated in the conclusion
- At least three concrete deployment examples that illustrate the theoretical claims

---

## Candidate C — "The Bifurcation Hypothesis: Why Proactive AI Will Diffuse Asymmetrically in the Firm"

### Original weakness
The thesis sketch advanced a plausible hypothesis (rapid adoption in operational layers, slow adoption in strategic/adjudicative layers, driven by liability asymmetry) but did not specify how the hypothesis would be tested. Without an empirical strategy, the paper reads as a well-argued essay rather than a contribution.

### Required intellectual moves
1. **Sharpen the hypothesis.** State the bifurcation hypothesis as a set of three or four testable predictions with predicted directions. The current sketch states it directionally; a publishable version requires specificity.
2. **Real-options framing.** Develop the Knightian-uncertainty framing more rigorously. The intuition is that firms face Knightian uncertainty about agent behavior in the tail, and that high-stakes deployments are real-options problems where the option value of waiting is high.
3. **Empirical strategy.** Identify at least two empirical strategies. The most promising candidates: (a) cross-sector adoption variation correlated with tort-exposure variation, exploiting state-level differences in liability regimes; (b) within-firm variation in adoption pace across functional areas, with liability exposure as the predictor; (c) event studies around liability shocks (a major adverse judgment, a new regulatory regime) and subsequent adoption pauses or reversals.
4. **Connect to existing technology adoption literature.** Rogers' diffusion theory, David's "Computer Productivity Paradox," Bresnahan-Trajtenberg on general purpose technologies, more recent work by Acemoglu and Restrepo on automation. The bifurcation hypothesis should be situated as an extension or modification of one of these frames, not as a freestanding claim.
5. **Sector-specific predictions.** Make sector-by-sector predictions about which functional areas will and will not absorb proactive AI in the next five years: finance (operational: rapid; capital allocation: slow); healthcare (administrative: rapid; clinical decision: slow); legal (routine drafting: rapid; advocacy: slow); etc. Predictions are accountable to subsequent observation.
6. **Address the competitive-pressure counterargument.** The thesis's pessimistic note — that competitive pressure may force adoption against the structural logic — should be developed as a serious alternative hypothesis with its own predictions, and the paper should specify what empirical pattern would distinguish the two.

### Target length
10,000 words.

### Target venue
*Strategic Management Journal* or *Management Science* (if the empirical strategy is solid); *Administrative Science Quarterly* (if more interpretive); *Brookings Papers on Economic Activity* (if framed as a policy-relevant economics contribution).

### Success criteria
- Bifurcation hypothesis stated as testable predictions with predicted directions
- At least one credible empirical strategy specified in enough detail that another researcher could execute it
- Engagement with two or three established technology-adoption frames
- Sector-by-sector predictions concrete enough to be falsified by subsequent observation
- Competitive-pressure counterargument treated as a serious alternative, not dismissed

---

## Candidate D — "Delegation Is the Novelty: Why Proactive AI Is Not Just Another Wave of Automation"

### Original weakness
The thesis sketch advanced a sharp claim (every previous automation wave automated production or information; proactive AI is the first to automate delegation itself) but did not do the comparative work required to make the claim robust. Without disciplined comparison across prior waves, the argument is provocative rather than rigorous.

### Required intellectual moves
1. **Define delegation precisely.** Distinguish "delegation" from "automation" rigorously. The claim is that delegation is the transfer of authority to act, not the transfer of an action. Get the definition right and the analysis follows; get it wrong and the paper collapses into the historical-precedent literature.
2. **Comparative analysis across at least three prior waves.** Recommend: mechanization (textile manufacturing, late 18th/early 19th century); electrification (industrial production, late 19th/early 20th century); computerization (information processing, 1950s onward). For each, identify what was automated, what was not, and what institutional adaptations the wave required.
3. **The delegation-relevance test.** For each prior wave, ask: were any of the institutional adaptations specifically *delegation-relevant*? Did electrification require new forms of authority delegation? Did computerization? The honest answer for most prior waves is "no, or only minimally." The exception is the rise of the modern corporate hierarchy in response to railroad-era scale, which involved significant delegation innovation. Engage that exception seriously.
4. **What is genuinely new about proactive AI.** Specify what makes proactive AI a delegation-automating technology in a way prior waves were not. The key feature is that the system operates without per-instance human authorization — it acts on its own initiative within a delegated scope. Prior automation operated on instruction; proactive AI operates on authorization.
5. **Engage Acemoglu & Johnson directly.** *Power and Progress* is the most relevant recent treatment and is partly aligned with the paper's claim (technology choice is political) and partly opposed (their frame treats AI as continuous with prior automation waves). Engage the disagreement explicitly.
6. **Generate falsifiable predictions.** The paper's claim that proactive AI is categorically different generates predictions: institutional adaptations will be slower than capability development; the institutional forms that adapt fastest will be those with prior experience of fast-cycle delegation (financial markets, military command); legal regimes will fragment along delegation-tolerant vs. delegation-restrictive lines. State these predictions and indicate what evidence would refute them.

### Target length
8,000–10,000 words.

### Target venue
*Journal of Economic Perspectives* (best fit — essay-friendly, broad audience, comparative-historical content welcome); *Daedalus*; *Research Policy* (if developed empirically rather than essayistically).

### Success criteria
- Sharp, defended definition of delegation
- Disciplined comparison across at least three prior automation waves, each treated with historical rigor
- Engagement with Acemoglu & Johnson that takes the disagreement seriously
- Explicit, falsifiable predictions
- Avoidance of the trap of reading as merely provocative — the comparative analysis must do the work

---

## Cross-cutting style and quality notes for all three papers

- **Single-spaced academic prose, not corporate writing.** Long paragraphs, complex sentences where complexity is warranted, footnotes for citations.
- **Engagement, not citation.** Every cited source should be engaged with at least once substantively — the citation should be doing work.
- **Counterarguments treated seriously.** Each paper should have a dedicated counterarguments section that treats at least three counterarguments as if they might be correct.
- **Conclusion that does work.** The conclusion should advance the argument, not summarize it. It should identify what the paper has established, what it has not, and what the next research move would be.
- **No corporate hedging.** Avoid phrases like "this paper attempts to," "I will argue," "in some sense." State claims declaratively.
- **References at least 25 entries each**, with real engagement (the paper should make clear, where relevant, which sources are central and which are background).
