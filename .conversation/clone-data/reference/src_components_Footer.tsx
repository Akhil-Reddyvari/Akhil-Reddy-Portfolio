import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Footer.tsx");const useState = __vite__cjsImport0_react["useState"];const _jsxDEV = __vite__cjsImport5_react_jsxDevRuntime["jsxDEV"];import __vite__cjsImport0_react from "/node_modules/.vite/deps/react.js?v=a3f0ba77";
import { toast } from "/node_modules/.vite/deps/sonner.js?v=a3f0ba77";
import { FileDown, Github, Linkedin, Mail, Phone, Send } from "/src/lib/lucide-react.tsx";
import { PROFILE } from "/src/data/portfolio.ts?t=1789229820776";
import { Reveal, SectionLabel } from "/src/components/Reveal.tsx";
var _jsxFileName = "/app/frontend/src/components/Footer.tsx";
import __vite__cjsImport5_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=a3f0ba77";
var _s = $RefreshSig$();
export const Footer = () => {
	_s();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: ""
	});
	const [sending, setSending] = useState(false);
	const submit = async (e) => {
		e.preventDefault();
		setSending(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form)
			});
			if (!res.ok) throw new Error();
			toast.success("Message sent — I'll get back to you soon.");
			setForm({
				name: "",
				email: "",
				message: ""
			});
		} catch {
			toast.error("Couldn't send right now — please email me directly.");
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ _jsxDEV("footer", {
		id: "contact",
		"data-testid": "contact-footer",
		className: "relative overflow-hidden border-t border-white/10",
		"x-file-name": "Footer",
		"x-line-number": "31",
		"x-column": "4",
		"x-component": "footer",
		"x-id": "Footer_31_4",
		"x-dynamic": "false",
		children: [/* @__PURE__ */ _jsxDEV("div", {
			className: "absolute -bottom-52 left-1/2 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-lime/8 blur-[160px]",
			"x-file-name": "Footer",
			"x-line-number": "32",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Footer_32_6",
			"x-dynamic": "false"
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 38,
			columnNumber: 7
		}, this), /* @__PURE__ */ _jsxDEV("div", {
			className: "relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36",
			"x-file-name": "Footer",
			"x-line-number": "33",
			"x-column": "6",
			"x-component": "div",
			"x-id": "Footer_33_6",
			"x-dynamic": "false",
			children: [
				/* @__PURE__ */ _jsxDEV(Reveal, {
					"x-file-name": "Footer",
					"x-line-number": "34",
					"x-column": "8",
					"x-component": "Reveal",
					"x-id": "Footer_34_8",
					"x-dynamic": "true",
					children: /* @__PURE__ */ _jsxDEV(SectionLabel, {
						index: "§ 07",
						label: "Contact",
						"x-file-name": "Footer",
						"x-line-number": "35",
						"x-column": "10",
						"x-component": "SectionLabel",
						"x-id": "Footer_35_10",
						"x-dynamic": "true"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 41,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 40,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "grid grid-cols-1 gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24",
					"x-file-name": "Footer",
					"x-line-number": "37",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Footer_37_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("div", {
						"x-file-name": "Footer",
						"x-line-number": "38",
						"x-column": "10",
						"x-component": "div",
						"x-id": "Footer_38_10",
						"x-dynamic": "false",
						children: [/* @__PURE__ */ _jsxDEV(Reveal, {
							delay: .08,
							"x-file-name": "Footer",
							"x-line-number": "39",
							"x-column": "12",
							"x-component": "Reveal",
							"x-id": "Footer_39_12",
							"x-dynamic": "true",
							children: /* @__PURE__ */ _jsxDEV("h2", {
								className: "font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-zinc-100 sm:text-6xl",
								"x-file-name": "Footer",
								"x-line-number": "40",
								"x-column": "14",
								"x-component": "h2",
								"x-id": "Footer_40_14",
								"x-dynamic": "false",
								children: [
									"Let's build",
									/* @__PURE__ */ _jsxDEV("br", {
										"x-file-name": "Footer",
										"x-line-number": "42",
										"x-column": "16",
										"x-component": "br",
										"x-id": "Footer_42_16",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 48,
										columnNumber: 17
									}, this),
									"something",
									/* @__PURE__ */ _jsxDEV("br", {
										"x-file-name": "Footer",
										"x-line-number": "44",
										"x-column": "16",
										"x-component": "br",
										"x-id": "Footer_44_16",
										"x-dynamic": "false"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 50,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("span", {
										className: "text-lime",
										"x-file-name": "Footer",
										"x-line-number": "45",
										"x-column": "16",
										"x-component": "span",
										"x-id": "Footer_45_16",
										"x-dynamic": "false",
										children: "people love."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 51,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 45,
							columnNumber: 13
						}, this), /* @__PURE__ */ _jsxDEV(Reveal, {
							delay: .16,
							"x-file-name": "Footer",
							"x-line-number": "48",
							"x-column": "12",
							"x-component": "Reveal",
							"x-id": "Footer_48_12",
							"x-dynamic": "true",
							children: [/* @__PURE__ */ _jsxDEV("div", {
								className: "mt-10 flex flex-col gap-4",
								"x-file-name": "Footer",
								"x-line-number": "49",
								"x-column": "14",
								"x-component": "div",
								"x-id": "Footer_49_14",
								"x-dynamic": "false",
								children: [/* @__PURE__ */ _jsxDEV("a", {
									href: `mailto:${PROFILE.email}`,
									"data-testid": "footer-email-link",
									className: "group flex w-fit items-center gap-3 text-zinc-300 transition-colors hover:text-lime",
									"x-file-name": "Footer",
									"x-line-number": "50",
									"x-column": "16",
									"x-component": "a",
									"x-id": "Footer_50_16",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(Mail, {
											size: 17,
											className: "text-lime",
											"x-file-name": "Footer",
											"x-line-number": "51",
											"x-column": "18",
											"x-component": "Mail",
											"x-id": "Footer_51_18",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 57,
											columnNumber: 19
										}, this),
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "border-b border-transparent group-hover:border-lime",
											"x-file-name": "Footer",
											"x-line-number": "51",
											"x-column": "59",
											"x-component": "span",
											"x-id": "Footer_51_59",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "PROFILE",
											"x-source-file": "@/data/portfolio",
											"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
											"x-source-line": "22",
											"x-source-path": "email",
											"x-source-editable": "true",
											children: PROFILE.email
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 57,
											columnNumber: 171
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 56,
									columnNumber: 17
								}, this), /* @__PURE__ */ _jsxDEV("a", {
									href: `tel:${PROFILE.phone.replace(/\s/g, "")}`,
									"data-testid": "footer-phone-link",
									className: "group flex w-fit items-center gap-3 text-zinc-300 transition-colors hover:text-lime",
									"x-file-name": "Footer",
									"x-line-number": "53",
									"x-column": "16",
									"x-component": "a",
									"x-id": "Footer_53_16",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV(Phone, {
											size: 17,
											className: "text-lime",
											"x-file-name": "Footer",
											"x-line-number": "54",
											"x-column": "18",
											"x-component": "Phone",
											"x-id": "Footer_54_18",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 60,
											columnNumber: 19
										}, this),
										" ",
										/* @__PURE__ */ _jsxDEV("span", {
											className: "border-b border-transparent group-hover:border-lime",
											"x-file-name": "Footer",
											"x-line-number": "54",
											"x-column": "60",
											"x-component": "span",
											"x-id": "Footer_54_60",
											"x-dynamic": "true",
											"x-source-type": "static-imported",
											"x-source-var": "PROFILE",
											"x-source-file": "@/data/portfolio",
											"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
											"x-source-line": "22",
											"x-source-path": "phone",
											"x-source-editable": "true",
											children: PROFILE.phone
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 60,
											columnNumber: 173
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 59,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 15
							}, this), /* @__PURE__ */ _jsxDEV("div", {
								className: "mt-10 flex flex-wrap gap-3",
								"x-file-name": "Footer",
								"x-line-number": "57",
								"x-column": "14",
								"x-component": "div",
								"x-id": "Footer_57_14",
								"x-dynamic": "false",
								children: [
									/* @__PURE__ */ _jsxDEV("a", {
										href: PROFILE.resumeUrl,
										download: true,
										"data-testid": "footer-resume-button",
										className: "flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink transition-transform duration-300 hover:scale-105",
										"x-file-name": "Footer",
										"x-line-number": "58",
										"x-column": "16",
										"x-component": "a",
										"x-id": "Footer_58_16",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV(FileDown, {
											size: 15,
											"x-file-name": "Footer",
											"x-line-number": "59",
											"x-column": "18",
											"x-component": "FileDown",
											"x-id": "Footer_59_18",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 65,
											columnNumber: 19
										}, this), " Download resume"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 64,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("a", {
										href: PROFILE.linkedin,
										target: "_blank",
										rel: "noopener noreferrer",
										"data-testid": "footer-linkedin-link",
										className: "flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-lime hover:text-lime",
										"x-file-name": "Footer",
										"x-line-number": "61",
										"x-column": "16",
										"x-component": "a",
										"x-id": "Footer_61_16",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV(Linkedin, {
											size: 15,
											"x-file-name": "Footer",
											"x-line-number": "62",
											"x-column": "18",
											"x-component": "Linkedin",
											"x-id": "Footer_62_18",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 68,
											columnNumber: 19
										}, this), " LinkedIn"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 67,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ _jsxDEV("a", {
										href: PROFILE.github,
										target: "_blank",
										rel: "noopener noreferrer",
										"data-testid": "footer-github-link",
										className: "flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-zinc-300 transition-colors hover:border-lime hover:text-lime",
										"x-file-name": "Footer",
										"x-line-number": "64",
										"x-column": "16",
										"x-component": "a",
										"x-id": "Footer_64_16",
										"x-dynamic": "false",
										children: [/* @__PURE__ */ _jsxDEV(Github, {
											size: 15,
											"x-file-name": "Footer",
											"x-line-number": "65",
											"x-column": "18",
											"x-component": "Github",
											"x-id": "Footer_65_18",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 71,
											columnNumber: 19
										}, this), " GitHub"]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 70,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 44,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV(Reveal, {
						delay: .2,
						"x-file-name": "Footer",
						"x-line-number": "71",
						"x-column": "10",
						"x-component": "Reveal",
						"x-id": "Footer_71_10",
						"x-dynamic": "true",
						children: /* @__PURE__ */ _jsxDEV("form", {
							"data-testid": "contact-form",
							onSubmit: submit,
							className: "rounded-2xl border border-white/10 bg-panel p-7 sm:p-9",
							"x-file-name": "Footer",
							"x-line-number": "72",
							"x-column": "12",
							"x-component": "form",
							"x-id": "Footer_72_12",
							"x-dynamic": "false",
							children: [
								/* @__PURE__ */ _jsxDEV("h3", {
									className: "font-display text-xl font-semibold tracking-tight text-zinc-100",
									"x-file-name": "Footer",
									"x-line-number": "73",
									"x-column": "14",
									"x-component": "h3",
									"x-id": "Footer_73_14",
									"x-dynamic": "false",
									children: "Send a message"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 79,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("p", {
									className: "mt-1 text-sm text-zinc-500",
									"x-file-name": "Footer",
									"x-line-number": "74",
									"x-column": "14",
									"x-component": "p",
									"x-id": "Footer_74_14",
									"x-dynamic": "false",
									children: "Hiring for an APM/PM role? I'd love to talk."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 80,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ _jsxDEV("div", {
									className: "mt-6 flex flex-col gap-4",
									"x-file-name": "Footer",
									"x-line-number": "75",
									"x-column": "14",
									"x-component": "div",
									"x-id": "Footer_75_14",
									"x-dynamic": "false",
									children: [
										/* @__PURE__ */ _jsxDEV("input", {
											"data-testid": "contact-name-input",
											required: true,
											placeholder: "Your name",
											value: form.name,
											onChange: (e) => setForm({
												...form,
												name: e.target.value
											}),
											className: "rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-lime/60",
											"x-file-name": "Footer",
											"x-line-number": "76",
											"x-column": "16",
											"x-component": "input",
											"x-id": "Footer_76_16",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 82,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("input", {
											"data-testid": "contact-email-input",
											required: true,
											type: "email",
											placeholder: "Your email",
											value: form.email,
											onChange: (e) => setForm({
												...form,
												email: e.target.value
											}),
											className: "rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-lime/60",
											"x-file-name": "Footer",
											"x-line-number": "84",
											"x-column": "16",
											"x-component": "input",
											"x-id": "Footer_84_16",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 86,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("textarea", {
											"data-testid": "contact-message-input",
											required: true,
											rows: 4,
											placeholder: "What are you building?",
											value: form.message,
											onChange: (e) => setForm({
												...form,
												message: e.target.value
											}),
											className: "resize-none rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-colors focus:border-lime/60",
											"x-file-name": "Footer",
											"x-line-number": "93",
											"x-column": "16",
											"x-component": "textarea",
											"x-id": "Footer_93_16",
											"x-dynamic": "false"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 90,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ _jsxDEV("button", {
											"data-testid": "contact-submit-button",
											disabled: sending,
											className: "flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink transition-all duration-300 hover:scale-[1.03] disabled:opacity-50",
											"x-file-name": "Footer",
											"x-line-number": "102",
											"x-column": "16",
											"x-component": "button",
											"x-id": "Footer_102_16",
											"x-dynamic": "true",
											"x-source-type": "computed",
											"x-source-editable": "false",
											children: [
												sending ? "Sending…" : "Send message",
												" ",
												/* @__PURE__ */ _jsxDEV(Send, {
													size: 14,
													"x-file-name": "Footer",
													"x-line-number": "107",
													"x-column": "58",
													"x-component": "Send",
													"x-id": "Footer_107_58",
													"x-dynamic": "false"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 95,
													columnNumber: 59
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 94,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 81,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 78,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 77,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 43,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ _jsxDEV("div", {
					className: "mt-24 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8",
					"x-file-name": "Footer",
					"x-line-number": "114",
					"x-column": "8",
					"x-component": "div",
					"x-id": "Footer_114_8",
					"x-dynamic": "false",
					children: [/* @__PURE__ */ _jsxDEV("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600",
						"x-file-name": "Footer",
						"x-line-number": "115",
						"x-column": "10",
						"x-component": "span",
						"x-id": "Footer_115_10",
						"x-dynamic": "true",
						"x-source-type": "static-imported",
						"x-source-var": "PROFILE",
						"x-source-file": "@/data/portfolio",
						"x-source-file-abs": "/app/frontend/src/data/portfolio.ts",
						"x-source-line": "22",
						"x-source-path": "name",
						"x-source-editable": "true",
						children: ["© 2026 ", /* @__PURE__ */ _jsxDEV("span", {
							"data-ve-dynamic": "true",
							"x-excluded": "true",
							style: { display: "contents" },
							"x-file-name": "Footer",
							"x-line-number": "115",
							"x-column": "10",
							"x-component": "span",
							"x-id": "Footer_115_10_expr1",
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
							lineNumber: 103,
							columnNumber: 420
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 11
					}, this), /* @__PURE__ */ _jsxDEV("span", {
						className: "font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-600",
						"x-file-name": "Footer",
						"x-line-number": "116",
						"x-column": "10",
						"x-component": "span",
						"x-id": "Footer_116_10",
						"x-dynamic": "false",
						children: "Designed & built with product thinking · Bengaluru, IN"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 106,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 102,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 39,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 37,
		columnNumber: 10
	}, this);
};
_s(Footer, "Ddich/u0ChQ5QnORH2+jxYiLSF4=");
_c = Footer;
var _c;
$RefreshReg$(_c, "Footer");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;
import * as __vite_react_currentExports from "/src/components/Footer.tsx?t=1789229820776";
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }

  const currentExports = __vite_react_currentExports;
  queueMicrotask(() => {
    RefreshRuntime.registerExportsForReactRefresh("/app/frontend/src/components/Footer.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/frontend/src/components/Footer.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) { return RefreshRuntime.register(type, "/app/frontend/src/components/Footer.tsx" + ' ' + id); }
function $RefreshSig$() { return RefreshRuntime.createSignatureFunctionForTransform(); }

//# sourceMappingURL=data:application/json;base64,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LCJHaXRodWIiLCJMaW5rZWRpbiIsIk1haWwiLCJQaG9uZSIsIlNlbmQiLCJQUk9GSUxFIiwiUmV2ZWFsIiwiU2VjdGlvbkxhYmVsIiwiRm9vdGVyIiwiZm9ybSIsInNldEZvcm0iLCJuYW1lIiwiZW1haWwiLCJtZXNzYWdlIiwic2VuZGluZyIsInNldFNlbmRpbmciLCJzdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiRXJyb3IiLCJzdWNjZXNzIiwiZXJyb3IiLCJwaG9uZSIsInJlcGxhY2UiLCJyZXN1bWVVcmwiLCJsaW5rZWRpbiIsImdpdGh1YiIsInRhcmdldCIsInZhbHVlIiwiZGlzcGxheSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJGb290ZXIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJzb25uZXJcIjtcbmltcG9ydCB7IEZpbGVEb3duLCBHaXRodWIsIExpbmtlZGluLCBNYWlsLCBQaG9uZSwgU2VuZCB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IFBST0ZJTEUgfSBmcm9tIFwiQC9kYXRhL3BvcnRmb2xpb1wiO1xuaW1wb3J0IHsgUmV2ZWFsLCBTZWN0aW9uTGFiZWwgfSBmcm9tIFwiLi9SZXZlYWxcIjtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgbWVzc2FnZTogXCJcIiB9KTtcbiAgY29uc3QgW3NlbmRpbmcsIHNldFNlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U2VuZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2NvbnRhY3RcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pLFxuICAgICAgfSk7XG4gICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB0b2FzdC5zdWNjZXNzKFwiTWVzc2FnZSBzZW50IOKAlCBJJ2xsIGdldCBiYWNrIHRvIHlvdSBzb29uLlwiKTtcbiAgICAgIHNldEZvcm0oeyBuYW1lOiBcIlwiLCBlbWFpbDogXCJcIiwgbWVzc2FnZTogXCJcIiB9KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRvYXN0LmVycm9yKFwiQ291bGRuJ3Qgc2VuZCByaWdodCBub3cg4oCUIHBsZWFzZSBlbWFpbCBtZSBkaXJlY3RseS5cIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNlbmRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgaWQ9XCJjb250YWN0XCIgZGF0YS10ZXN0aWQ9XCJjb250YWN0LWZvb3RlclwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBib3JkZXItdCBib3JkZXItd2hpdGUvMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS01MiBsZWZ0LTEvMiBoLVsyOHJlbV0gdy1bNDRyZW1dIC10cmFuc2xhdGUteC0xLzIgcm91bmRlZC1mdWxsIGJnLWxpbWUvOCBibHVyLVsxNjBweF1cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBteC1hdXRvIG1heC13LTd4bCBweC01IHB5LTI4IHNtOnB4LTggc206cHktMzZcIj5cbiAgICAgICAgPFJldmVhbD5cbiAgICAgICAgICA8U2VjdGlvbkxhYmVsIGluZGV4PVwiwqcgMDdcIiBsYWJlbD1cIkNvbnRhY3RcIiAvPlxuICAgICAgICA8L1JldmVhbD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGdhcC0xNiBsZzpncmlkLWNvbHMtWzEuMmZyXzFmcl0gbGc6Z2FwLTI0XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSZXZlYWwgZGVsYXk9ezAuMDh9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQtNHhsIGZvbnQtYm9sZCB1cHBlcmNhc2UgbGVhZGluZy1bMC45OF0gdHJhY2tpbmctdGlnaHQgdGV4dC16aW5jLTEwMCBzbTp0ZXh0LTZ4bFwiPlxuICAgICAgICAgICAgICAgIExldCdzIGJ1aWxkXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgc29tZXRoaW5nXG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1saW1lXCI+cGVvcGxlIGxvdmUuPC9zcGFuPlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgPC9SZXZlYWw+XG4gICAgICAgICAgICA8UmV2ZWFsIGRlbGF5PXswLjE2fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBmbGV4IGZsZXgtY29sIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke1BST0ZJTEUuZW1haWx9YH0gZGF0YS10ZXN0aWQ9XCJmb290ZXItZW1haWwtbGlua1wiIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1maXQgaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtemluYy0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1saW1lXCI+XG4gICAgICAgICAgICAgICAgICA8TWFpbCBzaXplPXsxN30gY2xhc3NOYW1lPVwidGV4dC1saW1lXCIgLz4gPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLXRyYW5zcGFyZW50IGdyb3VwLWhvdmVyOmJvcmRlci1saW1lXCI+e1BST0ZJTEUuZW1haWx9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtgdGVsOiR7UFJPRklMRS5waG9uZS5yZXBsYWNlKC9cXHMvZywgXCJcIil9YH0gZGF0YS10ZXN0aWQ9XCJmb290ZXItcGhvbmUtbGlua1wiIGNsYXNzTmFtZT1cImdyb3VwIGZsZXggdy1maXQgaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtemluYy0zMDAgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6dGV4dC1saW1lXCI+XG4gICAgICAgICAgICAgICAgICA8UGhvbmUgc2l6ZT17MTd9IGNsYXNzTmFtZT1cInRleHQtbGltZVwiIC8+IDxzcGFuIGNsYXNzTmFtZT1cImJvcmRlci1iIGJvcmRlci10cmFuc3BhcmVudCBncm91cC1ob3Zlcjpib3JkZXItbGltZVwiPntQUk9GSUxFLnBob25lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIGZsZXggZmxleC13cmFwIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17UFJPRklMRS5yZXN1bWVVcmx9IGRvd25sb2FkIGRhdGEtdGVzdGlkPVwiZm9vdGVyLXJlc3VtZS1idXR0b25cIiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiByb3VuZGVkLWZ1bGwgYmctbGltZSBweC02IHB5LTMgZm9udC1tb25vIHRleHQteHMgZm9udC1ib2xkIHVwcGVyY2FzZSB0cmFja2luZy1bMC4xNWVtXSB0ZXh0LWluayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0zMDAgaG92ZXI6c2NhbGUtMTA1XCI+XG4gICAgICAgICAgICAgICAgICA8RmlsZURvd24gc2l6ZT17MTV9IC8+IERvd25sb2FkIHJlc3VtZVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtQUk9GSUxFLmxpbmtlZGlufSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgZGF0YS10ZXN0aWQ9XCJmb290ZXItbGlua2VkaW4tbGlua1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTYgcHktMyBmb250LW1vbm8gdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTVlbV0gdGV4dC16aW5jLTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItbGltZSBob3Zlcjp0ZXh0LWxpbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxMaW5rZWRpbiBzaXplPXsxNX0gLz4gTGlua2VkSW5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17UFJPRklMRS5naXRodWJ9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBkYXRhLXRlc3RpZD1cImZvb3Rlci1naXRodWItbGlua1wiIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBib3JkZXIgYm9yZGVyLXdoaXRlLzE1IHB4LTYgcHktMyBmb250LW1vbm8gdGV4dC14cyB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTVlbV0gdGV4dC16aW5jLTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItbGltZSBob3Zlcjp0ZXh0LWxpbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxHaXRodWIgc2l6ZT17MTV9IC8+IEdpdEh1YlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1JldmVhbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxSZXZlYWwgZGVsYXk9ezAuMn0+XG4gICAgICAgICAgICA8Zm9ybSBkYXRhLXRlc3RpZD1cImNvbnRhY3QtZm9ybVwiIG9uU3VibWl0PXtzdWJtaXR9IGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctcGFuZWwgcC03IHNtOnAtOVwiPlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1kaXNwbGF5IHRleHQteGwgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LXppbmMtMTAwXCI+U2VuZCBhIG1lc3NhZ2U8L2gzPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC16aW5jLTUwMFwiPkhpcmluZyBmb3IgYW4gQVBNL1BNIHJvbGU/IEknZCBsb3ZlIHRvIHRhbGsuPC9wPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWN0LW5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBuYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci13aGl0ZS8xMCBiZy1pbmsgcHgtNCBweS0zIHRleHQtc20gdGV4dC16aW5jLTEwMCBwbGFjZWhvbGRlci16aW5jLTYwMCBvdXRsaW5lLW5vbmUgdHJhbnNpdGlvbi1jb2xvcnMgZm9jdXM6Ym9yZGVyLWxpbWUvNjBcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImNvbnRhY3QtZW1haWwtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIGJvcmRlciBib3JkZXItd2hpdGUvMTAgYmctaW5rIHB4LTQgcHktMyB0ZXh0LXNtIHRleHQtemluYy0xMDAgcGxhY2Vob2xkZXItemluYy02MDAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGZvY3VzOmJvcmRlci1saW1lLzYwXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9XCJjb250YWN0LW1lc3NhZ2UtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBidWlsZGluZz9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIG1lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVzaXplLW5vbmUgcm91bmRlZC14bCBib3JkZXIgYm9yZGVyLXdoaXRlLzEwIGJnLWluayBweC00IHB5LTMgdGV4dC1zbSB0ZXh0LXppbmMtMTAwIHBsYWNlaG9sZGVyLXppbmMtNjAwIG91dGxpbmUtbm9uZSB0cmFuc2l0aW9uLWNvbG9ycyBmb2N1czpib3JkZXItbGltZS82MFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD1cImNvbnRhY3Qtc3VibWl0LWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VuZGluZ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQtZnVsbCBiZy1saW1lIHB4LTYgcHktMy41IGZvbnQtbW9ubyB0ZXh0LXhzIGZvbnQtYm9sZCB1cHBlcmNhc2UgdHJhY2tpbmctWzAuMTVlbV0gdGV4dC1pbmsgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNjYWxlLVsxLjAzXSBkaXNhYmxlZDpvcGFjaXR5LTUwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7c2VuZGluZyA/IFwiU2VuZGluZ+KAplwiIDogXCJTZW5kIG1lc3NhZ2VcIn0gPFNlbmQgc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvUmV2ZWFsPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTI0IGZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTQgYm9yZGVyLXQgYm9yZGVyLXdoaXRlLzEwIHB0LThcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC1bMTBweF0gdXBwZXJjYXNlIHRyYWNraW5nLVswLjJlbV0gdGV4dC16aW5jLTYwMFwiPsKpIDIwMjYge1BST0ZJTEUubmFtZX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtWzEwcHhdIHVwcGVyY2FzZSB0cmFja2luZy1bMC4yZW1dIHRleHQtemluYy02MDBcIj5EZXNpZ25lZCAmIGJ1aWx0IHdpdGggcHJvZHVjdCB0aGlua2luZyDCtyBCZW5nYWx1cnUsIElOPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcbiJdLCJmaWxlIjoiL2FwcC9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9Gb290ZXIudHN4In0=