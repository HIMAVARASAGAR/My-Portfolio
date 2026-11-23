import { type CSSProperties, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export function RollLabel({ children }: { children: string }) {
  return (
    <span className="roll-label">
      <span className="roll-accessible">{children}</span>
      {[false, true].map((duplicate) => (
        <span
          className="roll-line"
          aria-hidden="true"
          key={String(duplicate)}
        >
          {Array.from(children).map((letter, index) => (
            <span
              className="roll-letter"
              key={index}
              style={{ "--letter-delay": `${index * 28}ms` } as CSSProperties}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function HandoffArrow({
  direction = "↗",
}: {
  direction?: "↗" | "↑" | "↓";
}) {
  return (
    <span
      className={`handoff-arrow ${direction === "↑" ? "arrow-up" : direction === "↓" ? "arrow-down" : ""}`}
      aria-hidden="true"
    >
      <span className="arrow-glyph">{direction}</span>
    </span>
  );
}

export function ElasticDivider() {
  const svg = useRef<SVGSVGElement>(null);
  useLayoutEffect(() => {
    const line = svg.current!;
    const path = line.querySelector("path")!;
    const parent = line.parentElement!;
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference) and (pointer: fine)",
      () => {
        const bend = { y: 0, x: 0.5 };
        const draw = () =>
          path.setAttribute(
            "d",
            `M0 24 Q${bend.x * 1000} ${24 + bend.y} 1000 24`,
          );
        const reset = () =>
          gsap.to(bend, {
            y: 0,
            x: 0.5,
            duration: 0.85,
            ease: "elastic.out(1,.35)",
            overwrite: true,
            onUpdate: draw,
          });
        const move = (e: PointerEvent) => {
          const rect = line.getBoundingClientRect();
          const distance = e.clientY - (rect.top + rect.height / 2);
          if (Math.abs(distance) > 40) {
            if (bend.y !== 0) reset();
            return;
          }
          gsap.to(bend, {
            x: Math.max(
              0.08,
              Math.min(0.92, (e.clientX - rect.left) / rect.width),
            ),
            y: Math.max(-18, Math.min(18, distance * 0.65)),
            duration: 0.18,
            overwrite: true,
            onUpdate: draw,
          });
        };
        const focus = () =>
          gsap.to(bend, {
            y: 12,
            x: 0.5,
            duration: 0.35,
            overwrite: true,
            onUpdate: draw,
          });
        parent.addEventListener("pointermove", move, { passive: true });
        parent.addEventListener("pointerleave", reset);
        parent.addEventListener("focusin", focus);
        parent.addEventListener("focusout", reset);
        return () => {
          gsap.killTweensOf(bend);
          parent.removeEventListener("pointermove", move);
          parent.removeEventListener("pointerleave", reset);
          parent.removeEventListener("focusin", focus);
          parent.removeEventListener("focusout", reset);
          path.setAttribute("d", "M0 24 Q500 24 1000 24");
        };
      },
    );
    return () => media.revert();
  }, []);
  return (
    <svg
      ref={svg}
      className="elastic-divider"
      viewBox="0 0 1000 48"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d="M0 24 Q500 24 1000 24" />
    </svg>
  );
}
