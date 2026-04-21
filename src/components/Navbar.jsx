import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div style={{ 
      position: 'fixed', 
      top: scrolled ? '20px' : '40px', 
      left: 0, 
      right: 0, 
      display: 'flex', 
      justifyContent: 'center', 
      zIndex: 1000,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          background: 'rgba(15, 23, 42, 0.3)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '100px',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)' : 'none'
        }}
      >
        <div style={{ display: 'flex', gap: '4px' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name}
                href={link.href}
                style={{
                  position: 'relative',
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px'
                }}
                className="nav-item"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '100px',
                      zIndex: -1
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {link.name.toUpperCase()}
              </a>
            );
          })}
        </div>
      </motion.nav>

      <style>{`
        .nav-item:hover {
          color: var(--text-main) !important;
        }
        @media (max-width: 768px) {
          .nav-item {
            padding: 8px 12px !important;
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
