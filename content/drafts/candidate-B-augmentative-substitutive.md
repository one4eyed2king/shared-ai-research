# Augmentative or Substitutive?
## A Constitutional Typology of State Artificial Intelligence

*A research paper*

---

## Abstract

The scholarly and policy debate over state deployment of artificial intelligence has matured around a familiar tripartite critique: algorithmic systems in government are insufficiently transparent, inadequately auditable, and disparately impactful. The remedies proposed — explanation requirements, impact assessments, procurement standards, algorithmic due process — share the implicit premise that all state AI deployments occupy a single normative category, distinguished from one another only by accuracy, transparency, and disparate impact. This paper argues that this premise is mistaken and that the failure to draw a categorical distinction *within* state AI is responsible for both the under-protection of citizens in some contexts and the over-restriction of beneficial deployments in others.

I propose a typological distinction between *augmentative* state AI — systems that extend the capacity of a human decision-maker while preserving the human as the locus of decision — and *substitutive* state AI — systems that displace the human decision-maker as the locus of decision, whether formally or functionally. The distinction is not engineering-internal. It is constitutional. Augmentative systems implicate the ordinary law of administrative rationality, professional competence, and tort. Substitutive systems implicate due process, non-delegation, and the procedural conception of democratic legitimacy. The two categories therefore call for fundamentally different regulatory regimes, litigation strategies, and design constraints.

The paper develops the typology formally, situates it in constitutional and administrative doctrine, and confronts its hardest case: the *nominal–functional gap* between systems that are described as advisory but operate substitutively in practice. I propose an empirical methodology — *override-rate analysis* combined with *deviation-cost analysis* — for distinguishing nominal from functional locus of decision, and I argue that the constitutional category should be assigned by functional rather than nominal classification. The paper closes with doctrinal implications for litigators, procurement officials, legislators, and agency designers.

---

## I. Introduction

In the spring of 2026, the inventory of state-deployed algorithmic systems in the United States alone includes systems that rank child welfare investigations by predicted risk, systems that allocate scarce social housing, systems that score the recidivism risk of criminal defendants for purposes of bail and sentencing, systems that triage immigration enforcement priorities, systems that flag unemployment insurance claims for fraud investigation, systems that match applicants to public benefits, systems that schedule the inspections of regulated industries, and — at the federal level — systems that draft routine correspondence, summarize public comments on proposed rulemakings, and surface relevant precedent for civil servants drafting regulatory analyses. The list is incomplete. It grows monthly. The federal government's published inventories of AI use cases doubled between 2023 and 2025 and are projected to double again by 2027.[^1]

[^1]: See OMB Memorandum M-25-12 (March 2025) and the 2025 update to the federal AI use case inventory under the Advancing American AI Act, Pub. L. No. 117-263 § 7224. The state-level inventory is more fragmented but compiled in a useful form by the AI Now Institute's 2025 *State Algorithmic Inventory Report*.

The literature on these systems has converged on a recognizable form of critique. The systems are opaque to the citizens they bind. They reproduce or amplify the inequities of the data they are trained on. They displace forms of professional judgment that, for all their flaws, were accountable through familiar legal and political channels. The remedies prescribed have been correspondingly familiar: transparency mandates, impact assessments, contestation procedures, procurement standards, and — most ambitiously — the development of an algorithmic-due-process doctrine that would extend the procedural protections of *Mathews v. Eldridge* to algorithmic decision-making.[^2]

[^2]: See Citron (2008); Crawford and Schultz (2014); Brauneis and Goodman (2018); Eubanks (2018); Pasquale (2015, 2020); Calo (2017). The most ambitious doctrinal development of algorithmic due process is in Citron (2008) and Citron and Pasquale (2014); the most thoroughgoing empirical critique is in Eubanks (2018).

The argument of this paper is that the critique and its remedies, however valuable, operate at the wrong level of generality. They treat "state AI" as a single normative kind, varying along axes of accuracy and transparency. But the most important variation among state AI systems is not technical. It is structural. It concerns the *locus of decision* — whether the decision that binds the citizen is, in any meaningful sense, made by a human official within an institutional structure of accountability, or whether it is made by a system whose outputs the official ratifies. Systems of the first kind I call *augmentative*. Systems of the second kind I call *substitutive*. The two categories implicate radically different bodies of law, generate radically different risks, and require radically different design constraints.

The distinction has been gestured at in the literature — Citron's distinction between automated and automating systems, Coglianese and Lehr's distinction between machine learning as a tool and machine learning as a decision-maker, the broader administrative-law conversation about sub-delegation — but it has not, to my knowledge, been developed as a categorical typology with constitutional consequences.[^3] That development is the contribution of this paper.

[^3]: Citron (2008) at 1252–53; Coglianese and Lehr (2017); Barocas and Selbst (2016). The administrative-law sub-delegation literature, e.g., Krent (1990) and Stack (2006), is concerned with delegation between human institutional actors and does not directly address algorithmic systems, though the doctrinal apparatus transfers in useful ways.

The argument proceeds in seven additional Parts. Part II surveys the state AI landscape and demonstrates its heterogeneity. Part III develops the augmentative/substitutive typology formally. Part IV argues that the distinction is constitutional, not merely policy-relevant, and grounds it in due process doctrine, the non-delegation principle, and the procedural conception of democratic legitimacy. Part V confronts the typology's hardest case — the gap between nominal and functional substitution — and proposes an empirical methodology for its resolution. Part VI develops doctrinal implications. Part VII addresses counterarguments. Part VIII concludes with an agenda for further work.

A note on scope. This paper is concerned with state AI — systems deployed by governmental actors to make or inform decisions that bind, benefit, or burden specific individuals. It is not concerned with state AI used for internal purposes that do not directly affect citizens (intra-agency knowledge management, procurement analytics, congressional staff drafting assistance), though some of its arguments transfer. It is also not concerned with private-sector AI, where the relevant accountability vocabulary is fiduciary rather than constitutional. The companion paper to this one — addressed in Part VIII — extends the analysis to private actors operating under quasi-state authority (utilities, regulated monopolies, sovereign-equivalent platforms).

## II. The State AI Landscape: Heterogeneity Within a Single Label

The heterogeneity of state AI deployments is obscured by the singular noun. Consider five systems, all of which are accurately described as "state AI" and which occupy structurally different positions in the typology this paper develops.

**System 1: Pittsburgh's Allegheny Family Screening Tool.** A predictive model that scores reports of suspected child maltreatment for likelihood of subsequent involvement with the child welfare system. The score is presented to a human screener, who decides whether to open an investigation. The model has been the subject of extensive empirical study (Chouldechova et al. 2018; Eubanks 2018; Vaithianathan et al. 2017), and the documented pattern is that screeners override the model in roughly 20% of cases but that overrides are themselves systematically structured by case characteristics.

**System 2: COMPAS and similar criminal-justice risk assessments.** Models that score criminal defendants for likelihood of re-offense or failure to appear, used at various points in pretrial and sentencing decisions. The scores are presented to judges, who retain formal authority over the decision. The Wisconsin Supreme Court's decision in *State v. Loomis* (2016) upheld the use of such scores subject to disclosure requirements, treating them as analogous to other risk factors that judges weigh.

**System 3: Michigan's MiDAS unemployment fraud system.** An algorithmic system deployed between 2013 and 2015 that flagged unemployment insurance claims as fraudulent and — in many cases — issued penalty determinations without meaningful human review. Subsequent litigation and investigation established that the system had a false positive rate exceeding 90% in its fraud determinations and that approximately 40,000 individuals were wrongly accused.[^4]

[^4]: See *Bauserman v. Unemployment Insurance Agency*, 503 Mich. 169 (2019); Michigan Auditor General Report 641-0590-16 (February 2016).

**System 4: Federal benefits-eligibility chatbots.** Conversational AI systems deployed by various federal agencies (initially HHS and SSA) to help citizens determine whether they qualify for benefits programs and to walk them through application procedures. The systems do not make eligibility determinations; they navigate the citizen toward the formal application process.

**System 5: GSA's contracting-precedent retrieval system.** An internal system deployed in 2024 that surfaces relevant contract clauses, past performance data, and precedent decisions for contracting officers drafting new procurements. The system makes no decisions; it improves the information environment in which contracting officers make decisions.

These five systems share the label "state AI" and very little else. System 5 raises no citizen-facing concerns at all and presents an essentially uncontroversial productivity gain. System 4 is citizen-facing but augments rather than substitutes for the citizen's own decision-making. System 1 is genuinely difficult: nominally augmentative, with documented but variable patterns of human override. System 2 is similar, with the additional complication of *Loomis*-style judicial supervision. System 3 was, by the end of its deployment, functionally substitutive despite being nominally advisory.

A regulatory regime that treats these five systems as occupying a common normative category will necessarily fail. It will either be calibrated to the worst case (System 3) and thereby over-restrict System 5, or calibrated to the average case and thereby under-restrict System 3. The categorical distinction the literature lacks is the distinction the regulatory regime requires.

## III. The Typology

### A. Formal Definition

Let a *state AI system* be any algorithmic system deployed by a governmental actor whose outputs inform or determine actions that bind, benefit, or burden specific individuals. For each such system, the *consequential decision* is the action by the state actor that produces a legal effect on the individual — the eligibility determination, the enforcement action, the bail decision, the inspection priority, the benefits award.

A state AI system is *augmentative* with respect to a consequential decision *D* if and only if:

1. (i) A human official is the formal decision-maker for *D*;
2. (ii) The official's deliberation includes consideration of information or analysis other than the system's output;
3. (iii) The official's deviation from the system's output is procedurally and professionally costless, or nearly so; and
4. (iv) The deviation rate, observed across decisions, is non-trivial and not concentrated in cosmetic categories.

A state AI system is *substitutive* with respect to *D* if and only if at least one of (i)–(iv) fails.

This definition is deliberately structured so that any failure on the substitutive side — formal, informational, procedural, or empirical — moves the system into the substitutive category. The reason for this asymmetry is that the constitutional concerns implicated by substitution attach to *any* meaningful displacement of the human decision-locus, and the burden of demonstrating that a system is genuinely augmentative ought to rest on the deployer.

### B. The Four-Cell Matrix

Cross-cutting the augmentative/substitutive distinction is a second dimension: whether the consequential decision is itself *consequential* in the constitutional sense — whether it implicates a protected interest (life, liberty, property, statutory entitlement) for which procedural protections attach. This produces a four-cell matrix:

|                | **Augmentative**                | **Substitutive**                |
| -------------- | ------------------------------- | ------------------------------- |
| **Consequential decision** | Cell 1: Constitutional but tractable | Cell 2: Constitutional and acute |
| **Non-consequential decision** | Cell 3: Negligible concern | Cell 4: Risks of category creep |

Cell 1 contains systems like Allegheny's screening tool: the underlying decision (whether to investigate a family) is constitutionally consequential, but the system is augmentative. The constitutional concerns here are real but tractable through familiar means — disclosure, audit, professional supervision of human deciders.

Cell 2 contains systems like Michigan's MiDAS: the underlying decision (whether to assess a fraud penalty against an unemployment claimant) is constitutionally consequential, and the system is substitutive. The constitutional concerns here are not merely real but acute, implicating procedural due process at its core.

Cell 3 contains systems like GSA's precedent-retrieval tool: the underlying activity is not consequential in the constitutional sense and the system is augmentative. Concerns are negligible.

Cell 4 contains systems that are substitutive but operate on decisions not currently understood as consequential — say, an internal triage system that determines which citizen complaints reach a human reviewer. The concern here is *category creep*: today's non-consequential decision becomes tomorrow's de facto consequential one when the system's gatekeeping function determines whether anything happens at all.

The matrix is heuristic. The work of the typology happens primarily in Cell 2, where constitutional doctrine bites most directly, but Cell 4 is where the typology's predictive value is greatest, because it identifies a category of risk that current legal frameworks systematically miss.

### C. Why Locus, Not Accuracy, Is the Right Dimension

The dominant academic and policy framing of state AI has emphasized accuracy, bias, and transparency. These are real concerns. But they are not the deepest concerns, for two reasons.

First, accuracy is a moving target and a partial answer. An accurate system can still implicate constitutional concerns if it forecloses contestation, individualization, or the kind of moral judgment that some legal decisions are constitutively understood to require. A perfectly accurate sentencing algorithm would still, on a serious view of due process, fail to honor the defendant's claim to be judged as a person rather than as a statistical instance.

Second, accuracy and locus are independent dimensions. A substitutive system can be accurate (and is then constitutionally suspect for non-accuracy-related reasons). An augmentative system can be inaccurate (and the human decision-maker can compensate). The literature's focus on accuracy collapses these dimensions and produces remedies — audit, impact assessment — that address the second-order problem while leaving the first-order problem unaddressed.

The locus framing inverts this. By making the question "who is the decision-maker?" rather than "how good is the system?," it returns the analysis to the question that constitutional doctrine actually asks. Due process does not require an accurate decision-maker. It requires a *decision-maker*, exercising judgment within an institutional structure of accountability.

## IV. Why the Distinction Is Constitutional

The argument that the augmentative/substitutive distinction is constitutional, rather than merely policy-relevant, rests on three doctrinal foundations: procedural due process, the non-delegation principle as it operates in administrative law, and the procedural conception of democratic legitimacy that undergirds both.

### A. Procedural Due Process

The *Mathews v. Eldridge* framework asks what process is due in any state action that deprives an individual of a protected interest. The three-factor balance — private interest, risk of erroneous deprivation under existing procedures, and government interest including fiscal and administrative burden — has been the workhorse of procedural due process analysis for nearly fifty years.[^5]

[^5]: *Mathews v. Eldridge*, 424 U.S. 319 (1976). The framework's application to algorithmic systems has been theorized at length in Citron (2008), Crawford and Schultz (2014), and Calo and Citron (2021).

A central insight of *Mathews* is that the procedures required by due process are not constants. They depend on what the decision is. For decisions characterized by individualized assessment of human circumstance — eligibility for disability benefits, parental fitness, criminal culpability — the *Mathews* balance has historically required some form of human deliberation, with the opportunity for the affected individual to present their case to a person empowered to weigh it. This is not an accidental feature of the doctrine. It reflects a deep commitment in due process theory to the proposition that decisions of certain kinds *must* be made by deliberating humans because the decision is constituted by the deliberation.[^6]

[^6]: This is the burden of Fuller's (1964) account of the morality of law, and it animates Habermas's (1996) procedural theory of legitimacy. For a contemporary application to algorithmic systems, see Solove (2021).

A substitutive system, by definition, displaces the deliberating human as the locus of decision. The system's output is not weighed alongside other information by a person who could decide otherwise; it is ratified by an actor whose deviation is costly, infrequent, or both. The *Mathews* balance, applied to a substitutive system, does not simply ask whether the system is accurate. It asks whether the procedure — the procedure now constituted by the system's output and its human ratification — is one that comports with due process given the interest at stake.

For consequential decisions, the answer is increasingly likely to be no. The cases moving through the federal courts on automated benefits termination, automated fraud assessment, and automated eligibility determination are, in significant part, working out this question.[^7] The augmentative/substitutive typology offers a doctrinally clean way to organize these cases: substitutive systems applied to consequential decisions are presumptively constitutionally suspect; augmentative systems applied to the same decisions are subject to the ordinary *Mathews* analysis, with the system's role as one factor.

[^7]: See *K.W. v. Armstrong*, 789 F.3d 962 (9th Cir. 2015) (Idaho Medicaid waiver algorithm); *Barry v. Lyon*, 834 F.3d 706 (6th Cir. 2016) (Michigan automated benefits termination); *Bauserman*, supra note 4.

### B. The Non-Delegation Principle in Administrative Law

The constitutional non-delegation doctrine — the principle that Congress may not delegate its lawmaking authority to other branches or to private actors — has had a famously variable career.[^8] More relevant here is the sub-constitutional version of the principle that operates within administrative law: the rule against improper sub-delegation by agencies, the rule against delegation of governmental functions to private actors without statutory authorization, and the *Chenery* requirement that agency action be supported by the agency's own contemporaneous reasoning.[^9]

[^8]: For the current state of the doctrine, see *Gundy v. United States*, 588 U.S. ___ (2019) (Gorsuch, J., dissenting).
[^9]: See *U.S. Telecom Ass'n v. FCC*, 359 F.3d 554 (D.C. Cir. 2004); *SEC v. Chenery Corp.*, 318 U.S. 80 (1943).

A substitutive AI system raises sub-delegation concerns on three fronts. First, when the system is procured from a private vendor, the displacement of the agency decision-maker by the vendor's system is a delegation of governmental decisional authority to a private actor. This is not necessarily impermissible — agencies have always relied on private contractors for analytic inputs — but it is delegation, and it requires the statutory authorization that delegation requires. Second, *Chenery* requires that agency action be supported by the agency's own reasoning at the time of action. A substitutive system whose internal reasoning is opaque to the agency cannot satisfy *Chenery* in the strong sense, because the agency cannot articulate its own basis for the action it has taken. Third, where the relevant statute requires the agency to exercise judgment — the language of "the Secretary shall consider," "in the Secretary's discretion," "after such investigation as the Secretary deems necessary" — a substitutive system removes the locus of judgment from the actor the statute identifies.

None of these doctrines was developed with algorithmic systems in mind. All of them transfer. The augmentative/substitutive typology is precisely the typology these doctrines are already asking us to apply: they distinguish between tools that inform agency reasoning and processes that replace it.

### C. The Procedural Conception of Legitimacy

Beneath both *Mathews* and the non-delegation doctrines lies a deeper commitment that operates throughout liberal democratic constitutional theory: the proposition that the legitimacy of state action is procedural, not epistemic. A state action does not become legitimate by being correct. It becomes legitimate by being the output of a procedure recognized as legitimate. Conversely, a state action does not become illegitimate by being incorrect — it becomes illegitimate by being the output of a procedure that does not honor the conditions of legitimate state action.

This commitment is not unanimous in political theory. There is a respectable epistemic conception of legitimacy (Estlund 2008) on which correctness does some work. But the dominant liberal tradition — running from Fuller through Habermas to contemporary work on deliberative democracy — places procedure at the center. The deep significance of the augmentative/substitutive distinction is that it tracks this procedural commitment. Augmentative systems are inputs into a procedure that retains the structure required for legitimacy. Substitutive systems displace the procedure with something else. They may displace it with something *more accurate*; they may not displace the procedural legitimacy that the displaced procedure carried.

This argument does not entail that substitutive systems are always or even usually illegitimate. It entails that their legitimacy is not delivered by their accuracy and must be argued for on different grounds — typically, that the underlying decision is not one for which procedural legitimacy is constitutive (an inventory routing decision is the canonical example) or that the displaced procedure has been replaced by a new procedure that itself satisfies the conditions of legitimate state action. The second move is harder than it appears and is where most of the genuine difficulty lies.

## V. The Nominal–Functional Problem

The augmentative/substitutive typology presents a clean conceptual distinction. Its application is harder. The hardest case — and the one on which the typology's practical value depends — is the system that is nominally augmentative but functionally substitutive: the recommendation system whose recommendations are almost never overridden, the risk score that the judge "considers" but on which the judge invariably relies, the eligibility flag that the caseworker "reviews" but almost never disturbs. The literature on automation bias and decision support systems has documented this pattern across domains.[^10] It is the central empirical problem the typology must solve.

[^10]: See Skitka, Mosier, and Burdick (1999, 2000); Goddard, Roudsari, and Wyatt (2012). For application to algorithmic decision-making in legal contexts, see Green and Chen (2019); Albright (2019).

The temptation is to address this problem by tightening the definition of "augmentative" to exclude systems with low override rates. The temptation should be resisted. Override rate alone is a poor diagnostic. A system with a low override rate may be functioning exactly as designed — providing recommendations that humans correctly identify as right — and conflating this with substitution would condemn well-functioning augmentative systems. What is needed is a diagnostic that distinguishes *low override because the system is right* from *low override because deviation is costly or unsupported*.

I propose a two-part empirical methodology.

### A. Override-Rate Analysis

The first component is descriptive. For any nominally augmentative system, the relevant data are:

1. The aggregate override rate (proportion of cases in which the human deciders' action departs from the system's recommendation);
2. The override rate stratified by case characteristics (does override concentrate in certain types of cases, suggesting genuine human judgment, or is it scattered, suggesting noise?);
3. The override rate stratified by decider characteristics (is override concentrated in certain deciders, suggesting institutional non-compliance, or distributed?);
4. The longitudinal trend in override rate (does it decrease over time, suggesting acclimation and increasing automation bias?).

A system whose override rate is low, scattered, and decreasing over time is presumptively functionally substitutive whatever its nominal status. A system whose override rate is low but structured, decider-distributed, and stable is presumptively functionally augmentative.

### B. Deviation-Cost Analysis

The second component is structural and is the more important of the two. It asks: what are the costs to the human decider of deviating from the system's recommendation? The relevant costs include:

1. *Documentary cost*: must the decider justify the deviation in writing? At what length and detail?
2. *Supervisory cost*: are deviations subject to additional supervisory review that non-deviations are not?
3. *Performance-evaluation cost*: do deviations affect the decider's evaluation, particularly when the deviated-from recommendation is later vindicated by outcomes?
4. *Liability cost*: does deviation create personal or professional exposure if the decision turns out poorly?
5. *Cognitive cost*: does the system's interface make agreement easy and deviation effortful?

A system in which deviation is documentarily, supervisorily, professionally, or cognitively costly has structured the decider's environment so that the system's recommendation operates as a default carrying weight greater than its informational content. The decider may nominally have authority to deviate; functionally, deviation is sanctioned. Such a system is substitutive in the relevant sense, and the constitutional analysis should follow.

### C. The Functional Classification Rule

I propose, accordingly, the following rule. A nominally augmentative state AI system shall be classified as functionally substitutive — and subject to the constitutional regime applicable to substitutive systems — if either (a) override-rate analysis shows that override is low, scattered, and not decreasing over time at deployment, or (b) deviation-cost analysis shows that the institutional environment imposes documentary, supervisory, professional, or cognitive costs on deviation that exceed the costs on agreement.

The rule is presumption-shifting rather than dispositive. A deployer can rebut the presumption by showing, for instance, that override is low because the system is exceptionally well-calibrated to genuine consensus determinations (the augmentative-by-accuracy defense) or that deviation-cost is high for reasons unrelated to the system's deployment (the institutional-baseline defense). But the presumption matters because, as I have argued in Part III, the burden of demonstrating genuine augmentation should rest on the deployer.

The empirical research program implied by this rule is substantial. Each deployed nominally augmentative state AI system requires ongoing instrumentation to support the analyses described above. The data so generated should be publicly available in standardized form. Several jurisdictions have begun moving in this direction;[^11] this paper offers the doctrinal motivation for completing the move.

[^11]: New York City's algorithmic transparency efforts, the state of Washington's algorithmic accountability law (Wash. Rev. Code §§ 43.105.450 et seq.), and the EU AI Act's high-risk system documentation requirements all gesture in this direction. None yet operationalizes deviation-cost analysis in the form proposed here.

## VI. Doctrinal Implications

The typology, if accepted, generates concrete implications for litigators, agencies, legislators, and the institutional designers of state AI deployments.

### A. For Litigators

The most direct litigation implication is that challenges to state AI systems should be framed as locus-of-decision challenges rather than (or in addition to) accuracy challenges. The complaint should allege that the system, properly classified as functionally substitutive, has displaced the decision-maker identified in the governing statute, has rendered the *Mathews* balance impermissible because the procedure no longer comports with due process given the interest at stake, or has effected a sub-delegation impermissible under the relevant administrative-law principles. These framings have the advantage of being constitutionally clean, of resting on doctrines with established remedial vocabulary, and of avoiding the trap of accuracy litigation — which puts the plaintiff in the position of arguing about the system's performance characteristics rather than its institutional role.

Plaintiffs' counsel should also seek discovery oriented to the empirical methodology in Part V: override rates, override structure, deviation-cost analysis. The factual record so developed will frequently determine the case.

### B. For Agencies

Agencies deploying or considering AI systems should organize their analysis around the typology. The deployment of a Cell 3 system (non-consequential, augmentative) requires no significant new procedural apparatus. The deployment of a Cell 1 system (consequential, augmentative) requires attention to the conditions that preserve augmentative character — particularly the deviation-cost environment — and instrumentation sufficient to support the empirical analysis the typology requires. The deployment of a Cell 2 system (consequential, substitutive) is a constitutionally significant act and should be undertaken only with explicit statutory authorization, a procedure designed to satisfy the *Mathews* balance, and an articulated reason why substitution is consistent with the legitimacy conditions that previously attached to the displaced procedure.

Most importantly, agencies should resist the practice of *nominal augmentation as cover for functional substitution*. The legal and political exposure of deploying a substitutive system without the procedural apparatus that substitution requires is substantially greater than the apparent convenience of describing the system as advisory. The empirical methodology of Part V, if it becomes standard, will render such cover increasingly untenable.

### C. For Legislators

The legislative implications run in two directions. First, statutory clarity is required about whether a given delegation contemplates substitutive or augmentative AI deployment. Most current authorizing statutes are silent on this question because they predate the relevant systems. Legislative clarification — affirming substitutive deployment where intended, prohibiting it where not — would resolve much of the present doctrinal uncertainty. Second, an empirical infrastructure is required: standardized reporting of override rates, deviation-cost analysis, and outcome data for nominally augmentative deployments, with the data published in machine-readable form to support the academic and advocacy analysis the typology presupposes.

The federal Advancing American AI Act and the proposed Algorithmic Accountability Act provide the legislative vehicles for both moves. The typology developed here offers a framework for organizing those acts' use-case taxonomies and reporting requirements around the constitutionally salient distinction.

### D. For Institutional Designers

The most important implication for institutional designers — those building the systems and those building the agency processes in which the systems are embedded — is that the augmentative character of a system is a property of the institutional environment, not of the system in isolation. The same model, deployed with low documentary cost on deviation, distributed supervisorial review, and an interface that presents the recommendation as one input among many, may be augmentative. The same model, deployed with high documentary cost, centralized review, and an interface that presents the recommendation as the decision, will tend toward substitution regardless of designer intent. The augmentative deployment is not the default. It requires sustained institutional commitment, and the deviation-cost environment is the load-bearing element of that commitment.

## VII. Counterarguments

### A. Capability Will Resolve It

A first counterargument holds that the typology may be useful in the present transitional period but will be obsoleted by improvements in model capability. As systems become more accurate, this argument runs, the legitimacy concerns recede and the substitutive deployment becomes acceptable.

This counterargument misunderstands the argument. The constitutional concerns implicated by substitution do not derive from inaccuracy. They derive from the displacement of the procedural form of decision-making that constitutes legitimacy under a procedural conception. A perfectly accurate substitutive system is no less substitutive than an inaccurate one and is constitutionally suspect for the same reasons. Capability does not address the locus question; it addresses a different question entirely.

The counterargument has more force on an epistemic conception of legitimacy. But the epistemic conception is the minority view in the relevant legal and political-theoretic tradition, and it has never been a sufficient basis for state action in the American constitutional order. *Correctness* has never been the ground of constitutional permissibility.

### B. Augmentation Is Just Slow-Motion Substitution

A second counterargument holds that the augmentative/substitutive distinction is unstable: that augmentative systems inevitably drift toward functional substitution as users acclimate, as institutional incentives accumulate around the system's recommendations, and as the cost of deviation grows. On this view, all augmentative deployments are substitutive deployments with a delay, and the typology offers false comfort to deployers of consequential systems.

This counterargument has empirical force. The literature on automation bias, on bureaucratic accommodation, and on institutional inertia all support the prediction that augmentative deployments will tend, absent active resistance, toward functional substitution. The typology does not deny this; it identifies it as the central practical problem and proposes a methodology — the deviation-cost analysis of Part V — designed precisely to detect and address the drift.

The right reading of the counterargument is therefore not that the typology is false but that maintaining the augmentative character of a deployment requires sustained institutional work. This is true. The implication is not that the typology should be abandoned but that augmentative deployment of consequential systems should be undertaken with an honest accounting of the institutional commitments it requires and a willingness to terminate the deployment if those commitments cannot be sustained.

### C. Other Typologies Do This Work

A third counterargument holds that the augmentative/substitutive distinction is not novel — that existing typologies (decision-support vs. decision-making, advisory vs. determinative, recommender vs. arbiter) capture the same ground. There is something to this. The vocabulary varies; the underlying distinction has been gestured at.

The contribution of this paper is to develop the distinction with the rigor required for constitutional analysis: to define it formally, to ground it in due process and non-delegation doctrine, to address the nominal–functional gap that has frustrated prior versions of the distinction, and to propose an empirical methodology that operationalizes the distinction in a way that can survive litigation discovery and appellate review. Prior typologies have been useful starting points; the constitutional work has not been done.

### D. Federalism Complications

A fourth counterargument is that the typology, even if sound at the federal level, cannot be uniformly applied across the fifty states. State constitutions vary, state administrative-law doctrines vary, and state procurement practices vary. A typology developed against the federal background will misfire in some state contexts.

The federalism objection is partly correct and partly answerable. It is correct that the *implementation* of the typology will vary by jurisdiction: which decisions count as consequential, what process is due, how non-delegation doctrines operate. It is correct that some states will incorporate the typology into their administrative-procedure acts more readily than others, and some state courts will adopt locus-of-decision framings more readily than others. But the underlying distinction is general. It tracks the procedural conception of legitimacy that is common (with variation) to all American jurisdictions and to the broader liberal-democratic tradition. The federalism objection is a reason to develop the typology with attention to state-by-state variation, not a reason to abandon it.

## VIII. Conclusion: An Agenda

This paper has argued that the augmentative/substitutive distinction is the right primary axis for constitutional analysis of state AI; that the distinction rests on procedural due process, non-delegation, and the procedural conception of democratic legitimacy; that the hardest case — the nominal–functional gap — is tractable through override-rate and deviation-cost analysis; and that the doctrinal implications run across litigation, agency practice, legislation, and institutional design.

Three lines of further work are most urgent. The first is empirical: instrumentation of deployed state AI systems sufficient to support override-rate and deviation-cost analysis at scale, and a research community capable of conducting that analysis with the rigor the constitutional question requires. The second is doctrinal: development of the typology's specific applications to particular bodies of law — disability adjudication, criminal justice risk assessment, immigration triage, child welfare screening — each of which has its own statutory framework and its own procedural conventions that the typology must engage. The third is comparative: extension of the analysis to non-American contexts where the procedural conception of legitimacy operates differently and where state AI deployment is, in some cases, more advanced than in the United States. The European Union's AI Act, Singapore's Model AI Governance Framework, and Canada's Directive on Automated Decision-Making each provide regulatory infrastructures within which a version of the augmentative/substitutive typology could operate. Whether they do, and what the typology must look like to operate within each, is a question this paper leaves open.

A final observation. The state AI deployments that have been most institutionally damaging — MiDAS in Michigan, the Robodebt scheme in Australia, the Dutch SyRI system — share a feature: they were *described* by the deploying agencies as augmentative and were *operated* as substitutive. The gap between description and operation was the proximate cause of the harm and the legal liability that followed. The argument of this paper is that the gap is not a regrettable accident of particular deployments. It is the predictable consequence of a doctrinal framework that lacks the conceptual vocabulary to require deployers to honor the description with which they claim legitimacy. The typology developed here is, in part, an attempt to supply that vocabulary. The remaining work is to put it to use.

---

## References

Albright, A. (2019). "If You Give a Judge a Risk Score: Evidence from Kentucky Bail Decisions." Harvard John M. Olin Discussion Paper.

Barocas, S., and Selbst, A. (2016). "Big Data's Disparate Impact." *California Law Review* 104.

Brauneis, R., and Goodman, E. (2018). "Algorithmic Transparency for the Smart City." *Yale Journal of Law and Technology* 20.

Calo, R. (2017). "Artificial Intelligence Policy: A Primer and Roadmap." *UC Davis Law Review* 51.

Calo, R., and Citron, D. (2021). "The Automated Administrative State: A Crisis of Legitimacy." *Emory Law Journal* 70.

Chouldechova, A., Benavides-Prado, D., Fialko, O., and Vaithianathan, R. (2018). "A Case Study of Algorithm-Assisted Decision Making in Child Maltreatment Hotline Screening Decisions." *Proceedings of the 1st Conference on Fairness, Accountability, and Transparency*.

Citron, D. (2008). "Technological Due Process." *Washington University Law Review* 85.

Citron, D., and Pasquale, F. (2014). "The Scored Society: Due Process for Automated Predictions." *Washington Law Review* 89.

Coglianese, C., and Lehr, D. (2017). "Regulating by Robot: Administrative Decision Making in the Machine-Learning Era." *Georgetown Law Journal* 105.

Crawford, K., and Schultz, J. (2014). "Big Data and Due Process: Toward a Framework to Redress Predictive Privacy Harms." *Boston College Law Review* 55.

Estlund, D. (2008). *Democratic Authority: A Philosophical Framework*. Princeton.

Eubanks, V. (2018). *Automating Inequality*. St. Martin's.

Fuller, L. (1964). *The Morality of Law*. Yale.

Goddard, K., Roudsari, A., and Wyatt, J. (2012). "Automation Bias: A Systematic Review of Frequency, Effect Mediators, and Mitigators." *Journal of the American Medical Informatics Association* 19.

Green, B., and Chen, Y. (2019). "Disparate Interactions: An Algorithm-in-the-Loop Analysis of Fairness in Risk Assessments." *Proceedings of the Conference on Fairness, Accountability, and Transparency*.

Habermas, J. (1996). *Between Facts and Norms*. MIT.

Krent, H. (1990). "Fragmenting the Unitary Executive: Congressional Delegations of Administrative Authority Outside the Federal Government." *Northwestern University Law Review* 85.

Pasquale, F. (2015). *The Black Box Society*. Harvard.

Pasquale, F. (2020). *New Laws of Robotics*. Belknap.

Skitka, L., Mosier, K., and Burdick, M. (1999). "Does Automation Bias Decision-Making?" *International Journal of Human-Computer Studies* 51.

Skitka, L., Mosier, K., and Burdick, M. (2000). "Accountability and Automation Bias." *International Journal of Human-Computer Studies* 52.

Solove, D. (2021). "Algorithmic Decision-Making and the Problem of Black Boxes." Article in progress.

Stack, K. (2006). "The Statutory President." *Iowa Law Review* 90.

Vaithianathan, R., Maloney, T., Putnam-Hornstein, E., and Jiang, N. (2017). "Predicting Risk of Adverse Childhood Experiences." *American Journal of Public Health* 107.
