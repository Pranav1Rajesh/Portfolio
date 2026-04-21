import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Lightbulb } from 'lucide-react';

const Achievements = () => {
  const stats = [
    { label: 'Hackathon Semi Finalist', subtitle: 'Smart India Hackathon', icon: <Trophy size={24} color="#f59e0b" /> },
    { label: 'Best Paper Award', subtitle: 'MediSentry Research', icon: <Award size={24} color="#3b82f6" /> },
    { label: 'AI Internship', subtitle: 'IITM Pravartak', icon: <Star size={24} color="#a855f7" /> },
    { label: 'Quiz Runner Up', subtitle: 'Multiple Achievements', icon: <Lightbulb size={24} color="#22d3ee" /> },
  ];

  return (
    <section id="achievements" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass"
              style={{ padding: '2rem', borderRadius: '24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ 
                position: 'absolute', 
                top: '-10px', 
                right: '-10px', 
                width: '100px', 
                height: '100px', 
                background: 'var(--primary-glow)', 
                filter: 'blur(50px)', 
                opacity: 0.2 
              }} />
              
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: 'rgba(255,255,255,0.05)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1.5rem auto' 
              }}>
                {stat.icon}
              </div>
              
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{stat.label}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{stat.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
