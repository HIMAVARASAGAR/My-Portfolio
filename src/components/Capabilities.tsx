import { projects, type Project } from "../data/projects";
import LineArt from "./LineArt";
import { ElasticDivider, HandoffArrow } from "./MicroMotion";
const groups = [
  {
    name: "Programming",
    tools: ["Python", "MATLAB", "C / C++", "JavaScript"],
    related: ["uce", "portfolio"],
  },
  {
    name: "Frontend",
    tools: ["React", "Vite", "Tailwind CSS", "HTML / CSS"],
    related: ["portfolio"],
  },
  {
    name: "Hardware tools",
    tools: ["Proteus", "Simulink", "CST Microwave Studio", "Vivado (basic)"],
    related: ["graphene", "mips", "battery"],
  },
  {
    name: "AI & workflow",
    tools: [
      "Google ADK",
      "Multi-agent systems",
      "Git & GitHub",
      "Command line",
    ],
    related: ["uce", "soteria", "aegis"],
  },
];
export default function Capabilities({
  onOpen,
}: {
  onOpen: (project: Project, trigger: HTMLElement) => void;
}) {
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="skills-inner">
        <div className="skills-heading">
          <h2 id="skills-title">
            Skills<span>.</span>
          </h2>
          <svg
            className="thread-line"
            viewBox="0 0 360 80"
            fill="none"
            aria-hidden="true"
          >
            <path
              pathLength="1"
              d="M5 42C70 5 100 75 165 42S235 5 290 42H350M333 25 350 42 333 59"
            />
          </svg>
        </div>
        <div className="skill-ledger">
          {groups.map((group, i) => (
            <details className="skill-row" key={group.name}>
              <summary>
                <span className="skill-number">0{i + 1}</span>
                <h3>{group.name}</h3>
                <span className="skill-tools">
                  {group.tools.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </span>
                <LineArt kind={i} />
                <span className="skill-toggle" aria-hidden="true">
                  +
                </span>
                <ElasticDivider />
              </summary>
              <div className="skill-evidence">
                <span>Applied in</span>
                <div>
                  {group.related.map((id) => {
                    const project = projects.find((p) => p.id === id)!;
                    return (
                      <button
                        key={id}
                        onClick={(e) => onOpen(project, e.currentTarget)}
                      >
                        {project.title}
                        <HandoffArrow />
                      </button>
                    );
                  })}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
