import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>About Me</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem', alignItems: 'start' }} className="about-grid">
            <div>
              <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 600, lineHeight: '1.4', marginBottom: '2rem' }}>
                Motivated Computer Science student at <span className="text-gradient">SRM Institute of Science and Technology</span> with strong foundations in AI and Full Stack Development.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                Passionate about solving real-world problems through innovation and intelligent systems. I specialize in bridging the gap between sophisticated AI models and user-centric web applications.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', marginTop: '3rem' }}>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', wordBreak: 'break-word' }}>9.48</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>CURRENT CGPA</p>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 2rem)', wordBreak: 'break-word' }}>Chennai</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>LOCATION</p>
                </div>
              </div>
            </div>

            <div className="glass" style={{ padding: '30px', borderRadius: '24px', position: 'sticky', top: '100px' }}>
              <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)' }}>⚡</span> Quick Info
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Degree</span>
                  <span>B.Tech CSE</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>University</span>
                  <span>SRM IST</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Focus</span>
                  <span>AI/ML</span>
                </li>
              </ul>
              
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                 <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>"Engineering intelligence into reality"</p>
                 <div style={{ height: '2px', width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: '1px' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      style={{ height: '100%', background: 'var(--primary)', borderRadius: '1px' }} 
                    />
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
