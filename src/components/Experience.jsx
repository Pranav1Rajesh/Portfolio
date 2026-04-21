import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'AI Intern',
      company: 'IITM Pravartak Technologies Foundation',
      location: 'Chennai, Tamil Nadu',
      period: 'June 2025 – July 2025',
      bullets: [
        'Worked on a LLM project for Tamil language titled ‘SANSAD’',
        'Learned about BERT and Transformer layers architecture',
        'Worked in web scraping and tokenizing model for user prompts in Tamil language'
      ],
      tags: ['LLM', 'BERT', 'Transformers', 'Web Scraping', 'Tamil NLP']
    },
    {
      title: 'Web development Intern',
      company: 'Indiatourism',
      location: 'Chennai, Tamil Nadu',
      period: 'December 2024 – January 2025',
      bullets: [
        'Tasked with creating a web application utilizing HTML, CSS, and JavaScript integrated with cloud storage.'
      ],
      tags: ['HTML', 'CSS', 'JavaScript', 'Cloud Storage']
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1rem' }}>Journey</h2>
          <h3 style={{ fontSize: '2.5rem' }}>Work <span className="text-gradient">Experience</span></h3>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '20px', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: 'linear-gradient(to bottom, var(--primary), var(--secondary), transparent)',
            opacity: 0.3
          }} />

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ position: 'relative', paddingLeft: '60px', marginBottom: '4rem' }}
            >
              {/* Timeline Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '11px', 
                top: '5px', 
                width: '20px', 
                height: '20px', 
                borderRadius: '50%', 
                background: 'var(--bg-dark)',
                border: '3px solid var(--primary)',
                zIndex: 1,
                boxShadow: '0 0 15px var(--primary-glow)'
              }} />

              <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.5rem' }}>{exp.title}</h4>
                    <p style={{ color: 'var(--secondary)', fontWeight: 600 }}>{exp.company}</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>{exp.location}</p>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', background: 'rgba(59, 130, 246, 0.1)', padding: '4px 12px', borderRadius: '20px' }}>
                    {exp.period}
                  </span>
                </div>
                
                <ul style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', listStyle: 'none', paddingLeft: 0 }}>
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {exp.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.7rem', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>
                      {tag}
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

export default Experience;
