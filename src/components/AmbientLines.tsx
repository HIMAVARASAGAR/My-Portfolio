import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** A vector field behind the content: scroll turns it; proximity gently bends its position. */
export default function AmbientLines({
  variant = "quiet",
}: {
  variant?: "quiet" | "bright";
}) {
  const host = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const field = host.current!;
    const section = field.parentElement!;
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const orbit = field.querySelector(".ambient-orbit");
        const drift = field.querySelector(".ambient-drift");
        gsap.fromTo(
          orbit,
          { rotation: -12 },
          {
            rotation: 20,
            transformOrigin: "50% 50%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          },
        );
        const x = gsap.quickTo(drift, "x", {
          duration: 1.4,
          ease: "power3.out",
        });
        const y = gsap.quickTo(drift, "y", {
          duration: 1.4,
          ease: "power3.out",
        });
        const move = (event: PointerEvent) => {
          if (event.pointerType !== "mouse") return;
          const rect = section.getBoundingClientRect();
          x(((event.clientX - rect.left) / rect.width - 0.5) * 42);
          y(((event.clientY - rect.top) / rect.height - 0.5) * 30);
        };
        const reset = () => {
          x(0);
          y(0);
        };
        section.addEventListener("pointermove", move, { passive: true });
        section.addEventListener("pointerleave", reset);
        const observer = new IntersectionObserver(([entry]) =>
          field.classList.toggle("is-visible", entry.isIntersecting),
        );
        observer.observe(section);
        return () => {
          section.removeEventListener("pointermove", move);
          section.removeEventListener("pointerleave", reset);
          observer.disconnect();
        };
      },
      field,
    );
    return () => media.revert();
  }, []);
  return (
    <div
      ref={host}
      className={`ambient-field ambient-${variant}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 800 800" fill="none">
        <g className="ambient-drift">
          <g className="ambient-orbit">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <ellipse
                key={i}
                cx="400"
                cy="400"
                rx={180 + i * 31}
                ry={110 + i * 42}
                transform={`rotate(${i * 13 - 30} 400 400)`}
              />
            ))}
            <ellipse
              className="ambient-trace"
              cx="400"
              cy="400"
              rx="304"
              ry="278"
              transform="rotate(22 400 400)"
              pathLength="100"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
