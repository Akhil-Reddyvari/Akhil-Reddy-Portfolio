export const PROFILE = {
  name: "Reddyvari Akhil Reddy",
  shortName: "Akhil Reddy",
  role: "Aspiring Associate Product Manager",
  tagline: "I turn ambiguous problems into products people love.",
  objective: "Final-year B.Tech student in AI & Data Science at Amrita Vishwa Vidyapeetham, Bengaluru — building technology-driven products by translating ambiguous problems into product concepts, gathering stakeholder feedback, and iterating on solutions grounded in real user needs.",
  email: "reddyvariakhil0@gmail.com",
  phone: "+91 81796 50885",
  location: "Bengaluru, India",
  github: "https://github.com/Akhil-Reddyvari",
  linkedin: "https://www.linkedin.com/in/akhil-reddyvari",
  availability: "Open to APM / PM roles — 2026",
};

export const CASE_STUDIES = [
  { id: "concord-zerodha", index: "01", title: "Concord", tagline: "A consensus layer for group travel — because trips don't fail on booking, they fail on agreeing.", category: "Product Strategy · Agentic AI", year: "2026", summary: "My entry for Zerodha's The Great Rewiring Challenge 2026: a full product strategy for an AI agent that helps groups of travellers make fair, adaptable decisions — before any booking ever happens.", highlights: ["Zerodha · The Great Rewiring Challenge 2026", "MoSCoW-scoped MVP", "North Star: decisions reaching group approval"], links: [{ label: "Full case study PDF", href: "/assets/concord-case-study.pdf" }], sections: [
    { key: "problem", label: "The Problem", body: "Group trips are planned through a chaotic mix of chats, spreadsheets and half-finished polls. Travel products are built for single decision-makers — yet most travel happens in groups with conflicting budgets, schedules and preferences.", bullets: ["Plans fall apart when circumstances change, because renegotiating is socially costly — outdated plans win by default.", "The real problem isn't agreement; it's hidden constraints, decision fatigue and painful renegotiation."] },
    { key: "users", label: "Target Users", bullets: ["Groups of 3–8 friends who need diverse budgets, schedules and interests combined without one person carrying the load.", "Families & multigenerational groups needing a fair process across comfort levels, mobility and priorities.", "The informal trip organizer — the primary MVP persona, with the most acute pain and natural distribution power."] },
    { key: "research", label: "Research & Insights", body: "Discovery was grounded in personal travel experience and structured conversations with friends and family — directional signals to be validated with formal interviews.", bullets: ["The hardest part of group travel isn't the initial agreement — it's the renegotiation when things change.", "People publicly agree in group chats while privately dissatisfied; real budgets are rarely disclosed upfront.", "Agentic AI finally makes private, constraint-aware negotiation feasible — beyond simple polling tools."] },
    { key: "solution", label: "Proposed Solution", body: "Concord is a consensus layer for group travel — it builds the decision layer before the booking layer.", bullets: ["Understands — privately collects preferences, constraints, budgets and non-negotiables.", "Identifies — detects conflicts, missing information and decisions needing the group's attention.", "Facilitates — presents feasible options and explains trade-offs in plain language.", "Adapts — reopens only the affected decisions when real-world plans change."] },
    { key: "mvp", label: "MVP Scope", bullets: ["Must have — trip room, invitations, private preference capture, shared decision space, conflict detection, feasible options, approvals and decision history.", "Should have — reminders, deadlines, unresolved-decision dashboard, optional voice input and permission controls.", "Explicitly not in v1 — fully autonomous booking, open-ended spending and automatic compromise selection."] },
    { key: "metrics", label: "Success Metrics", bullets: ["North Star — share of initiated trip decisions that reach full group approval within the group's own deadline.", "Activation — invited travellers completing private preference capture within 48 hours.", "Core value — time to consensus per decision and organizer workload reduction.", "Trust & safety — zero privacy incidents and perceived-fairness score from post-trip surveys."] },
    { key: "next", label: "Next Steps", bullets: ["Structured discovery interviews to validate the sharpness of the renegotiation pain.", "Prototype private preferences, conflict explanations, option comparison and consensus checkpoints.", "Concierge MVP — support real trips with human-assisted coordination to observe conflict patterns."] },
  ] },
  { id: "ai-personal-stylist", index: "02", title: "StyleMate — AI Personal Stylist", tagline: "Helping college students answer 'what do I wear today?' from the wardrobe they already own.", category: "Product Development · Recommendation Systems", year: "2026", summary: "Identified a daily decision-fatigue problem on campus, then designed and built an AI-powered product that generates personalized outfit recommendations from a user's own wardrobe — end to end, from problem definition to working APIs.", highlights: ["0 → 1 product build", "Custom outfit-scoring framework", "Python · FastAPI · MongoDB"], links: [{ label: "GitHub repository", href: "https://github.com/Akhil-Reddyvari/StyleMate---AI-Powered-Personal-Wardrobe-and-Outfit-Recommendation-System" }], sections: [
    { key: "problem", label: "The Problem", body: "College students stand in front of full wardrobes every morning and still feel they have 'nothing to wear'. The issue isn't a lack of clothes — it's decision fatigue: no easy way to combine what they own into outfits that fit the occasion, the weather and their style." },
    { key: "research", label: "Research & Insights", bullets: ["The problem was identified through campus observation and peer conversations — the same frustration recurred daily.", "Most wardrobes are under-utilized: a small rotation of safe outfits repeats while most items go untouched.", "Users think in occasions, not in individual clothing items."] },
    { key: "solution", label: "Proposed Solution", body: "An AI-powered personal stylist that digitizes your wardrobe, understands each item's attributes, and generates ranked outfit combinations personalized to the occasion.", bullets: ["Wardrobe creation with color, type, formality and season attributes.", "Outfit generation from the user's actual wardrobe.", "Recommendation ranking with a transparent scoring framework."] },
    { key: "prioritization", label: "Prioritization — the Scoring Framework", bullets: ["Color harmony", "Styling consistency", "Occasion suitability", "Footwear compatibility", "Wardrobe usage — nudging under-used items back into rotation."] },
    { key: "feasibility", label: "Technical Feasibility", body: "Built backend services in Python with FastAPI and MongoDB to manage wardrobe data and expose recommendation workflows through REST APIs — a stack chosen for rapid iteration and clean separation between the scoring engine and any future client app." },
    { key: "outcomes", label: "Outcomes & Learnings", bullets: ["Shipped a working backend covering wardrobe data, outfit generation and recommendation ranking over REST APIs.", "Transparent, explainable ranking beat opaque AI magic in user trust.", "The hardest part wasn't the algorithm — it was defining 'good taste' as a measurable product decision."] },
  ] },
  { id: "vibewinn", index: "03", title: "VIBEWINN", tagline: "A market exploration that ended in the right decision: pivoting the product.", category: "Product Discovery · Market Research", year: "2025", summary: "A ground-up product & market exploration: segment-by-segment client interviews, problem-solution fit assessment, and the evidence-based pivot from paper-bag advertising to Smart Fit Frames.", highlights: ["20–30 client conversations per segment", "Evidence-driven pivot", "Problem-solution fit analysis"], links: [], sections: [
    { key: "problem", label: "The Problem", body: "VIBEWINN began with a hypothesis: local businesses needed new, high-visibility advertising surfaces, and paper-bag advertising could be one. Before building anything, the goal was to find out whether the problem was real, who felt it most, and whether our concept actually solved it." },
    { key: "research", label: "Research Approach", bullets: ["Conducted market research and engaged 20–30 potential clients per segment to understand customer needs, assess demand and identify recurring pain points.", "Treated every conversation as a test of the hypothesis — not a sales pitch.", "Synthesized stakeholder feedback to evaluate problem-solution fit honestly."] },
    { key: "decision", label: "The Product Decision", body: "Supported a product pivot toward Smart Fit Frames, grounded in customer feedback and the market opportunities identified during research. The pivot wasn't a failure of the original idea — it was the research working exactly as intended." },
    { key: "outcomes", label: "Outcomes & Learnings", bullets: ["Fall in love with the problem, not the first solution — willingness to pivot is a product skill, not a setback.", "Small, structured samples surface recurring pain fast when you listen for patterns.", "Stakeholder feedback only creates value when it's synthesized into a decision."] },
  ] },
  { id: "healthcare-recommendation", index: "04", title: "Healthcare Recommendation System", tagline: "Turning raw symptoms into interpretable, trustworthy health guidance.", category: "ML Product · Decision Support", year: "2024", summary: "A machine-learning decision-support prototype that maps user-reported symptoms to probable disease categories — designed end to end around one principle: a recommendation nobody understands is a recommendation nobody trusts.", highlights: ["Explainability-first design", "End-to-end workflow design", "Python · ML classification"], links: [{ label: "GitHub repository", href: "https://github.com/Akhil-Reddyvari/healthcare-recommendation-system" }], sections: [
    { key: "problem", label: "The Problem", body: "People searching symptoms online face two bad outcomes: alarming worst-case answers, or opaque model outputs they can't judge. Healthcare guidance is only useful if a layperson can understand why it's being given." },
    { key: "solution", label: "Proposed Solution", body: "A machine-learning-based decision-support prototype that maps user-reported symptoms to probable disease categories, then presents the output as interpretable recommendations rather than black-box predictions." },
    { key: "flow", label: "Product Workflow", bullets: ["User input — structured capture of reported symptoms.", "Preprocessing — cleaning and encoding inputs for the model.", "Model inference — classification into probable disease categories.", "Recommendation output — evaluated, interpretable results the user can act on."] },
    { key: "metrics", label: "Success Metrics", bullets: ["Model accuracy across disease categories.", "Interpretability — whether users can state why a recommendation was made.", "Output evaluation against structured data."] },
    { key: "outcomes", label: "Outcomes & Learnings", bullets: ["Delivered a working prototype covering the full flow from symptom input to interpretable recommendation.", "In high-stakes domains, trust is the product — accuracy without explainability doesn't ship."] },
  ] },
];

export const TEARDOWNS = [
  { title: "Duolingo — The Psychology of Streaks", focus: "Retention loops & behavioral UX", insight: "Loss aversion, streak freezes and perfectly-timed guilt notifications keep D30 retention high. The lesson: the best retention mechanic is one users would defend in your place." },
  { title: "Notion AI — In-Context Generation", focus: "AI interaction design", insight: "AI that lives inside the canvas beats AI that lives in a sidebar. Trigger discovery, streaming responses and accept/reject micro-decisions make generation feel like collaboration." },
  { title: "Zerodha Kite — Trust Through Restraint", focus: "Information density in high-stakes UI", insight: "Zero clutter, instant execution and no dark patterns — in a product handling people's money, restraint is the feature. Every removed element is a deposit in the trust account." },
];
export const SKILL_GROUPS = [
  { title: "Product", items: ["Product Development", "Product Discovery", "User-Centric Problem Solving", "Rapid Prototyping", "Problem Prioritization"] },
  { title: "Analytics", items: ["SQL", "Data Analysis", "Exploratory Data Analysis", "Statistical Analysis", "Data Interpretation"] },
  { title: "Engineering Fluency", items: ["Python", "Java", "FastAPI", "REST APIs", "MongoDB", "API Integration"] },
  { title: "Machine Learning", items: ["Recommendation Systems", "Classification", "Feature Engineering", "Model Evaluation"] },
  { title: "Methods & Tools", items: ["Agile", "Scrum", "SDLC", "Git & GitHub", "Jupyter / Colab", "Excel & Sheets"] },
];
export const CERTIFICATIONS = [
  { title: "Project Management Assessment", issuer: "LearnTube.ai", date: "July 2026", id: "DJA-B-1-2811097-0", href: "/assets/project-management-certificate.pdf" },
  { title: "Machine Learning Assessment", issuer: "LearnTube.ai", date: "July 2026", id: "DJA-B-1-2851595-0" },
];
export const LEADERSHIP = [
  { title: "Tournament Organizer", body: "Organized and managed local cricket tournaments end to end — coordinating teams, schedules, logistics and live event execution. Stakeholder management with real stakes and no undo button." },
  { title: "College Cricket Team", body: "Active member of the college cricket team — teamwork, collaboration and performance-oriented training under pressure." },
];
export const INTERESTS = ["Product Management", "Product Discovery", "User Research", "Product Strategy", "Product Analytics", "Consumer Technology", "Fintech", "AI Products"];
export const TECH_PROJECTS = [
  { title: "StyleMate — AI Personal Wardrobe & Outfit Recommendation", lang: "Python", href: "https://github.com/Akhil-Reddyvari/StyleMate---AI-Powered-Personal-Wardrobe-and-Outfit-Recommendation-System" },
  { title: "Healthcare Recommendation System", lang: "Python", href: "https://github.com/Akhil-Reddyvari/healthcare-recommendation-system" },
  { title: "CloudScale-MARL", lang: "Python", href: "https://github.com/Akhil-Reddyvari/CloudScale-MARL" },
  { title: "Speech Processing Project", lang: "Jupyter Notebook", href: "https://github.com/Akhil-Reddyvari/Speech-Processing-Project" },
  { title: "Speech Processing Lab", lang: "Jupyter Notebook", href: "https://github.com/Akhil-Reddyvari/Speech-Processing-Lab" },
];