// ============================================================
//  SIGNAL — project content (from resume)
//  Each tile spec drives both the document card and the 3D scene
//  that the section anchor mounts.
// ============================================================

export const Profile = {
  name:        "Kaki Himavara Sagar",
  role:        "Electronics & Communication Engineer · Creative Developer",
  institute:   "NIT Calicut, IN",
  batch:       "B.Tech ECE, 2021–2025",
  email:       "himavarasagar6675@gmail.com",
  phone:       "+91 63034 62301",
  github:      "https://github.com/kakihimavarasagar",
  linkedin:    "https://linkedin.com/in/kakihimavarasagar",
  available:   "2026 — internships, research, collaborations",
};

export const ProjectData = [
  {
    id: "mimo",
    num: "P01",
    title: "Reconfigurable Graphene THz MIMO Antenna",
    tag: "RF / Antenna · B.Tech Major",
    blurb: "A graphene ring antenna in the terahertz band, electrostatically re-tunable via the chemical potential. Extended to a 2-element MIMO configuration with >20 dB isolation and beam-steering without changing geometry.",
    stack: ["CST Studio", "S-parameters", "Regression tuning", "THz"],
    anchor: "#research-mount",
    viz: "interference",  // Scene picks the renderer
  },
  {
    id: "ucai",
    num: "P02",
    title: "Universal Cognitive Engine — Multi-Agent System",
    tag: "AI Agents · Google ADK",
    blurb: "A multi-agent cognitive architecture with reasoning, planning, tool invocation, and orchestration agents. Built using Google ADK with memory handling and tool-based workflows for multi-step task execution.",
    stack: ["Python", "Google ADK", "Multi-Agent", "Tool-Use"],
    anchor: "#work-mount",
    viz: "agents",
  },
  {
    id: "semcom",
    num: "P03",
    title: "Semantic Communication System",
    tag: "Comm Systems · Zero-dep Python",
    blurb: "Encodes natural language into a compact SIU schema, dictionary-compresses with zlib, transmits across a noisy socket channel, and reconstructs meaning at the receiver with rule-based or LLM-assisted recovery. Runs entirely on the stdlib.",
    stack: ["Python stdlib", "Sockets", "zlib", "Recovery", "Groq/Ollama"],
    anchor: "#research-mount",
    viz: "semcom",
  },
  {
    id: "agentcapstone",
    num: "P04",
    title: "AI Agents Intensive Capstone (Kaggle)",
    tag: "Certification · Kaggle",
    blurb: "Kaggle/GADK intensive: end-to-end design and implementation of a multi-agent AI system. Covered agent coordination, tool-based reasoning, memory, and orchestration patterns.",
    stack: ["Google ADK", "Kaggle", "Multi-Agent AI"],
    anchor: "#work-mount",
    viz: "agents",
  },
];

// Smaller bodies of work — listed under Work as supplementary
export const SideWork = [
  { year: "2023", title: "Variable Voltage Power Supply (3–15V)",     stack: "Linear PSU · Shunt regulator" },
  { year: "2023", title: "Visitor Counter (IR + microcontroller)",    stack: "Embedded · 7-seg display" },
  { year: "2022", title: "XOR Gate Implementation with Op-Amps",      stack: "Analog · PLL phase detector" },
  { year: "2022", title: "Modulo-3 Accumulator (combinational logic)", stack: "Digital logic" },
  { year: "2023", title: "Battery Level Indicator (Zener + transistor)", stack: "Analog electronics" },
];
