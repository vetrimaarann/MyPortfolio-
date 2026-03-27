import { useState, useCallback } from 'react';
import LaunchScreen from './components/LaunchScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';

export default function App() {
  const [launched, setLaunched] = useState(false);

  const handleComplete = useCallback(() => setLaunched(true), []);

  return (
    <>
      {!launched && <LaunchScreen onComplete={handleComplete} />}
      <div style={{ opacity: launched ? 1 : 0, transition: 'opacity 0.6s ease', pointerEvents: launched ? 'all' : 'none' }}>
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
