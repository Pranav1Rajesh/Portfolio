import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem' }}>Contact</h2>
          <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3rem' }}>Let's Connect</h3>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <motion.a 
              whileHover={{ y: -5, color: 'var(--primary)' }}
              href="mailto:pranav.rajesh@gmail.com"
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem', borderRadius: '24px', minWidth: '160px' }}
            >
              <Mail size={32} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>Email</span>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, color: 'var(--primary)' }}
              href="https://github.com/Pranav1Rajesh"
              target="_blank"
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem', borderRadius: '24px', minWidth: '160px' }}
            >
              <Github size={32} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>GitHub</span>
            </motion.a>
            
            <motion.a 
              whileHover={{ y: -5, color: 'var(--primary)' }}
              href="https://www.linkedin.com/in/pranav-rajesh-822aa32a4/"
              target="_blank"
              className="glass"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', padding: '2rem', borderRadius: '24px', minWidth: '160px' }}
            >
              <Linkedin size={32} />
              <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>LinkedIn</span>
            </motion.a>
          </div>
          
          <p style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Pranav Rajesh. Built with Passion & Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
