import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.tsx");const useEffect = __vite__cjsImport1_react["useEffect"];const _jsxDEV = __vite__cjsImport6_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport6_react_jsxDevRuntime["Fragment"];import { Routes, Route, useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=a3f0ba77";
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=a3f0ba77";
import Lenis from "/node_modules/.vite/deps/lenis.js?v=a3f0ba77";
import { Toaster } from "/node_modules/.vite/deps/sonner.js?v=a3f0ba77";
import Home from "/src/pages/Home.tsx?t=1789229826800";
import CaseStudy from "/src/pages/CaseStudy.tsx?t=1789229820776";
var _jsxFileName = "/app/frontend/src/App.tsx";
import __vite__cjsImport6_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a3f0ba77";
var _s = $RefreshSig$();
export default function App() {
	_s();
	const location = useLocation();
	useEffect(() => {
		const lenis = new Lenis({ lerp: .09 });
		window.lenis = lenis;
		let raf = 0;
		const loop = (time) => {
			lenis.raf(time);
			raf = requestAnimationFrame(loop);
		};
		raf = requestAnimationFrame(loop);
		return () => {
			cancelAnimationFrame(raf);
			lenis.destroy();
			window.lenis = undefined;
		};
	}, []);
	useEffect(() => {
		const w = window;
		if (w.lenis) w.lenis.scrollTo(0, { immediate: true });
		else window.scrollTo(0, 0);
	}, [location.pathname]);
	return /* @__PURE__ */ _jsxDEV(_Fragment, { children: [/* @__PURE__ */ _jsxDEV(Toaster, {
		theme: "dark",
		position: "bottom-right",
		"x-file-name": "App",
		"x-line-number": "35",
		"x-column": "6",
		"x-component": "Toaster",
		"x-id": "App_35_6",
		"x-dynamic": "false"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 7
	}, this), /* @__PURE__ */ _jsxDEV(Routes, { children: [/* @__PURE__ */ _jsxDEV(Route, {
		path: "/",
		element: /* @__PURE__ */ _jsxDEV(Home, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 41,
			columnNumber: 34
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 41,
		columnNumber: 9
	}, this), /* @__PURE__ */ _jsxDEV(Route, {
		path: "/case/:id",
		element: /* @__PURE__ */ _jsxDEV(CaseStudy, {
			"x-file-name": "App",
			"x-line-number": "38",
			"x-column": "41",
			"x-component": "CaseStudy",
			"x-id": "App_38_41",
			"x-dynamic": "true"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 42,
			columnNumber: 42
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 42,
		columnNumber: 9
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 40,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 38,
		columnNumber: 10
	}, this);
}
_s(App, "Vjur86G8KJg7smx64WikEeGZCww=", false, function() {
	return [useLocation];
});
_c = App;
var _c;
$RefreshReg$(_c, "App");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/App.tsx?t=1789229826800";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/App.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsUUFBUUMsT0FBT0MsbUJBQW1CO0FBQzNDLFNBQVNDLGlCQUFpQjtBQUMxQixPQUFPQyxXQUFXO0FBQ2xCLFNBQVNDLGVBQWU7QUFDeEIsT0FBT0MsVUFBVTtBQUNqQixPQUFPQyxlQUFlOzs7O0FBRXRCLGVBQWUsU0FBU0MsTUFBTTs7Q0FDNUIsTUFBTUMsV0FBV1AsWUFBWTtDQUU3QkMsZ0JBQWdCO0VBQ2QsTUFBTU8sUUFBUSxJQUFJTixNQUFNLEVBQUVPLE1BQU0sSUFBSyxDQUFDO0VBQ3RDLEFBQUNDLE9BQXdDRixRQUFRQTtFQUNqRCxJQUFJRyxNQUFNO0VBQ1YsTUFBTUMsUUFBUUMsU0FBaUI7R0FDN0JMLE1BQU1HLElBQUlFLElBQUk7R0FDZEYsTUFBTUcsc0JBQXNCRixJQUFJO0VBQ2xDO0VBQ0FELE1BQU1HLHNCQUFzQkYsSUFBSTtFQUNoQyxhQUFhO0dBQ1hHLHFCQUFxQkosR0FBRztHQUN4QkgsTUFBTVEsUUFBUTtHQUNkLEFBQUNOLE9BQXdDRixRQUFRUztFQUNuRDtDQUNGLEdBQUcsRUFBRTtDQUVMaEIsZ0JBQWdCO0VBQ2QsTUFBTWlCLElBQUlSO0VBQ1YsSUFBSVEsRUFBRVYsT0FBT1UsRUFBRVYsTUFBTVcsU0FBUyxHQUFHLEVBQUVDLFdBQVcsS0FBSyxDQUFDO09BQy9DVixPQUFPUyxTQUFTLEdBQUcsQ0FBQztDQUMzQixHQUFHLENBQUNaLFNBQVNjLFFBQVEsQ0FBQztDQUV0QixPQUNFLGdEQUNFLHdCQUFDLFNBQUQ7RUFBUyxPQUFNO0VBQU8sVUFBUztFQUFjO0VBQUE7RUFBQTtFQUFBO0VBQUE7RUFBQTtDQUFBOzs7O1dBQzdDLHdCQUFDLFFBQUQsYUFDRSx3QkFBQyxPQUFEO0VBQU8sTUFBSztFQUFJLFNBQVMsd0JBQUMsTUFBRCxDQUFLOzs7OztDQUFJOzs7O1dBQ2xDLHdCQUFDLE9BQUQ7RUFBTyxNQUFLO0VBQVksU0FBUyx3QkFBQyxXQUFEO0dBQVU7R0FBQTtHQUFBO0dBQUE7R0FBQTtHQUFBO0VBQUE7Ozs7O0NBQUk7Ozs7U0FDekM7Ozs7U0FDVjs7Ozs7QUFFSiIsIm5hbWVzIjpbIlJvdXRlcyIsIlJvdXRlIiwidXNlTG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJMZW5pcyIsIlRvYXN0ZXIiLCJIb21lIiwiQ2FzZVN0dWR5IiwiQXBwIiwibG9jYXRpb24iLCJsZW5pcyIsImxlcnAiLCJ3aW5kb3ciLCJyYWYiLCJsb29wIiwidGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGVzdHJveSIsInVuZGVmaW5lZCIsInciLCJzY3JvbGxUbyIsImltbWVkaWF0ZSIsInBhdGhuYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZSwgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGVuaXMgZnJvbSBcImxlbmlzXCI7XG5pbXBvcnQgeyBUb2FzdGVyIH0gZnJvbSBcInNvbm5lclwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIkAvcGFnZXMvSG9tZVwiO1xuaW1wb3J0IENhc2VTdHVkeSBmcm9tIFwiQC9wYWdlcy9DYXNlU3R1ZHlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBsZW5pcyA9IG5ldyBMZW5pcyh7IGxlcnA6IDAuMDkgfSk7XG4gICAgKHdpbmRvdyBhcyB1bmtub3duIGFzIHsgbGVuaXM/OiBMZW5pcyB9KS5sZW5pcyA9IGxlbmlzO1xuICAgIGxldCByYWYgPSAwO1xuICAgIGNvbnN0IGxvb3AgPSAodGltZTogbnVtYmVyKSA9PiB7XG4gICAgICBsZW5pcy5yYWYodGltZSk7XG4gICAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgfTtcbiAgICByYWYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZik7XG4gICAgICBsZW5pcy5kZXN0cm95KCk7XG4gICAgICAod2luZG93IGFzIHVua25vd24gYXMgeyBsZW5pcz86IExlbmlzIH0pLmxlbmlzID0gdW5kZWZpbmVkO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHcgPSB3aW5kb3cgYXMgdW5rbm93biBhcyB7IGxlbmlzPzogTGVuaXMgfTtcbiAgICBpZiAody5sZW5pcykgdy5sZW5pcy5zY3JvbGxUbygwLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KTtcbiAgICBlbHNlIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgfSwgW2xvY2F0aW9uLnBhdGhuYW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRvYXN0ZXIgdGhlbWU9XCJkYXJrXCIgcG9zaXRpb249XCJib3R0b20tcmlnaHRcIiAvPlxuICAgICAgPFJvdXRlcz5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PEhvbWUgLz59IC8+XG4gICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Nhc2UvOmlkXCIgZWxlbWVudD17PENhc2VTdHVkeSAvPn0gLz5cbiAgICAgIDwvUm91dGVzPlxuICAgIDwvPlxuICApO1xufVxuIl0sImZpbGUiOiIvYXBwL2Zyb250ZW5kL3NyYy9BcHAudHN4In0=