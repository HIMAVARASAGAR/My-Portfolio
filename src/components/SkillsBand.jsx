// src/components/SkillsBand.jsx
import { motion } from "framer-motion";

const primary = [
  "React",
  "Vite",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Framer Motion",
  "Lenis Smooth Scroll",
  "Zustand State Management",
  "Responsive Layouts",
  "Scroll Interactions",
  "Micro-Animations",
  "Three.js",
  "GSAP",
  "Custom Cursor Systems",
  "Interactive UI Design",
  "3D UI Concepts",
  "Creative Coding",
  "Smooth Experience Design",
];

const secondary = [
  "Python",
  "LLMs & Agents",
  "Google ADK (Agents Development Kit)",
  "Gemini Models (2.5 / Flash / Flash Lite)",
  "Kaggle Prototyping",
  "Universal Cognitive Engine v1",
  "MATLAB",
  "Simulink",
  "RF & Antenna Modeling",
  "THz Graphene-Based MIMO (ECE Research)",
  "Circuit & Embedded Systems (8051, ARM basics)",
  "Git & GitHub",
  "Linux Tinkering",
  "Shell Scripting",
  "VS Code",
  "NIT Calicut · Electronics & Communication Engineering",
];

function loop(list) {
  // duplicate so there is no gap in the loop
  return [...list, ...list];
}

export default function SkillsBand() {
  const row1 = loop(primary);
  const row2 = loop(secondary);

  return (
    <section className="w-full pt-6">
      {/* label anchored to content width */}
      <div className="flex items-center justify-between px-1 pb-2">
        <span className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
          Skills • Focus
        </span>
        <span className="hidden sm:inline text-[10px] text-slate-400">
          Ambient · always moving
        </span>
      </div>

      {/* full-viewport width banner, feels like part of page */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        {/* Top row – frontend / UI */}
        <div className="relative h-8 sm:h-10 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 flex items-center gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.025 }}
          >
            {row1.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom row – AI / ECE / tools */}
        <div className="relative h-7 sm:h-8 mt-1 overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 flex items-center gap-10 whitespace-nowrap opacity-75"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ scale: 1.018 }}
          >
            {row2.map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="text-xs sm:text-sm md:text-[13px] text-slate-500"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}