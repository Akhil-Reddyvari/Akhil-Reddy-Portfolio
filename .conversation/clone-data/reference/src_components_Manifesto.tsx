import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Manifesto.tsx");const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];import { Reveal, SectionLabel } from "/src/components/Reveal.tsx";
var _jsxFileName = "/app/frontend/src/components/Manifesto.tsx";
import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a3f0ba77";
const CHAPTERS = [
	{
		n: "01",
		title: "Discover",
		body: "Start with the user's problem, never the solution. Twenty honest conversations beat two hundred assumptions — every strong product decision I've made began with listening."
	},
	{
		n: "02",
		title: "Decide",
		body: "Strategy is choosing what not to build. I scope MVPs with MoSCoW, rank trade-offs explicitly, and let evidence — not attachment to an idea — call the pivot."
	},
	{
		n: "03",
		title: "Deliver",
		body: "Ship the smallest thing that tests the hypothesis, define the North Star before launch, and let outcomes teach the next iteration. Trust is the metric that compounds."
	}
];
export const Manifesto = () => /* @__PURE__ */ _jsxDEV("section", {
	id: "manifesto",
	"data-testid": "manifesto-section",
	className: "mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36",
	"x-file-name": "Manifesto",
	"x-line-number": "22",
	"x-column": "2",
	"x-component": "section",
	"x-id": "Manifesto_22_2",
	"x-dynamic": "false",
	children: [
		/* @__PURE__ */ _jsxDEV(Reveal, {
			"x-file-name": "Manifesto",
			"x-line-number": "23",
			"x-column": "4",
			"x-component": "Reveal",
			"x-id": "Manifesto_23_4",
			"x-dynamic": "true",
			children: /* @__PURE__ */ _jsxDEV(SectionLabel, {
				index: "§ 01",
				label: "Product philosophy",
				"x-file-name": "Manifesto",
				"x-line-number": "24",
				"x-column": "6",
				"x-component": "SectionLabel",
				"x-id": "Manifesto_24_6",
				"x-dynamic": "true"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV(Reveal, {
			delay: .1,
			"x-file-name": "Manifesto",
			"x-line-number": "26",
			"x-column": "4",
			"x-component": "Reveal",
			"x-id": "Manifesto_26_4",
			"x-dynamic": "true",
			children: /* @__PURE__ */ _jsxDEV("h2", {
				className: "max-w-4xl font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-zinc-100 sm:text-5xl",
				"x-file-name": "Manifesto",
				"x-line-number": "27",
				"x-column": "6",
				"x-component": "h2",
				"x-id": "Manifesto_27_6",
				"x-dynamic": "false",
				children: ["How I think about ", /* @__PURE__ */ _jsxDEV("span", {
					className: "text-lime",
					"x-file-name": "Manifesto",
					"x-line-number": "28",
					"x-column": "26",
					"x-component": "span",
					"x-id": "Manifesto_28_26",
					"x-dynamic": "false",
					children: "building products"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 27
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 19,
			columnNumber: 5
		}, this),
		/* @__PURE__ */ _jsxDEV("div", {
			className: "mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3",
			"x-file-name": "Manifesto",
			"x-line-number": "31",
			"x-column": "4",
			"x-component": "div",
			"x-id": "Manifesto_31_4",
			"x-dynamic": "true",
			"x-source-type": "computed",
			"x-source-editable": "false",
			children: CHAPTERS.map((c, i) => /* @__PURE__ */ _jsxDEV(Reveal, {
				delay: .12 * i,
				className: "bg-ink",
				"x-file-name": "Manifesto",
				"x-line-number": "33",
				"x-column": "8",
				"x-component": "Reveal",
				"x-id": "Manifesto_33_8",
				"x-dynamic": "true",
				"x-source-type": "static-imported",
				"x-source-var": "CHAPTERS",
				"x-source-file-abs": "/app/frontend/src/components/Manifesto.tsx",
				"x-source-line": "3",
				"x-source-editable": "true",
				"x-array-var": "CHAPTERS",
				"x-array-line": "3",
				"x-array-item-param": "c",
				children: /* @__PURE__ */ _jsxDEV("div", {
					"data-testid": `manifesto-chapter-${c.n}`,
					className: "group h-full p-8 transition-colors duration-500 hover:bg-panel sm:p-10",
					"x-file-name": "Manifesto",
					"x-line-number": "34",
					"x-column": "10",
					"x-component": "div",
					"x-id": "Manifesto_34_10",
					"x-dynamic": "false",
					children: [
						/* @__PURE__ */ _jsxDEV("span", {
							className: "font-mono text-xs tracking-[0.3em] text-lime",
							"x-file-name": "Manifesto",
							"x-line-number": "35",
							"x-column": "12",
							"x-component": "span",
							"x-id": "Manifesto_35_12",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "CHAPTERS",
							"x-source-file-abs": "/app/frontend/src/components/Manifesto.tsx",
							"x-source-line": "3",
							"x-source-path": "n",
							"x-source-editable": "true",
							"x-array-var": "CHAPTERS",
							"x-array-line": "3",
							"x-array-item-param": "c",
							children: c.n
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 27,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("h3", {
							className: "mt-6 font-display text-2xl font-semibold uppercase tracking-tight text-zinc-100 transition-colors duration-300 group-hover:text-lime sm:text-3xl",
							"x-file-name": "Manifesto",
							"x-line-number": "36",
							"x-column": "12",
							"x-component": "h3",
							"x-id": "Manifesto_36_12",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "CHAPTERS",
							"x-source-file-abs": "/app/frontend/src/components/Manifesto.tsx",
							"x-source-line": "3",
							"x-source-path": "title",
							"x-source-editable": "true",
							"x-array-var": "CHAPTERS",
							"x-array-line": "3",
							"x-array-item-param": "c",
							children: c.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 28,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ _jsxDEV("p", {
							className: "mt-5 text-sm leading-relaxed text-zinc-400 sm:text-base",
							"x-file-name": "Manifesto",
							"x-line-number": "39",
							"x-column": "12",
							"x-component": "p",
							"x-id": "Manifesto_39_12",
							"x-dynamic": "true",
							"x-source-type": "static-imported",
							"x-source-var": "CHAPTERS",
							"x-source-file-abs": "/app/frontend/src/components/Manifesto.tsx",
							"x-source-line": "3",
							"x-source-path": "body",
							"x-source-editable": "true",
							"x-array-var": "CHAPTERS",
							"x-array-line": "3",
							"x-array-item-param": "c",
							children: c.body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 31,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 11
				}, this)
			}, c.n, false, {
				fileName: _jsxFileName,
				lineNumber: 25,
				columnNumber: 31
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 24,
			columnNumber: 5
		}, this)
	]
}, void 0, true, {
	fileName: _jsxFileName,
	lineNumber: 15,
	columnNumber: 32
}, this);
_c = Manifesto;
var _c;
$RefreshReg$(_c, "Manifesto");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Manifesto.tsx";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Manifesto.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Manifesto.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Manifesto.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBUUMsb0JBQW9COzs7QUFFckMsTUFBTUMsV0FBVztDQUNmO0VBQ0VDLEdBQUc7RUFDSEMsT0FBTztFQUNQQyxNQUFNO0NBQ1I7Q0FDQTtFQUNFRixHQUFHO0VBQ0hDLE9BQU87RUFDUEMsTUFBTTtDQUNSO0NBQ0E7RUFDRUYsR0FBRztFQUNIQyxPQUFPO0VBQ1BDLE1BQU07Q0FDUjtBQUFDO0FBR0gsT0FBTyxNQUFNQyxrQkFDWCx3QkFBQyxXQUFEO0NBQVMsSUFBRztDQUFZLGVBQVk7Q0FBb0IsV0FBVTtDQUErQztDQUFBO0NBQUE7Q0FBQTtDQUFBO0NBQUE7V0FBakg7RUFDRSx3QkFBQyxRQUFEO0dBQU87R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO2FBQ0wsd0JBQUMsY0FBRDtJQUFjLE9BQU07SUFBTyxPQUFNO0lBQW9CO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtHQUFBOzs7OztFQUMvQzs7Ozs7RUFDUix3QkFBQyxRQUFEO0dBQVEsT0FBTztHQUFJO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTthQUNqQix3QkFBQyxNQUFEO0lBQUksV0FBVTtJQUE2RztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7Y0FBM0gsQ0FBMkgsc0JBQ3ZHLHdCQUFDLFFBQUQ7S0FBTSxXQUFVO0tBQVc7S0FBQTtLQUFBO0tBQUE7S0FBQTtLQUFBO2VBQUM7SUFBdUI7Ozs7WUFDbkU7Ozs7OztFQUNFOzs7OztFQUNSLHdCQUFDLE9BQUQ7R0FBSyxXQUFVO0dBQTZHO0dBQUE7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0dBQUE7YUFDekhKLFNBQVNLLEtBQUtDLEdBQUdDLE1BQ2hCLHdCQUFDLFFBQUQ7SUFBa0IsT0FBTyxNQUFPQTtJQUFHLFdBQVU7SUFBUTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO2NBQ25ELHdCQUFDLE9BQUQ7S0FBSyxlQUFhLHFCQUFxQkQsRUFBRUw7S0FBSyxXQUFVO0tBQXdFO0tBQUE7S0FBQTtLQUFBO0tBQUE7S0FBQTtlQUFoSTtNQUNFLHdCQUFDLFFBQUQ7T0FBTSxXQUFVO09BQThDO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtpQkFBRUssRUFBRUw7TUFBUTs7Ozs7TUFDMUUsd0JBQUMsTUFBRDtPQUFJLFdBQVU7T0FBa0o7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO2lCQUM3SkssRUFBRUo7TUFDRDs7Ozs7TUFDSix3QkFBQyxLQUFEO09BQUcsV0FBVTtPQUF5RDtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUE7aUJBQUVJLEVBQUVIO01BQVE7Ozs7O0tBQy9FOzs7Ozs7R0FDQyxHQVJLRyxFQUFFTDs7OztVQVFQLENBQ1Q7RUFDRTs7Ozs7Q0FDRSIsIm5hbWVzIjpbIlJldmVhbCIsIlNlY3Rpb25MYWJlbCIsIkNIQVBURVJTIiwibiIsInRpdGxlIiwiYm9keSIsIk1hbmlmZXN0byIsIm1hcCIsImMiLCJpIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk1hbmlmZXN0by50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmV2ZWFsLCBTZWN0aW9uTGFiZWwgfSBmcm9tIFwiLi9SZXZlYWxcIjtcblxuY29uc3QgQ0hBUFRFUlMgPSBbXG4gIHtcbiAgICBuOiBcIjAxXCIsXG4gICAgdGl0bGU6IFwiRGlzY292ZXJcIixcbiAgICBib2R5OiBcIlN0YXJ0IHdpdGggdGhlIHVzZXIncyBwcm9ibGVtLCBuZXZlciB0aGUgc29sdXRpb24uIFR3ZW50eSBob25lc3QgY29udmVyc2F0aW9ucyBiZWF0IHR3byBodW5kcmVkIGFzc3VtcHRpb25zIOKAlCBldmVyeSBzdHJvbmcgcHJvZHVjdCBkZWNpc2lvbiBJJ3ZlIG1hZGUgYmVnYW4gd2l0aCBsaXN0ZW5pbmcuXCIsXG4gIH0sXG4gIHtcbiAgICBuOiBcIjAyXCIsXG4gICAgdGl0bGU6IFwiRGVjaWRlXCIsXG4gICAgYm9keTogXCJTdHJhdGVneSBpcyBjaG9vc2luZyB3aGF0IG5vdCB0byBidWlsZC4gSSBzY29wZSBNVlBzIHdpdGggTW9TQ29XLCByYW5rIHRyYWRlLW9mZnMgZXhwbGljaXRseSwgYW5kIGxldCBldmlkZW5jZSDigJQgbm90IGF0dGFjaG1lbnQgdG8gYW4gaWRlYSDigJQgY2FsbCB0aGUgcGl2b3QuXCIsXG4gIH0sXG4gIHtcbiAgICBuOiBcIjAzXCIsXG4gICAgdGl0bGU6IFwiRGVsaXZlclwiLFxuICAgIGJvZHk6IFwiU2hpcCB0aGUgc21hbGxlc3QgdGhpbmcgdGhhdCB0ZXN0cyB0aGUgaHlwb3RoZXNpcywgZGVmaW5lIHRoZSBOb3J0aCBTdGFyIGJlZm9yZSBsYXVuY2gsIGFuZCBsZXQgb3V0Y29tZXMgdGVhY2ggdGhlIG5leHQgaXRlcmF0aW9uLiBUcnVzdCBpcyB0aGUgbWV0cmljIHRoYXQgY29tcG91bmRzLlwiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IE1hbmlmZXN0byA9ICgpID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJtYW5pZmVzdG9cIiBkYXRhLXRlc3RpZD1cIm1hbmlmZXN0by1zZWN0aW9uXCIgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNSBweS0yOCBzbTpweC04IHNtOnB5LTM2XCI+XG4gICAgPFJldmVhbD5cbiAgICAgIDxTZWN0aW9uTGFiZWwgaW5kZXg9XCLCpyAwMVwiIGxhYmVsPVwiUHJvZHVjdCBwaGlsb3NvcGh5XCIgLz5cbiAgICA8L1JldmVhbD5cbiAgICA8UmV2ZWFsIGRlbGF5PXswLjF9PlxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1heC13LTR4bCBmb250LWRpc3BsYXkgdGV4dC0zeGwgZm9udC1ib2xkIHVwcGVyY2FzZSBsZWFkaW5nLVsxLjA1XSB0cmFja2luZy10aWdodCB0ZXh0LXppbmMtMTAwIHNtOnRleHQtNXhsXCI+XG4gICAgICAgIEhvdyBJIHRoaW5rIGFib3V0IDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbGltZVwiPmJ1aWxkaW5nIHByb2R1Y3RzPC9zcGFuPlxuICAgICAgPC9oMj5cbiAgICA8L1JldmVhbD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTE2IGdyaWQgZ3JpZC1jb2xzLTEgZ2FwLXB4IG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLTJ4bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLXdoaXRlLzEwIG1kOmdyaWQtY29scy0zXCI+XG4gICAgICB7Q0hBUFRFUlMubWFwKChjLCBpKSA9PiAoXG4gICAgICAgIDxSZXZlYWwga2V5PXtjLm59IGRlbGF5PXswLjEyICogaX0gY2xhc3NOYW1lPVwiYmctaW5rXCI+XG4gICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD17YG1hbmlmZXN0by1jaGFwdGVyLSR7Yy5ufWB9IGNsYXNzTmFtZT1cImdyb3VwIGgtZnVsbCBwLTggdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tNTAwIGhvdmVyOmJnLXBhbmVsIHNtOnAtMTBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbW9ubyB0ZXh0LXhzIHRyYWNraW5nLVswLjNlbV0gdGV4dC1saW1lXCI+e2Mubn08L3NwYW4+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtNiBmb250LWRpc3BsYXkgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctdGlnaHQgdGV4dC16aW5jLTEwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6dGV4dC1saW1lIHNtOnRleHQtM3hsXCI+XG4gICAgICAgICAgICAgIHtjLnRpdGxlfVxuICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTUgdGV4dC1zbSBsZWFkaW5nLXJlbGF4ZWQgdGV4dC16aW5jLTQwMCBzbTp0ZXh0LWJhc2VcIj57Yy5ib2R5fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9SZXZlYWw+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9NYW5pZmVzdG8udHN4In0=