import { useEffect, useState } from 'react';
import './LaunchScreen.css';

export default function LaunchScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 4 + 1.5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 850);
        }, 400);
      }
      setProgress(Math.min(Math.floor(current), 100));
    }, 60);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`launch-screen${exiting ? ' exit' : ''}`}>
      <div className="launch-orb">
        <div className="orbit-ring" />
        <div className="orbit-ring" style={{ inset: '20px' }} />
        <div className="orbit-dot" />
        <div className="orbit-dot-2" />
        <div className="core">SG</div>
      </div>

      <h1 className="launch-title">
        <span>Sunder</span> G
      </h1>
      <p className="launch-sub">Portfolio · Loading</p>

      <div className="launch-progress-wrap">
        <div
          className="launch-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="launch-percent">{progress}%</p>
    </div>
  );
}
