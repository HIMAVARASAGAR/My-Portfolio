import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const SkillTag = ({ name }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 18 }}
    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs md:text-sm font-mono text-gray-300 hover:text-white hover:border-accent/60 transition-colors cursor-hover"
  >
    {name}
  </motion.div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between text-xs md:text-sm font-mono text-gray-400 border-b border-white/5 py-3">
    <span className="uppercase tracking-[0.2em]">{label}</span>
    <span className="text-gray-100">{value}</span>
  </div>
);

const TABS = {
  hardware: {
    label: "Hardware",
    body: "I like working close to the electrons — antennas, counters, small ALU blocks and boards you can actually probe with a scope.",
    bullets: [
      "Graphene THz antenna simulations in CST",
      "8051-based embedded projects & visitor counter",
      "PCB design for power / indicator circuits",
    ],
  },
  software: {
    label: "Software",
    body: "On the software side I enjoy building tools and visuals that wrap around the hardware instead of hiding it.",
    bullets: [
      "C / C++ for low-level logic and small tools",
      "Python & MATLAB for analysis and experiments",
      "React + Framer Motion for polished interfaces",
    ],
  },
  systems: {
    label: "Systems",
    body: "Long term, I care about systems where the silicon, the firmware and the UI all feel like one decision.",
    bullets: [
      "Thinking in terms of data flow, not just screens",
      "Balancing constraints of real hardware with UX",
      "Documenting ideas as diagrams, not paragraphs",
    ],
  },
};

export default function About() {
  const [activeTab, setActiveTab] = useState("hardware");

  // === tilt for the right glass card ===
  const cardRef = useRef(null);
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const smoothX = useSpring(tiltX, { stiffness: 120, damping: 18 });
  const smoothY = useSpring(tiltY, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(smoothY, [-1, 1], [8, -8]);
  const rotateY = useTransform(smoothX, [-1, 1], [-8, 8]);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0–1
      const y = (e.clientY - rect.top) / rect.height; // 0–1

      tiltX.set(x * 2 - 1); // -1 to 1
      tiltY.set(y * 2 - 1); // -1 to 1
    };

    const resetTilt = () => {
      tiltX.set(0);
      tiltY.set(0);
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, [tiltX, tiltY]);

  const currentTab = TABS[activeTab];

  return (
    <section
      id="about"
      className="relative z-10 py-24 md:py-32 px-6 bg-black/30 backdrop-blur-sm border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.3fr_minmax(0,1fr)] gap-16 md:gap-20 items-start">
        {/* LEFT : STORY + SKILLS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-accent text-xs tracking-[0.35em] uppercase mb-4">
            ABOUT
          </p>

          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Bridging <span className="text-accent">Logic</span>
            <br />
            &amp; Human Signals
          </h2>

          <p className="font-sans text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            I’m an undergraduate{" "}
            <span className="text-gray-100 font-medium">
              Electronics and Communication Engineer at NIT Calicut
            </span>
            , exploring the overlap of circuits, code, and interaction design.
          </p>

          <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mb-4">
            Most of my work starts as messy handwritten diagrams — antennas,
            counters, tiny ALU blocks — and then gradually moves into
            simulations, PCBs, and interfaces you can actually click.
          </p>

          <p className="font-sans text-gray-400 text-sm md:text-base leading-relaxed mb-8">
            Long term, I want to work on systems where{" "}
            <span className="text-gray-100">
              hardware decisions are as intentional as UI decisions
            </span>
            — from how bits move on a board to how people feel when they touch
            the final product.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3">
            <SkillTag name="C / C++" />
            <SkillTag name="Python" />
            <SkillTag name="React / Framer Motion" />
            <SkillTag name="Three.js" />
            <SkillTag name="MATLAB / Simulink" />
            <SkillTag name="8051 Embedded" />
            <SkillTag name="RF & Antenna Basics" />
          </div>
        </motion.div>

        {/* RIGHT : INTERACTIVE CARD */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          {/* glow outline */}
          <div className="pointer-events-none absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/15 via-transparent to-accent/30 opacity-70" />

          <motion.div
            ref={cardRef}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl px-6 py-7 md:px-8 md:py-9 shadow-[0_30px_80px_rgba(0,0,0,0.6)] cursor-hover"
          >
            {/* top section */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gray-400">
                  Snapshot
                </p>
                <h3 className="font-display text-xl text-white mt-1">
                  Hima Vara Sagar
                </h3>
              </div>
              <div className="text-right">
                <div className="text-3xl md:text-4xl font-display text-white">
                  4+
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400">
                  Core Projects
                </div>
              </div>
            </div>

            {/* static info */}
            <div className="space-y-1 mb-6">
              <InfoRow label="Discipline" value="ECE @ NIT Calicut" />
              <InfoRow label="Grad Year" value="2025" />
              <InfoRow label="Focus" value="Embedded • RF • Interaction" />
            </div>

            {/* tabs */}
            <div className="mb-4">
              <div className="flex gap-2 mb-3">
                {Object.entries(TABS).map(([key, tab]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`relative px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.18em] rounded-full cursor-hover transition-colors ${
                      activeTab === key
                        ? "text-black bg-accent"
                        : "text-gray-400 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="font-sans text-gray-200 text-xs md:text-sm leading-relaxed"
              >
                <p className="mb-3">{currentTab.body}</p>
                <ul className="space-y-1">
                  {currentTab.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-[6px] w-1 h-1 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* bottom note */}
            <div className="mt-5 pt-4 border-t border-white/10 text-[11px] font-mono text-gray-500">
              Outside all this, I’m usually tweaking layouts, breaking things
              with new libraries, or trying to squeeze a bit more life out of
              aging hardware.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}