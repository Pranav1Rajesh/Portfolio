import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'FinWise',
    description: 'AI Finance Assistant using Random Forest for personalized financial planning and analysis.',
    image: '/projects/finwise.png',
    tech: ['React', 'Node.js', 'MongoDB', 'ML'],
    github: 'https://github.com/Pranav1Rajesh/finwise-web-app',
  },
  {
    title: 'MediSentry',
    description: 'AI Prescription Analysis platform ensuring safety through automated medical report processing.',
    image: '/projects/medisentry.png',
    tech: ['React Native', 'Django', 'PostgreSQL', 'AI'],
    github: 'https://github.com/Pranav1Rajesh/MediSentry',
  },
  {
    title: 'AQI Monitor',
    description: 'Smart real-time AQI analytics system providing localized environmental insights.',
    image: '/projects/aqi.png',
    tech: ['IoT', 'Analytics', 'React', 'Live Data'],
    github: 'https://github.com/Pranav1Rajesh/AQI-Monitor',
    // ⬇️ GIVE YOUR DEPLOYED AQI MONITOR LINK HERE:
    live: 'https://your-aqi-monitor-link.com',
  },
  {
    title: 'Zombie Warfare 3D',
    description: 'Interactive and immersive zombie survival game built with modern web technologies.',
    image: '/projects/zombie.png',
    tech: ['React.js', '3D Engine', 'Game Dev'],
    github: 'https://github.com/Pranav1Rajesh/Basic-Shooting-Game',
    // ⬇️ GIVE YOUR DEPLOYED ZOMBIE WARFARE 3D LINK HERE:
    live: 'https://your-zombie-warfare-link.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <style>{`
        .project-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 56px rgba(0,0,0,0.4), 0 0 32px var(--primary-glow);
        }
        .project-img {
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-img {
          transform: scale(1.07);
        }
        .github-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 9px 18px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          background: var(--chip-bg, rgba(59,130,246,0.12));
          border: 1px solid var(--glass-border);
          color: var(--primary);
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .github-btn:hover {
          background: var(--primary);
          border-color: var(--primary);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px var(--primary-glow);
        }
        .live-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 9px 18px;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: #ffffff !important;
          border: none;
          box-shadow: 0 4px 14px var(--primary-glow);
          transition: transform 0.2s ease, box-shadow 0.25s ease, filter 0.2s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .live-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px var(--primary-glow);
          filter: brightness(1.1);
          color: #ffffff !important;
        }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Showcase</h2>
          <h3 style={{ fontSize: '2.5rem' }}>Featured <span className="text-gradient">Projects</span></h3>
        </div>

        <div
          className="projects-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '2.5rem' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              {/* Project image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h4 style={{ fontSize: '1.4rem', marginBottom: '0.7rem' }}>{project.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.4rem', flex: 1, lineHeight: '1.6' }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.6rem' }}>
                  {project.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem', fontWeight: 600,
                        color: 'var(--accent)',
                        background: 'rgba(34,211,238,0.1)',
                        padding: '4px 10px', borderRadius: '6px'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons: GitHub + optional Deployed Live Website button */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <Github size={16} /> View on GitHub
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn"
                      title={`Visit ${project.title} deployed website`}
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
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
