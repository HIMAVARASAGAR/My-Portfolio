import { useEffect, useState } from "react";
const chapters = [
  ["top", "Home"],
  ["selected", "Projects"],
  ["skills", "Skills"],
  ["about", "About"],
  ["contact", "Contact"],
];
export default function SectionIndex({ onGo }: { onGo: (id: string) => void }) {
  const [active, setActive] = useState("top");
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const center = innerHeight * 0.45;
      const current = chapters.find(([id]) => {
        const el = document.getElementById(id);
        if (!el || el.inert || getComputedStyle(el).visibility === "hidden")
          return false;
        const box = el.getBoundingClientRect();
        return (
          box.top <= center &&
          box.bottom > center &&
          box.left < innerWidth * 0.45
        );
      });
      if (current) setActive(current[0]);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    update();
    return () => {
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
  return (
    <nav className="section-index" aria-label="Page sections">
      {chapters.map(([id, label]) => (
        <button
          key={id}
          onClick={() => onGo(id)}
          aria-label={`Go to ${label}`}
          aria-current={active === id ? "location" : undefined}
        >
          <span className="index-label" aria-hidden="true">
            {label}
          </span>
          <span className="index-dot" aria-hidden="true" />
        </button>
      ))}
    </nav>
  );
}
