import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// --- PROJECT DATA ---
const ALL_PROJECTS = [
  {
    key: "graphene",
    title: "Graphene THz Antenna",
    category: "Research / RF",
    desc: "Reconfigurable graphene-based THz antenna transitioning into a compact MIMO system.",
    tags: ["RF", "Simulation", "MIMO"],
    content:
      "The design and study of a reconfigurable graphene-based terahertz (THz) antenna together with its transition into a MIMO (Multiple-Input Multiple-Output) system. By tuning the chemical potential of the graphene elements, the antenna achieves dynamic frequency reconfiguration and beam steering, with isolation greater than 40 dB between ports. This provides a strong foundation for next-generation THz communication links where compact, steerable, and tunable front-ends are essential."
  },
  {
    key: "visitor",
    title: "Visitor Counter",
    category: "Embedded",
    desc: "IR-based entry counter on AT89S52 with 7-segment display output.",
    tags: ["8051", "C", "Sensors"],
    content:
      "An AT89S52-based visitor counter using IR sensor pairs at the doorway. Every valid entry is debounced, processed in firmware, and displayed on a multiplexed 7-segment display. The project focuses on clean state-machine design and low-level peripheral control on the 8051 architecture."
  },
  {
    key: "battery",
    title: "Battery Level Indicator",
    category: "Analog",
    desc: "Simple transistor + zener network for 12 V battery health indication.",
    tags: ["Circuit", "Power", "Zener"],
    content:
      "A compact analog battery level indicator that uses a zener reference and a pair of BJTs to switch a bar of LEDs based on the terminal voltage of a 12 V battery. The circuit is tuned to distinguish under-voltage, nominal, and fully-charged states without any microcontroller."
  },
  {
    key: "voltage",
    title: "Variable Voltage Supply",
    category: "Power",
    desc: "3–15 V shunt-regulated bench supply with PCB layout.",
    tags: ["Shunt", "Regulator", "PCB"],
    content:
      "A small bench power supply based on a shunt regulator topology. The design includes over-current protection, fine + coarse adjustment, and a single-sided PCB layout suitable for quick fabrication in a college lab environment."
  },
  {
    key: "xor",
    title: "XOR Gate Using Op-Amps",
    category: "Logic",
    desc: "Analog XOR implementation used as a PLL phase detector.",
    tags: ["Op-Amps", "PLL", "Analog Logic"],
    content:
      "An XOR function implemented purely with op-amps and passive components, tailored to act as a phase detector in a simple PLL experiment. The project explores analog behaviour of logic, duty-cycle effects, and the impact of finite slew rate on the loop response."
  },
  {
    key: "modulo",
    title: "Modulo-3 Accumulator",
    category: "Digital",
    desc: "Combinational circuit that outputs (A + B) mod 3.",
    tags: ["Logic Gates", "Verilog", "ALU"],
    content:
      "A small arithmetic block that computes the modulo-3 sum of two binary inputs. First realised using basic logic gates and Karnaugh maps, then re-implemented and simulated in Verilog as part of a custom ALU playground."
  }
];

// --- TILT CARD ---
const TiltCard = ({ project, openModal, index }) => {
  const ref = useRef(null);
  const maxTilt = 10;
  const liftZ = 30;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const xNorm = x / (rect.width / 2);
      const yNorm = y / (rect.height / 2);

      const xRot = yNorm * maxTilt;
      const yRot = -xNorm * maxTilt;

      el.style.transition = "transform 0.1s linear";
      el.style.transform = `
        perspective(1000px)
        translateZ(${liftZ}px)
        rotateX(${xRot}deg)
        rotateY(${yRot}deg)
      `;
    };

    const handleMouseLeave = () => {
      el.style.transition =
        "transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)";
      el.style.transform =
        "perspective(1000px) translateZ(0) rotateX(0deg) rotateY(0deg)";
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      key={project.key}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => openModal(project)}
      // NOTE: cursor-hover class so your 3D cursor knows to morph here
      className="group cursor-hover relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:border-accent/60 hover:bg-white/10"
      style={{ willChange: "transform" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex flex-col justify-between h-full min-h-[170px] pointer-events-none">
        <div className="flex justify-between items-start mb-4">
          <span className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-1 rounded-full tracking-widest">
            {project.category}
          </span>
          <ArrowUpRight className="text-white w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-accent transition-colors" />
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl text-white mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-gray-300/80 text-sm mb-5 leading-relaxed line-clamp-3">
            {project.desc}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-gray-400 uppercase tracking-wider border border-white/10 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section id="work" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="font-display text-5xl md:text-7xl text-white">
              Selected
              <br />
              Works
            </h2>
            <span className="font-mono text-accent text-xs md:text-sm tracking-[0.3em] uppercase">
              01 — 06
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ALL_PROJECTS.map((p, i) => (
              <TiltCard
                key={p.key}
                project={p}
                openModal={openModal}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {modalOpen && modalContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-md"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.85, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            // cursor-hover so the cursor morphs over close button etc.
            className="relative max-w-3xl w-[90vw] md:w-[70vw] max-h-[80vh] overflow-y-auto rounded-3xl border border-white/15 bg-white/5 backdrop-blur-2xl shadow-[0_40px_120px_rgba(0,0,0,0.65)] p-8 md:p-10 cursor-default"
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="cursor-hover absolute top-5 right-6 text-gray-400 hover:text-white text-xl font-light"
              aria-label="Close project details"
            >
              ×
            </button>

            <span className="font-mono text-accent text-xs tracking-[0.25em] uppercase mb-3 block">
              {modalContent.category}
            </span>

            <h3 className="font-display text-3xl md:text-4xl text-white mb-5">
              {modalContent.title}
            </h3>

            <p className="font-sans text-gray-200/90 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
              {modalContent.content}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {modalContent.tags?.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono text-gray-300 uppercase tracking-wider border border-white/20 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}