import { useCallback, useEffect, useRef, useState } from "react";
import { projects, type Project } from "./data/projects";
import ProjectDialog from "./components/ProjectDialog";
import Capabilities from "./components/Capabilities";
import LineArt from "./components/LineArt";
import NameMark from "./components/NameMark";
import TypeSurface from "./components/TypeSurface";
import ExperiencePointer from "./components/ExperiencePointer";
import "./experience.css";
import ProjectVisual from "./components/ProjectVisual";
import useSmoothScroll from "./hooks/useSmoothScroll";
import usePageChoreography from "./hooks/usePageChoreography";
import { RollLabel, HandoffArrow } from "./components/MicroMotion";

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);
  const [selection, setSelection] = useState<{
    project: Project;
    trigger: HTMLElement;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<ReturnType<typeof setTimeout>>();
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const closeProject = useCallback(() => setSelection(null), []);
  const smoothScroll = useSmoothScroll(Boolean(selection || menu));
  usePageChoreography(root);
  const go = (id: string) => {
    setMenu(false);
    requestAnimationFrame(() => {
      if (smoothScroll.current) {
        smoothScroll.current.start();
        smoothScroll.current.scrollTo(id === "contact" ? "bottom" : `#${id}`, { duration: 1.15 });
        return;
      }
      const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth";
      // Contact is sticky beneath the page, so its visual position is not its destination.
      if (id === "contact") {
        window.scrollTo({
          top: document.documentElement.scrollHeight - innerHeight,
          behavior,
        });
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior });
      }
    });
  };
  useEffect(() => () => clearTimeout(copyTimer.current), []);
  useEffect(() => {
    if (root.current) root.current.inert = Boolean(selection || menu);
  }, [selection, menu]);
  useEffect(() => {
    if (!menu) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuPanel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
      if (e.key !== "Tab") return;
      const buttons =
        menuPanel.current?.querySelectorAll<HTMLButtonElement>("button");
      if (!buttons?.length) return;
      const first = buttons[0],
        last = buttons[buttons.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
      menuButton.current?.focus();
    };
  }, [menu]);
  const open = (project: Project, trigger: HTMLElement) =>
    setSelection({ project, trigger });
  const copy = async () => {
    try {
      await navigator.clipboard.writeText("himavarasagar6675@gmail.com");
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:himavarasagar6675@gmail.com";
    }
  };
  return (
    <>
      <div ref={root} className="site-content immersive-site butter-experience">
        <section className="hero" id="top">
          <header className="site-nav">
            <a href="#top" className="brand" aria-label="Himavara Sagar home">
              <img src="/favicon.svg" alt="HS" width="44" height="44" />
            </a>
            <nav aria-label="Main navigation">
              {["Projects", "Skills", "About"].map((label, i) => (
                <button
                  className="nav-link"
                  key={label}
                  onClick={() => go(["selected", "skills", "about"][i])}
                >
                  <RollLabel>{label}</RollLabel>
                </button>
              ))}
              <button className="pill dark" onClick={() => go("contact")}>
                <RollLabel>Contact</RollLabel> <HandoffArrow />
              </button>
            </nav>
            <button
              ref={menuButton}
              className="menu-toggle"
              aria-expanded={menu}
              aria-label="Open navigation"
              onClick={() => setMenu(true)}
            >
              <span />
              <span />
            </button>
          </header>
          <div className="hero-inner">
            <div className="masthead-surface"><NameMark /><TypeSurface /></div>
            <div className="hero-bottom">
              <p>
                Software &amp; digital hardware.
                <br />
                NIT Calicut.
              </p>
              <button className="pill outlined" onClick={() => go("selected")}>
                <RollLabel>Projects</RollLabel> <HandoffArrow direction="↓" />
              </button>
            </div>
          </div>
        </section>
        <main>
          <div className="projects-wrap">
            <section
              className="projects-section"
              id="selected"
              aria-labelledby="projects-title"
            >
              <div className="section-heading">
                <h2 id="projects-title">
                  Projects<span>.</span>
                </h2>
                <span className="project-count">11 projects</span>
              </div>
              <div className="bento-grid">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    className={`bento-tile size-${project.size} tone-${project.tone}`}
                    onClick={(e) => open(project, e.currentTarget)}
                    aria-haspopup="dialog"
                    aria-label={project.title}
                  >
                    <span className="tile-index" aria-hidden="true">{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
                    <span className="tile-art" aria-hidden="true"><ProjectVisual project={project} /></span>
                    <span className="tile-marquee" aria-hidden="true"><span>{project.title} <i>↗</i> {project.title} <i>↗</i> </span><span>{project.title} <i>↗</i> {project.title} <i>↗</i> </span></span>
                    <span className="tile-title">{project.title}</span><span className="tile-category" aria-hidden="true">{project.category}</span>
                    <span className="tile-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </button>
                ))}
              </div>
            </section>

          </div>
          <div className="skills-about-stage">
            <Capabilities onOpen={open} />
            <section
              id="about"
              className="about-section"
              aria-labelledby="about-title"
            >
              <div className="about-surface">
                <svg
                  className="thread-line about-thread"
                  viewBox="0 0 1000 160"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    pathLength="1"
                    d="M5 115C190 115 185 25 330 40S470 155 590 110 670 10 750 35 760 135 690 115 755 5 995 45"
                  />
                </svg>
                <div className="about-intro">
                  <h2 id="about-title">
                    About<span>.</span>
                  </h2>
                  <div className="about-copy">
                    <p className="about-statement">{"I build software and digital hardware.".split(" ").map((word, i) => <span key={i}>{word} </span>)}</p>
                    <p>
                      My background is in Electronics &amp; Communication
                      Engineering at NIT Calicut.
                    </p>
                  </div>
                </div>
                <div className="about-facts">
                  <article className="about-fact education" data-scroll-highlight="timeline">
                    <LineArt kind={2} />
                    <span className="fact-date">2021–2025</span>
                    <h3>
                      Electronics &amp;
                      <br />
                      Communication
                    </h3>
                    <div className="fact-bottom">
                      <span>B.Tech</span>
                      <span>NIT Calicut</span>
                    </div>
                  </article>
                  <article className="about-fact leadership" data-scroll-highlight="timeline">
                    <LineArt kind={3} />
                    <span className="fact-date">2023–2024</span>
                    <h3>
                      Workshop
                      <br />
                      Committee
                    </h3>
                    <p>Senior Executive, Workshop Committee</p>
                    <div className="fact-bottom">
                      <span>Tathva</span>
                      <span>NIT Calicut</span>
                    </div>
                  </article>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer id="contact" className="contact-section">
          <div className="contact-content">
            <div className="contact-heading">
              <h2>
                Get in <em>touch.</em>
              </h2>
              <a
                className="contact-post"
                href="mailto:himavarasagar6675@gmail.com"
                aria-label="Write an email"
              >
                <svg viewBox="0 0 240 180" fill="none" aria-hidden="true">
                  <path
                    className="envelope-back"
                    d="M25 55 120 5 215 55V155H25Z"
                  />
                  <path
                    className="envelope-letter"
                    d="M50 120V30H190V120M75 55H165M75 75H145"
                  />
                  <path
                    className="envelope-front"
                    d="M25 55 120 115 215 55V155H25ZM25 155 88 96M215 155 152 96"
                  />
                </svg>
                <span>Email me ↗</span>
              </a>
            </div>
            <svg
              className="thread-line contact-thread"
              viewBox="0 0 1000 100"
              fill="none"
              aria-hidden="true"
            >
              <path
                pathLength="1"
                d="M5 55C175 55 310 10 440 50S600 95 660 45 570 5 615 55 840 65 990 35M970 20 990 35 973 55"
              />
            </svg>
            <div className="email-row">
              <a href="mailto:himavarasagar6675@gmail.com">
                himavarasagar6675@gmail.com
              </a>
              <button className="pill outlined copy-button" onClick={copy}>
                <span aria-live="polite">
                  {copied ? "Copied ✓" : "Copy email"}
                </span>
              </button>
            </div>
            <div className="footer-links">
              <a
                href="https://github.com/HIMAVARASAGAR"
                target="_blank"
                rel="noreferrer"
              >
                <RollLabel>GitHub</RollLabel> <HandoffArrow />
              </a>
              <a
                href="https://linkedin.com/in/kakihimavarasagar"
                target="_blank"
                rel="noreferrer"
              >
                <RollLabel>LinkedIn</RollLabel> <HandoffArrow />
              </a>
              <button onClick={() => go("top")}>
                <RollLabel>Back to top</RollLabel> <HandoffArrow direction="↑" />
              </button>
              <span className="copyright">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </div>
      <ExperiencePointer />
      {menu && (
        <div
          ref={menuPanel}
          className="navigation-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <button
            className="pill outlined menu-close"
            onClick={() => setMenu(false)}
          >
            Close ×
          </button>
          <nav>
            {["Home", "Projects", "Skills", "About", "Contact"].map(
              (label, i) => (
                <button
                  key={label}
                  onClick={() =>
                    go(["top", "selected", "skills", "about", "contact"][i])
                  }
                >
                  {label}
                  <span>↗</span>
                </button>
              ),
            )}
          </nav>
        </div>
      )}
      {selection && (
        <ProjectDialog
          project={selection.project}
          trigger={selection.trigger}
          onClose={closeProject}
        />
      )}
    </>
  );
}
