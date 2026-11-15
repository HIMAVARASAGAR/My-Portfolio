import { useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import type { Project } from "../data/projects";
gsap.registerPlugin(Flip);
export default function ProjectDialog({
  project,
  trigger,
  onClose,
}: {
  project: Project;
  trigger: HTMLElement;
  onClose: () => void;
}) {
  const panel = useRef<HTMLDivElement>(null),
    backdrop = useRef<HTMLDivElement>(null),
    closeButton = useRef<HTMLButtonElement>(null);
  const closing = useRef(false),
    closeAction = useRef<() => void>(() => {});
  useLayoutEffect(() => {
    const el = panel.current!,
      shade = backdrop.current!;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const oldOverflow = document.body.style.overflow;
    const previousSource = trigger.getAttribute("data-dialog-source");
    document.body.style.overflow = "hidden";
    closing.current = false;
    const title = el.querySelector<HTMLElement>("h2")!;
    const source = trigger.querySelector<HTMLElement>(".tile-title") ?? trigger;
    let ghost: HTMLElement | null = null;
    const moveTitle = (
      from: HTMLElement,
      to: HTMLElement,
      duration: number,
    ) => {
      ghost?.remove();
      const a = from.getBoundingClientRect(),
        b = to.getBoundingClientRect();
      const sa = getComputedStyle(from),
        sb = getComputedStyle(to);
      ghost = document.createElement("span");
      ghost.textContent = project.title;
      ghost.setAttribute("aria-hidden", "true");
      Object.assign(ghost.style, {
        position: "fixed",
        zIndex: "12",
        pointerEvents: "none",
        left: `${a.left}px`,
        top: `${a.top}px`,
        width: `${a.width}px`,
        fontFamily: sa.fontFamily,
        fontSize: sa.fontSize,
        fontWeight: sa.fontWeight,
        letterSpacing: sa.letterSpacing,
        lineHeight: sa.lineHeight,
        color: getComputedStyle(el).color,
      });
      el.parentElement!.appendChild(ghost);
      title.style.visibility = "hidden";
      gsap.to(ghost, {
        x: b.left - a.left,
        y: b.top - a.top,
        width: b.width,
        fontSize: sb.fontSize,
        lineHeight: sb.lineHeight,
        letterSpacing: sb.letterSpacing,
        duration,
        ease: "power3.inOut",
        onComplete: () => {
          ghost?.remove();
          ghost = null;
          title.style.visibility = "";
        },
      });
    };
    const ctx = gsap.context(() => {
      if (!reduce) {
        moveTitle(source, title, 0.65);
        const fit = Flip.fit(el, trigger, {
          scale: true,
          getVars: true,
        }) as gsap.TweenVars;
        gsap.from(el, {
          ...fit,
          duration: 0.65,
          ease: "power3.inOut",
          clearProps: "transform",
          onComplete: () => closeButton.current?.focus({ preventScroll: true }),
        });
        gsap.from(shade, { opacity: 0, duration: 0.4 });
        gsap.from(".project-details, .dialog-close, .dialog-meta", {
          opacity: 0,
          y: 16,
          delay: 0.38,
          duration: 0.35,
          stagger: 0.04,
          clearProps: "all",
        });
      } else closeButton.current?.focus({ preventScroll: true });
    }, el);
    // Keep the source's geometry for the return animation, but render only
    // the expanded card while the dialog owns it.
    trigger.setAttribute("data-dialog-source", "");
    closeAction.current = () => {
      if (closing.current) return;
      closing.current = true;
      const finish = () => {
        onClose();
        requestAnimationFrame(
          () => trigger.isConnected && trigger.focus({ preventScroll: true }),
        );
      };
      if (reduce || !trigger.isConnected) {
        finish();
        return;
      }
      gsap.killTweensOf(el);
      if (ghost) {
        gsap.killTweensOf(ghost);
        ghost.remove();
        ghost = null;
      }
      title.style.visibility = "";
      moveTitle(title, source, 0.5);
      gsap.to(shade, { opacity: 0, duration: 0.4 });
      gsap.to(
        el.querySelectorAll(".project-details, .dialog-meta, .dialog-close"),
        { opacity: 0, duration: 0.15 },
      );
      Flip.fit(el, trigger, {
        scale: true,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: finish,
      });
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeAction.current();
      }
      if (event.key !== "Tab") return;
      const controls = el.querySelectorAll<HTMLElement>("button, a[href]"),
        first = controls[0],
        last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      ctx.revert();
      if (ghost) {
        gsap.killTweensOf(ghost);
        ghost.remove();
      }
      gsap.killTweensOf(el);
      gsap.killTweensOf(shade);
      if (previousSource !== null) {
        trigger.setAttribute("data-dialog-source", previousSource);
      } else {
        trigger.removeAttribute("data-dialog-source");
      }
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", key);
    };
  }, [project, trigger, onClose]);
  return createPortal(
    <div className="dialog-layer">
      <div
        ref={backdrop}
        className="dialog-backdrop"
        onClick={() => closeAction.current()}
        aria-hidden="true"
      />
      <div
        ref={panel}
        className={`project-dialog tone-${project.tone}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <button
          ref={closeButton}
          className="dialog-close pill outlined"
          onClick={() => closeAction.current()}
          aria-label="Close project"
        >
          Close <span>×</span>
        </button>
        <div className="dialog-scroll">
          <div className="dialog-meta">
            <span>{project.category}</span>
            {project.year && <span>{project.year}</span>}
          </div>
          <h2 id="dialog-title">{project.title}</h2>
          <div className="project-details">
            <div className="project-story">
              <p className="project-overview">{project.overview}</p>
              {project.details.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {project.link && (
                <a
                  className="project-external"
                  href={project.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link.label}
                  <span>↗</span>
                </a>
              )}
            </div>
            <aside className="project-tools">
              <h3>Built with</h3>
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </aside>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
