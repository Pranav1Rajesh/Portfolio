import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'FinWise',
      description: 'AI Finance Assistant using Random Forest for personalized financial planning and analysis.',
      image: '/projects/finwise.png',
      tech: ['React', 'Node.js', 'MongoDB', 'ML'],
      github: '#',
      demo: '#'
    },
    {
      title: 'MediSentry',
      description: 'AI Prescription Analysis platform ensuring safety through automated medical report processing.',
      image: '/projects/medisentry.png',
      tech: ['React Native', 'Django', 'PostgreSQL', 'AI'],
      github: '#',
      demo: '#'
    },
    {
      title: 'AQI Monitor',
      description: 'Smart real-time AQI analytics system providing localized environmental insights.',
      image: '/projects/aqi.png',
      tech: ['IoT', 'Analytics', 'React', 'Live Data'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Zombie Warfare 3D',
      description: 'Interactive and immersive zombie survival game built with modern web technologies.',
      image: '/projects/zombie.png',
      tech: ['React.js', '3D Engine', 'Game Dev'],
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Showcase</h2>
          <h3 style={{ fontSize: '2.5rem' }}>Featured <span className="text-gradient">Projects</span></h3>
        </div>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns:  'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '2.5rem' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover"
              style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                  onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  display: 'flex', 
                  gap: '0.5rem' 
                }}>
                  <a href={project.github} className="glass" style={{ padding: '8px', borderRadius: '50%', color: 'white' }}>
                    <Github size={18} />
                  </a>
                  <a href={project.demo} className="glass" style={{ padding: '8px', borderRadius: '50%', color: 'white' }}>
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>{project.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', background: 'rgba(34, 211, 238, 0.1)', padding: '4px 10px', borderRadius: '6px' }}>
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
