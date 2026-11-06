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

          <div
            style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem', alignItems: 'start' }}
            className="about-grid"
          >
            {/* LEFT: text + stats */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.65rem)', fontWeight: 600, lineHeight: '1.4', marginBottom: '1.5rem' }}>
                  Motivated Computer Science student at{' '}
                  <span className="text-gradient">SRM Institute of Science and Technology</span>{' '}
                  with strong foundations in AI and Full Stack Development.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  Passionate about solving real-world problems through innovation and intelligent systems. I specialize in bridging the gap between sophisticated AI models and user-centric web applications.
                </p>
              </motion.div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.2rem', marginTop: '2.5rem' }}>
                {[
                  { value: '9.46', label: 'CURRENT CGPA' },
                  { value: 'Chennai', label: 'LOCATION' },
                ].map(({ value, label }, i) => (
                  <motion.div
                    key={label}
                    className="glass"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(59,130,246,0.2)' }}
                    style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}
                  >
                    <h3 style={{
                      fontSize: 'clamp(1.4rem, 4vw, 1.9rem)',
                      wordBreak: 'break-word',
                      background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>{value}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', letterSpacing: '1px', marginTop: '4px' }}>{label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: Quick Info Card */}
            <motion.div
              className="glass"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ padding: '30px', borderRadius: '24px', position: 'sticky', top: '100px' }}
            >
              <h4 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--primary)' }}>⚡</span> Quick Info
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                {[
                  { label: 'Degree', value: 'B.Tech CSE' },
                  { label: 'University', value: 'SRM IST' },
                  { label: 'Focus', value: 'AI/ML' },
                ].map(({ label, value }) => (
                  <li
                    key={label}
                    style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}
                  >
                    <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                    <span style={{ fontWeight: 600 }}>{value}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '1.5rem' }}>
                <div style={{ height: '2px', width: '100%', background: 'var(--glass-border)', borderRadius: '1px' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--secondary))', borderRadius: '1px' }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
