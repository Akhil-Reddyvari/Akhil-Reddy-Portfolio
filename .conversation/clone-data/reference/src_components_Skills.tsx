import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Skills.tsx");const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];import { SKILL_GROUPS } from "/src/data/portfolio.ts?t=1789229820776";
import { Reveal, SectionLabel } from "/src/components/Reveal.tsx";
var _jsxFileName = "/app/frontend/src/components/Skills.tsx";
import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a3f0ba77";
export const Skills = () => /* @__PURE__ */ _jsxDEV("section", {
	id: "skills",
	"data-testid": "skills-section",
	className: "border-y border-white/10 bg-panel/30",
	"x-file-name": "Skills",
	"x-line-number": "5",
	"x-column": "2",
	"x-component": "section",
	"x-id": "Skills_5_2",
	"x-dynamic": "false",
	children: /* @__PURE__ */ _jsxDEV("div", {
		className: "mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36",
		"x-file-name": "Skills",
		"x-line-number": "6",
		"x-column": "4",
		"x-component": "div",
		"x-id": "Skills_6_4",
		"x-dynamic": "false",
		children: [
			/* @__PURE__ */ _jsxDEV(Reveal, {
				"x-file-name": "Skills",
				"x-line-number": "7",
				"x-column": "6",
				"x-component": "Reveal",
				"x-id": "Skills_7_6",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV(SectionLabel, {
					index: "§ 05",
					label: "Toolkit",
					"x-file-name": "Skills",
					"x-line-number": "8",
					"x-column": "8",
					"x-component": "SectionLabel",
					"x-id": "Skills_8_8",
					"x-dynamic": "true"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 6,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV(Reveal, {
				delay: .08,
				"x-file-name": "Skills",
				"x-line-number": "10",
				"x-column": "6",
				"x-component": "Reveal",
				"x-id": "Skills_10_6",
				"x-dynamic": "true",
				children: /* @__PURE__ */ _jsxDEV("h2", {
					className: "font-display text-3xl font-bold uppercase leading-none tracking-tight text-zinc-100 sm:text-5xl",
					"x-file-name": "Skills",
					"x-line-number": "11",
					"x-column": "8",
					"x-component": "h2",
					"x-id": "Skills_11_8",
					"x-dynamic": "false",
					children: ["Skills ", /* @__PURE__ */ _jsxDEV("span", {
						className: "text-stroke-lime",
						"x-file-name": "Skills",
						"x-line-number": "12",
						"x-column": "17",
						"x-component": "span",
						"x-id": "Skills_12_17",
						"x-dynamic": "false",
						children: "Matrix"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 10,
						columnNumber: 18
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 8,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ _jsxDEV("div", {
				className: "mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
				"x-file-name": "Skills",
				"x-line-number": "15",
				"x-column": "6",
				"x-component": "div",
				"x-id": "Skills_15_6",
				"x-dynamic": "true",
				"x-source-type": "computed",
				"x-source-editable": "false",
				children: SKILL_GROUPS.map((g, i) => /* @__PURE__ */ _jsxDEV(Reveal, {
					delay: .07 * i,
					className: i === 0 ? "sm:col-span-2 lg:col-span-1" : "",
					"x-file-name": "Skills",
					"x-line-number": "17",
					"x-column": "10",
					"x-component": "Reveal",
					"x-id": "Skills_17_10",
					"x-dynamic": "true",
					"x-source-type": "static-imported",
					"x-source-var": "SKILL_GROUPS",
					"x-source-file": "@/data/portfolio",
					"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
					"x-source-line": "413",
					"x-source-editable": "true",
					"x-array-var": "SKILL_GROUPS",
					"x-array-file": "@/data/portfolio",
					"x-array-line": "413",
					"x-array-item-param": "g",
					children: /* @__PURE__ */ _jsxDEV("div", {
						"data-testid": `skill-group-${g.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
						className: "group h-full rounded-2xl border border-white/10 bg-panel p-7 transition-all duration-500 hover:-translate-y-1 hover:border-lime/30",
						"x-file-name": "Skills",
						"x-line-number": "18",
						"x-column": "12",
						"x-component": "div",
						"x-id": "Skills_18_12",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV("div", {
							className: "flex items-center justify-between",
							"x-file-name": "Skills",
							"x-line-number": "19",
							"x-column": "14",
							"x-component": "div",
							"x-id": "Skills_19_14",
							"x-dynamic": "false",
							children: [/* @__PURE__ */ _jsxDEV("h3", {
								className: "font-display text-xl font-semibold tracking-tight text-zinc-100 group-hover:text-lime transition-colors duration-300",
								"x-file-name": "Skills",
								"x-line-number": "20",
								"x-column": "16",
								"x-component": "h3",
								"x-id": "Skills_20_16",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "SKILL_GROUPS",
								"x-source-file": "@/data/portfolio",
								"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
								"x-source-line": "413",
								"x-source-path": "title",
								"x-source-editable": "true",
								"x-array-var": "SKILL_GROUPS",
								"x-array-file": "@/data/portfolio",
								"x-array-line": "413",
								"x-array-item-param": "g",
								children: g.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 17,
								columnNumber: 17
							}, this), /* @__PURE__ */ _jsxDEV("span", {
								className: "font-mono text-[10px] tracking-[0.25em] text-zinc-600",
								"x-file-name": "Skills",
								"x-line-number": "21",
								"x-column": "16",
								"x-component": "span",
								"x-id": "Skills_21_16",
								"x-dynamic": "true",
								"x-source-type": "computed",
								"x-source-editable": "false",
								children: ["0", /* @__PURE__ */ _jsxDEV("span", {
									"data-ve-dynamic": "true",
									"x-excluded": "true",
									style: { display: "contents" },
									"x-file-name": "Skills",
									"x-line-number": "21",
									"x-column": "16",
									"x-component": "span",
									"x-id": "Skills_21_16_expr1",
									"x-dynamic": "true",
									"x-source-type": "computed",
									"x-source-editable": "false",
									children: i + 1
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 18,
									columnNumber: 251
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 18,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 15
						}, this), /* @__PURE__ */ _jsxDEV("div", {
							className: "mt-5 flex flex-wrap gap-2",
							"x-file-name": "Skills",
							"x-line-number": "23",
							"x-column": "14",
							"x-component": "div",
							"x-id": "Skills_23_14",
							"x-dynamic": "true",
							"x-source-type": "computed",
							"x-source-editable": "false",
							children: g.items.map((s) => /* @__PURE__ */ _jsxDEV("span", {
								className: "rounded-full border border-white/10 bg-ink px-3.5 py-1.5 text-xs text-zinc-300 transition-colors duration-300 hover:border-lime/40 hover:text-lime",
								"x-file-name": "Skills",
								"x-line-number": "25",
								"x-column": "18",
								"x-component": "span",
								"x-id": "Skills_25_18",
								"x-dynamic": "true",
								"x-source-type": "static-imported",
								"x-source-var": "g",
								"x-source-editable": "false",
								"x-array-var": "g",
								"x-array-item-param": "s",
								children: s
							}, s, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 35
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 22,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 13
					}, this)
				}, g.title, false, {
					fileName: _jsxFileName,
					lineNumber: 14,
					columnNumber: 37
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 13,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 5
	}, this)
}, void 0, false, {
	fileName: _jsxFileName,
	lineNumber: 3,
	columnNumber: 29
}, this);
_c = Skills;
var _c;
$RefreshReg$(_c, "Skills");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Skills.tsx?t=1789229820776";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Skills.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Skills.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Skills.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esb0JBQW9CO0FBQzdCLFNBQVNDLFFBQVFDLG9CQUFvQjs7O0FBRXJDLE9BQU8sTUFBTUMsZUFDWCx3QkFBQyxXQUFEO0NBQVMsSUFBRztDQUFTLGVBQVk7Q0FBaUIsV0FBVTtDQUFzQztDQUFBO0NBQUE7Q0FBQTtDQUFBO0NBQUE7V0FDaEcsd0JBQUMsT0FBRDtFQUFLLFdBQVU7RUFBK0M7RUFBQTtFQUFBO0VBQUE7RUFBQTtFQUFBO1lBQTlEO0dBQ0Usd0JBQUMsUUFBRDtJQUFPO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUNMLHdCQUFDLGNBQUQ7S0FBYyxPQUFNO0tBQU8sT0FBTTtLQUFTO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtJQUFBOzs7OztHQUNwQzs7Ozs7R0FDUix3QkFBQyxRQUFEO0lBQVEsT0FBTztJQUFLO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtjQUNsQix3QkFBQyxNQUFEO0tBQUksV0FBVTtLQUFpRztLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7ZUFBL0csQ0FBK0csV0FDdEcsd0JBQUMsUUFBRDtNQUFNLFdBQVU7TUFBa0I7TUFBQTtNQUFBO01BQUE7TUFBQTtNQUFBO2dCQUFDO0tBQVk7Ozs7YUFDcEQ7Ozs7OztHQUNFOzs7OztHQUNSLHdCQUFDLE9BQUQ7SUFBSyxXQUFVO0lBQTREO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FDeEVILGFBQWFJLEtBQUtDLEdBQUdDLE1BQ3BCLHdCQUFDLFFBQUQ7S0FBc0IsT0FBTyxNQUFPQTtLQUFHLFdBQVdBLE1BQU0sSUFBSSxnQ0FBZ0M7S0FBRztLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUM3Rix3QkFBQyxPQUFEO01BQUssZUFBYSxlQUFlRCxFQUFFRSxNQUFNQyxZQUFZLENBQUMsQ0FBQ0MsUUFBUSxlQUFlLEdBQUc7TUFBSyxXQUFVO01BQW9JO01BQUE7TUFBQTtNQUFBO01BQUE7TUFBQTtnQkFBcE8sQ0FDRSx3QkFBQyxPQUFEO09BQUssV0FBVTtPQUFtQztPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQWxELENBQ0Usd0JBQUMsTUFBRDtRQUFJLFdBQVU7UUFBc0g7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBRUosRUFBRUU7T0FBVTs7OztpQkFDbEosd0JBQUMsUUFBRDtRQUFNLFdBQVU7UUFBdUQ7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFBdkUsQ0FBd0UsS0FBQztTQUFBO1NBQUE7U0FBQSxTQUFBRyxTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTtTQUFBO1NBQUE7U0FBQTttQkFBQ0osSUFBSTtRQUFFOzs7O2dCQUFNOzs7OztlQUNuRjs7Ozs7Z0JBQ0wsd0JBQUMsT0FBRDtPQUFLLFdBQVU7T0FBMkI7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFDdkNELEVBQUVNLE1BQU1QLEtBQUtRLE1BQ1osd0JBQUMsUUFBRDtRQUFjLFdBQVU7UUFBb0o7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtRQUFBO1FBQUE7UUFBQTtrQkFDektBO09BQ0csR0FGS0E7Ozs7Y0FFTCxDQUNQO01BQ0U7Ozs7Y0FDRjs7Ozs7O0lBQ0MsR0FkS1AsRUFBRUU7Ozs7V0FjUCxDQUNUO0dBQ0U7Ozs7O0VBQ0Y7Ozs7OztBQUNFIiwibmFtZXMiOlsiU0tJTExfR1JPVVBTIiwiUmV2ZWFsIiwiU2VjdGlvbkxhYmVsIiwiU2tpbGxzIiwibWFwIiwiZyIsImkiLCJ0aXRsZSIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsImRpc3BsYXkiLCJpdGVtcyIsInMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU2tpbGxzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTS0lMTF9HUk9VUFMgfSBmcm9tIFwiQC9kYXRhL3BvcnRmb2xpb1wiO1xuaW1wb3J0IHsgUmV2ZWFsLCBTZWN0aW9uTGFiZWwgfSBmcm9tIFwiLi9SZXZlYWxcIjtcblxuZXhwb3J0IGNvbnN0IFNraWxscyA9ICgpID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJza2lsbHNcIiBkYXRhLXRlc3RpZD1cInNraWxscy1zZWN0aW9uXCIgY2xhc3NOYW1lPVwiYm9yZGVyLXkgYm9yZGVyLXdoaXRlLzEwIGJnLXBhbmVsLzMwXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC01IHB5LTI4IHNtOnB4LTggc206cHktMzZcIj5cbiAgICAgIDxSZXZlYWw+XG4gICAgICAgIDxTZWN0aW9uTGFiZWwgaW5kZXg9XCLCpyAwNVwiIGxhYmVsPVwiVG9vbGtpdFwiIC8+XG4gICAgICA8L1JldmVhbD5cbiAgICAgIDxSZXZlYWwgZGVsYXk9ezAuMDh9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtM3hsIGZvbnQtYm9sZCB1cHBlcmNhc2UgbGVhZGluZy1ub25lIHRyYWNraW5nLXRpZ2h0IHRleHQtemluYy0xMDAgc206dGV4dC01eGxcIj5cbiAgICAgICAgICBTa2lsbHMgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zdHJva2UtbGltZVwiPk1hdHJpeDwvc3Bhbj5cbiAgICAgICAgPC9oMj5cbiAgICAgIDwvUmV2ZWFsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xNCBncmlkIGdyaWQtY29scy0xIGdhcC01IHNtOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XG4gICAgICAgIHtTS0lMTF9HUk9VUFMubWFwKChnLCBpKSA9PiAoXG4gICAgICAgICAgPFJldmVhbCBrZXk9e2cudGl0bGV9IGRlbGF5PXswLjA3ICogaX0gY2xhc3NOYW1lPXtpID09PSAwID8gXCJzbTpjb2wtc3Bhbi0yIGxnOmNvbC1zcGFuLTFcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD17YHNraWxsLWdyb3VwLSR7Zy50aXRsZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16MC05XSsvZywgXCItXCIpfWB9IGNsYXNzTmFtZT1cImdyb3VwIGgtZnVsbCByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXBhbmVsIHAtNyB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6Ym9yZGVyLWxpbWUvMzBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXppbmMtMTAwIGdyb3VwLWhvdmVyOnRleHQtbGltZSB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIj57Zy50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LVsxMHB4XSB0cmFja2luZy1bMC4yNWVtXSB0ZXh0LXppbmMtNjAwXCI+MHtpICsgMX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7Zy5pdGVtcy5tYXAoKHMpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17c30gY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctaW5rIHB4LTMuNSBweS0xLjUgdGV4dC14cyB0ZXh0LXppbmMtMzAwIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMCBob3Zlcjpib3JkZXItbGltZS80MCBob3Zlcjp0ZXh0LWxpbWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3N9XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9SZXZlYWw+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG4iXSwiZmlsZSI6Ii9hcHAvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvU2tpbGxzLnRzeCJ9