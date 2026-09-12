import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Hero.tsx");const useRef = __vite__cjsImport0_react["useRef"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a3f0ba77";
import { motion, useMotionValue, useTransform, useScroll } from "/node_modules/.vite/deps/motion_react.js?v=a3f0ba77";
import { ArrowDown, Github, Linkedin } from "/src/lib/lucide-react.tsx";
import { PROFILE } from "/src/data/portfolio.ts?t=1789229820776";
import { scrollToId } from "/src/lib/scroll.ts";
var _jsxFileName = "/app/frontend/src/components/Hero.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a3f0ba77";
var _s = $RefreshSig$();
const lineVariants = {
	hidden: { y: "115%" },
	show: (i) => ({
		y: "0%",
		transition: {
			duration: 1,
			delay: .2 + i * .14,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	})
};
const MaskedLine = ({ children, i, className }) => /* @__PURE__ */ _jsxDEV("span", {
	className: "block overflow-hidden pb-[0.08em] -mb-[0.08em]",
	"x-file-name": "Hero",
	"x-line-number": "16",
	"x-column": "2",
	"x-component": "span",
	"x-id": "Hero_16_2",
	"x-dynamic": "false",
	children: /* @__PURE__ */ _jsxDEV(motion.span, {
		className: `block ${className ?? ""}`,
		custom: i,
		variants: lineVariants,
		initial: "hidden",
		animate: "show",
		"x-file-name": "Hero",
		"x-line-number": "17",
		"x-column": "4",
		"x-component": "span",
		"x-id": "Hero_17_4",
		"x-dynamic": "true",
		"x-source-type": "prop",
		"x-source-var": "children",
		"x-source-editable": "false",
		children
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 5
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 27,
	columnNumber: 7
}, this);
_c = MaskedLine;
export const Hero = () => {
	_s();
	const ref = useRef(null);
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rotateX = useTransform(my, [-.5, .5], [10, -10]);
	const rotateY = useTransform(mx, [-.5, .5], [-12, 12]);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
	const fade = useTransform(scrollYProgress, [0, .7], [1, 0]);
	const onMove = (e) => {
		const r = e.currentTarget.getBoundingClientRect();
		mx.set((e.clientX - r.left) / r.width - .5);
		my.set((e.clientY - r.top) / r.height - .5);
	};
	return /* @__PURE__ */ _jsxDEV("section", {
		ref,
		"data-testid": "hero-section",
		onMouseMove: onMove,
		className: "relative min-h-svh overflow-hidden",
		"x-file-name": "Hero",
		"x-line-number": "41",
		"x-column": "4",
		"x-component": "section",
		"x-id": "Hero_41_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(motion.div, {
				style: { y: bgY },
				className: "absolute inset-0 hero-grid-bg",
				"x-file-name": "Hero",
				"x-line-number": "42",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Hero_42_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-[140px]",
				"x-file-name": "Hero",
				"x-line-number": "43",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Hero_43_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 55,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "absolute top-1/3 -right-48 h-[30rem] w-[30rem] rounded-full bg-volt/10 blur-[140px]",
				"x-file-name": "Hero",
				"x-line-number": "44",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Hero_44_6",
				"x-dynamic": "false"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 56,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(motion.div, {
				style: { opacity: fade },
				className: "pointer-events-none absolute inset-0 flex items-center justify-center",
				"x-file-name": "Hero",
				"x-line-number": "45",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Hero_45_6",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV("span", {
					className: "font-display text-[24vw] font-bold uppercase leading-none text-stroke opacity-40 select-none",
					"x-file-name": "Hero",
					"x-line-number": "46",
					"x-column": "8",
					"x-component": "span",
					"x-id": "Hero_46_8",
					"x-dynamic": "false",
					children: "PM"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 60,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "relative z-10 mx-auto grid min-h-svh max-w-7xl grid-cols-1 items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.35fr_1fr] lg:pt-16",
				"x-file-name": "Hero",
				"x-line-number": "49",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Hero_49_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("div", {
					"x-file-name": "Hero",
					"x-line-number": "50",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Hero_50_8",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .1,
								duration: .6
							},
							className: "mb-8 flex items-center gap-3",
							"x-file-name": "Hero",
							"x-line-number": "51",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Hero_51_10",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("span", {
								className: "h-1.5 w-1.5 rounded-full bg-lime animate-pulse-dot",
								"x-file-name": "Hero",
								"x-line-number": "57",
								"x-column": "12",
								"x-component": "span",
								"x-id": "Hero_57_12",
								"x-dynamic": "false"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 13
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-400",
								"x-file-name": "Hero",
								"x-line-number": "58",
								"x-column": "12",
								"x-component": "span",
								"x-id": "Hero_58_12",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "PROFILE",
								"x-source-file": "@/data/portfolio",
								"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
								"x-source-line": "22",
								"x-source-path": "availability",
								"x-source-editable": "true",
								children: PROFILE.availability
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 76,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 65,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV("h1", {
							className: "font-display text-[15vw] font-bold uppercase leading-[0.92] tracking-tight text-zinc-100 sm:text-7xl lg:text-[6.2rem]",
							"x-file-name": "Hero",
							"x-line-number": "61",
							"x-column": "10",
							"x-component": "h1",
							"x-id": "Hero_61_10",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV(MaskedLine, {
									i: 0,
									"x-file-name": "Hero",
									"x-line-number": "62",
									"x-column": "12",
									"x-component": "MaskedLine",
									"x-id": "Hero_62_12",
									"x-dynamic": "false",
									children: "Products"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV(MaskedLine, {
									i: 1,
									"x-file-name": "Hero",
									"x-line-number": "63",
									"x-column": "12",
									"x-component": "MaskedLine",
									"x-id": "Hero_63_12",
									"x-dynamic": "false",
									children: ["begin with", /* @__PURE__ */ _jsxDEV("span", {
										className: "text-lime",
										"x-file-name": "Hero",
										"x-line-number": "64",
										"x-column": "24",
										"x-component": "span",
										"x-id": "Hero_64_24",
										"x-dynamic": "false",
										children: "."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 82,
										columnNumber: 25
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV(MaskedLine, {
									i: 2,
									className: "text-stroke-lime",
									"x-file-name": "Hero",
									"x-line-number": "66",
									"x-column": "12",
									"x-component": "MaskedLine",
									"x-id": "Hero_66_12",
									"x-dynamic": "false",
									children: "Problems"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 84,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 79,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: .85,
								duration: .8
							},
							className: "mt-8 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg",
							"x-file-name": "Hero",
							"x-line-number": "71",
							"x-column": "10",
							"x-component": "p",
							"x-id": "Hero_71_10",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "PROFILE",
							"x-source-file": "@/data/portfolio",
							"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
							"x-source-line": "22",
							"x-source-path": "tagline",
							"x-source-editable": "true",
							children: [
								"I'm ",
								/* @__PURE__ */ _jsxDEV("span", {
									className: "text-zinc-100 font-medium",
									"x-file-name": "Hero",
									"x-line-number": "77",
									"x-column": "16",
									"x-component": "span",
									"x-id": "Hero_77_16",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "PROFILE",
									"x-source-file": "@/data/portfolio",
									"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
									"x-source-line": "22",
									"x-source-path": "shortName",
									"x-source-editable": "true",
									children: PROFILE.shortName
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 99,
									columnNumber: 17
								}, this),
								" — an aspiring product manager who finds the user problem first, then earns the right to build. ",
								/* @__PURE__ */ _jsxDEV("span", {
									"data-ve-dynamic": "true",
									"x-excluded": "true",
									style: { display: "contents" },
									"x-file-name": "Hero",
									"x-line-number": "71",
									"x-column": "10",
									"x-component": "p",
									"x-id": "Hero_71_10_expr3",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "PROFILE",
									"x-source-file": "@/data/portfolio",
									"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
									"x-source-line": "22",
									"x-source-path": "tagline",
									"x-source-editable": "true",
									children: PROFILE.tagline
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 100,
									columnNumber: 68
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 89,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ _jsxDEV(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								delay: 1,
								duration: .8
							},
							className: "mt-10 flex flex-wrap items-center gap-4",
							"x-file-name": "Hero",
							"x-line-number": "81",
							"x-column": "10",
							"x-component": "div",
							"x-id": "Hero_81_10",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("button", {
									"data-testid": "hero-view-work-button",
									onClick: () => scrollToId("work"),
									className: "group flex items-center gap-3 rounded-full bg-lime px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-105",
									"x-file-name": "Hero",
									"x-line-number": "87",
									"x-column": "12",
									"x-component": "button",
									"x-id": "Hero_87_12",
									"x-dynamic": "false",
									children: ["View case studies", /* @__PURE__ */ _jsxDEV(ArrowDown, {
										size: 15,
										className: "transition-transform duration-300 group-hover:translate-y-1",
										"x-file-name": "Hero",
										"x-line-number": "93",
										"x-column": "14",
										"x-component": "ArrowDown",
										"x-id": "Hero_93_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 117,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 115,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("a", {
									href: PROFILE.github,
									target: "_blank",
									rel: "noopener noreferrer",
									"data-testid": "hero-github-link",
									className: "flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-zinc-300 transition-colors duration-300 hover:border-lime hover:text-lime",
									"x-file-name": "Hero",
									"x-line-number": "95",
									"x-column": "12",
									"x-component": "a",
									"x-id": "Hero_95_12",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(Github, {
										size: 15,
										"x-file-name": "Hero",
										"x-line-number": "102",
										"x-column": "14",
										"x-component": "Github",
										"x-id": "Hero_102_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 120,
										columnNumber: 15
									}, this), " GitHub"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 119,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ _jsxDEV("a", {
									href: PROFILE.linkedin,
									target: "_blank",
									rel: "noopener noreferrer",
									"data-testid": "hero-linkedin-link",
									className: "flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-zinc-300 transition-colors duration-300 hover:border-lime hover:text-lime",
									"x-file-name": "Hero",
									"x-line-number": "104",
									"x-column": "12",
									"x-component": "a",
									"x-id": "Hero_104_12",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV(Linkedin, {
										size: 15,
										"x-file-name": "Hero",
										"x-line-number": "111",
										"x-column": "14",
										"x-component": "Linkedin",
										"x-id": "Hero_111_14",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 15
									}, this), " LinkedIn"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 122,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV(motion.div, {
					initial: {
						opacity: 0,
						y: 40
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: 1.1,
						duration: 1
					},
					className: "hidden lg:block",
					style: { perspective: 1e3 },
					"x-file-name": "Hero",
					"x-line-number": "116",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Hero_116_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(motion.div, {
						"data-testid": "hero-card",
						style: {
							rotateX,
							rotateY,
							transformStyle: "preserve-3d"
						},
						className: "relative rounded-2xl border border-white/10 bg-panel/80 p-8 backdrop-blur-xl shadow-2xl shadow-black/50",
						"x-file-name": "Hero",
						"x-line-number": "123",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Hero_123_10",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex items-center justify-between",
								"x-file-name": "Hero",
								"x-line-number": "128",
								"x-column": "12",
								"x-component": "div",
								"x-id": "Hero_128_12",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.25em] text-lime",
									"x-file-name": "Hero",
									"x-line-number": "129",
									"x-column": "14",
									"x-component": "span",
									"x-id": "Hero_129_14",
									"x-dynamic": "false",
									children: "Candidate profile"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 146,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-[10px] text-zinc-500",
									"x-file-name": "Hero",
									"x-line-number": "130",
									"x-column": "14",
									"x-component": "span",
									"x-id": "Hero_130_14",
									"x-dynamic": "false",
									children: "EST. 2023"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 147,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 145,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("h3", {
								className: "mt-6 font-display text-3xl font-semibold leading-tight text-zinc-100",
								"x-file-name": "Hero",
								"x-line-number": "132",
								"x-column": "12",
								"x-component": "h3",
								"x-id": "Hero_132_12",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "PROFILE",
								"x-source-file": "@/data/portfolio",
								"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
								"x-source-line": "22",
								"x-source-path": "name",
								"x-source-editable": "true",
								children: PROFILE.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("p", {
								className: "mt-2 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400",
								"x-file-name": "Hero",
								"x-line-number": "133",
								"x-column": "12",
								"x-component": "p",
								"x-id": "Hero_133_12",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "PROFILE",
								"x-source-file": "@/data/portfolio",
								"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
								"x-source-line": "22",
								"x-source-path": "role",
								"x-source-editable": "true",
								children: PROFILE.role
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-8 space-y-4 border-t border-white/10 pt-6",
								"x-file-name": "Hero",
								"x-line-number": "134",
								"x-column": "12",
								"x-component": "div",
								"x-id": "Hero_134_12",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: [
									["Education", "B.Tech — AI & Data Science"],
									["University", "Amrita Vishwa Vidyapeetham"],
									["Base", PROFILE.location],
									["Focus", "Discovery → Strategy → Delivery"]
								].map(([k, v]) => /* @__PURE__ */ _jsxDEV("div", {
									className: "flex items-baseline justify-between gap-4",
									"x-file-name": "Hero",
									"x-line-number": "141",
									"x-column": "16",
									"x-component": "div",
									"x-id": "Hero_141_16",
									"x-dynamic": "false",
									children: [/* @__PURE__ */ _jsxDEV("span", {
										className: "font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500",
										"x-file-name": "Hero",
										"x-line-number": "142",
										"x-column": "18",
										"x-component": "span",
										"x-id": "Hero_142_18",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "k",
										"x-source-editable": "false",
										children: k
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 153,
										columnNumber: 19
									}, this), /* @__PURE__ */ _jsxDEV("span", {
										className: "text-right text-sm text-zinc-200",
										"x-file-name": "Hero",
										"x-line-number": "143",
										"x-column": "18",
										"x-component": "span",
										"x-id": "Hero_143_18",
										"x-dynamic": "true",
										"x-source-type": "unknown",
										"x-source-var": "v",
										"x-source-editable": "false",
										children: v
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 154,
										columnNumber: 19
									}, this)]
								}, k, true, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 198
								}, this))
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-8 flex items-center justify-between rounded-xl bg-lime/10 border border-lime/20 px-4 py-3",
								style: { transform: "translateZ(30px)" },
								"x-file-name": "Hero",
								"x-line-number": "147",
								"x-column": "12",
								"x-component": "div",
								"x-id": "Hero_147_12",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-lime",
									"x-file-name": "Hero",
									"x-line-number": "148",
									"x-column": "14",
									"x-component": "span",
									"x-id": "Hero_148_14",
									"x-dynamic": "false",
									children: "4 case studies"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 160,
									columnNumber: 15
								}, this), /* @__PURE__ */ _jsxDEV("span", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-300",
									"x-file-name": "Hero",
									"x-line-number": "149",
									"x-column": "14",
									"x-component": "span",
									"x-id": "Hero_149_14",
									"x-dynamic": "false",
									children: "1 pivot · 2 builds · 1 strategy"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 161,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 157,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 128,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(motion.button, {
				"data-testid": "hero-scroll-indicator",
				onClick: () => scrollToId("manifesto"),
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: { delay: 1.6 },
				className: "absolute bottom-6 left-1/2 z-10 -translate-x-1/2",
				"aria-label": "Scroll down",
				"x-file-name": "Hero",
				"x-line-number": "155",
				"x-column": "6",
				"x-component": "button",
				"x-id": "Hero_155_6",
				"x-dynamic": "false",
				children: /* @__PURE__ */ _jsxDEV(motion.div, {
					animate: { y: [
						0,
						8,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 2
					},
					"x-file-name": "Hero",
					"x-line-number": "164",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Hero_164_8",
					"x-dynamic": "false",
					children: /* @__PURE__ */ _jsxDEV(ArrowDown, {
						size: 18,
						className: "text-zinc-500",
						"x-file-name": "Hero",
						"x-line-number": "165",
						"x-column": "10",
						"x-component": "ArrowDown",
						"x-id": "Hero_165_10",
						"x-dynamic": "false"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 180,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 174,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 167,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 51,
		columnNumber: 10
	}, this);
};
_s(Hero, "LMfV88c//hryakPwZgCj4ywnHGA=", false, function() {
	return [
		useMotionValue,
		useMotionValue,
		useTransform,
		useTransform,
		useScroll,
		useTransform,
		useTransform
	];
});
_c2 = Hero;
var _c, _c2;
$RefreshReg$(_c, "MaskedLine");
$RefreshReg$(_c2, "Hero");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Hero.tsx?t=1789229820776";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Hero.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Hero.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Hero.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QkFDbkg7Ozs7OztNQUNLOzs7Ozs7SUFDRjs7OztZQUNUOzs7Ozs7R0FFTCx3QkFBQyxPQUFPLFFBQVI7SUFDRSxlQUFZO0lBQ1osZUFBZW5ELFdBQVcsV0FBVztJQUNyQyxTQUFTLEVBQUVvQyxTQUFTLEVBQUU7SUFDdEIsU0FBUyxFQUFFQSxTQUFTLEVBQUU7SUFDdEIsWUFBWSxFQUFFNUIsT0FBTyxJQUFJO0lBQ3pCLFdBQVU7SUFDVixjQUFXO0lBQWE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBRXhCLHdCQUFDLE9BQU8sS0FBUjtLQUFZLFNBQVMsRUFBRUwsR0FBRztNQUFDO01BQUc7TUFBRztLQUFDLEVBQUU7S0FBRyxZQUFZO01BQUVpRCxRQUFRQztNQUFVOUMsVUFBVTtLQUFFO0tBQUU7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQ25GLHdCQUFDLFdBQUQ7TUFBVyxNQUFNO01BQUksV0FBVTtNQUFlO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtLQUFBOzs7OztJQUNwQzs7Ozs7R0FDQzs7Ozs7RUFDUjs7Ozs7O0FBRWIiLCJuYW1lcyI6WyJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VNb3Rpb25WYWx1ZSIsInVzZVRyYW5zZm9ybSIsInVzZVNjcm9sbCIsIkFycm93RG93biIsIkdpdGh1YiIsIkxpbmtlZGluIiwiUFJPRklMRSIsInNjcm9sbFRvSWQiLCJsaW5lVmFyaWFudHMiLCJoaWRkZW4iLCJ5Iiwic2hvdyIsImkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImVhc2UiLCJNYXNrZWRMaW5lIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJIZXJvIiwicmVmIiwibXgiLCJteSIsInJvdGF0ZVgiLCJyb3RhdGVZIiwic2Nyb2xsWVByb2dyZXNzIiwidGFyZ2V0Iiwib2Zmc2V0IiwiYmdZIiwiZmFkZSIsIm9uTW92ZSIsImUiLCJyIiwiY3VycmVudFRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNldCIsImNsaWVudFgiLCJsZWZ0Iiwid2lkdGgiLCJjbGllbnRZIiwidG9wIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImF2YWlsYWJpbGl0eSIsInNob3J0TmFtZSIsImRpc3BsYXkiLCJ0YWdsaW5lIiwiZ2l0aHViIiwibGlua2VkaW4iLCJwZXJzcGVjdGl2ZSIsInRyYW5zZm9ybVN0eWxlIiwibmFtZSIsInJvbGUiLCJsb2NhdGlvbiIsIm1hcCIsImsiLCJ2IiwidHJhbnNmb3JtIiwicmVwZWF0IiwiSW5maW5pdHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiSGVyby50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZU1vdGlvblZhbHVlLCB1c2VUcmFuc2Zvcm0sIHVzZVNjcm9sbCB9IGZyb20gXCJtb3Rpb24vcmVhY3RcIjtcbmltcG9ydCB7IEFycm93RG93biwgR2l0aHViLCBMaW5rZWRpbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IFBST0ZJTEUgfSBmcm9tIFwiQC9kYXRhL3BvcnRmb2xpb1wiO1xuaW1wb3J0IHsgc2Nyb2xsVG9JZCB9IGZyb20gXCJAL2xpYi9zY3JvbGxcIjtcblxuY29uc3QgbGluZVZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgeTogXCIxMTUlXCIgfSxcbiAgc2hvdzogKGk6IG51bWJlcikgPT4gKHtcbiAgICB5OiBcIjAlXCIsXG4gICAgdHJhbnNpdGlvbjogeyBkdXJhdGlvbjogMSwgZGVsYXk6IDAuMiArIGkgKiAwLjE0LCBlYXNlOiBbMC4yMiwgMSwgMC4zNiwgMV0gYXMgY29uc3QgfSxcbiAgfSksXG59O1xuXG5jb25zdCBNYXNrZWRMaW5lID0gKHsgY2hpbGRyZW4sIGksIGNsYXNzTmFtZSB9OiB7IGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7IGk6IG51bWJlcjsgY2xhc3NOYW1lPzogc3RyaW5nIH0pID0+IChcbiAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgb3ZlcmZsb3ctaGlkZGVuIHBiLVswLjA4ZW1dIC1tYi1bMC4wOGVtXVwiPlxuICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9e2BibG9jayAke2NsYXNzTmFtZSA/PyBcIlwifWB9IGN1c3RvbT17aX0gdmFyaWFudHM9e2xpbmVWYXJpYW50c30gaW5pdGlhbD1cImhpZGRlblwiIGFuaW1hdGU9XCJzaG93XCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tb3Rpb24uc3Bhbj5cbiAgPC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IEhlcm8gPSAoKSA9PiB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG14ID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gIGNvbnN0IG15ID0gdXNlTW90aW9uVmFsdWUoMCk7XG4gIGNvbnN0IHJvdGF0ZVggPSB1c2VUcmFuc2Zvcm0obXksIFstMC41LCAwLjVdLCBbMTAsIC0xMF0pO1xuICBjb25zdCByb3RhdGVZID0gdXNlVHJhbnNmb3JtKG14LCBbLTAuNSwgMC41XSwgWy0xMiwgMTJdKTtcblxuICBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlU2Nyb2xsKHsgdGFyZ2V0OiByZWYsIG9mZnNldDogW1wic3RhcnQgc3RhcnRcIiwgXCJlbmQgc3RhcnRcIl0gfSk7XG4gIGNvbnN0IGJnWSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgW1wiMCVcIiwgXCIyOCVcIl0pO1xuICBjb25zdCBmYWRlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuN10sIFsxLCAwXSk7XG5cbiAgY29uc3Qgb25Nb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgciA9IGUuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBteC5zZXQoKGUuY2xpZW50WCAtIHIubGVmdCkgLyByLndpZHRoIC0gMC41KTtcbiAgICBteS5zZXQoKGUuY2xpZW50WSAtIHIudG9wKSAvIHIuaGVpZ2h0IC0gMC41KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHJlZj17cmVmfSBkYXRhLXRlc3RpZD1cImhlcm8tc2VjdGlvblwiIG9uTW91c2VNb3ZlPXtvbk1vdmV9IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1pbi1oLXN2aCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxtb3Rpb24uZGl2IHN0eWxlPXt7IHk6IGJnWSB9fSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGhlcm8tZ3JpZC1iZ1wiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtNDAgLWxlZnQtNDAgaC1bMzRyZW1dIHctWzM0cmVtXSByb3VuZGVkLWZ1bGwgYmctbGltZS8xMCBibHVyLVsxNDBweF1cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS8zIC1yaWdodC00OCBoLVszMHJlbV0gdy1bMzByZW1dIHJvdW5kZWQtZnVsbCBiZy12b2x0LzEwIGJsdXItWzE0MHB4XVwiIC8+XG4gICAgICA8bW90aW9uLmRpdiBzdHlsZT17eyBvcGFjaXR5OiBmYWRlIH19IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWRpc3BsYXkgdGV4dC1bMjR2d10gZm9udC1ib2xkIHVwcGVyY2FzZSBsZWFkaW5nLW5vbmUgdGV4dC1zdHJva2Ugb3BhY2l0eS00MCBzZWxlY3Qtbm9uZVwiPlBNPC9zcGFuPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgbXgtYXV0byBncmlkIG1pbi1oLXN2aCBtYXgtdy03eGwgZ3JpZC1jb2xzLTEgaXRlbXMtY2VudGVyIGdhcC0xMiBweC01IHB0LTI4IHBiLTE2IHNtOnB4LTggbGc6Z3JpZC1jb2xzLVsxLjM1ZnJfMWZyXSBsZzpwdC0xNlwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDEyIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMSwgZHVyYXRpb246IDAuNiB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItOCBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtM1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaC0xLjUgdy0xLjUgcm91bmRlZC1mdWxsIGJnLWxpbWUgYW5pbWF0ZS1wdWxzZS1kb3RcIiAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzExcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXppbmMtNDAwXCI+e1BST0ZJTEUuYXZhaWxhYmlsaXR5fTwvc3Bhbj5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtWzE1dnddIGZvbnQtYm9sZCB1cHBlcmNhc2UgbGVhZGluZy1bMC45Ml0gdHJhY2tpbmctdGlnaHQgdGV4dC16aW5jLTEwMCBzbTp0ZXh0LTd4bCBsZzp0ZXh0LVs2LjJyZW1dXCI+XG4gICAgICAgICAgICA8TWFza2VkTGluZSBpPXswfT5Qcm9kdWN0czwvTWFza2VkTGluZT5cbiAgICAgICAgICAgIDxNYXNrZWRMaW5lIGk9ezF9PlxuICAgICAgICAgICAgICBiZWdpbiB3aXRoPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1saW1lXCI+Ljwvc3Bhbj5cbiAgICAgICAgICAgIDwvTWFza2VkTGluZT5cbiAgICAgICAgICAgIDxNYXNrZWRMaW5lIGk9ezJ9IGNsYXNzTmFtZT1cInRleHQtc3Ryb2tlLWxpbWVcIj5cbiAgICAgICAgICAgICAgUHJvYmxlbXNcbiAgICAgICAgICAgIDwvTWFza2VkTGluZT5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPG1vdGlvbi5wXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDIwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuODUsIGR1cmF0aW9uOiAwLjggfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTggbWF4LXcteGwgdGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZCB0ZXh0LXppbmMtNDAwIHNtOnRleHQtbGdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEknbSA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtMTAwIGZvbnQtbWVkaXVtXCI+e1BST0ZJTEUuc2hvcnROYW1lfTwvc3Bhbj4g4oCUIGFuIGFzcGlyaW5nIHByb2R1Y3QgbWFuYWdlciB3aG8gZmluZHNcbiAgICAgICAgICAgIHRoZSB1c2VyIHByb2JsZW0gZmlyc3QsIHRoZW4gZWFybnMgdGhlIHJpZ2h0IHRvIGJ1aWxkLiB7UFJPRklMRS50YWdsaW5lfVxuICAgICAgICAgIDwvbW90aW9uLnA+XG5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiAyMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxLCBkdXJhdGlvbjogMC44IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJoZXJvLXZpZXctd29yay1idXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzY3JvbGxUb0lkKFwid29ya1wiKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTMgcm91bmRlZC1mdWxsIGJnLWxpbWUgcHgtNyBweS0zLjUgZm9udC1tb25vIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNWVtXSB0ZXh0LWluayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVmlldyBjYXNlIHN0dWRpZXNcbiAgICAgICAgICAgICAgPEFycm93RG93biBzaXplPXsxNX0gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS15LTFcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtQUk9GSUxFLmdpdGh1Yn1cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaGVyby1naXRodWItbGlua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTYgcHktMy41IGZvbnQtbW9ubyB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNWVtXSB0ZXh0LXppbmMtMzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItbGltZSBob3Zlcjp0ZXh0LWxpbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8R2l0aHViIHNpemU9ezE1fSAvPiBHaXRIdWJcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e1BST0ZJTEUubGlua2VkaW59XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImhlcm8tbGlua2VkaW4tbGlua1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTYgcHktMy41IGZvbnQtbW9ubyB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNWVtXSB0ZXh0LXppbmMtMzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItbGltZSBob3Zlcjp0ZXh0LWxpbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TGlua2VkaW4gc2l6ZT17MTV9IC8+IExpbmtlZEluXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxLjEsIGR1cmF0aW9uOiAxIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIGxnOmJsb2NrXCJcbiAgICAgICAgICBzdHlsZT17eyBwZXJzcGVjdGl2ZTogMTAwMCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPVwiaGVyby1jYXJkXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHJvdGF0ZVgsIHJvdGF0ZVksIHRyYW5zZm9ybVN0eWxlOiBcInByZXNlcnZlLTNkXCIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctcGFuZWwvODAgcC04IGJhY2tkcm9wLWJsdXIteGwgc2hhZG93LTJ4bCBzaGFkb3ctYmxhY2svNTBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMjVlbV0gdGV4dC1saW1lXCI+Q2FuZGlkYXRlIHByb2ZpbGU8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0ZXh0LXppbmMtNTAwXCI+RVNULiAyMDIzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNiBmb250LWRpc3BsYXkgdGV4dC0zeGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLXRpZ2h0IHRleHQtemluYy0xMDBcIj57UFJPRklMRS5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGZvbnQtbW9ubyB0ZXh0LXhzIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtemluYy00MDBcIj57UFJPRklMRS5yb2xlfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBzcGFjZS15LTQgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHB0LTZcIj5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICBbXCJFZHVjYXRpb25cIiwgXCJCLlRlY2gg4oCUIEFJICYgRGF0YSBTY2llbmNlXCJdLFxuICAgICAgICAgICAgICAgIFtcIlVuaXZlcnNpdHlcIiwgXCJBbXJpdGEgVmlzaHdhIFZpZHlhcGVldGhhbVwiXSxcbiAgICAgICAgICAgICAgICBbXCJCYXNlXCIsIFBST0ZJTEUubG9jYXRpb25dLFxuICAgICAgICAgICAgICAgIFtcIkZvY3VzXCIsIFwiRGlzY292ZXJ5IOKGkiBTdHJhdGVneSDihpIgRGVsaXZlcnlcIl0sXG4gICAgICAgICAgICAgIF0ubWFwKChbaywgdl0pID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17a30gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBqdXN0aWZ5LWJldHdlZW4gZ2FwLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMmVtXSB0ZXh0LXppbmMtNTAwXCI+e2t9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1yaWdodCB0ZXh0LXNtIHRleHQtemluYy0yMDBcIj57dn08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHJvdW5kZWQteGwgYmctbGltZS8xMCBib3JkZXIgYm9yZGVyLWxpbWUvMjAgcHgtNCBweS0zXCIgc3R5bGU9e3sgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMzBweClcIiB9fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtbGltZVwiPjQgY2FzZSBzdHVkaWVzPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC16aW5jLTMwMFwiPjEgcGl2b3QgwrcgMiBidWlsZHMgwrcgMSBzdHJhdGVneTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgIGRhdGEtdGVzdGlkPVwiaGVyby1zY3JvbGwtaW5kaWNhdG9yXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2Nyb2xsVG9JZChcIm1hbmlmZXN0b1wiKX1cbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAxLjYgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTYgbGVmdC0xLzIgei0xMCAtdHJhbnNsYXRlLXgtMS8yXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIlNjcm9sbCBkb3duXCJcbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXYgYW5pbWF0ZT17eyB5OiBbMCwgOCwgMF0gfX0gdHJhbnNpdGlvbj17eyByZXBlYXQ6IEluZmluaXR5LCBkdXJhdGlvbjogMiB9fT5cbiAgICAgICAgICA8QXJyb3dEb3duIHNpemU9ezE4fSBjbGFzc05hbWU9XCJ0ZXh0LXppbmMtNTAwXCIgLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24uYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvSGVyby50c3gifQ==