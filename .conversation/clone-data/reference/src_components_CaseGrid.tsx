import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/CaseGrid.tsx");const _jsxDEV = __vite__cjsImport4_react_jsxDevRuntime["jsxDEV"];import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=a3f0ba77";
import { ArrowUpRight } from "/src/lib/lucide-react.tsx";
import { CASE_STUDIES } from "/src/data/portfolio.ts?t=1789229820776";
import { Reveal, SectionLabel } from "/src/components/Reveal.tsx";
var _jsxFileName = "/app/frontend/src/components/CaseGrid.tsx";
import __vite__cjsImport4_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a3f0ba77";
const handleMove = (e) => {
	const el = e.currentTarget;
	const r = el.getBoundingClientRect();
	el.style.setProperty("--mx", `${e.clientX - r.left}px`);
	el.style.setProperty("--my", `${e.clientY - r.top}px`);
};
export const CaseGrid = () => /* @__PURE__ */ _jsxDEV("section", {
	id: "work",
	"data-testid": "work-section",
	className: "mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36",
	"x-file-name": "CaseGrid",
	"x-line-number": "14",
	"x-column": "2",
	"x-component": "section",
	"x-id": "CaseGrid_14_2",
	"x-dynamic": "false",
	children: [
		/* @__PURE__ */ _jsxDEV(Reveal, {
			"x-file-name": "CaseGrid",
			"x-line-number": "15",
			"x-column": "4",
			"x-component": "Reveal",
			"x-id": "CaseGrid_15_4",
			"x-dynamic": "true",
			children: /* @__PURE__ */ _jsxDEV(SectionLabel, {
				index: "§ 02",
				label: "Selected work",
				"x-file-name": "CaseGrid",
				"x-line-number": "16",
				"x-column": "6",
				"x-component": "SectionLabel",
				"x-id": "CaseGrid_16_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV(Reveal, {
			delay: .08,
			"x-file-name": "CaseGrid",
			"x-line-number": "18",
			"x-column": "4",
			"x-component": "Reveal",
			"x-id": "CaseGrid_18_4",
			"x-dynamic": "true",
			children: /* @__PURE__ */ _jsxDEV("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				"x-file-name": "CaseGrid",
				"x-line-number": "19",
				"x-column": "6",
				"x-component": "div",
				"x-id": "CaseGrid_19_6",
				"x-dynamic": "false",
				children: [/* @__PURE__ */ _jsxDEV("h2", {
					className: "font-display text-3xl font-bold uppercase leading-none tracking-tight text-zinc-100 sm:text-5xl",
					"x-file-name": "CaseGrid",
					"x-line-number": "20",
					"x-column": "8",
					"x-component": "h2",
					"x-id": "CaseGrid_20_8",
					"x-dynamic": "false",
					children: ["Case ", /* @__PURE__ */ _jsxDEV("span", {
						className: "text-stroke-lime",
						"x-file-name": "CaseGrid",
						"x-line-number": "21",
						"x-column": "15",
						"x-component": "span",
						"x-id": "CaseGrid_21_15",
						"x-dynamic": "false",
						children: "Studies"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 18,
						columnNumber: 16
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 17,
					columnNumber: 9
				}, this), /* @__PURE__ */ _jsxDEV("p", {
					className: "max-w-sm text-sm leading-relaxed text-zinc-500",
					"x-file-name": "CaseGrid",
					"x-line-number": "23",
					"x-column": "8",
					"x-component": "p",
					"x-id": "CaseGrid_23_8",
					"x-dynamic": "false",
					children: "Problem → research → decision → MVP → metrics. Each study shows the full product-thinking arc, not just the output."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 16,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "mt-14 flex flex-col gap-6",
			"x-file-name": "CaseGrid",
			"x-line-number": "29",
			"x-column": "4",
			"x-component": "div",
			"x-id": "CaseGrid_29_4",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: CASE_STUDIES.map((cs, i) => /* @__PURE__ */ _jsxDEV(Reveal, {
				delay: .06 * i,
				"x-file-name": "CaseGrid",
				"x-line-number": "31",
				"x-column": "8",
				"x-component": "Reveal",
				"x-id": "CaseGrid_31_8",
				"x-dynamic": "true",
				"x-source-type": "static-imported",
				"x-source-var": "CASE_STUDIES",
				"x-source-file": "@/data/portfolio",
				"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
				"x-source-line": "38",
				"x-source-editable": "true",
				"x-array-var": "CASE_STUDIES",
				"x-array-file": "@/data/portfolio",
				"x-array-line": "38",
				"x-array-item-param": "cs",
				children: /* @__PURE__ */ _jsxDEV(Link, {
					to: `/case/${cs.id}`,
					"data-testid": `case-card-${cs.id}`,
					className: "block",
					children: /* @__PURE__ */ _jsxDEV("article", {
						onMouseMove: handleMove,
						className: "spotlight-card group relative grid grid-cols-1 gap-6 rounded-2xl border border-white/10 bg-panel p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lime/30 sm:p-10 md:grid-cols-[auto_1fr_auto] md:items-center",
						"x-file-name": "CaseGrid",
						"x-line-number": "33",
						"x-column": "12",
						"x-component": "article",
						"x-id": "CaseGrid_33_12",
						"x-dynamic": "false",
						children: [
							/* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-sm tracking-[0.3em] text-lime",
								"x-file-name": "CaseGrid",
								"x-line-number": "37",
								"x-column": "14",
								"x-component": "span",
								"x-id": "CaseGrid_37_14",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "CASE_STUDIES",
								"x-source-file": "@/data/portfolio",
								"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
								"x-source-line": "38",
								"x-source-path": "index",
								"x-source-editable": "true",
								"x-array-var": "CASE_STUDIES",
								"x-array-file": "@/data/portfolio",
								"x-array-line": "38",
								"x-array-item-param": "cs",
								children: cs.index
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 30,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								"x-file-name": "CaseGrid",
								"x-line-number": "38",
								"x-column": "14",
								"x-component": "div",
								"x-id": "CaseGrid_38_14",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("div", {
										className: "flex flex-wrap items-center gap-3",
										"x-file-name": "CaseGrid",
										"x-line-number": "39",
										"x-column": "16",
										"x-component": "div",
										"x-id": "CaseGrid_39_16",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV("h3", {
											className: "font-display text-2xl font-semibold tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-lime sm:text-4xl",
											"x-file-name": "CaseGrid",
											"x-line-number": "40",
											"x-column": "18",
											"x-component": "h3",
											"x-id": "CaseGrid_40_18",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "CASE_STUDIES",
											"x-source-file": "@/data/portfolio",
											"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
											"x-source-line": "38",
											"x-source-path": "title",
											"x-source-editable": "true",
											"x-array-var": "CASE_STUDIES",
											"x-array-file": "@/data/portfolio",
											"x-array-line": "38",
											"x-array-item-param": "cs",
											children: cs.title
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 33,
											columnNumber: 19
										}, this), /* @__PURE__ */ _jsxDEV("span", {
											className: "rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-400",
											"x-file-name": "CaseGrid",
											"x-line-number": "43",
											"x-column": "18",
											"x-component": "span",
											"x-id": "CaseGrid_43_18",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "CASE_STUDIES",
											"x-source-file": "@/data/portfolio",
											"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
											"x-source-line": "38",
											"x-source-path": "year",
											"x-source-editable": "true",
											"x-array-var": "CASE_STUDIES",
											"x-array-file": "@/data/portfolio",
											"x-array-line": "38",
											"x-array-item-param": "cs",
											children: cs.year
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 36,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 32,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("p", {
										className: "mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base",
										"x-file-name": "CaseGrid",
										"x-line-number": "47",
										"x-column": "16",
										"x-component": "p",
										"x-id": "CaseGrid_47_16",
										"x-dynamic": "true",
										"x-source-type": "static-imported",
										"x-source-var": "CASE_STUDIES",
										"x-source-file": "@/data/portfolio",
										"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
										"x-source-line": "38",
										"x-source-path": "tagline",
										"x-source-editable": "true",
										"x-array-var": "CASE_STUDIES",
										"x-array-file": "@/data/portfolio",
										"x-array-line": "38",
										"x-array-item-param": "cs",
										children: cs.tagline
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 40,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("div", {
										className: "mt-5 flex flex-wrap gap-2",
										"x-file-name": "CaseGrid",
										"x-line-number": "48",
										"x-column": "16",
										"x-component": "div",
										"x-id": "CaseGrid_48_16",
										"x-dynamic": "true",
										"x-source-type": "computed",
										"x-source-editable": "false",
										children: [/* @__PURE__ */ _jsxDEV("span", {
											className: "rounded-full bg-lime/10 border border-lime/20 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-lime",
											"x-file-name": "CaseGrid",
											"x-line-number": "49",
											"x-column": "18",
											"x-component": "span",
											"x-id": "CaseGrid_49_18",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "CASE_STUDIES",
											"x-source-file": "@/data/portfolio",
											"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
											"x-source-line": "38",
											"x-source-path": "category",
											"x-source-editable": "true",
											"x-array-var": "CASE_STUDIES",
											"x-array-file": "@/data/portfolio",
											"x-array-line": "38",
											"x-array-item-param": "cs",
											children: cs.category
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 42,
											columnNumber: 19
										}, this), cs.highlights.slice(0, 2).map((h) => /* @__PURE__ */ _jsxDEV("span", {
											className: "rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500",
											"x-file-name": "CaseGrid",
											"x-line-number": "53",
											"x-column": "20",
											"x-component": "span",
											"x-id": "CaseGrid_53_20",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-editable": "false",
											"x-array-item-param": "h",
											children: h
										}, h, false, {
											fileName: _jsxFileName,
											lineNumber: 45,
											columnNumber: 55
										}, this))]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 41,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 31,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ _jsxDEV("div", {
								className: "flex h-12 w-12 items-center justify-center rounded-full border border-white/15 transition-all duration-500 group-hover:border-lime group-hover:bg-lime md:h-14 md:w-14",
								"x-file-name": "CaseGrid",
								"x-line-number": "59",
								"x-column": "14",
								"x-component": "div",
								"x-id": "CaseGrid_59_14",
								"x-dynamic": "false",
								children: /* @__PURE__ */ _jsxDEV(ArrowUpRight, {
									size: 20,
									className: "text-zinc-300 transition-all duration-500 group-hover:rotate-45 group-hover:text-ink",
									"x-file-name": "CaseGrid",
									"x-line-number": "60",
									"x-column": "16",
									"x-component": "ArrowUpRight",
									"x-id": "CaseGrid_60_16",
									"x-dynamic": "true",
									"x-source-type": "static-imported",
									"x-source-var": "CASE_STUDIES",
									"x-source-file": "@/data/portfolio",
									"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
									"x-source-line": "38",
									"x-source-editable": "true",
									"x-array-var": "CASE_STUDIES",
									"x-array-file": "@/data/portfolio",
									"x-array-line": "38",
									"x-array-item-param": "cs"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 51,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 50,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 29,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 28,
					columnNumber: 11
				}, this)
			}, cs.id, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 36
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 26,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 11,
	columnNumber: 31
}, this);
_c = CaseGrid;
var _c;
$RefreshReg$(_c, "CaseGrid");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/CaseGrid.tsx?t=1789229820776";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/CaseGrid.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/CaseGrid.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/CaseGrid.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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QkFBQyxLQUFEO1VBQUcsV0FBVTtVQUFtRTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO29CQUFFTCxHQUFHTTtTQUFXOzs7OztTQUNoRyx3QkFBQyxPQUFEO1VBQUssV0FBVTtVQUEyQjtVQUFBO1VBQUE7VUFBQTtVQUFBO1VBQUE7VUFBQTtVQUFBO29CQUExQyxDQUNFLHdCQUFDLFFBQUQ7V0FBTSxXQUFVO1dBQXFIO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7cUJBQ2xJTixHQUFHTztVQUNBOzs7O29CQUNMUCxHQUFHUSxXQUFXQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNWLEtBQUtXLE1BQzlCLHdCQUFDLFFBQUQ7V0FBYyxXQUFVO1dBQStHO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtXQUFBO1dBQUE7V0FBQTtxQkFDcElBO1VBQ0csR0FGS0E7Ozs7aUJBRUwsQ0FDUCxDQUNFOzs7Ozs7UUFDRjs7Ozs7O09BQ0wsd0JBQUMsT0FBRDtRQUFLLFdBQVU7UUFBd0s7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO2tCQUNyTCx3QkFBQyxjQUFEO1NBQWMsTUFBTTtTQUFJLFdBQVU7U0FBc0Y7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7UUFBQTs7Ozs7T0FDckg7Ozs7O01BQ0U7Ozs7OztJQUNMOzs7OztHQUNBLEdBakNLVixHQUFHRTs7OztVQWlDUixDQUNUO0VBQ0U7Ozs7O0NBQ0UiLCJuYW1lcyI6WyJMaW5rIiwiQXJyb3dVcFJpZ2h0IiwiQ0FTRV9TVFVESUVTIiwiUmV2ZWFsIiwiU2VjdGlvbkxhYmVsIiwiaGFuZGxlTW92ZSIsImUiLCJlbCIsImN1cnJlbnRUYXJnZXQiLCJyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImNsaWVudFgiLCJsZWZ0IiwiY2xpZW50WSIsInRvcCIsIkNhc2VHcmlkIiwibWFwIiwiY3MiLCJpIiwiaWQiLCJpbmRleCIsInRpdGxlIiwieWVhciIsInRhZ2xpbmUiLCJjYXRlZ29yeSIsImhpZ2hsaWdodHMiLCJzbGljZSIsImgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQ2FzZUdyaWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgQXJyb3dVcFJpZ2h0IH0gZnJvbSBcImx1Y2lkZS1yZWFjdFwiO1xuaW1wb3J0IHsgQ0FTRV9TVFVESUVTIH0gZnJvbSBcIkAvZGF0YS9wb3J0Zm9saW9cIjtcbmltcG9ydCB7IFJldmVhbCwgU2VjdGlvbkxhYmVsIH0gZnJvbSBcIi4vUmV2ZWFsXCI7XG5cbmNvbnN0IGhhbmRsZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWwgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gIGNvbnN0IHIgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgZWwuc3R5bGUuc2V0UHJvcGVydHkoXCItLW14XCIsIGAke2UuY2xpZW50WCAtIHIubGVmdH1weGApO1xuICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tbXlcIiwgYCR7ZS5jbGllbnRZIC0gci50b3B9cHhgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBDYXNlR3JpZCA9ICgpID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJ3b3JrXCIgZGF0YS10ZXN0aWQ9XCJ3b3JrLXNlY3Rpb25cIiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC01IHB5LTI4IHNtOnB4LTggc206cHktMzZcIj5cbiAgICA8UmV2ZWFsPlxuICAgICAgPFNlY3Rpb25MYWJlbCBpbmRleD1cIsKnIDAyXCIgbGFiZWw9XCJTZWxlY3RlZCB3b3JrXCIgLz5cbiAgICA8L1JldmVhbD5cbiAgICA8UmV2ZWFsIGRlbGF5PXswLjA4fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtZW5kIGp1c3RpZnktYmV0d2VlbiBnYXAtNlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIGZvbnQtYm9sZCB1cHBlcmNhc2UgbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0IHRleHQtemluYy0xMDAgc206dGV4dC01eGxcIj5cbiAgICAgICAgICBDYXNlIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc3Ryb2tlLWxpbWVcIj5TdHVkaWVzPC9zcGFuPlxuICAgICAgICA8L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1zbSB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCB0ZXh0LXppbmMtNTAwXCI+XG4gICAgICAgICAgUHJvYmxlbSDihpIgcmVzZWFyY2gg4oaSIGRlY2lzaW9uIOKGkiBNVlAg4oaSIG1ldHJpY3MuIEVhY2ggc3R1ZHkgc2hvd3MgdGhlIGZ1bGwgcHJvZHVjdC10aGlua2luZyBhcmMsIG5vdCBqdXN0IHRoZSBvdXRwdXQuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmV2ZWFsPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNCBmbGV4IGZsZXgtY29sIGdhcC02XCI+XG4gICAgICB7Q0FTRV9TVFVESUVTLm1hcCgoY3MsIGkpID0+IChcbiAgICAgICAgPFJldmVhbCBrZXk9e2NzLmlkfSBkZWxheT17MC4wNiAqIGl9PlxuICAgICAgICAgIDxMaW5rIHRvPXtgL2Nhc2UvJHtjcy5pZH1gfSBkYXRhLXRlc3RpZD17YGNhc2UtY2FyZC0ke2NzLmlkfWB9IGNsYXNzTmFtZT1cImJsb2NrXCI+XG4gICAgICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgICAgICBvbk1vdXNlTW92ZT17aGFuZGxlTW92ZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BvdGxpZ2h0LWNhcmQgZ3JvdXAgcmVsYXRpdmUgZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXBhbmVsIHAtNyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6Ym9yZGVyLWxpbWUvMzAgc206cC0xMCBtZDpncmlkLWNvbHMtW2F1dG9fMWZyX2F1dG9dIG1kOml0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXNtIHRyYWNraW5nLVswLjNlbV0gdGV4dC1saW1lXCI+e2NzLmluZGV4fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAtM1wiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZvbnQtZGlzcGxheSB0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtemluYy0xMDAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMzAwIGdyb3VwLWhvdmVyOnRleHQtbGltZSBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3MudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMTUgcHgtMyBweS0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTVlbV0gdGV4dC16aW5jLTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7Y3MueWVhcn1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0zIG1heC13LTJ4bCB0ZXh0LXNtIGxlYWRpbmctcmVsYXhlZCB0ZXh0LXppbmMtNDAwIHNtOnRleHQtYmFzZVwiPntjcy50YWdsaW5lfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy1saW1lLzEwIGJvcmRlciBib3JkZXItbGltZS8yMCBweC0zIHB5LTEgZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNWVtXSB0ZXh0LWxpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge2NzLmNhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAge2NzLmhpZ2hsaWdodHMuc2xpY2UoMCwgMikubWFwKChoKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aH0gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgcHgtMyBweS0xIGZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTVlbV0gdGV4dC16aW5jLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtofVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTEyIHctMTIgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBncm91cC1ob3Zlcjpib3JkZXItbGltZSBncm91cC1ob3ZlcjpiZy1saW1lIG1kOmgtMTQgbWQ6dy0xNFwiPlxuICAgICAgICAgICAgICAgIDxBcnJvd1VwUmlnaHQgc2l6ZT17MjB9IGNsYXNzTmFtZT1cInRleHQtemluYy0zMDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGdyb3VwLWhvdmVyOnJvdGF0ZS00NSBncm91cC1ob3Zlcjp0ZXh0LWlua1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9SZXZlYWw+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9DYXNlR3JpZC50c3gifQ==