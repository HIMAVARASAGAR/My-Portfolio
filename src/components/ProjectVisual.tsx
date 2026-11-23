import { useState } from "react";
import type { Project } from "../data/projects";

const captions: Record<string, string> = {
  soteria: "Setup commands from the Soteria documentation.",
  uce: "Conceptual view of the agent workflow.",
  graphene: "Conceptual two-element ring layout.",
  aegis: "Conceptual workflow with a clinician review gate.",
  mips: "Simplified single-cycle datapath illustration.",
  portfolio: "Live portfolio interface.",
  battery: "Illustration of the 12 V level indicator.",
  modulo: "Interactive modulo-3 arithmetic example.",
  supply: "Illustration of the regulated 3–15 V output range.",
  visitor: "Illustration of sensor input and display output.",
  xor: "Interactive XOR logic example.",
};
const Box = ({
  x,
  y,
  w = 105,
  label,
}: {
  x: number;
  y: number;
  w?: number;
  label: string;
}) => (
  <g>
    <rect x={x} y={y} width={w} height="44" rx="8" />
    <text x={x + w / 2} y={y + 27} textAnchor="middle">
      {label}
    </text>
  </g>
);
export default function ProjectVisual({
  project,
  detail = false,
}: {
  project: Project;
  detail?: boolean;
}) {
  const [a, setA] = useState(1),
    [b, setB] = useState(0),
    [value, setValue] = useState(7);
  const id = project.id;
  let art;
  if (id === "soteria")
    art = (
      <div className="terminal-visual">
        <div className="terminal-bar">
          <i />
          <i />
          <i />
          <span>soteria / quick start</span>
        </div>
        <code>
          <span className="terminal-prompt">$</span> npm install -g
          <br />
          <span className="terminal-indent">@himavarasagar/soteria</span>
          <br />
          <br />
          <span className="terminal-prompt">$</span> soteria
          <br />
          <span className="terminal-command">/provider</span>
          <span className="terminal-caret" />
        </code>
        <div className="terminal-foot">
          CLI <span>↔</span> Cloud + local models
        </div>
      </div>
    );
  else if (id === "portfolio")
    art = (
      <div className="portfolio-visual">
        <div className="mini-browser">
          <i />
          <i />
          <i />
          <span>himavara sagar</span>
        </div>
        <img
          src="/projects/portfolio.jpg"
          alt="Screenshot of the portfolio landing page"
          loading="lazy"
          width="1280"
          height="720"
        />
      </div>
    );
  else
    art = (
      <svg
        viewBox="0 0 440 240"
        className={`project-drawing drawing-${id}`}
        fill="none"
        aria-hidden="true"
      >
        {id === "uce" && (
          <>
            <path
              className="flow-stroke"
              d="M220 52V85M220 85H75V132M220 85V132M220 85H365V132M75 176V210H365V176M220 210V176"
            />
            <Box x={165} y={8} w={110} label="Orchestrate" />
            <Box x={20} y={132} w={110} label="Reason" />
            <Box x={165} y={132} w={110} label="Plan" />
            <Box x={310} y={132} w={110} label="Tools" />
            <circle cx="220" cy="85" r="5" className="drawing-fill" />
          </>
        )}
        {id === "graphene" && (
          <>
            <path d="M35 60 320 25 405 164 120 215Z" className="substrate" />
            <g
              className="ring-pair"
              transform="translate(220 120) rotate(-12) scale(1 .65)"
            >
              <circle cx="-85" cy="0" r="62" />
              <circle cx="-85" cy="0" r="40" />
              <circle cx="85" cy="0" r="62" />
              <circle cx="85" cy="0" r="40" />
              <path d="M-85 40V110M85 40V110" />
            </g>
            <text x="45" y="230">
              PORT 1
            </text>
            <text x="315" y="230">
              PORT 2
            </text>
          </>
        )}
        {id === "aegis" && (
          <>
            <path
              className="flow-stroke"
              d="M75 66V120H205M205 66V120M335 66V120H205V160"
            />
            <Box x={20} y={22} label="Agent" />
            <Box x={150} y={22} label="Tools" />
            <Box x={280} y={22} label="Agent" />
            <rect
              x="120"
              y="160"
              width="200"
              height="60"
              rx="30"
              className="review-gate"
            />
            <text x="220" y="195" textAnchor="middle">
              Clinician review
            </text>
            <circle cx="205" cy="120" r="5" className="drawing-fill" />
          </>
        )}
        {id === "mips" && (
          <>
            <path className="flow-stroke" d="M55 115H385M385 115V205H55V115" />
            <Box x={18} y={93} w={65} label="PC" />
            <Box x={105} y={93} w={90} label="Decode" />
            <path
              d="M225 75 290 100V140L225 165V130L240 120 225 110Z"
              className="alu"
            />
            <text x="260" y="125" textAnchor="middle">
              ALU
            </text>
            <Box x={320} y={93} w={105} label="Memory" />
            <text x="220" y="225" textAnchor="middle">
              WRITE BACK
            </text>
            <text x="220" y="35" textAnchor="middle">
              32-BIT / SINGLE CYCLE
            </text>
          </>
        )}
        {id === "battery" && (
          <>
            <rect x="72" y="67" width="280" height="110" rx="14" />
            <path d="M352 99H368V145H352" />
            {[0, 1, 2, 3].map((i) => (
              <rect
                key={i}
                className="battery-cell"
                x={86 + i * 65}
                y="81"
                width="52"
                height="82"
                rx="5"
                style={{ animationDelay: `${i * 0.12}s` }}
              />
            ))}
            <text x="220" y="215" textAnchor="middle">
              12 V · LEVEL INDICATOR
            </text>
          </>
        )}
        {id === "modulo" && (
          <>
            <text x="220" y="70" textAnchor="middle">
              BINARY INPUT → REMAINDER
            </text>
            <text
              className="drawing-numeral"
              x="140"
              y="155"
              textAnchor="middle"
            >
              {value}
            </text>
            <text x="220" y="140" textAnchor="middle">
              mod 3
            </text>
            <text
              className="drawing-numeral"
              x="320"
              y="155"
              textAnchor="middle"
            >
              {value % 3}
            </text>
            <path d="M45 185H395" />
          </>
        )}
        {id === "supply" && (
          <>
            <path d="M95 175A125 125 0 0 1 345 175" strokeWidth="12" />
            <path className="gauge-needle" d="M220 175 285 78" />
            <circle cx="220" cy="175" r="9" className="drawing-fill" />
            <text x="80" y="210">
              3 V
            </text>
            <text x="330" y="210">
              15 V
            </text>
            <text x="220" y="48" textAnchor="middle">
              REGULATED OUTPUT
            </text>
          </>
        )}
        {id === "visitor" && (
          <>
            <path className="flow-stroke" d="M90 125H180M260 125H325" />
            <circle cx="55" cy="125" r="35" />
            <path d="M43 111 65 125 43 139Z" />
            <Box x={150} y={103} w={125} label="Controller" />
            <rect x="310" y="72" width="100" height="106" rx="8" />
            <text
              x="360"
              y="145"
              className="counter-number"
              textAnchor="middle"
            >
              08
            </text>
            <text x="55" y="190" textAnchor="middle">
              IR
            </text>
            <text x="360" y="205" textAnchor="middle">
              DISPLAY
            </text>
          </>
        )}
        {id === "xor" && (
          <>
            <path d="M35 80H145M35 160H145M295 120H362M145 60Q185 120 145 180M160 60Q235 55 295 120Q235 185 160 180Q200 120 160 60Z" />
            <text x="50" y="64">
              A = {a}
            </text>
            <text x="50" y="198">
              B = {b}
            </text>
            <circle
              cx="385"
              cy="120"
              r="23"
              className={a ^ b ? "xor-on" : ""}
            />
            <text x="385" y="126" textAnchor="middle">
              {a ^ b}
            </text>
          </>
        )}
      </svg>
    );
  return (
    <figure
      className={`project-visual visual-${id} ${detail ? "visual-detail" : ""}`}
      aria-hidden={!detail || undefined}
    >
      <div className="project-art">{art}</div>
      {detail && (
        <>
          <figcaption>
            {id === "portfolio"
              ? "Screenshot of the portfolio landing page."
              : captions[id]}
          </figcaption>
          {id === "xor" && (
            <div className="visual-controls">
              <button aria-pressed={!!a} onClick={() => setA(a ? 0 : 1)}>
                Input A: {a}
              </button>
              <button aria-pressed={!!b} onClick={() => setB(b ? 0 : 1)}>
                Input B: {b}
              </button>
              <output aria-live="polite">Output: {a ^ b}</output>
            </div>
          )}
          {id === "modulo" && (
            <div className="visual-controls">
              <label>
                Input{" "}
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={value}
                  onChange={(e) => setValue(+e.target.value)}
                />
              </label>
              <output aria-live="polite">
                {value} mod 3 = {value % 3}
              </output>
            </div>
          )}
        </>
      )}
    </figure>
  );
}
