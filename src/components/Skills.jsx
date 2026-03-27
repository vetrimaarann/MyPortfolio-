import './Skills.css';

const skillCategories = [
  {
    icon: '💻',
    name: 'Programming',
    skills: ['Python', 'C', 'C#', 'JavaScript', 'Node.js'],
  },
  {
    icon: '🔧',
    name: 'Frameworks & Tools',
    skills: ['.NET', 'n8n', 'REST APIs', 'Git'],
  },
  {
    icon: '🧠',
    name: 'AI & Systems',
    skills: ['RAG Systems', 'Vector Databases', 'LLM Integration', 'AI Agents'],
  },
  {
    icon: '📊',
    name: 'Simulation',
    skills: ['MATLAB', 'Simulink', 'Digital Twin', 'Control Systems'],
  },
  {
    icon: '🔍',
    name: 'Testing',
    skills: ['Bug Identification', 'Debugging', 'System Validation', 'Test Automation'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <div className="section-header">
          <div className="section-tag">What I Know</div>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat) => (
            <div className="skill-category" key={cat.name}>
              <div className="skill-cat-header">
                <div className="skill-icon">{cat.icon}</div>
                <span className="skill-cat-name">{cat.name}</span>
              </div>
              <div className="skill-pills">
                {cat.skills.map((s) => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
