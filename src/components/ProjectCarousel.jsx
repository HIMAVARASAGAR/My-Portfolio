import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Universal Cognitive Engine v1",
    tagline: "Multi-agent, multi-tool AI assistant built for Kaggle.",
    description:
      "A functional prototype of a Universal Cognitive Engine: a multi-agent system using Google Agent Development Kit, Gemini models, and custom tools to solve tasks end-to-end inside a Kaggle environment.",
    tech: [
      "Python",
      "Google ADK",
      "Gemini",
      "LLM Agents",
      "Kaggle Notebooks",
    ],
    links: [
      {
        label: "Capstone writeup",
        href: "https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/universal-cognitive-engine#3357549",
      },
      {
        label: "Notebook",
        href: "https://www.kaggle.com/code/himavarasagar/universal-cognitive-engine-v1",
      },
    ],
  },
  {
    title: "Ring THz Graphene-based MIMO Antenna",
    tagline: "Research-focused RF design & modeling.",
    description:
      "Simulation and modeling of a ring-shaped THz graphene-based MIMO antenna, including parametric sweeps and a linear regression model to estimate chemical potential for resonance tuning.",
    tech: ["MATLAB", "RF Simulation", "Regression Modeling", "ECE / Antennas"],
    links: [],
  },
  {
    title: "Portfolio Playground",
    tagline: "This site · app-like, bright, playful.",
    description:
      "A portfolio that behaves more like an app than a static landing page – smooth scrolling, ambient motion, section-based navigation, and a focus on micro-interactions instead of heavy 3D.",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "Zustand",
    ],
    links: [],
  },
];

export default function ProjectCarousel() {
  const [index, setIndex] = useState(0);
  const current = PROJECTS[index];

  const go = (dir) => {
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return PROJECTS.length - 1;
      if (next >= PROJECTS.length) return 0;
      return next;
    });
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2 text-[11px] text-slate-500">
          <span>{index + 1} / {PROJECTS.length}</span>
          <span className="hidden sm:inline">Focused view · one at a time</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm text-slate-600 hover:text-slate-900 hover:shadow-md transition"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => go(1)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/80 shadow-sm text-slate-600 hover:text-slate-900 hover:shadow-md transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="relative h-[230px] sm:h-[210px] md:h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-0 rounded-3xl bg-white/60 backdrop-blur-sm shadow-lg shadow-slate-200/70 px-5 py-5 md:px-7 md:py-6 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                {current.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600">
                {current.tagline}
              </p>
              <p className="text-[11px] md:text-xs text-slate-500 max-w-2xl">
                {current.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex flex-wrap gap-1.5">
                {current.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-900/5 px-2 py-1 text-[10px] text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {current.links && current.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {current.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-sky-600 hover:text-sky-700"
                    >
                      <ExternalLink size={13} />
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}