import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Academic</h2>
          <h3 style={{ fontSize: '2.5rem' }}>Education</h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Undergraduate */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass" 
            style={{ padding: '2.5rem', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '15px', 
                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap size={30} color="white" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>Sri Ramaswamy Memorial Institute of Science and Technology</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.8rem' }}>Ramapuram, Chennai | B.Tech in Computer Science and Engineering</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} /> 2023 – Present
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)' }}>CGPA: 9.48 (6th semester)</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Schooling 12th */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass" 
            style={{ padding: '2.5rem', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '15px', 
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap size={30} color="var(--text-muted)" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>Maharishi Vidya Mandir Senior Secondary School</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.8rem' }}>Chetpet, Chennai | Class XII</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} /> 2022 – 2023
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Percentage: 85.6%</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Schooling 10th */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass" 
            style={{ padding: '2.5rem', borderRadius: '24px' }}
          >
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '15px', 
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <GraduationCap size={30} color="var(--text-muted)" />
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>Maharishi Vidya Mandir Senior Secondary School</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.8rem' }}>Chetpet, Chennai | Class X</p>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                    <Calendar size={14} /> 2020 – 2021
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--primary)' }}>Percentage: 92.2%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
