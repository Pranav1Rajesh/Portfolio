import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Prevent scroll listener from overriding activeSection while smooth-scrolling to clicked section
      if (isClickScrolling.current) return;

      // Check if user is at the top of the page (Home)
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Check if user has scrolled near the bottom of the page (Contact)
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120;
      if (isAtBottom) {
        setActiveSection('contact');
        return;
      }

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);

    setActiveSection(targetId);
    isClickScrolling.current = true;
    if (clickScrollTimeout.current) clearTimeout(clickScrollTimeout.current);

    clickScrollTimeout.current = setTimeout(() => {
      isClickScrolling.current = false;
    }, 850);

    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const navOffset = 85;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '100px',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)' : 'none'
        }}
      >
        <div style={{ display: 'flex', gap: '4px' }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  position: 'relative',
                  padding: '10px 18px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  transition: 'color 0.3s ease',
                  letterSpacing: '0.5px',
                  cursor: 'pointer'
                }}
                className="nav-item"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255, 255, 255, 0.14)',
                      border: '1px solid rgba(255, 255, 255, 0.24)',
                      borderRadius: '100px',
                      boxShadow: '0 2px 14px rgba(255, 255, 255, 0.12)',
                      zIndex: -1
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
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
            padding: 6px 9px !important;
            font-size: 0.62rem !important;
          }
          nav {
            max-width: 95vw;
            overflow-x: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          nav::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
