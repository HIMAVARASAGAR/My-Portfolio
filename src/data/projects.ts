export type Project = {
  id: string;
  title: string;
  category: string;
  year?: string;
  tone: string;
  size: string;
  overview: string;
  details: string[];
  tools: string[];
  link?: { label: string; url: string };
};
export const projects: Project[] = [
  {
    id: "soteria",
    title: "Soteria",
    category: "Developer tools",
    tone: "lime",
    size: "lead",
    overview:
      "A multi-provider coding agent with a terminal interface and a headless gRPC runtime.",
    details: [
      "One terminal workflow connects cloud APIs and local model backends. Saved provider profiles let the user switch services without changing the way they work.",
      "The headless gRPC service streams text and tool calls, including permission requests for sensitive commands. It lets other clients use the same coding-agent runtime.",
      "Soteria is an independent community project adapted from the Claude Code codebase, with substantial changes for multiple providers and open use.",
    ],
    tools: ["Coding agents", "gRPC"],
    link: {
      label: "Source & setup guide",
      url: "https://github.com/HIMAVARASAGAR/Soteria",
    },
  },
  {
    id: "uce",
    title: "Universal Cognitive Engine",
    category: "AI agents",
    year: "2025",
    tone: "lilac",
    size: "secondary",
    overview:
      "A multi-agent system built with Google ADK for reasoning, planning, and tool use.",
    details: [
      "Agents coordinate reasoning, planning, tool invocation, and orchestration across multi-step workflows.",
      "The implementation explores agent coordination, memory handling, and tool-oriented reasoning.",
    ],
    tools: ["Python", "Google ADK", "Multi-agent systems"],
  },
  {
    id: "graphene",
    title: "Graphene MIMO Antenna",
    category: "THz antenna design",
    year: "2024–2025",
    tone: "ink",
    size: "antenna",
    overview:
      "A reconfigurable graphene-based THz ring antenna, extended into a two-element MIMO configuration.",
    details: [
      "Analysed S-parameters, isolation, radiation, gain, and beam steering in CST Microwave Studio.",
      "Explored a regression model for chemical potential and resonance tuning as part of the B.Tech final-year project at NIT Calicut.",
    ],
    tools: ["CST Microwave Studio", "MIMO analysis", "Antenna design"],
  },
  {
    id: "aegis",
    title: "Aegis",
    category: "Clinical decision support",
    tone: "coral",
    size: "agent",
    overview:
      "A multi-agent readiness workflow with isolated tools and clinician review gates.",
    details: [
      "The workflow separates agent tools and includes clinician review gates.",
    ],
    tools: ["Multi-agent systems", "Tool isolation"],
  },
  {
    id: "mips",
    title: "MIPS",
    category: "Digital hardware",
    tone: "blue",
    size: "processor",
    overview:
      "A 32-bit, single-cycle processor architecture designed in Verilog.",
    details: ["Verified the processor design with RTL simulation."],
    tools: ["Verilog", "RTL simulation"],
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    category: "Frontend",
    year: "2024–2026",
    tone: "paper",
    size: "small",
    overview: "A responsive portfolio built with React and Vite.",
    details: [
      "Built a responsive project gallery with card-to-dialog transitions, keyboard focus restoration, and reduced-motion support.",
      "Coordinated section transitions and SVG interactions with GSAP. The current site deploys from GitHub to Vercel.",
    ],
    tools: ["React", "TypeScript", "Vite", "GSAP", "Vercel"],
    link: {
      label: "View source",
      url: "https://github.com/HIMAVARASAGAR/My-Portfolio",
    },
  },
  {
    id: "battery",
    title: "Battery Level Indicator",
    category: "Analog electronics",
    year: "2023",
    tone: "coral",
    size: "small",
    overview: "A circuit that indicates charging levels in a 12 V battery.",
    details: [
      "Implemented the level indicator using transistors and Zener diodes.",
    ],
    tools: ["Transistors", "Zener diodes"],
  },
  {
    id: "modulo",
    title: "Modulo-3 Accumulator",
    category: "Digital logic",
    year: "2023",
    tone: "lilac",
    size: "small",
    overview:
      "Binary addition and modulo-3 logic implemented with combinational logic gates.",
    details: [
      "Combined binary arithmetic and modulo logic into a gate-level accumulator.",
    ],
    tools: ["Combinational logic", "Binary arithmetic"],
  },
  {
    id: "supply",
    title: "Variable Voltage Supply",
    category: "Power electronics",
    year: "2022",
    tone: "blue",
    size: "small",
    overview: "A regulated 3–15 V variable power supply.",
    details: ["Built the supply around a shunt regulator."],
    tools: ["Shunt regulator", "Analog circuits"],
  },
  {
    id: "visitor",
    title: "Visitor Counter",
    category: "Embedded systems",
    year: "2022",
    tone: "lime",
    size: "small",
    overview: "An IR-sensor visitor counter with a seven-segment display.",
    details: [
      "Used a microcontroller to connect sensor input to the displayed count.",
    ],
    tools: ["IR sensor", "Microcontroller", "Seven-segment display"],
  },
  {
    id: "xor",
    title: "XOR Gate with Op-Amps",
    category: "Analog electronics",
    year: "2022",
    tone: "paper",
    size: "small",
    overview: "An XOR-gate implementation using operational amplifiers.",
    details: [
      "Explored its application as a phase detector in a phase-locked loop.",
    ],
    tools: ["Operational amplifiers", "XOR logic", "PLL"],
  },
];
