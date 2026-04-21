import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container" style={{ position: 'relative' }}>
      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
          transformOrigin: '0%',
          zIndex: 100
        }}
      />

      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>

      <footer style={{ padding: '4rem 5vw', textAlign: 'center', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>© 2026 Pranav Rajesh. Code. Create. Innovate.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://www.linkedin.com/in/pranav-rajesh-822aa32a4/" target="_blank">LinkedIn</a>
          <a href="https://github.com/Pranav1Rajesh" target="_blank">GitHub</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
