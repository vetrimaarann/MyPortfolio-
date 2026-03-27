import { useEffect, useState } from 'react';
import './Hero.css';

const roles = [
  'Engineer',
  'AI Systems Builder',
  'Problem Solver',
  'Automation Expert',
  'RAG Developer',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="hero">
      <div className="hero-badge">
        <span className="dot" />
        Available for opportunities
      </div>

      <h1 className="hero-name">
        SUNDER <span className="gold">G</span>
      </h1>

      <p className="hero-tagline">
        Engineer <span>•</span> Builder <span>•</span> Innovator
      </p>

      <div className="typewriter-wrap">
        <span style={{ color: 'var(--muted)' }}>I build </span>
        <span className="typewriter">{displayed}</span>
        <span className="cursor" />
      </div>

      <div className="hero-cta-row">
        <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
          View Work ↓
        </button>
        <a className="btn-secondary" href="mailto:nzoom1768123@gmail.com">
          Contact Me
        </a>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">3+</div>
          <div className="stat-label">Projects</div>
        </div>
        <div className="stat">
          <div className="stat-num">5+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat">
          <div className="stat-num">AI</div>
          <div className="stat-label">Focused</div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        scroll
      </div>
    </section>
  );
}
