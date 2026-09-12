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
	resumeUrl: "/Akhil_Reddy_Resume.pdf",
	availability: "Open to APM / PM roles — 2026"
};
export const CASE_STUDIES = [
	{
		id: "concord-zerodha",
		index: "01",
		title: "Concord",
		tagline: "A consensus layer for group travel — because trips don't fail on booking, they fail on agreeing.",
		category: "Product Strategy · Agentic AI",
		year: "2026",
		role: "Product Strategist",
		summary: "My entry for Zerodha's The Great Rewiring Challenge 2026: a full product strategy for an AI agent that helps groups of travellers make fair, adaptable decisions — before any booking ever happens.",
		highlights: [
			"Zerodha · The Great Rewiring Challenge 2026",
			"MoSCoW-scoped MVP",
			"North Star: decisions reaching group approval"
		],
		links: [{
			label: "Full case study PDF",
			href: "https://customer-assets-0z36b82j.emergentagent.net/job_3c75b9b6-4ce4-4c56-91c4-b8e10603fd48/artifacts/amhw1rid_Akhil_Reddy_Concord_Product_Strategy_Case_Study.pdf"
		}],
		sections: [
			{
				key: "problem",
				label: "The Problem",
				body: "Group trips are planned through a chaotic mix of chats, spreadsheets and half-finished polls. Travel products are built for single decision-makers — yet most travel happens in groups with conflicting budgets, schedules and preferences.",
				bullets: ["Plans fall apart when circumstances change, because renegotiating is socially costly — outdated plans win by default.", "The real problem isn't agreement; it's hidden constraints, decision fatigue and painful renegotiation."]
			},
			{
				key: "users",
				label: "Target Users",
				bullets: [
					"Groups of 3–8 friends who need diverse budgets, schedules and interests combined without one person carrying the load.",
					"Families & multigenerational groups needing a fair process across comfort levels, mobility and priorities.",
					"The informal trip organizer — the primary MVP persona, with the most acute pain and natural distribution power.",
					"Individual travellers who want privacy for budget ceilings, time constraints and non-negotiables."
				]
			},
			{
				key: "research",
				label: "Research & Insights",
				body: "Discovery was grounded in personal travel experience and structured conversations with friends and family — directional signals to be validated with formal interviews.",
				bullets: [
					"The hardest part of group travel isn't the initial agreement — it's the renegotiation when things change.",
					"People publicly agree in group chats while privately dissatisfied; real budgets are rarely disclosed upfront.",
					"Today's wave of AI travel products optimizes for solo decision-makers and ignores group dynamics.",
					"Agentic AI finally makes private, constraint-aware negotiation feasible — beyond simple polling tools."
				]
			},
			{
				key: "solution",
				label: "Proposed Solution",
				body: "Concord is a consensus layer for group travel — it builds the decision layer before the booking layer. An agent that:",
				bullets: [
					"Understands — privately collects preferences, constraints, budgets and non-negotiables from each traveller.",
					"Identifies — detects conflicts, missing information and which decisions need the group's attention.",
					"Facilitates — presents feasible options and explains trade-offs in plain language.",
					"Coordinates — manages reminders, deadlines, approvals and everything left unresolved.",
					"Adapts — detects real-world changes and reopens only the affected decisions, not the whole itinerary."
				]
			},
			{
				key: "mvp",
				label: "MVP Scope",
				bullets: [
					"Must have — trip room, invitations, private preference capture, shared decision space, conflict detection, feasible options, trade-off explanations, approvals, decision history, change-impact alerts.",
					"Should have — reminders, deadlines, unresolved-decision dashboard, optional voice input, permission controls, audit history.",
					"Could have — spontaneous opportunity suggestions, photo & memory organization, post-trip recap, learning from past trips.",
					"Explicitly not in v1 — fully autonomous booking, open-ended spending, automatic compromise selection, a broad travel marketplace."
				]
			},
			{
				key: "prioritization",
				label: "Prioritization Logic",
				body: "Sequencing follows one rule: earn the right to touch bookings and money by first proving the agent can be trusted with decisions and information. Trust is the moat — monetization comes only after the group relies on Concord to decide."
			},
			{
				key: "metrics",
				label: "Success Metrics",
				bullets: [
					"North Star — share of initiated trip decisions that reach full group approval within the group's own deadline, without escalating to external channels.",
					"Activation — invited travellers completing private preference capture within 48 hours.",
					"Core value — time to consensus per decision; organizer workload reduction vs. a manual chat baseline.",
					"Adaptability — replanning success rate after disruptions.",
					"Trust & safety — zero privacy incidents, zero unauthorized actions, perceived-fairness score from post-trip surveys."
				]
			},
			{
				key: "outcomes",
				label: "Outcomes & Hypothesis",
				bullets: [
					"Job to be done — help groups make fair, informed decisions and keep plans workable as conditions change, without a permanent trip manager.",
					"Product hypothesis — if an agent privately captures constraints, surfaces conflicts and reopens only affected decisions, groups agree faster and commit more strongly.",
					"Differentiator — dynamic, ongoing consensus; not a static itinerary.",
					"Business model — free concierge prototype → Organiser Pro subscription → booking referral commission → B2B white-label API."
				]
			},
			{
				key: "next",
				label: "Next Steps",
				bullets: [
					"Structured discovery interviews to validate the sharpness of the renegotiation pain.",
					"Prototype private preferences, conflict explanations, option comparison and consensus checkpoints.",
					"Concierge MVP — support real trips with human-assisted coordination to observe real conflict patterns.",
					"Automate reminders, deadlines, change detection and replanning; then bounded booking execution."
				]
			}
		]
	},
	{
		id: "ai-personal-stylist",
		index: "02",
		title: "StyleMate — AI Personal Stylist",
		tagline: "Helping college students answer 'what do I wear today?' from the wardrobe they already own.",
		category: "Product Development · Recommendation Systems",
		year: "2026",
		role: "Product Owner & Builder",
		summary: "Identified a daily decision-fatigue problem on campus, then designed and built an AI-powered product that generates personalized outfit recommendations from a user's own wardrobe — end to end, from problem definition to working APIs.",
		highlights: [
			"0 → 1 product build",
			"Custom outfit-scoring framework",
			"Python · FastAPI · MongoDB"
		],
		links: [{
			label: "GitHub repository",
			href: "https://github.com/Akhil-Reddyvari/StyleMate---AI-Powered-Personal-Wardrobe-and-Outfit-Recommendation-System"
		}],
		sections: [
			{
				key: "problem",
				label: "The Problem",
				body: "College students stand in front of full wardrobes every morning and still feel they have 'nothing to wear'. The issue isn't a lack of clothes — it's decision fatigue: no easy way to combine what they own into outfits that fit the occasion, the weather and their style."
			},
			{
				key: "users",
				label: "Target Users",
				bullets: ["College students who want to look put-together without spending on new clothes.", "Students with packed schedules who want the daily 'what to wear' decision made in seconds."]
			},
			{
				key: "research",
				label: "Research & Insights",
				bullets: [
					"The problem was identified through campus observation and peer conversations — the same frustration recurred daily.",
					"Most wardrobes are under-utilized: a small rotation of 'safe' outfits repeats while most items go untouched.",
					"Users think in occasions ('a presentation', 'a fest', 'a casual day'), not in individual clothing items."
				]
			},
			{
				key: "solution",
				label: "Proposed Solution",
				body: "An AI-powered personal stylist that digitizes your wardrobe, understands each item's attributes, and generates ranked outfit combinations personalized to the occasion.",
				bullets: [
					"Wardrobe creation — users add clothing items with attributes (color, type, formality, season).",
					"Outfit generation — combinations are assembled from the user's actual wardrobe.",
					"Recommendation ranking — every candidate outfit is scored so the best rise to the top."
				]
			},
			{
				key: "mvp",
				label: "MVP Scope",
				bullets: [
					"Wardrobe management — create, view and manage clothing items with structured attributes.",
					"Outfit engine — generate combinations and rank them with a transparent scoring framework.",
					"REST APIs — expose the full recommendation workflow for any client to consume."
				]
			},
			{
				key: "prioritization",
				label: "Prioritization — the Scoring Framework",
				body: "The core product decision was what makes an outfit 'good'. I developed and iterated on a scoring framework that ranks outfits across five dimensions, weighted by what users actually notice:",
				bullets: [
					"Color harmony — do the pieces work together visually?",
					"Styling consistency — does the outfit read as one coherent look?",
					"Occasion suitability — right level of formality for the event?",
					"Footwear compatibility — often forgotten, always noticed.",
					"Wardrobe usage — nudging under-used items back into rotation."
				]
			},
			{
				key: "feasibility",
				label: "Technical Feasibility",
				body: "Built backend services in Python with FastAPI and MongoDB to manage wardrobe data and expose recommendation workflows through REST APIs — a stack chosen for rapid iteration and clean separation between the scoring engine and any future client app."
			},
			{
				key: "metrics",
				label: "Success Metrics",
				bullets: [
					"Outfit acceptance rate — how often a top-ranked recommendation is worn.",
					"Wardrobe utilization — percentage of owned items appearing in accepted outfits.",
					"Time-to-decision — reduction in daily 'what to wear' deliberation."
				]
			},
			{
				key: "outcomes",
				label: "Outcomes & Learnings",
				bullets: [
					"Shipped a working backend covering the full workflow — wardrobe data, outfit generation and recommendation ranking over REST APIs.",
					"Iterated the scoring framework across multiple versions; transparent, explainable ranking beat opaque 'AI magic' in user trust.",
					"Learning: the hardest part wasn't the algorithm — it was defining 'good taste' as a measurable product decision."
				]
			},
			{
				key: "next",
				label: "Next Steps",
				bullets: [
					"Photo-based wardrobe upload with automatic attribute tagging (computer vision).",
					"A lightweight mobile client on top of the existing APIs.",
					"Feedback loops — learn each user's taste from accept/reject signals."
				]
			}
		]
	},
	{
		id: "vibewinn",
		index: "03",
		title: "VIBEWINN",
		tagline: "A market exploration that ended in the right decision: pivoting the product.",
		category: "Product Discovery · Market Research",
		year: "2025",
		role: "Product & Market Researcher",
		summary: "A ground-up product & market exploration: segment-by-segment client interviews, problem-solution fit assessment, and the evidence-based pivot from paper-bag advertising to Smart Fit Frames.",
		highlights: [
			"20–30 client conversations per segment",
			"Evidence-driven pivot",
			"Problem-solution fit analysis"
		],
		links: [],
		sections: [
			{
				key: "problem",
				label: "The Problem",
				body: "VIBEWINN began with a hypothesis: local businesses needed new, high-visibility advertising surfaces, and paper-bag advertising could be one. Before building anything, the goal was to find out whether the problem was real, who felt it most, and whether our concept actually solved it."
			},
			{
				key: "research",
				label: "Research Approach",
				bullets: [
					"Conducted market research and engaged 20–30 potential clients per segment to understand customer needs, assess demand and identify recurring pain points.",
					"Treated every conversation as a test of the hypothesis — not a sales pitch.",
					"Synthesized stakeholder feedback to evaluate problem-solution fit honestly."
				]
			},
			{
				key: "insights",
				label: "Key Insights",
				bullets: [
					"The initial paper-bag advertising concept had real limitations in reach, targeting and repeatability.",
					"Customer feedback kept pointing toward a different, sharper opportunity the team hadn't planned for.",
					"The strongest signal: clients described their problem in ways that matched Smart Fit Frames, not our original idea."
				]
			},
			{
				key: "decision",
				label: "The Product Decision",
				body: "Supported a product pivot toward Smart Fit Frames, grounded in customer feedback and the market opportunities identified during research. The pivot wasn't a failure of the original idea — it was the research working exactly as intended."
			},
			{
				key: "outcomes",
				label: "Outcomes & Learnings",
				bullets: [
					"Fall in love with the problem, not the first solution — the willingness to pivot is a product skill, not a setback.",
					"Small, structured samples (20–30 conversations per segment) surface recurring pain fast when you listen for patterns.",
					"Stakeholder feedback only creates value when it's synthesized into a decision."
				]
			},
			{
				key: "next",
				label: "Next Steps",
				bullets: ["Validate Smart Fit Frames demand with the same segment-wise interview rigor.", "Define an MVP and measurable success criteria before any build investment."]
			}
		]
	},
	{
		id: "healthcare-recommendation",
		index: "04",
		title: "Healthcare Recommendation System",
		tagline: "Turning raw symptoms into interpretable, trustworthy health guidance.",
		category: "ML Product · Decision Support",
		year: "2024",
		role: "Product Prototype Lead",
		summary: "A machine-learning decision-support prototype that maps user-reported symptoms to probable disease categories — designed end to end around one principle: a recommendation nobody understands is a recommendation nobody trusts.",
		highlights: [
			"Explainability-first design",
			"End-to-end workflow design",
			"Python · ML classification"
		],
		links: [{
			label: "GitHub repository",
			href: "https://github.com/Akhil-Reddyvari/healthcare-recommendation-system"
		}],
		sections: [
			{
				key: "problem",
				label: "The Problem",
				body: "People searching symptoms online face two bad outcomes: alarming worst-case answers, or opaque model outputs they can't judge. Healthcare guidance is only useful if a layperson can understand why it's being given."
			},
			{
				key: "users",
				label: "Target Users",
				bullets: ["Users seeking a reliable first-pass interpretation of symptoms before deciding on care.", "Non-technical users who need interpretable outputs, not raw probabilities."]
			},
			{
				key: "solution",
				label: "Proposed Solution",
				body: "A machine-learning-based decision-support prototype that maps user-reported symptoms to probable disease categories, then presents the output as interpretable recommendations rather than black-box predictions."
			},
			{
				key: "flow",
				label: "Product Workflow",
				bullets: [
					"User input — structured capture of reported symptoms.",
					"Preprocessing — cleaning and encoding inputs for the model.",
					"Model inference — classification into probable disease categories.",
					"Recommendation output — evaluated, interpretable results the user can act on."
				]
			},
			{
				key: "feasibility",
				label: "Technical Feasibility",
				body: "Built in Python using classification models with feature engineering over structured healthcare data, with explainability techniques layered on top so every recommendation carries its reasoning."
			},
			{
				key: "metrics",
				label: "Success Metrics",
				bullets: [
					"Model accuracy across disease categories.",
					"Interpretability — whether users can state why a recommendation was made.",
					"Output evaluation — systematic review of model outputs against structured data."
				]
			},
			{
				key: "outcomes",
				label: "Outcomes & Learnings",
				bullets: ["Delivered a working prototype covering the full flow from symptom input to interpretable recommendation.", "Learning: in high-stakes domains, trust is the product — accuracy without explainability doesn't ship."]
			},
			{
				key: "next",
				label: "Next Steps",
				bullets: ["Expand symptom coverage and validate against larger datasets.", "Add clear safety boundaries — when the system must defer to a doctor."]
			}
		]
	}
];
export const TEARDOWNS = [
	{
		title: "Duolingo — The Psychology of Streaks",
		focus: "Retention loops & behavioral UX",
		insight: "Loss aversion, streak freezes and perfectly-timed guilt notifications keep D30 retention high. The lesson: the best retention mechanic is one users would defend in your place."
	},
	{
		title: "Notion AI — In-Context Generation",
		focus: "AI interaction design",
		insight: "AI that lives inside the canvas beats AI that lives in a sidebar. Trigger discovery (slash commands), streaming responses and accept/reject micro-decisions make generation feel like collaboration."
	},
	{
		title: "Zerodha Kite — Trust Through Restraint",
		focus: "Information density in high-stakes UI",
		insight: "Zero clutter, instant execution and no dark patterns — in a product handling people's money, restraint is the feature. Every removed element is a deposit in the trust account."
	}
];
export const SKILL_GROUPS = [
	{
		title: "Product",
		items: [
			"Product Development",
			"Product Discovery",
			"User-Centric Problem Solving",
			"Rapid Prototyping",
			"Problem Prioritization"
		]
	},
	{
		title: "Analytics",
		items: [
			"SQL",
			"Data Analysis",
			"Exploratory Data Analysis",
			"Statistical Analysis",
			"Data Interpretation"
		]
	},
	{
		title: "Engineering Fluency",
		items: [
			"Python",
			"Java",
			"FastAPI",
			"REST APIs",
			"MongoDB",
			"API Integration"
		]
	},
	{
		title: "Machine Learning",
		items: [
			"Recommendation Systems",
			"Classification",
			"Feature Engineering",
			"Model Evaluation"
		]
	},
	{
		title: "Methods & Tools",
		items: [
			"Agile",
			"Scrum",
			"SDLC",
			"Git & GitHub",
			"Jupyter / Colab",
			"Excel & Sheets"
		]
	}
];
export const CERTIFICATIONS = [{
	title: "Project Management Assessment",
	issuer: "LearnTube.ai",
	date: "July 2026",
	id: "DJA-B-1-2811097-0",
	href: "https://customer-assets-0z36b82j.emergentagent.net/job_3c75b9b6-4ce4-4c56-91c4-b8e10603fd48/artifacts/48ku3r0t_Project_Management_Reddyvari_Certificate.pdf"
}, {
	title: "Machine Learning Assessment",
	issuer: "LearnTube.ai",
	date: "July 2026",
	id: "DJA-B-1-2851595-0"
}];
export const LEADERSHIP = [{
	title: "Tournament Organizer",
	body: "Organized and managed local cricket tournaments end to end — coordinating teams, schedules, logistics and live event execution. Stakeholder management with real stakes and no undo button."
}, {
	title: "College Cricket Team",
	body: "Active member of the college cricket team — teamwork, collaboration and performance-oriented training under pressure."
}];
export const INTERESTS = [
	"Product Management",
	"Product Discovery",
	"User Research",
	"Product Strategy",
	"Product Analytics",
	"Consumer Technology",
	"Fintech",
	"AI Products"
];
export const TECH_PROJECTS = [
	{
		title: "StyleMate — AI Personal Wardrobe & Outfit Recommendation",
		lang: "Python",
		href: "https://github.com/Akhil-Reddyvari/StyleMate---AI-Powered-Personal-Wardrobe-and-Outfit-Recommendation-System"
	},
	{
		title: "Healthcare Recommendation System",
		lang: "Python",
		href: "https://github.com/Akhil-Reddyvari/healthcare-recommendation-system"
	},
	{
		title: "CloudScale-MARL",
		lang: "Python",
		href: "https://github.com/Akhil-Reddyvari/CloudScale-MARL"
	},
	{
		title: "Speech Processing Project",
		lang: "Jupyter Notebook",
		href: "https://github.com/Akhil-Reddyvari/Speech-Processing-Project"
	},
	{
		title: "Speech Processing Lab",
		lang: "Jupyter Notebook",
		href: "https://github.com/Akhil-Reddyvari/Speech-Processing-Lab"
	}
];

//# sourceMappingURL=data:application/json;base64,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QUFFOUssT0FBTyxNQUFNLGdCQUFnQjtDQUMzQjtFQUNFLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtDQUNSO0NBQ0E7RUFDRSxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07Q0FDUjtDQUNBO0VBQ0UsT0FBTztFQUNQLE1BQU07RUFDTixNQUFNO0NBQ1I7Q0FDQTtFQUNFLE9BQU87RUFDUCxNQUFNO0VBQ04sTUFBTTtDQUNSO0NBQ0E7RUFDRSxPQUFPO0VBQ1AsTUFBTTtFQUNOLE1BQU07Q0FDUjtBQUNGIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbInBvcnRmb2xpby50cyJdLCJ2ZXJzaW9uIjozLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENhc2VTZWN0aW9uIHtcbiAga2V5OiBzdHJpbmc7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGJvZHk/OiBzdHJpbmc7XG4gIGJ1bGxldHM/OiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXNlU3R1ZHkge1xuICBpZDogc3RyaW5nO1xuICBpbmRleDogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0YWdsaW5lOiBzdHJpbmc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIHllYXI6IHN0cmluZztcbiAgcm9sZTogc3RyaW5nO1xuICBzdW1tYXJ5OiBzdHJpbmc7XG4gIGhpZ2hsaWdodHM6IHN0cmluZ1tdO1xuICBsaW5rczogeyBsYWJlbDogc3RyaW5nOyBocmVmOiBzdHJpbmcgfVtdO1xuICBzZWN0aW9uczogQ2FzZVNlY3Rpb25bXTtcbn1cblxuZXhwb3J0IGNvbnN0IFBST0ZJTEUgPSB7XG4gIG5hbWU6IFwiUmVkZHl2YXJpIEFraGlsIFJlZGR5XCIsXG4gIHNob3J0TmFtZTogXCJBa2hpbCBSZWRkeVwiLFxuICByb2xlOiBcIkFzcGlyaW5nIEFzc29jaWF0ZSBQcm9kdWN0IE1hbmFnZXJcIixcbiAgdGFnbGluZTogXCJJIHR1cm4gYW1iaWd1b3VzIHByb2JsZW1zIGludG8gcHJvZHVjdHMgcGVvcGxlIGxvdmUuXCIsXG4gIG9iamVjdGl2ZTpcbiAgICBcIkZpbmFsLXllYXIgQi5UZWNoIHN0dWRlbnQgaW4gQUkgJiBEYXRhIFNjaWVuY2UgYXQgQW1yaXRhIFZpc2h3YSBWaWR5YXBlZXRoYW0sIEJlbmdhbHVydSDigJQgYnVpbGRpbmcgdGVjaG5vbG9neS1kcml2ZW4gcHJvZHVjdHMgYnkgdHJhbnNsYXRpbmcgYW1iaWd1b3VzIHByb2JsZW1zIGludG8gcHJvZHVjdCBjb25jZXB0cywgZ2F0aGVyaW5nIHN0YWtlaG9sZGVyIGZlZWRiYWNrLCBhbmQgaXRlcmF0aW5nIG9uIHNvbHV0aW9ucyBncm91bmRlZCBpbiByZWFsIHVzZXIgbmVlZHMuXCIsXG4gIGVtYWlsOiBcInJlZGR5dmFyaWFraGlsMEBnbWFpbC5jb21cIixcbiAgcGhvbmU6IFwiKzkxIDgxNzk2IDUwODg1XCIsXG4gIGxvY2F0aW9uOiBcIkJlbmdhbHVydSwgSW5kaWFcIixcbiAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Ba2hpbC1SZWRkeXZhcmlcIixcbiAgbGlua2VkaW46IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2FraGlsLXJlZGR5dmFyaVwiLFxuICByZXN1bWVVcmw6IFwiL0FraGlsX1JlZGR5X1Jlc3VtZS5wZGZcIixcbiAgYXZhaWxhYmlsaXR5OiBcIk9wZW4gdG8gQVBNIC8gUE0gcm9sZXMg4oCUIDIwMjZcIixcbn07XG5cbmV4cG9ydCBjb25zdCBDQVNFX1NUVURJRVM6IENhc2VTdHVkeVtdID0gW1xuICB7XG4gICAgaWQ6IFwiY29uY29yZC16ZXJvZGhhXCIsXG4gICAgaW5kZXg6IFwiMDFcIixcbiAgICB0aXRsZTogXCJDb25jb3JkXCIsXG4gICAgdGFnbGluZTogXCJBIGNvbnNlbnN1cyBsYXllciBmb3IgZ3JvdXAgdHJhdmVsIOKAlCBiZWNhdXNlIHRyaXBzIGRvbid0IGZhaWwgb24gYm9va2luZywgdGhleSBmYWlsIG9uIGFncmVlaW5nLlwiLFxuICAgIGNhdGVnb3J5OiBcIlByb2R1Y3QgU3RyYXRlZ3kgwrcgQWdlbnRpYyBBSVwiLFxuICAgIHllYXI6IFwiMjAyNlwiLFxuICAgIHJvbGU6IFwiUHJvZHVjdCBTdHJhdGVnaXN0XCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiTXkgZW50cnkgZm9yIFplcm9kaGEncyBUaGUgR3JlYXQgUmV3aXJpbmcgQ2hhbGxlbmdlIDIwMjY6IGEgZnVsbCBwcm9kdWN0IHN0cmF0ZWd5IGZvciBhbiBBSSBhZ2VudCB0aGF0IGhlbHBzIGdyb3VwcyBvZiB0cmF2ZWxsZXJzIG1ha2UgZmFpciwgYWRhcHRhYmxlIGRlY2lzaW9ucyDigJQgYmVmb3JlIGFueSBib29raW5nIGV2ZXIgaGFwcGVucy5cIixcbiAgICBoaWdobGlnaHRzOiBbXCJaZXJvZGhhIMK3IFRoZSBHcmVhdCBSZXdpcmluZyBDaGFsbGVuZ2UgMjAyNlwiLCBcIk1vU0NvVy1zY29wZWQgTVZQXCIsIFwiTm9ydGggU3RhcjogZGVjaXNpb25zIHJlYWNoaW5nIGdyb3VwIGFwcHJvdmFsXCJdLFxuICAgIGxpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkZ1bGwgY2FzZSBzdHVkeSBQREZcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2N1c3RvbWVyLWFzc2V0cy0wejM2Yjgyai5lbWVyZ2VudGFnZW50Lm5ldC9qb2JfM2M3NWI5YjYtNGNlNC00YzU2LTkxYzQtYjhlMTA2MDNmZDQ4L2FydGlmYWN0cy9hbWh3MXJpZF9Ba2hpbF9SZWRkeV9Db25jb3JkX1Byb2R1Y3RfU3RyYXRlZ3lfQ2FzZV9TdHVkeS5wZGZcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzZWN0aW9uczogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwicHJvYmxlbVwiLFxuICAgICAgICBsYWJlbDogXCJUaGUgUHJvYmxlbVwiLFxuICAgICAgICBib2R5OiBcIkdyb3VwIHRyaXBzIGFyZSBwbGFubmVkIHRocm91Z2ggYSBjaGFvdGljIG1peCBvZiBjaGF0cywgc3ByZWFkc2hlZXRzIGFuZCBoYWxmLWZpbmlzaGVkIHBvbGxzLiBUcmF2ZWwgcHJvZHVjdHMgYXJlIGJ1aWx0IGZvciBzaW5nbGUgZGVjaXNpb24tbWFrZXJzIOKAlCB5ZXQgbW9zdCB0cmF2ZWwgaGFwcGVucyBpbiBncm91cHMgd2l0aCBjb25mbGljdGluZyBidWRnZXRzLCBzY2hlZHVsZXMgYW5kIHByZWZlcmVuY2VzLlwiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJQbGFucyBmYWxsIGFwYXJ0IHdoZW4gY2lyY3Vtc3RhbmNlcyBjaGFuZ2UsIGJlY2F1c2UgcmVuZWdvdGlhdGluZyBpcyBzb2NpYWxseSBjb3N0bHkg4oCUIG91dGRhdGVkIHBsYW5zIHdpbiBieSBkZWZhdWx0LlwiLFxuICAgICAgICAgIFwiVGhlIHJlYWwgcHJvYmxlbSBpc24ndCBhZ3JlZW1lbnQ7IGl0J3MgaGlkZGVuIGNvbnN0cmFpbnRzLCBkZWNpc2lvbiBmYXRpZ3VlIGFuZCBwYWluZnVsIHJlbmVnb3RpYXRpb24uXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwidXNlcnNcIixcbiAgICAgICAgbGFiZWw6IFwiVGFyZ2V0IFVzZXJzXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIkdyb3VwcyBvZiAz4oCTOCBmcmllbmRzIHdobyBuZWVkIGRpdmVyc2UgYnVkZ2V0cywgc2NoZWR1bGVzIGFuZCBpbnRlcmVzdHMgY29tYmluZWQgd2l0aG91dCBvbmUgcGVyc29uIGNhcnJ5aW5nIHRoZSBsb2FkLlwiLFxuICAgICAgICAgIFwiRmFtaWxpZXMgJiBtdWx0aWdlbmVyYXRpb25hbCBncm91cHMgbmVlZGluZyBhIGZhaXIgcHJvY2VzcyBhY3Jvc3MgY29tZm9ydCBsZXZlbHMsIG1vYmlsaXR5IGFuZCBwcmlvcml0aWVzLlwiLFxuICAgICAgICAgIFwiVGhlIGluZm9ybWFsIHRyaXAgb3JnYW5pemVyIOKAlCB0aGUgcHJpbWFyeSBNVlAgcGVyc29uYSwgd2l0aCB0aGUgbW9zdCBhY3V0ZSBwYWluIGFuZCBuYXR1cmFsIGRpc3RyaWJ1dGlvbiBwb3dlci5cIixcbiAgICAgICAgICBcIkluZGl2aWR1YWwgdHJhdmVsbGVycyB3aG8gd2FudCBwcml2YWN5IGZvciBidWRnZXQgY2VpbGluZ3MsIHRpbWUgY29uc3RyYWludHMgYW5kIG5vbi1uZWdvdGlhYmxlcy5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJyZXNlYXJjaFwiLFxuICAgICAgICBsYWJlbDogXCJSZXNlYXJjaCAmIEluc2lnaHRzXCIsXG4gICAgICAgIGJvZHk6IFwiRGlzY292ZXJ5IHdhcyBncm91bmRlZCBpbiBwZXJzb25hbCB0cmF2ZWwgZXhwZXJpZW5jZSBhbmQgc3RydWN0dXJlZCBjb252ZXJzYXRpb25zIHdpdGggZnJpZW5kcyBhbmQgZmFtaWx5IOKAlCBkaXJlY3Rpb25hbCBzaWduYWxzIHRvIGJlIHZhbGlkYXRlZCB3aXRoIGZvcm1hbCBpbnRlcnZpZXdzLlwiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJUaGUgaGFyZGVzdCBwYXJ0IG9mIGdyb3VwIHRyYXZlbCBpc24ndCB0aGUgaW5pdGlhbCBhZ3JlZW1lbnQg4oCUIGl0J3MgdGhlIHJlbmVnb3RpYXRpb24gd2hlbiB0aGluZ3MgY2hhbmdlLlwiLFxuICAgICAgICAgIFwiUGVvcGxlIHB1YmxpY2x5IGFncmVlIGluIGdyb3VwIGNoYXRzIHdoaWxlIHByaXZhdGVseSBkaXNzYXRpc2ZpZWQ7IHJlYWwgYnVkZ2V0cyBhcmUgcmFyZWx5IGRpc2Nsb3NlZCB1cGZyb250LlwiLFxuICAgICAgICAgIFwiVG9kYXkncyB3YXZlIG9mIEFJIHRyYXZlbCBwcm9kdWN0cyBvcHRpbWl6ZXMgZm9yIHNvbG8gZGVjaXNpb24tbWFrZXJzIGFuZCBpZ25vcmVzIGdyb3VwIGR5bmFtaWNzLlwiLFxuICAgICAgICAgIFwiQWdlbnRpYyBBSSBmaW5hbGx5IG1ha2VzIHByaXZhdGUsIGNvbnN0cmFpbnQtYXdhcmUgbmVnb3RpYXRpb24gZmVhc2libGUg4oCUIGJleW9uZCBzaW1wbGUgcG9sbGluZyB0b29scy5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJzb2x1dGlvblwiLFxuICAgICAgICBsYWJlbDogXCJQcm9wb3NlZCBTb2x1dGlvblwiLFxuICAgICAgICBib2R5OiBcIkNvbmNvcmQgaXMgYSBjb25zZW5zdXMgbGF5ZXIgZm9yIGdyb3VwIHRyYXZlbCDigJQgaXQgYnVpbGRzIHRoZSBkZWNpc2lvbiBsYXllciBiZWZvcmUgdGhlIGJvb2tpbmcgbGF5ZXIuIEFuIGFnZW50IHRoYXQ6XCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIlVuZGVyc3RhbmRzIOKAlCBwcml2YXRlbHkgY29sbGVjdHMgcHJlZmVyZW5jZXMsIGNvbnN0cmFpbnRzLCBidWRnZXRzIGFuZCBub24tbmVnb3RpYWJsZXMgZnJvbSBlYWNoIHRyYXZlbGxlci5cIixcbiAgICAgICAgICBcIklkZW50aWZpZXMg4oCUIGRldGVjdHMgY29uZmxpY3RzLCBtaXNzaW5nIGluZm9ybWF0aW9uIGFuZCB3aGljaCBkZWNpc2lvbnMgbmVlZCB0aGUgZ3JvdXAncyBhdHRlbnRpb24uXCIsXG4gICAgICAgICAgXCJGYWNpbGl0YXRlcyDigJQgcHJlc2VudHMgZmVhc2libGUgb3B0aW9ucyBhbmQgZXhwbGFpbnMgdHJhZGUtb2ZmcyBpbiBwbGFpbiBsYW5ndWFnZS5cIixcbiAgICAgICAgICBcIkNvb3JkaW5hdGVzIOKAlCBtYW5hZ2VzIHJlbWluZGVycywgZGVhZGxpbmVzLCBhcHByb3ZhbHMgYW5kIGV2ZXJ5dGhpbmcgbGVmdCB1bnJlc29sdmVkLlwiLFxuICAgICAgICAgIFwiQWRhcHRzIOKAlCBkZXRlY3RzIHJlYWwtd29ybGQgY2hhbmdlcyBhbmQgcmVvcGVucyBvbmx5IHRoZSBhZmZlY3RlZCBkZWNpc2lvbnMsIG5vdCB0aGUgd2hvbGUgaXRpbmVyYXJ5LlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm12cFwiLFxuICAgICAgICBsYWJlbDogXCJNVlAgU2NvcGVcIixcbiAgICAgICAgYnVsbGV0czogW1xuICAgICAgICAgIFwiTXVzdCBoYXZlIOKAlCB0cmlwIHJvb20sIGludml0YXRpb25zLCBwcml2YXRlIHByZWZlcmVuY2UgY2FwdHVyZSwgc2hhcmVkIGRlY2lzaW9uIHNwYWNlLCBjb25mbGljdCBkZXRlY3Rpb24sIGZlYXNpYmxlIG9wdGlvbnMsIHRyYWRlLW9mZiBleHBsYW5hdGlvbnMsIGFwcHJvdmFscywgZGVjaXNpb24gaGlzdG9yeSwgY2hhbmdlLWltcGFjdCBhbGVydHMuXCIsXG4gICAgICAgICAgXCJTaG91bGQgaGF2ZSDigJQgcmVtaW5kZXJzLCBkZWFkbGluZXMsIHVucmVzb2x2ZWQtZGVjaXNpb24gZGFzaGJvYXJkLCBvcHRpb25hbCB2b2ljZSBpbnB1dCwgcGVybWlzc2lvbiBjb250cm9scywgYXVkaXQgaGlzdG9yeS5cIixcbiAgICAgICAgICBcIkNvdWxkIGhhdmUg4oCUIHNwb250YW5lb3VzIG9wcG9ydHVuaXR5IHN1Z2dlc3Rpb25zLCBwaG90byAmIG1lbW9yeSBvcmdhbml6YXRpb24sIHBvc3QtdHJpcCByZWNhcCwgbGVhcm5pbmcgZnJvbSBwYXN0IHRyaXBzLlwiLFxuICAgICAgICAgIFwiRXhwbGljaXRseSBub3QgaW4gdjEg4oCUIGZ1bGx5IGF1dG9ub21vdXMgYm9va2luZywgb3Blbi1lbmRlZCBzcGVuZGluZywgYXV0b21hdGljIGNvbXByb21pc2Ugc2VsZWN0aW9uLCBhIGJyb2FkIHRyYXZlbCBtYXJrZXRwbGFjZS5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJwcmlvcml0aXphdGlvblwiLFxuICAgICAgICBsYWJlbDogXCJQcmlvcml0aXphdGlvbiBMb2dpY1wiLFxuICAgICAgICBib2R5OiBcIlNlcXVlbmNpbmcgZm9sbG93cyBvbmUgcnVsZTogZWFybiB0aGUgcmlnaHQgdG8gdG91Y2ggYm9va2luZ3MgYW5kIG1vbmV5IGJ5IGZpcnN0IHByb3ZpbmcgdGhlIGFnZW50IGNhbiBiZSB0cnVzdGVkIHdpdGggZGVjaXNpb25zIGFuZCBpbmZvcm1hdGlvbi4gVHJ1c3QgaXMgdGhlIG1vYXQg4oCUIG1vbmV0aXphdGlvbiBjb21lcyBvbmx5IGFmdGVyIHRoZSBncm91cCByZWxpZXMgb24gQ29uY29yZCB0byBkZWNpZGUuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwibWV0cmljc1wiLFxuICAgICAgICBsYWJlbDogXCJTdWNjZXNzIE1ldHJpY3NcIixcbiAgICAgICAgYnVsbGV0czogW1xuICAgICAgICAgIFwiTm9ydGggU3RhciDigJQgc2hhcmUgb2YgaW5pdGlhdGVkIHRyaXAgZGVjaXNpb25zIHRoYXQgcmVhY2ggZnVsbCBncm91cCBhcHByb3ZhbCB3aXRoaW4gdGhlIGdyb3VwJ3Mgb3duIGRlYWRsaW5lLCB3aXRob3V0IGVzY2FsYXRpbmcgdG8gZXh0ZXJuYWwgY2hhbm5lbHMuXCIsXG4gICAgICAgICAgXCJBY3RpdmF0aW9uIOKAlCBpbnZpdGVkIHRyYXZlbGxlcnMgY29tcGxldGluZyBwcml2YXRlIHByZWZlcmVuY2UgY2FwdHVyZSB3aXRoaW4gNDggaG91cnMuXCIsXG4gICAgICAgICAgXCJDb3JlIHZhbHVlIOKAlCB0aW1lIHRvIGNvbnNlbnN1cyBwZXIgZGVjaXNpb247IG9yZ2FuaXplciB3b3JrbG9hZCByZWR1Y3Rpb24gdnMuIGEgbWFudWFsIGNoYXQgYmFzZWxpbmUuXCIsXG4gICAgICAgICAgXCJBZGFwdGFiaWxpdHkg4oCUIHJlcGxhbm5pbmcgc3VjY2VzcyByYXRlIGFmdGVyIGRpc3J1cHRpb25zLlwiLFxuICAgICAgICAgIFwiVHJ1c3QgJiBzYWZldHkg4oCUIHplcm8gcHJpdmFjeSBpbmNpZGVudHMsIHplcm8gdW5hdXRob3JpemVkIGFjdGlvbnMsIHBlcmNlaXZlZC1mYWlybmVzcyBzY29yZSBmcm9tIHBvc3QtdHJpcCBzdXJ2ZXlzLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm91dGNvbWVzXCIsXG4gICAgICAgIGxhYmVsOiBcIk91dGNvbWVzICYgSHlwb3RoZXNpc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJKb2IgdG8gYmUgZG9uZSDigJQgaGVscCBncm91cHMgbWFrZSBmYWlyLCBpbmZvcm1lZCBkZWNpc2lvbnMgYW5kIGtlZXAgcGxhbnMgd29ya2FibGUgYXMgY29uZGl0aW9ucyBjaGFuZ2UsIHdpdGhvdXQgYSBwZXJtYW5lbnQgdHJpcCBtYW5hZ2VyLlwiLFxuICAgICAgICAgIFwiUHJvZHVjdCBoeXBvdGhlc2lzIOKAlCBpZiBhbiBhZ2VudCBwcml2YXRlbHkgY2FwdHVyZXMgY29uc3RyYWludHMsIHN1cmZhY2VzIGNvbmZsaWN0cyBhbmQgcmVvcGVucyBvbmx5IGFmZmVjdGVkIGRlY2lzaW9ucywgZ3JvdXBzIGFncmVlIGZhc3RlciBhbmQgY29tbWl0IG1vcmUgc3Ryb25nbHkuXCIsXG4gICAgICAgICAgXCJEaWZmZXJlbnRpYXRvciDigJQgZHluYW1pYywgb25nb2luZyBjb25zZW5zdXM7IG5vdCBhIHN0YXRpYyBpdGluZXJhcnkuXCIsXG4gICAgICAgICAgXCJCdXNpbmVzcyBtb2RlbCDigJQgZnJlZSBjb25jaWVyZ2UgcHJvdG90eXBlIOKGkiBPcmdhbmlzZXIgUHJvIHN1YnNjcmlwdGlvbiDihpIgYm9va2luZyByZWZlcnJhbCBjb21taXNzaW9uIOKGkiBCMkIgd2hpdGUtbGFiZWwgQVBJLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm5leHRcIixcbiAgICAgICAgbGFiZWw6IFwiTmV4dCBTdGVwc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJTdHJ1Y3R1cmVkIGRpc2NvdmVyeSBpbnRlcnZpZXdzIHRvIHZhbGlkYXRlIHRoZSBzaGFycG5lc3Mgb2YgdGhlIHJlbmVnb3RpYXRpb24gcGFpbi5cIixcbiAgICAgICAgICBcIlByb3RvdHlwZSBwcml2YXRlIHByZWZlcmVuY2VzLCBjb25mbGljdCBleHBsYW5hdGlvbnMsIG9wdGlvbiBjb21wYXJpc29uIGFuZCBjb25zZW5zdXMgY2hlY2twb2ludHMuXCIsXG4gICAgICAgICAgXCJDb25jaWVyZ2UgTVZQIOKAlCBzdXBwb3J0IHJlYWwgdHJpcHMgd2l0aCBodW1hbi1hc3Npc3RlZCBjb29yZGluYXRpb24gdG8gb2JzZXJ2ZSByZWFsIGNvbmZsaWN0IHBhdHRlcm5zLlwiLFxuICAgICAgICAgIFwiQXV0b21hdGUgcmVtaW5kZXJzLCBkZWFkbGluZXMsIGNoYW5nZSBkZXRlY3Rpb24gYW5kIHJlcGxhbm5pbmc7IHRoZW4gYm91bmRlZCBib29raW5nIGV4ZWN1dGlvbi5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImFpLXBlcnNvbmFsLXN0eWxpc3RcIixcbiAgICBpbmRleDogXCIwMlwiLFxuICAgIHRpdGxlOiBcIlN0eWxlTWF0ZSDigJQgQUkgUGVyc29uYWwgU3R5bGlzdFwiLFxuICAgIHRhZ2xpbmU6IFwiSGVscGluZyBjb2xsZWdlIHN0dWRlbnRzIGFuc3dlciAnd2hhdCBkbyBJIHdlYXIgdG9kYXk/JyBmcm9tIHRoZSB3YXJkcm9iZSB0aGV5IGFscmVhZHkgb3duLlwiLFxuICAgIGNhdGVnb3J5OiBcIlByb2R1Y3QgRGV2ZWxvcG1lbnQgwrcgUmVjb21tZW5kYXRpb24gU3lzdGVtc1wiLFxuICAgIHllYXI6IFwiMjAyNlwiLFxuICAgIHJvbGU6IFwiUHJvZHVjdCBPd25lciAmIEJ1aWxkZXJcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJJZGVudGlmaWVkIGEgZGFpbHkgZGVjaXNpb24tZmF0aWd1ZSBwcm9ibGVtIG9uIGNhbXB1cywgdGhlbiBkZXNpZ25lZCBhbmQgYnVpbHQgYW4gQUktcG93ZXJlZCBwcm9kdWN0IHRoYXQgZ2VuZXJhdGVzIHBlcnNvbmFsaXplZCBvdXRmaXQgcmVjb21tZW5kYXRpb25zIGZyb20gYSB1c2VyJ3Mgb3duIHdhcmRyb2JlIOKAlCBlbmQgdG8gZW5kLCBmcm9tIHByb2JsZW0gZGVmaW5pdGlvbiB0byB3b3JraW5nIEFQSXMuXCIsXG4gICAgaGlnaGxpZ2h0czogW1wiMCDihpIgMSBwcm9kdWN0IGJ1aWxkXCIsIFwiQ3VzdG9tIG91dGZpdC1zY29yaW5nIGZyYW1ld29ya1wiLCBcIlB5dGhvbiDCtyBGYXN0QVBJIMK3IE1vbmdvREJcIl0sXG4gICAgbGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6IFwiR2l0SHViIHJlcG9zaXRvcnlcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vQWtoaWwtUmVkZHl2YXJpL1N0eWxlTWF0ZS0tLUFJLVBvd2VyZWQtUGVyc29uYWwtV2FyZHJvYmUtYW5kLU91dGZpdC1SZWNvbW1lbmRhdGlvbi1TeXN0ZW1cIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBzZWN0aW9uczogW1xuICAgICAge1xuICAgICAgICBrZXk6IFwicHJvYmxlbVwiLFxuICAgICAgICBsYWJlbDogXCJUaGUgUHJvYmxlbVwiLFxuICAgICAgICBib2R5OiBcIkNvbGxlZ2Ugc3R1ZGVudHMgc3RhbmQgaW4gZnJvbnQgb2YgZnVsbCB3YXJkcm9iZXMgZXZlcnkgbW9ybmluZyBhbmQgc3RpbGwgZmVlbCB0aGV5IGhhdmUgJ25vdGhpbmcgdG8gd2VhcicuIFRoZSBpc3N1ZSBpc24ndCBhIGxhY2sgb2YgY2xvdGhlcyDigJQgaXQncyBkZWNpc2lvbiBmYXRpZ3VlOiBubyBlYXN5IHdheSB0byBjb21iaW5lIHdoYXQgdGhleSBvd24gaW50byBvdXRmaXRzIHRoYXQgZml0IHRoZSBvY2Nhc2lvbiwgdGhlIHdlYXRoZXIgYW5kIHRoZWlyIHN0eWxlLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInVzZXJzXCIsXG4gICAgICAgIGxhYmVsOiBcIlRhcmdldCBVc2Vyc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJDb2xsZWdlIHN0dWRlbnRzIHdobyB3YW50IHRvIGxvb2sgcHV0LXRvZ2V0aGVyIHdpdGhvdXQgc3BlbmRpbmcgb24gbmV3IGNsb3RoZXMuXCIsXG4gICAgICAgICAgXCJTdHVkZW50cyB3aXRoIHBhY2tlZCBzY2hlZHVsZXMgd2hvIHdhbnQgdGhlIGRhaWx5ICd3aGF0IHRvIHdlYXInIGRlY2lzaW9uIG1hZGUgaW4gc2Vjb25kcy5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJyZXNlYXJjaFwiLFxuICAgICAgICBsYWJlbDogXCJSZXNlYXJjaCAmIEluc2lnaHRzXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIlRoZSBwcm9ibGVtIHdhcyBpZGVudGlmaWVkIHRocm91Z2ggY2FtcHVzIG9ic2VydmF0aW9uIGFuZCBwZWVyIGNvbnZlcnNhdGlvbnMg4oCUIHRoZSBzYW1lIGZydXN0cmF0aW9uIHJlY3VycmVkIGRhaWx5LlwiLFxuICAgICAgICAgIFwiTW9zdCB3YXJkcm9iZXMgYXJlIHVuZGVyLXV0aWxpemVkOiBhIHNtYWxsIHJvdGF0aW9uIG9mICdzYWZlJyBvdXRmaXRzIHJlcGVhdHMgd2hpbGUgbW9zdCBpdGVtcyBnbyB1bnRvdWNoZWQuXCIsXG4gICAgICAgICAgXCJVc2VycyB0aGluayBpbiBvY2Nhc2lvbnMgKCdhIHByZXNlbnRhdGlvbicsICdhIGZlc3QnLCAnYSBjYXN1YWwgZGF5JyksIG5vdCBpbiBpbmRpdmlkdWFsIGNsb3RoaW5nIGl0ZW1zLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInNvbHV0aW9uXCIsXG4gICAgICAgIGxhYmVsOiBcIlByb3Bvc2VkIFNvbHV0aW9uXCIsXG4gICAgICAgIGJvZHk6IFwiQW4gQUktcG93ZXJlZCBwZXJzb25hbCBzdHlsaXN0IHRoYXQgZGlnaXRpemVzIHlvdXIgd2FyZHJvYmUsIHVuZGVyc3RhbmRzIGVhY2ggaXRlbSdzIGF0dHJpYnV0ZXMsIGFuZCBnZW5lcmF0ZXMgcmFua2VkIG91dGZpdCBjb21iaW5hdGlvbnMgcGVyc29uYWxpemVkIHRvIHRoZSBvY2Nhc2lvbi5cIixcbiAgICAgICAgYnVsbGV0czogW1xuICAgICAgICAgIFwiV2FyZHJvYmUgY3JlYXRpb24g4oCUIHVzZXJzIGFkZCBjbG90aGluZyBpdGVtcyB3aXRoIGF0dHJpYnV0ZXMgKGNvbG9yLCB0eXBlLCBmb3JtYWxpdHksIHNlYXNvbikuXCIsXG4gICAgICAgICAgXCJPdXRmaXQgZ2VuZXJhdGlvbiDigJQgY29tYmluYXRpb25zIGFyZSBhc3NlbWJsZWQgZnJvbSB0aGUgdXNlcidzIGFjdHVhbCB3YXJkcm9iZS5cIixcbiAgICAgICAgICBcIlJlY29tbWVuZGF0aW9uIHJhbmtpbmcg4oCUIGV2ZXJ5IGNhbmRpZGF0ZSBvdXRmaXQgaXMgc2NvcmVkIHNvIHRoZSBiZXN0IHJpc2UgdG8gdGhlIHRvcC5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtdnBcIixcbiAgICAgICAgbGFiZWw6IFwiTVZQIFNjb3BlXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIldhcmRyb2JlIG1hbmFnZW1lbnQg4oCUIGNyZWF0ZSwgdmlldyBhbmQgbWFuYWdlIGNsb3RoaW5nIGl0ZW1zIHdpdGggc3RydWN0dXJlZCBhdHRyaWJ1dGVzLlwiLFxuICAgICAgICAgIFwiT3V0Zml0IGVuZ2luZSDigJQgZ2VuZXJhdGUgY29tYmluYXRpb25zIGFuZCByYW5rIHRoZW0gd2l0aCBhIHRyYW5zcGFyZW50IHNjb3JpbmcgZnJhbWV3b3JrLlwiLFxuICAgICAgICAgIFwiUkVTVCBBUElzIOKAlCBleHBvc2UgdGhlIGZ1bGwgcmVjb21tZW5kYXRpb24gd29ya2Zsb3cgZm9yIGFueSBjbGllbnQgdG8gY29uc3VtZS5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJwcmlvcml0aXphdGlvblwiLFxuICAgICAgICBsYWJlbDogXCJQcmlvcml0aXphdGlvbiDigJQgdGhlIFNjb3JpbmcgRnJhbWV3b3JrXCIsXG4gICAgICAgIGJvZHk6IFwiVGhlIGNvcmUgcHJvZHVjdCBkZWNpc2lvbiB3YXMgd2hhdCBtYWtlcyBhbiBvdXRmaXQgJ2dvb2QnLiBJIGRldmVsb3BlZCBhbmQgaXRlcmF0ZWQgb24gYSBzY29yaW5nIGZyYW1ld29yayB0aGF0IHJhbmtzIG91dGZpdHMgYWNyb3NzIGZpdmUgZGltZW5zaW9ucywgd2VpZ2h0ZWQgYnkgd2hhdCB1c2VycyBhY3R1YWxseSBub3RpY2U6XCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIkNvbG9yIGhhcm1vbnkg4oCUIGRvIHRoZSBwaWVjZXMgd29yayB0b2dldGhlciB2aXN1YWxseT9cIixcbiAgICAgICAgICBcIlN0eWxpbmcgY29uc2lzdGVuY3kg4oCUIGRvZXMgdGhlIG91dGZpdCByZWFkIGFzIG9uZSBjb2hlcmVudCBsb29rP1wiLFxuICAgICAgICAgIFwiT2NjYXNpb24gc3VpdGFiaWxpdHkg4oCUIHJpZ2h0IGxldmVsIG9mIGZvcm1hbGl0eSBmb3IgdGhlIGV2ZW50P1wiLFxuICAgICAgICAgIFwiRm9vdHdlYXIgY29tcGF0aWJpbGl0eSDigJQgb2Z0ZW4gZm9yZ290dGVuLCBhbHdheXMgbm90aWNlZC5cIixcbiAgICAgICAgICBcIldhcmRyb2JlIHVzYWdlIOKAlCBudWRnaW5nIHVuZGVyLXVzZWQgaXRlbXMgYmFjayBpbnRvIHJvdGF0aW9uLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcImZlYXNpYmlsaXR5XCIsXG4gICAgICAgIGxhYmVsOiBcIlRlY2huaWNhbCBGZWFzaWJpbGl0eVwiLFxuICAgICAgICBib2R5OiBcIkJ1aWx0IGJhY2tlbmQgc2VydmljZXMgaW4gUHl0aG9uIHdpdGggRmFzdEFQSSBhbmQgTW9uZ29EQiB0byBtYW5hZ2Ugd2FyZHJvYmUgZGF0YSBhbmQgZXhwb3NlIHJlY29tbWVuZGF0aW9uIHdvcmtmbG93cyB0aHJvdWdoIFJFU1QgQVBJcyDigJQgYSBzdGFjayBjaG9zZW4gZm9yIHJhcGlkIGl0ZXJhdGlvbiBhbmQgY2xlYW4gc2VwYXJhdGlvbiBiZXR3ZWVuIHRoZSBzY29yaW5nIGVuZ2luZSBhbmQgYW55IGZ1dHVyZSBjbGllbnQgYXBwLlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm1ldHJpY3NcIixcbiAgICAgICAgbGFiZWw6IFwiU3VjY2VzcyBNZXRyaWNzXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIk91dGZpdCBhY2NlcHRhbmNlIHJhdGUg4oCUIGhvdyBvZnRlbiBhIHRvcC1yYW5rZWQgcmVjb21tZW5kYXRpb24gaXMgd29ybi5cIixcbiAgICAgICAgICBcIldhcmRyb2JlIHV0aWxpemF0aW9uIOKAlCBwZXJjZW50YWdlIG9mIG93bmVkIGl0ZW1zIGFwcGVhcmluZyBpbiBhY2NlcHRlZCBvdXRmaXRzLlwiLFxuICAgICAgICAgIFwiVGltZS10by1kZWNpc2lvbiDigJQgcmVkdWN0aW9uIGluIGRhaWx5ICd3aGF0IHRvIHdlYXInIGRlbGliZXJhdGlvbi5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJvdXRjb21lc1wiLFxuICAgICAgICBsYWJlbDogXCJPdXRjb21lcyAmIExlYXJuaW5nc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJTaGlwcGVkIGEgd29ya2luZyBiYWNrZW5kIGNvdmVyaW5nIHRoZSBmdWxsIHdvcmtmbG93IOKAlCB3YXJkcm9iZSBkYXRhLCBvdXRmaXQgZ2VuZXJhdGlvbiBhbmQgcmVjb21tZW5kYXRpb24gcmFua2luZyBvdmVyIFJFU1QgQVBJcy5cIixcbiAgICAgICAgICBcIkl0ZXJhdGVkIHRoZSBzY29yaW5nIGZyYW1ld29yayBhY3Jvc3MgbXVsdGlwbGUgdmVyc2lvbnM7IHRyYW5zcGFyZW50LCBleHBsYWluYWJsZSByYW5raW5nIGJlYXQgb3BhcXVlICdBSSBtYWdpYycgaW4gdXNlciB0cnVzdC5cIixcbiAgICAgICAgICBcIkxlYXJuaW5nOiB0aGUgaGFyZGVzdCBwYXJ0IHdhc24ndCB0aGUgYWxnb3JpdGhtIOKAlCBpdCB3YXMgZGVmaW5pbmcgJ2dvb2QgdGFzdGUnIGFzIGEgbWVhc3VyYWJsZSBwcm9kdWN0IGRlY2lzaW9uLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcIm5leHRcIixcbiAgICAgICAgbGFiZWw6IFwiTmV4dCBTdGVwc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJQaG90by1iYXNlZCB3YXJkcm9iZSB1cGxvYWQgd2l0aCBhdXRvbWF0aWMgYXR0cmlidXRlIHRhZ2dpbmcgKGNvbXB1dGVyIHZpc2lvbikuXCIsXG4gICAgICAgICAgXCJBIGxpZ2h0d2VpZ2h0IG1vYmlsZSBjbGllbnQgb24gdG9wIG9mIHRoZSBleGlzdGluZyBBUElzLlwiLFxuICAgICAgICAgIFwiRmVlZGJhY2sgbG9vcHMg4oCUIGxlYXJuIGVhY2ggdXNlcidzIHRhc3RlIGZyb20gYWNjZXB0L3JlamVjdCBzaWduYWxzLlwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgaWQ6IFwidmliZXdpbm5cIixcbiAgICBpbmRleDogXCIwM1wiLFxuICAgIHRpdGxlOiBcIlZJQkVXSU5OXCIsXG4gICAgdGFnbGluZTogXCJBIG1hcmtldCBleHBsb3JhdGlvbiB0aGF0IGVuZGVkIGluIHRoZSByaWdodCBkZWNpc2lvbjogcGl2b3RpbmcgdGhlIHByb2R1Y3QuXCIsXG4gICAgY2F0ZWdvcnk6IFwiUHJvZHVjdCBEaXNjb3ZlcnkgwrcgTWFya2V0IFJlc2VhcmNoXCIsXG4gICAgeWVhcjogXCIyMDI1XCIsXG4gICAgcm9sZTogXCJQcm9kdWN0ICYgTWFya2V0IFJlc2VhcmNoZXJcIixcbiAgICBzdW1tYXJ5OlxuICAgICAgXCJBIGdyb3VuZC11cCBwcm9kdWN0ICYgbWFya2V0IGV4cGxvcmF0aW9uOiBzZWdtZW50LWJ5LXNlZ21lbnQgY2xpZW50IGludGVydmlld3MsIHByb2JsZW0tc29sdXRpb24gZml0IGFzc2Vzc21lbnQsIGFuZCB0aGUgZXZpZGVuY2UtYmFzZWQgcGl2b3QgZnJvbSBwYXBlci1iYWcgYWR2ZXJ0aXNpbmcgdG8gU21hcnQgRml0IEZyYW1lcy5cIixcbiAgICBoaWdobGlnaHRzOiBbXCIyMOKAkzMwIGNsaWVudCBjb252ZXJzYXRpb25zIHBlciBzZWdtZW50XCIsIFwiRXZpZGVuY2UtZHJpdmVuIHBpdm90XCIsIFwiUHJvYmxlbS1zb2x1dGlvbiBmaXQgYW5hbHlzaXNcIl0sXG4gICAgbGlua3M6IFtdLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJwcm9ibGVtXCIsXG4gICAgICAgIGxhYmVsOiBcIlRoZSBQcm9ibGVtXCIsXG4gICAgICAgIGJvZHk6IFwiVklCRVdJTk4gYmVnYW4gd2l0aCBhIGh5cG90aGVzaXM6IGxvY2FsIGJ1c2luZXNzZXMgbmVlZGVkIG5ldywgaGlnaC12aXNpYmlsaXR5IGFkdmVydGlzaW5nIHN1cmZhY2VzLCBhbmQgcGFwZXItYmFnIGFkdmVydGlzaW5nIGNvdWxkIGJlIG9uZS4gQmVmb3JlIGJ1aWxkaW5nIGFueXRoaW5nLCB0aGUgZ29hbCB3YXMgdG8gZmluZCBvdXQgd2hldGhlciB0aGUgcHJvYmxlbSB3YXMgcmVhbCwgd2hvIGZlbHQgaXQgbW9zdCwgYW5kIHdoZXRoZXIgb3VyIGNvbmNlcHQgYWN0dWFsbHkgc29sdmVkIGl0LlwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiBcInJlc2VhcmNoXCIsXG4gICAgICAgIGxhYmVsOiBcIlJlc2VhcmNoIEFwcHJvYWNoXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIkNvbmR1Y3RlZCBtYXJrZXQgcmVzZWFyY2ggYW5kIGVuZ2FnZWQgMjDigJMzMCBwb3RlbnRpYWwgY2xpZW50cyBwZXIgc2VnbWVudCB0byB1bmRlcnN0YW5kIGN1c3RvbWVyIG5lZWRzLCBhc3Nlc3MgZGVtYW5kIGFuZCBpZGVudGlmeSByZWN1cnJpbmcgcGFpbiBwb2ludHMuXCIsXG4gICAgICAgICAgXCJUcmVhdGVkIGV2ZXJ5IGNvbnZlcnNhdGlvbiBhcyBhIHRlc3Qgb2YgdGhlIGh5cG90aGVzaXMg4oCUIG5vdCBhIHNhbGVzIHBpdGNoLlwiLFxuICAgICAgICAgIFwiU3ludGhlc2l6ZWQgc3Rha2Vob2xkZXIgZmVlZGJhY2sgdG8gZXZhbHVhdGUgcHJvYmxlbS1zb2x1dGlvbiBmaXQgaG9uZXN0bHkuXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiaW5zaWdodHNcIixcbiAgICAgICAgbGFiZWw6IFwiS2V5IEluc2lnaHRzXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIlRoZSBpbml0aWFsIHBhcGVyLWJhZyBhZHZlcnRpc2luZyBjb25jZXB0IGhhZCByZWFsIGxpbWl0YXRpb25zIGluIHJlYWNoLCB0YXJnZXRpbmcgYW5kIHJlcGVhdGFiaWxpdHkuXCIsXG4gICAgICAgICAgXCJDdXN0b21lciBmZWVkYmFjayBrZXB0IHBvaW50aW5nIHRvd2FyZCBhIGRpZmZlcmVudCwgc2hhcnBlciBvcHBvcnR1bml0eSB0aGUgdGVhbSBoYWRuJ3QgcGxhbm5lZCBmb3IuXCIsXG4gICAgICAgICAgXCJUaGUgc3Ryb25nZXN0IHNpZ25hbDogY2xpZW50cyBkZXNjcmliZWQgdGhlaXIgcHJvYmxlbSBpbiB3YXlzIHRoYXQgbWF0Y2hlZCBTbWFydCBGaXQgRnJhbWVzLCBub3Qgb3VyIG9yaWdpbmFsIGlkZWEuXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZGVjaXNpb25cIixcbiAgICAgICAgbGFiZWw6IFwiVGhlIFByb2R1Y3QgRGVjaXNpb25cIixcbiAgICAgICAgYm9keTogXCJTdXBwb3J0ZWQgYSBwcm9kdWN0IHBpdm90IHRvd2FyZCBTbWFydCBGaXQgRnJhbWVzLCBncm91bmRlZCBpbiBjdXN0b21lciBmZWVkYmFjayBhbmQgdGhlIG1hcmtldCBvcHBvcnR1bml0aWVzIGlkZW50aWZpZWQgZHVyaW5nIHJlc2VhcmNoLiBUaGUgcGl2b3Qgd2Fzbid0IGEgZmFpbHVyZSBvZiB0aGUgb3JpZ2luYWwgaWRlYSDigJQgaXQgd2FzIHRoZSByZXNlYXJjaCB3b3JraW5nIGV4YWN0bHkgYXMgaW50ZW5kZWQuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwib3V0Y29tZXNcIixcbiAgICAgICAgbGFiZWw6IFwiT3V0Y29tZXMgJiBMZWFybmluZ3NcIixcbiAgICAgICAgYnVsbGV0czogW1xuICAgICAgICAgIFwiRmFsbCBpbiBsb3ZlIHdpdGggdGhlIHByb2JsZW0sIG5vdCB0aGUgZmlyc3Qgc29sdXRpb24g4oCUIHRoZSB3aWxsaW5nbmVzcyB0byBwaXZvdCBpcyBhIHByb2R1Y3Qgc2tpbGwsIG5vdCBhIHNldGJhY2suXCIsXG4gICAgICAgICAgXCJTbWFsbCwgc3RydWN0dXJlZCBzYW1wbGVzICgyMOKAkzMwIGNvbnZlcnNhdGlvbnMgcGVyIHNlZ21lbnQpIHN1cmZhY2UgcmVjdXJyaW5nIHBhaW4gZmFzdCB3aGVuIHlvdSBsaXN0ZW4gZm9yIHBhdHRlcm5zLlwiLFxuICAgICAgICAgIFwiU3Rha2Vob2xkZXIgZmVlZGJhY2sgb25seSBjcmVhdGVzIHZhbHVlIHdoZW4gaXQncyBzeW50aGVzaXplZCBpbnRvIGEgZGVjaXNpb24uXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwibmV4dFwiLFxuICAgICAgICBsYWJlbDogXCJOZXh0IFN0ZXBzXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIlZhbGlkYXRlIFNtYXJ0IEZpdCBGcmFtZXMgZGVtYW5kIHdpdGggdGhlIHNhbWUgc2VnbWVudC13aXNlIGludGVydmlldyByaWdvci5cIixcbiAgICAgICAgICBcIkRlZmluZSBhbiBNVlAgYW5kIG1lYXN1cmFibGUgc3VjY2VzcyBjcml0ZXJpYSBiZWZvcmUgYW55IGJ1aWxkIGludmVzdG1lbnQuXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGhjYXJlLXJlY29tbWVuZGF0aW9uXCIsXG4gICAgaW5kZXg6IFwiMDRcIixcbiAgICB0aXRsZTogXCJIZWFsdGhjYXJlIFJlY29tbWVuZGF0aW9uIFN5c3RlbVwiLFxuICAgIHRhZ2xpbmU6IFwiVHVybmluZyByYXcgc3ltcHRvbXMgaW50byBpbnRlcnByZXRhYmxlLCB0cnVzdHdvcnRoeSBoZWFsdGggZ3VpZGFuY2UuXCIsXG4gICAgY2F0ZWdvcnk6IFwiTUwgUHJvZHVjdCDCtyBEZWNpc2lvbiBTdXBwb3J0XCIsXG4gICAgeWVhcjogXCIyMDI0XCIsXG4gICAgcm9sZTogXCJQcm9kdWN0IFByb3RvdHlwZSBMZWFkXCIsXG4gICAgc3VtbWFyeTpcbiAgICAgIFwiQSBtYWNoaW5lLWxlYXJuaW5nIGRlY2lzaW9uLXN1cHBvcnQgcHJvdG90eXBlIHRoYXQgbWFwcyB1c2VyLXJlcG9ydGVkIHN5bXB0b21zIHRvIHByb2JhYmxlIGRpc2Vhc2UgY2F0ZWdvcmllcyDigJQgZGVzaWduZWQgZW5kIHRvIGVuZCBhcm91bmQgb25lIHByaW5jaXBsZTogYSByZWNvbW1lbmRhdGlvbiBub2JvZHkgdW5kZXJzdGFuZHMgaXMgYSByZWNvbW1lbmRhdGlvbiBub2JvZHkgdHJ1c3RzLlwiLFxuICAgIGhpZ2hsaWdodHM6IFtcIkV4cGxhaW5hYmlsaXR5LWZpcnN0IGRlc2lnblwiLCBcIkVuZC10by1lbmQgd29ya2Zsb3cgZGVzaWduXCIsIFwiUHl0aG9uIMK3IE1MIGNsYXNzaWZpY2F0aW9uXCJdLFxuICAgIGxpbmtzOiBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiBcIkdpdEh1YiByZXBvc2l0b3J5XCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FraGlsLVJlZGR5dmFyaS9oZWFsdGhjYXJlLXJlY29tbWVuZGF0aW9uLXN5c3RlbVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIHNlY3Rpb25zOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogXCJwcm9ibGVtXCIsXG4gICAgICAgIGxhYmVsOiBcIlRoZSBQcm9ibGVtXCIsXG4gICAgICAgIGJvZHk6IFwiUGVvcGxlIHNlYXJjaGluZyBzeW1wdG9tcyBvbmxpbmUgZmFjZSB0d28gYmFkIG91dGNvbWVzOiBhbGFybWluZyB3b3JzdC1jYXNlIGFuc3dlcnMsIG9yIG9wYXF1ZSBtb2RlbCBvdXRwdXRzIHRoZXkgY2FuJ3QganVkZ2UuIEhlYWx0aGNhcmUgZ3VpZGFuY2UgaXMgb25seSB1c2VmdWwgaWYgYSBsYXlwZXJzb24gY2FuIHVuZGVyc3RhbmQgd2h5IGl0J3MgYmVpbmcgZ2l2ZW4uXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwidXNlcnNcIixcbiAgICAgICAgbGFiZWw6IFwiVGFyZ2V0IFVzZXJzXCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIlVzZXJzIHNlZWtpbmcgYSByZWxpYWJsZSBmaXJzdC1wYXNzIGludGVycHJldGF0aW9uIG9mIHN5bXB0b21zIGJlZm9yZSBkZWNpZGluZyBvbiBjYXJlLlwiLFxuICAgICAgICAgIFwiTm9uLXRlY2huaWNhbCB1c2VycyB3aG8gbmVlZCBpbnRlcnByZXRhYmxlIG91dHB1dHMsIG5vdCByYXcgcHJvYmFiaWxpdGllcy5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJzb2x1dGlvblwiLFxuICAgICAgICBsYWJlbDogXCJQcm9wb3NlZCBTb2x1dGlvblwiLFxuICAgICAgICBib2R5OiBcIkEgbWFjaGluZS1sZWFybmluZy1iYXNlZCBkZWNpc2lvbi1zdXBwb3J0IHByb3RvdHlwZSB0aGF0IG1hcHMgdXNlci1yZXBvcnRlZCBzeW1wdG9tcyB0byBwcm9iYWJsZSBkaXNlYXNlIGNhdGVnb3JpZXMsIHRoZW4gcHJlc2VudHMgdGhlIG91dHB1dCBhcyBpbnRlcnByZXRhYmxlIHJlY29tbWVuZGF0aW9ucyByYXRoZXIgdGhhbiBibGFjay1ib3ggcHJlZGljdGlvbnMuXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZmxvd1wiLFxuICAgICAgICBsYWJlbDogXCJQcm9kdWN0IFdvcmtmbG93XCIsXG4gICAgICAgIGJ1bGxldHM6IFtcbiAgICAgICAgICBcIlVzZXIgaW5wdXQg4oCUIHN0cnVjdHVyZWQgY2FwdHVyZSBvZiByZXBvcnRlZCBzeW1wdG9tcy5cIixcbiAgICAgICAgICBcIlByZXByb2Nlc3Npbmcg4oCUIGNsZWFuaW5nIGFuZCBlbmNvZGluZyBpbnB1dHMgZm9yIHRoZSBtb2RlbC5cIixcbiAgICAgICAgICBcIk1vZGVsIGluZmVyZW5jZSDigJQgY2xhc3NpZmljYXRpb24gaW50byBwcm9iYWJsZSBkaXNlYXNlIGNhdGVnb3JpZXMuXCIsXG4gICAgICAgICAgXCJSZWNvbW1lbmRhdGlvbiBvdXRwdXQg4oCUIGV2YWx1YXRlZCwgaW50ZXJwcmV0YWJsZSByZXN1bHRzIHRoZSB1c2VyIGNhbiBhY3Qgb24uXCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6IFwiZmVhc2liaWxpdHlcIixcbiAgICAgICAgbGFiZWw6IFwiVGVjaG5pY2FsIEZlYXNpYmlsaXR5XCIsXG4gICAgICAgIGJvZHk6IFwiQnVpbHQgaW4gUHl0aG9uIHVzaW5nIGNsYXNzaWZpY2F0aW9uIG1vZGVscyB3aXRoIGZlYXR1cmUgZW5naW5lZXJpbmcgb3ZlciBzdHJ1Y3R1cmVkIGhlYWx0aGNhcmUgZGF0YSwgd2l0aCBleHBsYWluYWJpbGl0eSB0ZWNobmlxdWVzIGxheWVyZWQgb24gdG9wIHNvIGV2ZXJ5IHJlY29tbWVuZGF0aW9uIGNhcnJpZXMgaXRzIHJlYXNvbmluZy5cIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJtZXRyaWNzXCIsXG4gICAgICAgIGxhYmVsOiBcIlN1Y2Nlc3MgTWV0cmljc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJNb2RlbCBhY2N1cmFjeSBhY3Jvc3MgZGlzZWFzZSBjYXRlZ29yaWVzLlwiLFxuICAgICAgICAgIFwiSW50ZXJwcmV0YWJpbGl0eSDigJQgd2hldGhlciB1c2VycyBjYW4gc3RhdGUgd2h5IGEgcmVjb21tZW5kYXRpb24gd2FzIG1hZGUuXCIsXG4gICAgICAgICAgXCJPdXRwdXQgZXZhbHVhdGlvbiDigJQgc3lzdGVtYXRpYyByZXZpZXcgb2YgbW9kZWwgb3V0cHV0cyBhZ2FpbnN0IHN0cnVjdHVyZWQgZGF0YS5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJvdXRjb21lc1wiLFxuICAgICAgICBsYWJlbDogXCJPdXRjb21lcyAmIExlYXJuaW5nc1wiLFxuICAgICAgICBidWxsZXRzOiBbXG4gICAgICAgICAgXCJEZWxpdmVyZWQgYSB3b3JraW5nIHByb3RvdHlwZSBjb3ZlcmluZyB0aGUgZnVsbCBmbG93IGZyb20gc3ltcHRvbSBpbnB1dCB0byBpbnRlcnByZXRhYmxlIHJlY29tbWVuZGF0aW9uLlwiLFxuICAgICAgICAgIFwiTGVhcm5pbmc6IGluIGhpZ2gtc3Rha2VzIGRvbWFpbnMsIHRydXN0IGlzIHRoZSBwcm9kdWN0IOKAlCBhY2N1cmFjeSB3aXRob3V0IGV4cGxhaW5hYmlsaXR5IGRvZXNuJ3Qgc2hpcC5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogXCJuZXh0XCIsXG4gICAgICAgIGxhYmVsOiBcIk5leHQgU3RlcHNcIixcbiAgICAgICAgYnVsbGV0czogW1xuICAgICAgICAgIFwiRXhwYW5kIHN5bXB0b20gY292ZXJhZ2UgYW5kIHZhbGlkYXRlIGFnYWluc3QgbGFyZ2VyIGRhdGFzZXRzLlwiLFxuICAgICAgICAgIFwiQWRkIGNsZWFyIHNhZmV0eSBib3VuZGFyaWVzIOKAlCB3aGVuIHRoZSBzeXN0ZW0gbXVzdCBkZWZlciB0byBhIGRvY3Rvci5cIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBURUFSRE9XTlMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJEdW9saW5nbyDigJQgVGhlIFBzeWNob2xvZ3kgb2YgU3RyZWFrc1wiLFxuICAgIGZvY3VzOiBcIlJldGVudGlvbiBsb29wcyAmIGJlaGF2aW9yYWwgVVhcIixcbiAgICBpbnNpZ2h0OlxuICAgICAgXCJMb3NzIGF2ZXJzaW9uLCBzdHJlYWsgZnJlZXplcyBhbmQgcGVyZmVjdGx5LXRpbWVkIGd1aWx0IG5vdGlmaWNhdGlvbnMga2VlcCBEMzAgcmV0ZW50aW9uIGhpZ2guIFRoZSBsZXNzb246IHRoZSBiZXN0IHJldGVudGlvbiBtZWNoYW5pYyBpcyBvbmUgdXNlcnMgd291bGQgZGVmZW5kIGluIHlvdXIgcGxhY2UuXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJOb3Rpb24gQUkg4oCUIEluLUNvbnRleHQgR2VuZXJhdGlvblwiLFxuICAgIGZvY3VzOiBcIkFJIGludGVyYWN0aW9uIGRlc2lnblwiLFxuICAgIGluc2lnaHQ6XG4gICAgICBcIkFJIHRoYXQgbGl2ZXMgaW5zaWRlIHRoZSBjYW52YXMgYmVhdHMgQUkgdGhhdCBsaXZlcyBpbiBhIHNpZGViYXIuIFRyaWdnZXIgZGlzY292ZXJ5IChzbGFzaCBjb21tYW5kcyksIHN0cmVhbWluZyByZXNwb25zZXMgYW5kIGFjY2VwdC9yZWplY3QgbWljcm8tZGVjaXNpb25zIG1ha2UgZ2VuZXJhdGlvbiBmZWVsIGxpa2UgY29sbGFib3JhdGlvbi5cIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlplcm9kaGEgS2l0ZSDigJQgVHJ1c3QgVGhyb3VnaCBSZXN0cmFpbnRcIixcbiAgICBmb2N1czogXCJJbmZvcm1hdGlvbiBkZW5zaXR5IGluIGhpZ2gtc3Rha2VzIFVJXCIsXG4gICAgaW5zaWdodDpcbiAgICAgIFwiWmVybyBjbHV0dGVyLCBpbnN0YW50IGV4ZWN1dGlvbiBhbmQgbm8gZGFyayBwYXR0ZXJucyDigJQgaW4gYSBwcm9kdWN0IGhhbmRsaW5nIHBlb3BsZSdzIG1vbmV5LCByZXN0cmFpbnQgaXMgdGhlIGZlYXR1cmUuIEV2ZXJ5IHJlbW92ZWQgZWxlbWVudCBpcyBhIGRlcG9zaXQgaW4gdGhlIHRydXN0IGFjY291bnQuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgU0tJTExfR1JPVVBTID0gW1xuICB7XG4gICAgdGl0bGU6IFwiUHJvZHVjdFwiLFxuICAgIGl0ZW1zOiBbXCJQcm9kdWN0IERldmVsb3BtZW50XCIsIFwiUHJvZHVjdCBEaXNjb3ZlcnlcIiwgXCJVc2VyLUNlbnRyaWMgUHJvYmxlbSBTb2x2aW5nXCIsIFwiUmFwaWQgUHJvdG90eXBpbmdcIiwgXCJQcm9ibGVtIFByaW9yaXRpemF0aW9uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQW5hbHl0aWNzXCIsXG4gICAgaXRlbXM6IFtcIlNRTFwiLCBcIkRhdGEgQW5hbHlzaXNcIiwgXCJFeHBsb3JhdG9yeSBEYXRhIEFuYWx5c2lzXCIsIFwiU3RhdGlzdGljYWwgQW5hbHlzaXNcIiwgXCJEYXRhIEludGVycHJldGF0aW9uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiRW5naW5lZXJpbmcgRmx1ZW5jeVwiLFxuICAgIGl0ZW1zOiBbXCJQeXRob25cIiwgXCJKYXZhXCIsIFwiRmFzdEFQSVwiLCBcIlJFU1QgQVBJc1wiLCBcIk1vbmdvREJcIiwgXCJBUEkgSW50ZWdyYXRpb25cIl0sXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJNYWNoaW5lIExlYXJuaW5nXCIsXG4gICAgaXRlbXM6IFtcIlJlY29tbWVuZGF0aW9uIFN5c3RlbXNcIiwgXCJDbGFzc2lmaWNhdGlvblwiLCBcIkZlYXR1cmUgRW5naW5lZXJpbmdcIiwgXCJNb2RlbCBFdmFsdWF0aW9uXCJdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWV0aG9kcyAmIFRvb2xzXCIsXG4gICAgaXRlbXM6IFtcIkFnaWxlXCIsIFwiU2NydW1cIiwgXCJTRExDXCIsIFwiR2l0ICYgR2l0SHViXCIsIFwiSnVweXRlciAvIENvbGFiXCIsIFwiRXhjZWwgJiBTaGVldHNcIl0sXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQ0VSVElGSUNBVElPTlMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJQcm9qZWN0IE1hbmFnZW1lbnQgQXNzZXNzbWVudFwiLFxuICAgIGlzc3VlcjogXCJMZWFyblR1YmUuYWlcIixcbiAgICBkYXRlOiBcIkp1bHkgMjAyNlwiLFxuICAgIGlkOiBcIkRKQS1CLTEtMjgxMTA5Ny0wXCIsXG4gICAgaHJlZjogXCJodHRwczovL2N1c3RvbWVyLWFzc2V0cy0wejM2Yjgyai5lbWVyZ2VudGFnZW50Lm5ldC9qb2JfM2M3NWI5YjYtNGNlNC00YzU2LTkxYzQtYjhlMTA2MDNmZDQ4L2FydGlmYWN0cy80OGt1M3IwdF9Qcm9qZWN0X01hbmFnZW1lbnRfUmVkZHl2YXJpX0NlcnRpZmljYXRlLnBkZlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTWFjaGluZSBMZWFybmluZyBBc3Nlc3NtZW50XCIsXG4gICAgaXNzdWVyOiBcIkxlYXJuVHViZS5haVwiLFxuICAgIGRhdGU6IFwiSnVseSAyMDI2XCIsXG4gICAgaWQ6IFwiREpBLUItMS0yODUxNTk1LTBcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBMRUFERVJTSElQID0gW1xuICB7XG4gICAgdGl0bGU6IFwiVG91cm5hbWVudCBPcmdhbml6ZXJcIixcbiAgICBib2R5OiBcIk9yZ2FuaXplZCBhbmQgbWFuYWdlZCBsb2NhbCBjcmlja2V0IHRvdXJuYW1lbnRzIGVuZCB0byBlbmQg4oCUIGNvb3JkaW5hdGluZyB0ZWFtcywgc2NoZWR1bGVzLCBsb2dpc3RpY3MgYW5kIGxpdmUgZXZlbnQgZXhlY3V0aW9uLiBTdGFrZWhvbGRlciBtYW5hZ2VtZW50IHdpdGggcmVhbCBzdGFrZXMgYW5kIG5vIHVuZG8gYnV0dG9uLlwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ29sbGVnZSBDcmlja2V0IFRlYW1cIixcbiAgICBib2R5OiBcIkFjdGl2ZSBtZW1iZXIgb2YgdGhlIGNvbGxlZ2UgY3JpY2tldCB0ZWFtIOKAlCB0ZWFtd29yaywgY29sbGFib3JhdGlvbiBhbmQgcGVyZm9ybWFuY2Utb3JpZW50ZWQgdHJhaW5pbmcgdW5kZXIgcHJlc3N1cmUuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgSU5URVJFU1RTID0gW1wiUHJvZHVjdCBNYW5hZ2VtZW50XCIsIFwiUHJvZHVjdCBEaXNjb3ZlcnlcIiwgXCJVc2VyIFJlc2VhcmNoXCIsIFwiUHJvZHVjdCBTdHJhdGVneVwiLCBcIlByb2R1Y3QgQW5hbHl0aWNzXCIsIFwiQ29uc3VtZXIgVGVjaG5vbG9neVwiLCBcIkZpbnRlY2hcIiwgXCJBSSBQcm9kdWN0c1wiXTtcblxuZXhwb3J0IGNvbnN0IFRFQ0hfUFJPSkVDVFMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJTdHlsZU1hdGUg4oCUIEFJIFBlcnNvbmFsIFdhcmRyb2JlICYgT3V0Zml0IFJlY29tbWVuZGF0aW9uXCIsXG4gICAgbGFuZzogXCJQeXRob25cIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Ba2hpbC1SZWRkeXZhcmkvU3R5bGVNYXRlLS0tQUktUG93ZXJlZC1QZXJzb25hbC1XYXJkcm9iZS1hbmQtT3V0Zml0LVJlY29tbWVuZGF0aW9uLVN5c3RlbVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiSGVhbHRoY2FyZSBSZWNvbW1lbmRhdGlvbiBTeXN0ZW1cIixcbiAgICBsYW5nOiBcIlB5dGhvblwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FraGlsLVJlZGR5dmFyaS9oZWFsdGhjYXJlLXJlY29tbWVuZGF0aW9uLXN5c3RlbVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiQ2xvdWRTY2FsZS1NQVJMXCIsXG4gICAgbGFuZzogXCJQeXRob25cIixcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9Ba2hpbC1SZWRkeXZhcmkvQ2xvdWRTY2FsZS1NQVJMXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJTcGVlY2ggUHJvY2Vzc2luZyBQcm9qZWN0XCIsXG4gICAgbGFuZzogXCJKdXB5dGVyIE5vdGVib29rXCIsXG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vQWtoaWwtUmVkZHl2YXJpL1NwZWVjaC1Qcm9jZXNzaW5nLVByb2plY3RcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlNwZWVjaCBQcm9jZXNzaW5nIExhYlwiLFxuICAgIGxhbmc6IFwiSnVweXRlciBOb3RlYm9va1wiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FraGlsLVJlZGR5dmFyaS9TcGVlY2gtUHJvY2Vzc2luZy1MYWJcIixcbiAgfSxcbl07XG4iXX0=