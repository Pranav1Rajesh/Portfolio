import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Globe, Cpu, Layers } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: 'Languages',
      icon: <Code2 className="text-gradient" />,
      skills: ['Python', 'Java', 'C/C++', 'JavaScript'],
    },
    {
      title: 'Technologies',
      icon: <Layers className="text-gradient" />,
      skills: ['React.js', 'Node.js', 'MongoDB', 'MySQL', 'Django', 'PostgreSQL'],
    },
    {
      title: 'Domains',
      icon: <Brain className="text-gradient" />,
      skills: ['Artificial Intelligence', 'Machine Learning', 'LLM', 'Web Development'],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(2, 6, 23, 0.5)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Expertise</h2>
          <h3 style={{ fontSize: '2.5rem' }}>Skills & <span className="text-gradient">Abilities</span></h3>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}
        >
          {skillGroups.map((group, idx) => (
            <motion.div 
              key={idx}
              variants={item}
              className="glass glass-hover"
              style={{ padding: '2rem', borderRadius: '24px', transition: 'all 0.3s ease' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
                  {group.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem' }}>{group.title}</h4>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.15)', borderColor: 'var(--primary)' }}
                    style={{ 
                      padding: '8px 16px', 
                      borderRadius: '10px', 
                      fontSize: '0.9rem', 
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      cursor: 'default'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
