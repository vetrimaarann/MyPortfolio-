import './Projects.css';

const projects = [
  {
    icon: '🤖',
    title: 'AI Blender Automation',
    desc: 'Converts natural language into Blender commands using LLM integration and a Python API. Enables non-technical users to create 3D scenes via prompts.',
    tags: ['Python', 'LLM', 'Blender', 'RAG'],
  },
  {
    icon: '⚡',
    title: 'EV Digital Twin',
    desc: 'Simulated electric wheelchair system with full control logic, sensor integration, and safety validation using digital-twin methodology.',
    tags: ['MATLAB', 'Simulink', 'Systems', 'EV'],
  },
  {
    icon: '🪟',
    title: 'Windows AI Assistant',
    desc: 'RAG + Agent-based desktop assistant for task automation. Uses vector databases and LLM integration to understand and execute user commands.',
    tags: ['RAG', 'Vector DB', 'Agents', 'Python'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <div className="section-tag">Featured Work</div>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div className="project-card" key={p.title}>
            <span className="project-arrow">↗</span>
            <div className="project-icon">{p.icon}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
