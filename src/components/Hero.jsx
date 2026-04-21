import React from 'react';
import { motion } from 'framer-motion';
import { MousePointer2, ChevronRight, FileText, Send } from 'lucide-react';

const Hero = () => {
  const [text, setText] = React.useState('');
  const fullText = "AI Engineer | Full Stack Developer | Problem Solver";
  
  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background Orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--primary-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'var(--secondary-glow)',
        filter: 'blur(100px)',
        borderRadius: '50%',
        zIndex: -1
      }} />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', width: '100%' }}>
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
           style={{ maxWidth: '800px' }}
        >
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Pranav <span className="text-gradient">Rajesh</span>
          </h1>
          <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.8rem)', color: 'var(--text-muted)', marginBottom: '2rem', minHeight: '1.5em', fontWeight: 400 }}>
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{text}</span>
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </h2>
          <style>{`
            @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
          `}</style>
          <p style={{ margin: '0 auto 2.5rem auto', maxWidth: '600px', color: 'var(--text-muted)', fontSize: '1.2rem' }}>
            Building tomorrow with AI Meets Real World Solutions. Passionate about intelligent systems and scalable web technologies.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', justifyContent: 'center' }}>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="bg-gradient"
              style={{ padding: '14px 32px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              View Projects <ChevronRight size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, borderColor: 'var(--text-main)' }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Pranav1Rajesh"
              target="_blank"
              className="glass"
              style={{ padding: '14px 32px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.8rem' }}
            >
               GitHub
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, borderColor: 'var(--text-main)' }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/pranav-rajesh-822aa32a4/"
              target="_blank"
              className="glass"
              style={{ padding: '14px 32px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.8rem' }}
            >
               LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
