import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Award, Download, ExternalLink, Github, Linkedin, Mail, Menu, Phone, Send, Trophy, X } from "lucide-react";
import { CASE_STUDIES, CERTIFICATIONS, INTERESTS, LEADERSHIP, PROFILE, SKILL_GROUPS, TEARDOWNS, TECH_PROJECTS } from "./data/portfolio";

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function useScrollEffects(setActiveSection: (id: string) => void) {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    const navObserver = new IntersectionObserver((entries) => {
      const current = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActiveSection((current.target as HTMLElement).id);
    }, { rootMargin: "-34% 0px -54% 0px", threshold: [0.05, 0.2, 0.5] });

    document.querySelectorAll<HTMLElement>("main > section:not(.hero)").forEach((element) => revealObserver.observe(element));
    document.querySelectorAll<HTMLElement>("section[id]").forEach((element) => navObserver.observe(element));
    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, [setActiveSection]);
}

function Nav({ open, setOpen }: { open: boolean; setOpen: (value: boolean) => void }) {
  const items = [["manifesto", "01 / Approach"], ["work", "02 / Work"], ["skills", "03 / Toolkit"], ["credentials", "04 / Proof"], ["contact", "05 / Contact"]];
  const [activeSection, setActiveSection] = useState("home");
  useScrollEffects(setActiveSection);
  return <header className="topbar">
    <button className="mark" data-testid="button-home" onClick={() => scrollTo("home")}><span className="mark-box">AR</span><span>Akhil Reddy / PM portfolio</span></button>
    <nav className={`nav ${open ? "open" : ""}`} aria-label="Primary navigation">{items.map(([id, label]) => <a className={activeSection === id ? "active" : ""} key={id} href={`#${id}`} data-testid={`link-${id}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>
    <button className="menu-button" data-testid="button-menu" onClick={() => setOpen(!open)}><Menu size={18} /> Menu</button>
  </header>;
}

function Hero() {
  const [profileOpen, setProfileOpen] = useState(false);
  return <><section id="home" className="hero">
    <div className="container hero-grid">
      <div className="hero-intro">
        <div className="eyebrow"><i className="status-dot" /> {PROFILE.availability}</div>
        <h1>Products<br />begin with<br /><span className="hero-title-blue">problems<span className="hero-title-outline">.</span></span></h1>
        <p className="hero-copy">I'm <strong>{PROFILE.shortName}</strong> — an aspiring product manager who finds the user problem first, then earns the right to build. <span>{PROFILE.tagline}</span></p>
        <div className="actions">
          <button className="button primary" data-testid="button-view-work" onClick={() => scrollTo("work")}>View case studies <ArrowDown size={14} /></button>
          <a className="button" data-testid="link-github-hero" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={14} /> GitHub</a>
          <a className="button" data-testid="link-linkedin-hero" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={14} /> LinkedIn</a>
        </div>
      </div>
      <aside
        className={`hero-card hero-drop ${profileOpen ? "is-expanded" : ""}`}
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
          e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
        }}
        data-testid="profile-card"
      >
        <div className="card-top"><span><i className="card-live-dot" /> Candidate profile</span><span>2026 / 01</span></div>
        <button className="card-identity" onClick={() => setProfileOpen(!profileOpen)} aria-expanded={profileOpen} data-testid="button-toggle-profile">
          <span>
            <h2>{PROFILE.name}</h2><div className="role">{PROFILE.role}</div>
          </span>
          <span className="card-toggle" aria-hidden="true">{profileOpen ? "Close" : "Open"} <ArrowUpRight size={13} /></span>
        </button>
        <div className="card-data">
          {["B.Tech — AI & Data Science", "Amrita Vishwa Vidyapeetham", PROFILE.location, "Discovery → Strategy → Delivery"].map((value, i) => <div className="meta-row" key={value}><span>{["Education", "University", "Base", "Focus"][i]}</span><span>{value}</span></div>)}
        </div>
        <div className="card-band"><span>4 case studies</span><span>1 pivot · 2 builds · 1 strategy</span></div>
        <div className="card-reveal" aria-hidden={!profileOpen}>
          <p>Available for the next product problem worth unpacking.</p>
          <div className="card-reveal-links">
            <a href={`mailto:${PROFILE.email}`} onClick={(e) => e.stopPropagation()}><Mail size={13} /> Email Akhil</a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} onClick={(e) => e.stopPropagation()}><Phone size={13} /> Call</a>
          </div>
        </div>
      </aside>
    </div>
    <button className="scroll-note" data-testid="button-scroll-manifesto" onClick={() => scrollTo("manifesto")}>Scroll to explore</button>
  </section><MarqueeBand /></>;
}

function Label({ index, label }: { index: string; label: string }) { return <div className="section-label">{index} / {label}</div>; }

function MarqueeBand() {
  const content = "DISCOVER  •  DECIDE  •  DELIVER  •  PRODUCT THINKING IN MOTION  •  ";
  return <div className="ticker-band" aria-label="Product thinking in motion">
    <div className="ticker-track">
      <span>{content}</span><span aria-hidden="true">{content}</span>
    </div>
  </div>;
}

function Manifesto() {
  const chapters = [
    ["01", "Discover", "Start with the user's problem, never the solution. Twenty honest conversations beat two hundred assumptions — every strong product decision I've made began with listening."],
    ["02", "Decide", "Strategy is choosing what not to build. I scope MVPs with MoSCoW, rank trade-offs explicitly, and let evidence — not attachment to an idea — call the pivot."],
    ["03", "Deliver", "Ship the smallest thing that tests the hypothesis, define the North Star before launch, and let outcomes teach the next iteration. Trust is the metric that compounds."]
  ];
  return <section id="manifesto" className="section container"><Label index="§ 01" label="Product philosophy" /><div className="section-heading"><h2>How I think about <span className="outline">building products</span></h2></div><div className="manifesto-grid">{chapters.map(([n, title, body]) => <article className="manifesto-card" key={n} data-testid={`manifesto-chapter-${n}`}><span className="index">{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>;
}

function CaseCard({ item, onOpen }: { item: typeof CASE_STUDIES[number]; onOpen: () => void }) {
  return <button className="case-card" data-testid={`button-case-${item.id}`} onClick={onOpen} onMouseMove={(e) => { const rect = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`); e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`); }}>
    <span className="case-number">{item.index}</span><span><h3>{item.title} <small className="year">{item.year}</small></h3><p className="case-tagline">{item.tagline}</p><span className="chips"><span className="chip highlight">{item.category}</span>{item.highlights.slice(0, 2).map((h) => <span className="chip" key={h}>{h}</span>)}</span></span><span className="case-arrow"><ArrowUpRight size={19} /></span>
  </button>;
}

function Work({ onOpen }: { onOpen: (item: typeof CASE_STUDIES[number]) => void }) {
  return <section id="work" className="section container"><Label index="§ 02" label="Selected work" /><div className="section-heading"><h2>Case <span className="outline">studies</span></h2><p className="section-intro">Problem → research → decision → MVP → metrics. Each study shows the full product-thinking arc, not just the output.</p></div><div className="work-list">{CASE_STUDIES.map((item) => <CaseCard key={item.id} item={item} onOpen={() => onOpen(item)} />)}</div></section>;
}

function Teardowns() {
  return <section className="section container"><Label index="§ 03" label="Product teardowns" /><div className="section-heading"><h2>What I <span className="outline">notice</span></h2><p className="section-intro">A few product observations that shape how I look at retention, AI interaction design and trust.</p></div><div className="teardown-grid">{TEARDOWNS.map((item) => <article className="teardown-card" key={item.title}><h3>{item.title}</h3><div className="teardown-focus">{item.focus}</div><p>{item.insight}</p></article>)}</div></section>;
}

function Skills() {
  return <section id="skills" className="section"><div className="container"><Label index="§ 04" label="Toolkit" /><div className="section-heading"><h2>Skills <span className="outline">matrix</span></h2></div><div className="skills-layout"><div><p className="skills-intro">A product toolkit built at the intersection of customer empathy, structured decision-making and enough engineering fluency to work close to the build.</p><div className="interest-list">{INTERESTS.map((interest) => <span className="interest" key={interest}>{interest}</span>)}</div></div><div className="skill-grid">{SKILL_GROUPS.map((group, i) => <article className="skill-card" key={group.title} data-testid={`skill-group-${i}`}><h3>{group.title}</h3><span className="project-lang">0{i + 1}</span><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></div></div></section>;
}

function Credentials() {
  return <section id="credentials" className="section container"><Label index="§ 05" label="Proof & leadership" /><div className="proof-grid"><div><h2 className="proof-title">Certifi<span>cations</span></h2>{CERTIFICATIONS.map((cert, i) => <article className="credential" key={cert.title} data-testid={`cert-card-${i}`}><div className="credential-copy"><h3><Award size={16} className="credential-icon" /> {cert.title}</h3><p>{cert.issuer} · {cert.date}<br />ID: {cert.id}</p></div>{cert.href ? <a className="button" href={cert.href} target="_blank" rel="noreferrer" data-testid={`link-cert-${i}`}>View <ExternalLink size={12} /></a> : <span className="credential-icon">Verified</span>}</article>)}<img className="proof-image" src="/assets/machine-learning-certificate.jpeg" alt="Machine Learning Assessment certificate for Akhil Reddy" data-testid="img-certificate" /></div><div><h2 className="proof-title">Leader<span>ship</span></h2>{LEADERSHIP.map((item, i) => <article className="leadership" key={item.title} data-testid={`leadership-card-${i}`}><div><h3><Trophy size={16} className="credential-icon" /> {item.title}</h3><p>{item.body}</p></div></article>)}<h2 className="proof-title" style={{ marginTop: 52 }}>Builds <span>in public</span></h2><div className="project-list">{TECH_PROJECTS.map((project) => <a className="project-link" key={project.title} href={project.href} target="_blank" rel="noreferrer" data-testid={`link-project-${project.title}`}><span>{project.title}</span><span className="project-lang">{project.lang} ↗</span></a>)}</div></div></div></section>;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" }); const [status, setStatus] = useState("");
  const submit = (event: React.FormEvent) => { event.preventDefault(); const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`); const body = encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`); window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`; setStatus("Opening your email client — thank you."); };
  return <footer id="contact" className="section contact"><div className="container"><Label index="§ 06" label="Contact" /><div className="contact-layout"><div><h2>Let's build<br />something<br /><span>people love.</span></h2><p className="contact-copy">Hiring for an APM / PM role? Have a product problem worth unpacking? I would love to talk through the user, the trade-offs and what we could learn by shipping.</p><div className="contact-links"><a className="contact-link" href={`mailto:${PROFILE.email}`} data-testid="link-email"><Mail size={15} /> {PROFILE.email}</a><a className="contact-link" href={`tel:${PROFILE.phone.replace(/\\s/g, "")}`} data-testid="link-phone"><Phone size={15} /> {PROFILE.phone}</a></div><div className="actions"><a className="button primary" href="/assets/akhil-resume.jpg" download data-testid="link-download-resume"><Download size={14} /> Download resume</a><a className="button" href={PROFILE.linkedin} target="_blank" rel="noreferrer" data-testid="link-linkedin-footer"><Linkedin size={14} /> LinkedIn</a></div></div><form className="contact-form" onSubmit={submit} data-testid="contact-form"><h3>Send a message</h3><p>Tell me what you're building.</p><div className="form-fields"><input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} data-testid="input-contact-name" /><input required type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} data-testid="input-contact-email" /><textarea required placeholder="What are you building?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} data-testid="input-contact-message" /><button className="button primary" type="submit" data-testid="button-contact-submit">Send message <Send size={14} /></button></div>{status && <div className="form-status" data-testid="status-contact">{status}</div>}</form></div><div className="footer-line"><span>© 2026 {PROFILE.name}</span><span>Designed & built with product thinking · {PROFILE.location}</span></div></div></footer>;
}

function CaseModal({ item, close }: { item: typeof CASE_STUDIES[number]; close: () => void }) {
  return <div className="modal-backdrop" role="presentation" onClick={close}><article className="modal" role="dialog" aria-modal="true" aria-label={item.title} onClick={(e) => e.stopPropagation()}><div className="modal-top"><div><Label index={`§ ${item.index}`} label={item.category} /><h2>{item.title}</h2><p className="modal-tagline">{item.summary}</p>{item.links[0] && <a className="button primary" href={item.links[0].href.startsWith("http") ? item.links[0].href : item.links[0].href} target="_blank" rel="noreferrer" style={{ marginTop: 22 }}>{item.links[0].label} <ExternalLink size={13} /></a>}</div><button className="close" onClick={close} data-testid="button-close-case"><X size={17} /></button></div><div className="modal-grid">{item.sections.map((section) => <div className="modal-section" key={section.key}><h3>{section.label}</h3>{section.body && <p>{section.body}</p>}{section.bullets && <ul>{section.bullets.slice(0, 4).map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}</div>)}</div></article></div>;
}

export default function App() {
  const [navOpen, setNavOpen] = useState(false); const [selected, setSelected] = useState<typeof CASE_STUDIES[number] | null>(null);
  useEffect(() => { document.body.style.overflow = selected ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [selected]);
  return <div className="site-shell"><Nav open={navOpen} setOpen={setNavOpen} /><main><Hero /><Manifesto /><Work onOpen={setSelected} /><Teardowns /><Skills /><Credentials /><Contact /></main>{selected && <CaseModal item={selected} close={() => setSelected(null)} />}</div>;
}