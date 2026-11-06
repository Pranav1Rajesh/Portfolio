import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  // Sync theme with <html> attribute & localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

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
      top: scrolled ? '18px' : '36px', 
      left: 0, 
      right: 0, 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      gap: '12px',
      zIndex: 1000,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none',
      padding: '0 12px'
    }}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          pointerEvents: 'auto',
          background: 'var(--nav-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          borderRadius: '100px',
          padding: '6px',
          display: 'flex',
          alignItems: 'center',
          boxShadow: scrolled ? 'var(--nav-shadow-scrolled)' : 'var(--nav-shadow)',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
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
                  color: isActive ? 'var(--nav-active-text)' : 'var(--text-muted)',
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
                      background: 'var(--nav-active-bg)',
                      border: '1px solid var(--nav-active-border)',
                      borderRadius: '100px',
                      boxShadow: '0 2px 14px var(--primary-glow)',
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

      {/* ── Sliding Theme Toggle on Right Side of Navbar ── */}
      <motion.button
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="theme-toggle-slider"
        style={{
          pointerEvents: 'auto',
          position: 'relative',
          width: '64px',
          height: '42px',
          borderRadius: '100px',
          background: 'var(--toggle-track-bg)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid var(--glass-border)',
          padding: '4px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: scrolled ? 'var(--nav-shadow-scrolled)' : 'var(--toggle-shadow)',
          outline: 'none',
          transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          flexShrink: 0
        }}
      >
        {/* Track icons */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          pointerEvents: 'none'
        }}>
          <Moon
            size={13}
            style={{
              color: theme === 'dark' ? 'transparent' : 'var(--text-muted)',
              transition: 'color 0.3s ease'
            }}
          />
          <Sun
            size={13}
            style={{
              color: theme === 'light' ? 'transparent' : 'var(--text-muted)',
              transition: 'color 0.3s ease'
            }}
          />
        </div>

        {/* Sliding thumb knob */}
        <motion.div
          animate={{ x: theme === 'dark' ? 0 : 24 }}
          transition={{ type: "spring", stiffness: 500, damping: 28 }}
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            background: theme === 'dark'
              ? 'linear-gradient(135deg, #1e293b, #0f172a)'
              : 'linear-gradient(135deg, #ffffff, #fffbeb)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: theme === 'dark'
              ? '0 2px 8px rgba(0, 0, 0, 0.6), inset 0 0 0 1px rgba(255, 255, 255, 0.15)'
              : '0 2px 10px rgba(245, 158, 11, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.9)',
            zIndex: 1
          }}
        >
          {theme === 'dark' ? (
            <Moon size={15} style={{ color: '#38bdf8', filter: 'drop-shadow(0 0 4px rgba(56, 189, 248, 0.6))' }} />
          ) : (
            <Sun size={15} style={{ color: '#f59e0b', filter: 'drop-shadow(0 0 4px rgba(245, 158, 11, 0.8))' }} />
          )}
        </motion.div>
      </motion.button>

      <style>{`
        .nav-item:hover {
          color: var(--text-main) !important;
        }
        .theme-toggle-slider:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .nav-item {
            padding: 6px 8px !important;
            font-size: 0.62rem !important;
          }
          nav {
            max-width: calc(100vw - 94px);
            overflow-x: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          nav::-webkit-scrollbar {
            display: none;
          }
          .theme-toggle-slider {
            width: 56px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
