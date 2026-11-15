import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, type Project } from "./data/projects";
import ProjectDialog from "./components/ProjectDialog";
import Capabilities from "./components/Capabilities";
import LineArt from "./components/LineArt";
import AmbientLines from "./components/AmbientLines";
import {
  ElasticDivider,
  HandoffArrow,
  RollLabel,
} from "./components/MicroMotion";
gsap.registerPlugin(ScrollTrigger);

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
  const go = (id: string) => {
    setMenu(false);
    requestAnimationFrame(() => {
      const behavior = matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth";
      // Contact is sticky beneath the page, so its visual position is not its destination.
      if (id === "contact") {
        window.scrollTo({
          top: document.documentElement.scrollHeight - innerHeight,
          behavior,
        });
      } else if (id === "about" && ScrollTrigger.getById("skills-about")) {
        window.scrollTo({
          top: ScrollTrigger.getById("skills-about")!.end,
          behavior,
        });
      } else if (id === "skills" && ScrollTrigger.getById("skills-about")) {
        const extra = Math.max(
          0,
          document.getElementById("skills")!.offsetHeight - innerHeight,
        );
        window.scrollTo({
          top: ScrollTrigger.getById("skills-about")!.start - extra,
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
  useLayoutEffect(() => {
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        gsap.from(".hero-name > span", {
          yPercent: 35,
          opacity: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          clearProps: "all",
        });
        gsap.from(".hero-bottom", {
          y: 22,
          opacity: 0,
          delay: 0.35,
          duration: 0.7,
          clearProps: "all",
        });
        gsap.utils
          .toArray<SVGPathElement>(".thread-line path")
          .forEach((path) => {
            gsap.fromTo(
              path,
              { strokeDasharray: 1, strokeDashoffset: 1 },
              {
                strokeDashoffset: 0,
                duration: 1.4,
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: path,
                  start: "top 90%",
                  toggleActions: "play none none reverse",
                },
              },
            );
          });
        gsap.utils.toArray<HTMLElement>(".bento-tile").forEach((tile, i) =>
          gsap.from(tile, {
            y: 45,
            opacity: 0,
            duration: 0.65,
            delay: (i % 3) * 0.055,
            ease: "power3.out",
            clearProps: "all",
            scrollTrigger: { trigger: tile, start: "top 96%", once: true },
          }),
        );
        gsap.from(".about-fact", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.16,
          clearProps: "all",
          scrollTrigger: {
            trigger: ".about-facts",
            start: "top 88%",
            once: true,
          },
        });
      },
      root,
    );
    media.add(
      "(min-width: 1024px) and (min-height: 740px) and (prefers-reduced-motion: no-preference)",
      () => {
        gsap.to(".hero-inner", {
          y: -75,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: "#selected",
            start: "top bottom",
            end: "top 15%",
            scrub: true,
          },
        });
        ScrollTrigger.create({
          trigger: ".projects-section",
          start: "bottom bottom",
          endTrigger: "#skills",
          end: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
        });
        gsap.to(".bento-grid", {
          scale: 0.97,
          opacity: 0.32,
          transformOrigin: "50% 100%",
          ease: "none",
          scrollTrigger: {
            trigger: "#skills",
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
        const stage = document.querySelector<HTMLElement>(
          ".skills-about-stage",
        )!;
        const skills = document.getElementById("skills")!;
        const about = document.getElementById("about")!;
        const layout = () => {
          const overflow = Math.max(0, skills.offsetHeight - innerHeight);
          stage.style.height = `${overflow + Math.max(innerHeight, about.offsetHeight)}px`;
          about.style.top = `${overflow}px`;
        };
        gsap.set(about, {
          position: "absolute",
          width: "100%",
          xPercent: 105,
          visibility: "hidden",
        });
        layout();
        ScrollTrigger.addEventListener("refreshInit", layout);
        const handoff = gsap.timeline({
          scrollTrigger: {
            id: "skills-about",
            trigger: stage,
            start: () =>
              `top top-=${Math.max(0, skills.offsetHeight - innerHeight)}`,
            end: () => `+=${innerHeight * 2.3}`,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            scrub: 0.35,
            onUpdate: (self) => {
              skills.inert = self.progress > 0.65;
            },
          },
        });
        // The first 40% is a genuine reading hold with no visual motion.
        handoff
          .to({}, { duration: 0.95 })
          .to(
            ".skill-row",
            {
              xPercent: -110,
              stagger: 0.075,
              duration: 0.8,
              ease: "power2.inOut",
            },
            0.95,
          )
          .to(
            ".skills-heading",
            {
              xPercent: -60,
              autoAlpha: 0,
              duration: 0.75,
              ease: "power2.inOut",
            },
            1.05,
          )
          .set(about, { visibility: "visible" }, 1.15)
          .to(
            about,
            { xPercent: 0, duration: 1.05, ease: "power3.inOut" },
            1.15,
          )
          .fromTo(
            ".about-surface",
            { borderRadius: "80px 0 0 80px" },
            { borderRadius: "0px", duration: 0.65, ease: "power2.out" },
            1.55,
          )
          .to({}, { duration: 0.25 });
        // The footer stays beneath About; scrolling uncovers its actual content.
        return () => {
          ScrollTrigger.removeEventListener("refreshInit", layout);
          stage.style.height = "";
          about.style.top = "";
          skills.inert = false;
        };
      },
      root,
    );
    let live = true;
    const resize = new ResizeObserver(() => ScrollTrigger.refresh());
    const ledger = document.querySelector(".skill-ledger");
    if (ledger) resize.observe(ledger);
    document.fonts.ready.then(() => {
      if (live) ScrollTrigger.refresh();
    });
    return () => {
      live = false;
      resize.disconnect();
      media.revert();
    };
  }, []);
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
      <div ref={root} className="site-content">
        <section className="hero" id="top">
          <AmbientLines />
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
            <ElasticDivider />
          </header>
          <div className="hero-inner">
            <h1 className="hero-name">
              <span>Himavara</span>
              <span className="hero-surname">
                Sagar<span className="name-period">.</span>
                <svg
                  className="thread-line name-underline"
                  viewBox="0 0 500 50"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    pathLength="1"
                    d="M8 35C100 12 280 12 488 22M75 44C185 24 355 30 415 36"
                  />
                </svg>
              </span>
            </h1>
            <div className="hero-bottom">
              <p>
                Electronics &amp; Communication Engineering.
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
              <AmbientLines variant="bright" />
              <div className="section-heading">
                <h2 id="projects-title">
                  Projects<span>.</span>
                </h2>
                <span className="project-count">11 projects</span>
              </div>
              <div className="bento-grid">
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    className={`bento-tile size-${project.size} tone-${project.tone}`}
                    onClick={(e) => open(project, e.currentTarget)}
                    aria-haspopup="dialog"
                  >
                    <LineArt kind={i} className="tile-line-art" />
                    <span className="tile-title">{project.title}</span>
                    <span className="tile-arrow" aria-hidden="true">
                      <HandoffArrow />
                    </span>
                  </button>
                ))}
              </div>
            </section>
            <div className="project-reading-hold" aria-hidden="true" />
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
                    <p>
                      I build software
                      <br />
                      and digital hardware.
                    </p>
                    <p>
                      My background is in Electronics &amp; Communication
                      Engineering at NIT Calicut.
                    </p>
                  </div>
                </div>
                <div className="about-facts">
                  <article className="about-fact education">
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
                  <article className="about-fact leadership">
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
          <AmbientLines variant="bright" />
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
              <ElasticDivider />
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
                <RollLabel>Back to top</RollLabel>{" "}
                <HandoffArrow direction="↑" />
              </button>
              <span className="copyright">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </footer>
      </div>
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
