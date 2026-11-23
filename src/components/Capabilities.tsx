import { projects, type Project } from "../data/projects";
import LineArt from "./LineArt";
import { HandoffArrow } from "./MicroMotion";
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
            <article className="skill-panel" data-scroll-highlight="skill" key={group.name}>
              <div className="skill-panel-heading">
                <span className="skill-number">0{i + 1}</span>
                <LineArt kind={i} />
              </div>
              <h3>{group.name}</h3>
              <ul className="skill-inventory">
                {group.tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
              <div className="skill-applications">
                <span className="skill-application-label">Applied in</span>
                {group.related.map(id => {
                  const project = projects.find(p => p.id === id)!;
                  return <button key={id} onClick={e => onOpen(project, e.currentTarget)}>{project.title}<HandoffArrow /></button>;
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
